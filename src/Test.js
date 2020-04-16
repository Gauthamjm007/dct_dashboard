import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { connect } from "react-redux";
import { setStudent } from "./actions/studentAction";
const csv = require("csvtojson");

function Test(props) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const fileAsBinaryString = reader.result;
        csv({
          noheader: true,
          output: "json",
        })
          .fromString(fileAsBinaryString)
          .then((csvRows) => {
            const toJson = [];
            csvRows.forEach((aCsvRow, i) => {
              if (i !== 0) {
                const builtObject = {};

                Object.keys(aCsvRow).forEach((aKey) => {
                  const valueToAddInBuiltObject = aCsvRow[aKey];
                  const keyToAddInBuiltObject = csvRows[0][aKey];
                  builtObject[keyToAddInBuiltObject] = valueToAddInBuiltObject;
                });

                toJson.push(builtObject);
              }
            });

            props.dispatch(
              setStudent(
                JSON.parse(JSON.stringify(toJson).replace(/\s(?=\w+":)/g, ""))
              )
            );
            console.log(
              JSON.parse(JSON.stringify(toJson).replace(/\s(?=\w+":)/g, ""))
            );
          });
      };
      reader.readAsBinaryString(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
}

export default connect()(Test);
