const form = document.getElementById('main-form')
const terms = document.getElementById('terms-input')
const input = document.getElementById('name-input')
const button = document.getElementById('button')
const title = document.getElementById('saludo')
const secondButton = document.getElementById('button-click')
const thirdButton = document.getElementById("button-change")
const link = document.getElementById("link")

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    title.innerHTML = `¿${input.value}? Que nombre tan hermoso, pero te voy a decir amor de mi vida :)`
    secondButton.click()
    thirdButton.disabled = false
})

terms.addEventListener('change', () =>{
    if(terms.checked && input.value != ""){
        button.disabled = false
    }else{
        button.disabled = true
    }
}
)

input.addEventListener('keyup', ()=>{
    if(terms.checked && input.value != ""){
        button.disabled = false
    }else{
        button.disabled = true
    }
})

link.addEventListener('click', () =>{
    Swal.fire({
        title: 'Una flor para usted',
        html: 'A veces tengo ganas de ser cursi <br />para decir: La amo a usted con locura. <br/>A veces tengo ganas de ser tonto<br /> para gritar: ¡La quiero tanto!</br>A veces tengo ganas de ser niño <br/>para llorar acurrucado en su seno.<br/>A veces tengo ganas de estar muerto<br/> para sentir,</br>bajo la tierra húmeda de mis jugos,<br/>que me crece una flor<br/>rompiéndome el pecho,<br/>una flor, y decir: <br/>Esta flor, para usted.',
        imageUrl: './movementHeart.gif',
        imageHeight: 50,
        imageWidth: 50,
    })
})