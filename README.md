# BEtheHERO - Aplicação Omnistack 11.0
Lucas Fazzi
## 💻 Projeto

BE the HERO - Criação de app que vai conectar pessoas que tem vontade de ajudar a ONGs, o intuito é conectar pessoa que queiram ajudar monetariamente com as ONGs cadastradas no nosso sistema.


#### Configurando Ambiente: Instalação de gerenciador de pacotes para instalarmos o NODEjs
        -> Windows:
            -> (https://chocolatey.org/install#individual)
            
            -> Abri o PowerShell em modo adminstrativo
            
            -> Executar o comando "Get-ExecutionPolicy"
            
            -> Caso a saída desse comando volte "Restricted", é necessário executar "Set-ExecutionPolicy AllSigned" e digitar "Y", caso memo assim continue como "Restricted" executar o comando "Set-ExecutionPolicy Bypass -Scope Process"
            
            -> Em seguida executar o comando de instalção do Chocolatey, copie e cole o codigo abaixo.
            
            -> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
            
            -> Se não acontecer nenhum erro, se vocÊ digitar "choco" ou "choco - ?" para ver se está instalado seu gerenciador de pacotes.

        -> Instalando o NODEjs
            -> Digitar no powerShell "cinst nodejs-lts" ou "choco install nodejs-lts"
            -> Caso apareça algo para aceitar, digite "Y".
            -> Encerrar o terminal atua e iniciar outro.
            -> Executar "node -v" para ver a versãoq eu está instalada na sua máquina.
            -> Exevutar "npm -v" é um gerenciador de pacotes específico para o node, vamos utilizar ele para fazer a instalação de pacotes node na nossa aplicação, geralmente empresas fornecem pacotes (sdk) para serem integradas em nossa aplicação.

        -> Instalção de Visual Studio Code
            -> (https://code.visualstudio.com/download)
            -> Instalações de pacotes essencias para o Visual Studio Code, vãi ser comentados no código.

#### BACKEND 
        -> Node.js & Express
            -> Rotas e recursos
                - Rotas: i.e localhost.com:3333/users
                - Recurso: /users
            -> Métodos HTTP
                - GET:    Buscar informação no backend (default browser)
                - POST:   Criar uma informação no backend
                - PUT:    Alterar uma informação no backend
                - DELETE: Deletar uma informação no backend
        -> Utilização do Insomnia
            - Criação de requisições que funcionam como se fossem acessos no browser usando GET, POST, PUT, DELETE
            - Enquanto desenvolvemos o bacnk utilizamos o insomnia para os teste das rotas e recursos, nomes de usuários, senhas... 
        -> Tipos de parâmetros
            - Query Params: Parâmetros nomeados enviados na rota após o símboo de (?) e geralmente eles serevem para filtros, paginação.

            - Route Params: Parâmetros utilizados para identificar recursos.

            - Request Body: Corpo da requisição, utilizado para criar e alterar recursos.

        -> Configuração Nodemon
            - Instação de pacote chamado nodemon
                - npm install nodemon -D
                - Opção -D (ao invés de slavar o nodemon como uma dependencia da aplicação ele salva o nodemon como uma dependencia de desenvolvimento, nao vai ser necessário ficar monitorando o codigo em produção.)
                - Sempre que for precisar do backend sempre executando, é usado o nodemon.
        -> Diferenças entre banco de dados
            -SQL: MySQL, Sqlite, PostgreSQL, Oracle, Microsoft SQL Server
            -NoSQL: MongoDB, CouchDB, etc..
            - Bancos NoSQL: muito livre e pouco estruturado
            - Banco MySQL: tudo muito estruturado.
            - Vamos utilizar o Sqlite na nossa aplicação.
            - Driver: SELECT * FROM USERS
            - Query Builder: table('users').select('*').where()
            - Query builder que vamos utilziar nesse projeto: KNEX
        - Instalando o KNEX:
            - npm install knex
            - npm install sqlite3
        -> Configurando Banco de Dados
             - Conexão com o Banco
            - npx knex init
            - Esse comando vai criar um arquivo novo na raiz do projeto chamado knex file
            - é nele que fica as configuração de acesso ao bacno de dados para cada um dos ambientes da nossa aplicação.
            - O ambiente de desenvolvimento para desenvolver o projeto
            - O ambiente de produção apra quando jogar online a aplicação
            - O ambiente de stagging para testes antes de ir pra produção.
        -> Pensando nas Entidades e funcionalidades
            - Entidades:
                - ONG
                - Caso (incident)
            
            - Funxionalidades:
                - Login de ONG
                - Logout de ONG
                - Cadastro de ONG
                - Cadastrar novos casos(incidents)
                - Deletar casos(incidents)
                - Listar os casos(incidents) específicos de uma ONG
                - Listar todos os caso
                - Entrar em contato com a ONG
        -> Criando a base de dados (migrations)
            - Criação de pasta migrations no diretório database
            - Inserção de migrations no knexfile
            - http://knexjs.org/#Installation-migrations
            - npx knex migrate:make create-ongs
            - O arquivo de migration é criado na pasta migrations.
            - Setar a opção useNullAsDefault no knexfile
            - Método up é responsável pela criação da tabela, o qeu vai acontecer assim qeu executae essa migration
            - Método down é para voltar atrás de uma criação da tabela casod e algo errado.
            - Executar a migration: npx knex migrate:latest
            - npx knex migrate:make crate_incidents
            - table.increments(); -> Ids incrementais 
            - Alterar propriedades da tabela incidents (primary key, foreign key)
            - npx knex migrate:latest
            - ( Caso precisar voltar atras de alguma alteração no banco podemos usar: npx knex migrate:rollback)
            - Listar todas migrations executadas ( npx knex migrate:status)

        -> Construção do BackEnd
        -> Adicionando módulos CORS( segurança )
        -> Versionamento com Github.
        