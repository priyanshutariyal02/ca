import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kristina Draper",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus animi quidem.",
      designation: "Asian Tourist",
      image: "https://evolve2023.in/wp-content/uploads/2014/10/speaker-3.jpg",
    },
    {
      name: "John Doe",
      feedback: "This service is outstanding! Highly recommended.",
      designation: "CEO, Company Inc.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy67Hr1Pv-Qpie8F9yXu-6eTqJNNIDJmg_K5KfSuweEfmIpAs2gTk8qjaARGu_17SoETE&usqp=CAU",
    },
    {
      name: "Jane Smith",
      feedback: "A wonderful experience from start to finish.",
      designation: "Marketing Head, TechCorp",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJcfgOAc8USRCIZQS-Bo-5eldLn6s5x8h8nY6oQuaeB6KL2hbTC-bSgNd0TTvIJaN-nY&usqp=CAU",
    },
    {
      name: "Sam Wilson",
      feedback: "Excellent support and great value.",
      designation: "Freelancer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpKoaQoW7A6TNRUgNKWDGDgNLrFzzBmwgT8DitdVo2lzP59auU1sRrKWE2mlqRJ0xU6o&usqp=CAU",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
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
    <div className="w-full py-16 px-20  text-gray-800">
      <div className="w-full px-4">
        <h1 className="text-7xl  text-left mb-3 flex items-end font-semibold">
          Testimonials <p className="w-28 h-2 bg-primary"/>
        </h1>
        <p className="text-neutral-600 mb-12 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
          nemo, excepturi cupiditate corrupti ad quod optio. Eveniet excepturi.
        </p>

        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="p-6 shadow-lg rounded-md bg-white text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary"
                  />
                </div>
                <h1 className="text-xl font-semibold">{testimonial.name}</h1>
                <p className="text-sm text-gray-600">
                  {testimonial.designation}
                </p>
                <p className="text-lg italic mb-4 text-neutral-600">
                  "{testimonial.feedback}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
