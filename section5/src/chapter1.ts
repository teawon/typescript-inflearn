/**
 *  인터페이스
 */

// 타입 정의, 메서드, readonly, 선택적 프로터피 등을 다음과 같이 사용할 수 있다.
interface Person {
  readonly name: string;
  age?: number;
  cal: () => void;
}

/**
 * 메서드 오버로딩의
 *  - 함수 타입 표현식으로 사용하면 X
 *  - 호출 시그니처를 이용해 타입을 정의하면 오버로딩 구현이 가능하다.
 */
interface Calulator_Bad {
  readonly score: number;
  // @ts-expect-error
  cal: () => void;
  // @ts-expect-error
  cal: (a: number, b: number) => void; // ❌
}

interface Calulator_Good {
  readonly score: number;
  cal(): void;
  cal(a: number, b: number): void;
}

/**
 *  type vs interface
 *
 *  - 인터페이스끼리의 union, intersection 연산은 안됨
 */

type Type1 = number | string | Person;
type Type2 = number & string & Person;
