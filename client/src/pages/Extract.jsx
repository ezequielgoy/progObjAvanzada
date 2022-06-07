import React from 'react'
import {useRef, useEffect, useState} from "react";
import { Form, Button, Table } from "react-bootstrap";

import axios from "axios";
import Warehouse from '../components/Warehouse';
function Extract() {
  //refs
  const productId= useRef();
  const quantity = useRef();
  const lab = useRef();
  const warehouse = useRef();

  //hooks
  const [productList, setProductList] = useState([])
  const [stock, setStock] = useState([])
  //ArrayOfProducts in extraction warehouse.id, product.id, quantity;
  //const productList = []

 /*
    useEffect(() => {
      const getWarehouseProducts = async() =>{
        try{
          const res = await axios.get("/stock/getProducts/"+ warehouse);
          setStock((stock) => [...stock, res.data ])
        }catch(err){
          console.log(err);
        }
      }
    
      
    }, [])
    */



  const handleClickAddProduct = async (e) =>{
    e.preventDefault();
    const newProduct = {
      product : productId.current.value,
      quantity : quantity.current.value,
      warehouse : warehouse.current.value
    }
    /*   
    productList.push({      
      product : productId.current.value,
      quantity : quantity.current.value,
      warehouse : warehouse.current.value
    })*/
    setProductList((product) => [...productList, newProduct]);
    console.log(productList);
    
  }

  const handleClick = (e) =>{
    e.preventDefault();

    productList.forEach( (product) =>{
      console.log(product.product + " " + lab.current.value);
    })
    setProductList([]);
  }
  return (
    <div className="Product-card">
        <div className="product-title-form">
        <h1>Product</h1>
          <form onSubmit={handleClickAddProduct}>
              <div className="product-input">
                <input placeholder='Product id' required ref={productId} />
              </div>
              <div className="quantity-input">
                <input placeholder='Quantity' required ref={quantity} />
              </div>
              {/*bootstrap form selector creator*/}
              <Form.Select aria-label="warehouse" ref={warehouse}>
                <option value="0">Warehouse One</option>
                <option value="1">Warehouse two</option>
                <option value="2">Warehouse three</option>
              </Form.Select>


              <button type="submit" value="AddProduct" className="addProduct-btn">Add Product</button>
            </form>

        </div>
        <div>
              <form onSubmit={handleClick}>
                {/*bootstrap form selector creator*/}
                <Form.Select aria-label="lab" ref={lab}>
                  <option value="0">Lab One</option>
                  <option value="1">Lab Two</option>
                </Form.Select>  
                <button type="submit" value="ExtractProducts">Extract Products </button>
              </form>
        </div>
        
    </div>
  )
}

export default Extract