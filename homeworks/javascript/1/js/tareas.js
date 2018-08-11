(function(){

    var tasks = [];

    const form = document.forms.ftareas;

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const task = e.target.nTarea.value
        if (task.length <= 0)
        {
            let parent = e.target.nTarea.parentNode
            let span = document.createElement('span')
            span.style.color = 'red'
            span.style.fontSize = '0.8em'
            span.innerText = 'Debes indicarme el nombre de la tarea.'
            form.insertBefore(span, parent.nextSibling)
            setTimeout(()=>{
                form.removeChild(span)
            }, 2000)
            return
        }
        tasks.push(task)
        var divContainer = document.createElement('div')
        divContainer.classList.add('container', 'task-container')
        var divRow = document.createElement('div')
        divRow.classList.add('row')
        var divColSpan = document.createElement('div')
        var divColButton = document.createElement('div')
        divColSpan.classList.add('col', 'flex', 'justify-content-start')
        divColButton.classList.add('col', 'flex', 'justify-content-end')
        var span = document.createElement('span')
        span.innerText = task
        divColSpan.appendChild(span)
        divRow.appendChild(divColSpan)
        var button = document.createElement('button')
        button.innerText = 'eliminar'
        button.setAttribute('type', 'button')
        button.addEventListener('click', () => {
            document.getElementById('list').removeChild(button.parentNode.parentNode.parentNode)
        })
        divColButton.appendChild(button)
        divRow.appendChild(divColButton)
        divContainer.appendChild(divRow)
        document.getElementById('list').appendChild(divContainer)
    })

})();