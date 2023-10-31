import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import CategoryModal from "../../../components/Modals/CategoryModal";
import {
   deleteCategoryAction,
   getAllCategoriesAction,
} from "../../../redux/Actions/CategoriesActions";
import { Empty } from "../../../components/Notifications/Empty";
import Sidebar from "../Sidebar";
import Loader from "../../../components/Notifications/Loader";
import Table2 from "../../../components/Table2";
import Table from "../../../components/Table";

const Categories = () => {
   const [modalOpen, setModalOpen] = useState(false);
   const [category, setCategory] = useState();

   const dispatch = useDispatch();

   //delete

   const { isSuccess, isError } = useSelector((state) => state.categoryDelete);

   //get all categories
   const { categories, isLoading } = useSelector(
      (state) => state.categoryGetAll
   );
   const adminDeleteCategory = (id) => {
      if (window.confirm("Are you sure you want to delete this category?")) {
         dispatch(deleteCategoryAction(id));
      }
   };

   const OnEditFunction = (id) => {
      setCategory(id);
      setModalOpen(!modalOpen);
   };
   useEffect(() => {
      //get all categories

      dispatch(getAllCategoriesAction());

      if (isError) {
         toast.error(isError);
         dispatch({ type: "DELETE_CATEGORY_RESET" });
      }
      if (isSuccess) {
         dispatch({ type: "DELETE_CATEGORY_RESET" });
      }
      if (modalOpen === false) {
         setCategory(null);
      }
   }, [modalOpen, dispatch, isError, isSuccess]);
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
                  <FaPlus /> Create
               </button>
            </div>
            {isLoading ? (
               <Loader />
            ) : categories.length > 0 ? (
               <Table2
                  data={categories}
                  users={false}
                  OnEditFunction={OnEditFunction}
                  onDeleteFunction={adminDeleteCategory}
               />
            ) : (
               <Empty message='You have no categories' />
            )}
         </div>
      </Sidebar>
   );
};

export default Categories;
