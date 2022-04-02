import React from "react";

export enum scheduleSlotTime {
  half = 30,
  hour = 60,
  hourHalf = 90,
  twoHour = 120,
  twoHalfHour = 150,
}

interface ScheduleSlotProps {
  slotTime: scheduleSlotTime;
}

const ScheduleSlot = ({ slotTime }: ScheduleSlotProps) => {
  const checkHeight = (val: scheduleSlotTime) => {
    if (val === 30) {
      return val;
    }

    const halfNumber = val / 30;
    const totalTimeHeight = 26 * halfNumber;
    return totalTimeHeight + (halfNumber - 1) * 3;
  };

  return <div>Questo è un test {checkHeight(slotTime)}</div>;
};

export default ScheduleSlot;
