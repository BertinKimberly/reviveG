import React from "react";
import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoEye } from "react-icons/go";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left  px-5 py-3 leading-6 whitespace-nowrap  ";

const Rows = ({ movie, admin, onDeleteHandler, downloadVideo, progress }) => {
   return (
      <tr>
         <td className={`${Text}`}>
            <div className='w-12 p-1 bg-dry border-border h-12 rounded overflow-hidden'>
               <img
                  src={movie?.image}
                  alt={movie?.name}
                  className='h-full w-full rounded-full object-cover'
               />
            </div>
         </td>
         <td className={`${Text} truncate`}>{movie?.name}</td>
         <td className={`${Text}`}>{movie?.category}</td>
         <td className={`${Text}`}>{movie?.language}</td>
         <td className={`${Text}`}>{movie?.year}</td>
         <td className={`${Text}`}>{movie?.time}</td>
         <td className={`${Text} float-right flex-rows gap-2`}>
            {admin ? (
               <>
                  <Link
                     to={`/edit/${movie?._id}`}
                     className='bg-main font-medium transitions flex-rows gap-2 border-border text-white '
                  >
                     Edit <FaEdit />
                  </Link>
                  <button
                     onClick={() => onDeleteHandler(movie?._id)}
                     className='bg-main font-medium transitions hover:bg-subMain border-subMain text-white '
                  >
                     <MdDelete />
                  </button>
               </>
            ) : (
               <>
                  <button
                     onClick={() => downloadVideo(movie?.video, movie?.name)}
                     disabled={progress > 0 && progress < 100}
                     className='bg-main font-medium transitions flex-rows gap-2 border-border text-white '
                  >
                     Download <FaCloudDownloadAlt className='text-green-500' />
                  </button>
                  <Link
                     to={`/movie/${movie?.name}`}
                     className='bg-main font-medium transitions hover:bg-subMain border-subMain text-white '
                  >
                     <GoEye />
                  </Link>
               </>
            )}
         </td>
      </tr>
   );
};
const Table = ({ data, admin, onDeleteHandler, downloadVideo, progress }) => {
   return (
      <div className='overflow-x-scroll overflow-hidden relative w-full'>
         <table className='w-full table-auto border border-border divide-y divide-border'>
            <thead>
               <tr className='bg-dryGray'>
                  <th
                     scope='col'
                     className={`${Head}`}
                  >
                     Image
                  </th>
                  <th
                     scope='col'
                     className={`${Head}`}
                  >
                     Name
                  </th>
                  <th
                     scope='col'
                     className={`${Head}`}
                  >
                     Category
                  </th>
                  <th
                     scope='col'
                     className={`${Head}`}
                  >
                     Language
                  </th>
                  <th
                     scope='col'
                     className={`${Head}`}
                  >
                     Year
                  </th>
                  <th
                     scope='col'
                     className={`${Head}`}
                  >
                     Hours
                  </th>
                  <th
                     scope='col'
                     className={`${Head} text-end`}
                  >
                     Actions
                  </th>
               </tr>
            </thead>
            <tbody className='bg-main divide-y divide-gray-800'>
               {data.map(
                  (
                     movie,
                     onDeleteHandler,
                     i,
                     admin,
                     downloadVideo,
                     progress
                  ) => (
                     <Rows
                        key={i}
                        movie={movie}
                        i={i}
                        admin={admin}
                     />
                  )
               )}
            </tbody>
         </table>
      </div>
   );
};

export default Table;
