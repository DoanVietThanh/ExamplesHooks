import React, { useState } from 'react';

function TodoListF8(props) {
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(
    () => JSON.parse(localStorage.getItem('jobs')) || []
  );

  function handleSubmit(e) {
    e.preventDefault();
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);
      return newJobs;
    });
    setJob('');
  }

  function handleDelete(index) {
    setJobs(() => {
      const deleteJobs = jobs.filter((jobItem, indexJob) => indexJob !== index);
      localStorage.setItem('jobs', JSON.stringify(deleteJobs));
      return deleteJobs;
    });
  }

  return (
    <div>
      <div className=''>3.Todo List</div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </form>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job} <button onClick={() => handleDelete(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListF8;
