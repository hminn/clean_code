/**
 * 코드 맥락이 코드 자체에 명시적으로 드러나지 않은 코드
 * 위 코드에서는 다음과 같은 정보가 드러나 있지 않다.
 *
 * 1. theList에 무엇이 들었는가?
 * 2. theList에서 0번째 값이 어째서 중요한가?
 * 3. 값 4는 무슨 의미인가?
 * 4. 함수가 반환하는 리스트 list1을 어떻게 사용하는가?
 */
const theList: number[][] = [[1, 2, 3], [4, 5, 6]];
const getThem = (): number[][] => {
  const list1: number[][] = [];
  for (const x of theList) {
    if (x[0] === 4) list1.push(x);
  }
  return list1;
}

console.log(getThem());