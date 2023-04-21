import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postUser } from '../../Redux/actions/userAction';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {
  const [input, setInput] = useState({ email: '', name: '', password: '' });
  console.log(input);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postUser(input));
    console.log(input);
    setInput({ email: '', name: '', password: '' });
  };

  return (
    <div className="row mt-5">
      <div className="col">
        <form onSubmit={submitHandler}>

          <div className="input-group mb-3">
            <input
              name="name"
              type="text"
              onChange={inputHandler}
              value={input.name || ''}
              className="form-control"
              placeholder="name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="input-group mb-3">
            <input
              name="email"
              type="email"
              onChange={inputHandler}
              value={input.email || ''}
              className="form-control"
              placeholder="email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="input-group mb-3">
            <input
              name="password"
              type="password"
              value={input.password || ''}
              onChange={inputHandler}
              className="form-control"
              placeholder="password"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <button type="submit" className="btn btn-light">submit</button>
        </form>
      </div>
    </div>
  );
}
