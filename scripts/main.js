(() => {
  const blogList = document.querySelector('#blogList');
  postsFromLocalStorage = JSON.parse(localStorage.getItem('posts'));

  postsFromLocalStorage.forEach((el) => {
    blogList.innerHTML += `
    <li class="blog-list-item border rounded">
      <div class="blog-post">
        <div class="date-wrapper">
          <div class="post-date text-muted">
            ${el.date}
          </div>
        </div>
        <div class="blog-content">
          <h5 class="post-title mb-2">
            ${el.title}
          </h5>
          <div class="partition border-bottom"></div>
          <p class="blog-descr pt-1">
            ${el.text}
          </p>
        </div>
      </div>
    </li>
    `
  })
})();