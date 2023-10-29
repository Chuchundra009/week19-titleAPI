//отправляем get запрос на адрес https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
.then(responce => responce.json())
.then(texts => {
    renderText(texts)
})
.catch(error => console.error('Ошибка:',error))



function renderText(arr) {
    //доступ к div из html файла
    const container = document.querySelector('#contText');
    //создаем новый div где будут перечислены заголовок и статья из запроса и за счет forEach будут отображены на странице все нужные данные
    arr.forEach(element => {
        const newDiv = document.createElement('div')
        const template =
        `
        <h1>Заголовок: ${element.title}</h1>
        <p>Статья: ${element.body}</p>
        `;
       newDiv.innerHTML = template;
        container.append(newDiv)
    });
}