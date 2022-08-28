import React from 'react'
import './Product.scss'

import { useState } from 'react'

const Product = () => {
    const [count, setCount] = useState(1)

    return (
        <section className="product-page">
            <div className="container">
                <section>
                    {/* Image */}
                    <img src="http://127.0.0.1:8000/media/product_images/Image_10.png" alt="" />
                </section>
                <section>
                    {/* Descriptions */}
                    <h2>File Tray</h2>
                    <h5 className='mt-1'>Rs 1400 <strike>Rs1900</strike></h5>

                    <h4 className='mt-4'>Description</h4>
                    <p className='mt-1'>Bamboo File Tray, Geometric Authentic Handmade Tray, Eco-Friendly, Dinner Tray For Eating,
                        Mini Table For Books, Catering & Household Purposes (Brown, Standard)</p>

                    <h4 className='mt-4'>Quantity</h4>
                    <div className='buy-section'>
                        <div>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn" onClick={() => count > 1 ? setCount(count - 1) : setCount(1)}><i class="uil uil-minus"></i></button>
                                <input type="text" name="itemCount" id="itemCount" value={count} />
                                <button type="button" className="btn" onClick={() => setCount(count + 1)}><i class="uil uil-plus"></i></button>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="btn">Add to cart &nbsp; <i class="uil uil-shopping-cart"></i></button>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Product