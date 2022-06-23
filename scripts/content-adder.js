(() => {
  const formTitle = document.querySelector('#formTitle');
  const formText = document.querySelector('#formText');
  const postForm = document.querySelector('#postForm');
  const blogList = document.querySelector('#blogList');
  const postDeleteBtn = document.querySelector('#postDeleteBtn');
  // const postEditBtn = document.querySelector('#postEditBtn')
  const postDate = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`

  // const defaultPosts = [
  //   {
  //     id: 1,
  //     date: '12.12.2022',
  //     title: `Презентация книги "ИВО - Начало".`,
  //     text: 'Раздача автографов нахаляву.'
  //   },
  //   {
  //     id: 2,
  //     date: '11.11.2022',
  //     title: 'Квартирник у Гали.',
  //     text: 'Уютная компания, приятные люди, ламповая атмосфера. Исполнялись как новые, так и старые песни.'
  //   },
  //   {
  //     id: 3,
  //     date: '10.10.2022',
  //     title: 'Релиз нового альбома.',
  //     text: 'Рождённый в муках. Слушать на всех платформах.'
  //   },
  //   {
  //     id: 4,
  //     date: '9.9.2022',
  //     title: 'Стали выше, сильнее и красивее.',
  //     text: 'Так и есть. Зачем нам врать?'
  //   }
  // ]
  
  let posts = JSON.parse(localStorage.getItem('posts')) || [];

  function renderPosts() {
    posts = JSON.parse(localStorage.getItem('posts')) || []
    blogList.innerHTML = '';

    posts.forEach((el) => {
      blogList.innerHTML += `
      <li id="${el.id}" class="blog-list-item">
        <div class="blog-post d-flex flex-column" contentEditable="false">
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
          <div class="button-wrapper">
            <button id="postEditBtn" type="button" class="btn btn-outline-secondary">Редактировать</button>
            <button id="saveChangesBtn" type="button" class="btn btn-outline-success" disabled="true">Сохранить</button>
            <button id="postDeleteBtn" type="button" class="btn btn-outline-danger">Удалить</button>
          </div>
        </div>
      </li>
      `
    })
  }
  renderPosts();

  function createPost() {
    posts = JSON.parse(localStorage.getItem('posts')) || []
    const post = {};

    post.id = posts.length + 1;
    post.date = postDate;
    post.title = formTitle.value;
    post.text = formText.value;

    posts.unshift(post);
    localStorage.setItem('posts', JSON.stringify(posts))
  }

  function editPost(element) {
    const postEditBtn = element.children[2].children[0];
    const saveChangesBtn = element.children[2].children[1];
    const postTitle = element.children[1].children[0];
    const postText = element.children[1].children[2];

    postTitle.contentEditable = true;
    postText.contentEditable = true;
    // element.contentEditable = true;
    saveChangesBtn.disabled = false;
    postEditBtn.disabled = true;
  }

  function saveChanges(element) {
    posts = JSON.parse(localStorage.getItem('posts')) || []
    const postTitle = element.children[1].children[0];
    const postText = element.children[1].children[2];

    posts.forEach(el => {
      if(element.parentElement.id == el.id) {
        el.title = postTitle.innerText;
        el.text = postText.innerText;
      }
    });

    localStorage.setItem('posts', JSON.stringify(posts));
  }

  function deletePost(id) {
    posts = JSON.parse(localStorage.getItem('posts')) || []
    localStorage.setItem('posts', JSON.stringify(posts.filter(el => el.id != id)));
    
  }

  blogList.addEventListener('click', (e) => {
    if(e.target.id == 'postDeleteBtn') {
      deletePost(e.target.parentElement.parentElement.parentElement.id);
      renderPosts();
    }

    if(e.target.id == 'postEditBtn') {
      editPost(e.target.parentElement.parentElement);
    }

    if(e.target.id == 'saveChangesBtn') {
      saveChanges(e.target.parentElement.parentElement);
      renderPosts()
    }
  })

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createPost();
    
    e.target.reset();
    renderPosts();
  })
})();