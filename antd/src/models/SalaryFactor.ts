import { BaseSalary, EmployeeTitle, UserInfo } from "./UserInfo";

const WorkDaysPerMonth: number = 26;
const WorkHoursPerDay: number = 8;

export interface SalaryFactor {
  readonly id: string;
  readonly label: string;
  readonly unit: string;
  readonly category: "Course" | "EduCourse" | "Positive" | "Negative" | "Sales";
  value: number;
  GetEarned(userInfo: UserInfo): number;
}

/**
 * 销售业绩
 *
 * 销售人员专属
 */
export class TotalSales implements SalaryFactor {
  public readonly id = "TotalSales";
  public readonly label: string = "业绩";
  public readonly unit = "元";
  public readonly category = "Sales";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (title !== EmployeeTitle.Salesman) return 0;
    if (this.value > 50000) {
      return 2000 + this.value * 0.005;
    }
    return 0;
  }
}

/**
 * A类销售业绩
 *
 * 非销售人员专属
 */
export class PerformanceA implements SalaryFactor {
  public readonly id = "PerformanceA";
  public readonly label: string = "业绩A";
  public readonly unit = "元";
  public readonly category = "Sales";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (title === EmployeeTitle.Salesman) return 0;
    return this.value * 0.002;
  }
}

/**
 * B类销售业绩
 *
 * 非销售人员专属
 */
export class PerformanceB implements SalaryFactor {
  public readonly id = "PerformanceB";
  public readonly label: string = "业绩B";
  public readonly unit = "元";
  public readonly category = "Sales";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (title === EmployeeTitle.Salesman) return 0;
    return this.value * 0.005;
  }
}

/**
 * 课程提成：课时
 *
 * 非销售人员专属
 */
export class CourseCommission implements SalaryFactor {
  public readonly id = "CourseCommission";
  public readonly label: string = "课程提成";
  public readonly unit = "节";
  public readonly category = "Sales";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (this.value <= 0) return 0;

    if (title === EmployeeTitle.Director) return this.value * 3;
    return 0;
  }
}

/**
 * 团体课：课时
 *
 * 非销售人员专属
 */
export class GroupCourse implements SalaryFactor {
  public readonly id = "GroupCourse";
  public readonly label: string = "团体课";
  public readonly unit = "节";
  public readonly category = "Course";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (title === EmployeeTitle.Salesman) return 0;
    switch (title) {
      case EmployeeTitle.Director:
        return this.value * 70;
      case EmployeeTitle.PartTime:
        return this.value * 60;
      case EmployeeTitle.Civilian:
        return this.value * 60;
    }
    return 0;
  }
}

/**
 * 小班课：课时
 *
 * 非销售人员专属
 */
export class SmallCourse implements SalaryFactor {
  public readonly id = "SmallCourse";
  public readonly label: string = "小班课";
  public readonly unit = "节";
  public readonly category = "Course";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (this.value <= 0) return 0;
    if (title === EmployeeTitle.Salesman) return 0;
    switch (title) {
      case EmployeeTitle.Director:
        return this.value * 80;
      case EmployeeTitle.PartTime:
        return this.value * 70;
      case EmployeeTitle.Civilian:
        return this.value * 60;
    }
    return 0;
  }
}
/**
 * 私教课：课时
 *
 * 非销售人员专属
 */
export class PrivateCourse implements SalaryFactor {
  public readonly id = "PrivateCourse";
  public readonly label: string = "私教课";
  public readonly unit = "节";
  public readonly category = "Course";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (title === EmployeeTitle.Salesman) return 0;
    if (this.value <= 0) return 0;
    switch (title) {
      case EmployeeTitle.Director:
        return this.value * 90;
      case EmployeeTitle.PartTime:
        return this.value * 80;
      case EmployeeTitle.Civilian:
        return this.value * 60;
    }
    return 0;
  }
}

/**
 * 教培课：课时
 *
 * 非销售人员专属
 */
export class EduTrainCourse implements SalaryFactor {
  public readonly id = "EduTrainCourse";
  public readonly label: string = "教培课";
  public readonly unit = "小时";
  public readonly category = "EduCourse";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (title === EmployeeTitle.Salesman) return 0;
    if (this.value <= 0) return 0;
    return this.value * 100;
  }
}

