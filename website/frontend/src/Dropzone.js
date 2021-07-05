import React from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop, accept }) => {
    // Initializing useDropzone hooks with options
    const {acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept
    });
    const files = acceptedFiles.map(file => (
          <li key={file.path}>
            {file.path} 
          </li>
        ));
    return (
        <div {...getRootProps()}>
          <input className="dropzone-input" {...getInputProps()} />
          <div className="text-center">
            {isDragActive ? (
              <p className="dropzone-content">Release to drop the files here</p>
            ) : (
              <h3 className="dropzone-content">
              <br/>
                Drag and drop here, or click to select you audio file!
              </h3>
              
            )}
          </div>
          <p>{files}</p>
        </div>
      );
    };
    
    export default Dropzone;
  