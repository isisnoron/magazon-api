<h1 id="início">
  Wishlist Magazon Bookstore - API com Node.js
</h1>

Desafio final proposto pela 4ª Edição do LuizaCode, onde devemos desenvolver uma API Rest para gerenciamento de lista de desejos do e-commerce da livraria Bookstore. A documentação poderá ser acessada através do link [Magazon Bookstore API](colocar link aqui)


## Índice

* [1. Sobre o projeto](#1-sobre-o-projeto)
* [2. Guia de instalação](#2-guia-de-instalação)
* [3. Endpoints](#3-endpoints)
* [4. Tecnologias utilizadas](#4-tecnologias-utilizadas)
* [5. Implementações Futuras](#5-implementações-futuras)
* [6. Autoras do projeto](#6-autoras-do-projeto)

## 1. Sobre o projeto

A proposta deste projeto foi desenvolver uma API que permitisse a criação e atualização de clientes, produtos e listas de desejos. 
O projeto foi realizado em trio, e desde o primeiro contato com a proposta, o planejamento foi o ponto principal. Optamos por utilizar a ferramenta projects do github pra estruturar nosso board de planejamento, com o template de Kanban automatizado, proporcionando melhor organização. Você pode [conferi-lo aqui](https://github.com/isisnoron/magazon-api/projects/2).

Principais objetivos, cada um contendo uma série de solicitações técnicas e funcionalidades: 

   - Gerenciamento de clientes;
  
   - Gerenciamento de produtos;
  
   - Gerenciamento da lista de desejos;
  
  
 Nosso _boilerplate_ foi estruturado de acordo com as funcionalidades do projeto. 

## 2. Guia de Instalação
Você também pode testar e manipular nosso projeto localmente, basta seguir os seguintes passos: 
Assegure-se de ter instalado e conectado o [MongoDB](https://www.mongodb.com/try/download/community?tck=docs_server).

Após, para clonar o projeto, abra seu terminal, digite o seguinte comando abaixo e aperte enter:

      git clone https://github.com/isisnoron/magazon-api.git
  
Feito isso, ainda no terminal, entre na pasta clonada e digite o seguinte comando:

      npm install  
    
Crie o arquivo ".env" na raiz do projeto, cole o código abaixo e salve:

      MONGO_DB_URI=mongodb://localhost:27017/bookstore
        
      
Agora vamos rodar a aplicação! Digite no terminal:
        
      npm start
      

Prontinho! Já pode usar o projeto.
  
## 3.  Endpoints
Conforme foi estabelecido no desenvolvimento do desafio, a API possui os seguintes endpoints:

### 3.1 `/clients`

* `GET /clients`
* `GET /clients/id/:_id`
* `GET /clients/name/:name`
* `GET /clients/email/:email`
* `GET /clients/wishlist/id/:wishlist_id`
* `POST /clients`
* `PUT /clients/:_id`
* `DELETE /clients/:_id`

### 3.2 `/products`

* `GET /products`
* `GET /products/:code`
* `PATCH /products`
* `PUT /products/:_id`
* `DELETE /products/:_id`

### 3.3 `/wishlists`

* `GET /wishlist`
* `GET /wishlist/:_id`
* `GET /wishlist/client/id/:_id`
* `GET /wishlist/product/id/:_id`
* `POST /wishlist`
* `PUT /wishlist/:_id`
* `DELETE /wishlist/:_id`

## 4. Tecnologias utilizadas

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Postman](https://www.getpostman.com)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Mongoose-paginate](https://github.com/edwardhotchkiss/mongoose-paginate)
* [Swagger](https://swagger.io/docs/specification/about/)
* [Dotenv](https://github.com/motdotla/dotenv)

  
## 5. Implementações Futuras
      
Em futuras implementações, para a melhoria e desempenho do projeto, desejamos:

  - Acrescentar funcionalidade de login para o usuário, criptografando sua senha. Bem como criação e verificação do token, utilizando autenticação com JWT.
  - Melhoria na questão de validações e tratamentos de erros.
  - Também temos como foco a implementação de testes unitários e automatizados;
  - Gerar mensagens de log;
  - Front-end da aplicação para consumo da API em questão. 
  
  
## 6. Autoras do projeto

👩‍💻 Projeto desenvolvido por:

<div align="center">
  <table>
    <thead>
      <tr>
        <th align="center">Elisa Vieira</th>
        <th align="center">Isis Ribeiro</th>
        <th align="center">Lilian Leandro</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="center">
          <a href="#">
            <img src="https://avatars.githubusercontent.com/u/85826203?v=4" width="100px;" alt="Foto da Elisa Vieira"/><br>
          </a>
        </td>
        <td align="center">
          <a href="#">
            <img src="https://avatars.githubusercontent.com/u/83436399?v=4" width="100px;" alt="Foto Isis Ribeiro"/><br>
          </a>
        </td>
        <td align="center">
          <a href="#">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQFRjvZUh-HL6A/profile-displayphoto-shrink_400_400/0/1643900521476?e=1659571200&v=beta&t=IWWfdUSWIl2EO4sLCn3iG-fsibkFyr2xouQ8kcxAH8U" width="100px;" alt="Foto Lilian Leandro"/><br>
          </a>
        </td>
      </tr>
      <tr>
        <td align="center">
          <a href="https://github.com/elisadot">
            <img alt="GitHub - Elisa" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" style="max-width: 100%;">
          </a>
          <a href="https://www.linkedin.com/in/elisamvoliveira/">
            <img alt="LinkedIn - Elisa" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white">
          </a>
        </td>
        <td align="center">
          <a href="https://github.com/isisnoron/">
            <img alt="GitHub - Isis" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" style="max-width: 100%;">
          </a>
          <a href="https://www.linkedin.com/in/isisnoron/">
            <img alt="LinkedIn - Isis" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white">
          </a>
        </td>
        <td align="center">
          <a href="https://github.com/lilianleandro/">
            <img alt="GitHub - Lilian" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" style="max-width: 100%;">
          </a>
          <a href="https://www.linkedin.com/in/lilian-leandro/">
            <img alt="LinkedIn - Lilian" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white">
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>


<p align="right">
  <a href="#início">
  ⬆ Voltar ao início
 </a>
</p>
