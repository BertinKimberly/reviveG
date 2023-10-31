import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/UsedInputs";
import { useDispatch, useSelector } from "react-redux";
import { PasswordValidation } from "../../components/Validation/UserValidation";
import { changePasswordAction } from "../../redux/Actions/userActions";
import { InlineError } from "../../components/Notifications/Error";
import toast from "react-hot-toast";

const Password = () => {
   const dispatch = useDispatch();
   const { isLoading, isError, message, isSuccess } = useSelector(
      (state) => state.userChangePassword
   );
   //validate user

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(PasswordValidation),
   });

   //on submit

   const onSubmit = (data) => {
      dispatch(changePasswordAction(data));
   };

   useEffect(() => {
      if (isSuccess) {
         dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
      }
      if (isError) {
         toast.error(isError);
         dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
      }
      if (message) {
         toast.success(message);
         reset();
      }
   }, [isSuccess, isError, dispatch, reset, message]);
   return (
      <Sidebar>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-6'
         >
            <h2 className='text-xl font-bold'>Change Password</h2>
            <div className='w-full'>
               <Input
                  label='Previous Password'
                  placeholder='Enter your Old Password '
                  type='password'
                  name='oldPassword'
                  register={register("oldPassword")}
                  bg={true}
               />
               {errors.oldPassword && (
                  <InlineError text={errors.oldPassword.message} />
               )}
            </div>
            <div className='w-full'>
               <Input
                  label='New Password'
                  placeholder='Enter your New Password '
                  type='password'
                  name='newPassword'
                  register={register("newPassword")}
                  bg={true}
               />
               {errors.newPassword && (
                  <InlineError text={errors.newPassword.message} />
               )}
            </div>
            <div className='w-full'>
               <Input
                  label='Confirm Password'
                  placeholder='Confirm Password '
                  type='password'
                  name='confirmPassword'
                  register={register("confirmPassword")}
                  bg={true}
               />
               {errors.confirmPassword && (
                  <InlineError text={errors.confirmPassword.message} />
               )}
            </div>

            <div className='flex justify-end items-center my-4'>
               <button
                  disabled={isLoading}
                  type='submit'
                  className='bg-main transiitions hover:bg-subMain border border-subMain font-medium text-white'
               >
                  {isLoading ? "Changing..." : "Change Password"}
               </button>
            </div>
         </form>
      </Sidebar>
   );
};

export default Password;
