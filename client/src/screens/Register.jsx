import React from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { Input } from "../components/UsedInputs";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
   LoginValidation,
   RegisterValidation,
} from "../components/Validation/UserValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

const Register = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { isLoading, isError, userInfo, isSuccess } = useSelector(
      (state) => state.userLogin
   );

   //validate user

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(RegisterValidation),
   });

   //onSubmit
   const onSubmit = (data) => {
      dispatch(registerAction(data));
   };

   useEffect(() => {
      if (userInfo.isAdmin) {
         navigate("/dashboard");
      } else if (userInfo) {
         navigate("/profile");
      }
      if (isSuccess) {
         toast.success(`Welcome  ${userInfo?.fullName}`);
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
               className='w-full 2xl:w-2/5 flex-colo md:w-3/5 bg-dry rounded-lg border border-border'
            >
               <h1>NETFLIXO</h1>
               <Input
                  label='FullName'
                  placeholder='Enter your full name'
                  type='text'
                  bg={true}
               />
               <div className='w-full'>
                  <Input
                     label='FullName'
                     placeholder='Enter your full name'
                     type='text'
                     bg={true}
                     name='email'
                     register={register("fullName")}
                  />
                  {errors.fullName && <InlineError text={errors.fullName.message} />}
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
               </div>
               <div className='w-full'>
                  <Input
                     label='Password'
                     placeholder='Enter your password'
                     type='passwordl'
                     bg={true}
                     name='password'
                     register={register("password")}
                  />
                  {errors.password && <InlineError text={error.password.message} />}
               </div>
               <button
                  type='submit'
                  disabled={isLoading}
                  className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'
               >
                  {isLoading ? (
                     "Loading"
                  ) : (
                     <>
                        <FaUserCheck /> Sign Up
                     </>
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
