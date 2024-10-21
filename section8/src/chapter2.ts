/**
 * keyof 연산자
 *  - 특정 프로퍼티의 모든 key들을 Union 타입으로 추출하는 연산자
 */
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// K에는 'id' | 'name' | 'price' | 'description' 을 타입으로 가지는 값만 올 수 있다.
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  description: "A high-end gaming laptop",
};

const productName = getProp(product, "name");

// keyof는 "타입"에만 사용할 수 있다.
// -> 변수의 경우 typeof를 통해 타입을 추출 후 사용하도록 하자.
// @ts-expect-error
function getPropertyKey(product: Product, key: keyof product) {
  // @ts-expect-error
  return product[key];
}

function getPropertyKey_(product: Product, key: keyof typeof product) {
  return product[key];
}
