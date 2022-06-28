import axios from 'axios';
import React from 'react'
import {useRef, useEffect, useState} from "react";
import { Form, Button, Table } from "react-bootstrap";

function ReStock() {
  const productId = useRef();
  const quantity = useRef();
  const [warehouse, setWarehouse] = useState("");
  const [warehouseStock, setWarehouseStock] = useState([]);
  const [productsInWarehouse, setProductsInWarehouse] = useState([]);
  const [product, setProduct] = useState({});
/*
  useEffect(() =>{
    const getProducts = async (newProduct) =>{
      const product ={
        product: productId.current.value,
        quantity: quantity.current.value,
        warehouse: warehouse
      }
      try{
        const res = await axios.get("/stock/getProducts/"+newProduct.warehouse)
        console.log(res);
      }catch(err){
        console.log(err);
      }
    }
  }, [])
*/


useEffect(() =>{
  const getStock = async () =>{
    try{
      const res = await axios.get("/stock/getProducts/"+product.warehouse)
      setWarehouseStock(res.data)
    }catch(err){
      console.log(err);
    }
  };
  getStock();
}, [])


  const handleClickStock = async (e) =>{
    e.preventDefault();
    const newProduct ={
      product: productId.current.value,
      quantity: quantity.current.value,
      warehouse: warehouse
    }
    
    try{

      //await getStock()
      
      warehouseStock.forEach((stock) =>{
          if (stock.product === newProduct.product){
            const newQuantity = parseInt(newProduct.quantity) + parseInt(stock.quantity);
            newProduct.quantity = newQuantity
            console.log(newQuantity);
            axios.put("/stock/restock/"+warehouse+"/"+newQuantity, newProduct)
          }
      })
      
      

    }catch(err){
      console.log(err);
    }

  }

  return (
    <div className="Product-card">
        <div className="product-title-form">
          <form onSubmit={handleClickStock}>
              <div className="product-input">
                <input placeholder='Product id' required ref={productId} />
              </div>
              <div className="quantity-input">
                <input placeholder='Quantity' required ref={quantity} />
              </div>
              {/*bootstrap form selector creator*/}
              <Form.Select aria-label="warehouse" onChange={(e)=>setWarehouse(e.target.value)}>
                <option value="0">Warehouse One</option>
                <option value="1">Warehouse two</option>
                <option value="2">Warehouse three</option>
              </Form.Select>


              <button type="submit" value="AddProduct" className="addProduct-btn">Add Product</button>
            </form>

        </div>        
    </div>
  )
}

export default ReStock