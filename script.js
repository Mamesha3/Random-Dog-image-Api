const downBtn = document.querySelector('#download')
const generateBtn = document.querySelector('#generate')

//div class "image",  url "https://dog.ceo/api/breeds/image/random"

async function getDoIm() {
    let res = await fetch("https://dog.ceo/api/breeds/image/random")
    let data = await res.json()
    createContainer(data.message)
}

function createContainer(some) {
    document.querySelector('.empty-container').style.display = 'none'
    let divImage = document.createElement('div')
    divImage.className = "image"

    let img = document.createElement('img')
    img.loading = "lazy"
    img.src = some

    divImage.appendChild(img)
    
    document.querySelector('.img_container').appendChild(divImage)
}

generateBtn.addEventListener('click', getDoIm)
document.addEventListener('click', async e => {
    if (e.target.matches('img')) {
        let urlCreated = await fetch(e.target.src)
        let theBlob = await urlCreated.blob()
        console.log(urlCreated)

        let link = document.createElement('a')
        link.href = URL.createObjectURL(theBlob)
        link.download = getNames()
        link.click()

        URL.revokeObjectURL(link.href)
    }
})

// create random name for image when downloaded
        let letters = 'abcdfsgerwuoqpeldjvmnx'
        let num = '1234567890'

        function getrandomName() {
           let appends = letters.concat(num)
           let random = Math.floor(Math.random() * appends.length)
           let getNames = appends[random]
           return getNames
        }

        function getNames() {
            let c = getrandomName() + getrandomName() + getrandomName() + getrandomName() + getrandomName()
            let b = getrandomName() + getrandomName() + getrandomName() + getrandomName() + getrandomName()
            return c + b
        }