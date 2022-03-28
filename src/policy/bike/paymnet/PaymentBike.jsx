import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { url } from '../../../api';
import { useEffect } from 'react';
import { colors, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../header/Header';
import GooglePayButton from '@google-pay/button-react'
import BikeHeaderpolicy from '../BikeHeaderpolicy';


const useStyles = makeStyles({
    basecontainer:{
      marginTop:"70px",
    background:'#f0f8fe',
    // height:"10000px"
    },
    policy:{
        width:"800px",
        marginTop:"50px",
        marginLeft:"300px",
        boxShadow:"5px 5px 10px lightgray",
        display:"flex",
        background:"#fff",
        padding:10
    },
    company:{
        height:"100px",
        width:"200px"
    },
    logo:{
        marginLeft:50,
        // paddingTop:20
    },
    name:{
        marginLeft:70
    },
    cover:{
        marginLeft:70,
        
    },
    h2:{
        marginTop:"-10px"
    },
    whatsapp:{
        display:"flex",
        marginLeft:70,
        marginTop:"30px",
        border:"solid 1px black",
        height:"40px",
        padding:"5px",
        borderRadius:"8px",
        cursor:"pointer"
    },
    wp:{
        height:30,
        width:30
    },
    wptext:{
        fontSize:"20px",
        color:"green",
        marginTop:"5px",
        marginLeft:"10px"
    },
    longdiscription:{
        marginLeft:"250px",
        marginTop:50,
        
    },
    question:{
        color:"rgb(77, 161, 240)" ,
        // marginTop:"20px",
        // marginLeft:"20px"   
    },
    h23:{
      color:"rgb(77, 161, 240)" ,

    },
    question2:{
        color:"rgb(77, 161, 240)" ,
        marginTop:"30px",
        marginLeft:"20px"   
    },
    ans:{
        fontSize:"18px"
    },
    paymnetbutton:{
        marginLeft:"50px",
        marginTop:"20px"
    },
    payment:{
        display:"flex"
    },
    gpaypaymnet:{
        marginLeft:"50px"
    },
    stripepayment:{
        width: "240px",
        height: "40px",
        // marginLeft:"100px"
        // marginBottom:"-100px"
        background:"#fff",
        color:"black"
    },
    banklogos:{
        height:"40px",
        width:"60px"
    },
    upilogos:{
        height:"30px",
        width:"50px"
    },
    li:{
      display:"flex",
      // marginTop:"15px"
    }
   
  })



const PaymentBike = () => {
    const classes = useStyles();
    const {id} = useParams();
  const abc = id;
const onToken = (token) =>{
    console.log(token)
}

const [data, SetData] = useState([]);

useEffect(() => {
    getList();
  }, []);



  function getList() {

    
    fetch(`${url}/policy/bikecompare3/${abc}`).then((result) => {
      result.json().then((resp) => {
        console.log(resp.data);
        SetData(resp.data);
      });
    }); 
  }

  return (
    <>
    <Header/>

    <div className={classes.basecontainer}>
    <BikeHeaderpolicy/>
        
            <ResponsiveContainer aspect={3} width="100%">
                <div className={classes.policy}>
                    <div className={classes.logo}>
                        <img  className={classes.company} src={data.logo}/>
                    </div>
                    <h2 className={classes.name}>{data.name}</h2>
                    <div className={classes.cover}>
                        <h3>Claims Settled</h3>
                        <h3 className={classes.h2}>{data.cover}</h3>
                    </div>
                    <div className={classes.paymnetbutton} >
                        <button>₹ {data.primumamount}</button>
                    {/* <a href='https://wa.me/9510542252'><label className={classes.whatsapp}><img className={classes.wp} src='../images/whatsapp.png'/><p className={classes.wptext}>Share</p></label></a> */}
                    </div>
                </div>
            </ResponsiveContainer>
{/* =================== Question strat =================== */}
            <div className={classes.longdiscription}>
                <h2 className={classes.question}>What is special about this plan ?</h2>
                <p className={classes.ans}>• &#160;  {data.shortdiscription}</p>
                <p className={classes.ans}>• &#160;  {data.longdiscription}</p>
                <p className={classes.ans}>• &#160; This insurence plan can be cover Up to  {data.cover}</p>
            </div>

            <section class="paymentoptions">
            <div class="container">
                <div class="row">
                    <div id="parentVerticalTab">
                        <h2 className={classes.h23}>Payment optioins</h2>
                        <ul class="resp-tabs-list2 hor_1 col-sm-3 col-md-3 col-lg-3">
                            <li><i class=""></i> <StripeCheckout
                              
                              className={classes.stripepayment}
                              token={onToken}
                              name={data.name}
                              amount={data.primumamount}
                              currency="inr"
                              stripeKey="pk_test_51Kh5XwSBp765AJ9jvXcAsVF1zGqGqgFXdMVY3A4cuHriBeDLKeQ6AmkZj0Z4iVDDGCwHMTrHwVr10BlcBofx50zt00KKzmener"
                            /></li>
                      
                            
                        </ul>
                        <ul class="resp-tabs-list2 hor_1 col-sm-3 col-md-3 col-lg-3">
                            <li className={classes.li}><i class=""><GooglePayButton
                            buttonColor="white"
                            buttonSizeMode="fill"
                            button-type="short"
                          environment="TEST"
                          paymentRequest={{
                            apiVersion: 2,
                            apiVersionMinor: 0,
                            allowedPaymentMethods: [
                              {
                                type: 'CARD',
                                parameters: {
                                  allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                  allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                },
                                tokenizationSpecification: {
                                  type: 'PAYMENT_GATEWAY',
                                  parameters: {
                                    gateway: 'example',
                                    gatewayMerchantId: 'exampleGatewayMerchantId',
                                  },
                                },
                              },
                            ],
                            merchantInfo: {
                              merchantId: '12345678901234567890',
                              merchantName: 'Demo Merchant',
                            },
                            transactionInfo: {
                              totalPriceStatus: 'FINAL',
                              totalPriceLabel: 'Total',
                              totalPrice: '100.00',
                              currencyCode: 'INR',
                              countryCode: 'IN',
                            },
                          }}
                          onLoadPaymentData={paymentRequest => {
                            console.log('load payment data', paymentRequest);
                          }}
                          /></i> </li>
                        </ul>
                        
                        
                    </div>
                </div> 

                <div class="dropdown2">
                    <button  class="bankbtn"> <i class="fa fa-bank"></i> Net banking </button>
                      <div class="dropdowncontentbank">
                          <a href='https://retail.onlinesbi.com/retail/login.htm'> <img  className={classes.banklogos} src="../Banklogo/sbi.png" alt="" />&#160;&#160;&#160;&#160; SBI</a>
                          <a href='https://retail.axisbank.co.in/wps/portal/rBanking/axisebanking/AxisRetailLogin/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOKNAzxMjIwNjLwsQp0MDBw9PUOd3HwdDQwMjIEKIoEKDHAARwNC-sP1o_ArMYIqwGNFQW6EQaajoiIAVNL82A!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/?_ga=2.142256690.1881080253.1648196489-991358978.1648196489'> <img  className={classes.banklogos} src="../Banklogo/axis.png" alt="" />&#160;&#160;&#160;&#160; Axis</a>
                          <a href='https://netbanking.hdfcbank.com/netbanking/'> <img  className={classes.banklogos} src="../Banklogo/hdfc.png" alt="" />&#160;&#160;&#160;&#160; HDFC</a>
                          <a href='https://infinity.icicibank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=ICI&ITM=nli_personalb_personal_login_btn&_gl=1*1xxxflx*_ga*NzA5OTczNzkzLjE2NDgxOTY2MTU.*_ga_SKB78GHTFV*MTY0ODE5NjYxNS4xLjEuMTY0ODE5NjYzMi40Mw..'> <img  className={classes.banklogos} src="../Banklogo/icici.jpg" alt="" />&#160;&#160;&#160;&#160; ICICI</a>
                          <a href='https://netbanking.kotak.com/knb2/'> <img  className={classes.banklogos} src="../Banklogo/kotak.jpg" alt="" />&#160;&#160;&#160;&#160; Kotak</a>
                          <a href='https://yesonline.yesbank.co.in/index.html?module=login'> <img  className={classes.banklogos} src="../Banklogo/yes.png" alt="" />&#160;&#160;&#160;&#160; Yes</a>
                      </div>
                </div>

                <div class="dropdown2">
                          <button  class="bankbtn"> <i class="fa fa-google-wallet"> </i> UPI </button>
                          <div class="dropdowncontentbank">                                
                                  <a href='https://phonepe.force.com/login?locale=us'> <img  className={classes.banklogos} src="../Banklogo/phonepay.png" alt="" />&#160;&#160;&#160;&#160; Phone-pay</a>
                                  <a href='https://app.bharatpay.co.in/'> <img  className={classes.banklogos} src="../Banklogo/bharatpay.jpg" alt="" />&#160;&#160;&#160;&#160; Bharat-pay</a>
                                  <a href='https://paytm.com/'> <img  className={classes.banklogos} src="../Banklogo/paytm2.png" alt="" />&#160;&#160;&#160;&#160; Paytm</a>
                              </div>
                      </div>

              </div> 


              
             </section> 

           
        </div>

    
    </>
  )
}

export default PaymentBike