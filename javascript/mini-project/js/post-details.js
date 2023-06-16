const postId = window.location.href.split('#')[1];

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => res.json())
    .then((post) => {
        const postDetails = document.getElementById('post-details');
        const postBody = document.getElementById('post-body');
        for (let key in post) {
            if (key !== 'body') {
                postDetails.innerHTML += `<p> <b>${key}:</b> ${post[key]} </p>`;
            } else {
                postBody.innerHTML += `<p> <b>${key}:</b> ${post[key]} </p>`;
            }

        }
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((res) => res.json())
    .then((comments) => {
        const commentsBlock = document.getElementById('comments-block');
        for (let comment of comments) {
            const commentBlock = document.createElement('div');
            commentBlock.className = 'comment-block';
            for (let key in comment) {
                if (key !== 'postId') {
                    if (key !== 'body') {
                        commentBlock.innerHTML += `<p> <b>${key}:</b> ${comment[key]} </p>`;
                    } else {
                        commentBlock.innerHTML += `<p> <b><i>${comment[key]}</i></b> </p>`;
                    }
                }
            }
            commentsBlock.appendChild(commentBlock);
        }
    });