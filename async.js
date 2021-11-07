console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => {
        setTimeout(() => resolve('popcorn'), 3000);
    });

    const addButter = new Promise((resolve, reject) => {
        setTimeout(() => resolve('butter'), 3000);
    });

    const getColdDrinks=new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve('cold drink'),3000});
    });

    
    let ticket = await promiseWifeBringingTicks;
    // console.log(`got the ${ticket}`);
    // console.log(`Husband:we should go in now`);
    // console.log(`Wife: "i am hungry"`);

    let popcorn = await getPopcorn;
    // console.log(`Husband: here is ${popcorn}`);
    // console.log(`Husband:we should go in now`);
    // console.log(`Wife: "I dont like popcorn without butter!"`);

    let butter = await addButter;
    // console.log(`added ${butter}`);
    // console.log(`Husband:we should go in now`);
    // console.log(`Wife: "I want cold drinks!"`);
    
    let coldDrinks=await getColdDrinks;
    // console.log(`Husband: here is ${coldDrinks}`);
    // console.log(`Husband:Anything else darling`);
    // console.log(`Wife: lets go we are going to miss the preivew`);
    // console.log(`Husband: thanks for the reminder *grin*`);


    let[pc,b,cd] =await Promise.all([getPopcorn,addButter,getColdDrinks])
    console.log(`${pc},${b},${cd}`);
    return ticket;
}


preMovie().then((m) => console.log(`person 3: shows ${m}`));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');