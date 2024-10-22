/**
 * 조건부 타입
 * - 조건에 따라 각각 다른 타입을 정의하도록 돕는 문법
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
// string

let varB: StringNumberSwitch<string>;
// number

/**
 *  사용 사례
 *  - 공백을 지워주는 유틸 함수를 만들기
 *    - 단 string | undefined | null을 받아야 하는 상황이 있다고 가정하자.
 */

function removeSpaces_bad(text: string | undefined | null) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  }

  return undefined;
}

let result_bad = removeSpaces_bad("hi im winterlood");
// string | undefined

let result2_bad = removeSpaces_bad(undefined);
// string | undefined

/**
 *  위 코드는 string | undefined를 반환하고 있다. 문자열이 들어간다면 string이 반환됨을 확실히 하고싶다면?
 */

function removeSpaces_error<T extends string | undefined | null>(
  text: T
): T extends string ? string : undefined {
  if (typeof text === "string") {
    // @ts-expect-error
    return text.replaceAll(" ", "");
  }
  // @ts-expect-error
  return undefined;
}

// 위 형태는 에러가 난다. 왜냐하면 런타임 로직에 기반한 반환 타입을 조건부로 표현할 수 없기 때문 (T가 뭔지 모른다)
// 'string' 형식은 'T extends string ? string : undefined' 형식에 할당할 수 없습니다.ts(2322)

// 아래와 같이 함수 오버로딩을 사용하자

// function removeSpaces(text: string): string;
// function removeSpaces(text: undefined | null): undefined;
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: string | undefined | null) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  }

  return undefined;
}

let result = removeSpaces("hi im winterlood");
// string

let result2 = removeSpaces(undefined);
// undefined
