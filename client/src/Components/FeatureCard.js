import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

const OptionCard = (props) => {
  const downloadFile = async (url, fileName, fileType) => {
    try {
      const response = await axios.get(url, { responseType: "blob" });

      if (response.status === 200) {
        const blob = new Blob([response.data], { type: fileType });
        const fileUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = fileUrl;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(fileUrl);
      } else {
        alert(`Failed to download ${fileName}.`);
      }
    } catch (error) {
      console.error(`Error downloading ${fileName}:`, error);
    }
  };

  const handleDownload = () => {
    switch (props.title) {
      case "Video to Audio":
        downloadFile(`http://localhost:5000/audio`, "audio.mp3", "audio/mpeg");
        break;
      case "Video Subtitles":
        downloadFile(
          `http://localhost:5000/subtitle`,
          "English Subtitles.txt",
          "text/plain"
        );
        break;
      case "Translated Subtitles":
        downloadFile(
          `http://localhost:5000/trans_sub`,
          "Translated Subtitles.txt",
          "text/plain"
        );
        break;
      case "Dub a Video":
        downloadFile(
          `http://localhost:5000/dub`,
          "dubbed_video.mp4",
          "video/mp4"
        );
        break;
      default:
        alert("Invalid option.");
    }
  };

  return (
    <div className="bg-white border-2 rounded-lg shadow-sm md:shadow-md p-4 md:mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-sm mr-3"
            src={props.src}
            alt="Option Icon"
          />
          <h2 className="text-sm md:text-lg font-semibold">{props.title}</h2>
        </div>
        <button
          onClick={handleDownload}
          className="text-sm md:text-lg bg-primary hover:bg-text hover:text-black duration-200 text-white px-4 py-2 rounded-md"
        >
          Download
        </button>
      </div>
    </div>
  );
};

OptionCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default OptionCard;
