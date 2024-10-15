/**
 *  인터페이스와 클래스
 *  - implements를 통해 인터페이스를 만족시키는 클래스를 강제할 수 있다. (설계도 역할)
 *  - 하나라도 비어있다면 에러가 발생함
 *  - 단, 인터페이스의 경우 무조건 "public"으로 값이 들어간다.
 *    - 인터페이스에서 분리하고, 직접 선언해야만 private 가능..
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
