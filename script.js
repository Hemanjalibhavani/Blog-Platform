function addPost() {
  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;

  if (title === '' || content === '') {
    alert('Please fill all fields');
    return;
  }

  const blogContainer = document.getElementById('blogContainer');

  const postDiv = document.createElement('div');
  postDiv.classList.add('blog-post');

  postDiv.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>

    <div class="comment-section">
      <h4>Comments</h4>

      <input type="text" class="comment-input" placeholder="Write a comment...">

      <button class="comment-btn">Add Comment</button>

      <div class="comment-list"></div>
    </div>
  `;

  blogContainer.prepend(postDiv);

  const commentBtn = postDiv.querySelector('.comment-btn');
  const commentInput = postDiv.querySelector('.comment-input');
  const commentList = postDiv.querySelector('.comment-list');

  commentBtn.addEventListener('click', function() {
    const commentText = commentInput.value;

    if (commentText === '') {
      alert('Enter a comment');
      return;
    }

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.textContent = commentText;

    commentList.appendChild(commentDiv);

    commentInput.value = '';
  });

  document.getElementById('postTitle').value = '';
  document.getElementById('postContent').value = '';
}