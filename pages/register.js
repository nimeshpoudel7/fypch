import { useState } from "react";
const register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(name, email, password);
  };

  return (
    <div>
      <div className='jumbotron  text-center'>
        <h1 className='display-4'>Register</h1>
      </div>
      <div className='container col-md-4 offset-md-4 mt-2  pb-4'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='form-control mb-4 p-4'
            name='name'
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            required
            placeholder='Enter Name'
          />
          <input
            type='text'
            className='form-control mb-4 p-4'
            name='email'
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            placeholder='Enter email'
          />
          <input
            type='text'
            className='form-control mb-4 p-4'
            name='password'
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            placeholder='Enter password'
          />

          <button type='submit' className='btn bg-primary'>
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default register;
