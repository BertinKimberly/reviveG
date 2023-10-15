import React, { useEffect } from "react";
import Uploader from "../../components/Uploader";
import Sidebar from "./Sidebar";
import { Input } from "../../components/UsedInputs";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ProfileValidation } from "../../components/Validation/UserValidation";

const Profile = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const {  userInfo } = useSelector(
      (state) => state.userLogin
   );

   //validate user

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(ProfileValidation),
   });

   //onSubmit
   const onSubmit = (data) => {
      dispatch(loginAction(data));
   };

   useEffect(() => {
      if (userInfo) {
      }
   }, [userInfo]);
   return (
      <Sidebar>
         <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold'>Profile</h2>
            <Uploader />
            <Input
               label='FullName'
               placeholder='Enter your full name'
               type='text'
               bg={true}
            />
            <Input
               label='Email'
               placeholder='Enter your email'
               type='email'
               bg={true}
            />
            <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
               <button className='bg-subMain transiitions hover:bg-main border border-subMain font-medium text-white'>
                  Delete Account
               </button>
               <button className='bg-main transiitions hover:bg-subMain border border-subMain font-medium text-white'>
                  Update Profile
               </button>
            </div>
         </div>
      </Sidebar>
   );
};

export default Profile;
