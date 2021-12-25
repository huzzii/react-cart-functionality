import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 9999,
      name: "Iphone 10S Max",
      quantity: 0,
    },
    {
      price: 9989,
      name: "Redm Note 10S Max",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  let incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  let decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  let resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((product) => {
      product.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  let removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
    newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) =>{
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name:name,
      quantity:0
    });
    setProductList(newProductList);
  }
  const productCount = ()=>{
    let newProductList = [...productList];
    newProductList = newProductList.filter(product => product.quantity > 0);
    return newProductList.length;
  }
  
  return (
    <React.Fragment>
      <Navbar productCount={productCount}/>
      <AddItem addItem={addItem}/>
      <ProductList
        productList={productList}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeItem={removeItem}
      />
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </React.Fragment>
  );

}

export default App;
