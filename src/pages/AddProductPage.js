import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function AddProductPage() {
  const[name, setName] = useState()
  const [price, setPrice]= useState()
  const [ description, setDescription] = useState()
  const [image_url, setImageUrl]= useState()

  function submitProduct(event){
    event.preventDefault()
    
    fetch(`https://bandwagon-react-app-u994.onrender.com/Tshirts`,{
      method: 'POST',
      headers: {"Content-Type":"application/json" },
      body: JSON.stringify({
        name: name,
        description: description,
        image_url: image_url,
        price: price,
        is_inCart:false,
        reviews:[]})
    })
    .then(resp => resp.json())
    .then(data => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product added Successfully!",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'We have an error reaching our servers!',
        
      })
    })

    setName("")
    setPrice("")
    setDescription("")
    setImageUrl("")
  }
  return (
    <div className='container row mt-5'>
        <div className='col-md-6'>
            <h1>ADD PRODUCT:</h1>
        </div>
        <div className='col-md-6'>
           <form onSubmit={submitProduct}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" value={description}  onChange={e=>setDescription(e.target.value)} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Image url</label>
                <input type="url" value={image_url}  onChange={e=>setImageUrl(e.target.value)} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" value={price}  onChange={e=>setPrice(e.target.value)} className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
        

       
    </div>
  )
}
