<script>
  const menuIcon = document.querySelector('.menu-icon');
  const sidebar = document.querySelector('.sidebar');

  menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active')
  });
</script>
