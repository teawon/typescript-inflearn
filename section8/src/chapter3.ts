/**
 * 맵드 타입
 * - 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 기능
 * - 인터페이스에서 사용할 수 없다!
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in keyof User]?: User[key];
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// TODO - Generic을 사용해 특정 타입의 속성을 Optional로 만드는 타입 만들어보기

type Optional<T extends object> = {
  [key in keyof T]?: T[key];
};

type MyPartialUser = Optional<User>;
