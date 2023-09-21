import NavBar from "../components/NavBar";
import blur from "../assets/b.svg"
import herobg from "../assets/herobg.png"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Logo } from "../assets/svg";




const HomePage = () => {
    const [learnmore, setLearnMore] = useState(false)

    const Anime = {
        offS: { y: -100, opacity: 0 }, onS: { y: 0, opacity: 100 },
        transition: { duration: 5 }
    }

    // Render the HTML elements and Framer Motion components
    return (
        <div className="text-white bg-gray relative ">

            {/* Add the hero background image */}
            <img src={herobg} className="w-full  h-screen object-cover absolute" alt="" />

            {/* Add the navigation bar */}
            <NavBar  />

            {/* Add the main header */}
            <header className="flex min-h-screen justify-center items-center gap-10 px-10 relative z-20">
                <motion.div
                    initial={"offS"}
                    whileInView={"onS"}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ staggerChildren: 0.12 }}
                    className="flex flex-col w-[70%]"
                >
                    <motion.h1
                        variants={Anime}
                        className="indent-0 text-4xl tracking-tighter sm:text-9xl font-black mx-auto sm:text-center"
                    >
                        CAD-GPT <strong className="text-primary"></strong>
                    </motion.h1>
                    <motion.p
                        variants={Anime}
                        className="text-center sm:px-[200px] sm:text-4xl mb-5"
                    >
                        AI-Powered Text To <strong className="text-primary">3D</strong>, All On The Web.
                    </motion.p>

                    <motion.div
                        initial={"offS"}
                        whileInView={"onS"}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ staggerChildren: 0.12 }}
                        className="flex gap-4 items-center justify-center"
                    >
                        {/* Add a button to join the waitlist */}
                        <Link to=''>
                            <motion.button
                                onClick={() => setLearnMore(true)}
                                variants={Anime}
                                className="hover:scale-95 duration-200 border-2 shadow shadow-primary text-[12px] border-primary text-white rounded-full w-[150px] sm:w-[200px] text-center sm:text-[16px] py-3 sm:py-5"
                            >
                                Learn More
                            </motion.button>
                        </Link>

                        <Link to='/ai'>
                            <motion.button
                                variants={Anime}
                                className="hover:scale-95 duration-200  text-[12px] bg-primary text-white rounded-full w-[150px] sm:w-[200px] text-center sm:text-[16px] py-3 sm:py-5"
                            >
                                Generate
                            </motion.button>
                        </Link>

                    </motion.div>
                </motion.div>

            </header>

            <div className="fixed w-full h-screen top-0 right-0 z-0">
                <motion.img
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className="fixed h-screen bottom-[-300px]"
                    src={blur}
                    alt=""
                />
            </div>
            {

                learnmore &&
                <div
                    className=" w-full  h-screen z-40  text-black overflow-scroll right-0  fixed top-0 bg-white ">
                  <div onClick={() => setLearnMore(false)} className=" px-4 py-2 mb-10 bg-black/50">
                  <Logo className="w-[24px]" />
                  </div>
                    <CADGPTPage />
                </div>
            }
        </div>
    );

};


const CADGPTPage = () => {
    return (
        <div className=" min-h-screen max-w-[800px] mx-auto p-8">
            <header className="text-center">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome to the CAD-GPT!
                </h1>
                <p className="">
                    Here, you'll discover everything you need to know about our cutting-edge AI-powered tool for 3D modeling from text descriptions.
                </p>
            </header>

            <section className="my-8">
                <h2 className="text-2xl font-semibold mb-4">What is CAD-GPT?</h2>
                <p>
                    CAD-GPT is an innovative AI technology that transforms text descriptions into detailed 3D models. With CAD-GPT, you can bring your creative ideas to life, streamline design processes, and explore new possibilities in 3D modeling.
                </p>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside">
                    <li>
                        <strong>Text-to-3D Conversion:</strong> CAD-GPT excels in converting plain text descriptions into intricate 3D models. Say goodbye to manual 3D modeling and embrace the efficiency of AI-driven design.
                    </li>
                    <li>
                        <strong>Customizable Prompts:</strong> Our platform allows you to provide custom text prompts, giving you precise control over the generated 3D models. Let your creativity flourish.
                    </li>
                    <li>
                        <strong>API Integration:</strong> Developers, rejoice! CAD-GPT offers a seamless API for easy integration into your applications, websites, or services.
                    </li>
                    <li>
                        <strong>Results in Multiple Formats:</strong> CAD-GPT generates 3D models and animations in various formats, including OBJ files and GIF animations. Versatility at your fingertips.
                    </li>
                    <li>
                        <strong>User-Friendly:</strong> Our user-friendly interface makes CAD-GPT accessible to both seasoned professionals and newcomers in the world of 3D design.
                    </li>
                </ul>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-semibold mb-4">How CAD-GPT Works</h2>
                <ol className="list-decimal list-inside">
                    <li>
                        <strong>Provide a Text Prompt:</strong> Simply describe the 3D object or scene you want to create using text.
                    </li>
                    <li>
                        <strong>Generate 3D Models:</strong> CAD-GPT's powerful AI engine takes care of the rest, creating 3D models from your text input.
                    </li>
                    <li>
                        <strong>Explore and Export:</strong> Review and export your 3D models in various formats, ready for your projects.
                    </li>
                </ol>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
                <ul className="list-disc list-inside">
                    <li>
                        <strong>Corporate:</strong> Streamline interior design and construction projects.
                    </li>
                    <li>
                        <strong>Government:</strong> Optimize urban planning and infrastructure development.
                    </li>
                    <li>
                        <strong>Education Industry:</strong> Enhance 3D modeling education and research.
                    </li>
                    <li>
                        <strong>Personal (Freelancers):</strong> Unlock creative possibilities for freelancers and artists.
                    </li>
                </ul>
            </section>

            <section className=" min-h-screen">
                <h3 className="text-2xl font-semibold text-center  mt-10">Our Team</h3>
                <div className=" grid grid-cols-3 max-w-[800px] mx-auto mt-10  gap-5">
                    <div className=" bg-gray-50 flex  justify-cente rounded-xl overflow-hidden  flex-col  items-center gap-5">
                        <img src="https://avatars.githubusercontent.com/u/100407107?v=4" alt="" />
                        <div className="text-center ">
                            <h6 className=" uppercase text-xl">Canon Samson</h6>
                            <span>Fronend Developer</span>
                        </div>
                    </div>

                    <div className=" bg-gray-50 flex  justify-cente rounded-xl overflow-hidden  flex-col  items-center gap-5">
                        <img src="https://cdn.discordapp.com/attachments/1086979670030942278/1154329459416117319/Muhammad_Inaamullah.jpg" alt="" />
                        <div className="text-center ">

                            <h6 className=" uppercase text-xl">Muhammad Inaamullah</h6>
                            <span>ML Engineer</span>
                        </div>
                    </div>
                    <div className=" bg-gray-50 flex  justify-cente rounded-xl overflow-hidden flex-col  items-center gap-5">
                        <img src="https://cdn.discordapp.com/attachments/1086979670030942278/1154329459667763260/Maximiliano_Alarcon.jpeg" alt="" />
                        <div className="text-center ">

                            <h6 className=" uppercase text-xl">Maximiliano Alarcon</h6>

                            <span>Data Scientist</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Export the HomePage component
export default HomePage;