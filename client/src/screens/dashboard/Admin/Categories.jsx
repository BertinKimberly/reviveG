import React from "react";

const Categories = () => {
   return (
      <Sidebar>
         <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
               <h2 className='text-xl font-bold'> Categories</h2>
               <button className='bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded flex-rows gap-4'>
                  <HiPlus /> Create
               </button>
            </div>
            <Table2
               data={CategoriesData}
               users={false}
            />
         </div>
      </Sidebar>
   );
};

export default Categories;
