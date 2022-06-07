import React from 'react'
import { useRef, useContext, useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";
function Warehouse({setWarehouse}) {

    useEffect(()=>{
        setWarehouse(warehouse.current.value);
    }, [form])
    
  return (
      <div>
            <Form.Select aria-label="warehouse" ref={warehouse} >
                <option value="0">Warehouse One</option>
                <option value="1">Warehouse two</option>
                <option value="2">Warehouse three</option>
            </Form.Select>
        </div>
  )
}

export default Warehouse