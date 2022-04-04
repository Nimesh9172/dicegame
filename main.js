
function myfunc() {
r1 = Math.floor(Math.random()*6)+1
r2 = Math.floor(Math.random()*6)+1

document.getElementsByClassName('img1')[0].src=`images/dice${r1}.png`
document.getElementsByClassName('img2')[0].src=`images/dice${r2}.png`

if (r1 > r2){
	document.getElementsByTagName('h3')[0].innerHTML = "&#128681 Player 1 is Winner"
} else if(r1<r2){
	document.getElementsByTagName('h3')[0].innerHTML = "Player 2 is Winner &#128681"
} else{
	document.getElementsByTagName('h3')[0].innerHTML = "Draw"
}
}