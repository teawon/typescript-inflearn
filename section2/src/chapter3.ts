/**
 * 객체
 */

// object는 단순히 객체임을 나타낸다.
let user: object = {
  id: 1,
  name: "태원",
};

// 아래와 같이 객체의 타입을 "객체 리터럴 타입"으로 정의한다.
let dog = {
  name: "돌돌이",
  color: "brown",
};

// readonly / ? 를 통해 선택적 처리 가능
let user2: {
  id?: number;
  readonly name: string;
} = {
  id: 1,
  name: "태원",
};
// @ts-expect-error
user.name = "수정 처리"; // 오류 발생

/**
 * study -  object vs Record?
 *
 *   object : key-value 쌍을 나타내기 위한 타입 (객체의 추상화 제공)
 *   Record : key와 value의 타입을 지정할 수 있는 타입
 *
 *   Q. Record<any,any> === object?
 *   - object
 *      - 어떤 특정한 키에도 접근할 수 없다(타입에러)
 *      - 단순히 객체의 추상화를 제공하기 위해 사용되기 때문
 *   - Record<any,any>
 *      - 말 그대로 어떠한 키와 값에 접근이 가능하다는 것을 의미
 *      - 키가 뭔지는 모르지만 접근이 허용된다.
 */

// let b: object;
// b.foo; // 오류: "foo" 속성이 "object" 타입에 존재하지 않습니다.

// let a: Record<any, any>;
// a.foo; // 정상 작동

// https://stackoverflow.com/questions/52245366/in-typescript-is-there-a-difference-between-types-object-and-recordany-any
//https://medium.com/@dhrumitpatell/understanding-the-difference-between-record-and-object-in-typescript-a-beginners-guide-1e491a9f8182
