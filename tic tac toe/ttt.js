var count=1;
var cell=document.querySelectorAll(".cell");
cell.forEach((v)=>{
    v.addEventListener("click",function () {
        print(this.id);
    });
})

function print(id){
    var img=document.createElement("img");
    img.width=100;
    var target=document.getElementById(id);
    if(count%2!=0){
        img.src="x.png";
        target.appendChild(img);
    }
    else{
        var img=document.createElement("img");
        img.width=100;
        img.src="o.png";
        var target=document.getElementById(id);
        target.appendChild(img);    
    }
    count++;
    if(count>9){
        count=1;
    }
}