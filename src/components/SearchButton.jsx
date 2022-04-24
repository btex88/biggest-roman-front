import React from 'react';
import PropTypes from 'prop-types';

export default function SearchButton(props) {
  const { isDisabled, handleClick } = props;
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={handleClick}
      className={`px-2 py-3 group my-4 text-sm bg-white text-teal-700 poppins border
        border-teal-700 rounded-xl
        ${
          isDisabled
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-teal-700 hover:text-white'
        }`}
    >
      Get Biggest Roman Value
    </button>
  );
}

SearchButton.propTypes = {
  isDisabled: PropTypes.bool,
  handleClick: PropTypes.func,
}.isRequired;
