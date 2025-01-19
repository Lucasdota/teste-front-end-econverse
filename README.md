# Desafio Econverse

Este projeto foi criado como parte do desafio de desenvolvedor front-end da Econverse. Ele usa React, Typescript, Sass e ferramentas modernas como `react-scripts` e `jest` para teste.

## Requisitos

Antes de começar, verifique se você tem os seguintes programas instalados:

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

Você pode verificar a versão instalada do Node.js e npm com os seguintes comandos:

```bash
node -v
npm -v
```

## Instalação

### Clone the Repository

```bash
git clone https://github.com/Lucasdota/teste-front-end-econverse.git
cd test-front-end-econverse
```

### Instale as dependências
Após clonar o repositório, instale as dependências do projeto com o comando:
```bash
npm install
```

### Scripts
Inicia o servidor de desenvolvimento local e abre o navegador com a aplicação:
```bash
npm start
```
O servidor estará disponível em http://localhost:3000

### Compilar a aplicação
Compila o projeto para produção, otimizando todos os arquivos. A versão compilada será salva na pasta build/.
```bash
npm run build
```

### Testar
Executa os testes do projeto. O Jest será usado para rodar os testes escritos no arquivo App.test.js e gerar relatórios de cobertura:
```bash
npm test
```

### Compilar o SCSS
Usa o sass para compilar os arquivos SCSS. Este comando ficará assistindo qualquer alteração no código SCSS e atualizará automaticamente os arquivos CSS:
```bash
npm run sass
```

### Estrutura do projeto
```bash
/teste-front-end-econverse
├── /public         	 # Arquivos estáticos, como o index.html, imagens e ícones
├── /src				 # Código fonte
	├── /components      # Componentes da aplicação
	├── /scss			 # Arquivos SASS/SCSS
	├── App.jsx          # Componente principal da aplicação
	├── App.test.js      # Arquivo de testes
	├── index.js         # Ponto de entrada do React
├── package.json         # Arquivo de configuração do projeto
├── README.md   		 # Este arquivo
```