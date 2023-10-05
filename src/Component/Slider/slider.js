import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import "./slider.css";


function Slider() {
  return (
    <div className="categories">
      <Carousel
        showArrows={true} // Display navigation arrows
        showThumbs={false} // Hide thumbnail images
        infiniteLoop={true} // Enable infinite loop
        autoPlay={true} // Enable auto-play
        interval={5000} // Auto-play interval in milliseconds (adjust as needed)
      >
         <div className='row'>
         {/* <div className="section-title product__discount__title">
                  <h2>Sale Off</h2>
                </div> */}
                 <div className="categories__item p-2 col-4 w-100">
                    <div className="product__discount__item">
                           <div
                          className="product__discount__item__pic set-bg "
                          data-setbg="assets/img/product/discount/pd-2.jpg"
                             >
                          <a href="./index.html">
                            <img
                              src="assets/img/product/discount/pd-2.jpg"
                              alt=""
                            />{" "}
                          </a>
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Vegetables</span>
                          <h5>
                            <a href="#">Vegetables’package</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
        
        <div className="categories__item p-2 col-4">
        <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          data-setbg="assets/img/product/discount/pd-3.jpg"
                        >
                          <a href="./index.html">
                            <img
                              src="assets/img/product/discount/pd-3.jpg"
                              alt=""
                            />{" "}
                          </a>
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Mixed Fruitss</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
        </div>
        </div>
        <div className="categories__item p-2 col-4">
                    <div className="product__discount__item">
                           <div
                          className="product__discount__item__pic set-bg "
                          data-setbg="assets/img/product/discount/pd-2.jpg"
                             >
                          <a href="./index.html">
                            <img
                              src="assets/img/product/discount/pd-2.jpg"
                              alt=""
                            />{" "}
                          </a>
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Vegetables</span>
                          <h5>
                            <a href="#">Vegetables’package</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
        
        <div className="categories__item p-2 col-4">
        <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          data-setbg="assets/img/product/discount/pd-3.jpg"
                        >
                          <a href="./index.html">
                            <img
                              src="assets/img/product/discount/pd-3.jpg"
                              alt=""
                            />{" "}
                          </a>
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Mixed Fruitss</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
        </div>
        </div>
        <div className="categories__item p-2 col-4">
                    <div className="product__discount__item">
                           <div
                          className="product__discount__item__pic set-bg "
                          data-setbg="assets/img/product/discount/pd-2.jpg"
                             >
                          <a href="./index.html">
                            <img
                              src="assets/img/product/discount/pd-2.jpg"
                              alt=""
                            />{" "}
                          </a>
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Vegetables</span>
                          <h5>
                            <a href="#">Vegetables’package</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
        
        <div className="categories__item p-2 col-3">
        <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          data-setbg="assets/img/product/discount/pd-3.jpg"
                        >
                          <a href="./index.html">
                            <img
                              src="assets/img/product/discount/pd-3.jpg"
                              alt=""
                            />{" "}
                          </a>
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Mixed Fruitss</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
        </div>
        </div>
        <div className="categories__item p-2 col-4">
                    <div className="product__discount__item">
                           <div
                          className="product__discount__item__pic set-bg "
                          data-setbg="assets/img/product/discount/pd-2.jpg"
                             >
                          <a href="./index.html">
                            <img
                              src="assets/img/product/discount/pd-2.jpg"
                              alt=""
                            />{" "}
                          </a>
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Vegetables</span>
                          <h5>
                            <a href="#">Vegetables’package</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
        
        <div className="categories__item p-2 col-3">
        <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          data-setbg="assets/img/product/discount/pd-3.jpg"
                        >
                          <a href="./index.html">
                            <img
                              src="assets/img/product/discount/pd-3.jpg"
                              alt=""
                            />{" "}
                          </a>
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Mixed Fruitss</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
        </div>
        </div>
        <div className="categories__item p-2 col-4">
                    <div className="product__discount__item">
                           <div
                          className="product__discount__item__pic set-bg "
                          data-setbg="assets/img/product/discount/pd-2.jpg"
                             >
                          <a href="./index.html">
                            <img
                              src="assets/img/product/discount/pd-2.jpg"
                              alt=""
                            />{" "}
                          </a>
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Vegetables</span>
                          <h5>
                            <a href="#">Vegetables’package</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
        
        <div className="categories__item p-2 col-3">
        <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          data-setbg="assets/img/product/discount/pd-3.jpg"
                        >
                          <a href="./index.html">
                            <img
                              src="assets/img/product/discount/pd-3.jpg"
                              alt=""
                            />{" "}
                          </a>
                          <div className="product__discount__percent">-20%</div>
                          <ul className="product__item__pic__hover">
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-retweet"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="#">Mixed Fruitss</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
        </div>
        </div>
        </div> 


     
       






                












      </Carousel>
    </div>
  );
}

export default Slider;
