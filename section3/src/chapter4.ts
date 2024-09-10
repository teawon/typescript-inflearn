/**
 *  타입 추론
 *   - 타입스크립트는 변수의 타입을 자동으로 추론한다. (특정 상황에서)
 */

// 1. 초기값을 기준으로 추론
let a = 10;
// number 타입으로 추론

let b = "hello";
// string 타입으로 추론

// 1.1 구조 분해 할당도 타입을 잘 추론한다.
let [one, two, three] = [1, "hello", true];

// 2. 함수의 반환값도 잘 추론한다
function func() {
  return "hello";
}

// 3. 기본값이 설정된 매개변수
function func2(message = "hello") {
  return "hello";
}

const num = 10;
// 10 Number Literal 타입으로 추론

const str = "hello";
// "hello" String Literal 타입으로 추론

let arr = [1, "string"];
// (string | number)[] 타입으로 추론

// => let을 사용해 넓은 범위의 타입을 사용하는 것을 타입 넓히기 라고 한다..(언제 사용하는지는 모르겠네 흠)

// Q. 함수의 반환값에 타입을 명시하는 경우가 있던데 이유가 무엇?
// 타입가드 함수의 경우 boolean으로 추론되기도 함
// 또한 좁은 범위의 타입을 지정하고 싶을때 사용하기도 한다
// 개인적으로 반환 타입이 명시되면 코드를 읽는데에도 도움이 될 수 있을 것 같음

// const parseBorderRadius = (borderRadius: string): Tuple<string, 4> => {

const includes = <T>(arr: T[], target: T): target is T => {
  return arr.includes(target);
};
