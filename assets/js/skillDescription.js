export function skillDescription(nameCard, text) {
   
    $(nameCard).hover(function() {
        $(this).toggleClass('skills-cards-hover');
        $(this).find('span').slideToggle('faster')
    })
    $(nameCard).mouseenter(() => {
        $('.skill-description').html(text).attr('style', 'text-align: start')
    })
    $(nameCard).mouseleave(() => {
        $('.skill-description').html('passe o cursor na imagem para ler').attr('style', 'text-align: center')
    })
  }

skillDescription (
    ".html",
    "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web."
)

skillDescription (
    ".css",
    "O CSS é uma linguagem de folhas de estilos que é utilizada para definir como os documentos escritos na linguagem de marcação devem ser apresentados em termos de formatação, de layout."
)

skillDescription (
    ".js",
    "JavaScript é uma linguagem de programação que permite a você criar conteúdo que se atualiza dinamicamente, controlar múltimídias, imagens animadas, e tudo o mais que há de intessante."
)

skillDescription (
    ".php",
    "O PHP é uma linguagem de script open source de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web e que pode ser embutida dentro do HTML."
)

skillDescription (
    ".bt",
    "Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples."
)

skillDescription (
    ".jq",
    "O JQUERY é um biblioteca leve e rápida para Javascript. Ele facilita a manipulação de eventos, animações, elementos HTML e utilização de Ajax."
)

skillDescription (
    ".sql",
    "MySQL é um Banco de Dados relacional com um modelo de cliente-servidor."
)

skillDescription (
    ".sass",
    "O SASS é uma linguagem de extensão do CSS, traduzindo ao pé da letra, folhas de estilo com uma sintaxe incrível."
)

skillDescription (
    ".node",
    "Node.js é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de forma autônoma, sem depender de um navegador."
)

skillDescription (
    ".codeigniter",
    "O CodeIgniter é um framework de desenvolvimento de aplicações em PHP. "
)

skillDescription (
    ".react",
    "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (front-end) em páginas web."
)

skillDescription (
    ".mongo",
    "MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma"
)

