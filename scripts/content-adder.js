(() => {
  const formTitle = document.querySelector('#formTitle');
  const formText = document.querySelector('#formText');
  const postForm = document.querySelector('#postForm');
  const postDate = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`

  const posts = [
    // {
    //   id: 1,
    //   date: '12.12.2022',
    //   title: `Презентация книги "ИВО - Начало".`,
    //   text: 'Раздача автографов нахаляву.'
    // },
    // {
    //   id: 2,
    //   date: '11.11.2022',
    //   title: 'Квартирник у Гали.',
    //   text: 'Уютная компания, приятные люди, ламповая атмосфера. Исполнялись как новые, так и старые песни.'
    // },
    // {
    //   id: 3,
    //   date: '10.10.2022',
    //   title: 'Релиз нового альбома.',
    //   text: 'Рождённый в муках. Слушать на всех платформах.'
    // }
  ];
  
  function createPost() {
    const post = {};

    post.id = posts.length + 1;
    post.date = postDate;
    post.title = formTitle.value;
    post.text = formText.value;

    posts.unshift(post);
    localStorage.setItem('posts', JSON.stringify(posts))
  }

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createPost();
    
    e.target.reset();
  })
})();