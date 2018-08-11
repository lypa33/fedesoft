(function(){
    var form = document.forms.datos

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (e.target.nombre.value.length == 0)
        {
            alert('Debes indicarme como te llamas')
            return
        }
        if (e.target.correo.value.length == 0)
        {
            alert('Debes indicarme tu correo')
            return
        }
        if (typeof e.target.nombre.value.split(" ")[1] === 'undefined')
        {
            alert('Seguramente tienes apellido...')
            return
        }
        if ((!e.target.correo.value.includes('.')) || (!e.target.correo.value.includes('@')))
        {
            alert('El correo es incorrecto, falta "." o "@"')
            return
        }
        alert('Correcto!')
    })
})();
