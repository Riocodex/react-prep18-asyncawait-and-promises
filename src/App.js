import { useEffect } from 'react';
import './App.css';

function App() {

  // const promiseExample =()=>{
  //   const friend = new Promise((resolve,reject)=>{
  //     let isChocolateEveryday = false;

  //     if(isChocolateEveryday){
  //       resolve("Promise resolved");
  //     }else{
  //       reject("Promise broken")
  //     }
  //   });

  //   friend
  //     .then((resolve)=>{
  //       console.log(`${resolve}`)
  //     })
  //     .catch((reject)=>{
  //       console.log(`${reject}. No more friendship`)
  //     })
  // }

  const promiseOne = (paramOne)=>{
    return new Promise((resolve, reject) => {
      if(paramOne === "Rio"){
        resolve("Promise resolved");
      }else{
        reject("Promise rejected")
      }
    })
  }


  const promiseTwo = (paramTwo) =>{
    return new Promise((resolve,reject)=>{
      if (paramTwo === "Promise resolved"){
        resolve("Rio is a goodboy")
      }else{
        reject("rio is still a goodboy")
      }
    })
  }
//using promise to run the two of tem
  // const mainPromise=()=>{
  //   promiseOne("Rio")
  //     .then((res)=>{
  //       console.log(res);
  //       return promiseTwo(res);
  //     })
  //     .then((sresponse) =>{
  //       console.log(sresponse)
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     })
  // }

  // another way musing async await

  const mainPromise = async()=>{
    try {
      let result = await promiseOne("Rio");
      console.log(result);
      let resultTwo = await promiseTwo("Promise resolved");
      console.log(resultTwo)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    // promiseExample();
    mainPromise();
  },[])
  return (
    <div className="App">
      <h1>Asyncawait</h1>
    </div>
  );
}

export default App;
