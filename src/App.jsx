import React, { useState } from 'react';
import PopUpMessage from './components/PopUpMessage';
import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';
import Services from './services/Services';

export default function App() {
  const services = new Services();
  const [inputValue, setInputValue] = useState('');
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [responseObj, setResponseObj] = useState({});

  const handleSearch = async () => {
    try {
      const {
        data: { value, number },
      } = await services.search(inputValue);
      setResponseObj({
        title: 'Success',
        data: { number, value, message: '' },
      });
      setDisplayPopUp(true);
    } catch ({
      response: {
        data: { message },
      },
    }) {
      setResponseObj({
        title: 'Error',
        data: { number: 0, value: '', message },
      });
      setDisplayPopUp(true);
    }
  };

  return (
    <div
      className="w-full h-full min-h-[100vh] flex flex-col flex-nowrap items-center
      justify-center"
    >
      <span className="w-11/12 text-xl font-medium break-words text-center pb-8">
        Roman Numbers Converter
      </span>
      {displayPopUp && (
        <PopUpMessage
          responseObj={responseObj}
          setDisplayPopUp={setDisplayPopUp}
          setInputValue={setInputValue}
        />
      )}
      <SearchInput value={inputValue} setValue={setInputValue} />
      <SearchButton
        inputValue={inputValue}
        handleClick={handleSearch}
        isDisabled={inputValue.length === 0}
      />
    </div>
  );
}
