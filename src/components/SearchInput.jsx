import React from 'react';
import PropTypes from 'prop-types';

export default function SearchInput(props) {
  const { value, setValue } = props;
  return (
    <div className="w-full h-auto flex items-center justify-center relative">
      <input
        placeholder="Type some roman letters"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        className="w-72 px-4 py-2 text-base border-b border-zinc-400 text-center my-4
        focus:outline-none focus:border-teal-700 text-sm bg-white"
      />
    </div>
  );
}

SearchInput.propTypes = {
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
}.isRequired;
