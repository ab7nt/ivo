(() => {
  const blogList = document.querySelector('#blogList');
  const defaultPosts = [
    {
      id: 1,
      date: '12.12.2022',
      title: `Презентация книги "ИВО - Начало".`,
      text: 'Раздача автографов нахаляву.'
    },
    {
      id: 2,
      date: '11.11.2022',
      title: 'Квартирник у Гали.',
      text: 'Уютная компания, приятные люди, ламповая атмосфера. Исполнялись как новые, так и старые песни.'
    },
    {
      id: 3,
      date: '10.10.2022',
      title: 'Релиз нового альбома.',
      text: 'Рождённый в муках. Слушать на всех платформах.'
    }
  ]
  const postsFromLocalStorage = JSON.parse(localStorage.getItem('posts')) || defaultPosts;

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