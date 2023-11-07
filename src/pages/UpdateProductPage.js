import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import UpdateProduct from '../components/UpdateProduct'

export default function UpdateProductPage() {

  const {id} = useParams()
  const [product,setProduct] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/Tshirts/`)
  })
  return (
    <div>UpdateProduct</div>
  )
}
