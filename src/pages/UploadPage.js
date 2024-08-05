// src/pages/UploadPage.js
import React from 'react';
// import GoogleLoginButton from '../components/GoogleLoginButton';
import FileUpload from '../components/FileUpload';

function UploadPage() {
  const handleLoginSuccess = (response) => {
    console.log('Login Success', response);
    // Handle login success, store token, etc.
  };

  const handleLoginFailure = (response) => {
    console.error('Login Failed', response);
  };

  return (
    <div>
      <h1>Upload PDF</h1>
      {/* <GoogleLoginButton onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} /> */}
      <FileUpload />
    </div>
  );
}

export default UploadPage;
