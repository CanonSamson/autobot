// Importing necessary icons from react-icons/all module
import { FiCamera, FiDownloadCloud } from "react-icons/fi";

// Functional component AiSpace
const AiSpace = ({ gif, obj }) => {

  return (
    // Grid container with two columns, gap of 5, padding of 5 and margin of 5
    <div className="w-full h-screen grid  gap-5 px-5 my-5">
      {/* First column */}
      <div className="rounded shadow-xl relative bg-white/40 bg-black w-[400px] mx-auto h-[400px]">
        {/* Point Cloud label at the top-right corner */}
        <img className="w-[400px] mx-auto h-[400px] object-cover" src={gif} alt="" />

        <p className="bg-[#D9D9D9] p-[4px] text-center w-[80px] text-gray absolute top-0 right-0 text-[10px] rounded">POINT GIF</p>

        <div className="absolute bottom-[-50px] my-2 w-full fle justify-center items-center m-auto">
          <div className="m-auto bg-white flex w-[150px] text-gray text-[12px] rounded-full justify-between">
            {/* Snap button */}
            <div className="flex items-center gap-2 py-2 px-2">
              <p>OBJ FILE</p>
            </div>
            {/* Export button */}
            <a href={obj} className="bg-primary text-white flex items-center gap-2 rounded-full px-2">
              <p>Export</p>
              <FiDownloadCloud size={16} />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

// Exporting AiSpace component
export default AiSpace;