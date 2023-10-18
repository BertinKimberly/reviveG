import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryModal from "../../../components/Modals/CategoryModal";
import { getAllCategoriesAction } from "../../../redux/Actions/CategoriesActions";

const Categories = () => {
   const [modalOpen, setModalOpen] = useState(false);
   const [category, setCategory] = useState();

   const dispatch = useDispatch();

   //all categories

   const { categories, isLoading } = useSelector(
      (state) => state.categoryGetAll
   );

   const OnEditFunction = (id) => {
      setCategory(id);
      setModalOpen(!modalOpen);
   };
   useEffect(() => {
      //get all categories

      dispatch(getAllCategoriesAction());
      if (modalOpen === false) {
         setCategory(null);
      }
   }, [modalOpen,dispatch]);
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
