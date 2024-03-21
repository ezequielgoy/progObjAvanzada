import axios from 'axios';
import React from 'react'
import {useRef, useEffect, useState} from "react";
import { Form, Button, Table } from "react-bootstrap";
import BackBtn from '../components/BackBtn';

function ReStock() {
  const productId = useRef();
  const quantity = useRef();
  const [warehouse, setWarehouse] = useState("")
  const [warehouseStock, setWarehouseStock] = useState([]);
  const [productInWarehouse, setProductInWarehouse] = useState(Boolean);
  const [product, setProduct] = useState({});

const getWarehouseStock = async () =>{
     await axios.get("/stock/getProducts/"+warehouse).then((res) =>{
      setWarehouseStock(res.data);
      console.log(res.data);
     }).catch((err) =>{
      console.log(err);
     })
};

useEffect(() =>{
  getWarehouseStock();
}, [warehouse])




//VALIDATE ITEM IN WAREHOUSE

  const validateInWarehouse = (product) =>{
    warehouseStock.forEach((wp) =>{
      if (wp.product === product.product){
        setProductInWarehouse(true);
      }
    })
    return productInWarehouse
  }


  //UPDATE STOCK
  const updateWarehouseStock = async (product) =>{
    const index = warehouseStock.findIndex((p) =>{
      return p.product === product.product;
    })
    const newQuantity = parseInt(product.quantity) + parseInt(warehouseStock[index].quantity);
    await axios.put(`/stock/restock/${warehouse}/${newQuantity}/${product.product}`)
  }



  //SUBMIT HANDLER
  const handleClickReStock = async (e) =>{
    e.preventDefault();
    getWarehouseStock();
    const newProduct ={
      product: productId.current.value,
      quantity: quantity.current.value,
      warehouse: warehouse
    }
    setProductInWarehouse(false);
    const validate = validateInWarehouse(newProduct)
    console.log(validate);
    if (!validate){
      const res = await axios.post(`/stock/addstock/${warehouse}/${newProduct.quantity}/${newProduct.product}`)
      console.log(res);
    }else{
      await updateWarehouseStock(newProduct)
    }

  }

  return (
    <div className="Product-card">
        <div className="product-title-form">
          <form onSubmit={handleClickReStock}>
              <div className="product-input">
                <input placeholder='Product id' required ref={productId} />
              </div>
              <div className="quantity-input">
                <input placeholder='Quantity' required ref={quantity} />
              </div>
              <Form.Select aria-label="warehouse"  onChange={(e)=>setWarehouse(e.target.value)}>
                <option value="0">Warehouse One</option>
                <option value="1">Warehouse two</option>
                <option value="2">Warehouse three</option>
              </Form.Select>


              <button type="submit" value="AddProduct" className="addProduct-btn">Add Product</button>
            </form>

        </div>  
        <BackBtn/>      
    </div>
  )
}

export default ReStock