import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';


import Auth from '../../utils/auth';
import { ADD_PROFILE } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';

const Signup = () => {

  const [userFormData, setUserFormData] = useState({ 
    username: '',
    email: '',
    password: '' });
    const [addProfile, {error, data}] = useMutation(ADD_PROFILE)
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserFormData({
       ...userFormData,
       [name]: value 
      });
  };
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }


    try {
      const { data } = await addProfile({
        variables: {...userFormData}
      });

      Auth.login(data.addProfile.token)

    } catch (err) {
      console.error(err);

    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>

        <Form noValidate validated={false} onSubmit={handleFormSubmit}>
        <h2>Signup</h2>
        <Form.Group>
          <Form.Label htmlFor='username'></Form.Label>
          <Form.Control
            className="input"
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'></Form.Label>
          <Form.Control
            className="input"
            type='email'
            placeholder='Your email address'
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
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Signup;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { ADD_PROFILE } from '../../utils/mutations';

// import Auth from '../../utils/auth';

// const Signup = () => {
//   const [formState, setFormState] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

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

//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//       const { data } = await addProfile({
//         variables: { ...SignupformState },
//       });

//       Auth.login(data.addProfile.token);
//     } catch (e) {
//       console.error(e.message);
//     }

//     setFormState({
//       username: '',
//       email: '',
//       password: '',
//     });
//   };

//   return (
//     <div>
//         {data ? (
//           <p>
//             Success! You may now head{' '}
//             <Link to="/">back to the homepage.</Link>
//           </p>
//         ) : (
//           <form onSubmit={handleFormSubmit}>
//             <input
//               className="form-input"
//               placeholder="Your username"
//               name="username"
//               type="text"
//               value={formState.name}
//               onChange={handleChange}
//             />
//             <input
//               className="form-input"
//               placeholder="Your email"
//               name="email"
//               type="email"
//               value={formState.email}
//               onChange={handleChange}
//             />
//             <input
//               className="form-input"
//               placeholder="******"
//               name="password"
//               type="password"
//               value={formState.password}
//               onChange={handleChange}
//             />
//             <button
//               className="btn"
//               style={{ cursor: 'pointer' }}
//               type="submit"
//             >
//               Submit
//             </button>
//           </form>
//         )}

//         {error && (
//           <div className="error">
//             {error.message}
//           </div>
//         )}
//     </div>
//   );
// };

// export default Signup;
