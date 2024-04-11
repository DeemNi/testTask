let text = document.getElementById('textComment');

function createPost() {

    //блок .comments
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comments');
    commentDiv.id = 'commentNew';
    commentDiv.style.display = 'block';

    //блок .profile
    let profileDiv = document.createElement('div');
    profileDiv.classList.add('profile');

    //зображення блоку .profile
    let profileImg = document.createElement('img');
    profileImg.src = './assets/images/user.jpg';
    profileDiv.appendChild(profileImg);

    //блок .comment-content
    let commentContentDiv = document.createElement('div');
    commentContentDiv.classList.add('comment-content');

    //елемент <p> для імені користувача
    let namePara = document.createElement('p');
    namePara.classList.add('name');
    namePara.textContent = 'anonimos';

    //елемент <p> для коментаря
    let commentPara = document.createElement('p');
    commentPara.textContent = text.value;
    commentContentDiv.appendChild(namePara);
    commentContentDiv.appendChild(commentPara);

    //блок .comment-status
    let commentStatusDiv = document.createElement('div');
    commentStatusDiv.classList.add('comment-status');

    //елемент <span> для статусу коментаря
    var statusSpan = document.createElement('span');
    statusSpan.textContent = 'Curte·comente';

    //зображення статусу коментаря
    let likeImg = document.createElement('img');
    likeImg.src = './assets/images/like.jpg';
    likeImg.width = '14';
    likeImg.height = '14';
    statusSpan.appendChild(likeImg);

    //кількость лайків коментаря
    let likeCount = document.createElement('span');
    likeCount.textContent = '3';
    statusSpan.appendChild(likeCount);

    //елемента <small> для часу публікації
    let timeSmall = document.createElement('small');
    let timeUnderline = document.createElement('u');
    timeUnderline.textContent = '1 minutos antes';
    timeSmall.appendChild(timeUnderline);

    //елемент до блоку .comment-status
    commentStatusDiv.appendChild(statusSpan);
    commentStatusDiv.appendChild(timeSmall);

    //елементів до блоку .comments
    commentDiv.appendChild(profileDiv);
    commentDiv.appendChild(commentContentDiv);
    commentDiv.appendChild(document.createElement('div')); // Додавання пустого елемента div для вирівнювання
    commentDiv.appendChild(commentStatusDiv);

    //блок .comments
    document.body.appendChild(commentDiv);

    //пошук елементу з id "createComment"
    let targetElement = document.getElementById('createComment');

    //Вставка блоку
    targetElement.insertAdjacentElement('afterend', commentDiv);

    //очистка
    text.value = '';
}