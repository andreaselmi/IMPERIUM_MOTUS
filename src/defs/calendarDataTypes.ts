export type DayType = "lun" | "mar" | "mer" | "gio" | "ven" | "sab";

export enum CourseNameType {
  PERSONAL = "personal",
  CALISTHENICS = "calisthenics",
  FUNZIONALE = "funzionale",
}

export enum CourseLabel {
  PERSONAL = "<span style='font-weight: bold;'>Cali</span>sthenics",
  CALISTHENICS = "<span style='font-weight: bold;'>Cali</span>sthenics",
  FUNZIONALE = "<span style='font-weight: bold;'>Cali</span>functional",
}

export enum CourseColorType {
  PERSONAL = "#C0C0C0",
  CALISTRETCHING = "#96ECFF",
  CALISTHENICS = "#E1FF2C",
  FUNZIONALE = "#D45DFE",
  APPOINTMENT = "#C0C0C0",
}

const calisthenicsLabel = {
  name: CourseNameType.CALISTHENICS,
  color: CourseColorType.CALISTHENICS,
  label: CourseLabel.CALISTHENICS,
  labelColor: "#000000",
  hoursLabelColor: "#757575",
};

const functionalLabel = {
  name: CourseNameType.FUNZIONALE,
  color: CourseColorType.FUNZIONALE,
  label: CourseLabel.FUNZIONALE,
  labelColor: "#131313",
  hoursLabelColor: "rgba(19, 19, 19, .6)",
};

const personalLabel = {
  name: CourseNameType.PERSONAL,
  color: CourseColorType.PERSONAL,
  label: CourseLabel.PERSONAL,
  labelColor: "#131313",
  hoursLabelColor: "#757575",
};

export interface CourseTypeTypes {
  name: CourseNameType;
  color: string;
  label: CourseLabel;
  labelColor: string;
  hoursLabelColor: string;
}

export type HoursType =
  | "9:00"
  | "9:30"
  | "10:00"
  | "10:30"
  | "11:00"
  | "11:30"
  | "12:00"
  | "12:30"
  | "13:00"
  | "13:30"
  | "14:00"
  | "14:30"
  | "15:00"
  | "15:30"
  | "16:00"
  | "16:30"
  | "17:00"
  | "17:30"
  | "18:00"
  | "18:30"
  | "19:00"
  | "19:30"
  | "20:00"
  | "20:30"
  | "21:00"
  | "21:30"
  | "22:00"
  | "22:30";

export interface CourseType {
  id: string;
  type: CourseTypeTypes;
  day: DayType;
  startHour: HoursType;
  endHour: HoursType;
}

const calendarSlotData: CourseType[] = [
  // Lunedì
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "lun",
    startHour: "9:00",
    endHour: "10:00",
  },
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "lun",
    startHour: "10:00",
    endHour: "11:00",
  },
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "lun",
    startHour: "11:00",
    endHour: "12:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "lun",
    startHour: "13:30",
    endHour: "15:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "lun",
    startHour: "15:00",
    endHour: "16:30",
  },

  {
    id: Math.random().toString(),
    type: functionalLabel,
    day: "lun",
    startHour: "16:30",
    endHour: "17:30",
  },
  {
    id: Math.random().toString(),
    type: functionalLabel,
    day: "lun",
    startHour: "17:30",
    endHour: "18:30",
  },

  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "lun",
    startHour: "18:30",
    endHour: "20:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "lun",
    startHour: "20:00",
    endHour: "21:30",
  },

  // Martedi
  {
    id: Math.random().toString(),
    type: functionalLabel,
    day: "mar",
    startHour: "9:00",
    endHour: "10:00",
  },
  {
    id: Math.random().toString(),
    type: functionalLabel,
    day: "mar",
    startHour: "10:00",
    endHour: "11:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "mar",
    startHour: "11:00",
    endHour: "12:30",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "mar",
    startHour: "14:00",
    endHour: "15:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "mar",
    startHour: "15:00",
    endHour: "16:30",
  },
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "mar",
    startHour: "17:00",
    endHour: "18:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "mar",
    startHour: "18:00",
    endHour: "19:00",
  },
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "mar",
    startHour: "19:00",
    endHour: "20:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "mar",
    startHour: "20:00",
    endHour: "21:30",
  },

  // Mercoledì
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "mer",
    startHour: "9:00",
    endHour: "10:00",
  },
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "mer",
    startHour: "10:00",
    endHour: "11:00",
  },
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "mer",
    startHour: "11:00",
    endHour: "12:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "mer",
    startHour: "13:30",
    endHour: "15:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "mer",
    startHour: "15:00",
    endHour: "16:30",
  },

  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "mer",
    startHour: "16:30",
    endHour: "17:30",
  },
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "mer",
    startHour: "17:30",
    endHour: "18:30",
  },

  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "mer",
    startHour: "18:30",
    endHour: "20:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "mer",
    startHour: "20:00",
    endHour: "21:30",
  },

  // Giovedi
  {
    id: Math.random().toString(),
    type: functionalLabel,
    day: "gio",
    startHour: "9:00",
    endHour: "10:00",
  },
  {
    id: Math.random().toString(),
    type: functionalLabel,
    day: "gio",
    startHour: "10:00",
    endHour: "11:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "gio",
    startHour: "11:00",
    endHour: "12:30",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "gio",
    startHour: "14:00",
    endHour: "15:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "gio",
    startHour: "15:00",
    endHour: "16:30",
  },
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "gio",
    startHour: "17:00",
    endHour: "18:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "gio",
    startHour: "18:00",
    endHour: "19:00",
  },
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "gio",
    startHour: "19:00",
    endHour: "20:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "gio",
    startHour: "20:00",
    endHour: "21:30",
  },

  // Venerdì
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "ven",
    startHour: "9:00",
    endHour: "10:00",
  },
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "ven",
    startHour: "10:00",
    endHour: "11:00",
  },
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "ven",
    startHour: "11:00",
    endHour: "12:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "ven",
    startHour: "13:30",
    endHour: "15:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "ven",
    startHour: "15:00",
    endHour: "16:30",
  },

  {
    id: Math.random().toString(),
    type: functionalLabel,
    day: "ven",
    startHour: "16:30",
    endHour: "17:30",
  },
  {
    id: Math.random().toString(),
    type: functionalLabel,
    day: "ven",
    startHour: "17:30",
    endHour: "18:30",
  },

  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "ven",
    startHour: "18:30",
    endHour: "20:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "ven",
    startHour: "20:00",
    endHour: "21:30",
  },

  // Sabato
  {
    id: Math.random().toString(),
    type: functionalLabel,
    day: "sab",
    startHour: "9:00",
    endHour: "10:00",
  },
  {
    id: Math.random().toString(),
    type: functionalLabel,
    day: "sab",
    startHour: "10:00",
    endHour: "11:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "sab",
    startHour: "11:00",
    endHour: "12:30",
  },

  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "sab",
    startHour: "14:00",
    endHour: "15:00",
  },
  {
    id: Math.random().toString(),
    type: calisthenicsLabel,
    day: "sab",
    startHour: "15:00",
    endHour: "16:30",
  },
  {
    id: Math.random().toString(),
    type: personalLabel,
    day: "sab",
    startHour: "16:30",
    endHour: "17:30",
  },
];

export default calendarSlotData;
