const entrada = require("readline-sync");

let key: boolean = false;
let saldo: number = 100;

    function sacar() {
    
        let saque = parseFloat(entrada.question("Digite o valor de saque: "));

        if(saque <= saldo){
            let senha = entrada.question("Digite sua senha");

            if(senha == "54577386801")
                return saldo = saldo - saque;

            else
                return console.log("Senha incorreta");
        }

        else
            console.log("Valor Indisponivel");

        let opc2 = parseFloat(entrada.question("Retornar a tela principal(1) ou Sair (2): "));

        if (opc2 == 2) 
                key = false
    }

    function depositar() {

        let deposito = parseFloat(entrada.question("Digite o valor de deposito: "));

                if(deposito > 0 ){
                    let senha = entrada.question("Digite sua senha");

                    if(senha == "54577386801"){
                      return  saldo = saldo + deposito;  
                    }

                    else
                        return console.log("Senha incorreta");
                }
        
    }

    for (let i = 0; i < 3; i++){

        let login = entrada.question("Digite seu usuario: ");
        let senha = entrada.question("Digite sua senha");

        if (login == "luana" && senha == "54577386801"){
            key = true
            i = 3;
        }
    }

    while (key){

        console.log("Seu saldo atual: " + saldo);
        console.log("1- Saques");
        console.log("2- Depositos");
        console.log("3- Sair do Sistema");

        let opc = parseFloat(entrada.question(""));

        switch (opc) {
            case 1:
                sacar();
            break;      
                
            case 2:
                depositar()
            break;
        
            default:
                key = false;
            break;
        }
    }
