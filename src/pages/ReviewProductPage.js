import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import ReviewProduct from '../components/ReviewProduct'

export default function ReviewProductPage() {
  const {id} = useParams()
  const [product,setProduct] = useState([])
  const [onChange, setOnchange] = useState(false)

  useEffect(()=>{
    fetch(`https://bandwagon-react-app-u994.onrender.com/Tshirts/${id}`)
    .then(resp => resp.json())
    .then(data =>{
      setProduct(data)
    })
  },[onChange])
  console.log(product)
  return (
    <div className='container row'>
    <div className='col-md-6'>
      <img src={product.image_url} className='img-fluid' alt="loading"/>
    </div>
    <div className='col-md-6'>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>PRICE: KSH &nbsp;{product.price}</p>
      <h2>Reviews</h2>
      <ul>
        <li>{product.reviews}</li>
      </ul>
      <ReviewProduct product={product} onChange={onChange} setOnchange={setOnchange}/>
    </div>
  </div>
  )
}
