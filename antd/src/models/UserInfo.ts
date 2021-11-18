import moment from "moment";
import { BuildFactors } from ".";

import { GetCourseSalary } from "./SalaryCalculator";
import { CreateFactorInstance, SalaryFactor } from "./SalaryFactor";

export enum EmployeeTitle {
  /**
   * 课程总监/店长老师
   */
  Director = "Director",
  /**
   * 全职老师
   */
  FullTime = "FullTime",
  /**
   * 半职老师
   */
  HalfTime = "HalfTime",
  /**
   * 兼职老师
   */
  PartTime = "PartTime",
  /**
   * 销售人员
   */
  Salesman = "Salesman",
  /**
   * 文职人员
   */
  Civilian = "Civilian",
}

export class UserInfo {
  public employee: string = "";
  public title: EmployeeTitle = EmployeeTitle.FullTime;
  public date: moment.Moment = moment();
  public salary: number = 0;
  public factors: SalaryFactor[] = [];

  constructor({ factors, ...data }: Partial<UserInfo>) {
    if (data !== undefined) {
      Object.assign(this, data);
      if (factors) {
        this.factors = factors
          .map((f) => CreateFactorInstance(f.id, f.value)!)
          .filter((f) => f !== null);
      }
    }
    if (this.factors.length === 0) {
      this.factors = BuildFactors(this.title);
    }
  }

  public CalcSalary(): void {
    const courseSalary = GetCourseSalary(this);

    this.salary = courseSalary;
    if (this.title !== EmployeeTitle.HalfTime || this.salary >= 3000) {
      this.salary += BaseSalary[this.title];
    }
    this.salary += this.factors
      .filter((f) => f.category !== "Course")
      .reduce((prev, cur) => prev + cur.GetEarned(this), 0);
  }
}

export const BaseSalary: { [key: string]: number } = {
  Director: 4000.0,
  FullTime: 3000.0,
  HalfTime: 3000.0,
  PartTime: 0,
  Salesman: 3000.0,
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
