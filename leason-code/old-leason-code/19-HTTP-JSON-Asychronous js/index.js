const promiseOne = new Promise((reject,resolve)=> setTimeout(resolve,3000));
const promiseTwo = new Promise((reject,resolve)=> setTimeout(reject,3000));
Promise.allse([promiseOne,promiseTwo]).then(data=>console.log(data)).catch(e =>console.log(`something went wrong at ${e}`));

// async function promiseAII(){
//   try{
//   const promiseOne = await new Promise((reject,resolve)=> setTimeout(resolve,3000));
//   const promiseTwo = await new Promise((reject,resolve)=> setTimeout(reject,3000));
//   const x = await Promise.allSettled([promiseOne,promiseTwo]);
//   const y = await console.log(x)
//   }catch(err){
//     console.log(`error af on ${err}`)
//   }
// };
// promiseAII()