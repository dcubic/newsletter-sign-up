import React from 'react';
import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";
import SuccessDisplay from './components/SuccessDisplay/SuccessDisplay.jsx';
import styles from "./App.module.css";

function App() {
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  return <main className={styles.contentContainer}>
    {hasSubmitted ? <SuccessDisplay setHasSubmitted={setHasSubmitted}/> : <SignUpForm setHasSubmitted={setHasSubmitted}/>}
    {/* <SignUpForm />
    <SuccessDisplay /> */}
  </main>
}

export default App