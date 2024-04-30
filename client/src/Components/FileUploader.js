import React, { useState,useEffect } from "react";
import uploadIcon from '../Assets/upload.png';
import Typewriter from 'typewriter-effect/dist/core';
import Loader from "./Loader";


const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [uploading, setUploading] = useState(false); 
  
  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['Welcome to Dubwizz','Dubwizz : The Video Dubbing Platform'],
      autoStart: true,
      delay: 75,
    });
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert('Please select a video file.');
        return;
      }

      // Set uploading state to true to show loader
      setUploading(true);

      const formData = new FormData();
      formData.append('video', selectedFile);

      // Update the URL to match your Flask server's endpoint
      const response = await fetch(`http://localhost:5000/upload/${selectedLanguage}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Video uploaded successfully.');
        setUploading(false);
      } else {
        alert('Failed to upload video.');
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    } finally {
      // Reset uploading state after upload completes (whether success or failure)
      setUploading(false);
    }
  };

  return (
    <div className="bg-background p-4 rounded-md shadow-md m-4 border">
      {uploading && (
        <Loader />
      )}
      <h4 className="my-8 text-4xl font-bold text-primary" id="typewriter"> </h4>
      <div className="grid grid-cols-2 gap-4 items-center mb-4">
        {/* File Input */}
        <div className="h-96 border border-gray-300 rounded-md flex flex-col justify-center items-center">
          <img src={uploadIcon} alt="Upload Icon" className="h-56 w-56 mr-2" />
          <lebel>Click Here to Upload Image</lebel>
          <input
            type="file"
            onChange={handleFileChange}
            className="p-2 w-full h-full"
          />
        </div>

        {/* Video Preview */}
        <div className="border border-gray-300 p-2 rounded-md h-96">
          {selectedFile ? (
            <video
              controls
              className="w-full h-full"
              style={{ maxWidth: "100%" }}
            >
              <source
                src={URL.createObjectURL(selectedFile)}
                type="video/mp4"
                autoPlay
              />
              Your browser does not support the video tag.
            </video>
          ):
          <h3>No Preview Available</h3>}
        </div>
      </div>

      {/* Language Selection */}
      <div className="mb-4 flex flex-col justify-center items-center gap-4">
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="border border-gray-300 p-2 rounded-md w-80"
        >
          <option value="">Select Language</option>
          <option value="hindi">Hindi</option>
          <option value="bengali">Bengali</option>
          <option value="tamil">Tamil</option>
          <option value="telugu">Telugu</option>
          <option value="gujarati">Gujarati</option>
        </select>
        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="bg-primary text-white px-4 py-2 rounded-md w-80"
          disabled={uploading} // Disable button while uploading
        >
          {uploading ? 'Uploading...' : 'Dub Video'}
        </button>
      </div>

      {/* Loader (Conditional Rendering) */}
      
    </div>
  );
};

export default FileUploader;
