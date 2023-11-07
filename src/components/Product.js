import React from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Product({product,onChange, setOnchange}) {

  function deleteProduct(){
    fetch(`http://localhost:3000/Tshirts/${product.id}`,{
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setOnchange(!onChange)
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
    })
  }
  return (
    <div className='card col-md-3 mb-3 '>
      <img src={product.image_url} alt="Loading" className="img-fluid"/>
      <div className='card-body'>
      <h5 className="card-title">{product.name}</h5>
       <p className="card-text">{product.description}</p>
       <p className="card-text">Kshs &nbsp;{product.price}</p>
       <Link to={`/products/${product.id}`}>
          <button type="button" className="btn btn-info m-1">Update Product Details</button>
       </Link>
       <Link to={`reviews/${product.id}`}>
          <button type="button" className="btn btn-info m-1">Review this product</button>
       </Link>
       <button onClick={()=> deleteProduct()}type="button" className="btn btn-danger m-1">Delete Item</button>
      </div>
    </div>
  )
}
