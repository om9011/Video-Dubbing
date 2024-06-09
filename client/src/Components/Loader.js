import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-80 bg-gray-800">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
      <span className="ml-4 text-lg font-semibold text-white">Uploading...</span>
    </div>
  );
};

export default Loader;
