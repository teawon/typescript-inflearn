/**
 *  클래스 (실습을 위해 js허용)
 */

/**
 * 아래의 두 객체는 "동일한 속성, 메서드"를 가지고 있다.
 */
let studentA = {
  name: "이정환",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

let studentB = {
  name: "홍길동",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },

  // this를 사용하면 객체 자신의 속성에 접근할 수 있다.
  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다!`);
  },
};

// class의 경우 파스칼(앞글자 대문자)를 일반적으로 사용함
class Student {
  // 필드
  name;
  age;
  grade;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
}

// new를 통해 생성자를 호출시킨다. -> 인스턴스를 생성
const studentC = new Student("홍길동", "A+", 27);

console.log(studentC);
/**
 * Student { name: '홍길동', age: 27, grade: 'A+' }
 */

/**
 * 상속
 * - 부모 클래스에 정의된 모든 필드와 메서드를 자동으로 가짐
 * - super를 사용하면 부모클래스의 생성자가 호출됨
 */

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}
