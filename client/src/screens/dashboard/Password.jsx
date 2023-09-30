import React from "react";

const Password = () => {
   return (
      <Sidebar>
         <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold'>Change Password</h2>
            <Input
               label='Previous Password'
               placeholder='Enter your '
               type='password'
               bg={true}
            />
            <Input
               label='New Password'
               placeholder='Enter new password'
               type='password'
               bg={true}
            />
            <Input
               label='Confirm Password'
               placeholder='confirm new password'
               type='password'
               bg={true}
            />
            <div className='flex justify-end items-center my-4'>
               <button className='bg-main transiitions hover:bg-subMain border border-subMain font-medium text-white'>
                  Change Password
               </button>
            </div>
         </div>
      </Sidebar>
   );
};

export default Password;
