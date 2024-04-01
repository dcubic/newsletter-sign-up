import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";
import SuccessDisplay from './components/SuccessDisplay/SuccessDisplay.jsx';
import styles from "./App.module.css";

function App() {
  return <main className={styles.contentContainer}>
    {/* <SignUpForm /> */}
    <SuccessDisplay />
  </main>
}

export default App