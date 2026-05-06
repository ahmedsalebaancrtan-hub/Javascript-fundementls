const decreaseBtn = document.getElementById("BtnDecrease")
const resetBtn = document.getElementById("BtnReset")
const increaseBtn = document.getElementById("BtnIncrease")
const counterLabel = document.getElementById("countLabel")

let count = 0;


increaseBtn.onclick  = function () {
    count++;

    
    counterLabel.textContent = count;

    
}

decreaseBtn.onclick = function () {
    count--;
    counterLabel.textContent = count;
    
   

}

resetBtn.onclick = function () {
    count = 0;
    counterLabel.textContent = count;
}


