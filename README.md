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
            -> Métodos HTTP
            -> Tipos de parâmetros
        -> Configuração Nodemon
        -> Utilização do Insomnia
        -> Diferenças entre banco de dados
        -> Configurando Banco de Dados
        -> Pensando nas Entidades e funcionalidades
        -> Construção do BackEnd
        -> Adicionando módulos CORS( segurança )
        -> Versionamento com Github.
        