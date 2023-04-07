
function reload(time){
    location.reload()
}
let y = Math.floor(Math.random() * (20 - 1 + 1)) + 1
$('#in2').val(y)
let i = 3

function guess_the_number() {

    let x = Number($('#in1').val())
    i--
    $('#in3').val(i)
    if (x < Number(y)) {
        $('#result').text('Мало!')
    } else if (x > Number(y)) {
        $('#result').text('Много!')
    } else {
        $('#result').text('Еее, ты угадал!!!')
        setTimeout(reload,2000)
    }
    $('#in1').val("")
    if ((i === 0) && (x === Number(y))) {
        $('#result').text('Угадал на последней попытке!')
        setTimeout(reload,2000)

    } else if (i <= 0) {
        $('#result').text('Твои попытки закончились, отправляйся к акулам!')
        setTimeout(reload,2000)
    }


}

$('#but_guess').click(guess_the_number)
