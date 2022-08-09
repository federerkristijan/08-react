import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.match(/^\S+@\S+\.\S+$/);

const BasicForm = (props) => {
  useInput(isNotEmpty);
  useInput(isNotEmpty);
  useInput();

  return (
    <form>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
