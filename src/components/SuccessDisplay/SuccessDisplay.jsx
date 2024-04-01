import styles from "./SuccessDisplay.module.css";
import formStyles from "../../sharedCSSModules/formStyles.module.css";
import checkMark from "../../assets/images/icon-success.svg";

export default function SuccessDisplay({setHasSubmitted}) {
  function handleClick() {
    setHasSubmitted(hasSubmitted => !hasSubmitted)
  }

  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <img src={checkMark} className={styles.checkMarkImage}></img>
        <h1 className={styles.header}>Thanks for subscribing!</h1>
        <p className={styles.paragraph}>
          A confirmation email has been sent to
          <strong className={styles.bold}> ash@loremcompany.com</strong>. Please open it and click the
          button inside to confirm your subscription.
        </p>
      </div>

      <button className={formStyles.button} onClick={handleClick}>Dismiss message</button>
    </section>
  );
}
