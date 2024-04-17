import React, { useState } from 'react'

const Contact = () => {
    const [value, setValue] = useState(
     {
        name : '',
        email : '',
        textarea : ''
     }
    )
    const subForm =(e)=>{
            e.preventDefault();
    }
  return (
    <div className=' h-screen w-full px-[10vw] pt-10 mb-[10vh] flex flex-col gap-10 '>
         <h1 className=" pt-16 pb-2 w-fit text-3xl headingfont border-b ">Contact Us</h1>
        <div className=' flex w-full'>
            <form className=' flex flex-col w-1/2 gap-2' onSubmit={subForm} method="post">
                <label htmlFor="name"> Name</label>
                <input className=' text-white p-3 rounded-3xl bg-[#000000] border font-medium' placeholder='Enter your name' onChange={(e)=>setValue({name : e.target.value})} value={value.name} id='name' type="text" />
                <label htmlFor="email">Email</label>
                <input className='text-white p-3 font-medium bg-[#000000] border rounded-3xl' placeholder='Enter your email' value={value.email}  onChange={(e)=>setValue({email : e.target.value})} id='email' type="email" />
                <label htmlFor="message">Your Message</label>
                <textarea className=' text-white bg-[#000000] border p-3 resize-none rounded-3xl overflow-y-scroll scroller font-medium' placeholder=' Enter your message'  onChange={(e)=>setValue({textarea : e.target.value})} value={value.textarea} name="message" id="message" cols="10" rows="7"></textarea>
                <button className=' bg-green-500 rounded-xl px-8 py-2 border text-lg font-medium '>
                    Submit
                </button>
            </form>
            <div className=' flex gap-10 flex-col items-center w-1/2 h-full'>
                <h1 className=' headingfont border-b pr-4 text-xl'>
                    Follow Us 
                </h1>
                <div className=' flex flex-col gap-6  as font-semibold'>

                <a className=' flex gap-4 items-center hover:translate-x-2 duration-200 ease-in cursor-pointer'to="#"><i className='bx bxl-facebook-circle'></i> Weddings</a>
                <a className=' flex gap-4 items-center hover:translate-x-2 duration-200 ease-in cursor-pointer' to="#"><i className='bx bxl-twitter' ></i>wedinggs_48</a>
                <a className=' flex gap-4 items-center hover:translate-x-2 duration-200 ease-in cursor-pointer' to="#"><i className='bx bxl-linkedin-square' ></i>Weddings</a>
                <a className=' flex gap-4 items-center hover:translate-x-2 duration-200 ease-in cursor-pointer' to="#"><i className='bx bxs-envelope' ></i>weddings@gmail.com</a>
                
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Contact