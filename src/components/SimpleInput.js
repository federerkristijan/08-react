import { useEffect, useState } from "react";
// import { useRef } from "react";

const SimpleInput = (props) => {
  // v. 1 (useRef)
  // const nameInputRef = useRef();
  // v. 2 (useState)
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailIsValid = enteredEmail.match(/^\S+@\S+\.\S+$/);
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = e => {
    setEnteredEmail(e.target.value);
  };

  const emailInputBlurHandler = e => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = (e) => {
    // prevents default page reload
    e.preventDefault();

    setEnteredNameTouched(true);
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

    // v. 2 reseting the value
    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
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
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
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
