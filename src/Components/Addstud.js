import React from 'react'
import Nave from './Nave'

const Addstud = () => {
  return (
    <div>
        <Nave/>
<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label"> Name</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <label for="" class="form-label">AdmissionNo</label>
                   <input type="text" class="form-control"/>
                   
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">CGPA</label>
                    <input type="number" name="" id="" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button class="btn btn-success">SUBMIT</button> 
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Addstud