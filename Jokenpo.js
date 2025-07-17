function jokenpo(jogar){

  if(jogar != "Pedra" && jogar != "Papel" && jogar != "Tesoura")
    return "Valor errado, insira Pedra ou Papel ou Tesoura"

  jogoComputador2 = Math.floor(Math.random()*3)

  if(jogoComputador2==0)
    jogoComputador = "Pedra"
  else if (jogoComputador2==1)
    jogoComputador = "Papel"
  else
    jogoComputador = "Tesoura"

  console.log("Jogador: " + jogar)
  console.log("Computador: " + jogoComputador)

  if(jogar == jogoComputador)
    return "Velha"
  else if (jogar == "Pedra" && jogoComputador=="Tesoura")
    return "Você venceu"
  else if (jogar == "Pedra" && jogoComputador=="Papel")
    return "Computador venceu"
  else if (jogar == "Papel" && jogoComputador=="Pedra")
    return "Você venceu"
  else if (jogar == "Papel" && jogoComputador=="Tesoura")
    return "Computador venceu"
  else if (jogar == "Tesoura" && jogoComputador=="Papel")
    return "Você venceu"
  else
    return "Computador Venceu"
    
}

console.log(jokenpo("Cavalo"))
