var xhr = new XMLHttpRequest();
var resultado = null;

xhr.open('GET', 'https://restcountries.com/v3.1/name/brazil');
xhr.send();

xhr.onreadystatechange = funcion(); {
        if (xhr.readyState === 4 && xhr.status === 200) {
            resultado = JSON.parse(xhr.response);

            console.log(resultado)

            console.log(s)
    }

}

//AUTERAÇÃO REALIZADA

//COMMIT 03
