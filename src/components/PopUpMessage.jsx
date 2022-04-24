import React from 'react';
import PropTypes from 'prop-types';
import { CgMathPlus } from 'react-icons/cg';

export default function PopUpMessage(props) {
  const {
    setDisplayPopUp,
    setInputValue,
    responseObj: {
      title,
      data: { value, number, message },
    },
  } = props;

  const handleClick = () => {
    setDisplayPopUp(false);
    setInputValue('');
  };

  const handleMessage = () => {
    if (!message) {
      return (
        <>
          <span className="w-11/12 h-auto text-sm font-base break-words text-center pb-4">
            Roman number: {number}
          </span>
          <span className="w-11/12 h-auto text-sm font-base break-words text-center pb-4">
            Decimal number: {value}
          </span>
        </>
      );
    }
    return (
      <span className="w-11/12 h-auto text-sm font-base break-words text-center pb-4">
        {message}
      </span>
    );
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center fixed top-0
      bottom-0 left-0 right-0 bg-zinc-900/70 z-10"
    >
      <div
        className="w-72 h-auto flex flex-col items-center justify-evenly pt-10 pb-4 z-20
        bg-white rounded shadow-lg shadow-zinc-400 relative"
      >
        <CgMathPlus
          size="25"
          className="rotate-45 absolute right-2 top-2"
          onClick={handleClick}
        />
        <span
          className="w-9/12 h-auto text-lg font-semibold tracking-wide break-words
          text-center pb-4"
        >
          {title}
        </span>
        {handleMessage()}
      </div>
    </div>
  );
}

PopUpMessage.propTypes = {
  responseObj: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
    number: PropTypes.number,
    message: PropTypes.string,
  }),
  setDisplayPopUp: PropTypes.func,
  setInputValue: PropTypes.func,
}.isRequired;
