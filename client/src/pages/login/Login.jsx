import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Signup from '../signup/Signup';
import "./login.css";

import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../utils/mutations';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  const [loginUser, {error}] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await loginUser({
        variables: {...userFormData}
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
    <div className="content">
      <div className="container">
        <div className="card">
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <h2>Login</h2>
        <Form.Group>
          <Form.Label htmlFor='email'></Form.Label>
          <Form.Control
            className="input"
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'></Form.Label>
          <Form.Control
            className="input"
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          className='btn'
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>

      <Signup />
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;

// import { useState } from 'react';

// import { Link } from "react-router-dom";
// import { useMutation } from '@apollo/react-hooks';
// import { LOGIN_USER } from '../../utils/mutations';
// import Signup from '../signup/Signup';

// import './login.css';

// import Auth from '../../utils/auth';

// const Login = (props) => {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [login, { error, data}] = useMutation(LOGIN_USER);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
    
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);
//     try {
//       const { data } = await login({
//         variables: { ...formState },
//       });
//       Auth.login(data.login.token);
//     } catch (error) {
//       console.log(error.message);
//     }

//     setFormState({
//       email: '',
//       password: ''
//     });
//   };

//   return (

//     <div className="content">
//       <div className="container">
//         <div className="card">
//           <h2>Login</h2>
//           {data ? (
//             <p>
//               Success! You may now head{' '}
//               <Link to="/profile">to your profile!</Link>
//             </p>
//           ) : (
//             <form onSubmit={handleFormSubmit}>
//               <input
//                 className="form-input"
//                 placeholder="Your Email"
//                 name="email"
//                 type="email"
//                 value={formState.email}
//                 onChange={handleInputChange}
//               />
//               <input
//                 className="form-input"
//                 placeholder="******"
//                 name="password"
//                 type="password"
//                 value={formState.password}
//                 onChange={handleInputChange}
//               />
//               <button
//                 className="btn"
//                 style={{ cursor: 'pointer' }}
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </form>
//           )}
//           {error && (
//             <div className="error">
//               {error.message}
//             </div>
//           )}
//         </div>
//         <div className="card">
//           <h2>Sign up</h2>
//           <Signup />
//         </div>
//       </div>
//     </div>
//   )
// };

// export default Login;