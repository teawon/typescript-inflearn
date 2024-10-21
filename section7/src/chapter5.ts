/**
 *  Promise
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // 결과값 : 20
    resolve(20);
  }, 3000);
});

promise.then((response) => {
  // response는 number 타입
  console.log(response);
});

promise.catch((error) => {
  if (typeof error === "string") {
    console.log(error);
  }
});

/**
 * Promise의 경우 기본적으로 타입을 추론해주지 않는다.
 *  - 내부에서 Generic으로 비동기 결과값의 타입을 직접 명시
 *  - 실패의 경우 타입을 정의할 수 없다
 *     - unknown으로 고정되어있기때문에 타입을 좁혀 직접 추론해야 함
 */

// Q. 왜 에러의 경우 generic으로 타입을 처리할 수 없게 구현한 것 일까?
