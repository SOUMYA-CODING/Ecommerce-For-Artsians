import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container mt-5 py-5">
                    <section className='website-info'>
                        <img src="assets/icons/logo.png" alt="" className='weblogo' />
                        <p className='mt-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, itaque.
                            Iste sapiente optio deleniti necessitatibus at temporibus. Aperiam necessitatibus
                            id consequatur nihil consequuntur iste aliquam tempora doloremque nam ea perferendis
                            fuga et dignissimos temporibus autem aspernatur, error eaque voluptatum a maxime
                            dolorum? Voluptatem iure quisquam consequuntur molestiae velit perferendis corporis.
                        </p>
                        <div className="icons-section">
                            <p>Connect with us :</p>
                            <div className="icons">
                                <a href=""><i class="uil uil-facebook"></i></a>
                                <a href=""><i class="uil uil-instagram"></i></a>
                                <a href=""><i class="uil uil-twitter"></i></a>
                            </div>
                        </div>
                    </section>

                    <section className='links'>
                        <h3>Useful Links</h3>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Accessories</a></li>

                            <li><a href="">Cart</a></li>
                            <li><a href="">Terms</a></li>
                            <li><a href="">Wishlist</a></li>
                            <li><a href="">My Account</a></li>
                        </ul>
                    </section>

                    <section className='message-form'>
                        <h3>Message Us</h3>
                        <form action="" autoComplete='off'>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" />
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" rows="3"></textarea>
                            </div>
                            <button className='btn'>Send</button>
                        </form>
                    </section>
                </div>
                <div className='author-details'>
                    <div className="container">
                        <p>&copy; 2022 handcrafted by</p>
                        <a href="">Soumya prakash sahu</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer