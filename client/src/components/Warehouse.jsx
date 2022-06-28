import axios from 'axios';
import React from 'react'
import { useRef, useContext, useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";
import Product from "./Product"
function Warehouse({warehouseId}) {
    const [warehouseStock, setWarehouseStock] = useState([])

    useEffect(()=>{
        const getWarehouseStock = async() =>{
            try{
                const res= await axios.get("/stock/getProducts/"+warehouseId)
                console.log(res.data);
                setWarehouseStock(res.data)
            }catch(err){
                console.log(err);
            }
        };
        getWarehouseStock();
    }, [warehouseId])
    
  return (
      <div>
                {warehouseStock.map((c) => (
                    <Product product={c.product} quantity={c.quantity}/>
                ))}
        </div>
  )
}

export default Warehouse