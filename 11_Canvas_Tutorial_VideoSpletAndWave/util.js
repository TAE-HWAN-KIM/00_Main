/**
 * 찍은 좌표에서의 거리를 리턴한다.
 * @param {number} x1 현제 좌표 x
 * @param {number} y1 현제 좌료 y
 * @param {number} x2 찍은 좌표 x
 * @param {number} y2 찍은 좌표 y
 */
export function distance(x1, y1, x2, y2) {    
    const x = x2 - x1;
    const y = y2 - y1;
    return Math.sqrt(x * x + y * y);
    //Math.sqrt() 함수는 숫자의 제곱근을 반환합니다.
    //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
}

/**
 * 찍은 좌표에서의 거리가 넘겨준 반지름보다 큰지 작은지 비교
 * @param {number} x1 현제 좌표 x
 * @param {number} y1 현제 좌료 y
 * @param {number} x2 찍은 좌표 x
 * @param {number} y2 찍은 좌표 y
 * @param {*} radius 반지름의 값
 */
export function collide(x1, y1, x2, y2, radius) {
    if (distance(x1, y1, x2, y2) <= radius)
        return true;
    else
        return false;
}