/**
 * 学习补助
 */
export class LearningSubsidy implements SalaryFactor {
  public readonly id = "LearningSubsidy";
  public readonly label: string = "学习补助";
  public readonly unit = "元";
  public readonly category = "Positive";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned(userInfo: UserInfo): number {
    return this.value;
  }
}

/**
 * 其他补助
 */
export class OtherSubsidy implements SalaryFactor {
  public readonly id = "OtherSubsidy";
  public readonly label: string = "其它补助";
  public readonly unit = "元";
  public readonly category = "Positive";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned(userInfo: UserInfo): number {
    return this.value;
  }
}

/**
 * 到勤
 *
 * 文员人员专属
 */
export class OnDuty implements SalaryFactor {
  public readonly id = "OnDuty";
  public readonly label: string = "到勤";
  public readonly unit = "天";
  public readonly category = "Positive";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (this.value <= 0) return 0;
    if (title === EmployeeTitle.Civilian) return this.value * 100;
    return 0;
  }
}

/**
 * 病假
 */
export class SickLeave implements SalaryFactor {
  public readonly id = "SickLeave";
  public readonly label: string = "病假";
  public readonly unit = "天";
  public readonly category = "Negative";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (this.value <= 0) return 0;
    if (title === EmployeeTitle.PartTime) {
      return 0;
    } else if (title === EmployeeTitle.Civilian) {
      return -0.3 * 100 * this.value;
    }
    const baseSalary = BaseSalary[title];
    return -0.3 * this.value * (baseSalary / WorkDaysPerMonth);
  }
}

/**
 * 事假
 */
export class CompassionateLeave implements SalaryFactor {
  public readonly id = "CompassionateLeave";
  public readonly label: string = "事假";
  public readonly unit = "天";
  public readonly category = "Negative";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (this.value <= 0) return 0;
    if (title === EmployeeTitle.Civilian || title === EmployeeTitle.PartTime) {
      return 0;
    }
    const baseSalary = BaseSalary[title];
    return -this.value * (baseSalary / WorkDaysPerMonth);
  }
}

/**
 * 迟到
 */
export class LateForWork implements SalaryFactor {
  public readonly id = "LateForWork";
  public readonly label: string = "迟到";
  public readonly unit = "小时";
  public readonly category = "Negative";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (this.value <= 0) return 0;
    if (title === EmployeeTitle.Civilian) {
      return this.value * (100 / 5);
    }
    const baseSalary = BaseSalary[title];
    return -this.value * (baseSalary / WorkDaysPerMonth / WorkHoursPerDay);
  }
}

/**
 * 旷工
 */
export class Absenteeism implements SalaryFactor {
  public readonly id = "Absenteeism";
  public readonly label: string = "旷工";
  public readonly unit = "次";
  public readonly category = "Negative";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (this.value <= 0) return 0;
    if (title === EmployeeTitle.Civilian || title === EmployeeTitle.PartTime)
      return 0;

    const baseSalary = BaseSalary[title];
    return -2 * this.value * (baseSalary / WorkDaysPerMonth);
  }
}

/**
 * 其它扣除项
 */
export class OtherDeduction implements SalaryFactor {
  public readonly id = "OtherDeduction";
  public readonly label: string = "其它扣除项";
  public readonly unit = "元";
  public readonly category = "Negative";

  public value: number;

  constructor(value: number | string) {
    if (typeof(value) === 'string')
      this.value = parseInt(value, 10);
    else
      this.value = value;
  }

  public GetEarned({ title }: UserInfo): number {
    if (this.value <= 0) return 0;
    return -this.value;
  }
}


export function CreateFactorInstance(
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

export function BuildFactors(title: EmployeeTitle) {
  switch (title) {
    case EmployeeTitle.Director:
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
    case EmployeeTitle.HalfTime:
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
    case EmployeeTitle.PartTime:
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
    case EmployeeTitle.Salesman:
      return [
        new TotalSales(0),
        new LearningSubsidy(0),
        new OtherSubsidy(0),
        new SickLeave(0),
        new CompassionateLeave(0),
        new LateForWork(0),
        new Absenteeism(0),
        new OtherDeduction(0),
      ];
    case EmployeeTitle.Civilian:
      return [
        new OnDuty(0),
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
