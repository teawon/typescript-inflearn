/**
 * 서로소 유니온 타입
 */
type Admin = {
  name: string;
  kickCount: number;
};

type Member = {
  name: string;
  point: number;
};

type Guest = {
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  if ("kickCount" in user) {
    // Admin
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if ("point" in user) {
    // Member
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    // Guest
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}

// 위 코드는 겹치지 않는 속성을 사용해 타입을 추론하고 분기처리 했다.
// 그러나 직관성이 많이 떨어짐

type Admin_ = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member_ = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest_ = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User_ = Admin_ | Member_ | Guest_;

function login_(user: User_) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}

// 위와 같이 태그 프로퍼티를 추가로 정의해 타입을 적절히 좁힐 수 있다.

type BAD_USER_TYPE = {
  tag: "GUEST" | "ADMIN" | "MEMBER";
  name: string;
  visitCount?: string;
};

// 위 코드는.. tag에 따라 유의미하게 타입을 분리해 추론할 수 없다.
