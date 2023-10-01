import React from "react";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left  px-5 py-3 leading-6 whitespace-nowrap  ";

const Rows = ({ data, i, users ,OnEditFunction}) => {
   return (
      <tr key={i}>
         {users ? (
            <>
               <td className={`${Text}`}>
                  <div className='w-12 p-1 bg-dry border-border h-12 rounded overflow-hidden'>
                     <img
                        src={data.image}
                        alt={data.name}
                        className='h-full w-full rounded-full object-cover'
                     />
                  </div>
               </td>
               <td className={`${Text} `}>{data._id ? data._id : "2R75TB"}</td>
               <td className={`${Text}`}>
                  {data.createdAt ? data.createdAt : "12,Jan 2023"}
               </td>
               <td className={`${Text}`}>{data.fullName}</td>
               <td className={`${Text}`}>{data.email}</td>
               <td className={`${Text}`}>
                  <button className='bg-main font-medium transitions hover:bg-subMain border-subMain text-white '>
                     <MdDelete />
                  </button>
               </td>
            </>
         ) : (
            <>
               <td className={`${Text} font-bold`}>
                  {data._id ? data._id : "2R75TB"}
               </td>
               <td className={`${Text}`}>
                  {data.createdAt ? data.createdAt : "12,Jan 2023"}
               </td>
               <td className={`${Text}`}>{data.title}</td>
               <td className={`${Text} float-right flex-rows gap-2`}>
                  <button onClick={()=>OnEditFunction(data)} className='bg-main font-medium transitions flex-rows gap-2 border-border text-white '>
                     Edit <FaEdit />
                  </button>
                  <button className='bg-main font-medium transitions hover:bg-subMain border-subMain text-white '>
                     <MdDelete />
                  </button>
               </td>
            </>
         )}
      </tr>
   );
};
const Table2 = ({ data, users,OnEditFunction }) => {
   return (
      <div className='overflow-x-scroll overflow-hidden relative w-full'>
         <table className='w-full table-auto border border-border divide-y divide-border'>
            <thead>
               <tr className='bg-dryGray'>
                  {users ? (
                     <>
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
                           Id
                        </th>
                        <th
                           scope='col'
                           className={`${Head}`}
                        >
                           Date
                        </th>
                        <th
                           scope='col'
                           className={`${Head}`}
                        >
                           Full Name
                        </th>
                        <th
                           scope='col'
                           className={`${Head}`}
                        >
                           Email
                        </th>
                     </>
                  ) : (
                     <>
                        <th
                           scope='col'
                           className={`${Head}`}
                        >
                           Id
                        </th>
                        <th
                           scope='col'
                           className={`${Head}`}
                        >
                           Date
                        </th>
                        <th
                           scope='col'
                           className={`${Head}`}
                        >
                           Title
                        </th>
                     </>
                  )}
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
               {data.map((data, i, users,OnEditFunction) => Rows(movie, i))}
            </tbody>
         </table>
      </div>
   );
};

export default Table2;
