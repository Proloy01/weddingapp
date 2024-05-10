import React, {  useEffect } from 'react';

const AdminPannel = ({ nameofproduct, username, email }) => {
  const products= nameofproduct
  useEffect(() => {
    
  }, [nameofproduct]);



  return (
    <div className='w-screen h-screen pt-[12vh] px-16'>
      <div className='flex items-end flex-col'>
        <h1 className='mt-8 text-3xl headingfont'>{username}</h1>
        <h1 className='mt-4 text-sm tracking-wider headingfont'>{email}</h1>
      </div>
      <div className='mt-8 w-full h-fit'>
        <h1 className='text-4xl headingfont italic'>Purchases:</h1>
        <div className='w-full h-fit flex'>
          <div className='text-xl mt-8 w-1/2'>
            <h1>{products.productName}</h1>
            <p className='mt-4 text-sm tracking-wide'>{products.productAbout}</p>
            <h1 className='mt-4'>Price: {products.productPrice}</h1>
          </div>
          <div className='w-1/2 flex justify-center items-center'>
            <img className='h-[50vh] -translate-y-8 rounded-2xl' src={products.productUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPannel;
