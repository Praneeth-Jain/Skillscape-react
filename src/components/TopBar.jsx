import React from "react";
import { TbSocial } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SetTheme } from "../redux/theme";
import { Logout } from "../redux/userSlice";
import { Logo } from "../assets";

const TopBar = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTheme = () => {
    const themeValue = theme === "light" ? "dark" : "light";

    dispatch(SetTheme(themeValue));
  };

  const handleSearch = async (data) => {};

  return (
    <div className='topbar w-full flex  items-center justify-between py-3 shadow-secondary shadow-sm md:py-6 px-4 bg-bgColor'>
      <Link to='/' className='flex gap-2 items-center'>
        <div className='p-1 w-12 h-12 md:p-2  rounded text-white'>
          <img src={Logo} alt="logo" />
        </div>
        <span className='text-xl md:text-2xl text-[#065ad8] font-semibold'>
          SkillScape
        </span>
      </Link>

      <form
        className='hidden md:flex items-center justify-center'
        onSubmit={handleSubmit(handleSearch)}
      >
        <TextInput
          placeholder='Search...'
          styles='w-[18rem] lg:w-[38rem]  rounded-l-full py-3 '
          register={register("search")}
        />
        <CustomButton
          title='Search'
          type='submit'
          containerStyles='bg-secondary border-ascent-1 border-2 text-white px-6 py-2.5 mt-2 rounded-r-full hover:text-secondary hover:bg-primary'
        />
      </form>

      {/* ICONS */}
      <div className='flex gap-4 items-center text-ascent-2 text-md md:text-xl'>
        <button onClick={() => handleTheme()}>
          {theme ? <BsMoon /> : <BsSunFill />}
        </button>
        <div className='hidden lg:flex '>
          <IoMdNotificationsOutline />
        </div>

        <div>
          <CustomButton
            onClick={() => dispatch(Logout())}
            title='Log Out'
            containerStyles='text-sm text-ascent-1 bg-secondary px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full hover:bg-primary hover:text-secondary'
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
