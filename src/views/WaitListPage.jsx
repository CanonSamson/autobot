import { useState } from "react"
import { useFormik } from "formik";
import { WaitListSchema } from "../validation/inputVal";
import { MdClose } from "react-icons/md";
import Input from "../components/Input";
import { motion } from "framer-motion";
import herobg from "../assets/herobg.png"
import { Logo } from "../assets/svg";
import NavBar from "../components/NavBar";


const WaitListPage = () => {
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
    return (
        <div>
            <NavBar />
            <motion.div
         

                className=" w-full h-screen bg-gray flex justify-center items-center  ">
                <img src={herobg} className="  w-full h-screen  object-cover absolute" alt="" />

                {
                    !oSubnit ?
                        <motion.div 
                        initial={{ y: -100,  }}
                        animate={{ y: 0,  }}
                        transition={{ duration: .5 }}
                        className=" relative w-[25%] bg-white p-5 rounded text-gray flex flex-col border border-[#bbbb]">

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
                        </motion.div>

                        :
                        <div className="relative w-[25%] text-[11px] bg-gray p-5  rounded-md text-white flex flex-col border-[3px] border-primary">
                            <MdClose onClick={() => { setWaitList(!waitList) }} className=" absolute top-[-10px] p-2 right-[-10px] rounded-full text-white bg-primary font-semibold" size={30} />
                            <p>Thank you for your interest in our app you have been added to the waitlist and we will notify you</p>
                        </div>
                }

            </motion.div>
        </div >
    );
}

export default WaitListPage;