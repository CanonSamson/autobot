// Import necessary components and assets
import NavBar from "../components/NavBar";
import heroImage from "../assets/herosvg.png"
import blur from "../assets/b.svg"
import { FiChevronRight } from "react-icons/fi";
import AiSpace from "./AiSpace";
import { motion } from "framer-motion"
import { useState } from "react"
import {AiOutlineLoading3Quarters} from "react-icons/ai"

const LandingPage = () => {
  // Define animation object
  const Anime = {
    offS: { y: -100, opacity: 0 }, onS: { y: 0, opacity: 100 },
    transition: { duration: 5 }
  }

  const [userInput, setUserInput] = useState('');
  const [output, setOutput] = useState({});
  const [called, setCalled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const maxRetries = 3;
  let retries = 0;



  const generatePrompt = async () => {
    setCalled(false)
    setLoading(true)
    try {
      console.log("connecting...");
      const response = await fetch("http://inaam.pythonanywhere.com/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: userInput }),
      });
      setCalled(true)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Handle the response data here
      const responseData = await response.json();
      console.log(responseData);
      setOutput(responseData)
      setLoading(false)

    } catch (error) {
      if (retries < maxRetries) {
        // Retry the request after a delay
        setTimeout(() => {
          retries++;
          generatePrompt();
          setLoading(false)

        }, 200000); // Adjust the delay as needed
      } else {
        setLoading(false)

        // Handle the error after max retries
        console.error("Max retries exceeded:", error);
      }
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("your_api_endpoint");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // Process the data

    } catch (error) {
      if (retries < maxRetries) {
        // Retry the request after a delay
        setTimeout(() => {
          retries++;
          fetchData();
        }, 1000); // Adjust the delay as needed
      } else {
        // Handle the error after max retries
        console.error("Max retries exceeded:", error);
      }
    }
  };




  // Return JSX to render the landing page
  return (
    <div className=" bg-gray min-h-screen text-white   pt-[60px]  text-[14px]">
      {/* Render the navigation bar component */}
      <NavBar />

      {/* Render the header section */}
      <header className=" flex justify-around items-center gap-10 px-10 relative z-20" >
        {/* Render the left side of the header section */}
        <motion.div initial={"offS"} whileInView={"onS"} viewport={{ once: false, amount: .5 }} transition={{ staggerChildren: .12 }} className=" flex flex-col">
          <motion.h1 variants={Anime} className=" indent-0 tracking-tighter text-6xl font-black ">AI-powered Text To
            <strong className=" text-primary"> 3D</strong>, All On The Web.</motion.h1>
          <motion.p variants={Anime}>Experience the future of content creation with our AI-powered Text To 3D solution, all accessible directly through your web browser. Transform plain text into stunning 3D visuals, animations, and immersive experiences effortlessly.  </motion.p>
          <motion.div variants={Anime} action="" className=" mt-5 flex bg-white text-gray  justify-between rounded-full p-2 ">
            <input type="text"
              placeholder="Start Typing Any Word"
              value={userInput}
              disabled={loading ? true : false}
              onChange={(e) => setUserInput(e.target.value)}
              className="rounded-l-full pl-5 flex-1 focus:outline-none text-[14px]" />
            <button onClick={generatePrompt} className=" bg-primary text-white rounded-full w-[120px] 
                        flex items-center justify-between p-2 ">
              Generate
              {
                !loading ? <FiChevronRight /> : <AiOutlineLoading3Quarters className=" animate-spin" />
              }
            </button>
          </motion.div>
        </motion.div>

        {/* Render the right side of the header section */}
        <motion.div
          className=" w-full"
          initial={"offS"} whileInView={"onS"} viewport={{ once: false, amount: .5 }} transition={{ staggerChildren: .12 }} >
          <motion.img variants={Anime} src={heroImage} alt="" />
        </motion.div>
      </header>

      {/* Render the blurred background image */}
      <div className=" fixed w-full h-screen top-0 right-0 z-0">
        <img className=" fixed  h-screen bottom-[-300px]" src={blur} alt="" />
      </div>

      {/* Render the AI space component */}
      {called && <AiSpace gif={output.gif_url} obj={output.obj_url} />}
    </div>
  );
}

export default LandingPage;
