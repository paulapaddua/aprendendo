const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function Ler(pergunta) {
    return new Promise(function(resolve, reject) {
        rl.question(pergunta, (resposta) => {
           // rl.close();
            resolve(resposta);
        }); 
    });
  }





async function Processar()
{

    let PrimeiroNumero = await Ler('digite um numero:');
    let operacao = await Ler('digite uma operacao:');
    let segundonumero = await Ler('digite outro numero:');
    
    
    
    if (operacao === '+')
    {
        console.log(Number( PrimeiroNumero) + Number (segundonumero ) );

    } else

        if (operacao === '-')
    {
     console.log(number( PrimeiroNumero) - Number (segundonumero ) );

    } else
 
    if (operacao === '*')
    { 
    
    console.log(number( PrimeiroNumero) * Number (segundonumero ) );
 
} else
        if (operacao === '/')
        {
         
       console.log(number( PrimeiroNumero) / Number (segundonumero ) );

       } 




    


    
/*
   if (Nome === "")
   {
       console.log("Voce chegou aqui em 31/12/2019");
   }
   else
   {
    console.log("Voce nao é a Paula");
   }   
   */
   



}

Processar();