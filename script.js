let likeCount = 0;

function likePost() {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount + " Likes";
}

function addComment() {
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');
    if (commentInput.value) {
        const li = document.createElement('li');
        li.textContent = commentInput.value;
        commentList.appendChild(li);
        commentInput.value = ''; // Clear the input
    }
}

function uploadFile() {
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    if (file) {
        alert(`File ${file.name} uploaded!`); // In reality, you'll need a server to handle uploads
    } else {
        alert("No file selected.");
    }
}
