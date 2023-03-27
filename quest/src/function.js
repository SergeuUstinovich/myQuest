const userInfo = [
    {
    immg: 'images/boy.png',
    name:'Brad Simmons', 
    skill: 'HTML, JS, ReactJS',
    earnin: '$8,000,000',
    earn: 'В процесее',
    commis: '$520', 
    comm: 'Оплачено',
    compan: 'Intertico',
    comp:'Web, UI/UX Design',
    reiting: 2,
    button: 'Посмотреть предложения'
},
    {
    immg: 'images/Avatar.png',
    name:'Jessie Clarcson', 
    skill:'C#, ASP.NET, MS SQL',
    earnin: '$23,000,000',
    earn: 'В ожидании',
    commis: '$1 600', 
    comm: 'Отклонен',
    compan: 'Agoda',
    comp:'Houses & Hotels',
    reiting: 4.5,
    button: 'Посмотреть предложения'
},
    {
    immg: 'images/boy-22.png',
    name:'Lebron Wayde', 
    skill:'PHP, Laravel, VueJS',
    earnin: '$34,000,000',
    earn: 'Оплачено',
    commis: '$6 700', 
    comm: 'Оплачено',
    compan: 'Intertico',
    comp:'Web, UI/UX Design',
    reiting: 3,
    button: 'Посмотреть предложения'
},
    {
    immg: 'images/skin1.png',
    name:'Natali Trump', 
    skill:'Python, PostgreSQL, ReactJS',
    earnin: '$2,600,000',
    earn: 'Оплачено',
    commis: '$14 000', 
    comm: 'Оплачено',
    compan: 'The Hill',
    comp:'Insurance',
    reiting: 3.6,
    button: 'Посмотреть предложения'
}  
];

let sortColumnFlag = 'reiting',
sortDirflag = true

//Блоки вложенные в людей
//Создание элем
const $listApp = document.getElementById('listApp'),
      $formApp = document.getElementById('listForm'),
      $formImg = document.getElementById('file'),
      $formName = document.getElementById('formName'),
      $formSkills = document.getElementById('formSkills'),
      $formEarn = document.getElementById('formEarning'),
      $formCommis = document.getElementById('formCommis'),
      $formComp = document.getElementById('formCompany'),
      $formCompTex = document.getElementById('formCompTex'),
      $formRating = document.getElementById('formRating'),
      $sorDirBtn = document.getElementById('sor-dir'),
      $sorNameBtn = document.getElementById('sor-name'),
      $filterNameCompany = document.getElementById('filter-name-company'),
      $filterForm = document.getElementById('myDropdown');

      
