/**
 *  함수 타입 표현식(Function Type Expression)
 */

// 다음과 같이 함수 표현식을 별도의 선언식으로 분리할 수 있다.
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐
 */

// 함수도 결국 객체이기 떄문에 함수를 객체의 형태로 따로 정의할 수 있다.
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

/**
 * 하이브리드 타입
 */

// 추가로 프로퍼티를 정의할 수 있다. (TODO : 사용 사례는 무엇이 있을까?)
type Operation3 = {
  (a: number, b: number): number;
  name: string;
};
