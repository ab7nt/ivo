(() => {
const albumsList = document.querySelector('#albumsList');
const albums = [
  {
    author: 'ИВО',
    album: 'Бусины (сингл)',
    year: '2022',
    frame: `<iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/22599590">Слушайте <a
      href="https://music.yandex.ru/album/22599590">Бусины</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
  {
    author: 'ИВО',
    album: 'Моё море (сингл)',
    year: '2022',
    frame: `<iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/22336671">Слушайте <a
      href="https://music.yandex.ru/album/22336671">Моё море</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
  {
    author: 'ИВО',
    album: 'Правила дорожного движения (сингл)',
    year: '2022',
    frame: ` <iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/22011144">Слушайте <a
      href="https://music.yandex.ru/album/22011144">Правила дорожного движения</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
  {
    author: 'ИВО',
    album: 'Эта женщина тебя бросит (сингл)',
    year: '2022',
    frame: `<iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/21053828">Слушайте <a
      href="https://music.yandex.ru/album/21053828">Эта женщина тебя бросит</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
  {
    author: 'ИВО',
    album: 'Акриловое сердце',
    year: '2022',
    frame: `<iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/20870903">Слушайте <a
      href="https://music.yandex.ru/album/20870903">Акриловое сердце</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
  {
    author: 'ИВО',
    album: 'Самая любимая книга (сингл)',
    year: '2021',
    frame: `<iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/20010456">Слушайте <a
      href="https://music.yandex.ru/album/20010456">Самая любимая книга</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
  {
    author: 'ИВО',
    album: 'Пятьдесят третий регион (сингл)',
    year: '2021',
    frame: `<iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/18782160">Слушайте <a
      href="https://music.yandex.ru/album/18782160">Пятьдесят третий регион</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
  {
    author: 'ИВО',
    album: 'На осеннем бульваре (сингл)',
    year: '2021',
    frame: `<iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/18323004">Слушайте <a
      href="https://music.yandex.ru/album/18323004">На осеннем бульваре</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
  {
    author: 'ИВО',
    album: 'Давай у тебя буду теперь я',
    year: '2021',
    frame: `<iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/17544432">Слушайте <a
      href="https://music.yandex.ru/album/17544432">Давай у тебя буду теперь я</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
  {
    author: 'ИВО',
    album: 'Именинник (сингл)',
    year: '2021',
    frame: `<iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/14052780">Слушайте <a
      href="https://music.yandex.ru/album/14052780">Именинник</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
  {
    author: 'ИВО',
    album: 'Белыми стали пустыни (сингл)',
    year: '2020',
    frame: `<iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/12532748">Слушайте <a
      href="https://music.yandex.ru/album/12532748">Белыми стали пустыни</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
  {
    author: 'ИВО',
    album: 'Москва-кольцо',
    year: '2020',
    frame: `<iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/10384253">Слушайте <a
      href="https://music.yandex.ru/album/10384253">Москва-кольцо</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
  {
    author: 'ИВО',
    album: 'Голос (сингл)',
    year: '2016',
    frame: `<iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/11953708">Слушайте <a
      href="https://music.yandex.ru/album/11953708">Голос</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
  {
    author: 'ИВО',
    album: 'Мама',
    year: '2010',
    frame: `<iframe frameborder="0" style="border:none;width:100%;height:450px;" width="100%" height="450"
    src="https://music.yandex.ru/iframe/#album/11830059">Слушайте <a
      href="https://music.yandex.ru/album/11830059">Мама</a> — <a
      href="https://music.yandex.ru/artist/9023738">Иво</a> на Яндекс Музыке</iframe>`,
  },
];

albums.forEach(el => {
  const collapseId = String(el.album).split(' ').join('').split('(').join('').split(')').join('');

  albumsList.innerHTML += `
  <li>  
    <button class="btn btn-albums btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
      <strong>${el.author}</strong> - ${el.album} - ${el.year}
      </button>
    <div class="collapse" id="${collapseId}">
      <div class="card card-body">
      
      </div>
    </div>
  </li>`

  // albumsAccordion.innerHTML += `
  //   <div class="accordion-item">
  //     <h2 class="accordion-header" id="headingOne">
  //       <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
  //         aria-expanded="true" aria-controls="collapseOne">
  //         <span><strong>${el.author}</strong> - ${el.album} - ${el.year}</span>
  //       </button>
  //     </h2>
  //     <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
  //       data-bs-parent="#albumsAccordion">
  //       <div class="accordion-body">
  //         ${el.frame}
  //       </div>
  //     </div>
  //   </div>`
})

albumsList.addEventListener('click', (e) => {
  // console.log(e.target.tagName);
  // console.log(albumsList.tagName);
  if(e.target.tagName == 'BUTTON') {
    // console.log(e.target.tagName); 
    albums.forEach(el => {
      // console.log(el.album);
      // console.log(e.target.parentElement.children[0].outerText);
      if(e.target.parentElement.children[0].outerText.includes(el.album)) {
        e.target.parentElement.children[1].children[0].innerHTML = `${el.frame}`
      }
    })
   
  }
})
})();



          