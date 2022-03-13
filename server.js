const express = require("express");
const server = express();
const nunjucks = require("nunjucks");

const projetos = [
    {
        img: "https://cdn-icons-png.flaticon.com/512/1396/1396673.png",
        title: "O advento de battle royalle, um estudo sobre Free Fire",
        category: "Administração",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#",
    },
    {
        img: "https://www.flaticon.com/premium-icon/icons/svg/560/560906.svg",
        title: "Por que a Terra NÃO é plana?",
        category: "Ciências",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/4668/4668541.png",
        title: "Satélite caseiro",
        category: "Engenharia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/6347/6347871.png",
        title: "Pneumoultramicroscopicossilicovulcanoconiose",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/6347/6347928.png",
        title: "Escala Rishter",
        category: "Geologia",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/6347/6347928.png",
        title: "TESTE",
        category: "TESTE",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
        url: "#",
    }
];

//config arquivos estaticos (css, scripts, imgs)
server.use(express.static("public"));

nunjucks.configure("views", {
    express: server,
    noCache: true,
});


//rota padrao /
server.get("/", function(req, res){
    const h1 = "Backend falando com frontend"
    return res.render("index.html", { title: h1 , projetos: [projetos[projetos.length - 1], projetos[projetos.length - 2], projetos[projetos.length - 3]]});
});

//rota para pag projects.html
server.get("/projetos", function(req, res){
    return res.render("projects.html", {projetos: projetos});
})

server.listen(3001);



//1 - Verif. se o node tá instalado
// node -v
//2 - Iniciar o projeto Node
//npm init -y
//3 - Instalar o express - criador de servidores
// npm i express
//Meu console - OhMyZSH
//4 - Instalação do nodemon
//Reinicia auto nosso server, qnd há atualização no cód
//5 - Instalar o nunjucks
//npm i nunjucks
