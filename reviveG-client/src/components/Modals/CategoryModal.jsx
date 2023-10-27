import React, { useEffect, useState } from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";
import { useDispatch, useSelector } from "react-redux";
import {
   createCategoryAction,
   updateCategoryAction,
} from "../../redux/Actions/CategoriesActions";

const CategoryModal = ({ modalOpen, setModalOpen, category }) => {
   const [title, setTitle] = useState("");
   const dispatch = useDispatch();

   const { isLoading, isError, isSuccess } = useSelector(
      (state) => state.categoryCreate
   );
   const {
      isLoading: upLoading,
      isError: upError,
      isSuccess: upSuccess,
   } = useSelector((state) => state.categoryCreate);

   //create category handler

   const submitHandler = (e) => {
      e.preventDefault();
      if (title) {
         //if category is not empty then update category else create category
         if (category) {
            dispatch(updateCategoryAction(category?._id, { title: title }));
            setModalOpen(!modalOpen);
         } else {
            dispatch(createCategoryAction({ title: title }));
            setTitle("");
         }
      } else {
         toast.error("Please write a category name");
      }
   };

   //useEffect
   useEffect(() => {
      //error
      if (upError || isError) {
         toast.error(upError || isError);
         dispatch({
            type: isError ? "CREATE_CATEGORY_RESET" : "UPDATE_CATEGORY_RESET",
         });
      }

      //success
      if (isSuccess || upSuccess) {
         dispatch({
            type: isError ? "CREATE_CATEGORY_RESET" : "UPDATE_CATEGORY_RESET",
         });
      }

      if (category) {
         setTitle(category?.title);
      }

      //if modal is closed

      if (modalOpen === false) {
         setTitle("");
      }
   }, [ isError, isSuccess, upSuccess, upError, category, modalOpen]);
   return (
      <MainModal
         modalOpen={modalOpen}
         setModalOpen={setModalOpen}
      >
         <div className='inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle bg-main shadow-xl rounded-2xl p-10 overflow-y-auto h-full text-white'>
            <h2 className='text-3xl font-bold'>
               {category ? "Update" : "Create"}
            </h2>
            <form
               onSubmit={submitHandler}
               className='flex flex-col gap-6 text-left mt-6'
            >
               <Input
                  label='Category Name'
                  placeholder={"Actions"}
                  bg={false}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
               <button
                  disabled={isLoading || upLoading}
                  type='submit'
                  className='w-full flex-colo py-4 rounded bg-subMain text-white hover:bg-transparent border-2'
               >
                  {isLoading || upLoading
                     ? "Loading...."
                     : category
                     ? "Update"
                     : "Create"}
               </button>
            </form>
         </div>
      </MainModal>
   );
};

export default CategoryModal;
