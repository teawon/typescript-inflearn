/**
 * 배열
 */

// 다양한 타입 요소를 가지는 배열
const multiArr: (number | string)[] = [1, "hello"];

const strArr: Array<string> = ["test"];

// 다차원 배열
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

/**
 * 튜플 : 튜플은 자바스크립트에는 없는 타입스크립트의 특수한 타입으로 길이와 타입이 고정된 배열을 의미
 */

let tup2: [number, string, boolean] = [1, "hello", true];

// 결국 배열이기 때문에 배열 메서드로 요소를 무시할 수 있다.( 타입으로 못막는건가...??)
let tup1: [number, number] = [1, 2];

tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);

// 아래와 같이 배열의 "특정 위치에 특정 타입"을 안전하게 확인할 수 있다.
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  //@ts-expect-error
  [5, "조아무개"], // 오류 발생
];
