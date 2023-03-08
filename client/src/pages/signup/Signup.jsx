import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ADD_PROFILE } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';

import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e.message);
    }

    setFormState({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Your username"
              name="username"
              type="text"
              onChange={handleChange}
              value={formState.username} 
              required={formState.username}
            />
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              onChange={handleChange}
              value={formState.email} 
              required={formState.email}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              onChange={handleChange}
              value={formState.password}
              required={formState.password}
            />
            <button
              className="btn"
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
  );
};

export default Signup;
