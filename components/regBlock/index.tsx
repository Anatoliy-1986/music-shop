import clsx from "clsx";
import Image from "next/image";
import { BaseSyntheticEvent, useState } from "react";
import styles from "./RegForm.module.scss";

export const RegForm = () => {
  const [value, setValue] = useState("");
  const [isEmptyValue, setIsEmptyValue] = useState({
    active: false,
    shake: false,
  });

  const [isFocused, setIsFocused] = useState(false);
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  const handleChange = (evt: BaseSyntheticEvent) => setValue(evt.target.value);

  const addShaker = () => setIsEmptyValue({ active: true, shake: false });

  const handleSubmit = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    console.log(value);

    if (!value) {
      setIsEmptyValue({ active: true, shake: true });
    }

    if (value) {
      setIsEmptyValue({ active: false, shake: false });
      evt.target.reset();
      setValue("");
    }
  };

  const formClassName = clsx(styles.form, {
    [styles.form_focus]: isFocused,
  });

  const errorClassName = clsx(styles.error, {
    [styles.error_active]: isEmptyValue.active,
    [styles.error_shaker]: isEmptyValue.shake,
  });

  return (
    <section className={styles.root}>
      <Image
        className={styles.notes}
        width={1145}
        height={290}
        src="/assets/images/formNotes.png"
        alt="notes"
      />
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Subscribe</h2>
        <p className={styles.subTitle}>
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <form className={formClassName} method="post" onSubmit={handleSubmit}>
          <label className={styles.label}>
            Email
            <input
              className={styles.email}
              type="email"
              placeholder="Enter Your email address"
              name="email"
              onChange={handleChange}
              onBlur={onBlur}
              onFocus={onFocus}
            />
          </label>
          <span
            onAnimationEnd={addShaker}
            className={errorClassName}
            aria-label="error"
          >
            enter email
          </span>
          <button
            className={styles.regButton}
            type="submit"
            disabled={isEmptyValue.shake}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
