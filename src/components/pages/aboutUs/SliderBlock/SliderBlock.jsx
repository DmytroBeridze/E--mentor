import styles from "./sliderBlock.module.scss";

import Images from "../../../../assets/photo/Images";
// Import Swiper____________________________
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const SliderBlock = () => {
  return (
    <>
      <div className={styles.sliderBlockwrapper}>
        <div className={styles.sliderBlock}>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop
          >
            <SwiperSlide>
              Slide 1{" "}
              <img src={Images.image3} alt="im" className="imageTeacher" />
            </SwiperSlide>
            <SwiperSlide>
              Slide 2{" "}
              <img src={Images.image4} alt="im" className="imageTeacher" />
            </SwiperSlide>
            <SwiperSlide>
              Slide 3{" "}
              <img src={Images.image5} alt="im" className="imageTeacher" />
            </SwiperSlide>
            <SwiperSlide>
              Slide 4{" "}
              <img src={Images.image6} alt="im" className="imageTeacher" />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default SliderBlock;
