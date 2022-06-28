import React from 'react'
import {useRef, useEffect, useState} from "react";
import { Form} from "react-bootstrap";

import axios from "axios";



function Extract() {
  //refs
  const productId= useRef();
  const quantity = useRef();
  const lab = useRef();
  //const warehouse = useRef();

  //hooks
  const [productList, setProductList] = useState(Array)
  const [warehouseStock, setWarehouseStock] = useState([])
  const [warehouse, setWarehouse] = useState("")
  const [stockValidation, setStockValidation] = useState(Boolean);
  const [productListValidation, setProductListValidation] = useState(Boolean);



  useEffect(()=>{
      const getWarehouseStock = async() =>{
          try{
              const res= await axios.get("/stock/getProducts/"+warehouse)
              console.log(res.data);
              setWarehouseStock(res.data)
          }catch(err){
              console.log(err);
          }
      };
      getWarehouseStock();
  }, [warehouse])

    //Generates report and saves it in DB for further analisis
    const generateReport = async() =>{
     try{
      productList.forEach( (product) =>{
        //const res = await axios.post("/report", product.product,product.quantity,product.warehouse);
      })
     }catch(err){
      console.log(err);
     }
    }

  const validateStock = (product) =>{
    setStockValidation(false);
    warehouseStock.forEach((wp) =>{
      if (wp.product === product.product){
        if (wp.quantity > product.quantity){      
          console.log("Product aded to the list");
          setStockValidation(true);
        }  
      }
    })
    console.log(stockValidation);
    return stockValidation
    
  }

  const validateNewProductInProductList = (product) =>{
    setProductListValidation(false);
    productList.forEach((p)=>{
      if (p.product === product.product){
        setProductListValidation(true);
      }
    })
    return productListValidation
  }


  //update the quantity of the product in the productList PROTO
  
  const updateQuantityProductList = async (product) =>{
    const index = productList.findIndex((p) =>{
      return p.product === product.product;
    })
    const newQuantity =await  parseInt(product.quantity) + parseInt(productList[index].quantity);
    const indexWP = warehouseStock.findIndex((p) =>{
      return p.product === product.product;
    })
    const stockInW = parseInt(warehouseStock[indexWP].quantity)
    console.log(newQuantity);
    if (stockInW > newQuantity){
      productList[index].quantity = newQuantity;
      console.log("Updated Quantity"); 
    }else{
      console.log("Cant add more quantity of this product");
    }
  }
  




//BUTTON HANDLERS
  const handleClickAddProduct = async (e) =>{
    e.preventDefault();
    
    const newProduct = {
      product : productId.current.value,
      quantity : quantity.current.value,
      warehouse : warehouse
    }
    
    const validation = validateStock(newProduct)
    console.log(validation);
    const productInList = validateNewProductInProductList(newProduct)
    if(validation){
      if(productInList){
        updateQuantityProductList(newProduct)
      }else{
      setProductList(() => [...productList, newProduct]);
      console.log(await productList);
      }
    }else{
      console.log("Couldnt add product to the extraction list");
    }
  }



  const handleClickExtract = (e) =>{

    e.preventDefault();
    productList.forEach( (product) =>{
      console.log(product.product + " " + lab.current.value + " " + product.quantity);
      
    })
    setProductList([]);
  }



  return (
    <div className="Product-card">
        <div className="product-title-form">
        <h1>Extract Products</h1>
          <form onSubmit={handleClickAddProduct}>
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
        <div>
              <form onSubmit={handleClickExtract}>
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