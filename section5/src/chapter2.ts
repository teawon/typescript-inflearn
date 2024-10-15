/**
 *  인터페이스 확장
 */

// 다음과 같이 상속을 통해 "중복된 속성"을 정의하지 않도록 처리할 수 있다.

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  breed: string;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

/**
 * 다중 확장
 * - 아래와 같이 다중 확장도 가능하다
 */
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  breed: "",
  isScratch: true,
};

/**
 * 프로퍼티 재정의
 * - 프로퍼티를 재정의할때, 원본타입의 서브타입을 지정할 수 있다. (규칙)
 */

interface Shape {
  name: string;
  color: string;
}

interface Circle extends Shape {
  name: "circle"; // 타입 재 정의
  color: string;
}
