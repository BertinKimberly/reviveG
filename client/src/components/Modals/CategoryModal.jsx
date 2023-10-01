import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";

const CategoryModal = ({ modalOpen, setModalOpen, category }) => {
   return (
      <MainModal
         modalOpen={modalOpen}
         setModalOpen={setModalOpen}
      >
         <div className='inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle bg-main shadow-xl rounded-2xl p-10 overflow-y-auto h-full text-white'>
            <h2 className='text-3xl font-bold'>
               {category ? "Update" : "Create"}
            </h2>
            <form className='flex flex-col gap-6 text-left mt-6'>
               <Input
                  label='Category Name'
                  placeholder={category ? category.title : "Actions"}
                  bg={false}
               />
               <button
                  onClick={() => setModalOpen(false)}
                  className='w-full flex-colo py-4 rounded bg-subMain text-white hover:bg-transparent border-2'
               >
                {category ? "Update" : "Create"}
               </button>
            </form>
         </div>
      </MainModal>
   );
};

export default CategoryModal;