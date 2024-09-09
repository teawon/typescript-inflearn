/**
 * Enum - ts에만 존재 함
 */

// 숫자형 Enum
enum Role {
  ADMIN = 10, // 10 할당
  USER, // 11 할당(자동)
  GUEST, // 12 할당(자동)
}

// 문자형 Enum
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, //관리자
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 회원
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 게스트
};

// enum 멤버에 숫자 값을 직접 할당하지 않아도 0 부터 1씩 늘어나는 값으로 자동으로 할당된다.

// enum은 컴파일될 때 다른 타입들 처럼 사라지지 않고 자바스크립트 객체로 변환된다.
