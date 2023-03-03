//Método fetch() para buscar o arquivo dados.json transformando o resultado em 
//um objto usando o método response.json.

fetch('dados.json')
.then(response => response.json())
.then(corpo => {

    //Acessando os dados do objeto JSON
    // e adicionando ao HTML dentro de um
    // elemento div usando a propriedade innerHTML
    //(Front-End)


    document.getElementById('imagem').innerHTML = corpo.pop2.image;
    document.getElementById('nome').innerHTML =  "Cantora: " + corpo.pop2.name;
    document.getElementById('disco').innerHTML = "Álbum: " + corpo.pop2.album;
    document.getElementById('estilo').innerHTML = "Estilo: " + corpo.pop2.style;
    document.getElementById('preco').innerHTML = "Valor do Álbum: " + corpo.pop2.price;



    document.getElementById('imagem2').innerHTML = corpo.pop.image;
    document.getElementById('nome2').innerHTML =  "Cantora: " + corpo.pop.name;
    document.getElementById('disco2').innerHTML = "Álbum: " + corpo.pop.album;
    document.getElementById('estilo2').innerHTML = "Estilo: " + corpo.pop.style;
    document.getElementById('preco2').innerHTML = "Valor do Álbum: " + corpo.pop.price;


    document.getElementById('imagem3').innerHTML = corpo.gospel.image;
    document.getElementById('nome3').innerHTML =  "Cantora: " + corpo.gospel.name;
    document.getElementById('disco3').innerHTML = "Álbum: " + corpo.gospel.album;
    document.getElementById('estilo3').innerHTML = "Estilo: " + corpo.gospel.style;
    document.getElementById('preco3').innerHTML = "Valor do Álbum: " + corpo.gospel.price;
})