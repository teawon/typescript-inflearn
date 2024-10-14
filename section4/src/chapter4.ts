/**
 * 함수 오버로딩
 * 같은 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 * -> 타입스크립트 에서만 가능하다 (자스 x)
 * -> 일단 모든 매개변수는 넘버타입
 * -> Ver1. 매개변수가 1개일 때에는 매개변수에 20을 곱한 값을 출력
 * -> Ver2. 매개변수가 3개일 때에는 모든 매개변수를 더한 값을 출력
 */

// 버전들 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
// @ts-expect-error
func(1, 2);
func(1, 2, 3);

// Q. 왜 이걸 사용할까? 그냥 func내부에서 저렇게 처리만 해도 동일하게 동작하는데?

/**
 * 1. func(1,2)이 허용되게 된다.
 *  - 모든 오버로드 시그니쳐와 호환되도록 만들어야 하므로 정확한 인터페이스만 허용되게 제한이 가능
 *
 * 2. 다양한 입력 타입이나 개수에 따라 다르게 동작하는 함수의 가독성을 높여준다
 *   - 한눈에 파라메터와 개수를 파악할 수 있음
 *
 */
