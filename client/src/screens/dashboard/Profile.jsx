import React from "react";
import Uploader from "../../components/Uploader";
import Sidebar from "./Sidebar";
import { Input } from "../../components/UsedInputs";

const Profile = () => {
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
