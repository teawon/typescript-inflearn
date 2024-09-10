/**
 *  대수 타입
 *  -> 여러개의 타입을 합성해 새로 만들어내는 타입
 */

/**
 * 1. 합집합 (Union)
 */

// 합집합 타입 - Union 타입
let a: string | number;
/**
 * 2. 교집합(Intersection)
 */

let variable: number & string; // = never

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union = Dog | Person;

// 둘 중 하나 or 속성을 합쳐도 괜찮
let union: Union = {
  name: "",
  color: "",
};

// 두 개가 합쳐져 모든 속성이 있어야 함
type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
