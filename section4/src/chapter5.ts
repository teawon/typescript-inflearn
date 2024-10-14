/**
 * 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function warning_bad(animal: Animal) {
  if ("isBark" in animal) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else if ("isScratch" in animal) {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}

// 만약 이미 선언된 타입으로 필드값을 명시해 타입을 분리할 수 없다면?
// -> 'in'을 사용해야하는데 이럴 결우 아래의 단점이 존재한다

/**
 *  1. 속성값이 변경되거나 추가, 삭제되면 문제가 발생
 *  -> 타입 가드를 사용하자
 */

// Dog 타입인지 확인하는 타입 가드
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

// Cat 타입인지 확인하는 타입가드
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning_good(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}

//  함수가 true를 반환하면 조건문 내부에서는 이 값이 Dog 타입임을 보장한다는 의미
