import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // v. 1 (useRef)
  // const nameInputRef = useRef();
  // v. 2 (useState)
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    // validation v. 1
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      // stops the code running
      return;
    }

    setEnteredNameIsValid(true);

    // v. 1
    // const enteredValue = nameInputRef.current.value;

    // v. 1 reseting the value, manipulating the DOM
    // nameInputRef.current.value = '';

    // v. 2 reseting the value
    setEnteredName('');
  };

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        {/* v. 1 */}
        {/* <input ref={nameInputRef} */}

        <input type="text" id="name" onChange={nameInputChangeHandler} value={enteredName} />
        {!enteredNameIsValid && <p className="error-text">Please Enter a Name.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
