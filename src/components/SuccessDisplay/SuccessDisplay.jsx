import styles from "./SuccessDisplay.module.css";

export default function SuccessDisplay() {
  return (
    <section>
      <img></img>
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to 
        <strong>ash@loremcompany.com</strong>. Please open it and click the
        button inside to confirm your subscription.
      </p>

      <button>Dismiss message</button>
    </section>
  );
}
