import React, { useState } from 'react';


function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value: value,
      onChange: e => setValue(e.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}


function Form({ onSearch }) {

  const input = useInputValue('');

  function getWeather(e) {
    e.preventDefault();

    if (input.value().trim()) {
      onSearch(input.value());
      input.clear();
    }
  }

  return (
    <form className="search-form" onSubmit={getWeather} >
      <input {...input.bind} className="search-input" type="text" />
    </form>
  )
}

export default Form;