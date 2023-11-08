import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import UpdateProduct from '../components/UpdateProduct'

export default function UpdateProductPage() {

  const {id} = useParams()
  const [product,setProduct] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/Tshirts/${id}`)
    .then(resp => resp.json())
    .then(data =>{
      setProduct(data)
    })
  },[])
  console.log(product)
  return (
    <div className='container row'>
      <div className='col-md-6'>
        <img src={product.image_url} className='img-fluid' alt="loading"/>
      </div>
      <div className='col-md-6'>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        {product.is_inCart === true?
        <button className='btn btn-sm btn-danger'>Remove from cart</button>:
        <button className='btn btn-sm btn-success'>Add to Cart</button>}
        <UpdateProduct product={product}/>
      </div>
    </div>
  )
}
