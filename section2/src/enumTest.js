var Language_enum;
(function (Language_enum) {
  Language_enum["ko"] = "korean";
  Language_enum["en"] = "english";
})(Language_enum || (Language_enum = {}));
var Language3_as_const = {
  ko: "korean",
  en: "english",
};
var test = {
  enum: Language_enum.ko,
  constEnum: "korean" /* Language2_const_enum.ko */,
  asConst: Language3_as_const.ko,
};

/**
 * 1. enum의 경우 자동으로 숫자가 할당되는 과정에서 의도치않은 접근 예외처리 힘듬
 * - 또한 즉시 실행 함수 형태로 코드를 생성하기 때문에 Tree-shaking되지 않는다
 * 
 * 2. const enum의 경우 별도의 객체가 생성되지는 않는다.
 *  - 말 그대로 치환하듯 해당 문자열이 삽입됨 (실제 코드를 보면 객체가 안만들어짐)
 *  - ts에서 --isolateModules 옵션을 사용하면 스코프 문제로 문제가 될 수 있음
 *   - Object.keys, Object.entries를 이용해서 값들에 대해 순회 불가
 * 
 * 3. as const
 *  - 단순 객체형태로 정의되므로 Tree-shaking 가능
 *  - Object.keys, Object.entries를 이용해서 값들에 대해 순회 가능

 * 
 * 
 * https://techblog.woowahan.com/9804/
 */
