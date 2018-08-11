(function(){

    const max = 100000
    var prestamos = []
    var abonos = []

    document.getElementById('saldo').innerText = numeral(0).format('$0,0.00')
    
    document.getElementById('solicitar').addEventListener('click', () => {
        var p = prompt('¿Cuando necesitas?')
        if (p != null)
        {
            p = parseInt(p)
            if (isNaN(p))
            {
                alert('El valor debe ser numerico.')
            } else {
                if (p > max)
                {
                    alert('Hhm.. maximo puedo prestarte '+max)
                    return
                }
                if (confirm('¿Quieres que te preste '+p+'?'))
                {
                    var pp = document.createElement('p')
                    var o = numeral(p)
                    prestamos.push(p)
                    pp.innerText = o.format('$0,0.00')
                    document.getElementById('prestamos-list').appendChild(pp)
                    var s = document.getElementById('saldo')
                    s.innerText = numeral(calcSaldo(prestamos, abonos)).format('$0,0.00')
                }
            }
        }
    })
    document.getElementById('abonar').addEventListener('click', () => {
        var p = prompt('¿Cuando vas a abonar?')
        if (p != null)
        {
            p = parseInt(p)
            if (isNaN(p))
            {
                alert('El valor debe ser numerico.')
            } else {
                if (confirm('¿Quieres abonarme '+p+'?'))
                {
                    var pp = document.createElement('p')
                    var o = numeral(p)
                    abonos.push(p)
                    pp.innerText = o.format('$0,0.00')
                    document.getElementById('abonos-list').appendChild(pp)
                    var s = document.getElementById('saldo')
                    s.innerText = numeral(calcSaldo(prestamos, abonos)).format('$0,0.00')
                }
            }
        }
    })
})();

function calcSaldo(p, a)
{
    var pt = 0
    var at = 0
    p.forEach(element => {
        pt += element
    });
    a.forEach(element => {
        at += element
    })
    console.log(pt-at)
    return (pt-at)
}