
//  2) promise
//      공식
//      const myPromise = new Promise((resolve, reject) => {실행 코드 구현})

//  예제 1 - promise의 resolve : 성공했을 때 상황

// console.log(1);

// const myPromise = new Promise((resolve, reject) => {
//     // setTime을 통해 5초 뒤에 resovle(2)를 실행해보자.
//     setTimeout(resolve(2), 5000);
// });

// myPromise.then(n => {
//     console.log(n);
// });

// console.log(3);

//  예제 2 - promise의 reject : 실패했을 때 상황

// const myPromise2 = new Promise((resolve, reject) => {
//     // setTimeout을 활용해서 5초 뒤에 reject(new Error()) 를 실행한다
//     setTimeout(reject(new Error()), 5000);
// });

// myPromise2.then(n => {console.log(n)}).catch(error => {console.log(error)});

//  예제 3 - promise의 resolve, reject : 성공 또는 실패했을 때 상황

function increaseAndPrint(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;

            if(value===5){
                const error = new Error();
                error.name = "FiveIsError"
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 3000);
    });
};

increaseAndPrint(6).then((n) => {
    console.log("result :", n);
});