/**
 *  선언 합침
 *  - 아래와 같이 인터페이스의 경우 동일한 이름을 선언할 수 있다
 *  - 이 경우 동일한 인터페이스의 이름이 합쳐지게 된다.
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "name",
  age: 20,
};

/**
 * 단 아래와 같이 같은 이름의 인터페이스 속성이 다르다면 에러가 발생한다(서브타입도 안됨)
 */

interface Person {
  // @ts-expect-error
  name: "subtype"; // name은 이미 string으로 선언되어있다
  age: number;
}

// Q. 그래서 선언 합침의 경우 언제 사용하는가? - 라이브러리 확장

interface lib {
  a: number;
  b: number;
}

interface lib {
  myCustomProperty: string;
}

const test: lib = {
  a: 1,
  b: 2,
  myCustomProperty: "3",
};

/**
 *  위 사례와 같이 사용중인 라이브러리의 타입에 원하는걸 추가하고 싶을 때 사용할 수 있다.
 *  Q. 근데 라이브러리에서 type으로 내보내고 있다면?
 *    - 이 경우 선언 합침은 불가능.. 별도로 타입을 확장해 사용해야한다.
 *
 *
 *  Q. 인터페이스라도, 타입을 확장한 인터페이스를 만들어서 사용하면 별론가?
 */
