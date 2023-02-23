
// 1. 동기/비동기 처리의 정의
//     - 동기적(sync)처리
//         요청을 보낸 후, 해당 요청의 응답이 올때까지 다른 작업을 하지 못하는 방식
//         즉, 코드 한줄 실행이 완료되어야지만 다음 줄 실행이 가능하다는 뜻
    
//     - 비동기정(async)처리
//         요청을 보낸 후, 해당 요청의 응답과 상관없이 다른 작업을 하는 방식
//         즉, 코드 한줄 실행 후 결과와 상관없이 다음 줄 실행한다는 뜻

// 2. 비동기 처리 사용 되는 곳
//     - 보통 오래 걸리는 기능들은 비동기적 방식으로 처리함

// Rest API 요청
// 파일/데이터베이스 처리
// 타이머, 암호화/복호화 등

// 3. 비동기 처리 사용법(setTimeout)
//  1) setTimeout()
//      - setTimeout(ms만큼 기다린 후 호출할 함수, ms(시간))

// 예제 1
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 3000); // 1000은 1초를 의미, 즉 3초 대기 후, 반점 앞의 함수가 실행
// console.log(3);

// 예제 2
function work(){
    setTimeout(() => {
        const start = Date.now();
        for(let i=0; i<1000000000; i++){
        }
        const end = Date.now();
        console.log(end-start + 'ms');
    }, 0) // 실제는 0이 아니라 4 (인식할 수 있는 최소값)
};

console.log("처음 작업!");
work();
console.log("다음 작업!");
