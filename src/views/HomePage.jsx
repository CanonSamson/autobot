import { FiChevronRight } from "react-icons/fi";
import NavBar from "../components/NavBar";
import blur from "../assets/b.svg"
import herobg from "../assets/herobg.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import { WaitListSchema } from "../validation/inputVal";
import { MdClose } from "react-icons/md";
import Input from "../components/Input";
import { motion } from "framer-motion";




const HomePage = () => {

    const [trySubmit, setTrySubmit] = useState(false)
    const [oSubnit, setOSubmit] = useState(false)
    const [Emessage, setEmessage] = useState("")
    const [waitList, setWaitList] = useState(false)


    const onSubmit = async () => {
        setTrySubmit(false)
    }

    const { errors, touched, handleChange, handleBlur, values, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",

        },
        validationSchema: WaitListSchema,
        onSubmit

    })

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
                        className=" indent-0 tracking-tighter text-7xl font-black  mx-auto text-center"
                    > AI-powered Text To  <strong className=" text-primary"> 3D</strong>, All On The Web.</motion.h1>
                    <motion.p variants={Anime}
                        className=" text-center px-[100px] text-[16px] my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper
                        habitant arcu eget. Et integer facilisi eget diam.Lorem ipsum dolor sit ame,consectetur </motion.p>

                    <motion.div initial={"offS"} whileInView={"onS"} viewport={{ once: false, amount: .5 }} transition={{ staggerChildren: .12 }}
                        className=" flex gap-4 items-center justify-center" >
                        <div>
                            <motion.button variants={Anime} onClick={() => { setWaitList(!waitList) }} className=" hover:scale-95 duration-200 border-2 shadow shadow-primary border-primary text-white rounded-full w-[200px] text-center text-[16px] py-5 ">
                                Join Wait List
                            </motion.button>
                        </div>
                        <Link to="/ai">
                            <motion.button variants={Anime} className=" hover:scale-95 bg-primary text-white rounded-full w-[200px] 
                    flex items-center justify-between  text-[16px] p-5 ">
                                Generate
                                <FiChevronRight size={24} />
                            </motion.button>
                        </Link>

                    </motion.div>
                </motion.div>

            </header >
            <div className=" fixed w-full h-screen top-0 right-0 z-0">
                <motion.img initial={{ x: -10}} animate={{ x: 0 }} transition={{repeat: Infinity, duration: 5}}  className=" fixed  h-screen bottom-[-300px]" src={blur} alt="" />
            </div>

            {
                waitList &&

                <div className=" bg-gray/50 fixed w-full h-screen top-0 right-0 flex justify-center items-center z-30">
                    {
                        !oSubnit ?
                            <div className=" relative w-[25%] bg-gray p-5 rounded-md text-white flex flex-col shadow-md shadow-primary  ">
                                <MdClose onClick={() => { setWaitList(!waitList) }} className=" absolute top-[-10px] p-2 right-[-10px] rounded-full text-white bg-primary font-semibold" size={30} />

                                <h4 className=" uppercase ">Wait List</h4>
                                <form onSubmit={handleSubmit}>
                                    <Input
                                        label="Full Name"
                                        id="name"
                                        placeholder="name"
                                        type="text"
                                        value={values.name}
                                        errMessage={errors.name && touched.name ? "Please enter your full name." : ""}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        label="Email"
                                        id="email"
                                        placeholder="email"
                                        type="email"
                                        value={values.email}
                                        errMessage={errors.email && touched.email ? "Please Enter a vaild Email" : ""}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                    <small className=" text-[10px] text-primary">{Emessage}</small>
                                    <button type="submit"
                                        className=" text-[11px] w-[100px] h-[35px] mt-4 bg-primary flex justify-center items-center text-white font-medium rounded">
                                        {
                                            !trySubmit ?
                                                `Submit` :
                                                <p className=" w-4 h-4 relative border-dashed animate-spin border-[3px] border-white rounded-full"></p>

                                        }
                                    </button>
                                </form>
                            </div>

                            :
                            <div className="relative w-[25%] text-[11px] bg-gray p-5  rounded-md text-white flex flex-col border-[3px] border-primary">
                                <MdClose onClick={() => { setWaitList(!waitList) }} className=" absolute top-[-10px] p-2 right-[-10px] rounded-full text-white bg-primary font-semibold" size={30} />
                                <p>Thank you for your interest in our app you have been added to the waitlist and we will notify you</p>
                            </div>
                    }

                </div>
            }
        </div >
    );
}

export default HomePage;