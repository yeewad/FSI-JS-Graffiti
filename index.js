
// Select some elements...
let banner = document.getElementById('page-header')
banner.style.backgroundColor = 'orange'
banner.style.textAlign = 'left'
banner.style.fontFamily = 'Georgia'

    let frame = document.querySelectorAll('.dog-image')
for (let x = 0; x < frame.length; x++) {
    frame[x].style.borderColor = 'orange'
    frame[x].style.borderStyle = 'double'
}