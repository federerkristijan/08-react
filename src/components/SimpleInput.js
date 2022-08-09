import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {  value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler, reset: resetNameInput } = useInput(value => value.trim() !== '');

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.match(/^\S+@\S+\.\S+$/);
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = e => {
    setEnteredEmail(e.target.value);
  };

  const emailInputBlurHandler = e => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = (e) => {
    // prevents default page reload
    e.preventDefault();

    setEnteredEmailTouched(true);

    // validation v. 1 - check if there's no entry
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      // stops the code running
      return;
    }

    // v. 1
    // const enteredValue = nameInputRef.current.value;

    // v. 1 reseting the value, manipulating the DOM
    // nameInputRef.current.value = '';

    resetNameInput();

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        {/* v. 1 */}
        {/* <input ref={nameInputRef} */}

        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Please Enter a Name.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please Enter a Valid Email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
