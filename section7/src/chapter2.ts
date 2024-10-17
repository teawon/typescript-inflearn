/**
 *  Map 메서드
 */

function map<U, R>(arr: U[], callback: (item: U) => R): R[] {
  let result = [] as R[];
  for (let i = 0; i < arr.length; i++) {
    const element = callback(arr[i]);
    result.push(element);
  }

  return result;
}

/**
 * forEach메서드
 */
const arr = [1, 2, 3];
const result = map(arr, (it) => (it * 2).toString());

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
