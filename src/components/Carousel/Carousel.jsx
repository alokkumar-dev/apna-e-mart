import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.css";
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 1500,
      cssEase: "linear",
    };
    return (
      <Slider {...settings}>
        <div className="carouselDiv">
          <img
            className="carouselImages"
            src="https://rukminim2.flixcart.com/image/832/832/kwb07m80/watch/l/o/v/1-w05wh-shocknshop-men-original-imag9yjzj7bnaznb.jpeg?q=70"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/832/832/jupu7ww0/watch/t/t/c/mk-2061w-lorenz-original-imaffrwerygwztxk.jpeg?q=70"
            alt=""
            className="carouselImages"
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/416/416/l1l1rww0/headphone/7/5/g/-original-imagd3xdgq9q5k6f.jpeg?q=70"
            alt=""
            className="carouselImages"
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/832/832/kkk1vgw0/shoe/k/p/w/4-tl12-sukun-black-original-imafzvgvwbxzxpkg.jpeg?q=70"
            alt=""
            className="carouselImages"
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/832/832/kz065jk0/shoe/l/5/a/4-662-white-t-rock-white-original-imagb3uwpnmyksp3.jpeg?q=70"
            alt=""
            className="carouselImages"
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/612/612/khxqt8w0-0/book/x/o/v/attitude-is-everything-change-your-attitude-change-your-life-original-imafxtvesfbk8rje.jpeg?q=70"
            alt=""
            className="carouselImages"
          />
        </div>
        <div>
          <img
            src="https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445388/item/ingoods_12_445388.jpg?width=1008&impolicy=quality_75"
            alt=""
            className="carouselImages"
          />
        </div>
      </Slider>
    );
  }
}
