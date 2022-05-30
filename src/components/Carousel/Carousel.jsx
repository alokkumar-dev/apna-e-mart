
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
    //   dots: true,
      infinite: true,
      slidesToShow: 3,
    //   slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 1,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div
         
          className="carouselDiv"
          >
            <img
              src="https://rukminim2.flixcart.com/image/612/612/kyrlifk0/t-shirt/0/u/s/l-tdgyblhenful-d37-tripr-original-imagax9x6pkgwwg9.jpeg?q=70"
              alt=""
              height={"400px"} width={"400px"}
              style={{border:"3px solid", borderRadius:"10px"}}
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/image/832/832/jupu7ww0/watch/t/t/c/mk-2061w-lorenz-original-imaffrwerygwztxk.jpeg?q=70"
              alt=""
              height={"400px"} width={"400px"}
              style={{border:"3px solid", borderRadius:"10px"}}
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/image/416/416/l1l1rww0/headphone/7/5/g/-original-imagd3xdgq9q5k6f.jpeg?q=70"
              alt=""
              height={"400px"} width={"400px"}
              style={{border:"3px solid", borderRadius:"10px"}}
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/image/832/832/kkk1vgw0/shoe/k/p/w/4-tl12-sukun-black-original-imafzvgvwbxzxpkg.jpeg?q=70"
              alt=""
              height={"400px"} width={"400px"}
              style={{border:"3px solid", borderRadius:"10px"}}
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/image/832/832/kz065jk0/shoe/l/5/a/4-662-white-t-rock-white-original-imagb3uwpnmyksp3.jpeg?q=70"
              alt=""
              height={"400px"} width={"400px"}
              style={{border:"3px solid", borderRadius:"10px"}}
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/image/612/612/kq6yefk0/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq.jpeg?q=70"
              alt=""
              height={"400px"} width={"400px"}
              style={{border:"3px solid", borderRadius:"10px"}}
            />
          </div>
        </Slider>
      </div>
    );
  }
}