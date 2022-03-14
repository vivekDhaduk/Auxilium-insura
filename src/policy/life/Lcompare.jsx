import React from 'react'
import Header from '../../header/Header'
import Lifepolicy from './Lifepolicy'
import { makeStyles } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect , useState} from "react";
import PolicylifehHeader from './PolicylifeHeader';
import { url } from "../../api";


const useStyles = makeStyles({
  basecontainer:{
    marginTop:"70px"
  },
  comparebutton:{
    marginTop:"100px",
    marginLeft:"300px"
  },
  main:{
    // display:"flex"
  }
})

const Lcompare = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  // policy 111111
  

  const [data, SetData] = useState([]);

const {id} = useParams();
// console.log(id)
const abc = id;
// console.log("abc",abc)
  const [logo, SetLogo] = useState("");
  const [primumamount, SetPrimumamount] = useState("");
  const [timeduration, SetTimeduration] = useState("");
  const [shortdiscription, SetDiscription] = useState("");
  const [cover, SetCover] = useState("");
 
  useEffect(() => {
    getList();
  }, []);


  function getList() {
// console.log(id)
    
    fetch(`${url}/policy/lifecompare1/${abc}`).then((result) => {
      console.log("ggggggg",result);
      console.log("in get list",abc)
      result.json().then((resp) => {
        console.log(resp)
        SetData(resp.data);
        // SetLogo(resp.data[0].logo);
        // SetPrimumamount(resp.data[0].primumamount);
        // SetTimeduration(resp.data[0].timeduration);
        // SetDiscription(resp.data[0].shortdiscription);
        // SetCover(resp.data[0].cover);   
      });
    });
  }

  // policy 2222222


  // policy 333333

  return (
    <>
        <Header/>
        <div className={classes.basecontainer}>
        <PolicylifehHeader />

            <div className={classes.main}>
                <div> <button className={classes.comparebutton}  onClick={() => { navigate("/Lifecomparelist");}}>Add Policy</button> 

                </div>
                <div> <button className={classes.comparebutton}  onClick={() => { navigate("/Lifecomparelist2");}}>Add Policy</button> 
                
                </div>
                {/* <div> <button className={classes.comparebutton}  onClick={() => { navigate("/Lifecomparelist");}}>Add Policy</button> 
                
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Lcompare