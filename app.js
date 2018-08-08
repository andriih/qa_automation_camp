console.log("\nNice work! Your first application have been launched.");
console.log("Now, I need to know your name, type it below: ");

let stdin = process.openStdin();

stdin.addListener("data", (txt) => {

    if(txt.toString().trim() === "quit") {
        console.log("\nHave a nice JS trip! Bye-bye");
        stdin.end();
    } else {
        console.log(`\nHi ${txt.toString().trim()}, nice to meet you at Eleks QA Academy 2018. I am sure you'll become great in your job.`);
        console.log(`${txt.toString().trim()}, to quit this application you can use 'Ctrl + C' keys, or type 'quit' and hit 'Enter'`);

        console.log('1');
        console.log('2');
        setTimeout(()=>{
        console.log('3');
        },3000);
        console.log('4');

        console.log('1 step');
        console.log('2 step');
        //////////////PROMISES////////////////////
        console.log('1');
        console.log('2');
        let p1 = new Promise((resolve,reject)=>
        setTimeout(()=>{
        console.log('3');
        resolve("ready");
        },3000));
        
        //p1.then(()=>{
        // console.log('4');
        //})

        async function test(promise){
        let s1 = await promise;
        //promise.then((result) => console.log("then result "+ result));
        console.log("4");
        //console.log(s1);
        
        return "I am function";
        }
        async function func(){
        let f1 = await test(p1); console.log('----------------');
        console.log(f1);
        }
        
        func();
        
        ////////////////////////////////

        function doubleAfter2Seconds(x) {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(x * 2);
              }, 2000);
            });
          }
          
          async function addAsync(x) {
            const a = await doubleAfter2Seconds(10);
            const b = await doubleAfter2Seconds(20);
            const c = await doubleAfter2Seconds(30);
            return x + a + b + c;
          }
          
          
          addAsync(10).then((sum) => {
            console.log(sum);
          });
    }
  });