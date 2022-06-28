import React from 'react'
import { useRef, useContext, useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";

function Product({product,quantity}) {

  const [extractQty,setExtractQty] = useState(0);



const increQty = (e) =>{
  e.preventDefault();
  setExtractQty += 1
}

const decreQty= (e) =>{
  e.preventDefault()
  if (extractQty === 0){
    setExtractQty = 0;
  }else{
    setExtractQty -=1
  }
}

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
            <tr>
              <th>Product ID:</th>
              <th>Quantity</th>
              <th>ExtractQty</th>
              <th>Options</th>
            </tr>
        </thead>
        <tbody>
          <tr key={product}>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>{extractQty}</td>
            <td>
                <Button variant="success" onClick={increQty} value={extractQty}>+</Button>
                <Button variant="danger" onClick={decreQty} value={extractQty}>-</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Product