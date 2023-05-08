import NavBar from "../components/NavBar";
import blur from "../assets/b.svg"
import herobg from "../assets/herobg.png"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";




const HomePage = () => {


    const Anime = {
        offS: { y: -100, opacity: 0 }, onS: { y: 0, opacity: 100 },
        transition: { duration: 5 }
    }

    return (
        <div className="  text-white  ">
            <img src={herobg} className="  w-full h-screen  object-cover absolute" alt="" />
            <NavBar />

            <header className=" flex    min-h-screen justify-center items-center gap-10 px-10 relative z-20" >
                <motion.div initial={"offS"} whileInView={"onS"} viewport={{ once: false, amount: .5 }} transition={{ staggerChildren: .12 }} className=" flex flex-col w-[70%] ">
                    <motion.h1 variants={Anime}
                        className=" indent-0 tracking-tighter text-9xl font-black  mx-auto text-center"
                    > CAD-GPT <strong className=" text-primary"></strong></motion.h1>
                    <motion.p variants={Anime}
                        className=" text-center px-[200px] text-4xl mb-5">AI-Powered Text To <strong className="text-primary">3D</strong>, All On The Web. </motion.p>

                    <motion.div initial={"offS"} whileInView={"onS"} viewport={{ once: false, amount: .5 }} transition={{ staggerChildren: .12 }}
                        className=" flex gap-4 items-center justify-center" >
                        <Link to='/waitlist'>
                            <motion.button variants={Anime}  className=" hover:scale-95 duration-200 border-2 shadow shadow-primary border-primary text-white rounded-full w-[200px] text-center text-[16px] py-5 ">
                                Join Wait List
                            </motion.button>
                        </Link>
         

                    </motion.div>
                </motion.div>

            </header >
            <div className=" fixed w-full h-screen top-0 right-0 z-0">
                <motion.img initial={{ x: -10}} animate={{ x: 0 }} transition={{repeat: Infinity, duration: 5}}  className=" fixed  h-screen bottom-[-300px]" src={blur} alt="" />
            </div>
         
        </div >
    );
}

export default HomePage;