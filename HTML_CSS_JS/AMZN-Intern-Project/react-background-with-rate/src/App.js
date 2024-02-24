import React, { useCallback,useState } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import RateBar from './rates/RateBar';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    const [dailyUPH,setDailyUPH] = useState(13);
    const [dialySideline,setDailySideline] = useState(35);
    const [weeklyUPH,setWeeklyUPH] = useState(47);
    const [weeklysideline,setWeeklySideline] = useState(88);
    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit} />
            <class className="layout">
                <class className="daily-UPH-rate">
                    <h3>Today's Units Per Hour</h3>
                    <RateBar score= {dailyUPH} />
                </class>
                <class className="daily-sideline-rate">
                    <h3>Today's Sideline %</h3>
                    <RateBar score= {dialySideline} />
                </class>
                <class className="weekly-UPH-rate">
                    <h3>Weekly Units Per Hour</h3>
                    <RateBar score= {weeklyUPH} />
                </class>
                <class className="weekly-sideline-rate">
                    <h3>Weekly Sideline %</h3>
                    <RateBar score= {weeklysideline} />
                </class>
            </class>
        </div>
        );
      }

export default App;
