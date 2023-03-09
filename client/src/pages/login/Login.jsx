import { useState } from 'react';
import { Link } from "react-router-dom";
import Signup from '../signup/Signup';
import './login.css';


import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../utils/mutations';

const Login = () => {
  const [login, { error, data}] = useMutation(LOGIN_USER);

  const [formState, setFormState] = useState({ email: '', password: '' });
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (error) {
      console.log(error.message);
    }

    setFormState({
      email: '',
      password: ''
    });
  };

  return (
    <div className="content">
      <div className="container">
        <div className="card">
          <h2>Login</h2>
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/profile">to your profile!</Link>
            </p>
          ) : (
            <form  onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="btn"
                disabled={!(formState.email && formState.password)}
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
          {error && (
            <div className="error">
              {error.message}
            </div>
          )}
        </div>
        <div className="card">
          <h2>Sign up</h2>
          <Signup />
        </div>
      </div>
    </div>
  )
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
