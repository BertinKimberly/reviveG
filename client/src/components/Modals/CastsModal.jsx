import React, { useEffect, useState } from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import {
   addCastAction,
   updateCastAction,
} from "../../redux/Actions/MoviesActions";

const CastsModal = ({ modalOpen, setModalOpen, cast }) => {
   const dispatch = useDispatch();
   const [castImage, setCastImage] = useState("");
   const generateId = Math.floor(Math.random() * 1000);
   const image = castImage ? castImage : cast?.image;

   //validate cast

   const {
      register,
      handleSubmit,
      reset,
      setValue,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(
         yup.object().shape({
            name: yup.string().required("Cast Name is required"),
         })
      ),
   });

   //onSubmit
   const onSubmit = (data) => {
      if (cast) {
         dispatch(
            updateCastAction({
               ...data,
               image: image,
               id: cast.id,
            })
         );
         toast.success("Cast updated successfully");
      } else {
         dispatch(
            addCastAction({
               ...data,
               image: image,
               id: generateId,
            })
         );
         toast.success("Cast created successfully");
      }
      reset();
      setCastImage("");
      setModalOpen(false);
   };

   useEffect(() => {
      if (cast) {
         setValue("name", cast?.name);
      }
   }, [cast, setValue]);
   return (
      <MainModal
         modalOpen={modalOpen}
         setModalOpen={setModalOpen}
      >
         <div className='inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle bg-main shadow-xl rounded-2xl p-10 overflow-y-auto h-full text-white'>
            <h2 className='text-3xl font-bold'>
               {cast ? "Update" : "Create Cast"}
            </h2>
            <form
               onSubmit={handleSubmit(onSubmit)}
               className='flex flex-col gap-6 text-left mt-6'
            >
               <div className='w-full'>
                  <Input
                     label='Cast name'
                     placeholder='John Doe'
                     type='text'
                     bg={true}
                     name='name'
                     register={register("name")}
                  />
                  {errors.name && <InlineError text={errors.name.message} />}
               </div>

               <div className='flex flex-col gap-2'>
                  <p className='text-border font-semibold text-sm'>
                     Cast Image
                  </p>
                  <Uploader setImageUrl={setCastImage} />
                  <Imagepreview
                     image={image ? image : ""}
                     name='castImage'
                  />
               </div>
               <button
                  type='submit'
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
