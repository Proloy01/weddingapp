import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Payment = ({ setproduct,productname, emailid }) => {
  const navigate = useNavigate();
  const [cvv, setCvv] = useState('');
  const [num, setNum] = useState('');

  const handleCvvChange = (e) => {
    const value = e.target.value;
    // Limiting to 3 characters
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handlecardNum = (e) => {
    const value = e.target.value;
    // Limiting to 12 characters
    if (value.length <= 12) {
      setNum(value);
    }
  };

  const handleProduct = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        email: emailid,
        ProductName: productname.name,
        ProductAbout:productname.about,
        ProductUrl:productname.imageurl,
        ProductPrice:productname.price
        // Assuming productname is an object with a 'name' property
      };
  
      const response = await fetch('http://localhost:8080/add-product', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
       
      });
  
      if (response.ok) {
        // Handle success
        console.log('Payment successful');
        toast.success("Payment Sucess")
        
        setTimeout(() => {
          navigate("/")
      }, 1500);
      try {
        // Convert response to JSON
        const data = await response.json();
        
        // Destructure data object
        const { productName,productUrl,productAbout,productPrice } = data;
        setproduct({productName,productUrl,productAbout,productPrice})
    } catch (error) {
        toast.error('Error parsing response data');
    }
        // Redirect or refresh the page
         // Refresh the page
        // Or
        // history.push('/success'); // Redirect to a success page
      } else {
        // Handle failure
        console.error('Payment failed');
        toast.error("Payment Failed")
        // Display an error message to the user
      }
    } catch (error) {
      console.error('Error in payment:', error);
      // Display an error message to the user
    }
  };
  
  return (
    <div className='p-8 min-w-screen min-h-screen flex'>
      <div className='w-1/2 h-full'>
        <ToastContainer/>
        <Link to="/services" className='bg-zinc-400 text-black font-semibold py-1 px-6 rounded-full'>Go Back</Link>
        <h1 className='headingfont my-2 text-3xl tracking-wide pb-1 mt-5 ml-8'>Checkout</h1>
        <h1 className='mt-6 ml-16 w-full tracking-widest p-2 flex justify-center font-semibold text-xl text-green-500'>Enter Card Details</h1>
        <form onSubmit={handleProduct} className='paymentform flex flex-col gap-4 w-full mt-6 ml-16' action="" method="put">
          <label htmlFor="cardNum">Enter card number</label>
          <input value={num} onChange={handlecardNum} className='text-black' type="number" name="" id="cardNum" />
          <label htmlFor="cvv">CVV</label>
          <input value={cvv} onChange={handleCvvChange} className='text-black' type="number" name="" id="cvv" />
          <label htmlFor="holderName">Enter cardholder name</label>
          <input type="text" id='holderName'/>
          <label htmlFor="expiredate">Valid Upto</label>
          <input type="date" name="" id="expiredate" />
          <button className='bg-green-500 py-2 rounded-lg font-bold'>Pay Now</button>
        </form>
      </div>
      <div className='w-1/2 px-40 flex items-center justify-center flex-col'>
        <div>
          <h1 className='text-2xl font-semibold'>Order Summary</h1>
          <h1 className='text-sky-400 text-lg font-semibold my-4'>{productname.name}</h1>
          <p className='text-sm'>{productname.about}</p>
          <h1 className="translate-y-24 text-2xl"><span className='text-green-500'>Price : </span>{productname.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Payment;
