const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endpoint = 12;
const select = [];

function calResult(){
    var pointarray = [
        {name : 'ISTJ', value: 0, key: 0},
        {name : 'ISTP', value: 0, key: 1},
        {name : 'ISFJ', value: 0, key: 2},
        {name : 'ISFP', value: 0, key: 3},
        {name : 'INTJ', value: 0, key: 4},
        {name : 'INTP', value: 0, key: 5},
        {name : 'INFJ', value: 0, key: 6},
        {name : 'INFP', value: 0, key: 7},
        {name : 'ESTJ', value: 0, key: 8},
        {name : 'ESTP', value: 0, key: 9},
        {name : 'ESFJ', value: 0, key: 10},
        {name : 'ESFP', value: 0, key: 11},
        {name : 'ENTJ', value: 0, key: 12},
        {name : 'ENTP', value: 0, key: 13},
        {name : 'ENFJ', value: 0, key: 14},
        {name : 'ENFP', value: 0, key: 15},

    ]

    for(let i = 0; i<endpoint; i++){
        var target = qnaList[i].a[select[i]];
        for(let j = 0; j < target.type.length; j++){
            for(let k = 0; k< pointarray.length; k++){
                if(target.type[j] === pointarray[k].name){
                    pointarray[k].value += 1;
                }
            }
        }
    }
    var resultarray = pointarray.sort(function (a, b){
        if(a.value > b.value){
            return -1;
        }
        if(a.value < b.value){
            return 1;
        }
        return 0;        
    
        });
        console.log(resultarray);
        
    let resultword = resultarray[0].key;
    return resultword;  
}
function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;
    
    var resultImg = document.createElement('img')
    const imgDiv = document.querySelector('#resultimg');
    var imgURL = 'img/image' + point + '.png';
    resultImg.src = imgURL ;
    resultImg.alt = point ;
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultdesc')
    resultDesc.innerHTML = infoList[point].desc;
}
function goResult(){
    qna.style.display="none";
    result.style.display="block";
    
    /*console.log(select); 로그 값 보기*/
    setResult();
}
function addanswer(answertext, qidx, idx){
    var a = document.querySelector('.abox');
    var answer = document.createElement('button');
    answer.classList.add('answerlist');
    a.appendChild(answer);
    answer.innerHTML = answertext;



    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerlist');
        for(let i = 0; i<children.length; i++){
        children[i].disabled = true;

        select[qidx] = idx;

        children[i].style.display= 'none';
        }
        goNext(++qidx);
    }, false);
}

function goNext(qidx){
    if(qidx === endpoint){
        goResult();
        return;
    }
    var q = document.querySelector('.qbox');
    q.innerHTML = qnaList[qidx].q;
    for(let i in qnaList[qidx].a){
        addanswer(qnaList[qidx].a[i].answer, qidx, i);
    }
    var status = document.querySelector('.status-bar');
    status.style.width = (100/endpoint) * (qidx+1) + '%';
}
function begin(){
    main.style.display="none";
    qna.style.display="block";
    let qidx = 0;
    goNext(qidx);
}