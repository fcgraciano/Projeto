
function carregamento()
{
    let carregado = true;
    //alert(carregado);
    let url = "https://viacep.com.br/ws/17011067/json/";
    var conexao = new XMLHttpRequest();
    conexao.open("get",url);
    conexao.send();
    conexao.onload = function()
    {
        //alert(JSON.parse(conexao.response).logradouro);
    }
}
function trocarPasso(passoAtual, proximoPasso)
{
    window.location.href = proximoPasso;
}

function registrarInicio(){
   
        const dbParam = JSON.stringify(
            {
                "idade": document.querySelector("#Idade").value,
                "comentario": "null",
            }
        );
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            localStorage.setItem("Id_Participante",xmlhttp.response)
            console.log(xmlhttp.response)
            //trocarPasso("inicio","passo1.html")
        }
        xmlhttp.open("POST", "https://etec.fernandograciano.com.br/participante.php");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("dados="+dbParam );
    }
