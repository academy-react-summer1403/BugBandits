import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import  slider01 from "./../../../assets/images/landing/slider01.svg";

const NewsSlider = () => {
  const slides = [
    {
      title: "1سرتیتر خبر",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و",
      img:slider01,    
    },{
      title: "2سرتیتر خبر",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و",
      img:slider01,
    },{
      title: "3سرتیتر خبر",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و",
      img: slider01,
    },{
      title: "4سرتیتر خبر",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و",
      img: slider01,
    },
  ];

  return (
    <div className="w-11/12 h-[600px] border-[4px] m-auto mt-96 flex flex-col justify-center">
      <h1 className="text-cool_blue text-2xl font-bold m-auto">آخرین اخبار</h1>
      {/* <div className="w-[800px] h-full border m-auto">
        <Swiper modules={[Navigation]} navigation>

          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <img
                src={slide.img}
                alt="Slide"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <h2 className="text-xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-gray-600">{slide.content}</p>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div> */}
    </div>
  );
};

export { NewsSlider };
