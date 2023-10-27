import React, { useEffect, useState } from "react";
import Uploader from "../../components/Uploader";
import Sidebar from "./Sidebar";
import { Input } from "../../components/UsedInputs";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ProfileValidation } from "../../components/Validation/UserValidation";
import ImagePreview from "../../components/ImagePreview";
import userImage from "../../assets/user.png";
import {
   deleteProfileAction,
   updateProfileAction,
} from "../../redux/Actions/userActions";

const Profile = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { userInfo } = useSelector((state) => state.userLogin);
   const [imageUrl, setImageUrl] = useState(
      userInfo ? userInfo.image : userImage
   );

   const { isLoading, isError, isSuccess } = useSelector(
      (state) => state.userUpdateProfile
   );
   const { isLoading: deleteLoading, isError: deleteError } = useSelector(
      (state) => state.userDeleteProfile
   );

   //validate user

   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(ProfileValidation),
   });

   //update profile
   const onSubmit = (data) => {
      dispatch(updateProfileAction({ ...data, image: imageUrl }));
   };

   //delete profile

   const deleteProfile = () => {
      window.confirm("Are you sure you want to delete your profile ? ") &&
         dispatch(deleteProfileAction());
   };

   useEffect(() => {
      if (userInfo) {
         setValue("fullName", userInfo?.fullName);
         setValue("email", userInfo?.email);
      }
      if (isSuccess) {
         dispatch({ type: "USER_UPDATE_PROFILE_RESET" });
      }
      if (isError || deleteError) {
         toast.error(isError);
         dispatch({ type: "USER_UPDATE_PROFILE_RESET" });
         dispatch({ type: " USER_DELETE_PROFILE_RESET" });
      }
   }, [userInfo, setValue, isSuccess, isError, dispatch, deleteError]);
   return (
      <Sidebar>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-6 '
         >
            <h2 className='text-xl font-bold'>Profile</h2>
            <div className='w-full grid lg:grid-cols-12 gap-6 '>
               <div className='col-span-10'>
                  <Uploader setImageUrl={setImageUrl} />
                  {/* image preview */}

                  <div className='col-span-2'>
                     <ImagePreview
                        image={imageUrl}
                        name={userInfo ? userInfo.fullName : "user"}
                     />
                  </div>
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
               {errors.email && <InlineError text={errors.email.message} />}
            </div>
            <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
               <button
                  onClick={deleteProfile}
                  disabled={deleteLoading || isLoading}
                  className='bg-subMain transiitions hover:bg-main border border-subMain font-medium text-white'
               >
                  {deleteLoading ? "Deleting..." : "Delete Account"}
               </button>
               <button
                  disabled={deleteLoading || isLoading}
                  className='bg-main transiitions hover:bg-subMain border border-subMain font-medium text-white'
               >
                  {isLoading ? "Updating..." : "Update Profile"}
               </button>
            </div>
         </form>
      </Sidebar>
   );
};

export default Profile;
