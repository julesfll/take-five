import React, { useState } from 'react';
import { Button, ToggleButton, ToggleButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';

export function Step3(props) {
    const [value, setValue] = useState();

    const handleChange = val => {
        console.log('triggered');
        props.timeChange(val);
        setValue(val);
    }

    const c = new Date();

    const morning = new Date(c.getFullYear(), c.getMonth(), c.getDay(), 8);
    const noon = new Date(c.getFullYear(), c.getMonth(), c.getDay(), 13);
    const night = new Date(c.getFullYear(), c.getMonth(), c.getDay(), 19);

    const names = ["Now", "Morning", "Afternoon", "Night"];

    return (
        <ToggleButtonGroup type="radio" name='options' onChange={handleChange}>
            {[c, morning, noon, night].map((item, index) => (
                // <OverlayTrigger
                //     key={index}
                //     placement='top'
                //     overlay={
                //         <Tooltip id={index}>
                //             {item.getHours() > 12 ? (item.getHours() - 12) + ' pm' : item.getHours() + ' am'} today
                //         </Tooltip>
                //     }
                // >
                    <ToggleButton
                        key={index}
                        name="time"
                        variant="outline-dark"
                        value={Math.floor(item.getTime() / 1000)}
                    >
                        {names[index]}
                    </ToggleButton>
                //  </OverlayTrigger>
            ))}
        </ToggleButtonGroup>
    );
}