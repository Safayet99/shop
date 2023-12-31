import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Shop from "../Shop/shop";
import Pages from "../Pages/pages";
import Blog from "../Blog/blog";
import Contact from "../Contact/contact";
import Header from "../Header/header";
import CategorySlider from "../Carousel/carousel";
import { Products } from "../../api/product";
import { Blogs } from "../../api/blog";

function Home() {



    const [productsDatas, setProductsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Products();
                setProductsData(data);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    const [BlogsDatas, setBlogsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Blogs();
                setBlogsData(data);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);





    return (
      <div classNameName="">
        <Header />
          {/* <!-- Page Preloder --> */}
    {/* <div id="preloder">
        <div className="loader"></div>
    </div> */}

    {/* <!-- Humberger Begin --> */}
    {/* <div className="humberger__menu__overlay"></div>
    <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
            <a href="xyz.com"><img src="assets/img/logo.png" alt=""/></a>
        </div>
        <div className="humberger__menu__cart">
            <ul>
                <li><a href="xyz.com"><i className="fa fa-heart"></i> <span>1</span></a></li>
                <li><a href="xyz.com"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
            </ul>
            <div className="header__cart__price">item: <span>$150.00</span></div>
        </div>
        <div className="humberger__menu__widget">
            <div className="header__top__right__language">
                <img src="assets/img/language.png" alt=""/>
                <div>English</div>
                <span className="arrow_carrot-down"></span>
                <ul>
                    <li><a href="xyz.com">Spanis</a></li>
                    <li><a href="xyz.com">English</a></li>
                </ul>
            </div>
            <div className="header__top__right__auth">
                <a href="xyz.com"><i className="fa fa-user"></i> Login</a>
            </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
            <ul>
                <li className="active"><a href="./index.html">Home</a></li>
                <li><a href="./shop-grid.html">Shop</a></li>
                <li><a href="xyz.com">Pages</a>
                    <ul className="header__menu__dropdown">
                        <li><a href="./shop-details.html">Shop Details</a></li>
                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                        <li><a href="./checkout.html">Check Out</a></li>
                        <li><a href="./blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="header__top__right__social">
            <a href="xyz.com"><i className="fa fa-facebook"></i></a>
            <a href="xyz.com"><i className="fa fa-twitter"></i></a>
            <a href="xyz.com"><i className="fa fa-linkedin"></i></a>
            <a href="xyz.com"><i className="fa fa-pinterest-p"></i></a>
        </div>
        <div className="humberger__menu__contact">
            <ul>
                <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                <li>Free Shipping for all Order of $99</li>
            </ul>
        </div>
    </div> */}
    {/* <!-- Humberger End --> */}

    {/* <!-- Header Section Begin --> */}
    {/* <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                            <div className="header__top__right__social">
                                <a href="xyz.com"><i className="fa fa-facebook"></i></a>
                                <a href="xyz.com"><i className="fa fa-twitter"></i></a>
                                <a href="xyz.com"><i className="fa fa-linkedin"></i></a>
                                <a href="xyz.com"><i className="fa fa-pinterest-p"></i></a>
                            </div>
                            <div className="header__top__right__language">
                                <img src="assets/img/language.png" alt=""/>
                                <div>English</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="xyz.com">Spanis</a></li>
                                    <li><a href="xyz.com">English</a></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <a href="xyz.com"><i className="fa fa-user"></i> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a href="./index.html"><img src="assets/img/logo.png" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><a href="./index.html">Home</a></li>
                            <li><a href="./shop-grid.html">Shop</a></li>
                            <li><a href="xyz.com">Pages</a>
                                <ul className="header__menu__dropdown">
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="./blog.html">Blog</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><a href="xyz.com"><i className="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="xyz.com"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                        </ul>
                        <div className="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header> */}
    {/* <!-- Header Section End --> */}

    {/* <!-- Hero Section Begin --> */}
    <section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="hero__categories">
                        <div className="hero__categories__all">
                            <i className="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul>
                            <li><a href="xyz.com">Fresh Meat</a></li>
                            <li><a href="xyz.com">Vegetables</a></li>
                            <li><a href="xyz.com">Fruit & Nut Gifts</a></li>
                            <li><a href="xyz.com">Fresh Berries</a></li>
                            <li><a href="xyz.com">Ocean Foods</a></li>
                            <li><a href="xyz.com">Butter & Eggs</a></li>
                            <li><a href="xyz.com">Fastfood</a></li>
                            <li><a href="xyz.com">Fresh Onion</a></li>
                            <li><a href="xyz.com">Papayaya & Crisps</a></li>
                            <li><a href="xyz.com">Oatmeal</a></li>
                            <li><a href="xyz.com">Fresh Bananas</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="xyz.com">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?"/>
                                <button type="submit" className="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero__item set-bg" data-setbg=""style={{backgroundImage:"URL(assets/img/hero/banner.jpg)"}}>
                    
                        <div className="hero__text">
                            <span>FRUIT FRESH</span>
                            <h2>Vegetable <br />100% Organic</h2>
                            <p>Free Pickup and Delivery Available</p>
                            <a href="xyz.com" className="primary-btn">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Hero Section End --> */}

    {/* <!-- Categories Section Begin --> */}
    <section className="categories">
        {/* <div className="container">
            <div className="row">
                <div className="categories__slider owl-carousel">
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="assets/img/categories/cat-1.jpg  ">
                        <a href="./index.html"><img src="assets/img/categories/cat-1.jpg" alt=""/> </a>
                            <h5><a href="xyz.com">Fresh Fruit</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="assets/img/categories/cat-2.jpg">
                        <a href="./index.html"><img src="assets/img/categories/cat-2.jpg" alt=""/> </a>
                            <h5><a href="xyz.com">Dried Fruit</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="assets/img/categories/cat-3.jpg">
                        <a href="./index.html"><img src="assets/img/categories/cat-3.jpg" alt=""/> </a>
                            <h5><a href="xyz.com">Vegetables</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="assets/img/categories/cat-4.jpg">
                        <a href="./index.html"><img src="assets/img/categories/cat-4.jpg" alt=""/> </a>
                            <h5><a href="xyz.com">drink fruits</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="assets/img/categories/cat-5.jpg">
                        <a href="./index.html"><img src="assets/img/categories/cat-5.jpg" alt=""/> </a>
                            <h5><a href="xyz.com">drink fruits</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <CategorySlider />
    </section>
    {/* <!-- Categories Section End --> */}

    {/* <!-- Featured Section Begin --> */}
    <section className="featured spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>

                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".oranges">Oranges</li>
                            <li data-filter=".fresh-meat">Fresh Meat</li>
                            <li data-filter=".vegetables">Vegetables</li>
                            <li data-filter=".fastfood">Fastfood</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row featured__filter">

{/* 
                        {productsDatas.map((product, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                                    <img src={product.image} alt="" className="w-100" />

                                    <div className="content">
                                        <h5>{product.name}</h5>
                                        <p>{product.price}</p>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        ))} */}






                        {productsDatas.map((product, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" key={index}>
                    <div className="featured__item">
                    <div className="featured__item__pic set-bg" data-setbg="">
                                    <a href="./"> <img src={product.image} alt="" className="w-100" /></a>
                            <ul className="featured__item__pic__hover">
                                <li><a href="xyz.com"><i className="fa fa-heart"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                                    <h6><a href="">{product.name}</a></h6>
                                    <h5>${product.price}</h5>
                        </div>
                    </div>
                </div>
                        ))}
                {/* <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg">
                        <a href="./index.html"><img src="assets/img/featured/feature-2.jpg" alt=""/> </a>
                            <ul className="featured__item__pic__hover">
                                <li><a href="xyz.com"><i className="fa fa-heart"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="xyz.com">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg">
                        <a href="./index.html"><img src="assets/img/featured/feature-3.jpg" alt=""/> </a>
                            <ul className="featured__item__pic__hover">
                                <li><a href="xyz.com"><i className="fa fa-heart"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="xyz.com">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg">
                        <a href="./index.html"><img src="assets/img/featured/feature-4.jpg" alt=""/> </a>
                            <ul className="featured__item__pic__hover">
                                <li><a href="xyz.com"><i className="fa fa-heart"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="xyz.com">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg">
                        <a href="./index.html"><img src="assets/img/featured/feature-5.jpg" alt=""/> </a>
                            <ul className="featured__item__pic__hover">
                                <li><a href="xyz.com"><i className="fa fa-heart"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="xyz.com">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg">
                        <a href="./index.html"><img src="assets/img/featured/feature-6.jpg" alt=""/> </a>
                            <ul className="featured__item__pic__hover">
                                <li><a href="xyz.com"><i className="fa fa-heart"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="xyz.com">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" >
                        <a href="./index.html"><img src="assets/img/featured/feature-7.jpg" alt=""/> </a>
                            <ul className="featured__item__pic__hover">
                                <li><a href="xyz.com"><i className="fa fa-heart"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="xyz.com">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg">
                                    <a href="./index.html"><img src="assets/img/featured/feature-8.jpg" alt="" /> </a>
                            <ul className="featured__item__pic__hover">
                                <li><a href="xyz.com"><i className="fa fa-heart"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="xyz.com"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="xyz.com">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div> */}
                
            </div>
        </div>
    </section>
    {/* <!-- Featured Section End --> */}

    {/* <!-- Banner Begin --> */}
    <div className="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        <img src="assets/img/banner/banner-1.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        <img src="assets/img/banner/banner-2.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Banner End --> */}

    {/* <!-- Latest Product Section Begin --> */}
    <section className="latest-product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Latest Products</h4>
                        <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-1.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-2.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-3.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                            <div className="latest-prdouct__slider__item">
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-1.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-2.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-3.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Top Rated Products</h4>
                        <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-1.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-2.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-3.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                            <div className="latest-prdouct__slider__item">
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-1.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-2.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-3.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Review Products</h4>
                        <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-1.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-2.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-3.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                            <div className="latest-prdouct__slider__item">
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-1.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-2.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="xyz.com" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="assets/img/latest-product/lp-3.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Latest Product Section End --> */}

    {/* <!-- Blog Section Begin --> */}
    <section className="from-blog spad">
        
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title from-blog__title">
                        <h2>From The Blog</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                        {BlogsDatas.map((blog, index) => (
                            <div className="col-lg-4 col-md-4 col-sm-6" key={index} >
                    <div className="blog__item">
                        <div className="blog__item__pic">
                                        <img src={blog.image} alt="" className="w-100" />
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i className="fa fa-comment-o"></i> 5</li>
                            </ul>
                                        <h5><a href="xyz.com">{blog.name}</a></h5>
                                        <p>{blog.description} </p>
                        </div>
                    </div>
                </div>

                //  <div className="col-lg-4 col-md-4 col-sm-6">
                //     <div className="blog__item">
                //         <div className="blog__item__pic">
                //             <img src="assets/img/blog/blog-2.jpg" alt=""/>
                //         </div>
                //         <div className="blog__item__text">
                //             <ul>
                //                 <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                //                 <li><i className="fa fa-comment-o"></i> 5</li>
                //             </ul>
                //             <h5><a href="xyz.com">6 ways to prepare breakfast for 30</a></h5>
                //             <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                //         </div>
                //     </div>
                // </div>
                // <div className="col-lg-4 col-md-4 col-sm-6">
                //     <div className="blog__item">
                //         <div className="blog__item__pic">
                //             <img src="assets/img/blog/blog-3.jpg" alt=""/>
                //         </div>
                //         <div className="blog__item__text">
                //             <ul>
                //                 <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                //                 <li><i className="fa fa-comment-o"></i> 5</li>
                //             </ul>
                //             <h5><a href="xyz.com">Visit the clean farm in the US</a></h5>
                //             <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                //         </div>
                //     </div>
                // </div> 
                        
                        ))}
            </div>
        </div>
    </section>
    {/* <!-- Blog Section End --> */}
{/* 
    <!-- Footer Section Begin --> */}
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
  
  export default Home;