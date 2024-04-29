import React from 'react'
import { Link } from 'react-router-dom'

const Payment = () => {
  const submithandle =(e)=>{
e.preventDefault() 
  }
  return (
    <div className=' h-screen w-screen text-white px-8 py-2'>
      <div  className=' py-5'>
        <Link to='/services' className=' bg-white text-black font-medium py-1 rounded-xl px-8 border'>Go Back</Link>
      </div>
      <div className=' mx-6 mt-8 flex items-center justify-between'>
        <div>
        <h1 className=' ml-8 border-b inline  text-3xl  headingfont'>Almost There.</h1>
        <h3 className='  ml-36 text-purple-500 pt-2 text-xl'>Final Step</h3>
        </div>
        <div>
          <h1 className=' text-2xl font-semibold'>Total : <span className='  text-green-500'>1500 $</span></h1>
        </div>
      </div>
      <div className=' bxshadow  h-[70vh] mx-auto w-[30vw] -translate-y-16 rounded-3xl mt-10 overflow-hidden'>
        <h1 className=' w-full h-fit bg-sky-500 py-2 flex justify-center items-center border-b  font-semibold tracking-wider '>Enter Card Details</h1>
                <form className=' paymentform flex flex-col gap-2 p-8' onSubmit={submithandle}>
                  <label htmlFor="cardnum">Enter card number</label>
                  <input type="number" name="" id="cardnum" />
                  <label htmlFor="nameholder">Enter cardholder name </label>
                  <input type="text" id='nameholder' />
                  <label htmlFor="exdate"> Expire date</label>
                  <input type="month" name="" id="exdate" />
                  <label htmlFor="cvv"> CVV</label>
                  <input type="number" name="" id="cvv" />
                  <button className=' mt-2 w-full bg-green-500 text-black font-bold py-3 rounded-3xl'>Pay now</button>
                </form>
      </div>
    </div>
  )
}

export default Payment