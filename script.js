var plus=document.querySelectorAll('.plus')
var moin=document.querySelectorAll('.minus')
var prix=document.querySelectorAll('.price')
var total=document.getElementById('total')
var like=document.querySelectorAll('.like')
var sup=document.querySelectorAll('.delete')
var PRIX=[]
console.log(sup)


function evenementplus (c){
var cible=c.target
var div=cible.parentElement
var div1=div.parentElement
var div2=div1.parentElement
var prixu=div2.querySelector('.unitPrice')
var pr=div2.querySelector('.price')
var qte=div.querySelector('p')
var QTE=Number(qte.innerHTML)
QTE++
qte.innerHTML=QTE
pr.innerHTML=QTE*prixu.innerHTML
var w=0
for(var i=0;i<prix.length;i++){
    w+=Number(prix[i].innerHTML)
}
total.innerHTML=w
console.log(w)
}

function evenementmoin (c){
    var cible=c.target
    var div=cible.parentElement
    var div1=div.parentElement
    var div2=div1.parentElement
    var prixu=div2.querySelector('.unitPrice')
    var pr=div2.querySelector('.price')
    var qte=div.querySelector('p')
    var QTE=Number(qte.innerHTML)
    var y=0
    QTE--
    if (QTE>=0){qte.innerHTML=QTE;
        pr.innerHTML=QTE*prixu.innerHTML}
    else {qte.innerHTML=0;
    QTE=0}
    pr.innerHTML=QTE*prixu.innerHTML
    var w=0
    for(var i=0;i<prix.length;i++){
        w+=Number(prix[i].innerHTML)
    }
    total.innerHTML=w
    console.log(w)
}

function color(c){
    var cible=c.target
    if (cible.style.color==="red"){
        cible.style.color=""
    }
    else
    {
    cible.style.color="red"}
    // console.log(cible.style.color)
}

function supprimer(c){
    var cible=c.target
    var div1=cible.parentElement
    var div2=div1.parentElement
    var div3= div2.parentElement
    var div4= div3.parentElement
    var pri=div4.querySelector('.price')
    pri.innerHTML=0
    var w=0
    for(var i=0;i<prix.length;i++){
        console.log(i)
        w+=Number(prix[i].innerHTML)
    }
    total.innerHTML=w
    div4.remove()
}

for(var i=0;i<plus.length;i++){
    plus[i].addEventListener('click',evenementplus)
    moin[i].addEventListener('click',evenementmoin)
    like[i].addEventListener('click',color)
    sup[i].addEventListener('click',supprimer)
}
