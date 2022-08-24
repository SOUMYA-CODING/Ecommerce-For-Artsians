import React from 'react'
import './Category.scss'

const Category = () => {
    return (
        <section className="category">
            <div className="container">
                <section>
                    <div className="category-part">
                        <ul class="list-group">
                            <p className='p-1'><strong>Category</strong></p>

                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                            <li class="list-group-item">And a fifth one</li>

                            <hr />

                            <p className='p-1'><strong>Price</strong></p>

                            <li class="list-group-item">Under Rs 1000</li>
                            <li class="list-group-item">Rs 1000 - Rs 2000</li>
                            <li class="list-group-item">Rs 2000 - Rs 3000</li>
                            <li class="list-group-item">Over Rs 3000</li>

                        </ul>
                    </div>
                </section>
                <section>
                    <div className="product-part">
                        <div className="product-card">

                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Category