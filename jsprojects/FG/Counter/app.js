//set initial value for our count variable
let count = 0;
//select the value button
const value = document.querySelector("#value")
const btns = document.querySelectorAll('.btn')
console.log(btns)
btns.forEach((btn) =>{
    console.log(btn)
    btn.addEventListener('click', (e) => {
        //console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){//decreases by 1
            count--
        }else if(styles.contains('decreaseFive')){//decreases by 5
            count -= 5
        }
        else if(styles.contains('increase')){//increases by 1
            count++
        }else if(styles.contains('increaseFive')){//increases by 5
            count += 5
        }else if(styles.contains('random'))//random number
            count = Math.floor(Math.random() * 281) - 100
        else {
            count = 0
        }
        if(count > 0){
            value.style.color = "green"
        }
        if(count < 0){
            value.style.color = "red"
        }
        if(count == 0){
            value.style.color = "black"
        }
        //style feedback count for variable
        value.textContent = count
    })
}) 