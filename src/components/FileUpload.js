// src/components/FileUpload.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@mui/material';
import axios from 'axios';

function FileUpload() {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);
    console.log('File uploaded successfully');

    axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log('File uploaded successfully', response.data);
    })
    .catch(error => {
      console.error('Error uploading file', error);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop a PDF file here, or click to select a file</p>
      <Button variant="contained" color="primary">Upload File</Button>
    </div>
  );
}

export default FileUpload;
