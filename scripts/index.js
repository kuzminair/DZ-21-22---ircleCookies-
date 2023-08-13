var counter;
counterCalculate();

function counterCalculate() {
    if (getCookie('counter') == undefined) {
        counter=3;
    }
    else{
        counter=parseInt(getCookie('counter'));
    }
}

document.getElementById('btnAdd').addEventListener ('click', ()=>{
    document.getElementById('containerCircle').innerHTML += `<div class="circle"></div>`;
    counter++;
    addCookie('counter', `${counter}`, `max-age=${24*60*60}`);
    console.log(document.cookie);
});
document.getElementById('btnDel').addEventListener ('click', ()=>{
    document.getElementById('containerCircle').lastElementChild.remove();
    counter--;
    addCookie('counter', `${counter}`, `max-age=${24*60*60}`);
    console.log(document.cookie);
});

function start () {
    if (getCookie('counter') == undefined) {
        document.getElementById('containerCircle').innerHTML += `<div class="circle"></div>`;
        document.getElementById('containerCircle').innerHTML += `<div class="circle"></div>`;
        document.getElementById('containerCircle').innerHTML += `<div class="circle"></div>`;        
        return;
    }
    else {
        counter = parseInt(getCookie('counter'));
        for (i=0; i<counter; i++) {
            document.getElementById('containerCircle').innerHTML += `<div class="circle"></div>`;
        }
        console.log(document.cookie);
    }
}
function addCookie(key, value, parameters) {
    document.cookie = `${key} = ${value}; ${parameters}`;
}
function getCookie(key) {
        let cookies = {};
        let tempCookiesStrings = document.cookie.split('; ');
        for (let el of tempCookiesStrings) {
            let pare = el.split('=');
            cookies[pare[0]] = pare[1];
        }   
        return cookies[key];
}

