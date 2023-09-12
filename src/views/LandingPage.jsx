// Import necessary components and assets
import NavBar from "../components/NavBar";
import heroImage from "../assets/herosvg.png"
import blur from "../assets/b.svg"
import { FiChevronRight } from "react-icons/fi";
import AiSpace from "./AiSpace";
import { motion } from "framer-motion"

const LandingPage = () => {
    // Define animation object
    const Anime = {
        offS: { y: -100, opacity: 0 }, onS: { y: 0, opacity: 100 },
        transition: { duration: 5 }
    }

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
                    <motion.form variants={Anime} action="" className=" mt-5 flex bg-white text-gray  justify-between rounded-full p-2 ">
                        <input type="text"
                            placeholder="Start Typing Any Word"
                            className="rounded-l-full pl-5 flex-1 focus:outline-none text-[14px]" />
                        <button className=" bg-primary text-white rounded-full w-[120px] 
                        flex items-center justify-between p-2 ">
                            Generate
                            <FiChevronRight />
                        </button>
                    </motion.form>
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
            <AiSpace />
        </div>
    );
}

export default LandingPage;
