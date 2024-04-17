import React from 'react'
import Button from './Button'

const About = () => {
  return (
   <div>
     <div className='pt-[10vh] w-full h-screen bg-black flex justify-between items-center px-[10vw] text-white'>
        <div className=' flex flex-col justify-start gap-4'>
             <h1 className=' headingfont text-3xl border-b w-fit py-4'>Your Vision, Our Expertise</h1>
             <p className=' w-2/3 text-zinc-400'>Your wedding day is a reflection of your love story, and we're here to make sure every detail is as unique as you are. Our experienced team works closely with you every step of the way, offering personalized consultations, creative inspiration, and unparalleled expertise to bring your vision to life. From the initial concept to the final execution, we're committed to exceeding your expectations and creating a day you'll cherish forever.</p>
             <Button title={'See More'} shadow={true}/>
             </div>
        <img className=' h-3/4 rounded-3xl border' src='https://images.pexels.com/photos/8887299/pexels-photo-8887299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
    </div>
    <div className='pt-[10vh] w-full h-screen bg-black flex flex-row-reverse gap-4 justify-between items-center px-[10vw] text-white'>
        <div className=' flex flex-col items-start -translate-y-14 w-2/3  gap-4'>
             <h1 className=' headingfont text-3xl -translate-x-20 self-center border-b w-fit py-4'>Unparalleled Elegance, Impeccable Details</h1>
             <p className=' w-full my-4   text-zinc-400 '>Our curated collection of decor elements features everything from exquisite floral arrangements to enchanting lighting designs and personalized touches that reflect your style. With an eye for detail and a passion for perfection, we ensure that every element of your decor harmonizes seamlessly, creating a cohesive and breathtaking ambiance</p>
             <Button title={'Read More'} shadow={true}/>
             </div>
        <img className=' h-3/4 rounded-3xl border' src='https://images.pexels.com/photos/712322/pexels-photo-712322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
    </div>
    <div className='pt-[10vh] w-full h-screen bg-black flex justify-between items-center px-[10vw] text-white'>
        <div className=' flex flex-col justify-start gap-4'>
             <h1 className=' headingfont text-3xl border-b w-fit py-4'>Let's Create Magic Together</h1>
             <p className=' w-2/3 text-zinc-400'>Ready to begin your journey to the perfect wedding decor? Explore our portfolio, get inspired by our gallery of past creations, and schedule a consultation to start planning your unforgettable celebration. At Weddings, we believe that every love story deserves a beautiful beginning, and we can't wait to help you create yours.</p>
             <Button title={'See More'} shadow={true}/>
             </div>
        <img className=' h-3/4 rounded-3xl border' src='https://images.pexels.com/photos/2892274/pexels-photo-2892274.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" />
    </div>
   </div>
  )
}

export default About