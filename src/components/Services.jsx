import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Services = ({ productname, loginDetails, data }) => {
  const notify = () => toast('Wow so easy!');

  return (
    <div className='w-screen flex-col min-h-screen pt-[12vh] flex gap-10 my-10'>
      <h1 className='text-3xl headingfont ml-14 pr-8 pb-2 border-b inline w-fit'>
        Our Services
      </h1>
      {data.map((service) => (
        <div key={service.id} className='px-[5vw] mb-12'>
          <h1 className='text-2xl headingfont w-full pb-3 px-4 flex justify-center items-center'>
            {service.productName}
          </h1>
          <div className='flex justify-between items-center w-screen h-full'>
            <div className='flex flex-col gap-3 w-1/2 mt-14 px-14'>
              <h1 className='text-lg font-medium pb-2 border-b w-fit pr-4'>
                About This Product :
              </h1>
              <p>{service.productAbout}</p>
              <div className='mt-6 flex items-center justify-between'>
                <h1 className='text-xl font-medium'>Price: {service.productPrice}</h1>
                {loginDetails ? (
                  <Link
                    onClick={() => productname({
                      name: service.productName,
                      price: service.productPrice,
                      about: service.productAbout,
                      imageurl: service.productImageUrl
                    })}
                    to='/payment'
                    className='py-2 px-6 rounded-full bg-green-500 text-white font-medium border border-black'>
                    Buy Now
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className='py-2 px-6 rounded-full bg-green-500 text-white font-medium border border-black'>
                    Buy Now
                  </Link>
                )}
              </div>
            </div>
            <div className='overflow-hidden w-1/2 flex justify-center rounded-xl p-2'>
              <img className='w-[50%] border p-3 rounded-3xl' src={service.productImageUrl} alt='' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
