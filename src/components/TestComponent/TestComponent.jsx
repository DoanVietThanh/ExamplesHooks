import React from 'react';
import { useReducer, useRef } from 'react';

const initState = {
  job: '',
  jobs: [],
};

const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

const reducer = (state, action) => {
  console.log('Action: ', action);
  console.log('Prev state: ', state);
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      throw new Error('Invalid Actions');
  }
};

function TestComponent(props) {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();

  function handleSubmit() {
    dispatch(addJob(job));
    dispatch(setJob(''));
    inputRef.current.focus();
  }

  return (
    <div style={{ paddingLeft: 200 + 'px', display: 'none' }}>
      <h3>Todo</h3>
      <form>
        <input
          ref={inputRef}
          value={job}
          placeholder='Enter tasks...'
          onChange={(e) => dispatch(setJob(e.target.value))}
        />
      </form>
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={() => dispatch(deleteJob(index))}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestComponent;
