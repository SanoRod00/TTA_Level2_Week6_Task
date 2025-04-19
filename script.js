async function fetchAndDisplayUsers() {
    const userListElement = document.getElementById('userDetails')
    try{
const data = await fetch('https://jsonplaceholder.typicode.com/users'); 
const users = await data.json();
userListElement.innerHTML = '';
users.forEach(user => {
    const userElement = document.createElement('div');
    userElement.innerHTML = `
    <h2>${user.name}</h2>
    <p>Username: ${user.username}</p>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
    <p>City:${user.address.city}</p>
    <p>Zipcode:${user.address.zipcode}</p>
    <p>Company:${user.company.name}</p>
    `;
    userListElement.appendChild(userElement);
    });

    }
    catch(error) {
       
        console.error('Error:', error);
      userListElement.innerHTML = '<li>Could not load users. Please try again.</li>';
        }
    }
    fetchAndDisplayUsers();
