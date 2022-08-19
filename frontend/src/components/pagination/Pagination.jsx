import React from "react";

const Pagination = ({ data, size, setSize, page, setPage }) => {
  const sizeOptions = [5, 10, 20];
  
  const handleClick = (event, value) => {
    if (page !== value) {
        event.preventDefault()
        setPage(value)
    } 
  }

  const handleSelectChange = (event) => {
    event.preventDefault();
    setSize(event.target.value);
    
  };

  if (!data) {
    return null;
  }

  return (
    <div>
      size: {size}
      <select onChange={handleSelectChange} name="size" id="size">
        {sizeOptions.map((size) => (
          <option value={size}>{size}</option>
        ))}
      </select>
      {Array.from(Array(data.totalPages).keys()).map((number) => {
        return <button onClick={(e) => handleClick(e, number)}>{number + 1}</button>;
      })}
    </div>
  );
};

export default Pagination;
