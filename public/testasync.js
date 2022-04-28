// async function getResult(){
//     let promise = new Promise(resolve =>{
//         setTimeout(()=>{
//             console.log("return");
//             // return "done"
//             resolve("done")
//         }, 3000);
//     })
//     let result = await promise;
//     console.log(result);
// }
// getResult();

function sendResult(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("in sendResult");
            resolve("data"); //what we send to resolve as argument will be returned value of await functionName
        }, 3000)
    })
}

async function getResult(){
    // let result = await sendResult();
    console.log(await sendResult())
    // console.log(result)
    // sendResult().then((result)=>{
    //     console.log(result);
    // })
}
getResult();
