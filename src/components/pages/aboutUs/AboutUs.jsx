import styles from "./aboutAs.module.scss";
import Images from "../../../assets/photo/Images";
import Teachers from "./Teachers";
import Main from "./Main";
import { TrainingFormat } from "./TrainingFormat";
import SliderBlock from "./SliderBlock/SliderBlock";
import InformationBlock from "./InformationBlock";

const AboutUs = () => {
  return (
    <>
      <Main> </Main>

      <Teachers />
      <TrainingFormat />
      <SliderBlock />
      <InformationBlock />
    </>
  );
};
export default AboutUs;
