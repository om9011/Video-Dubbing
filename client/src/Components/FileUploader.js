import React, { useState } from "react";
import uploadIcon from "../Assets/upload.png";
import Loader from "./Loader";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert("Please select a video file.");
        return;
      }
      setUploading(true);

      const formData = new FormData();
      formData.append("video", selectedFile);

      // Update the URL to match your Flask server's endpoint
      const response = await fetch(
        `http://localhost:5000/upload/${selectedLanguage}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Video uploaded successfully.");
        setUploading(false);
      } else {
        alert("Failed to upload video.");
      }
    } catch (error) {
      console.error("Error uploading video:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md m-4 border w-full max-w-4xl mx-auto">
      {uploading && <Loader />}
      <div className="mb-4">
        {/* File Input */}
        <div className="relative rounded-md flex flex-col justify-center items-center">
          <img src={uploadIcon} alt="Upload Icon" className="h-56 w-56 mb-4" />
          <label className="font-bold md:font-semibold text-xl">Click Here to Upload Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {/* Language Selection */}
      <div className="mb-4 flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex flex-col items-center gap-3 w-full">
            <label className="font-bold md:font-semibold">Default Audio:</label>
            <select
              value="English"
              className="border border-gray-300 p-2 rounded-md w-full md:w-80 font-semibold"
              readOnly
            >
              <option className="font-bold md:font-semibold" value="English">English</option>
            </select>
          </div>
          <div className="flex flex-col items-center gap-3 w-full">
            <label className="font-semibold">Translate Audio To:</label>
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="border border-gray-300 p-2 rounded-md w-full md:w-80 font-semibold"
            >
              <option className="font-semibold" value="">Select Language</option>
              <option className="font-semibold" value="hindi">Hindi</option>
              <option className="font-semibold" value="bengali">Bengali</option>
              <option className="font-semibold" value="tamil">Tamil</option>
              <option className="font-semibold" value="telugu">Telugu</option>
              <option className="font-semibold" value="gujarati">Gujarati</option>
            </select>
          </div>
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="bg-primary font-semibold text-white px-4 py-2 rounded-md w-full md:w-80 hover:bg-text hover:text-black duration-200"
          disabled={uploading} // Disable button while uploading
        >
          {uploading ? "Uploading..." : "Dub Video"}
        </button>
      </div>

      {/* Loader (Conditional Rendering) */}
    </div>
  );
};

export default FileUploader;