import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useForm } from "react-hook-form";
import { Input, Message, Select } from "../../../components/UsedInputs";
import Uploader from "../../../components/Uploader";
import { FiUpload } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieValidation } from "../../../components/Validation/MovieValidation";
import { createMovieAction } from "../../../redux/Actions/MoviesActions";
import ImagePreview from "../../../components/ImagePreview";
import { InlineError } from "../../../components/Notifications/Error";
import toast from "react-hot-toast";

const AddMovie = () => {
   const [imageWithoutTitle, setImageWithoutTitle] = useState("");
   const [imageTitle, setImageTitle] = useState("");
   const [videoUrl, setVideoUrl] = useState("");

   const dispatch = useDispatch();
   const navigate = useNavigate();

   //use selectors

   const { categories } = useSelector((state) => state.categoryGetAll);

   const { isLoading, isError, isSuccess } = useSelector(
      (state) => state.createMovie
   );

   //validate movie

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(movieValidation),
   });

   //onSubmit
   const onSubmit = (data) => {
      dispatch(
         createMovieAction({
            ...data,
            image: imageWithoutTitle,
            titleImage: imageTitle,
            video: videoUrl,
         })
      );
   };

   //useEffect
   useEffect(() => {
      if (isSuccess) {
         reset({
            name: "",
            time: 0,
            language: "",
            year: 0,
            category: "",
            desc: "",
         });
         setImageTitle("");
         setImageWithoutTitle("");
         setVideoUrl("");
         dispatch({ type: "CREATE_MOVIE_RESET" });
         navigate("/addMovie");
      }
      //if error show it
      if (isError) {
         toast.error("Something went wrong");
         dispatch({ type: "CREATE_MOVIE_RESET" });
      }
   }, [isSuccess, isError, dispatch, reset, navigate]);
   return (
      <Sidebar>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-6'
         >
            <h2 className='text-xl font-bold'>Add Movie</h2>
            <div className='w-full grid md:grid-cols-2 gap-6'>
               <div className='w-full'>
                  <Input
                     label='Movie Title'
                     placeholder='Game Of Thrones'
                     type='text'
                     bg={true}
                     name='name'
                     register={register("name")}
                  />
                  {errors.name && <InlineError text={errors.name.message} />}
               </div>
               <div className='w-full'>
                  <Input
                     label='Hours'
                     placeholder='2hr'
                     type='text'
                     bg={true}
                     name='time'
                     register={register("time")}
                  />
                  {errors.time && <InlineError text={errors.time.message} />}
               </div>
            </div>
            <div className='w-full grid md:grid-cols-2 gap-6'>
               <div className='w-full'>
                  <Input
                     label='Language Used'
                     placeholder='English'
                     type='text'
                     bg={true}
                     name='language'
                     register={register("language")}
                  />
                  {errors.language && (
                     <InlineError text={errors.language.message} />
                  )}
               </div>
               <div className='w-full'>
                  <Input
                     label='Year Of Release'
                     placeholder='2023'
                     type='number'
                     bg={true}
                     name='year'
                     register={register("year")}
                  />
                  {errors.year && <InlineError text={errors.year.message} />}
               </div>
            </div>

            <div className='w-full grid md:grid-cols-2 gap-6'>
               <div className='flex flex-col gap-2'>
                  <p className='text-border font-semibold text-sm'>
                     Image without Title
                  </p>
                  <Uploader setImageUrl={setImageWithoutTitle} />
                  <ImagePreview
                     image={imageWithoutTitle}
                     name='imagewithoutTitle'
                  />
               </div>

               <div className='flex flex-col gap-2'>
                  <p className='text-border font-semibold text-sm'>
                     Image with Title
                  </p>
                  <Uploader setImageUrl={setImageTitle} />
                  <ImagePreview
                     image={imageTitle}
                     name='imageTitle'
                  />
               </div>
            </div>
            <div className='w-full'>
               <Message
                  label='Movie Description'
                  placeholder='Make it short and sweet'
                  name='desc'
                  register={{ ...register("desc") }}
               />
               {errors.desc && <InlineError text={errors.desc.message} />}
            </div>
            <div className='text-sm w-full'>
               <Select
                  label='Movie Category'
                  options={categories?.length > 0 ? categories : []}
                  name='category'
                  register={{ ...register("category") }}
               />
               {errors.category && (
                  <InlineError text={errors.category.message} />
               )}
            </div>
            {/* movie video */}

            <div className='flex flex-col gap-2 w-full'>
               <p className='text-border font-semibold text-sm'>Movie Video</p>
               <div
                  className={`w-full grid ${
                     videoUrl && "md:grid-cols-2"
                  } gap-6`}
               >
                  {videoUrl && (
                     <div className='w-full bg-main text-sm text-subMain py-4 border border-border rounded flex-colo'>
                        Video Uploaded
                     </div>
                  )}
                  <Uploader setImageUrl={setVideoUrl} />
               </div>
            </div>

            <div className='flex justify-end items-center my-4 p-2'>
               <button
                  disabled={isLoading}
                  type='submit'
                  className='bg-subMain transitions hover:bg-main border border-subMain font-medium text-white py-4 rounded w-full sm:w-auto flex gap-2 p-2 items-center'
               >
                  {isLoading ? (
                     "Please wait"
                  ) : (
                     <>
                        <FiUpload /> Publish
                     </>
                  )}
               </button>
            </div>
         </form>
      </Sidebar>
   );
};

export default AddMovie;
