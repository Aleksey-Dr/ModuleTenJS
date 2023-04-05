// Find elements
const fetchUsersBtn = document.querySelector('.btn');
const usersList = document.querySelector('.users-list');
const inputQuantity = document.querySelector('.input-quantity');
// console.log(usersList);
// console.log(fetchUsersBtn);
let valueQuantity = 'https://jsonplaceholder.typicode.com/users';

// Add listener to element
fetchUsersBtn.addEventListener('click',
    () => {
        fetchUsers()
            .then((users) => renderUsersList(users))
            .catch((error) => console.log(error));
    });

inputQuantity.addEventListener('input', (evt) => {
    valueQuantity =
        `https://jsonplaceholder.typicode.com/users?_limit=${evt.currentTarget.value}`;
});

function fetchUsers() {
    return fetch(valueQuantity)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            });
}

function renderUsersList(users) {
    const markup = users.map((user) => {
        return `<li><p><b>Name</b>:${user.name}</p>
        <p><b>Email</b>:${user.email}</p>
        <p><b>Company</b>:${user.company.name}</p></li>`;
    })
        .join("");
    usersList.innerHTML = markup;
}