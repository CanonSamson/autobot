// Importing necessary icons from react-icons/all module
import { FiCamera, FiDownloadCloud } from "react-icons/all";

// Functional component AiSpace
const AiSpace = () => {
  return (
    // Grid container with two columns, gap of 5, padding of 5 and margin of 5
    <div className="w-full h-screen grid grid-cols-2 gap-5 px-5 my-5">
      {/* First column */}
      <div className="rounded shadow-xl relative bg-white/40 w-full h-[400px]">
        {/* Point Cloud label at the top-right corner */}
        <p className="bg-[#D9D9D9] p-[4px] text-center w-[80px] text-gray absolute top-0 right-0 text-[10px] rounded">POINT CLOUD</p>
        {/* Snap and Export buttons at the bottom */}
        <div className="absolute bottom-[-50px] my-2 w-full fle justify-center items-center m-auto">
          <div className="m-auto bg-white flex w-[150px] text-gray text-[12px] rounded-full justify-between">
            {/* Snap button */}
            <div className="flex items-center gap-2 py-2 px-2">
              <FiCamera size={16} />
              <p>Snap</p>
            </div>
            {/* Export button */}
            <div className="bg-primary text-white flex items-center gap-2 rounded-full px-2">
              <p>Export</p>
              <FiDownloadCloud size={16} />
            </div>
          </div>
        </div>
      </div>
      {/* Second column */}
      <div className="rounded shadow-xl relative bg-white/40 w-full h-[400px]">
        {/* 3D Model label at the top-right corner */}
        <p className="bg-[#D9D9D9] p-[4px] text-center w-[70px] text-gray absolute top-0 right-0 text-[10px] rounded">3D MODEL</p>
        {/* Snap and Export buttons at the bottom */}
        <div className="absolute bottom-[-50px] my-2 w-full fle justify-center items-center m-auto">
          <div className="m-auto bg-white flex w-[150px] text-gray text-[12px] rounded-full justify-between">
            {/* Snap button */}
            <div className="flex items-center gap-2 py-2 px-2">
              <FiCamera size={16} />
              <p>Snap</p>
            </div>
            {/* Export button */}
            <div className="bg-primary text-white flex items-center gap-2 rounded-full px-2">
              <p>Export</p>
              <FiDownloadCloud size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting AiSpace component
export default AiSpace;