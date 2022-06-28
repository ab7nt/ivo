(() => {
  const blogList = document.querySelector('#blogList');
  const postsFromLocalStorage = JSON.parse(localStorage.getItem('posts')) || [];
  const morePostsBtn = document.querySelector('#morePostsBtn');
  let qtyOfPosts;

  postsFromLocalStorage.length < 5
    ? qtyOfPosts = postsFromLocalStorage.length
    : qtyOfPosts = 5

  function renderPosts(start = 0) {
    for(let i = start; i < qtyOfPosts + start; i++) {
      blogList.innerHTML += `
      <li class="blog-list-item">
        <div class="blog-post">
          <div class="date-wrapper">
            <div class="post-date text-muted">
              ${postsFromLocalStorage[i].date}
            </div>
          </div>
          <div class="blog-content">
            <h5 class="post-title mb-2">
              ${postsFromLocalStorage[i].title}
            </h5>
            <div class="partition"></div>
            <p class="blog-descr pt-1">
              ${postsFromLocalStorage[i].text}
            </p>
          </div>
        </div>
      </li>`
    }

    if(document.querySelectorAll('.blog-list-item').length == postsFromLocalStorage.length) {
      morePostsBtn.classList.add('invisible')
    }
  }
  renderPosts();

  morePostsBtn.addEventListener('click', (e) => {
    const startNumberOfPosts = document.querySelectorAll('.blog-list-item').length;

    setTimeout(function() {
      window.scrollBy({top: 500, behavior: 'smooth'})
    })
    renderPosts(startNumberOfPosts);
  })
})();