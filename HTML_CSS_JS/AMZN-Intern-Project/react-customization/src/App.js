import React from 'react'; 
import SkillsBar from './components/SkillsBar';
import CarSelection from './components/CarSelection';
import { useState } from 'react';

function App() {
  const [name,setName] = useState('Lamborghini');
  const [speed,setSpeed] = useState(20);
  const [acceleration,setAcceleration] = useState(40);
  const [weight,setWeight] = useState(60);
  const [handling,setHandling] = useState(80);
  const [traction,setTraction] = useState(100);
  return (
      <>
          <div className="skills">
            <SkillsBar {...{name,speed,acceleration,weight,handling,traction}} />
          </div>
          <div className="car">
            <CarSelection />
          </div>
      </>
  );
}

export default App;