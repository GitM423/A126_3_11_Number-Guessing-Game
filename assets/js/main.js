function checkRounds() {
    if (document.getElementById("four").checked == true) {
        console.log('selected: \n\t"four"')
        document.getElementById("custom-rounds").innerHTML = ""
    }
    else if (document.getElementById("five").checked == true) {
        console.log('selected: \n\t"five"')
        document.getElementById("custom-rounds").innerHTML = ""
    }
    else if (document.getElementById("six").checked == true) {
        console.log('selected: \n\t"six"')
        document.getElementById("custom-rounds").innerHTML = ""
    }
    else if (document.getElementById("custom").checked == true) {
        console.log('selected: \n\t"custom"')
        document.getElementById("custom-rounds").innerHTML = '<input type="number" name="" id="custom-number">'
    }
}

let index = 0
let random
let rounds

function sendData() {
    let guess = document.getElementById("guess").value
    let result = document.getElementById("result")

    if (index == 0 && (document.getElementById("custom").checked == true) && (document.getElementById("custom-number").value == "")) {
        console.log("ERROR: \n\tnumber of rounds missing")
        document.getElementById("result").innerHTML += "ERROR: \n\tnumber of rounds missing<br>"
    }
    else {
        if (guess == "") {
            console.log("ERROR: \n\tguess missing")
            document.getElementById("result").innerHTML += "ERROR: \n\tguess missing<br>"
        }
        else {

            index++

            if (index == 1) {
                random = Math.floor((Math.random() * 100) + 1);
                console.log(random)

                if (document.getElementById("four").checked == true) {
                    rounds = 4
                }
                else if (document.getElementById("five").checked == true) {
                    rounds = 5
                }
                else if (document.getElementById("six").checked == true) {
                    rounds = 6
                }
                else if (document.getElementById("custom").checked == true) {
                    rounds = document.getElementById("custom-number").value
                }
            }
            // if (index > rounds) {
            //     result.innerHTML += `<b style="color:#DC3545"">You have exceeded the allowed amount of guesses, <a href="">Play Again</a></b><br>`
            //     document.getElementById("radio").innerHTML = `<b style="color:#DC3545"">${index}/${rounds}</b>`
            // }
            if (index == rounds) {
                if (guess == random) {
                    result.innerHTML += `<b style="color:#28A745">${index} - This was your last try! And you got me, I'm ${random}. <a href="">You Win!! Play Again</a></b><br>`
                    document.getElementById("radio").innerHTML = `<b style="color:#28A745">${index}/${rounds}</b>`
                    document.getElementById("send").disabled = true
                    document.getElementById("send").style.background = "#6C757D"
                }
                else {
                    result.innerHTML += `<b style="color:#DC3545">${index} - This was your last try! The correct number would have been ${random}.  <a href="">Play Again</a></b><br>`
                    document.getElementById("radio").innerHTML = `<b style="color:#DC3545">${index}/${rounds}</b>`
                    document.getElementById("send").disabled = true
                    document.getElementById("send").style.background = "#6C757D"
                }
            }
            else {
                if (guess == random) {
                    result.innerHTML += `<b style="color:#28A745">${index} - Yes!! You  got me in ${index} guesses, I'm ${random}. <a href="">You Win!! Play Again</a></b><br>`
                    document.getElementById("radio").innerHTML = `<b style="color:#28A745">${index}/${rounds}</b>`
                    document.getElementById("send").disabled = true
                    document.getElementById("send").style.background = "#6C757D"
                }
                else if (guess < random) {
                    result.innerHTML += `${index} - You need to guess higher than ${guess}, try again.<br>`
                    document.getElementById("radio").innerHTML = `<b>${index}/${rounds}</b>`
                }
                else if (guess > random) {
                    result.innerHTML += `${index} - You need to guess lower than ${guess}, try again.<br>`
                    document.getElementById("radio").innerHTML = `<b>${index}/${rounds}</b>`
                }
            }
        }
    }
}

document.querySelectorAll('[type="number"]').forEach(function (item) {
    item.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault()
            document.getElementById("send").click()
        }
    })
})
