import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n6ypev3', 'template_7cwywm2', formRef.current, {
      publicKey: 'YawM5kwr8FiEunt1j',
    }).then(
      () => {
        toast.success('Successfully Sent!');
        // Clear form data
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      },
      (error) => {
        toast.error('FAILED...', error.text);
      }
    );
  };

  return (
    <div className='h-screen w-full px-[10vw] pt-2 mb-[10vh] flex flex-col gap-10'>
      <h1 className="pt-16 pb-2 w-fit text-3xl headingfont border-b">Contact Us</h1>
      <div className='flex w-full'>
     
        <form ref={formRef} className='flex flex-col w-1/2 gap-2' onSubmit={sendEmail} method="post">
        <ToastContainer/>
          <label htmlFor="name">Name</label>
          <input className='text-white p-3 rounded-3xl bg-[#000000] border font-medium' placeholder='Enter your name' onChange={handleChange} value={formData.name} id='name' name="name" type="text" />
          <label htmlFor="email">Email</label>
          <input className='text-white p-3 font-medium bg-[#000000] border rounded-3xl' placeholder='Enter your email' value={formData.email} onChange={handleChange} id='email' name="email" type="email" />
          <label htmlFor="message">Your Message</label>
          <textarea className='text-white bg-[#000000] border p-3 resize-none rounded-3xl overflow-y-scroll scroller font-medium' placeholder='Enter your message' onChange={handleChange} value={formData.message} name="message" id="message" cols="10" rows="7"></textarea>
          <button className='bg-green-500 rounded-xl px-8 py-2 border text-lg font-medium'>
            Submit
          </button>
        </form>
        <div className='flex gap-10 flex-col items-center w-1/2 h-full'>
          <h1 className='headingfont border-b pr-4 text-xl'>
            Follow Us
          </h1>
          <div className='flex flex-col gap-6 as font-semibold'>
            <a className='flex gap-4 items-center hover:translate-x-2 duration-200 ease-in cursor-pointer' to="#"><i className='bx bxl-facebook-circle'></i> Weddings</a>
            <a className='flex gap-4 items-center hover:translate-x-2 duration-200 ease-in cursor-pointer' to="#"><i className='bx bxl-twitter'></i> wedinggs_48</a>
            <a className='flex gap-4 items-center hover:translate-x-2 duration-200 ease-in cursor-pointer' to="#"><i className='bx bxl-linkedin-square'></i> Weddings</a>
            <a className='flex gap-4 items-center hover:translate-x-2 duration-200 ease-in cursor-pointer' to="#"><i className='bx bxs-envelope'></i> weddings@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
