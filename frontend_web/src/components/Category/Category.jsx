import React from 'react'
import axios from 'axios'

import { useEffect, useState } from 'react'

import './Category.scss'

import ProductCard from '../../cards/ProductCard'

const Category = () => {
    // For category List
    const [categorylist, setCategoryList] = useState([])

    useEffect(() => {
        const getCategoryList = async () => {
            try {
                const res = await fetch('http://127.0.0.1:8000/categoryList/');
                const myList = await res.json();
                setCategoryList(myList)
                console.log(myList)
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
                console.log(myList)
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
            dumyprice={list.price + 150}
        />
    })

    // Product List by category
    // const getProductList = () => {

    // }


    return (
        <section className="category-page">
            <div className="container">
                <section>
                    <div className="category-part">
                        <ul class="list-group">
                            <p className='p-1'><strong>Category</strong></p>

                            {categorylist.map((lists) => (
                                <li class="list-group-item">
                                    {lists.name}
                                </li>
                            ))}

                            <hr />

                            <p className='p-1'><strong>Price</strong></p>

                            <li class="list-group-item"><a>Under Rs 1000</a></li>
                            <li class="list-group-item"><a>Rs 1000 - Rs 2000</a></li>
                            <li class="list-group-item"><a>Rs 2000 - Rs 3000</a></li>
                            <li class="list-group-item"><a>Over Rs 3000</a></li>

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