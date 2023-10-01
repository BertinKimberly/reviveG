import React from "react";

const Users = () => {
   return (
      <Sidebar>
         <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
               <h2 className='text-xl font-bold'> Users</h2>
            </div>
            <Table2
               data={UsersData}
               users={true}
            />
         </div>
      </Sidebar>
   );
};

export default Users;
