import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TbHandFinger } from "react-icons/tb";

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);
  const {AllSessions} = useSelector(state=>state.admin)

  useEffect(()=>{
    if(AllSessions.length >=1 ){
    localStorage.setItem('server',JSON.stringify({'server':'ON'}))
     setIsOn(true)
    }
  },[AllSessions])

  return (
    <div className="container-xxl text-center">
        <div className="row">
            <div className="col-12 d-flex justify-content-end " style={{background:"#f8f9fa"}}>
                <label htmlFor="">Make Sure Server Is On<TbHandFinger className='fs-3' style={{rotate:"90deg"}}/></label>
             <div className={`bulb ${isOn ? 'on' : 'off'}`} ></div>
             </div>
        </div>
             <div className="row">
                <div className="col-12 d-flex justify-content-end">
             <label htmlFor="" className='' style={{fontSize:"10px"}}>(Reload For Confirmation)</label>
                </div>
            </div>
    </div>
  );
};

export default Bulb;