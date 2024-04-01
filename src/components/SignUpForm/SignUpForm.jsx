import styles from "./SignUpForm.module.css";
import { useState } from "react";
import formStyles from "../../sharedCSSModules/formStyles.module.css";
import MobileSignUpImage from "../../assets/images/illustration-sign-up-mobile.svg";
import DesktopSignUpImage from "../../assets/images/illustration-sign-up-desktop.svg";
import { listText } from "./Data.js";

export default function SignUpForm({ setHasSubmitted }) {
  const [email, setEmail] = useState("");
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  const validEmailRegex = /\w+@\w+.com/;
  function handleClick() {
    console.log("Clicked button.");
    if (validEmailRegex.test(email)) {
      setHasSubmitted(hasSubmitted => !hasSubmitted);
    }
  }

  return (
    <div class={styles.container}>
      <section class={styles.imageContainer}>
        <img src={MobileSignUpImage} className={styles.mobileHeaderImage}></img>
        <img
          src={DesktopSignUpImage}
          className={styles.desktopHeaderImage}
        ></img>
      </section>
      <section className={styles.contentSection}>
        <h1 className={styles.title}>Stay updated!</h1>
        <p className={styles.paragraph}>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className={styles.featureList}>
          {listText.map((text) => (
            <li className={styles.listElement}>{text}</li>
          ))}
        </ul>
        <form>
          <fieldset className={formStyles.fieldset}>
            <legend className={formStyles.legend}>Email address</legend>
            <input
              placeholder="email@company.com"
              className={formStyles.input}
              onChange={handleEmailChange}
            ></input>
            <button className={formStyles.button} onClick={handleClick}>
              Subscribe to monthly newsletter
            </button>
          </fieldset>
        </form>
      </section>
    </div>
  );
}
