document.getElementById('userForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;

  const data = {
    name: form.name.value,
    email: form.email.value,
    color: form.color.value,
    hobbies: [...form.querySelectorAll('input[name="hobbies"]:checked')].map(h => h.value),
    gender: form.gender.value,
    birthday: form.birthday.value
  };

  await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  form.reset();
  loadUsers();
});

async function loadUsers() {
  const res = await fetch('/api/users');
  const users = await res.json();

  const list = document.getElementById('userList');
  list.innerHTML = '';

  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.email}) - ${user.color}, ${user.gender}, 🎂 ${new Date(user.birthday).toDateString()}`;
    list.appendChild(li);
  });
}

loadUsers();
