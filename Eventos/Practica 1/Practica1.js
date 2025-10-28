select = document.getElementById('options');

select.addEventListener('change', function () {
  if (select.value === 1) {
    document.createElement('p').textContent('Buenas usuario, ¿como estás?');
  }
});
