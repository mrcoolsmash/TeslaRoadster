document.getElementById('modal_btn').addEventListener('click', function() {
    document.querySelector('.bg_modal').style.display = 'flex';
});

document.querySelector('.close_modal').addEventListener('click', function() {
    document.querySelector('.bg_modal').style.display = 'none';
});