function render(){
        $listApp.innerHTML = '';
        let copyListData = [...userInfo]
        //Сортировка
        copyListData = copyListData.sort(function(a, b){
            let sort = a[sortColumnFlag] < b[sortColumnFlag]
            if(sortDirflag == false)sort = a[sortColumnFlag] > b[sortColumnFlag]
            if(sort) return -1
        })
        //фильтрация
        if($filterNameCompany.value.trim() !== ""){
            copyListData = copyListData.filter(function(oneUser){
                if(oneUser.compan.includes($filterNameCompany.value.trim())) return true
            })
        };
        
        
//Отрисовка
for(const oneUser of copyListData){

const $listHuman = document.createElement('div'),
      $listHum = document.createElement('div'),
      $listErn = document.createElement('div'),
      $listComm = document.createElement('div'),
      $listComp = document.createElement('div'),
      $listRating = document.createElement('div'),
      $listBuut = document.createElement('div'),
//содержимое вложенных блоков
      $listImg = document.createElement('img'),
      
      $listName = document.createElement('h1'),
      $listSkill = document.createElement('p'),
//доход
      $listEarnin = document.createElement('h1'),
      $listEarn = document.createElement('p'),
// коммисия
      $listCommis = document.createElement('h1'),
      $listCom = document.createElement('p'),
//компания
      $listCompan = document.createElement('h1'),
      $listCompa = document.createElement('p'),
      //рейтинг
      $listRatingBody = document.createElement('div'),
      $listRatingActive = document.createElement('div'),
      $listRatingItems = document.createElement('div'),
      $listInputOne = document.createElement('input'),
      $listInputTwo = document.createElement('input'),
      $listInputThree= document.createElement('input'),
      $listInputFour = document.createElement('input'),
      $listInputFive = document.createElement('input'),
      $listRatingValue = document.createElement('div'),
      
      //кнопка
      $listButon = document.createElement('button');
//вложение
//в блок Hum
$listHum.append($listImg)
$listHum.append($listName)
$listHum.append($listSkill)

$listImg.classList.add('b')
// $listImg.attributes('src')
//в блок Earn
$listErn.append($listEarnin)
$listErn.append($listEarn)
//в блок Комм
$listComm.append($listCommis)
$listComm.append($listCom)
//в блок компания
$listComp.append($listCompan)
$listComp.append($listCompa)
//рейтинг
$listRating.append($listRatingBody)
$listRatingBody.append($listRatingActive)
$listRatingBody.append($listRatingItems)
$listRatingItems.append($listInputOne)
$listRatingItems.append($listInputTwo)
$listRatingItems.append($listInputThree)
$listRatingItems.append($listInputFour)
$listRatingItems.append($listInputFive)
$listRating.append($listRatingValue)
//блок кнопка
$listBuut.append($listButon)

$listButon.classList.add('buut')

//В блок human и сам блок в боди  
$listHuman.append($listHum)
$listHuman.append($listErn)
$listHuman.append($listComm)
$listHuman.append($listComp)
$listHuman.append($listRating)
$listHuman.append($listBuut)
$listApp.append($listHuman)
//добавление стиля
$listHuman.classList.add('human', 'box')
$listHum.classList.add('hum')
$listErn.classList.add('earn','inv')
$listComm.classList.add('comm','inv')
$listComp.classList.add('comp','inv')

$listRating.classList.add('rating')
$listRatingBody.classList.add('rating__body')
$listRatingActive.classList.add('rating__active')
$listRatingItems.classList.add('rating__item')
$listInputOne.classList.add('rating__item')
$listInputTwo.classList.add('rating__item')
$listInputThree.classList.add('rating__item')
$listInputFour.classList.add('rating__item')
$listInputFive.classList.add('rating__item')
$listRatingValue.classList.add('rating__value')

$listInputOne.type = 'radio';
$listInputTwo.type = 'radio';
$listInputThree.type = 'radio';
$listInputFour.type = 'radio';
$listInputFive.type = 'radio';
$listInputOne.value = '1';
$listInputTwo.value = '2';
$listInputThree.value = '3';
$listInputFour.value = '4';
$listInputFive.value = '5';


$listBuut.classList.add('butt')


$listImg.src = oneUser.immg
$listName.textContent = oneUser.name
$listSkill.textContent = oneUser.skill

$listEarnin.textContent = oneUser.earnin
$listEarn.textContent = oneUser.earn

$listCommis.textContent = oneUser.commis
$listCom.textContent = oneUser.comm

$listCompan.textContent = oneUser.compan
$listCompa.textContent = oneUser.comp


$listRatingValue.textContent = oneUser.reiting


$listButon.textContent = oneUser.button
}
//рейтинг
const ratings = document.querySelectorAll('.rating');

if(ratings.length > 0){
    initRatings();
}
function initRatings(){
    let ratingActive, ratingValue;
    for(let index = 0; index < ratings.length; index++){
        const rating = ratings[index]; 
        initRating(rating);
        
    }
    function initRating(rating){
        initRatingVars(rating);

        setRatingActiveWidth();
    }
    function initRatingVars(rating){
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }
    function setRatingActiveWidth(index = ratingValue.innerHTML){
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    //отображение
    const elem = document.querySelectorAll('.inv');
    const human = document.querySelectorAll('.human');
    document.querySelector('.active').onclick = function(){
    gridView();
    }
    document.querySelector('.deactive').onclick = function(){
    listView();
    }

    function listView(){
    for(let i=0; i < elem.length;i++){
    elem[i].style.display = "";
    }
    for(let h=0;h < human.length; h++){
    human[h].style.width = "100%";

    }
    }
    function gridView(){
    for(let i=0; i < elem.length;i++){
    elem[i].style.display= "none";
    }
    for(let h=0;h < human.length; h++){
    human[h].style.width = "50%";

    }
    }    
};
}

render()
//Добавление
$formApp.addEventListener('submit', function(event){
    event.preventDefault()

    userInfo.push({
        // immg: $formImg.value,
        name:$formName.value, 
        skill: $formSkills.value,
        earnin: $formEarn.value,
        earn: 'В процесее',
        commis: $formCommis.value, 
        comm: 'Оплачено',
        compan: $formComp.value,
        comp: $formCompTex.value,
        reiting: $formRating.value,
        button: 'Посмотреть предложения'
        

    })
    render();
    
    console.log(userInfo)
})

//Событие сортировки
$sorDirBtn.addEventListener('click', function(){
    sortColumnFlag = 'reiting'
    sortDirflag=!sortDirflag
    render();
})
$sorNameBtn.addEventListener('click', function(){
    sortColumnFlag = 'name'
    sortDirflag=!sortDirflag
    render();
})
//фильтр

$filterForm.addEventListener('submit', function(event){
    event.preventDefault()
})
$filterNameCompany.addEventListener('input', function(){
    render();
})

//фильтр выплывающее !!событие вешать надо в js конфликт с вебпаком
document.querySelector('.but_filter').onclick = function(){
    displ();
} 
document.querySelector('.but_create').onclick = function(){
    form();
}

// document.querySelector('.but-form-close').onclick = function(){
//     closeForm();
// }
function displ(){
    document.getElementById("myDropdown").classList.toggle("show");
}
function form(){
    document.getElementById("myForm").classList.toggle("visible");
}
// function closeForm(){
//     document.getElementById("myForm").classList.toggle("novisibl");
// }


    

    








// const htt = 'https://raw.githubusercontent.com/SergeuUstinovich/quest1/main/packej.json';


// function sendRequest(method, url){
//     return new Promise((resolve, reject)=>{
//         const xhr = new XMLHttpRequest();

//         xhr.open(method, url);
//         xhr.responseType = 'json';
    
//         xhr.onload = () =>{
//         if (xhr.status >= 400){
//             reject(xhr.response)
//         }else{
//             resolve(xhr.response)
//         }
//     };
//     xhr.onerror = () =>{
//         reject(xhr.response)
//     };
//         xhr.send();        
//     })  
// };
// sendRequest('GET', htt)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))




//сворачивает окно если нажать в рандомном месте
// window.onclick = function(e){
//     if(!e.target.matches('.but_filter')){
//         let myDropdown = document.getElementById("myDropdown");
//         if(myDropdown.classList.contains('show')){
//             myDropdown.classList.remove('show');
//         }
//     }
// }
//сортировка пузырьком
// for(let i = 0; i< sor.length; i++){
//     for(let j = i; j< sor.length; j++){
//         if(a[i] > a[j]) {
//             let temp = a[i];
//             a[i] = a[j];
//             a[j] = temp;
//         }
        
//     }
// }
// сортировка по рейтингу
// document.querySelector('#sor-asc').onclick = function(){
//     mySort('data-reit');
// } 
// document.querySelector('#sor-desc').onclick =  function(){
//     mySortDesc('data-reit');
// } 

// document.querySelector('#sor-finans').onclick = function(){
//     mySort('data-finans');
// } 
// document.querySelector('#sor-definans').onclick =  function(){
//     mySortDesc('data-finans');
// }

// function mySort(sortType){
//     let sor = document.querySelector('#sor');
//     for(let i = 0; i< sor.children.length; i++){
//         for(let j = i; j< sor.children.length; j++){
//             if(+sor.children[i].getAttribute(sortType) > +sor.children[j].getAttribute(sortType)){
//                 replaceNode = sor.replaceChild(sor.children[j],sor.children[i]);
//                 insertAfter(replaceNode, sor.children[i]);
//             } 
//         }
//     }
// }
// function mySortDesc(sortType){
//     let sor = document.querySelector('#sor');
//     for(let i = 0; i< sor.children.length; i++){
//         for(let j = i; j< sor.children.length; j++){
//             if(+sor.children[i].getAttribute(sortType) < +sor.children[j].getAttribute(sortType)){
//                 replaceNode = sor.replaceChild(sor.children[j],sor.children[i]);
//                 insertAfter(replaceNode, sor.children[i]);
//             } 
//         }
//     }
// }

// function insertAfter(elem,refElem){
//     return refElem.parentNode.insertBefore(elem,refElem.nextSibling);
// }


//фильтр
// const list = document.querySelectorAll('.box');
// const items = document.querySelector('.dropdown-content');

// function filter(){
//     items.addEventListener('click', (event)=>{
//         const targetId = event.target.dataset.skill;

//         switch(targetId){
//             case 'all':
//                 item('box')
//                 break;
//             case 'intertico':
//                 item(targetId)
//                 break;
//             case 'agoda':
//                 item(targetId)
//                 break;  
//             case 'the_hill':
//                 item(targetId)
//                 break;     
//         }
//     })
// }
// filter()

// function item(className){
//     list.forEach(list => {
//         if(list.classList.contains(className)){
//             list.style.display = 'flex'
//         }else{
//             list.style.display = 'none'
//         }
//     })
// }







