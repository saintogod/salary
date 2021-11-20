import { UserInfo } from "./../models/UserInfo";

describe("全职老师", () => {
  test("上10节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "FullTime",
      factors: [
        {
          id: "GroupCourse",
          value: 10,
        },
        {
          id: "SmallCourse",
          value: 0,
        },
        {
          id: "PrivateCourse",
          value: 0,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("3000.00");
  });
  test("上20节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "FullTime",
      factors: [
        {
          id: "GroupCourse",
          value: 10,
        },
        {
          id: "SmallCourse",
          value: 5,
        },
        {
          id: "PrivateCourse",
          value: 5,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("3000.00");
  });

  test("上31节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "FullTime",
      factors: [
        {
          id: "GroupCourse",
          value: 10,
        },
        {
          id: "SmallCourse",
          value: 10,
        },
        {
          id: "PrivateCourse",
          value: 11,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("3770.00");
  });

  test("上40节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "FullTime",
      factors: [
        {
          id: "GroupCourse",
          value: 10,
        },
        {
          id: "SmallCourse",
          value: 10,
        },
        {
          id: "PrivateCourse",
          value: 20,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("4400.00");
  });

  test("上60节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "FullTime",
      factors: [
        {
          id: "GroupCourse",
          value: 30,
        },
        {
          id: "SmallCourse",
          value: 10,
        },
        {
          id: "PrivateCourse",
          value: 20,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("6200.00");
  });

  test("上81节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "FullTime",
      factors: [
        {
          id: "GroupCourse",
          value: 30,
        },
        {
          id: "SmallCourse",
          value: 30,
        },
        {
          id: "PrivateCourse",
          value: 21,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("9100.00");
  });

  test("上101节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "FullTime",
      factors: [
        {
          id: "GroupCourse",
          value: 30,
        },
        {
          id: "SmallCourse",
          value: 30,
        },
        {
          id: "PrivateCourse",
          value: 41,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("12720.00");
  });
});

describe("半职老师", () => {
  test("上30节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "HalfTime",
      factors: [
        {
          id: "GroupCourse",
          value: 10,
        },
        {
          id: "SmallCourse",
          value: 10,
        },
        {
          id: "PrivateCourse",
          value: 10,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("3000.00");
  });

  test("上31节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "HalfTime",
      factors: [
        {
          id: "GroupCourse",
          value: 10,
        },
        {
          id: "SmallCourse",
          value: 10,
        },
        {
          id: "PrivateCourse",
          value: 11,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("3060.00");
  });

  test("上40节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "HalfTime",
      factors: [
        {
          id: "GroupCourse",
          value: 10,
        },
        {
          id: "SmallCourse",
          value: 10,
        },
        {
          id: "PrivateCourse",
          value: 20,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("3600.00");
  });

  test("上60节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "HalfTime",
      factors: [
        {
          id: "GroupCourse",
          value: 30,
        },
        {
          id: "SmallCourse",
          value: 10,
        },
        {
          id: "PrivateCourse",
          value: 20,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("5400.00");
  });

  test("上81节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "HalfTime",
      factors: [
        {
          id: "GroupCourse",
          value: 30,
        },
        {
          id: "SmallCourse",
          value: 30,
        },
        {
          id: "PrivateCourse",
          value: 21,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("8100.00");
  });

  test("上101节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "HalfTime",
      factors: [
        {
          id: "GroupCourse",
          value: 30,
        },
        {
          id: "SmallCourse",
          value: 30,
        },
        {
          id: "PrivateCourse",
          value: 41,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("11520.00");
  });
});

describe("兼职老师", () => {
  test("上10节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "PartTime",
      factors: [
        {
          id: "GroupCourse",
          value: 10,
        },
        {
          id: "SmallCourse",
          value: 0,
        },
        {
          id: "PrivateCourse",
          value: 0,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("600.00");
  });
  test("上20节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "PartTime",
      factors: [
        {
          id: "GroupCourse",
          value: 10,
        },
        {
          id: "SmallCourse",
          value: 5,
        },
        {
          id: "PrivateCourse",
          value: 5,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("1350.00");
  });

  test("上31节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "PartTime",
      factors: [
        {
          id: "GroupCourse",
          value: 10,
        },
        {
          id: "SmallCourse",
          value: 10,
        },
        {
          id: "PrivateCourse",
          value: 11,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("2180.00");
  });

  test("上40节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "PartTime",
      factors: [
        {
          id: "GroupCourse",
          value: 10,
        },
        {
          id: "SmallCourse",
          value: 10,
        },
        {
          id: "PrivateCourse",
          value: 20,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("2900.00");
  });

  test("上60节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "PartTime",
      factors: [
        {
          id: "GroupCourse",
          value: 30,
        },
        {
          id: "SmallCourse",
          value: 10,
        },
        {
          id: "PrivateCourse",
          value: 20,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("4100.00");
  });

  test("上81节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "PartTime",
      factors: [
        {
          id: "GroupCourse",
          value: 30,
        },
        {
          id: "SmallCourse",
          value: 30,
        },
        {
          id: "PrivateCourse",
          value: 21,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("5580.00");
  });

  test("上101节课时", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "PartTime",
      factors: [
        {
          id: "GroupCourse",
          value: 30,
        },
        {
          id: "SmallCourse",
          value: 30,
        },
        {
          id: "PrivateCourse",
          value: 41,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("7180.00");
  });
});
describe("销售人员", () => {
  test("销售额不足5万时，只有基本工资", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "Salesman",
      factors: [
        {
          id: "TotalSales",
          value: 49999,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("3000.00");
  });
  test("销售额等于5万时，基本工资，以及奖励", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "Salesman",
      factors: [
        {
          id: "TotalSales",
          value: 50000,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("7500.00");
  });
  test("销售额超过5万时，基本工资，以及奖励和提成", () => {
    const userInfo = new UserInfo({
      employee: "",
      title: "Salesman",
      factors: [
        {
          id: "TotalSales",
          value: 60000,
        },
      ],
    } as any);
    userInfo.CalcSalary();
    expect(userInfo.salary).toBe("8000.00");
  });
});

describe("请假", () => {
    test("文职人员 病假 0.5小时", () => {
        const userInfo = new UserInfo({
          employee: "",
          title: "Civilian",
          factors: [
              {
                id: "OnDuty",
                value: 1,
              },
            {
              id: "SickLeave",
              value: 0.5,
            },
          ],
        } as any);
        userInfo.CalcSalary();
        expect(userInfo.salary).toBe("97.00");
    });
    test("文职人员 病假 6小时", () => {
        const userInfo = new UserInfo({
          employee: "",
          title: "Civilian",
          factors: [
            {
              id: "OnDuty",
              value: 2,
            },
            {
              id: "SickLeave",
              value: 6,
            },
          ],
        } as any);
        userInfo.CalcSalary();
        expect(userInfo.salary).toBe("164.00");
    });

    test("全职老师 病假 0.5小时", () => {
        const userInfo = new UserInfo({
          employee: "",
          title: "FullTime",
          factors: [
            {
              id: "GroupCourse",
              value: 10,
            },
            {
              id: "SmallCourse",
              value: 10,
            },
            {
              id: "PrivateCourse",
              value: 10,
            },
            {
              id: "SickLeave",
              value: 0.5,
            },
          ],
        } as any);
        userInfo.CalcSalary();
        expect(userInfo.salary).toBe("3597.84");
    });
    test("全职老师 病假 6小时", () => {
        const userInfo = new UserInfo({
          employee: "",
          title: "FullTime",
          factors: [
            {
              id: "GroupCourse",
              value: 10,
            },
            {
              id: "SmallCourse",
              value: 10,
            },
            {
              id: "PrivateCourse",
              value: 10,
            },
            {
              id: "SickLeave",
              value: 6,
            },
          ],
        } as any);
        userInfo.CalcSalary();
        expect(userInfo.salary).toBe("3574.04");
    });
});
export const de = "";
