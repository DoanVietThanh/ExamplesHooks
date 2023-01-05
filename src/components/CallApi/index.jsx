import React from 'react';
import PropTypes from 'prop-types';

CallApi.propTypes = {
  ListAp: PropTypes.array,
};

CallApi.defaultProps = {
  ListAp: [],
};

function CallApi(props) {
  const { posts } = props;
  return (
    <ul className='list-api'>
      {' '}
      <div className=''>4.Call Api</div>
      {posts.map((post) => (
        <li key={post.id} style={{ padding: '3px' }}>
          Name: {post.name}
          <div>Email: {post.email}</div>
        </li>
      ))}
    </ul>
  );
}

export default CallApi;
