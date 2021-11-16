import {
  SalaryFactor,
  PerformanceA,
  PerformanceB,
  GroupCourse,
  SmallCourse,
  PrivateCourse,
  EduTrainCourse,
  LearningSubsidy,
  OtherSubsidy,
  CourseCommission,
  SickLeave,
  CompassionateLeave,
  LateForWork,
  Absenteeism,
  OtherDeduction,
} from "./SalaryFactor";

export interface UserInfo {
  employee: string;
  title: EmployeeTitle;
  date: Date;
  salary: number;
  factors: SalaryFactor[];
}

export type EmployeeTitle =
  | "Director"
  | "FullTime"
  | "HalfTime"
  | "PartTime"
  | "Salesman"
  | "Civilian";

export const BaseSalary: { [key: string]: number } = {
  Director: 4000.00,
  FullTime: 3000.00,
  HalfTime: 3000.00,
  PartTime: 0,
  Salesman: 3000.00,
  Civilian: 0,
};

export const BaseCourse: { [key: string]: number } = {
  Director: 20,
  FullTime: 20,
  HalfTime: 30,
  PartTime: 0,
  Salesman: 0,
  Civilian: 0,
};

export function BuildFactors(title: EmployeeTitle) {
  switch (title) {
    case "Director":
      return [
        new PerformanceA(0),
        new PerformanceB(0),
        new GroupCourse(0),
        new SmallCourse(0),
        new PrivateCourse(0),
        new EduTrainCourse(0),
        new LearningSubsidy(0),
        new OtherSubsidy(0),
        new CourseCommission(0),
        new SickLeave(0),
        new CompassionateLeave(0),
        new LateForWork(0),
        new Absenteeism(0),
        new OtherDeduction(0),
      ];
    case "HalfTime":
      return [
        new PerformanceA(0),
        new PerformanceB(0),
        new GroupCourse(0),
        new SmallCourse(0),
        new PrivateCourse(0),
        new EduTrainCourse(0),
        new LearningSubsidy(0),
        new OtherSubsidy(0),
        new SickLeave(0),
        new CompassionateLeave(0),
        new LateForWork(0),
        new Absenteeism(0),
        new OtherDeduction(0),
      ];
    case "PartTime":
      return [
        new PerformanceA(0),
        new PerformanceB(0),
        new GroupCourse(0),
        new SmallCourse(0),
        new PrivateCourse(0),
        new EduTrainCourse(0),
        new LearningSubsidy(0),
        new OtherSubsidy(0),
        new OtherDeduction(0),
      ];
    case "Salesman":
      return [
        new PerformanceA(0),
        new PerformanceB(0),
        new GroupCourse(0),
        new SmallCourse(0),
        new PrivateCourse(0),
        new EduTrainCourse(0),
        new LearningSubsidy(0),
        new OtherSubsidy(0),
        new SickLeave(0),
        new CompassionateLeave(0),
        new LateForWork(0),
        new Absenteeism(0),
        new OtherDeduction(0),
      ];
    case "Civilian":
      return [
        new PerformanceA(0),
        new PerformanceB(0),
        new GroupCourse(0),
        new SmallCourse(0),
        new PrivateCourse(0),
        new EduTrainCourse(0),
        new LearningSubsidy(0),
        new OtherSubsidy(0),
        new SickLeave(0),
        new LateForWork(0),
        new OtherDeduction(0),
      ];

    //case "FullTime":
    default:
      return [
        new PerformanceA(0),
        new PerformanceB(0),
        new GroupCourse(0),
        new SmallCourse(0),
        new PrivateCourse(0),
        new EduTrainCourse(0),
        new LearningSubsidy(0),
        new OtherSubsidy(0),
        new SickLeave(0),
        new CompassionateLeave(0),
        new LateForWork(0),
        new Absenteeism(0),
        new OtherDeduction(0),
      ];
  }
}
