let n = 5;
let arr=[];
for(let i=1;i<=n;i++){
    arr.push(i);
}
let x=arr.reduce((cur,prev) => {
    return cur+prev;
})

console.log(x);