let participantes = [
  {
    name: 'Davi Barbosa',
    email: 'davi@gmail.com',
    inscriptionDate: new Date(2024, 2, 23, 19, 20),
    checkinDate: new Date(2024, 2, 25, 22, 0)
  },
  {
    name: 'Maria Silva',
    email: 'maria@example.com',
    inscriptionDate: new Date(2024, 2, 21, 18, 15),
    checkinDate: new Date(2024, 2, 25, 21, 30)
  },
  {
    name: 'João Oliveira',
    email: 'joao@example.com',
    inscriptionDate: new Date(2024, 2, 20, 17, 10),
    checkinDate: new Date(2024, 2, 25, 20, 45)
  },
  {
    name: 'Ana Souza',
    email: 'ana@example.com',
    inscriptionDate: new Date(2024, 2, 19, 16, 5),
    checkinDate: null
  },
  {
    name: 'Pedro Santos',
    email: 'pedro@example.com',
    inscriptionDate: new Date(2024, 2, 18, 15, 0),
    checkinDate: new Date(2024, 2, 25, 19, 15)
  },
  {
    name: 'Juliana Costa',
    email: 'juliana@example.com',
    inscriptionDate: new Date(2024, 2, 17, 14, 55),
    checkinDate:null
  },
  {
    name: 'Lucas Ferreira',
    email: 'lucas@example.com',
    inscriptionDate: new Date(2024, 2, 16, 13, 50),
    checkinDate: new Date(2024, 2, 25, 17, 45)
  },
  {
    name: 'Mariana Lima',
    email: 'mariana@example.com',
    inscriptionDate: new Date(2024, 2, 15, 12, 45),
    checkinDate: null
  },
  {
    name: 'Gabriel Almeida',
    email: 'gabriel@example.com',
    inscriptionDate: new Date(2024, 2, 14, 11, 40),
    checkinDate: new Date(2024, 2, 25, 16, 15)
  },
  {
    name: 'Carolina Ribeiro',
    email: 'carolina@example.com',
    inscriptionDate: new Date(2024, 2, 13, 10, 35),
    checkinDate: new Date(2024, 2, 25, 15, 30)
  }
]

const criarNovoParticipante = (participante) => {
  const inscriptionDate = dayjs(Date.now()).to (participante.inscriptionDate)

  let checkinDate = dayjs(Date.now()).to (participante.checkinDate)

  if(participante.checkinDate == null) {
    checkinDate = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar Check in
      </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.name}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${inscriptionDate}</td>
    <td>${checkinDate}</td>
  </tr>
  `
}
const atualizarLista = (participantes) => {
  let output = ``
  // estrutura de repetição - loop
  for (let participante of participantes) {
    // faça alguma coisa
    output = output + criarNovoParticipante(participante)
  }
  // substituir informação do HTML
  document.querySelector(`tbody`).innerHTML = output
} 


atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const participante = {
    name: formData.get(`nome`),
    email: formData.get(`email`),
    inscriptionDate: new Date(),
    checkinDate: null
  }

  const participanteExiste= participantes.find((p) => {
    return p.email == participante.email
  })

  if (participanteExiste) {
    alert(`Email já cadastrado`)
    return
  }
  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // limpar form
  event.target.querySelector(`[name="nome"]`).value=""
  event.target.querySelector(`[name="email"]`).value=""

}

const fazerCheckIn = (event) => {
  // confirmar checkin
  const result= `tem certeza que quer fazer o check in?`
  if(confirm(result) == false){
    return
  }

  alert(result)

  // encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  // atualizar o checkin do participante
  participante.checkinDate = new Date()
  // atualizar a lista de participantes
  atualizarLista(participantes)
}