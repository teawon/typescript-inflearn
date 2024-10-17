/**
 *  제내릭 :  함수나 인터페이스, 타입 별칭, 클래스 등을 다양한 타입과 함께 동작하도록 만들어 주는 타입스크립트의 놀라운 기능
 */

function func<T>(value: T): T {
  return value;
}

let num = func(10);

/**
 * 제네릭 함수를 호출할때, 직접 타입을 명시하는 것 또한 가능하다
 */

let arr = func<[number, number, number]>([1, 2, 3]);
// 위 함수는 그냥 사용했다면 number[] 형태로 자동 추론되지만, T에 직접적으로 변수를 입력함으로써 값을 처리

/**
 * 여러 제네릭 변수를 두는 것도 가능
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 *  다양한 배열 타입을 받는 예시
 */

// 첫번째 인자만 반환하는 예제
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

/**
 * 타입 변수를 "제한" 하는 방법 - extends를 활용하기
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123"); // ✅

getLength([1, 2, 3]); // ✅

getLength({ length: 1 }); // ✅
// @ts-expect-error
getLength(undefined); // ❌
// @ts-expect-error
getLength(null); // ❌

let str = returnFirstValue([1, "hello", "mynameis"]);
// number

// TODO Q) 여러 제네릭 변수가 있을때, 일부 필드는 직접 선언하고 일부는 자동추론되게 할 수 없는가?
// A) 없다. 하나라도 직접 선언한 순간 나머지 타입은 자동추론이 안된다. React-query에서도 그랬는데 타입을 명시한순간 다 써야했다..
// 이건 고칠 수 없나?

function test<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

const testcase1 = test<number, string>(5, "10");
const testcase2 = test<number, unknown>(5, "10");
