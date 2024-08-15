import React from "react";
import FeatuerCard from "./FeatuerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Feature() {
  const settings = {
    // dots: true, // Enable dots for better navigation
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    
    responsive: [
      {
        breakpoint: 1200, // For large screens (1200px and above)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024, // For medium screens (1024px to 1199px)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For smaller tablets (768px to 1023px)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // For mobile screens (600px to 767px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For very small screens (less than 600px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  const features = [
    {
      id: 1,
      image:
      "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTJJhceir7OTB6p4jMwYYKOVZ0jHRKX8PpK-1dvQZgSIJOqMEoYuRq6jjpXPdG_MIsacloehT5GxOSgw2RII5Y",
      description:
        "Lorem ipsum dolor sit  elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      price: 3850,
      title: "15421 Southwest 39th Terrac",
    },
    {
      id: 2,
      image:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRlYWm503BNBYbTaJS7q05g6Wsz64rtgkSpwTCKCySK3fCALCNG9_rQ_RVAJoerzBYlK0oJKME-F_7yUEqETN4",
      description:
        "Lorem ipsum dolor sit amet consicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      price: 185000,
      title: "700 Front Street,Key West,FL",
    },
    {
      id: 3,
      image:
        "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTJJhceir7OTB6p4jMwYYKOVZ0jHRKX8PpK-1dvQZgSIJOqMEoYuRq6jjpXPdG_MIsacloehT5GxOSgw2RII5Y",
      description:
        "Lorem ipsum et consectetur adipisicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      price: 3245,
      title: "701 Biscayne Boulevebed Miami",
    },
    {
      id: 4,
      image:
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRlYWm503BNBYbTaJS7q05g6Wsz64rtgkSpwTCKCySK3fCALCNG9_rQ_RVAJoerzBYlK0oJKME-F_7yUEqETN4",
      description:
        "Lorem ipsum dolor sectetur adipisicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      price: 6544,
      title: "1531 Grand Avenue, CocoWalk",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Lorem ipsum dolor sit amet consectetur additate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      price: 1243,
      title: "700 Front Street,Key West,FL",
    },
    {
      id: 6,
      image:
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcScIM_ig8HUCU1jDxpxEdr2IFcZMpVD2jhVxBQEBt19h1Edj1wgF9QKTwBuWD4gPPSM5FFX8jKIoF06ChwfctI",
      description:
        "Lorem ipsum dolor sit amet consecteing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      price: 2342,
      title: "1531 Grand Avenue, CocoWalk",
    },
  ];
  return (
    // <div className='row border border-2 p-5'>
    //     <div className='border border-1 col-10 col-md-12 mx-auto my-2'>
    //         <h5>Features Properties</h5>
    //         <p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
    //     </div>
    //     <FeatuerCard></FeatuerCard>
    //     <FeatuerCard></FeatuerCard>
    //     <FeatuerCard></FeatuerCard>
    //     <FeatuerCard></FeatuerCard>
    // </div>
    <>
      <div className="row "  style={{fontFamily:'"Times New Roman", Times, serif'}}>
        <div
          className=" col-10 col-md-12 mx-auto my-2 pt-5"
          style={{ paddingLeft: "30px" }}
        >
          <h5 className="fw-bold">Features Properties</h5>
          <p class="fw-lighter p-0 card-subtitle text-muted">
            View A list Of Feature Properties
          </p>
        </div>
      </div>
      <div className="col-12">
        <Slider {...settings}>
          {features.map((feature) => (
            <FeatuerCard
              key={feature.id}
              image={feature.image}
              description={feature.description}
              price={feature.price}
              title={feature.title}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Feature;
