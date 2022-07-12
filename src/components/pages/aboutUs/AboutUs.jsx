import styles from "./aboutAs.module.scss";
import Images from "../../../assets/photo/Images";
import Teachers from "./Teachers";
import Main from "./Main";
import { TrainingFormat } from "./TrainingFormat";
import SliderBlock from "./SliderBlock/SliderBlock";

const AboutUs = () => {
  return (
    <>
      <Main> </Main>

      <Teachers />
      <TrainingFormat />
      <SliderBlock />
    </>
  );
};
export default AboutUs;
