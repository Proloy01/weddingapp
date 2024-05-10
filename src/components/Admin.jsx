import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Admin = ({productState}) => {
  const [display, setDisplay] = useState('flex');
  const [show, setShow] = useState('none');
  const [formData, setFormData] = useState({
    productName: '',
    productAbout: '',
    productImageUrl: '',
    productPrice: 0
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API when component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const url = 'http://localhost:8080/api/products';
    try {
      const response = await fetch(url);
      if (response.ok) {
        const productsData = await response.json();
        setProducts(productsData);
      } else {
        toast.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Error fetching products');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const url = 'http://localhost:8080/api/products';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const newProduct = await response.json();
        setProducts([...products, newProduct]);
        productState(formData)
        toast.success('Product Created Successfully');
        // Reset form data after successful submission
        setFormData({
          productName: '',
          productAbout: '',
          productImageUrl: '',
          productPrice: ''
        });
      } else {
        toast.error('Failed to Create Product');
      }
    } catch (error) {
      console.error('Error creating Product:', error);
      toast.error('Error creating Product');
    }
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = async (productId) => {
    const url = `http://localhost:8080/api/products/${productId}`;
    try {
      const response = await fetch(url, {
        method: 'DELETE'
      });
      if (response.ok) {
        setProducts(products.filter(product => product.id !== productId));
        toast.success('Product Deleted Successfully');
      } else {
        toast.error('Failed to Delete Product');
      }
    } catch (error) {
      console.error('Error deleting Product:', error);
      toast.error('Error deleting Product');
    }
  };

  const handleCreate = () => {
    setDisplay('flex');
    setShow('none');
  };

  const handleEdit = () => {
    setDisplay('none');
    setShow('flex');
  };

  return (
    <div className='w-screen flex flex-col h-screen pt-[12vh] px-16'>
       <ToastContainer />
      <div className='flex items-end flex-col'>
        <h1 className='mt-8 text-3xl headingfont'>Admin</h1>
        <h1 className='mt-4 text-sm tracking-wider headingfont'>admin@admin.com</h1>
      </div>
      <div className='mt-8 -translate-y-20 w-full h-fit flex flex-col'>
        <div className='flex gap-24 w-full'>
          <Link onClick={handleCreate} className=' px-6 py-2 bg-green-400 rounded-full font-medium'>Create Product </Link>
          <Link onClick={handleEdit} className='px-6 py-2 bg-yellow-400 rounded-full font-medium'> Edit Products </Link>
        </div>
        <form className={`adminform  mb-24 flex-col mt-8 gap-2 ${display}`} onSubmit={handleSubmit}>
          <label htmlFor="productName">Product Name</label>
          <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleChange} />
          <label htmlFor="productDetails">Product Details</label>
          <input className=' h-16' type="text" id="productDetails" name="productAbout" value={formData.productAbout} onChange={handleChange} />
          <label htmlFor="productImageUrl">Product Image Url</label>
          <input type="text" id="productImageUrl" name="productImageUrl" value={formData.productImageUrl} onChange={handleChange} />
          <label htmlFor="productPrice">Product Price</label>
          <input type="number" id="productPrice" name="productPrice" value={formData.productPrice} onChange={handleChange} />
          <button className=' my-6 bg-green-500 py-2 rounded-full font-semibold' type="submit">Create Product</button>
        </form>

        <div className={`w-full flex-col gap-8 mt-12 mb-12 h-fit ${show}`} >
          {products.map((product) => (
            <div className=' border rounded-xl p-4 flex justify-between gap-10' key={product.id}>
              <div className=' h-56 w-[400px]'>
                <img className=' rounded-xl h-full' src={product.productImageUrl} alt="" />
              </div>
              <div className='flex flex-col gap-4 '>
                <h1>{product.productName}</h1>
                <p>{product.productAbout}</p>
                <h1>{product.productPrice}</h1>
              </div>
              <div className='flex flex-col justify-center pl-52'>
                <Link onClick={() => handleDelete(product.id)} className=' text-2xl text-red-500'><i className='bx bxs-trash-alt'></i></Link>
              
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Admin;
