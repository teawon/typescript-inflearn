/**
 *  함수의 타입
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명

//반환값 타입은 자동으로 추론
function func(a: number, b: number) {
  return a + b;
}

// 매개 변수에 기본 값을 설정 시 자동으로 추론한다
function introduce(name = "test") {
  console.log(`name : ${name}`);
}

// 여러 인자를 props로 받는 경우 다음과 같이 선언한다
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

// 튜플을 사용해 길이에 대한 제한도 둘 수 있다.
function getThreeSum(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getThreeSum(1, 2, 3); // ✅
//@ts-expect-error
getThreeSum(1, 2, 3, 4); // ❌
