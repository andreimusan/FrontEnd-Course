const comments = [
    {
        id: 'com1',
        name: 'Andrei',
        msg: 'Ce faci2?'
    }
];

const btn = document.querySelector('#commentBtn');
const input = document.querySelector('#commentInput');
const commentList = document.querySelector('#commentList');

btn.addEventListener('click', function(){
    console.log(input.value);
    comments.push({
        name: 'Alex',
        msg: input.value
    })

    displayComments(comments, commentList)
});

displayComments(comments, commentList);


function displayComments(comments, containerNode){
    function addParagraph(text) {
        const newP = document.createElement("p");
        newP.innerText = text;
        return newP;
    }
    
    function addTitle(title) {
        const h1 = document.createElement("h1");
        h1.innerText = title;
        return h1;
    }
    
    
    function createCommentNode(comment) {
        const containerBox = document.createElement('div');

        const title = addTitle(comment.Name);
        const p = addParagraph(comment.msg);

        containerBox.appendChild(title);
        containerBox.appendChild(p);
    
        return containerBox;
    }

// parcurgem comentarii
    for (let idx = 0; idx < comments.length; idx++) {
        // punem in variabila comment fiecare comentariu pe rand
        const comment = comments[idx];
        // cream nodul care va afisa in DOM continutul comentariului
        // creeaza reprezentrea comentariului in DOM
        const commentNode = createCommentNode(comment);
        // punem in DOM comentriul
        containerNode.appendChild(commentNode);
    }
}