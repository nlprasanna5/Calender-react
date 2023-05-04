import React, { useState } from 'react';
import './Calender.css';

const Calender = () => {
  const [date, setDate] = useState(new Date());

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDays = () => {
    const days = [];
    const numDays = daysInMonth(date.getMonth(), date.getFullYear());
    const firstDay = firstDayOfMonth(date.getMonth(), date.getFullYear());
    let week = [];

    for (let i = 0; i < firstDay; i++) {
      week.push(<td key={`empty-${i}`}></td>);
    }

    for (let i = 1; i <= numDays; i++) {
      week.push(<td key={i}>{i}</td>);
      if (new Date(date.getFullYear(), date.getMonth(), i).getDay() === 6 || i === numDays) {
        days.push(<tr key={i}>{week}</tr>);
        week = [];
      }
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="prev-button" onClick={prevMonth}>
          Prev
        </button>
        <h2 className="month-header">
          {monthNames[date.getMonth()]} {date.getFullYear()}
        </h2>
        <button className="next-button" onClick={nextMonth}>
          Next
        </button>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{renderDays()}</tbody>
      </table>
    </div>
  );
};

export default Calender;
