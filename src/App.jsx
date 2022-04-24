import React, { useState } from 'react';
import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';
import Services from './services/Services';

export default function App() {
  const services = new Services();
  const [inputValue, setInputValue] = useState('');
  const handleSearch = async () => {
    try {
      const {
        data: { data },
      } = await services.search(inputValue);
      console.log(data);
    } catch ({ response: { data } }) {
      console.log(data);
    }
  };

  return (
    <div
      className="w-full h-full min-h-[100vh] flex flex-col flex-nowrap items-center
      justify-center"
    >
      <SearchInput value={inputValue} setValue={setInputValue} />
      <SearchButton
        inputValue={inputValue}
        handleClick={handleSearch}
        isDisabled={inputValue.length === 0}
      />
    </div>
  );
}
