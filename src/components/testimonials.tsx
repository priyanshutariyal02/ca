import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mythrojan LLC",
      feedback:
        "PrimeVista has transformed our financial operations with accuracy and efficiency. Their team is proactive, reliable, and a true asset to our business.",
      image: "/assets/images/test1.jpg",
    },
    {
      name: "Lord of Battles Inc",
      feedback:
        "Exceptional service and deep expertise! PrimeVista ensures seamless bookkeeping and compliance, allowing us to focus on scaling our business.",
      image:
        "/assets/images/test2.png",
    },
    {
      name: "Medieworld Europe SL",
      feedback:
        "Timely, precise, and highly professional—PrimeVista has been instrumental in streamlining our accounting processes with unmatched attention to detail.",
      image:
        "/assets/images/test3.png",
    },
    {
      name: "Mcavini LLC",
      feedback:
        "A trusted partner for our financial needs! PrimeVista's team is dedicated, responsive, and consistently delivers top-notch solutions.",
      image:
        "/assets/images/test4.png",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-5 lg:py-14 px-5 lg:px-28  text-gray-800">
      <div className="w-full flex flex-col lg:items-center  lg:justify-center gap-4">
        <h1 className="text-h6 font-bold text-primary flex gap-2 items-center justify-start">
          <p className="w-3 h-3 bg-primary" />
          <span className="text-neutral-800">Testimonials</span>
        </h1>
        <p className="text-h2 font-medium text-neutral-800 leading-none max-w-4xl lg:text-center">
          What Our Client Say
        </p>
        <p className="text-link max-w-2xl text-left lg:text-center">
          Our client&apos;s success is our greatest achievement. Hear what they
          have to say about our expertise, accuracy, and commitment to
          excellence.
        </p>
      </div>
      <p className="text-neutral-600 mb-12 max-w-5xl mx-auto text-body text-center"></p>
      <div className="w-full">
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="p-6 shadow-lg rounded-md bg-white h-[20rem] text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary"
                    width={100}
                    height={100}
                  />
                </div>
                <h1 className="text-xl font-semibold">{testimonial.name}</h1>
                <p className="text-link mt-4 mb-4 text-neutral-600">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <p className=" capitalize text-mini text-neutral-500 mt-16 text-center">
          our user say <strong className="text-primary">Excellent</strong>
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
