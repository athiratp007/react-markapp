import React, { useState } from 'react'
import Nave from './Nave'

const Addstud = () => {
    var[name,setName]=useState("")
    var[admissionno,setAdmissionNo]=useState("")
    var[cgpa,setCGPA]=useState("")
    const subData=()=>{
        const data={"name":name,"admissionno":admissionno,"cgpa":cgpa}
        console.log(data)

    }
    
  return (
    <div>
        <Nave/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label"> Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <label for="" className="form-label">AdmissionNo</label>
                   <input onChange={(e)=>{setAdmissionNo(e.target.value)}} type="text" className="form-control"/>
                   
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">CGPA</label>
                    <input onChange={(e)=>{setCGPA(e.target.value)}} type="number" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button onClick={subData}  className="btn btn-success">SUBMIT</button> 
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Addstud