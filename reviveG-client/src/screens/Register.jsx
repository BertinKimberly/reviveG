import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { Input } from "../components/UsedInputs";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { RegisterValidation } from "../components/Validation/UserValidation";
import { yupResolver } from "@hookform/resolvers/yup"
import toast from "react-hot-toast";
import { InlineError } from "../components/Notifications/Error";
import { registerAction } from "../redux/Actions/userActions";

const Register = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { isLoading, isError, userInfo, isSuccess } = useSelector(
      (state) => state.userLogin
   );

   // Validate user
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(RegisterValidation),
   });

   // onSubmit
   const onSubmit = (data) => {
      dispatch(registerAction(data));
   };
//useEffect
   useEffect(() => {
      if (userInfo) {
         if (userInfo.isAdmin) {
            navigate("/dashboard");
         } else {
            navigate("/profile");
         }
      }
   
      if (isSuccess) {
         toast.success(`Welcome ${userInfo?.fullName}`);
         dispatch({ type: "USER_REGISTER_RESET" });
      }
   
      if (isError) {
         toast.error(isError);
         dispatch({ type: "USER_REGISTER_RESET" });
      }
   }, [userInfo, isSuccess, isError, navigate, dispatch]);
   

   return (
      <Layout>
         <div className='container mx-auto px-2 my-24 flex-colo'>
            <form
               onSubmit={handleSubmit(onSubmit)}
               className='w-full 2xl:w-2/5 flex-colo md:w-3/5 bg-dry rounded-lg border border-border p-4 gap-5'
            >
               <h1>reviveG</h1>
               <div className='w-full'>
                  <Input
                     label='FullName'
                     placeholder='Enter your full name'
                     type='text'
                     bg={true}
                     name='fullName'
                     register={register("fullName")}
                  />
                  {errors.fullName && (
                     <InlineError text={errors.fullName.message} />
                  )}
               </div>
               <Input
                  label='Email'
                  placeholder='Enter your email'
                  type='email'
                  name='email'
                  register={register("email")}
                  bg={true}
               />
               {errors.email && <InlineError text={errors.email.message} />}
               <div className='w-full'>
                  <Input
                     label='Password'
                     placeholder='Enter your password'
                     type='password'
                     bg={true}
                     name='password'
                     register={register("password")}
                  />
                  {errors.password && (
                     <InlineError text={errors.password.message} />
                  )}
               </div>
               <button
                  type='submit'
                  disabled={isLoading}
                  className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'
               >
                  {isLoading ? (
                     "Loading"
                  ) : (
                     <p className="flex gap-3 items-center">
                        <FaUserCheck /> Sign up
                     </p>
                  )}
               </button>
               <p className='text-center text-border'>
                  Already have an account?{" "}
                  <Link
                     to='/login'
                     className='text-dryGray font-semibold ml-2'
                  >
                     Sign In
                  </Link>
               </p>
            </form>
         </div>
      </Layout>
   );
};

export default Register;
