
// 3) async & await
//      사용방법
//      function 키워드 앞에 async만 붙여주면 되고,
//      비동기로 처리되는 부분 앞에 await만 붙여주면 된다.

//      작동방식
//      async가 붙은 함수는 프로미스를 반환하고, 프로미스가 아닌 것은 프로미스로 감싸 반환한다.
//      await 키워드를 만나면 프로미스가 처리(settled)될 때까지 기다린다.
//      그리고 프로미스가 처리가 완료되어 resolve(값)가 되면 값만 따로 추출해서 리턴한다.

//      await는 promise.then보다 좀 더 세련되게 프로미스의 result 값을 얻을 수 있도록 해주는 문법
//      promise.then보다 가독성 좋고 쓰기도 쉽다.

//  예제

function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    });
}

async function process(){
    console.log("1 - Hello, This is async test!")
    await sleep(5000);
    console.log("2 - This code starts in 5minutes!")
};

// process()만 호출해도 되고 하단처럼 .then으로 다음 작업을 추가 작성가능!
process().then(() => {console.log("3 - async test is done")}); //함수 호출해서 실행!