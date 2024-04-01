import styles from "./SuccessDisplay.module.css";
// import formStyles from "../../sharedCSSModules/formStyles.module.css";
import checkMark from "../../assets/images/icon-success.svg";

export default function SuccessDisplay() {
  return (
    <section>
      <img src={checkMark}></img>
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to
        <strong> ash@loremcompany.com</strong>. Please open it and click the
        button inside to confirm your subscription.
      </p>

      <button className={formStyles.button}>Dismiss message</button>
    </section>
  );
}
