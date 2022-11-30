document.getElementById('all-admin-btn').addEventListener('click', () => {
  document.getElementById('all-admin').style.display = 'block';
  document.getElementById('all-admin-edit').style.display = 'none';
})

document.getElementById('all-edit-admin-btn').addEventListener('click', () => {
  document.getElementById('all-admin').style.display = 'none';
  document.getElementById('all-admin-edit').style.display = 'block';
})