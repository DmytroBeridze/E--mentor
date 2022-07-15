import styles from "./sliderBlock.module.scss";

import Images from "../../../../assets/photo/Images";
// Import Swiper____________________________
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import { SliderImages } from "../../../../assets/photo/sliderGallery/SliderImages";
import { ButtonUniversal } from "../../../button/ButtonUniversal";

const SliderBlock = () => {
  return (
    <>
      <div className={styles.sliderBlockwrapper}>
        <div className={styles.sliderTitle}>Популярные курсы</div>
        <div className={styles.sliderBlock}>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop
          >
            {SliderImages.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className={styles.sliderContainer}>
                    <div className={styles.sliderImageContainer}>
                      <img
                        src={item.imageSlider}
                        alt="im"
                        className={styles.imageSlider}
                      />
                    </div>

                    <div>{item.imageTitle}</div>
                  </div>
                </SwiperSlide>
              );
            })}
            {/* <SwiperSlide>
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
            </SwiperSlide> */}
          </Swiper>
        </div>
        {ButtonUniversal(
          "var(--c-green)",
          "var(--c-white)",
          "0px 20px",
          "Все курсы",
          "",
          "var(--c-green)",
          "67px"
        )}
      </div>
    </>
  );
};
export default SliderBlock;
