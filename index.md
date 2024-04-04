#HTML

*hypertext*
*Markup*
*Language*

#CSS


#JavaScript

```js 
// variaveis
const mensagem = `Oi, Tudo bem?`
// tipo de dados
 // number
 // string
// funcao
alert(mensagem)
```
// objeto javascript
const participante = {
  name:`Davi Barbosa`,
  email: `davi@gmail.com`,
  inscriptionDate: new Date (2024, 2, 22, 19, 20),
  checkinDate: new Date (2024, 2, 25, 22, 00),
}
// array
let participantes = [
  {
  name:`Davi Barbosa`,
  email: `davi@gmail.com`,
  inscriptionDate: new Date (2024, 2, 22, 19, 20),
  checkinDate: new Date (2024, 2, 25, 22, 00),
  },
]

  // estrutura de repetição - loop
  for (let participante of participantes) {
    // faça alguma coisa
    output = output + criarNovoParticipante(participante)
  }