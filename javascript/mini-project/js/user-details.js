const userId = window.location.href.split('#')[1];

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .then((user) => {
        const userBlockLeft = document.getElementById('user-block-left');
        const userBlockRight = document.getElementById('user-block-right');
        for (let i in user) {
            if (typeof user[i] !== 'object') {
                userBlockLeft.innerHTML += `<p> <b>${i.toUpperCase()}:</b> </p>`;
                userBlockRight.innerHTML += `<p> ${user[i]} </p>`;
            } else {
                userBlockLeft.innerHTML += `<p> <b>${i.toUpperCase()}:</b> </p>`;
                userBlockRight.innerHTML += '<br>';
                for (let j in user[i]) {
                    if (typeof user[i][j] !== 'object') {
                        userBlockLeft.innerHTML += `<p> ${j.toUpperCase()}: </p>`;
                        userBlockRight.innerHTML += `<p> ${user[i][j]} </p>`;
                    } else {
                        userBlockLeft.innerHTML += `<p> <b>${j.toUpperCase()}:</b> </p>`;
                        userBlockRight.innerHTML += '<br>';
                        for (let k in user[i][j]) {
                            userBlockLeft.innerHTML += `<p> ${k.toUpperCase()}: </p>`;
                            userBlockRight.innerHTML += `<p> ${user[i][j][k]} </p>`;
                        }
                    }
                }
            }
        }
        // const postsButton = document.getElementById('posts-btn');
        const postsBlock = document.getElementById('posts-block');
        const postsButton = document.createElement('button');
        postsButton.id = 'posts-btn';
        postsButton.innerText = 'Posts of current user';
        postsBlock.appendChild(postsButton);

        const postsTitles = document.createElement('div');
        postsTitles.id = 'posts-titles';
        postsButton.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then((res) => res.json())
                .then((posts) => {
                    postsButton.disabled = true;
                    for (let post of posts) {
                        postsTitles.innerHTML += `<a href="post-details.html#${post.id}" class="link"> ${post.title} </a>`;
                    }
                })
        }
        postsBlock.appendChild(postsTitles);
    });

