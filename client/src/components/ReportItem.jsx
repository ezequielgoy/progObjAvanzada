import axios from 'axios';
import React from 'react'
import { useRef, useContext, useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";

function ReportItem({product, quantity , lab, id,usageState}) {
    const [pendingReports, setPendingReports] = useState([]);

    const [usage, setUsage] = useState("")


    useEffect(() =>{
      const changeUsage = async() =>{
        try{
          await axios.put("/report/update/"+id+"/"+usage)
          console.log(usage);
        }catch(err){
          console.log(err);
        }
      }
      changeUsage();
    }, [usage])

  return (
        <div>
      <Table striped bordered hover variant="dark">
        <thead>
            <tr>
              <th>Product ID:</th>
              <th>Quantity</th>
              <th>Options</th>
            </tr>
        </thead>
        <tbody>
          <tr key={product}>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>
            <Form.Select aria-label="usage" onChange={(e)=>setUsage(e.target.value)}>
                <option value={usageState}>{usageState}</option>
                <option value="Used for repair">Used for repair</option>
                <option value="Inhouse broke">Inhouse broke</option>
                <option value="Factory broke">Factory broke</option>
            </Form.Select>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default ReportItem