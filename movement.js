var el = document.getElementsByClassName('movebymouse')[0];
el.textContent = '按下空格键停止或继续跟随';
el.style.position = 'fixed';
function move(e){
    el.style.left = e.clientX +10 +'px';
    el.style.top = e.clientY +10+'px';
}function clearAndStart(e){
    if(e.key === ' '){
        if(isMoving === true){
            document.removeEventListener('mousemove',move);
        }else{
            document.addEventListener('mousemove',move);   
        }isMoving = !isMoving;
    }
}
document.addEventListener('mousemove',move);
var isMoving = true;
document.addEventListener('keypress',clearAndStart);