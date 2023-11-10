// CountdownTimer.js
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-6-26T18:00:00"); // Set your event date and time
    const currentDate = new Date();
    const difference = eventDate - currentDate;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      return { days, hours, minutes };
    }

    return { days: 0, hours: 0, minutes: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="text-3xl font-bold">
        {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes
      </div>
    </div>
  );
};

export default CountdownTimer;
