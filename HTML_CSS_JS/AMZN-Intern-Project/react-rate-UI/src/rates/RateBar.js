import React from 'react'
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const RateBar = (props) => {
    const {score} = props;
    let value = 1;

    //function calculating color
    const calcColor = (percent, start, end) => {
        let a = percent/100,
        b = (end - start) * a,
        c = b + start;

        return "hsl("+ c + ",100%, 50%)"
    }
  return (
    <CircularProgressbar 
        value={score}
        text = {`${score} %`}
        circleRatio={0.7}
        styles={{
            trail: {
                strokeLinecap: "butt",
                transform: "rotate(-126deg)",
                transformOrigin: "center center"
            },
            path: {
                strokeLinecap: "butt",
                transform: "rotate(-126deg)",
                transformOrigin: "center center",
                stroke: calcColor(score, 0,120)
            },
            text: {
                fill: "#ddd"
            }
        }}
        strokeWidth={10}
    />
        
  )
}

export default RateBar