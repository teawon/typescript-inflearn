/**
 * 타입 별칭 타입 별칭(Type Alias)
 */

// 말 그대로 타입을 별도로 정의하는 것
type A = string;

// 스코프가 다르면 변수와 같이 여러 별칭이 중첩되도 상관없음

/**
 * 인덱스 시그니처
 */

// 객체의 키와 값의 타입을 지정
type CountryCodes = {
  [key: string]: string;
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 필수 필드도 명시 가능
};

// 아래와 같이 키 호환이 맞지 않으면 에러가 발생한다. string-number로 되어있기때문
type CountryNumberCodes2 = {
  [key: string]: number;
  // @ts-expect-error
  Korea: string; // 오류!
};

// 그럴때는 아래와 같이 &을 사용해야 함
type CountryNumberCodes3 = {
  [key: string]: number; // 기본적으로 모든 키는 number 타입
} & {
  type: string; // 특정 키 'type'은 string 타입
};
