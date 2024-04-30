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

  OptionCard.propTypes = {
    title: PropTypes.string.isRequired,
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg border-4 border-grey-100 overflow-hidden boxStyle w-full py-6 px-6">
        <img
          className="w-44 h-44 rounded-sm mx-auto my-6"
          src={props.src}
          alt="Play Button"
        />
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-center ">{props.title}</h1>
          <button
            onClick={handleDownload}
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
