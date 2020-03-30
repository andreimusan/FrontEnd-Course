const comments = [{
    id: "",
    email: "",
    msg: ""
}]

const mainContainer = document.querySelector('#mainContainer');
const btn = document.querySelector('#addCommentBtn');
const input = document.querySelector('#addCommentInput');

btn.addEventListener('click', function() {
    event.preventDefault();
    let message = validateMessageInput(input);

    if (message) {
        const newId = Math.floor(Math.random() * 100000);

        comments.push({
            id: newId,
            email: "andrei@gmail.com",
            msg: input.value
        });

        for (let i = 0; i < comments.length; i++) {
            if (comments[i].id === newId) {
                displayComment(comments[i], mainContainer);
            }
        }       
    }

    input.value = "";
});

function validateMessageInput(input) {
    if (input.value == "") {
        input.classList.add('error-red-border');
        return false;
    } else {
        input.classList.remove('error-red-border');
        return true;
    }
}

// create comment div with user image, email and message
function displayComment(oneComment, containerNode) {
    const containerBox = document.createElement('div');

    let commentBox = `<div class='commentContainerContent'>
                        <div><i class='fas fa-user'></i></div>
                        <div class='commentContent'>
                            <p class='email'>${oneComment.email}</p>
                            <p class='message'>${oneComment.msg}</p>
                        </div>
                    </div>
                    <button type='button' class='deleteBtn' id=${oneComment.id}>Delete</button>`;
    
    containerBox.innerHTML = commentBox;
    containerBox.classList.add('newCommentContainer');
    containerNode.appendChild(containerBox);

    document.getElementById(oneComment.id).addEventListener('click', function(){
        deleteComment(oneComment.id);
    })
};

// delete comment from main container
function deleteComment(buttonId) {
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == buttonId) {
            document.getElementById(buttonId).parentElement.remove();
            comments.splice(i, 1);
        }
    }
};
