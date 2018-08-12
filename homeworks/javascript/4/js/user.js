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
        if (e.target.telefono.value.length == 0)
        {
            alert('Debes indicarme tu telefono')
            return
        }
        if (e.target.direccion.value.length == 0)
        {
            alert('Debes indicarme tu direccion')
            return
        }
        if (e.target.profesion.value.length == 0)
        {
            alert('Debes indicarme tu profesion')
            return
        }
        if (e.target.edad.value.length == 0)
        {
            alert('Debes indicarme tu edad')
            return
        }
        console.info('Mapeando...')
        var user = {
            nombre: e.target.nombre.value,
            mail: e.target.correo.value,
            tel: e.target.telefono.value,
            direccion: e.target.direccion.value,
            profesion: e.target.profesion.value,
            edad: e.target.edad.value
        };
        console.log(user)
    })
})();
