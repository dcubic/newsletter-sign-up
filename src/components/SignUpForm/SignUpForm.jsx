import styles from "./SignUpForm.module.css";
import MobileSignUpImage from "../../assets/images/illustration-sign-up-mobile.svg";
import DesktopSignUpImage from "../../assets/images/illustration-sign-up-desktop.svg";

export default function SignUpForm() {
  return (
    <>
      <section>
        <img src={MobileSignUpImage}></img>
        {/* <img src={DesktopSignUpImage}></img> */}
      </section>
      <section>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <form>
          <fieldset>
            <legend>Email address</legend>
            <input placeholder="email@company.com"></input>
            <button>Subscribe to monthly newsletter</button>
          </fieldset>
        </form>
      </section>
    </>
  );
}
