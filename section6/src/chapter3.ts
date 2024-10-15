/**
 *  접근 제어자(public, private, protected)
 */

/**
 * public
 * - 속성에 자유롭게 접근
 * - 기본 값
 */
class Employee {
  // 필드
  name: string; // 자동으로 public
  age: number; // 자동으로 public
  position: string; // 자동으로 public

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employee = new Employee("Test", 27, "1");

employee.name = "홍길동";
employee.age = 30;
employee.position = "디자이너";

/**
 * private
 * - 외부에서 속성 값 변경 불가
 */

/**
 * protected
 * - 외부에서 속성 값 불가
 * - 상속받은 자식클래스에서 해당 멤버변수에 접근 가능
 */

class Employee_ {
  // 필드
  private name: string; // private 접근 제어자 설정
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  work() {
    console.log(`${this.name}이 일함`); // 여기서는 접근 가능
  }
}

class ExecutiveOfficer extends Employee_ {
  initial() {
    // @ts-expect-error
    this.name; // ❌ 오류
    this.age = 0; // ✅ 가능
  }
}

const employee_ = new Employee_("Test", 1);

// @ts-expect-error
employee_.name = "홍길동"; // ❌ 오류

/**
 * 생성자 내부에 다음과 같이 접근제어자를 생성할 경우 아래의 기능을 자동으로 수행한다.
 * 1. 속성 선언
 * 2. 생성자 함수 내 속성 할당
 *
 * 따라서 다음과 같이 값을 생략해 표현할 수 있다.
 */
class Employee__ {
  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}
