/**
 *  unknown 타입
 */

// unknwon은 모든 타입의 값 할당 가능
function unKnownExam() {
  let a: unknown = 1; // number -> unknown
  let b: unknown = "hello"; // string -> unknown
  let c: unknown = true; // boolean -> unknown
  let d: unknown = null; // null -> unknown
  let e: unknown = undefined; // undefined -> unknown
  let f: unknown = []; // Array -> unknown
  let g: unknown = {}; // Object -> unknown
  let h: unknown = () => {}; // Function -> unknown
}

/**
 * Never 타입 (가장 아래)
 */

function neverExam() {
  function errorFunc(): never {
    throw new Error();
  }
  let neverVar: never;
  // never타입은 모든 타입에 업캐스팅 가능
  let num: number = errorFunc();
  //@ts-expect-error
  let a: never = 1; // number -> never ❌
  //@ts-expect-error
  let b: never = "hello"; // string -> never ❌
  //@ts-expect-error
  let c: never = true; // boolean -> never ❌
}

/**
 * void - undefined의 슈퍼타입
 */

function voidExam() {
  function noReturnFuncA(): void {
    return undefined;
  }

  function noReturnFuncB(): void {
    return;
  }

  function noReturnFuncC(): void {}
}

/**
 * any - 모든 타입의 슈퍼,서브타입이 다 될 수 있다. (never제외)
 */

let anyValue: any;

let num: number = anyValue; // any -> number (다운 캐스트)
let str: string = anyValue; // any -> string (다운 캐스트)
let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

anyValue = num; // number -> any (업 캐스트)
anyValue = str; // string -> any (업 캐스트)
anyValue = bool; // boolean -> any (업 캐스트)
