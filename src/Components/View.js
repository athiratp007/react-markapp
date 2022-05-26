import React from 'react'
import Nave from './Nave'

const View = () => {
    var viewlist=[{
        "name":"athira",
        "admissionno":111,
        "cgpa":9.18},
        {
            "name":"mahi",
            "admissionno":112,
            "cgpa":9.20 
        },
        {
            "name":"Rohan",
            "admissionno":113,
            "cgpa":9.30 
        },
        {
            "name":"Abi",
            "admissionno":114,
            "cgpa":9.50   
        }



    ]
  return (
    <div>
        <Nave/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                        <table className="table">
  <thead className='table-primary'>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">AdmissionNo</th>
      <th scope="col">CGPA</th>
      
    </tr>
  </thead>
  <tbody>
    {viewlist.map((value,key)=>{
        return <tr>
      
      <td>{value.name}</td>
      <td>{value.admissionno}</td>
      <td>{value.cgpa}</td>
    </tr>

    })}
    
    
  </tbody>
</table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default View