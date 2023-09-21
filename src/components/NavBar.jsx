import { Logo } from "../assets/svg";

const NavBar = () => {
    return (
        <nav  className="text-white text-[14px] fixed top-0 right-0 w-full z-30">
            <div className="  flex justify-between items-center px-5 py-2 ">
                <div className=" flex gap-2 items-center">
                    <Logo  className="w-[24px]" />
                    {/* <ul className=" flex gap-2">
                        <li><p>Quick Tools</p></li>
                        <li>Object</li>
                        <li>Pricing</li>
                        <li>Team</li>
                    </ul> */}
                </div>
                {/* <div className=" gap-2 flex">
                    <button>Log In </button>
                    <button className=" bg-primary  w-[120px] py-2 rounded-full">Register</button>
                </div> */}
            </div>
        </nav>
    );
}

export default NavBar;