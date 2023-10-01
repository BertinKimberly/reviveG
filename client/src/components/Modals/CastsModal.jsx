import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";

const CastsModal = ({ modalOpen, setModalOpen, cast }) => {
   return (
      <MainModal
         modalOpen={modalOpen}
         setModalOpen={setModalOpen}
      >
         <div className='inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle bg-main shadow-xl rounded-2xl p-10 overflow-y-auto h-full text-white'>
            <h2 className='text-3xl font-bold'>
               {cast ? "Update" : "Create Cast"}
            </h2>
            <form className='flex flex-col gap-6 text-left mt-6'>
               <Input
                  label='cast Name'
                  placeholder={cast ? cast.title : "Actions"}
                  bg={false}
               />
               <div className='flex flex-col gap-2'>
               <p className='text-border font-semibold text-sm'>
                  Cast Image
               </p>
               <Uploader />
               <div className='w-32 h-32 bg-main border border-border rounded'>
                  <img
                     src=''
                     alt={cast?.fullName}
                     className='w-full h-full object-cover rounded'
                  />
               </div>
            </div>
               <button
                  onClick={() => setModalOpen(false)}
                  className='w-full flex-colo py-4 rounded bg-subMain text-white hover:bg-transparent border-2'
               >
                  {cast ? "Update" : "Create"}
               </button>
            </form>
         </div>
      </MainModal>
   );
};

export default CastsModal;
