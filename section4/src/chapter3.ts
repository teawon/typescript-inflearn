/**
 *  함수 타입 호환성
   1. 반환 값의 타입 호환 (공변성 - 업캐스팅)
   2. 매개변수 값의 타입 호환 (반공변성 - 다운캐스팅)
      - 값이 더 구체적일때 , 매개변수의 개수가 적을때
 */

// 반환 값 타입 호환

type WideReturn = () => number;
type NarrowReturn = () => 10;

let witeReturn: WideReturn = () => 10;
let narrowReturn: NarrowReturn = () => 10;

witeReturn = narrowReturn; // ✅
// @ts-expect-error
narrowReturn = witeReturn; // ❌

// 매개변수 (매개변수의 개수가 같을 떄)

/**
 *  생각해보자. 매개변수의 범위는 좁으면 좁을수록 더 많은 값을 처리할 수 있다.
 *   어떤 함수가 매개변수로 any를 받아서 내부에서 any로 할 수 있는 여러 매서드를 사용한다면..?
 *    -> 더 좁은 매개변수가 들어갈 수 없다.
 *   
      * let wideParamExp = (param: any) => {
          console.log(any.toString());
          console.log(any.toNumber());...
          // param이 any이기때문에 이 함수는 제약없이 여러 매서드나 로직을 내부에서 처리할 수 있다..
      };
 *   어떤 매개변수가 사용되었다면 그 함수는 해당 매개변수를 이용할 수 있기때문에,
 *   거꾸로 좁은 타입의 매개변수가 들어왔다면 그보다 범위가 큰 매개변수가 들어와도 상관이 없다. 
 * 
 */

type WideParam = (value: number) => void;
type NarrowParam = (value: 10) => void;

let wideParam: WideParam = (value) => {};
let narrowParam: NarrowParam = (value) => {};

narrowParam = wideParam; // ✅
// @ts-expect-error
wideParam = narrowParam; // ❌

// 매개변수가 다를때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
// @ts-expect-error
func2 = func1; // ❌
