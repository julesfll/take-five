import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export function Step2(props) {
    const [value, setValue] = useState();

    const onSliderChange = value => {
        setValue(value);
        props.handleChange("radius", value);
    }
    return (
        <div>
            <Slider
                name="radius"
                value={value}
                onChange={onSliderChange}
                defaultValue={1}
                min={0.5}
                max={3}
                step={0.05}
            />
        </div>
    )

}