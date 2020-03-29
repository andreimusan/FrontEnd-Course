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

function displayComment(oneComment, containerNode) {

    // add user email address in the new comment div
    function addEmailAddress(userEmail) {
        const newEmailAddress = document.createElement("p");
        newEmailAddress.innerText = userEmail;
        return newEmailAddress;
    }

    // add user comment in the new comment div
    function addParagraph(text) {
        const newP = document.createElement("p");
        newP.innerText = text;
        return newP;
    }

    // add user profile image
    function addProfileImage() {
        const newImage = document.createElement("i");
        newImage.classList.add('fas');
        newImage.classList.add('fa-user');
        return newImage;
    }

    // add delete button
    function addDeleteBtn(comment) {
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.type = "button";
        deleteBtn.id = comment.id;
        deleteBtn.classList.add('deleteBtn');
        
        return deleteBtn;
    }

    // create comeent div with user image, email and message
    function createCommentNode(comment) {
        const userBox = document.createElement('div');
        const imageBox = document.createElement('div');
        const contentBox = document.createElement('div');
        const containerBox = document.createElement('div');

        const image = addProfileImage();       
        imageBox.appendChild(image);

        const email = addEmailAddress(comment.email);
        contentBox.appendChild(email);
        email.classList.add('email');

        const message = addParagraph(comment.msg);       
        contentBox.appendChild(message);
        message.classList.add('message');

        userBox.appendChild(imageBox);
        userBox.appendChild(contentBox);
        contentBox.classList.add('commentContent');
        userBox.classList.add('commentContainerContent');

        const deleteBtn = addDeleteBtn(comment);
        containerBox.appendChild(userBox);
        containerBox.appendChild(deleteBtn);
        containerBox.classList.add('newCommentContainer');

        deleteBtn.addEventListener('click', function() {  
            for (let i = 0; i < comments.length; i++) {
                if (comments[i].id == this.id) {
                    containerBox.removeChild(userBox);
                    containerBox.removeChild(deleteBtn);
                    containerBox.classList.remove('newCommentContainer');
                    comments.splice(i, 1);
                }
            }  
        });

        return containerBox;
    }

    const commentNode = createCommentNode(oneComment);
    containerNode.appendChild(commentNode);
};