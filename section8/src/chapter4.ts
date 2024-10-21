/**
 * 템플릿 리터럴 타입
 * - 템플릿 리터럴을 사용해 특정 패턴을 갖는 "String" 타입을 만드는 기능
 */

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `red-dog` | "red-cat" | "red-chicken" | "black-dog"; // ...

type ColoredAnimal_ = `${Color}-${Animal}`;

// TODO : CIDR을 정의하는 예제

// https://toss.tech/article/template-literal-types
