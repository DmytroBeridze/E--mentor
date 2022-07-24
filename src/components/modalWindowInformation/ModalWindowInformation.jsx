import styles from "./modalWindowInformation.module.scss";
import { useForm } from "react-hook-form";

import axios from "axios";
import classNames from "classnames";

const ModalWindowInformation = ({ closeInfoModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log("Відправлено:", data);
    reset();

    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: { data },
    });
    console.log(axios);
  };
  console.log(errors);

  return (
    <>
      <div className={styles.modalInformationWrapper}>
        <div className={styles.modalInformationWindow}>
          <button
            onClick={() => closeInfoModal(false)}
            className={styles.modalInformationButton}
          >
            X
          </button>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.modalInformationForm}
          >
            <h3>Form</h3>
            <label>
              <div>First name:</div>
              <input
                className={styles.test}
                {...register("name", { required: "true", maxLength: 15 })}
              />
            </label>

            <div className={styles.errorActive}>
              {errors.name && <p> Обов'язкове поле не більше 15 символів</p>}
            </div>

            <label>
              <div>Age:</div>
              <input
                defaultValue="20"
                {...register("age", {
                  required: "Обов'язкове поле від 18 до 99",
                  pattern: /\d?\d/,
                  min: 18,
                  max: 99,
                })}
              />
            </label>
            <div className={styles.errorActive}>
              {errors?.age && <p>{errors?.age?.message || "error"}</p>}
            </div>

            <select {...register("ansver")}>
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>
            <input
              type="submit"
              value="SUBMIT"
              className={styles.submitButton}
            />
            {/* <input type="submit" />
            Скільки раз відправлена?{submitCount} */}
          </form>
        </div>
      </div>
    </>
  );
};
export default ModalWindowInformation;
