import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [searchTerms, setSearchTerms] = useState('');
  const typingTimeoutRef = useRef(null);

  function handleSearch(e) {
    const value = e.target.value;
    setSearchTerms(value);
    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        searchTerms: value,
      };
      onSubmit(formValue);
    }, 200);
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type='text' value={searchTerms} onChange={handleSearch} />
    </form>
  );
}

export default PostFiltersForm;
