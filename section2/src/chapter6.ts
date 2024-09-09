/**
 * any
 */

let anyVar = 10;
// @ts-expect-error
anyVar = "hello"; // 오류 발생

// 말 그대로 범용적으로 사용 가능 (그러나 사실상 타입스크립트의 이점을 잃어버린다.)
let anyVar2: any = 10;
anyVar2 = "hello";

/**
 * unKnown - any와 유사하게 모든 타입 저장가능, 그러나...
 *
 */

let unknownVar: unknown;

// @ts-expect-error
unknownVar * 2; // 모든 메서드, 그리고 어떠한 연산이나 변수에도 할당할 수 없다.

// 조건문을 통해 타입을 보장 후 사용할 수 있다.
