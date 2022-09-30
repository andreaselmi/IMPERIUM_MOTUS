import { HoursType } from "../defs/calendarDataTypes";

const checkCoursePosition = (time: HoursType) => {
  let value = 0;

  const hour = time.split(":")[0];
  const minutes = time.split(":")[1];

  if (hour === "9" && minutes === "00") {
    value = 1;
  } else {
    if (minutes === "00") {
      value = (+hour - 9) * 2 + 1;
    } else {
      value = (+hour - 9) * 2 + 2;
    }
  }

  return value;
};

export default checkCoursePosition;
