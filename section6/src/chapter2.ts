/**
 *  타입스크립트의 클래스
 */

/**
 * 다음과 같이 타입을 선언하거나, 기본 값(자동 추론)을 할당해 타입을 선언해야 한다.
 */
class Employee {
  name: string = "";
  position? = ""; // 선택적 프로퍼티

  // 생성자
  constructor(name: string, position: string) {
    this.name = name;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

// 클래스는 "타입"과 같이 사용할 수 있다.

const employeeExp: Employee = {
  name: "",
  work() {},
};

// 상속의 경우 'super'를 사용해 반드시 부모 클래스의 생성자를 호출해야만 함
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name: string, position: string, officeNumber: number) {
    super(name, position);
    this.officeNumber = officeNumber;
  }
}
