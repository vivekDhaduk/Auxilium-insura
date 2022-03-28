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
import Lifecomparelist from './policy/life/Lifecomparelist';
import Lifecomparelist2 from './policy/life/Lifecomparelist2';
import Finalacompare from './policy/life/Finalacompare'
import Lifecompare from './policy/life/Lifecompare';
import Lifecompare2 from './policy/life/Lifecompare2';
import Healthlcompareist1 from './policy/health/Healthlcompareist1';
import Healthcompare from './policy/health/Healthcompare';
import Finalhealthcompare from './policy/health/Finalhealthcompare';
import Healthcomparelist2 from './policy/health/Healthcomparelist2';
import Healthcompare2 from './policy/health/Healthcompare2';
import Carcompare from './policy/car/Carcompare';
import Carcompare2 from './policy/car/Carcompare2'
import Carcomaparelist from './policy/car/Carcomaparelist';
import Carcomparelist2 from './policy/car/Carcomparelist2';
import Finalcarcompare from './policy/car/Finalcarcompare';
import Bikecompare from './policy/bike/Bikecompare';
import Bikecompare2 from './policy/bike/Bikecompare2';
import Bikecomparelist from './policy/bike/Bikecomparelist';
import Bikecomparelist2 from './policy/bike/Bikecomparelist2';
import Finalbikecompare from './policy/bike/Finalbikecompare';
import PrimumAcd from './policy/life/sort/PrimumAcd';
import PrimumDcd from './policy/life/sort/PrimumDcd';
import CoverAcd from './policy/life/sort/CoverAcd';
import CoverDcd from './policy/life/sort/CoverDcd';
import BikePrimumAcd from './policy/bike/sort/BikePrimumAcd';
import BikePrimumDcd from './policy/bike/sort/BikePrimumDcd';
import BikeCoverAcd from './policy/bike/sort/BikeCoverAcd';
import BikeCoverDcd from './policy/bike/sort/BikeCoverDcd';
import Healthcoveracd from './policy/health/sort/Healthcoveracd';
import Healthcoverdcd from './policy/health/sort/Healthcoverdcd';
import Healthprimumacd from './policy/health/sort/Healthprimumacd';
import Healthprimumdcd from './policy/health/sort/Healthprimumdcd';
import Carcoveracd from './policy/car/sort/Carcoveracd';
import Carcoverdcd from './policy/car/sort/Carcoverdcd';
import Carprimumacd from './policy/car/sort/Carprimumacd';
import Carprimumdcd from './policy/car/sort/Carprimumdcd';
import Paymentlife from './policy/life/payment/Paymentlife';
import PaymentHealth from './policy/health/payment/PaymentHealth';
import PaymentCar from './policy/car/payment/PaymentCar';
import PaymentBike from './policy/bike/paymnet/PaymentBike';
import Advisor from './Advisor/Advisor';
import Contactlife from './policy/life/Contactlife';
import Contactadvisor from './ContactAdvisor/Contactadvisor'



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

        <Route exact path='/Finalacompare' element={<Finalacompare/>}/>
        <Route exact path='/Lifecomparelist' element={<Lifecomparelist/>}/>
        <Route exact path='/Lifecomparelist2' element={<Lifecomparelist2/>}/>
        <Route exact path='/Lifecompare/:id' element={<Lifecompare/>}/>
        <Route exact path='/Lifecompare2/:id' element={<Lifecompare2/>}/>

{/* ====================================== health policy ============================== */}

        <Route exact path='/Healthcompareist1' element={<Healthlcompareist1/>}/>
        <Route exact path='/Healthcompare/:id' element={<Healthcompare/>}/>
        <Route exact path='/Finalhealthcompare' element={<Finalhealthcompare/>}/>
        <Route exact path='/Healthcomparelist2' element={<Healthcomparelist2/>}/>
        <Route exact path='/Healthcompare2/:id' element={<Healthcompare2/>}/>

{/* ===================================== car policy ================================== */}

        <Route exact path='/Carcompare/:id' element={<Carcompare/>}/>
        <Route exact path='/carcompare2/:id' element={<Carcompare2/>}/>
        <Route exact path='/Carcomparelist' element={<Carcomaparelist/>}/>
        <Route exact path='/Carcomparelist2' element={<Carcomparelist2/>}/>
        <Route exact path='/Finalcarcompare' element={<Finalcarcompare/>}/>

{/* ========================================= bike policy ================================== */}

        <Route exact path='/Bikecompare/:id' element={<Bikecompare/>}/>
        <Route exact path='/Bikecompare2/:id' element={<Bikecompare2/>}/>
        <Route exact path='/Bikecomparelist' element={<Bikecomparelist/>}/>
        <Route exact path='/Bikecomparelist2' element={<Bikecomparelist2/>}/>
        <Route exact path='/Finalbikecompare' element={<Finalbikecompare/>}/>
        
   {/* ================================== sorting ==================================== */}

        <Route exact path='/PrimumAcd' element={<PrimumAcd/>}/>
        <Route exact path='/PrimumDcd' element={<PrimumDcd/>}/>
        <Route exact path='/CoverAcd' element={<CoverAcd/>}/>
        <Route exact path='/CoverDcd' element={<CoverDcd/>}/>

        <Route exact path='/BikePrimumAcd' element={<BikePrimumAcd/>}/>
        <Route exact path='/BikePrimumDcd' element={<BikePrimumDcd/>}/>
        <Route exact path='/BikeCoverAcd' element={<BikeCoverAcd/>}/>
        <Route exact path='/BikeCoverDcd' element={<BikeCoverDcd/>}/>

        <Route exact path='/Healthcoveracd' element={<Healthcoveracd/>}/>
        <Route exact path='/Healthcoverdcd' element={<Healthcoverdcd/>}/>
        <Route exact path='/Healthprimumacd' element={<Healthprimumacd/>}/>
        <Route exact path='/Healthprimumdcd' element={<Healthprimumdcd/>}/>

        <Route exact path='/Carcoveracd' element={<Carcoveracd/>}/>
        <Route exact path='/Carcoverdcd' element={<Carcoverdcd/>}/>
        <Route exact path='/Carprimumacd' element={<Carprimumacd/>}/>
        <Route exact path='/Carprimumdcd' element={<Carprimumdcd/>}/>

        <Route exact path='/Paymentlife/:id' element={<Paymentlife/>}/>
        <Route exact path='/PaymentHealth/:id' element={<PaymentHealth/>}/>
        <Route exact path='/PaymentCar/:id' element={<PaymentCar/>}/>
        <Route exact path='/PaymentBike/:id' element={<PaymentBike/>}/>

        <Route exact path='/Advisor' element={<Advisor/>}/>

        <Route exact path='/Contactlife/:id' element={<Contactlife/>}/>
        
        
        <Route exact path='/Contactadvisor' element={<Contactadvisor/>}/>



          
     </Routes>
    </>
  );
}

export default App;
