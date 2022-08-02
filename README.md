## :page_with_curl: Projeto

<LINKEDIN>
Você sabe qual é um dos erros mais comuns e que VOCÊ pode estar cometendo utilizando React?
</LINKEDIN>

<LINKEDIN>
Esse erro não é cometido por apenas junior, mas sim por pessoas de qualquer nível, porque ele tem várias formas de ser cometido! 
</LINKEDIN>

Esse erro tão comum é criar derived-states(estados derivados) que básicamente é você "criar estados demais"/estados que não iriam fazer falta se não estivessem lá.
Dentre os cliclos de renderização do React a atualização de uma informação dentro de um estado vai ocasionar uma nova renderização.

<LINKEDIN>
Mas como evitar isso?

A resposta sempre vai ser depende!

MAS
</LINKEDIN>

Umas das primeiras coisas que você pode fazer é analizar se realmente é necessário a criação de um estado.
No caso dessa aplicação eu simplemente criei uma variável comum e resolveu o problema.

Essa aplicação é bem simples e por isso é facíl de identificar o erro!
Mas algumas vezes isso pode estar de outras formas

<LINKEDIN>
Por exemplo: imagine que eu tenha algum tipo de seleção para o usuário e vou ter que armazenar a lista de possíveis opções que o usuário tem para selecionar e eu tenho um estado que vai salvar a seleção que o usuário escolheu, as vezes eu não preciso salvar a opção que o usuário selecionou, eu posso salver só o ID e criar uma variável que seja derivada desses estados anteriores que vai salvar qual foi a opção selecionada pelo usuário.

Mas dentro de derived-states a solução pode caminhar para propriedades: é muito comum por exemplo ter uma propriedade que é passada para um componente por exemplo uma list e se eu preciso filtrar essa list eu crio um estado que vai fazer a filtragem, Correto? Não, errado! Novamente não é preciso de um estado, podemos criar uma variável que busca do valor da propriedade list e faz a filtragem direto de dentro do React, evitando algumas renderizações desnecessárias.
</LINKEDIN>

## 🚀 Tecnologias/Bibliotecas utilizadas

<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript"> </a>
<a href="https://pt-br.reactjs.org/" target="_blank"> <img src="https://img.shields.io/badge/-ReactJS-61DAFB?style=flat-square&logo=React&logoColor=white" alt="React"> </a>

## 💻 Autor

Feito com 💜 by Rodrigo Rael

<a href="https://www.linkedin.com/in/rodrigo-rael-a7a4b51a9/" target="_blank"> <img src="https://img.shields.io/badge/-RodrigoRael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https" alt="Linkedin Rodrigo"> </a>
<a href="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" target="_blank"> <img src="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" alt="Gmail Rodrigo"> </a>