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

   const { userInfo } = useSelector((state) => state.userLogin);

   //validate user

   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(ProfileValidation),
   });

   //onSubmit
   const onSubmit = (data) => {
      console.log(data);
   };

   useEffect(() => {
      if (userInfo) {
         setValue("fullName", userInfo?.fullName);
         setValue("email", userInfo?.email);
      }
   }, [userInfo, setValue]);
   return (
      <Sidebar>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-6'
         >
            <h2 className='text-xl font-bold'>Profile</h2>
            <div className="w-full grid lg:grid-cols-12 gap-6">
               <div className="col-span-10">
               <Uploader />
               </div>
            </div>
      

            <div className='w-full'>
               <Input
                  label='FullName'
                  placeholder='Enter your full name'
                  type='text'
                  name='fullName'
                  register={register("fullName")}
                  bg={true}
               />
               {errors.fullName && (
                  <InlineError text={errors.fullName.message} />
               )}
            </div>
            <div className='w-full'>
               <Input
                  label='Email'
                  placeholder='Enter your email'
                  type='email'
                  name='email'
                  register={register("email")}
                  bg={true}
               />
               {errors.email && <InlineError text={error.email.message} />}
            </div>
            <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
               <button className='bg-subMain transiitions hover:bg-main border border-subMain font-medium text-white'>
                  Delete Account
               </button>
               <button className='bg-main transiitions hover:bg-subMain border border-subMain font-medium text-white'>
                  Update Profile
               </button>
            </div>
         </form>
      </Sidebar>
   );
};

export default Profile;
