import React from "react";
import CountUp from "react-countup";

export default function CountUpCounter({start, end, duration}) {
    return (
            <div className="countUp">
                <CountUp
                    start={start}
                    end={end}
                    duration={duration}
                />
            </div>
    );
}

