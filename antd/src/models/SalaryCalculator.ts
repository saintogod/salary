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
    );
  }
  if (title === EmployeeTitle.HalfTime) {
    return CalcHalfTimeCourseSalary(
      factors
        .filter((f) => f.category === "Course")
    );
  }
  if (title === EmployeeTitle.Director) {
    return CalcDirectorCourseSalary(factors);
  }
  return factors
    .filter((f) => f.category === "Course")
    .reduce((prev, cur) => {
      const earned = cur.GetEarned(user);
      cur.earned = earned.toFixed(2);
      return prev + earned;
    }, 0);
}

function CalcDirectorCourseSalary(factors: SalaryFactor[]): number {
  let total = 0;
  let rest = BaseCourse[EmployeeTitle.Director];

  //团课
  let factor = factors.find((f) => f.id === "GroupCourse")!;
  if (factor.value > 0) {
    if (factor.value > rest) {
      const earned = (factor.value - rest) * 70;
      factor.earned = earned.toFixed(2);
      total += earned;
      rest = 0;
    } else {
      rest -= factor.value;
      factor.earned = '0.00';
    }
  }

  // 小班
  factor = factors.find((f) => f.id === "SmallCourse")!;
  if (factor.value > 0) {
    if (factor.value > rest) {
      const earned = (factor.value - rest) * 80;
      factor.earned = earned.toFixed(2);
      total += earned;
      rest = 0;
    } else {
      rest -= factor.value;
      factor.earned = '0.00';
    }
  }

  // 私教
  factor = factors.find((f) => f.id === "PrivateCourse")!;
  if (factor.value > 0) {
    if (factor.value > rest) {
      const earned = (factor.value - rest) * 90;
      factor.earned = earned.toFixed(2);
      total += earned;
      rest = 0;
    } else {
      rest -= factor.value;
      factor.earned = '0.00';
    }
  }
  return total;
}

function CalcFullCourseSalary(factors: SalaryFactor[]) {
  const courseCount = factors.reduce((prev, cur) => prev + (cur.value > 0 ? cur.value : 0), 0);
  const price = CalcFullCoursePrice(courseCount);

  let  rest = BaseCourse[EmployeeTitle.FullTime];
  const total = price * (courseCount - rest);

  //团课
  let factor = factors.find((f) => f.id === "GroupCourse")!;
  if (factor.value > 0) {
    if (factor.value > rest) {
      factor.earned = ((factor.value - rest) * price).toFixed(2);
      rest = 0;
    } else {
      rest -= factor.value;
      factor.earned = '0.00';
    }
  }

  // 小班
  factor = factors.find((f) => f.id === "SmallCourse")!;
  if (factor.value > 0) {
    if (factor.value > rest) {
      factor.earned = ((factor.value - rest) * price).toFixed(2);
      rest = 0;
    } else {
      rest -= factor.value;
      factor.earned = '0.00';
    }
  }

  // 私教
  factor = factors.find((f) => f.id === "PrivateCourse")!;
  if (factor.value > 0) {
    if (factor.value > rest) {
      factor.earned = ((factor.value - rest) * price).toFixed(2);
      rest = 0;
    } else {
      rest -= factor.value;
      factor.earned = '0.00';
    }
  }
  return total;
}

function CalcFullCoursePrice(course: number) {
  if (course > 100) return 120;
  if (course > 80) return 100;
  if (course > 60) return 90;
  if (course > 40) return 80;
  if (course > 30) return 70;
  if (course > 20) return 60;
  return 0;
}

function CalcHalfTimeCourseSalary(factors: SalaryFactor[]): number {
  const courseCount = factors.reduce((prev, cur) => prev + (cur.value > 0 ? cur.value : 0), 0);
  const price = CalcHalfTimeCoursePrice(courseCount);

  let  rest = BaseCourse[EmployeeTitle.HalfTime];
  const total = courseCount > rest
    ? (price * (courseCount - rest) + rest * 100)
    : (price * courseCount);

  //团课
  let factor = factors.find((f) => f.id === "GroupCourse")!;
  if (factor.value > 0) {
    if (factor.value > rest) {
      factor.earned = (rest * 100 + (factor.value - rest) * price).toFixed(2);
      rest = 0;
    } else {
      rest -= factor.value;
      factor.earned = (factor.value * 100).toFixed(2);
    }
  }

  // 小班
  factor = factors.find((f) => f.id === "SmallCourse")!;
  if (factor.value > 0) {
    if (factor.value > rest) {
      factor.earned = (rest * 100 + (factor.value - rest) * price).toFixed(2);
      rest = 0;
    } else {
      rest -= factor.value;
      factor.earned = (factor.value * 100).toFixed(2);
    }
  }

  // 私教
  factor = factors.find((f) => f.id === "PrivateCourse")!;
  if (factor.value > 0) {
    if (factor.value > rest) {
      factor.earned = (rest * 100 + (factor.value - rest) * price).toFixed(2);
      rest = 0;
    } else {
      rest -= factor.value;
      factor.earned = (factor.value * 100).toFixed(2);
    }
  }
  return total;
}

function CalcHalfTimeCoursePrice(course: number): number {
  if (course > 100) return 120;
  if (course > 80) return 100;
  if (course > 60) return 90;
  if (course > 50) return 80;
  if (course > 40) return 70;
  if (course > 30) return 60;
  return 100;
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
