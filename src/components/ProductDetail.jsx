import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem, deleteItem } from '../Redux/cartSlice'

const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => { 
      const getProduct = async () => {
        try{
          const response = await fetch(`https://fakestoreapi.com/products/${id}`)
          if(response.ok){
            setProduct(await response.json());
          } 
        } catch(error){
          console.log(error)
        }
      }
      getProduct();
  } , []);

  const handleCart = () => {
    if(cartBtn === "Add to Cart"){
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    }else{
      dispatch(deleteItem(product));
      setCartBtn("Add to Cart");
    }
  }
    return (
    <>
    <div className="container my-5 py-4 d-flex justify-content-center mx-auto product">
      <div className="row">
      <div className="col-md-6 d-flex justify-content-center">
        <img src={product.image} alt={product.title} className="img-fluid" height='400px' width='400px' />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h1 className='display-5 fw-bold'>{product.title}</h1>
        <hr/>
        <h2 className='my-4'>${product.price}</h2>
        <p className='lead'>{product.description}</p>
        <button onClick={()=> handleCart(product)} className="btn btn-outline-primary">{cartBtn}</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetail