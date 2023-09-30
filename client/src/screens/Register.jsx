import React from "react";

const Register = () => {
   return (
      <Layout>
         <div className='container mx-auto px-2 my-24 flex-colo'>
            <div className='w-full 2xl:w-2/5 flex-colo md:w-3/5 bg-dry rounded-lg border border-border'>
               <h1>NETFLIXO</h1>
               <Input
                  label="FullName"
                  placeholder='Enter your full name'
                  type='text'
                  bg={true}
               />
               <Input
                  label="Email"
                  placeholder='Enter your email'
                  type='email'
                  bg={true}
               />
               <Input
                  label="Password"
                  placeholder='Enter your password'
                  type='passwordl'
                  bg={true}
               />
               <Link
                  to='/dashboard'
                  className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'
               >
                  <FiLogin /> Sign Up
               </Link>
               <p className='text-center text-border'>
                 Already have an account?{" "}
                  <Link
                     to='/login'
                     className='text-dryGray font-semibold ml-2'
                  >
                     Sign In
                  </Link>
               </p>
            </div>
         </div>
      </Layout>
   );
};

export default Register;
