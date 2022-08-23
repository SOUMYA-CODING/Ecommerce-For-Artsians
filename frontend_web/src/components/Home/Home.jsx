import React from 'react'
import './Home.scss'

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='hero-section'>
                <div className="container">
                    <div className="banner">
                        <section className='banner-description'>
                            <h1>shop home decors <br /> & accessories</h1>
                            <p>Shop kitchen ware, office accessories, fashion bags, dolls, toys, punjabi phulkari dupatta, etc and much more</p>
                            <a href="#" className='btn mt-2'>View More</a>
                        </section>
                        <section>
                            <div className='banner-img'>
                                <div className='item-description'>
                                    <div className="item-card">
                                        <p>Decor</p>
                                        <strong><h4>Handmade <br /> Candle Stand</h4></strong>
                                        <p className='mb-2'>Rs 1500 <strike>1900</strike></p>
                                        <a href="#">
                                            View more &nbsp;
                                            <svg width="51" height="8" viewBox="0 0 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z" fill="black" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className='discount-tag'>
                                    <p>50%</p>
                                </div>
                                <img src="assets/images/Image (12).png" alt="" />
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            {/* Top Seller Section */}
            <section className='top-seller'>
                <div className="container">
                    <section className='header'>
                        <h5>Top Seller</h5>
                        <a href="#">
                            View all &nbsp;
                            <svg width="51" height="8" viewBox="0 0 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z" fill="black" />
                            </svg>
                        </a>
                    </section>
                    <section className='top-seller-products'>
                        <div className="product-card">
                            <span className='tag'>Bestseller</span>
                            <img src="assets/images/Image (1).png" alt="" />
                            <div className="product-body">
                                <h6>Bamboo Ice-Cream Bowls</h6>
                                <p>Rs 1000 <strike>1200</strike></p>
                            </div>
                            <a href="#" className='btn'>Buy</a>
                        </div>
                        <div className="product-card">
                            <span className='tag'>Bestseller</span>
                            <img src="assets/images/Image (2).png" alt="" />
                            <div className="product-body">
                                <h6>Bamboo Mug</h6>
                                <p>Rs 1000 <strike>1200</strike></p>
                            </div>
                            <a href="#" className='btn'>Buy</a>
                        </div>
                        <div className="product-card">
                            <span className='tag'>Bestseller</span>
                            <img src="assets/images/Image (3).png" alt="" />
                            <div className="product-body">
                                <h6>Jute Table Placemat</h6>
                                <p>Rs 1000 <strike>1200</strike></p>
                            </div>
                            <a href="#" className='btn'>Buy</a>
                        </div>
                        <div className="product-card">
                            <span className='tag'>Bestseller</span>
                            <img src="assets/images/Image (4).png" alt="" />
                            <div className="product-body">
                                <h6>Jute Handbag</h6>
                                <p>Rs 1000 <strike>1200</strike></p>
                            </div>
                            <a href="#" className='btn'>Buy</a>
                        </div>
                        <div className="product-card">
                            <span className='tag'>Bestseller</span>
                            <img src="assets/images/Image (5).png" alt="" />
                            <div className="product-body">
                                <h6>Sling Bag</h6>
                                <p>Rs 1000 <strike>1200</strike></p>
                            </div>
                            <a href="#" className='btn'>Buy</a>
                        </div>
                    </section>
                </div>
            </section>

            {/* Offer Deals Section */}
            <section className='offer-deals'>
                <div className="container">
                    <section className='child-1'>
                        <div>
                            <h4>TAW Basic</h4>
                            <p className='mb-4'>Shop Today's Deals, Lighting Deals, and limited timed discount</p>
                            <a href="#">
                                See more &nbsp;
                                <svg width="51" height="8" viewBox="0 0 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z" fill="black" />
                                </svg>
                            </a>
                        </div>
                        <img src="assets/images/Image (14).png" alt="" />
                    </section>
                    <section>
                        <div>
                            <h4>Deals & Promotions</h4>
                            <p className='mb-4'>Shop Today's Deals, Lighting Deals, and limited timed discount</p>
                            <a href="#">
                                See more &nbsp;
                                <svg width="51" height="8" viewBox="0 0 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z" fill="black" />
                                </svg>
                            </a>
                        </div>
                        <img src="assets/images/Image (13).png" alt="" />
                    </section>
                </div>
            </section>

            {/* Category Section */}
            <section className='shop-category'>
                <div className="container">
                    <section className='header'>
                        <h5>Shop by categories</h5>
                        <a href="#">
                            View all &nbsp;
                            <svg width="51" height="8" viewBox="0 0 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z" fill="black" />
                            </svg>
                        </a>
                    </section>
                    <section className='category'>
                        <div className="category-card">
                            <img src="assets/images/Image (6).png" alt="" />
                            <h6>Fashion Bags</h6>
                            <a href="#" className='btn'>Check</a>
                        </div>
                        <div className="category-card">
                            <img src="assets/images/Image (7).png" alt="" />
                            <h6>Office Accessories</h6>
                            <a href="#" className='btn'>Check</a>
                        </div>
                        <div className="category-card">
                            <img src="assets/images/Image (8).png" alt="" />
                            <h6>Kitchen Ware</h6>
                            <a href="#" className='btn'>Check</a>
                        </div>
                        <div className="category-card">
                            <img src="assets/images/Image (9).png" alt="" />
                            <h6>Storage Bag</h6>
                            <a href="#" className='btn'>Check</a>
                        </div>
                        <div className="category-card">
                            <img src="assets/images/Image (11).png" alt="" />
                            <h6>Dolls</h6>
                            <a href="#" className='btn'>Check</a>
                        </div>
                    </section>
                </div>
            </section>

            {/* Delivery Banner Section */}
            {/* <section className="delivery-banner">
                <div className="container">
                    <section>
                        <span>Discover TAW</span>
                        <h2>TAW Delivers to you</h2>
                        <p>We ship to over all states in India <br /> each region, right to your doorstep 🙂</p>
                    </section>
                    <section>

                    </section>
                </div>
            </section> */}
        </>
    )
}

export default Home

// Woolrich Klettersack Backpack