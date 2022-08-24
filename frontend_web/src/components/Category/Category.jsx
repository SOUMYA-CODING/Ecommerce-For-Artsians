import React from 'react'
import axios from 'axios'

import { useEffect, useState } from 'react'

import './Category.scss'

const Category = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        const getList = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/categoryList/');
                console.log(res);
                const myList = res.data;
                setList(myList)
            } catch (error) {
                console.log(error);
            }
        };
        getList();
    }, []);


    return (
        <section className="category">
            <div className="container">
                <section>
                    <div className="category-part">
                        <ul class="list-group">
                            <p className='p-1'><strong>Category</strong></p>

                            {list.map((lists) => (
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
                        <div className="product-card">

                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Category