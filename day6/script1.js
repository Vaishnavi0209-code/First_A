var f1=document.getElementById("first");
console.log(f1);
f1.innerHTML="hrllo";

let para=document.getElementsByTagName('p');
console.log(para);

for(let i=0;i<para.length;i++){
    para[i].innerHTML=i+ "hello this is text";
}
let d=document.getElementsByClassName('second');
console.log(d)

