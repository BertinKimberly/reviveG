import React, { useEffect, useState } from "react";
import CategoryModal from "../../../components/Modals/CategoryModal";

const Categories = () => {
   const [modalOpen, setModalOpen] = useState(false);
   const [category, setCategory] = useState();

   const OnEditFunction = (id) => {
      setCategory(id);
      setModalOpen(!modalOpen);
   };
   useEffect(() => {
      if (modalOpen === false) {
         setCategory(null);
      }
   },[modalOpen]);
   return (
      <Sidebar>
         <CategoryModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            category={category}
         />
         <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
               <h2 className='text-xl font-bold'> Categories</h2>
               <button
                  onClick={() => setModalOpen(true)}
                  className='bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded flex-rows gap-4'
               >
                  <HiPlus /> Create
               </button>
            </div>
            <Table2
               data={CategoriesData}
               users={false}
               OnEditFunction={OnEditFunction}
            />
         </div>
      </Sidebar>
   );
};

export default Categories;
