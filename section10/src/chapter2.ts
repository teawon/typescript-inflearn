/**
 * Pick<T>
 * -  특정 객체 타입으로부터 특정 프로퍼티 만을 골라내는 그런 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T extends object, K extends keyof T> = {
  [key in K]: T[K];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "",
  content: "",
};

/**
 * Omit<T>
 * - 특정 객체 타입으로부터 특정 프로퍼티 만을 제거하는 타입
 */

type Omit<T extends object, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[K];
};

type Omit2<T extends object, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const legacyPost_: Omit<Post, "tags" | "thumbnailURL"> = {
  title: "",
  content: "",
};

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;

/**
 * Exclude<T,U>
 * - T에서 U를 제거
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, string>;
// boolean

/**
 * Extract<T, K>
 * - T에서 K를 추출
 */

type Extract<T, U> = T extends U ? T : never;
type B = Extract<string | boolean, boolean>;

/**
 * ReturnType
 * - 함수의 반환 타입을 추출
 */

type ReturnType<T extends (...args: any) => any> = T extends (
  ...agrs: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
// string

type ReturnB = ReturnType<typeof funcB>;
// number

// => Pick은 객체 타입의 프로퍼티를 추출
// => Extract는 유니온 타입의 교집합을 추출
