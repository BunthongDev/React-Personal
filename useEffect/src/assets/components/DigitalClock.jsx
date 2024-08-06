import { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [moonPhase, setMoonPhase] = useState('');

  // Update time every second using useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to calculate the Moon phase
  const calculateMoonPhase = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Algorithm for calculating moon phase (simplified)
    const c = (year / 100) | 0;
    const e = 0.5 * c;
    const jd = 367 * year - (7 * (year + ((month + 9) / 12 | 0))) / 4 | 0 + (275 * month) / 9 | 0 + day - 730531.5;

    const b = jd + 0.5 - (jd | 0);
    const phase = ((b - e) * 29.5305882) | 0;

    if (phase < 2 || phase > 28) return 'New Moon';
    if (phase < 7) return 'First Quarter';
    if (phase < 15) return 'Full Moon';
    if (phase < 22) return 'Last Quarter';
    return 'Waning Crescent';
  };

  // Set the moon phase based on the current date
  useEffect(() => {
    setMoonPhase(calculateMoonPhase(time));
  }, [time]);

  return (
    <div className="text-center p-5 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-5">{time.toLocaleTimeString()}</h1>
      <p className="text-lg">Date: {time.toDateString()}</p>
      <p className="text-lg">Moon Phase: {moonPhase}</p>
    </div>
  );
};

export default DigitalClock;
