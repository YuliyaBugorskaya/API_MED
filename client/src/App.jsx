import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import { checkUser } from './Redux/actions/userAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <Container>

      <Routes>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

      </Routes>
    </Container>
  );
}

export default App;
