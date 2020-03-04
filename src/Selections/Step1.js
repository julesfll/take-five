import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

export function Step1(props) {
  const [value, setValue] = useState();

  const handleChange = val => {
    props.priceChange(val);
    setValue(val);
  }

  return (
    <ToggleButtonGroup type="checkbox" onChange={handleChange}>
      {[1, 2, 3, 4].map((item, index) => (
        <ToggleButton
          name="price"
          variant="outline-dark"
          key={index}
          value={item}>
          {'$'.repeat(item)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}