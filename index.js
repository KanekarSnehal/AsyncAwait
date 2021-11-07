console.log('person1:shows ticket');
console.log('person2 :shows ticket');

const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000);
});

const getPopcorn=promiseWifeBringingTicks.then((t)=>{
    console.log('wife: I have the tcikets');
    console.log('husband: we should go in');
    console.log("wife: no i am hungry");
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
});
const getButter=getPopcorn.then((t)=>{
    console.log('husband:i got some popcoen');
    console.log('husband:we should go in');
    console.log('wife:I need butter on my popcorn');
    return new Promise((resolve,reject)=>resolve(`${t} butter is here`));
});


getButter.then((t)=>console.log(t));

console.log('person 4: shows ticket');
console.log('person 5: shows tcikcet');