import React from 'react'
import './Product.scss'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    // Get the ID
    const { id } = useParams();

    // Counter
    const [count, setCount] = useState(1)

    // For Product Data
    const [product, setProduct] = useState([])

    useEffect(() => {
        const getProductData = async () => {
            try {
                const res = await fetch('http://127.0.0.1:8000/productList/' + id + '/');
                const myList = await res.json();
                setProduct(myList)
            } catch (error) {
                console.log(error);
            }
        };
        getProductData();
    }, []);

    return (
        <section className="product-page">
            <div className="container">
                <section>
                    <img src={product.photo} alt="" />
                </section>
                <section>
                    <h2>{product.name}</h2>
                    <h5 className='mt-1 mb-3'>Rs{product.price} <strike>Rs{product.price + 150}</strike></h5>

                    {/* <span className='bestseller'>{product.bestseller ? "Bestseller" : null}</span> */}

                    <p className='mt-3'>{product.description}</p>

                    <h5 className='mt-4'>Quantity</h5>
                    <div className='buy-section'>
                        <div>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn" onClick={() => count > 1 ? setCount(count - 1) : setCount(1)}><i class="uil uil-minus"></i></button>
                                <input type="text" name="itemCount" id="itemCount" value={count} />
                                <button type="button" className="btn" onClick={() => setCount(count + 1)}><i class="uil uil-plus"></i></button>
                            </div>
                        </div>
                        <div>
                            {
                                product.availability ? <button type="button" className="btn">Add to cart &nbsp; <i class="uil uil-shopping-cart"></i></button> : "Not Available"
                            }
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Product