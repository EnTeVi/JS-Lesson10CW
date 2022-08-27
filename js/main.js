// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users

// fetch('https://jsonplaceholder.typicode.com/users')
//
//
// .then((res) => {
//      return res.json();
//
// }).then((data) => {
//     console.log(data);
// });




// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.


// fetch('https://jsonplaceholder.typicode.com/users')
//
//
//     .then((res) => {
//         return res.json();
//
//     }).then((data) => data.forEach(user => {
//
//         let divElementId = document.createElement('div');
//         let divElementName = document.createElement('div');
//
//         divElementId.innerText = user.id;
//         divElementName.innerText = user.name;
//
//         document.body.append(divElementId, divElementName);
//     })
// );











// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку
// user-details.html, котра має детальну інфорацію про об'єкт на який клікнули


fetch('https://jsonplaceholder.typicode.com/users')


    .then((res) => {
        return res.json();

    }).then((data) => data.forEach(user => {

        let divCont = document.createElement('div');
        let divElementId = document.createElement('h2');
        let divElementName = document.createElement('h2');
        let a = document.createElement('a');


        divElementId.innerText = user.id;
        divElementName.innerText = user.name;
        a.className = "link";
        a.innerText = 'Information';
        a.href = `user-details.html?id=${user.id}`;

        divCont.append(divElementId, divElementName, a);
        document.body.append(divCont);



    })
);





















