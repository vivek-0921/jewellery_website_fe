import { Route, Routes } from 'react-router-dom';
import Signup from './pages/global/Signup';
import Signin from './pages/global/Signin';
import Navbar from './pages/global/Navbar';
import Account from './pages/global/Account';
import Overview from './pages/home/Overview';
import Address from './pages/home/Address';
import Accountedit from './pages/home/Accountedit';
import Order from './pages/home/Order';
import Wishlist from './pages/home/Wishlist';
import Coupon from './pages/home/Coupons';
import '../src/assets/index.css'
import Home from './pages/global/Home';
import FilterbyCategory from './pages/home/FilterbyCategory';
import Footer from './pages/global/Footer';
import Singleproduct from './pages/home/Singleproduct';
import Shop from './pages/home/Shop';
import Blog from './pages/home/Blog';
import Contactpage from './pages/home/Contactpage';
import Alluser from './admin/Alluser';
import Adduser from './admin/Adduser';
import Edituser from './admin/Edituser';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allproduct' element={<Alluser/>} />
        <Route path='/addproduct' element={<Adduser/>} />
        <Route path='/edituser/:id' element={<Edituser/>} />

        <Route path='/adduser' element={<Adduser />} />
        <Route path='/edituser/:id' element={<Edituser />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/account' element={<Account />} />
        <Route path='/filterbycategory' element={<FilterbyCategory />} />
        <Route path='/accountedit' element={<Accountedit />} />
        <Route path='/address' element={<Address />} />
        <Route path='/order' element={<Order />} />
        <Route path='/whishlist' element={<Wishlist />} />
        <Route path='/coupon' element={<Coupon />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/singleproduct' element={<Singleproduct />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/contact' element={<Contactpage />} />
      </Routes>
      <Footer />


    </>
  );
}

export default App;
