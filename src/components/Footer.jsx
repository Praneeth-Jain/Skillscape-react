import React from "react";
import {FaInstagramSquare} from "react-icons/fa";
import { IoMdMail,IoMdCall} from "react-icons/io";
import {FaLocationDot} from "react-icons/fa6"

const Footer=()=>{
    return (
        <footer className="flex text-primary min-w-full justify-evenly items-start bg-tertiary border-solid border-primary border-y-2 p-4 min-h-[150px] ">
            <div>
                <ul className=" cursor-pointer">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Blogs</li>
                    <li>Affiliate</li>
                    <li>Press</li>
                </ul>
            </div>
            <div>
                <ul className=" cursor-pointer">
                    <li>Create a Community</li>
                    <li>Share Community</li>
                    <li>Free Skills</li>
                    <li>Premium Membership</li>
                </ul>
            </div>
            <div>
                <ul className=" cursor-pointer">
                    <li>Become a Teacher</li>
                    <li>Create live sessions</li>
                    <li>Help Center</li>
                    <li>Requirements</li>
                </ul>
            </div>
            <div>
                <ul className="cursor-pointer">
                    <li className="flex justify-start items-center"><FaInstagramSquare/> <span className=" ml-4">Skillscape@insta</span></li>
                    <li className="flex justify-start items-center"><IoMdMail/> <span className=" ml-4">info@skillscape.com</span></li>
                    <li className="flex justify-start items-center"><IoMdCall/> <span className=" ml-4">0258-567654</span></li>
                    <li className="flex justify-start items-center"><FaLocationDot/> <span className=" ml-4">Skillscape office,Bangalore</span></li>
                </ul>
            </div>
        </footer>
    )
    
}

export default Footer;