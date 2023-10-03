import React, { useEffect, useState } from "react";
import CastsModal from "../../../components/Modals/CastsModal";
import Sidebar from "../Sidebar";
import { Input, Message, Select } from "../../../components/UsedInputs";
import Uploader from "../../../components/Uploader";
import { FiDelete, FiUpload } from "react-icons/fi";
import { CategoriesData } from "../../../data/CategoriesData";

const AddMovie = () => {
   const [modalOpen, setModalOpen] = useState(false);
   const [cast, setCast] = useState(null);

   useEffect(() => {
      if (modalOpen === false) {
         setCast();
      }
   }, [modalOpen]);
   return (
      <Sidebar>
         <CastsModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            cast={cast}
         />
         <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold'>Add Movie</h2>
            <div className='w-full grid md:grid-cols-2 gap-6'>
               <Input
                  label='Movie Title'
                  placeholder='Game Of Thrones'
                  type='text'
                  bg={true}
               />
               <Input
                  label='Hours'
                  placeholder='2hr'
                  type='text'
                  bg={true}
               />
            </div>
            <div className='w-full grid md:grid-cols-2 gap-6'>
               <Input
                  label='Language Used'
                  placeholder='English'
                  type='text'
                  bg={true}
               />
               <Input
                  label='Year Of Release'
                  placeholder='2023'
                  type='number'
                  bg={true}
               />
            </div>
            <div className='w-full grid md:grid-cols-2 gap-6'>
               <div className='flex flex-col gap-2'>
                  <p className='text-border font-semibold text-sm'>
                     Image without Title
                  </p>
                  <Uploader />
                  <div className='w-32 h-32 bg-main border border-border rounded'>
                     <img
                        src=''
                        alt=''
                        className='w-full h-full object-cover rounded'
                     />
                  </div>
               </div>
            </div>
            <div className='flex flex-col gap-2'>
               <p className='text-border font-semibold text-sm'>
                  Image with Title
               </p>
               <Uploader />
               <div className='w-32 h-32 bg-main border border-border rounded'>
                  <img
                     src=''
                     alt=''
                     className='w-full h-full object-cover rounded'
                  />
               </div>
            </div>
            <Message
               label='Movie Description'
               placeholder='Make it short and sweet'
            />
            <div className='text-sm w-full'>
               <Select
                  label='Movie Category'
                  options={CategoriesData}
               />
            </div>
            <div className='flex flex-col gap-2 w-full'>
               <p className='text-border font-semibold text-sm'>Movie Video</p>
               <Uploader />
            </div>

            <div className='w-full grid lg:grid-cols-2 gap-6 items-start'>
               <button
                  onClick={() => setModalOpen(true)}
                  className='w-full py-4 bg-main border border-subMain border-dashed text-white rounded'
               >
                  Add Cast
               </button>
               <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4'>
                  {UsersData.map((user, i) => (
                     <div
                        key={i}
                        className='p-2 italic text-xs text-text rounded flex-colo bg-main border border-border'
                     >
                        <img
                           src={`${user.image} ? ${user.image} : user.png`}
                           alt={user.fullName}
                           className='w-full h-24 object-cover rounded mb-2'
                        />
                        <p>{user.fullName}</p>
                        <div className='flex-rows mt-2 w-full gap-2'>
                           <button className='w-6 h-6 bg-dry border border-border text-subMain rounded flex-colo'>
                              <FiDelete />
                           </button>
                           <button
                              onClick={() => setCast(user)}
                              className='w-6 h-6 bg-dry border border-border  rounded flex-colo'
                           >
                              <FaEdit />
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className='flex justify-end items-center my-4'>
               <button className='bg-subMain transitions hover:bg-main border border-subMain font-medium text-white py-4 rounded w-full sm:w-auto'>
                  <FiUpload /> Publish Movie
               </button>
            </div>
         </div>
      </Sidebar>
   );
};

export default AddMovie;
