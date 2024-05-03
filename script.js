
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