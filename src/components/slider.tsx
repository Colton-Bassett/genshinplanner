import React from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const RangeSlider = (props: any) => {
    const ability = props.ability;
    const setAbility = props.setAbility;
    const marks = props.marks;
    const valuetext = props.valuetext;
  
    return (
      <div>
        <Typography id="range-slider" gutterBottom>

        </Typography>
        <Slider
            value={ability}
            onChange={(event, v) => {
                setAbility(v);
              }}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            //color="secondary"
            marks={marks}
            style={{backgroundColor: "#36384A",}}
            min={1}
            max={10}
        />
      </div>
    );
};

export default RangeSlider;