/**
 * 분산적인 조건부 타입
 * - 조건에 따라 각각 다른 타입을 정의하도록 돕는 문법
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let c: StringNumberSwitch<number | string>;
// string | number

/**
 * c의 타입은 number로 예상되지만, 실제 결과 값은 string | number가된다.
 * - 타입변수에 "Union"을 할당하면 분산적인 조건부 타입으로 처리된다.
 *
 * -> number , string 2개가 전달되고 분산된 각 타입의 결과를 모아 다시 Union 타입으로 묶는다.
 */

// 예제 2
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

/**
 *  infer - 조건부 타입 내에서 타입을 추론하는 방법
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string

// TODO 분산이 안되게 막고 싶다면?
// -> 배열로 래핑하면 된다. T는 유니온 타입이지만 단일 배열로 가진 배열로 취급되며 분산 평가되지 않는다.

type StringNumberSwitch_<T> = [T] extends [number] ? string : number;

let c_: StringNumberSwitch_<number | string>;
//  number
