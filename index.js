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

/*git init -> criar o repositório local

git remote add origin "link do github"

git add .

git commit -m "mensagem de commit"

git push origin main*/

