import React from 'react'

const SingleProduct = (props) => {
    return (
        <div className="card mb-3">
            <img src={props.image} className="card-img-top" alt={props.name} title={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"><b>Rs. {props.price} /-</b></p>
                <button onClick={props.addToCart} className="btn btn-primary">Add To Cart</button>
                <button onClick={props.deleteProduct} className="btn btn-danger ms-2">Delete</button>
            </div>
        </div>
    )
}

export default SingleProduct
