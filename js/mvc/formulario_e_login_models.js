// Gerar arquivo TXT //
function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}



function banco_de_dados(data_hora_1, data_hora_2, nome, sobrenome, rg, email, senha, plano, cep, rua, numero, complemento, bairro, cidade, estado, referencia) {

    // Atualizar página (para zerar o formulário) //
    alert("Cadastro feito com sucesso!");
    window.location.reload();

  // Enviar informações para o banco de dados //
  let enviar = "=NOME: " + nome + " | SOBRENOME: " + sobrenome + " | RG: " + rg + " | EMAIL: " + email + " | SENHA: " + senha + " | PLANO: " + plano + "=CEP: " + cep + " =" + rua + ", " + numero + " | COMPLEMENTO: " + complemento + ", " + bairro + ", " + cidade + " - " + estado + " | REFERENCIA: " + referencia + "=="
  let link = "https://joinjoaomgcd.appspot.com/_ah/api/messaging/v1/sendPush?apikey=fd5ced3a0e0d48cd841a319c4032d81f&text=" + enviar + "&deviceId=ce8bb2c8fd3b420e9897d14310a16041"
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", link, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;




}