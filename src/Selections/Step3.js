import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

export function Step3(props) {
    const [value, setValue] = useState();

    const handleChange = val => {
        props.handleChange("time", val);
        setValue(val);
    }

    const c = new Date();

    var now = new Date(c.getTime());
    now.setHours(now.getHours(), 0, 0, 0);

    var morning = new Date(c.getTime());
    morning.setHours(8, 0, 0, 0);

    var afternoon = new Date(c.getTime());
    afternoon.setHours(13, 0, 0, 0);

    var night = new Date(c.getTime());
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