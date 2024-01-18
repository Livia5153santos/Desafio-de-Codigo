//Criando um código para armazenar o máximo de informações possíveis dos boncos do Genshin Impact e ao final,
//para cada um, exibir uma mensagem de saída escrita com o nome do boneco concatenando com "Cadastrado com sucesso"

// Declarando Variáveis
let boneco = ["KAEYA", "AMBER","XIANGLING","XINQIU","RAIDEN","AYATO","COLLEI","DEHYA","FREMINET","LYNETTE"]
let nivel = [" 90"," 40"," 90"," 88"," 80"," 80"," 65"," 30"," 20"," 40"]
let regiao = [" Mondstadt "," Liyue"," Inazuma"," Sumeru"," Fontaine"]
let vida = [" 11.636"," 9.461"," 10.874"," 10.222"," 12.907"," 13.715"," 9.787"," 15.674", " 12.071"," 12.397"]
const notificacao = ": Cadastrado com sucesso"

// Laço de Repetição e Saída
for (let contador = 0; contador < 10; contador++){
    console.log(boneco[contador] + notificacao)
}