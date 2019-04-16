import React from 'react';

const Input = (props) => {

  const { className, id, handleChange, type, placeholder } = props;

  return (
    <div>  
      <input className={className} type={type} id={id} onChange={handleChange} placeholder={placeholder} />
    </div>
  )

}

export default Input;