import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import "./carousel.css";

function CategorySlider() {
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
        <div className="categories__item p-2">
          <img  src="assets/img/categories/cat-1.jpg" alt="Fresh Fruit" />
          <h5><a href="#">Fresh Fruit</a></h5>
        </div>
        <div className="categories__item p-2">
          <img  src="assets/img/categories/cat-1.jpg" alt="Fresh Fruit" />
          <h5><a href="#">Fresh Fruit</a></h5>
        </div>
        <div className="categories__item p-2">
          <img src="assets/img/categories/cat-2.jpg" alt="Dried Fruit" />
          <h5><a href="#">Dried Fruit</a></h5>
        </div>
        <div className="categories__item p-2 ">
          <img src="assets/img/categories/cat-3.jpg" alt="Vegetables" />
          <h5><a href="#">Vegetables</a></h5>
        </div>
        <div className="categories__item p-2">
          <img src="assets/img/categories/cat-4.jpg" alt="Drink Fruits" />
          <h5><a href="#">Drink Fruits</a></h5>
        </div>
        <div className="categories__item p-2">
          <img src="assets/img/categories/cat-5.jpg" alt="Drink Fruits" />
          <h5><a href="#">Drink Fruits</a></h5>
        </div>
        </div>
        <div className='row'>
        <div className="categories__item p-2">
          <img  src="assets/img/categories/cat-1.jpg" alt="Fresh Fruit" />
          <h5><a href="#">Fresh Fruit</a></h5>
        </div>
        <div className="categories__item p-2">
          <img  src="assets/img/categories/cat-1.jpg" alt="Fresh Fruit" />
          <h5><a href="#">Fresh Fruit</a></h5>
        </div>
        <div className="categories__item p-2">
          <img src="assets/img/categories/cat-2.jpg" alt="Dried Fruit" />
          <h5><a href="#">Dried Fruit</a></h5>
        </div>
        <div className="categories__item p-2 ">
          <img src="assets/img/categories/cat-3.jpg" alt="Vegetables" />
          <h5><a href="#">Vegetables</a></h5>
        </div>
        <div className="categories__item p-2">
          <img src="assets/img/categories/cat-4.jpg" alt="Drink Fruits" />
          <h5><a href="#">Drink Fruits</a></h5>
        </div>
        <div className="categories__item p-2">
          <img src="assets/img/categories/cat-5.jpg" alt="Drink Fruits" />
          <h5><a href="#">Drink Fruits</a></h5>
        </div>
        </div>
      
      </Carousel>
    </div>
  );
}

export default CategorySlider;
