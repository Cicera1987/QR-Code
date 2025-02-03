# QR-Code

Este é uma aplicação web que permite gerar QR Codes de maneira simples e eficiente. Além de criar QR Codes personalizados a partir de texto, a aplicação também mantém um histórico dos QR Codes gerados, permitindo visualizar, excluir e até salvar os QR Codes em formato PDF.

## Funcionalidades

- **Gerar QR Codes**: Crie QR Codes a partir de qualquer texto (como e-mails, links, CPF, CNPJ, etc.).
- **Histórico de QR Codes**: Visualize todos os QR Codes gerados anteriormente, com a opção de excluir ou gerar um PDF de qualquer código.
- **Armazenamento Local**: Os QR Codes gerados e suas informações são armazenados no `localStorage`, para persistência entre as sessões.
- **Salvar como PDF**: Exporte qualquer QR Code gerado para um arquivo PDF.
- **Responsividade**: A aplicação é responsiva, adaptando-se a diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface de usuário.
- **Next.js**: Framework para desenvolvimento da aplicação.
- **TailwindCSS**: Utilizado para o estilo e layout responsivo.
- **jsPDF**: Para gerar o arquivo PDF contendo o QR Code.

## Como Usar

1. **Clone o repositório**:

```bash
git clone https://github.com/seu-usuario/qr-code.git
