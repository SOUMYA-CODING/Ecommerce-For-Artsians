import React from 'react'
// import axios from 'axios'

import { useEffect, useState } from 'react'

import './Category.scss'

import ProductCard from '../../cards/ProductCard'

const Category = () => {
    // For category List
    const [categorylist, setCategoryList] = useState([])

    useEffect(() => {
        const getCategoryList = async () => {
            try {
                let res = await fetch('http://127.0.0.1:8000/categoryList/');
                let myList = await res.json();
                setCategoryList(myList)
            } catch (error) {
                console.log(error);
            }
        };
        getCategoryList();
    }, []);

    // For Product List
    const [productlist, setProductList] = useState([])

    useEffect(() => {
        const getProductList = async () => {
            try {
                const res = await fetch('http://127.0.0.1:8000/productList/');
                const myList = await res.json();
                setProductList(myList)
            } catch (error) {
                console.log(error);
            }
        };
        getProductList();
    }, []);

    const productData = productlist.map(list => {
        return <ProductCard
            id={list.id}
            photo={list.photo}
            name={list.name}
            price={list.price}
        />
    })


    return (
        <section className="category-page">
            <div className="container">
                <section>
                    <div className="category-part">
                        <ul class="list-group">
                            <p className='p-1'><strong>Category</strong></p>

                            {categorylist.map((lists) => (
                                <li class="list-group-item">{lists.name}</li>
                            ))}

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
                        {productData}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Category