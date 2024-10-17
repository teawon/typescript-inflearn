/**
 *  제네릭 인터페이스
 *  - 제네릭의 경우 인터페이스에도 활용할 수 있다.
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스의 경우 "반드시" 제네릭 변수를 명시해주어야 한다.
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

/**
 * 인덱스 시그니처 활용
 */

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 타입도 마찬가지
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

/**
 * 활용 예시
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "test1",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "test2",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};
