import React from "react";
import Sidebar from "../Sidebar";
import { Movies } from "../../../data/MoviesData";
import Table from "../../../components/Table";

const MoviesList = () => {
   return (
      <Sidebar>
         <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
               <h2 className='text-xl font-bold'> Movies List</h2>
               <button className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded'>
                  Delete All
               </button>
            </div>
            <Table
               data={Movies}
               admin={false}
            />
         </div>
      </Sidebar>
   );
};

export default MoviesList;
