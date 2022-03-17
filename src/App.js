// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './blog/Blog';
import Cont from './contactUs/Cont';
// import Header from './header/Header';
import Home from './home/Home';
import Product from './home/Product';
import Login from './login/Login'
import Register from './login/Register'
import Changepassword1 from './login/Changepassword1'
import Forgetpassword1 from './login/Forgetpassword1'
import Carform from './iform/carform'
import Bikeform from './iform/Bikeform'
import Lifeform from './iform/Lifeform'
import Healthform from './iform/Healthform'

import Healthview from './policy/health/Healthview'
import Healthpolicy from './policy/health/Healthpolicy'
import PolicyHealthHeader from './policy/health/PolicyHealthHeader'

import BikeHeaderpolicy from './policy/bike/BikeHeaderpolicy';
import Bikepolicy from './policy/bike/Bikepolicy';

import Lifeview from './policy/life/Lifeview';
import Lifepolicy from './policy/life/Lifepolicy'

import Carpolicy from './policy/car/Carpolicy';
import PolicyCarHeader from './policy/car/PolicyCarHeader';

import Lifechart from './iform/Lifechart';
import Lcompare from './policy/life/Lcompare';
import Lifecomparelist from './policy/life/Lifecomparelist';
import Lifecomparelist2 from './policy/life/Lifecomparelist2';
import Finalacompare from './policy/life/Finalacompare'
import Lifecompare from './policy/life/Lifecompare';
import Lifecompare2 from './policy/life/Lifecompare2';



function App() {
  return (
    <>
    <Routes>
        
          
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/contact' element={<Cont/>}/>
         <Route exact path='/Blog' element={<Blog/>}/>
         <Route exact  path='/Product' element={<Product/>}/>

{/* ========================login routes ============================ */}

         <Route exact path='/Login' element={<Login/>}/>
         <Route exact path='/Register' element={<Register/>}/>
         <Route exact path='/Changepassword1' element={<Changepassword1/>}/>
         <Route exact path='/Forgetpassword1' element={<Forgetpassword1/>}/>

{/* =========================== all forms routes ============================== */}

         <Route exact path='/carform' element={<Carform/>}/>
        <Route exact path='/bikeform' element={<Bikeform/>}/>
        <Route exact path='/lifeform' element={<Lifeform/>}/>
        <Route exact path='/Healthform' element={<Healthform/>}/>

{/* ============================ health policy routes ============================ */}

        <Route exact path='/healthview/:id' element={<Healthview/>}/>
        <Route exact path='/Healthpolicy' element={<Healthpolicy/>}/>
        <Route exact path='/PolicyHealthHeader' element={<PolicyHealthHeader/>}/>

    {/* =========================== Bikdpolicy rouets ============================ */}

        <Route exact path='/Bikepolicy' element={<Bikepolicy/>}/>
        <Route exact path='/BikeHeaderpolicy' element={<BikeHeaderpolicy/>}/>

  {/* =========================== life policy rouet ==================================== */}

        <Route exact path='/Lifeview/:id' element={<Lifeview/>}/>
        <Route exact path='/Lifepolicy' element={<Lifepolicy/>}/>

   {/* ============================= car policy route ======================      */}

        <Route exact path='/Carpolicy' element={<Carpolicy/>}/>
        <Route exact path='/PolicyCarHeader' element={<PolicyCarHeader/>}/>

{/* ==================================== lifecompare route ========================= */}

        <Route exact path='/Lcompare' element={<Lcompare/>}/>
        <Route exact path='/Finalacompare' element={<Finalacompare/>}/>
        <Route exact path='/Lifecomparelist' element={<Lifecomparelist/>}/>
        <Route exact path='/Lifecomparelist2' element={<Lifecomparelist2/>}/>
        <Route exact path='/Lifecompare/:id' element={<Lifecompare/>}/>
        <Route exact path='/Lifecompare2/:id' element={<Lifecompare2/>}/>








          
     </Routes>
    </>
  );
}

export default App;
