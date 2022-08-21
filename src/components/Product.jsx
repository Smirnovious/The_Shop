import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ProductDetail from './ProductDetail';

const Product = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => { 
    const getProduct = async () => {
      try{
        const response = await fetch("https://fakestoreapi.com/products")
        if(response.ok){
          setProductsList(await response.json());
        } 
      } catch(error){
        console.log(error)
      }
    }
    getProduct();
} , []);

  const cardItem = (item) => {
    return (
    <Card className="card mb-5 py-3" key={item.id} style={{ width: '18rem' }}>
      <Card.Img height="300px" width="300px" variant="top" src={item.image} alt={item.title}/>
      <Card.Body className='text-center'>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          ${item.price}
        </Card.Text>
        <NavLink className="btn btn-outline-primary" to={`/products/${item.id}`}>Buy Now</NavLink>
      </Card.Body>
    </Card>
  );
}


  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr/>
         </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
        {productsList.map(cardItem)}
        </div>
      </div>
      
    </div>
   
  )
}

export default Product