/**
 *  타입 단언
 */

// 1. 특정 타입을 정의하였지만 초기화 할 때 빈 객체를 넣고 싶을 때 (유틸에서 자주 본듯)

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "";
person.age = 23;

// 2. 초과 프로퍼티가 있을 때 이를 우회
type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 조건
 *  - A와 B가 슈퍼타입 | 서브타입일때
 */

let num1 = 10 as never; // ✅
let num2 = 10 as unknown; // ✅
// @ts-expect-error
let num3 = 10 as string; // ❌

/**
 *  다중 단언 - 눈속임에 불과하며 좋지 않다고 한다..
 */

let num4 = 10 as unknown as string;

/**
 * const 단언
 */

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/**
 * TODO as unknown as ~ 이런형태로 많이 쓰이지 않나? 이건 어떤상황에  사용되는가
 */
