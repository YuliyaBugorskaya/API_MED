import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { avtUser } from '../../Redux/actions/userAction';

export default function SignIn() {
  const [input, setInput] = useState({});
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(avtUser(input));
    setInput({ email: '', password: '' });
    // axios.post('/api/user/signin', inpit)
    //   .then((res) => setUser(res.data));
  };
  return (
    <div className="row mt-5">
      <div className="col">
        <form onSubmit={submitHandler}>
          <div className="input-group mb-3">
            <input
              name="email"
              value={input.email || ''}
              onChange={inputHandler}
              type="email"
              className="form-control"
              placeholder="email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="input-group mb-3">
            <input
              name="password"
              value={input.password || ''}
              onChange={inputHandler}
              type="password"
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
