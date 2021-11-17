import {
  Absenteeism,
  CompassionateLeave,
  CourseCommission,
  EduTrainCourse,
  GroupCourse,
  LateForWork,
  LearningSubsidy,
  OnDuty,
  OtherDeduction,
  OtherSubsidy,
  PerformanceA,
  PerformanceB,
  PrivateCourse,
  SalaryFactor,
  SickLeave,
  SmallCourse,
  TotalSales,
} from "./SalaryFactor";
import { EmployeeTitle, UserInfo } from "./UserInfo";

export function GetCourseSalary(user: UserInfo): number {
  const { title, factors } = user;
  if (title === EmployeeTitle.Salesman) return 0;

  if (title === EmployeeTitle.FullTime)
    return CalcFullCourseSalary(
      factors
        .filter((f) => f.category === "Course")
        .reduce((prev, cur) => prev + (cur.value > 0 ? cur.value : 0), 0)
    );

  if (title === EmployeeTitle.HalfTime)
    return CalcHalfTimeCourseSalary(
      factors
        .filter((f) => f.category === "Course")
        .reduce((prev, cur) => prev + (cur.value > 0 ? cur.value : 0), 0)
    );
  return factors
    .filter((f) => f.category === "Course")
    .reduce((prev, cur) => prev + cur.GetEarned(user), 0);
}

function CalcFullCourseSalary(course: number) {
  if (course > 100)
    return (
      (course - 100) * 120 + 20 * 100 + 20 * 90 + 20 * 80 + 10 * 70 + 10 * 60
    );
  if (course > 80)
    return (course - 80) * 100 + 20 * 90 + 20 * 80 + 10 * 70 + 10 * 60;
  if (course > 60) return (course - 60) * 90 + 20 * 80 + 10 * 70 + 10 * 60;
  if (course > 40) return (course - 40) * 80 + 10 * 70 + 10 * 60;
  if (course > 30) return (course - 30) * 70 + 10 * 60;
  if (course > 20) return (course - 30) * 60;
  return 0;
}

function CalcHalfTimeCourseSalary(course: number): number {
  if (course > 100)
    return (
      (course - 100) * 120 +
      20 * 100 +
      20 * 90 +
      10 * 80 +
      10 * 70 +
      10 * 60 +
      30 * 100
    );
  if (course > 80)
    return (
      (course - 80) * 100 + 20 * 90 + 10 * 80 + 10 * 70 + 10 * 60 + 30 * 100
    );
  if (course > 60)
    return (course - 60) * 90 + 10 * 80 + 10 * 70 + 10 * 60 + 30 * 100;
  if (course > 50) return (course - 50) * 80 + 10 * 70 + 10 * 60 + 30 * 100;
  if (course > 40) return (course - 40) * 70 + 10 * 60 + 30 * 100;
  if (course > 30) return (course - 30) * 60 + 30 * 100;
  return course * 100;
}

export function GetFactorEarned(
  { id, value }: SalaryFactor,
  user: UserInfo
): number {
  const factor = GetFactorInstance(id, value);
  if (factor === null) return 0;
  return factor.GetEarned(user);
}

export function GetFactorInstance(
  factorId: string,
  value: number
): SalaryFactor | null {
  switch (factorId) {
    case "Performance":
      return new TotalSales(value);
    case "PerformanceA":
      return new PerformanceA(value);
    case "PerformanceB":
      return new PerformanceB(value);
    case "CourseCommission":
      return new CourseCommission(value);
    case "GroupCourse":
      return new GroupCourse(value);
    case "SmallCourse":
      return new SmallCourse(value);
    case "PrivateCourse":
      return new PrivateCourse(value);
    case "EduTrainCourse":
      return new EduTrainCourse(value);
    case "LearningSubsidy":
      return new LearningSubsidy(value);
    case "OtherSubsidy":
      return new OtherSubsidy(value);
    case "OnDuty":
      return new OnDuty(value);
    case "SickLeave":
      return new SickLeave(value);
    case "CompassionateLeave":
      return new CompassionateLeave(value);
    case "LateForWork":
      return new LateForWork(value);
    case "Absenteeism":
      return new Absenteeism(value);
    case "OtherDeduction":
      return new OtherDeduction(value);

    default:
      return null;
  }
}
