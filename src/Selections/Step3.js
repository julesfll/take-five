import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

export function Step3(props) {
    const [value, setValue] = useState();

    const handleChange = val => {
        props.handleChange("time", val);
        setValue(val);
    }

    var now = new Date();
    now.setHours(now.getHours(), 0, 0, 0);

    var morning = new Date();
    morning.setHours(8, 0, 0, 0);

    var afternoon = new Date();
    afternoon.setHours(13, 0, 0, 0);

    var night = new Date();
    night.setHours(19, 0, 0, 0);

    const names = ["Now", "Morning", "Afternoon", "Night"];

    return (
        <ToggleButtonGroup
            type="radio"
            name='options'
            onChange={handleChange}
            defaultValue={Math.floor(now.getTime() / 1000)}>
            {[now, morning, afternoon, night].map((item, index) => (
                <ToggleButton
                    key={index}
                    name="time"
                    variant="outline-dark"
                    value={Math.floor(item.getTime() / 1000)}
                >
                    {names[index]}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
}