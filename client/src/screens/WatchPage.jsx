import React, { useState } from "react";
import { Link } from "react-router-dom";

const WatchPage = () => {
   let { id } = useParams();
   const movie = Movies.find((movie) => movie.name === id);
   const [play, setPlay] = useState(false);
   return (
      <Layout>
         <div className='container mx-auto bg-dry p-6 mb-12'>
            <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
               <Link
                  to={`/movie/${movie?.name}`}
                  className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'
               >
                  <BiArrowBack /> {movie?.name}
               </Link>
               <div className='flex-btn sm:w-auto w-full gap-5'>
                  <button className='bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm'>
                     <FaHeart />
                  </button>
                  <button className='bg-subMain hover:text-main transitions  text-white rounded px-8 py-3 text-sm flex-rows font-medium'>
                     <FaCloud /> Download
                  </button>
               </div>
            </div>
            {/* watch video */}
            {
              play ? (
                <video controls autoPlay={play} className="w-full h-screen rounded">
                  <source src="" type="video/mp4" title={movie?.name}/>
                </video>
              ):(<div className="w-full h-full rounded-lg overflow-hidden relative">
                <div className="absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo">
                  <button onClick={()=>setPlay(true)} className="bg-main text-subMain flex-colo ">
                    <FaPlay/>
                  </button>
                </div>
                <img src="" alt={movie?.name} className="w-full h-full object-cover rounded-lg" />
              </div>)
            }
         </div>
      </Layout>
   );
};

export default WatchPage;
