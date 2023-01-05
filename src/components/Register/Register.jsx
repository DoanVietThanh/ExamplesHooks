import React from 'react';
import { useEffect, useState } from 'react';
import FormInput from '../FormInput';

function Register(props) {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    studentID: '',
    phoneNumbers: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:
        "Username should be 8-16 characters and shouldn't include any special character!",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{8,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It is an invalid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Date of Birth',
      label: 'Date of Birth',
      required: true,
    },

    {
      id: 4,
      name: 'studentID',
      type: 'text',
      placeholder: 'Student ID',
      errorMessage:
        'Student ID should be 8 characters including letters and numbers',
      label: 'Student ID',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8}$`,
      required: true,
    },
    {
      id: 5,
      name: 'phoneNumbers',
      type: 'numbers',
      placeholder: 'Phone Numbers',
      errorMessage: 'Phone Numbers should be 10 characters ',
      label: 'Phone Numbers',
      pattern: `^(?=.*[0-9])[0-9]{10}$`,
      required: true,
    },
    {
      id: 6,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 7,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match!",
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function submitInfo() {
    console.log(values);
    alert(JSON.stringify(values));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className=''>2.Validation Form</div>
      <h1>Register</h1>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          value={values[input.name]}
          onChange={onChange}
          {...input}
        />
      ))}
      <button onClick={submitInfo}>Submit</button>
    </form>
  );
}

export default Register;
