fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => {
        const usersBlock = document.createElement('div');
        usersBlock.id = 'users-block';
        usersBlock.class = 'flex-center';
        for (let user of users) {
            const userBlock = document.createElement('div');
            userBlock.className = 'user-block';
            const userId = document.createElement('h2');
            userId.classList.add('id', 'flex-center');
            userId.innerText = `${user.id}`;
            const userName = document.createElement('h3');
            userName.className = 'name';
            userName.innerText = user.name;
            const button = document.createElement('a');
            button.classList.add('details-btn', 'flex-center');
            button.href = `user-details.html#${user.id}`;
            button.innerText = 'details';
            userBlock.append(userId, userName, button);
            usersBlock.appendChild(userBlock);
        }
        document.body.appendChild(usersBlock);
    });