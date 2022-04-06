export type SlotType = "empty" | "small" | "calisthenics" | "open";

export enum ScheduleSlotTime {
  half = 30,
  hour = 60,
  hourHalf = 90,
  twoHour = 120,
  twoHalfHour = 150,
  fourHours = 240,
}

type ScheduleDayType = "lun" | "mar" | "mer" | "gio" | "ven" | "sab";

export interface CalendarSlotType {
  id: string;
  type: SlotType;
  start: number;
  duration: ScheduleSlotTime;
  hoursLabel: string;
  day: ScheduleDayType;
}

const calendarSlotData: CalendarSlotType[] = [
  // Lunedì
  {
    id: "1",
    type: "small",
    day: "lun",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "9:00 - 10:00",
    start: 1,
  },
  {
    id: "2",
    type: "small",
    day: "lun",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "10:00 - 11:00",
    start: 3,
  },
  {
    id: "3",
    type: "calisthenics",
    day: "lun",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "11:00 - 12:30",
    start: 5,
  },
  {
    id: "4",
    type: "small",
    day: "lun",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "12:30 - 13:30",
    start: 8,
  },
  {
    id: "5",
    type: "calisthenics",
    day: "lun",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "15:00 - 16:30",
    start: 13,
  },
  {
    id: "6",
    type: "open",
    day: "lun",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "16:30 - 18:00",
    start: 16,
  },
  {
    id: "7",
    type: "calisthenics",
    day: "lun",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "18:30 - 20:00",
    start: 20,
  },
  {
    id: "8",
    type: "calisthenics",
    day: "lun",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "20:00 - 21:30",
    start: 23,
  },
  // end Lunedì

  // Martedì

  {
    id: "9",
    type: "small",
    day: "mar",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "9:30 - 10:30",
    start: 2,
  },
  {
    id: "10",
    type: "small",
    day: "mar",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "10:30 - 11:30",
    start: 4,
  },
  {
    id: "11",
    type: "small",
    day: "mar",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "11:30 - 12:30",
    start: 6,
  },
  {
    id: "12",
    type: "calisthenics",
    day: "mar",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "13:30 - 15:00",
    start: 10,
  },
  {
    id: "13",
    type: "calisthenics",
    day: "mar",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "15:00 - 16:30",
    start: 13,
  },
  {
    id: "14",
    type: "calisthenics",
    day: "mar",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "18:30 - 20:00",
    start: 20,
  },
  {
    id: "15",
    type: "calisthenics",
    day: "mar",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "20:00 - 21:30",
    start: 23,
  },

  // end martedi

  // Mercoledi
  {
    id: "16",
    type: "small",
    day: "mer",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "9:00 - 10:00",
    start: 1,
  },
  {
    id: "17",
    type: "small",
    day: "mer",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "10:00 - 11:00",
    start: 3,
  },
  {
    id: "18",
    type: "calisthenics",
    day: "mer",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "11:00 - 12:30",
    start: 5,
  },
  {
    id: "19",
    type: "small",
    day: "mer",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "12:30 - 13:30",
    start: 8,
  },
  {
    id: "20",
    type: "calisthenics",
    day: "mer",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "15:00 - 16:30",
    start: 13,
  },
  {
    id: "21",
    type: "open",
    day: "mer",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "16:30 - 18:00",
    start: 16,
  },
  {
    id: "22",
    type: "calisthenics",
    day: "mer",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "18:30 - 20:00",
    start: 20,
  },
  {
    id: "23",
    type: "calisthenics",
    day: "mer",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "20:00 - 21:30",
    start: 23,
  },
  // end Mercoledi

  // Giovedi

  {
    id: "24",
    type: "small",
    day: "gio",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "9:30 - 10:30",
    start: 2,
  },
  {
    id: "25",
    type: "small",
    day: "gio",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "10:30 - 11:30",
    start: 4,
  },
  {
    id: "26",
    type: "small",
    day: "gio",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "11:30 - 12:30",
    start: 6,
  },
  {
    id: "27",
    type: "calisthenics",
    day: "gio",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "13:30 - 15:00",
    start: 10,
  },
  {
    id: "28",
    type: "calisthenics",
    day: "gio",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "15:00 - 16:30",
    start: 13,
  },
  {
    id: "29",
    type: "calisthenics",
    day: "gio",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "18:30 - 20:00",
    start: 20,
  },
  {
    id: "30",
    type: "calisthenics",
    day: "gio",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "20:00 - 21:30",
    start: 23,
  },

  // end Giovedi

  // Venerdì
  {
    id: "31",
    type: "small",
    day: "ven",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "9:00 - 10:00",
    start: 1,
  },
  {
    id: "32",
    type: "small",
    day: "ven",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "10:00 - 11:00",
    start: 3,
  },
  {
    id: "33",
    type: "calisthenics",
    day: "ven",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "11:00 - 12:30",
    start: 5,
  },
  {
    id: "34",
    type: "small",
    day: "ven",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "12:30 - 13:30",
    start: 8,
  },
  {
    id: "35",
    type: "calisthenics",
    day: "ven",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "15:00 - 16:30",
    start: 13,
  },
  {
    id: "36",
    type: "open",
    day: "ven",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "16:30 - 18:00",
    start: 16,
  },
  {
    id: "37",
    type: "calisthenics",
    day: "ven",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "18:30 - 20:00",
    start: 20,
  },
  {
    id: "38",
    type: "calisthenics",
    day: "ven",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "20:00 - 21:30",
    start: 23,
  },
  // end Venerdì

  //sabato
  {
    id: "39",
    type: "open",
    day: "sab",
    duration: ScheduleSlotTime.fourHours,
    hoursLabel: "20:00 - 21:30",
    start: 1,
  },
];

export default calendarSlotData;
