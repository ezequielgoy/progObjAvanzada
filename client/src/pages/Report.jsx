import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";
import { Form} from "react-bootstrap";
import ReportItem from "../components/ReportItem"

function Report() {
    const [pendingReports, setPendingReports] = useState([]);
    const [lab, setLab] = useState("")

    useEffect(() =>{
      const getPendingReports= async() =>{
        try{
          const res = await axios.get("/report/getByLab/"+lab);
          console.log(res.data);
          setPendingReports(res.data);
        }catch(err){
          console.log(err);
        }
      };
      getPendingReports();
    },[lab])

  return (
    <div>
      <div>
        <Form.Select aria-label="lab" onChange={(e)=>setLab(e.target.value)}>
                <option value="0">Lab One</option>
                <option value="1">Lab two</option>
        </Form.Select>
      </div>
      {pendingReports.map((c)=> (
        <ReportItem product={c.product} quantity={c.quantity} lab={c.lab} id={c._id} usageState={c.usage}/>
      ))
      }
    </div>
  )
}

export default Report