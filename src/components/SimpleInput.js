import { useEffect, useState } from "react";
// import { useRef } from "react";

const SimpleInput = (props) => {
  // v. 1 (useRef)
  // const nameInputRef = useRef();
  // v. 2 (useState)
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler = (e) => {
    // prevents default page reload
    e.preventDefault();

    setEnteredNameTouched(true);

    // validation v. 1 - check ifthere's no entry
    if (!enteredNameIsValid) {
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
  };

  const nameInputClasses = enteredNameIsValid
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
