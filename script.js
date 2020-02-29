function getPilihanComputer() {
    const comp = Math.random()

    if (comp < 0.34) {
        return 'fire'
    }
    else if (comp >= 0.34 && comp < 0.67) {
        return 'water'
    }
    else {
        return 'earth'
    }
}

function putar() {
    const imgComputer = document.querySelector('.img-computer')
    const gambar = ['fire', 'water', 'earth']
    let i = 0
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval
            return
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if (i == gambar.length) {
            i = 0
        }
    }, 100)
}

function getHasil(comp, player) {
    if (player == comp) {
        return 'SERI'
    }
    else if (player == 'fire') {
        if (comp == 'earth') {
            return 'MENANG!'
        }
        else {
            return 'KALAH!'
        }
    }
    else if (player == 'water') {
        if (comp == 'fire') {
            return 'MENANG!'
        }
        else {
            return 'KALAH!'
        }
    }
    else {
        if (comp == 'water') {
            return 'MENANG!'
        }
        else {
            return 'KALAH!'
        }
    }
}


const pilihan = document.querySelectorAll('li img')
const computerScore = document.getElementById('computer-score')
const playerScore = document.getElementById('player-score')
let nilaiKomputer = 1
let nilaiPlayer = 1


pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer()
        const pilihanPlayer = pil.className
        const hasil = getHasil(pilihanComputer, pilihanPlayer)

        putar()

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-computer')
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

            const info = document.querySelector('.info')
            info.innerHTML = hasil

            const computerGif = document.getElementById('computer-gif')
            const playerGif = document.getElementById('player-gif') 

            if (pilihanComputer == 'fire') {
                computerGif.style.backgroundImage = "url(img/firebending.gif)"
            }
            else if (pilihanComputer == 'water') {
                computerGif.style.backgroundImage = "url(img/waterbending.gif)"
            }
            else {
                computerGif.style.backgroundImage = "url(img/earthbending.gif)"
            }

            if (pilihanPlayer == 'fire') {
                playerGif.style.backgroundImage = "url(img/firebending.gif)"
            }
            else if (pilihanPlayer == 'water') {
                playerGif.style.backgroundImage = "url(img/waterbending.gif)"
            }
            else {
                playerGif.style.backgroundImage = "url(img/earthbending.gif)"
            }
            

            if (hasil == 'MENANG!') {
                playerScore.innerHTML = nilaiPlayer++
            }
            else if (hasil == 'KALAH!') {
                computerScore.innerHTML = nilaiKomputer++
            }
        }, 1000)
    })
})

