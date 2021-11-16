import { UserInfo } from "./UserInfo";

export interface SalaryFactor {
  readonly label: string;
  readonly unit: string;
  value: number;
  GetEarned(userInfo: UserInfo): number;
}

export class Performance implements SalaryFactor {
  public readonly label: string = "业绩";
  public readonly unit = "元";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
    }
    return 0;
  }
}

export class PerformanceA implements SalaryFactor {
  public readonly label: string = "业绩A";
  public readonly unit = "元";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
    }
    return 0;
  }
}

export class PerformanceB implements SalaryFactor {
  public readonly label: string = "业绩A";
  public readonly unit = "元";

  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
    }
    return 0;
  }
}
/**
 * 课程提成：课时
 */
export class CourseCommission implements SalaryFactor {
  public readonly label: string = "课程提成";
  public readonly unit = "课时";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
      return this.value * 3;
    }
    return 0;
  }
}

/**
 * 团体课
 */
export class GroupCourse implements SalaryFactor {
  public readonly label: string = "团体课";
  public readonly unit = "次";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
      return this.value * 3;
    }
    return 0;
  }
}

/**
 * 小班课
 */
export class SmallCourse implements SalaryFactor {
  public readonly label: string = "小班课";
  public readonly unit = "次";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
      return this.value * 3;
    }
    return 0;
  }
}
/**
 * 私教课
 */
export class PrivateCourse implements SalaryFactor {
  public readonly label: string = "私教课";
  public readonly unit = "次";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
      return this.value * 3;
    }
    return 0;
  }
}

/**
 * 教培课
 */
export class EduTrainCourse implements SalaryFactor {
  public readonly label: string = "教培课";
  public readonly unit = "次";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
      return this.value * 3;
    }
    return 0;
  }
}

/**
 * 学习补助
 */
export class LearningSubsidy implements SalaryFactor {
  public readonly label: string = "学习补助";
  public readonly unit = "元";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
      return this.value * 3;
    }
    return 0;
  }
}

/**
 * 其他补助
 */
export class OtherSubsidy implements SalaryFactor {
  public readonly label: string = "其它补助";
  public readonly unit = "元";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
      return this.value * 3;
    }
    return 0;
  }
}

/**
 * 病假
 */
export class SickLeave implements SalaryFactor {
  public readonly label: string = "病假";
  public readonly unit = "次";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
      return this.value * 3;
    }
    return 0;
  }
}

/**
 * 事假
 */
export class CompassionateLeave implements SalaryFactor {
  public readonly label: string = "事假";
  public readonly unit = "次";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
      return this.value * 3;
    }
    return 0;
  }
}

/**
 * 迟到
 */
export class LateForWork implements SalaryFactor {
  public readonly label: string = "迟到";
  public readonly unit = "次";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
      return this.value * 3;
    }
    return 0;
  }
}

/**
 * 旷工
 */
export class Absenteeism implements SalaryFactor {
  public readonly label: string = "旷工";
  public readonly unit = "次";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
      return this.value * 3;
    }
    return 0;
  }
}

/**
 * 其它扣除项
 */
export class OtherDeduction implements SalaryFactor {
  public readonly label: string = "其它扣除项";
  public readonly unit = "元";
  constructor(public value: number) {}

  public GetEarned(userInfo: UserInfo): number {
    if (userInfo.title === "Director") {
      return this.value * 3;
    }
    return 0;
  }
}
