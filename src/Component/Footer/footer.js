import React from "react";
// import  './home.css';
function Footer() {
    return (
      <div className="">
     
    {/* <!-- Footer Section Begin -->  */}
    <footer className="footer spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__about__logo">
                            <a href="./index.html"><img src="assets/img/logo.png" alt=""/></a>
                        </div>
                        <ul>
                            <li>Address: 60-49 Road 11378 New York</li>
                            <li>Phone: +65 11.188.888</li>
                            <li>Email: hello@colorlib.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                    <div className="footer__widget">
                        <h6>Useful Links</h6>
                        <ul>
                            <li><a href="xyz.com">About Us</a></li>
                            <li><a href="xyz.com">About Our Shop</a></li>
                            <li><a href="xyz.com">Secure Shopping</a></li>
                            <li><a href="xyz.com">Delivery infomation</a></li>
                            <li><a href="xyz.com">Privacy Policy</a></li>
                            <li><a href="xyz.com">Our Sitemap</a></li>
                        </ul>
                        <ul>
                            <li><a href="xyz.com">Who We Are</a></li>
                            <li><a href="xyz.com">Our Services</a></li>
                            <li><a href="xyz.com">Projects</a></li>
                            <li><a href="xyz.com">Contact</a></li>
                            <li><a href="xyz.com">Innovation</a></li>
                            <li><a href="xyz.com">Testimonials</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="footer__widget">
                        <h6>Join Our Newsletter Now</h6>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action="xyz.com">
                            <input type="text" placeholder="Enter your mail"/>
                            <button type="submit" className="site-btn">Subscribe</button>
                        </form>
                        <div className="footer__widget__social">
                            <a href="xyz.com"><i className="fa fa-facebook"></i></a>
                            <a href="xyz.com"><i className="fa fa-instagram"></i></a>
                            <a href="xyz.com"><i className="fa fa-twitter"></i></a>
                            <a href="xyz.com"><i className="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer__copyright">
                        <div className="footer__copyright__text"><p> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="blank">Colorlib</a>
   Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. </p></div>
                        <div className="footer__copyright__payment"><img src="assets/img/payment-item.png" alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer Section End --> */}
      </div>
    );
  }
  
  export default Footer;