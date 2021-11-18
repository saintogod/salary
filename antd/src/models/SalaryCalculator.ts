import { BaseCourse } from ".";
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

  if (title === EmployeeTitle.FullTime) {
    return CalcFullCourseSalary(
      factors
        .filter((f) => f.category === "Course")
        .reduce((prev, cur) => prev + (cur.value > 0 ? cur.value : 0), 0)
    );
  }
  if (title === EmployeeTitle.HalfTime) {
    return CalcHalfTimeCourseSalary(
      factors
        .filter((f) => f.category === "Course")
        .reduce((prev, cur) => prev + (cur.value > 0 ? cur.value : 0), 0)
    );
  }
  if (title === EmployeeTitle.Director) {
    return CalcDirectorCourseSalary(factors);
  }
  return factors
    .filter((f) => f.category === "Course")
    .reduce((prev, cur) => prev + cur.GetEarned(user), 0);
}

function CalcDirectorCourseSalary(factors: SalaryFactor[]): number {
  let total = 0;
  let rest = 20;

  //团课
  let factor = factors.find((f) => f.id === "GroupCourse")!;
  if (factor.value > 0) {
    if (factor.value > rest) {
      total += (factor.value - rest) * 70;
      rest = 0;
    } else {
      rest -= factor.value;
    }
  }

  // 小班
  factor = factors.find((f) => f.id === "SmallCourse")!;
  if (factor.value > 0) {
    if (factor.value > rest) {
      total += (factor.value - rest) * 80;
      rest = 0;
    } else {
      rest -= factor.value;
    }
  }

  // 私教
  factor = factors.find((f) => f.id === "PrivateCourse")!;
  if (factor.value > 0) {
    if (factor.value > rest) {
      total += (factor.value - rest) * 90;
      rest = 0;
    } else {
      rest -= factor.value;
    }
  }
  return total;
}

function CalcFullCourseSalary(course: number) {
  const exCourse = course - BaseCourse[EmployeeTitle.FullTime];
  if (course > 100) return exCourse * 120;
  if (course > 80) return exCourse * 100;
  if (course > 60) return exCourse * 90;
  if (course > 40) return exCourse * 80;
  if (course > 30) return exCourse * 70;
  if (course > 20) return exCourse * 60;
  return 0;
}

function CalcHalfTimeCourseSalary(course: number): number {
  const exCourse = course - BaseCourse[EmployeeTitle.HalfTime];
  if (course > 100) return exCourse * 120 + 30 * 100;
  if (course > 80) return exCourse * 100 + 30 * 100;
  if (course > 60) return exCourse * 90 + 30 * 100;
  if (course > 50) return exCourse * 80 + 30 * 100;
  if (course > 40) return exCourse * 70 + 30 * 100;
  if (course > 30) return exCourse * 60 + 30 * 100;
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
