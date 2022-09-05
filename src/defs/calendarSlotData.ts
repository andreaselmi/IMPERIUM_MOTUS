export type SlotType =
  | "empty"
  | "functionalTraining"
  | "calisthenics"
  | "smallGroup"
  | "personal"
  | "appointment";

export enum ScheduleSlotTime {
  half = 30,
  hour = 60,
  hourHalf = 90,
  twoHours = 120,
  twoHalfHour = 150,
  threeHours = 180,
  threeHalfHour = 210,
  fourHours = 240,
  fiveHours = 300,
  sixHalfHour = 390,
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
    type: "personal",
    day: "lun",
    duration: ScheduleSlotTime.threeHalfHour,
    hoursLabel: "9:00 - 12:30",
    start: 1,
  },
  {
    id: "2",
    type: "calisthenics",
    day: "lun",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "13:30 - 15:00",
    start: 10,
  },
  {
    id: "3",
    type: "calisthenics",
    day: "lun",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "15:00 - 16:30",
    start: 13,
  },
  {
    id: "4",
    type: "functionalTraining",
    day: "lun",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "16:30 - 17:30",
    start: 16,
  },
  {
    id: "5",
    type: "functionalTraining",
    day: "lun",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "17:30 - 18:30",
    start: 18,
  },
  {
    id: "6",
    type: "calisthenics",
    day: "lun",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "18:30 - 20:00",
    start: 20,
  },
  {
    id: "7",
    type: "calisthenics",
    day: "lun",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "20:00 - 21:30",
    start: 23,
  },
  // end Lunedì

  // Martedì

  {
    id: "8",
    type: "functionalTraining",
    day: "mar",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "9:00 - 10:00",
    start: 1,
  },
  {
    id: "9",
    type: "functionalTraining",
    day: "mar",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "10:00 - 11:00",
    start: 3,
  },
  {
    id: "10",
    type: "smallGroup",
    day: "mar",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "11:00 - 12:30",
    start: 5,
  },
  {
    id: "11",
    type: "smallGroup",
    day: "mar",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "13:30 - 15:00",
    start: 10,
  },
  {
    id: "12",
    type: "smallGroup",
    day: "mar",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "15:00 - 16:30",
    start: 13,
  },
  {
    id: "13",
    type: "personal",
    day: "mar",
    duration: ScheduleSlotTime.twoHours,
    hoursLabel: "16:30 - 18:30",
    start: 16,
  },
  {
    id: "14",
    type: "smallGroup",
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
    type: "personal",
    day: "mer",
    duration: ScheduleSlotTime.threeHalfHour,
    hoursLabel: "9:00 - 12:30",
    start: 1,
  },
  {
    id: "17",
    type: "calisthenics",
    day: "mer",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "13:30 - 15:00",
    start: 10,
  },
  {
    id: "18",
    type: "calisthenics",
    day: "mer",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "15:00 - 16:30",
    start: 13,
  },
  {
    id: "19",
    type: "personal",
    day: "mer",
    duration: ScheduleSlotTime.twoHours,
    hoursLabel: "16:30 - 18:30",
    start: 16,
  },
  {
    id: "20",
    type: "calisthenics",
    day: "mer",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "18:30 - 20:00",
    start: 20,
  },
  {
    id: "21",
    type: "calisthenics",
    day: "mer",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "20:00 - 21:30",
    start: 23,
  },
  // end Mercoledi

  // Giovedi

  {
    id: "22",
    type: "functionalTraining",
    day: "gio",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "9:00 - 10:00",
    start: 1,
  },
  {
    id: "23",
    type: "functionalTraining",
    day: "gio",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "10:00 - 11:00",
    start: 3,
  },
  {
    id: "24",
    type: "smallGroup",
    day: "gio",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "11:00 - 12:30",
    start: 5,
  },
  {
    id: "25",
    type: "smallGroup",
    day: "gio",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "13:30 - 15:00",
    start: 10,
  },
  {
    id: "26",
    type: "smallGroup",
    day: "gio",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "15:00 - 16:30",
    start: 13,
  },
  {
    id: "27",
    type: "personal",
    day: "gio",
    duration: ScheduleSlotTime.twoHours,
    hoursLabel: "16:30 - 18:30",
    start: 16,
  },
  {
    id: "28",
    type: "smallGroup",
    day: "gio",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "18:30 - 20:00",
    start: 20,
  },
  {
    id: "29",
    type: "calisthenics",
    day: "gio",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "20:00 - 21:30",
    start: 23,
  },

  // end Giovedi

  // Venerdì
  {
    id: "30",
    type: "personal",
    day: "ven",
    duration: ScheduleSlotTime.threeHalfHour,
    hoursLabel: "9:00 - 12:30",
    start: 1,
  },
  {
    id: "27",
    type: "calisthenics",
    day: "ven",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "13:30 - 15:00",
    start: 10,
  },
  {
    id: "31",
    type: "calisthenics",
    day: "ven",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "15:00 - 16:30",
    start: 13,
  },
  {
    id: "29",
    type: "functionalTraining",
    day: "ven",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "16:30 - 17:30",
    start: 16,
  },
  {
    id: "29",
    type: "functionalTraining",
    day: "ven",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "17:30 - 18:30",
    start: 18,
  },
  {
    id: "30",
    type: "calisthenics",
    day: "ven",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "18:30 - 20:00",
    start: 20,
  },
  {
    id: "31",
    type: "calisthenics",
    day: "ven",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "20:00 - 21:30",
    start: 23,
  },
  // end Venerdì

  //sabato
  {
    id: "32",
    type: "functionalTraining",
    day: "sab",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "9:00 - 10:00",
    start: 1,
  },
  {
    id: "33",
    type: "functionalTraining",
    day: "sab",
    duration: ScheduleSlotTime.hour,
    hoursLabel: "10:00 - 11:00",
    start: 3,
  },
  {
    id: "34",
    type: "smallGroup",
    day: "sab",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "11:00 - 12:30",
    start: 5,
  },

  {
    id: "35",
    type: "smallGroup",
    day: "sab",
    duration: ScheduleSlotTime.hourHalf,
    hoursLabel: "13:30 - 15:00",
    start: 10,
  },

  {
    id: "36",
    type: "appointment",
    day: "sab",
    duration: ScheduleSlotTime.fiveHours,
    hoursLabel: "15:00 - 20:00",
    start: 13,
  },
];

export default calendarSlotData;
