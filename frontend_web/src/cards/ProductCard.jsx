import React from 'react'

const ProductCard = (props) => {

    return (
        <div className="product-card">
            <img src="assets/images/Image (12).png" alt="" />
            <div className="product-body">
                <section>
                    <p>{props.name}</p>
                    <p>{props.price} &nbsp; <strike>Rs 190</strike></p>
                </section>
                <section>
                    <button><i class="uil uil-plus"></i></button>
                </section>
            </div>
        </div>
    )
}

export default ProductCard