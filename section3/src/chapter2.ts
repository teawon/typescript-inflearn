/**
 *  객체 타입간의 호환성
 */
type Animal = {
  //슈퍼타입
  name: string;
  color: string;
};

type Dog = {
  //서브 타입
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// 로 어떤 객체가 Dog 타입에 포함된다면 무조건 Animal 타입에도 포함될 수 있다

animal = dog; // ✅ OK
// @ts-expect-error
dog = animal; // ❌ NO

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

// 값 할당은 업캐스팅과 다르게 초기 프로터티 검사에 의해 에러가 발생한다..

let book2: Book = {
  // 오류 발생
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // @ts-expect-error
  skill: "reactjs",
};

/**
 * 업캐스팅에 의해 Book의 서브 객체는 할당할 수 있지만 초기값을 저렇게 지정하면 에러가 발생한다.
 * @param book
 */
function func(book: Book) {}
func({
  // 오류 발생
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // @ts-expect-error
  skill: "reactjs",
});

const programmingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};
func(programmingBook);
