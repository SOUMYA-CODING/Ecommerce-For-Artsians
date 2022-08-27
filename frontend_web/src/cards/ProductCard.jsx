import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {

    return (
        <div className="product-card">
            <img src={props.photo} alt="" />
            <div className="product-body">
                <section>
                    <p>{props.name}</p>
                    <p>{props.price} &nbsp; <strike>Rs 190</strike></p>
                </section>
                <section>
                    <Link to="/product"><i class="uil uil-plus"></i></Link>
                </section>
            </div>
        </div>
    )
}

export default ProductCard