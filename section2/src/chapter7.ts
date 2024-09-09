/**
 * void
 */

// 다음과 같이 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용
function func2(): void {
  console.log("hello");
}

let a: void;
a = undefined; // undefined값만 오직 할당할 수 있다.

/**
 * never
 */

// 이 타입이 있다는 것 자체가 모순을 나타낸ㄹ때, 즉 불가능과 모순을 나타냄

//의도적으로 오류를 발생시키는 함수도 never 타입으로 반환값 타입을 정의하기도 함

function func3(): never {
  while (true) {}
}

// never의 경우 어떠한 값도 담을 수 없음

let b: never;
// @ts-expect-error
b = null;
// @ts-expect-error
b = undefined;
