/*GET -- RECEBE
POST -- ENVIA
PUT
PATCH
DELETE*/

// npm install -y
// npm install express
//node index.js --- executa

//configuração rota
import express from "express"
const app = express()
const port = 3000 

/*app.get('/',(req,res) => {
 res.send("Olá mundo! 2")
})

     app.get('/bibliotecas',(req,res) =>{
     const bibliotecas = { 
        nome: "Teste-Express",
        vers: 1,
        bibliotecas : ["Express","React"] 
    }

    const bibliotecasJson = JSON.stringify(bibliotecas)
    res.setHeader("Content-Type","application/json")
    res.send(bibliotecasJson)}
    )

    let soma = 0 
    app.get('/somar',(req,res) =>{
        soma++
        res.send(JSON.stringify(soma))
    })*/






    app.get('/pessoa0',(req,res) =>{
        const pessoa0 = { 
           nome: "Eu",
           email: "Eu@gamil.com.br",
           idade: 22,
           hobbies : ["Caminhar","Sair para festas"] 
       }
   
       const pessoa0Json = JSON.stringify(pessoa0)
       res.setHeader("Content-Type","application/json")
       res.send(pessoa0Json)}
       )
 
  
    app.get('/pessoa',(req,res) =>{
        const pessoa = { 
           nome: "Thiago",
           email: "Thiago@gmail.com.br",
           idade: 21,
           hobbies : ["Viajar","Andar de Skate"] 
       }

       const pessoa2 = { 
        nome: "Beatriz",
        email: "Beatriz@gmail.com.br",
        idade: 27,
        hobbies : ["Dançar","nadar com as amigas"] 
    }
    const pessoa3 = { 
        nome: "Sirlene",
        email: "Sirlene@gmail.com.br",
        idade: 26,
        hobbies : ["Tocar violão","ir ao cinema"] 
    }
   
   
       const pessoaJson = JSON.stringify([pessoa,pessoa2,pessoa3])
       res.setHeader("Content-Type","application/json")
       res.send(pessoaJson)}
       )

    //printa navegador
       app.listen(port,() =>{
        console.log('App executando na porta'+port)
    })

