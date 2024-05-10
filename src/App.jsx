import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Payment from './components/Payment';
import AdminPannel from './components/AdminPannel';
import Admin from './components/Admin';


const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [productname, setProductname] = useState('');
  const[product,setProduct]= useState('')
  const[data,setData]= useState('')
 const[productadd,setProductAdd]=useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/products');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const newData = await res.json();
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData(); // Call the async function immediately
  
  },[] );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/products');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const newData = await res.json();
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData(); // Call the async function immediately
  
  },[productadd] );
  
  
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUsername = localStorage.getItem('username');

    if (loggedIn && storedUsername) {
      setIsLogin(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('username', userData.name);
    setUsername(userData.name);
    setIsLogin(true);
  };

  return (
    <div className="w-full h-fit overflow-x-hidden bg-black text-white">
      <Router>
        <Navbar email={email} isLogin={isLogin} username={username} setIsLogin={setIsLogin} />
        <Routes>
          <Route path="/" element={<Hero isLogin={isLogin} />} />
          <Route path="/adminpannel" element={<AdminPannel nameofproduct={product} username={username} email={email}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin productState={setProductAdd} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services data={data} loginDetails={isLogin} productname={setProductname} />} />
          <Route
            path="/login"
            element={<Login setName={setUsername} setemail={setEmail} setLogin={setIsLogin} setproduct={setProduct} handleLogin={handleLogin} />}
          />
          <Route path="/signup" element={<Signup isLogin={setIsLogin} />} />
          <Route path="/payment" element={<Payment setproduct={setProduct} emailid={email} productname={productname} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
