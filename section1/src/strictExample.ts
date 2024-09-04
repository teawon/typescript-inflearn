//@ts-expect-error
export const hello = (message) => {
  console.log(message);
};
//  strict가 true라면 'message' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.ts(7006) 에러 발생
