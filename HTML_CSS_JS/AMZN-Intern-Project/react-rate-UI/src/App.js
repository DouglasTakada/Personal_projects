import { useState } from 'react';
import RateBar from './rates/RateBar';

function App() {

  const [dailyUPH,setDailyUPH] = useState(13);
  const [dialySideline,setDailySideline] = useState(35);
  const [weeklyUPH,setWeeklyUPH] = useState(47);
  const [weeklysideline,setWeeklySideline] = useState(88);
  return (
    <div className="App">
      <class className="layout">
        <class className="daily-UPH-rate">
        <h3>Today's Units Per Hour</h3>
          <RateBar score= {dailyUPH}></RateBar>
        </class>
        <class className="daily-sideline-rate">
        <h3>Today's Sideline %</h3>
        <RateBar score= {dialySideline}></RateBar>
        </class>
        <class className="weekly-UPH-rate">
        <h3>Weekly Units Per Hour</h3>
          <RateBar score= {weeklyUPH}></RateBar>
        </class>
        <class className="weekly-sideline-rate">
        <h3>Weekly Sideline %</h3>
        <RateBar score= {weeklysideline}></RateBar>
        </class>
      </class>
    </div>
  );
}

export default App;
