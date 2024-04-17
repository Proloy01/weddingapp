import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
   <div className='  w-fit h-fit'>
 <div className=' relative w-screen h-screen bg-green-300 overflow-hidden'>
            <img className=' absolute top-0 left-0 w-full' src='https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Image" />
            <div className=' w-16 h-16 absolute z-20 bg-[#ace2ebaf] top-[15vh] left-10 rounded-full'></div>
            <div className=' w-8 h-8 absolute z-20 bg-[#ffffff8f] top-[20vh] left-[120px] rounded-full'></div>
            <div className=' w-16 h-16 absolute z-20 bg-[#c6eef1af] bottom-[15vh] right-10 rounded-full'></div>
            <div className=' w-8 h-8 absolute z-20 bg-[#ffffff8f] bottom-[20vh] right-[120px] rounded-full'></div>
            <div className=' pt-[10vh] text-white flex flex-col justify-center items-center absolute z-10 w-full h-full bgblur'>
                <h1 className=' text-6xl font-semibold headingfont text-[#ffffff]'>Make Your Wedding</h1>
                <h1 className=' text-8xl font-semibold headingfont my-4 text-[#f5f5f5cb]'>Memoriable with us</h1>
                <p className='headingfont w-2/3 text-zinc-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia praesentium fugiat unde quos labore reprehenderit enim sunt repudiandae, atque assumenda magnam eos non possimus provident illo. Dolore doloribus ipsa natus enim, doloremque expedita tempora corporis dignissimos aperiam repellat ea sint molestias dolor corrupti mollitia. In modi culpa praesentium tenetur.</p>
                <Link className=' cursor-pointer headingfont tracking-wider text-xl hover:gap-8 duration-300 ease-linear explore border mt-8 px-6 py-2 rounded-md gap-4 flex  items-center text-white' to="/signup">Join Today<i className='bx bx-right-arrow-alt' ></i></Link>
            </div>
    </div>
    <div  className=' h-1 w-screen bg-white'></div>
    <div className=' relative w-screen h-screen bg-green-300 overflow-hidden'>
            <img className=' absolute top-0 left-0 w-full' src='https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Image" />
            <div className=' w-16 h-16 absolute z-20 bg-[#ace2ebaf] top-[15vh] right-10 rounded-full'></div>
            <div className=' w-8 h-8 absolute z-20 bg-[#ffffff8f] top-[20vh] right-[120px] rounded-full'></div>
            <div className=' w-16 h-16 absolute z-20 bg-[#c6eef1af] bottom-[15vh] left-10 rounded-full'></div>
            <div className=' w-8 h-8 absolute z-20 bg-[#ffffff8f] bottom-[20vh] left-[120px] rounded-full'></div>
            <div className=' pt-[10vh] text-white flex flex-row pl-[15vw] items-center absolute z-10 w-full h-full bgblur'>
               <div className=' w-fit h-[70%] rounded-xl overflow-hidden border p-2 -translate-y-10'>
                <img className='h-full rounded-3xl' src="https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
               </div>
               <div className=' mx-8 flex flex-col w-2/3 items-center -translate-y-14'>
                    <h1 className=' mx-8 text-3xl pb-1 border-b headingfont leading-[60px] px-3'>Welcome to Weddings - Where Dreams Meet Decor</h1>
                    <p className=' mx-8 headingfont tracking-wider leading-8  mt-4'>

                    Congratulations! You've found the perfect partner, now let us help you find the perfect decor for your dream wedding. At Weddings, we specialize in turning your vision into reality, creating unforgettable atmospheres that reflect your unique love story.
                    </p>
               </div>
                
            </div>
    </div>
    <div  className=' h-1 w-screen bg-white'></div>
    <div className=' relative w-screen h-screen bg-green-300 overflow-hidden'>
            <img className=' absolute top-0 left-0 w-full' src='https://images.pexels.com/photos/12689084/pexels-photo-12689084.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Image" />
            <div className=' w-16 h-16 absolute z-20 bg-[#ace2ebaf] top-[15vh] right-10 rounded-full'></div>
            <div className=' w-8 h-8 absolute z-20 bg-[#ffffff8f] top-[20vh] right-[120px] rounded-full'></div>
            <div className=' w-16 h-16 absolute z-20 bg-[#c6eef1af] bottom-[15vh] left-10 rounded-full'></div>
            <div className=' w-8 h-8 absolute z-20 bg-[#ffffff8f] bottom-[20vh] left-[120px] rounded-full'></div>
            <div className=' pt-[10vh] text-white flex flex-row-reverse pr-[13vw] pl-30 items-center absolute z-10 w-full h-full bgblur'>
               <div className=' w-fit h-[70%] rounded-xl overflow-hidden border p-2 -translate-y-10'>
                <img className='h-full rounded-3xl' src="https://images.pexels.com/photos/6479601/pexels-photo-6479601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
               </div>
               <div className=' mx-8 flex flex-col w-2/3 items-center -translate-y-14'>
                    <h1 className=' mx-8 pb-1 pr-6 self-start border-b text-3xl headingfont leading-[60px]'>Elevate Your Celebration</h1>
                    <p className=' mx-8 headingfont tracking-wider leading-8  mt-4'>

                    Every couple is unique, and so is every wedding. Whether you envision a classic, timeless affair or a whimsical, modern celebration, our team is dedicated to bringing your ideas to life. From intimate gatherings to grand soirees, we excel in crafting stunning decor that sets the stage for your once-in-a-lifetime moment.
                    </p>
               </div>
                
            </div>
    </div>
   </div>
  )
}

export default Hero