document.addEventListener('mousemove', function(e) {
    const flashlight = document.getElementById('flashlight');
    flashlight.style.left = e.pageX - 600 + 'px';
    flashlight.style.top = e.pageY - 600 + 'px';
});