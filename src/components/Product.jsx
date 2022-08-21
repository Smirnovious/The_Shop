import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams(); 

  useEffect(() => { 
    const getProduct = async () => {
      try{
        const response = await fetch("https://fakestoreapi.com/products")
        if(response.ok){
          setProduct(await response.json());
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
      <Card.Img height="400px" width="400px" variant="top" src={item.image} alt={item.title}/>
      <Card.Body className='text-center'>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          ${item.price}
        </Card.Text>
        <NavLink  className="btn btn-outline-primary" to={`/products/${item.id}`}>Buy Now</NavLink>
      </Card.Body>
    </Card>
  );
}

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr/>
         </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
        {product.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Product