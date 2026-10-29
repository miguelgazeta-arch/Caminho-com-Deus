/**
 * =============================================================================
 * CAMINHO COM DEUS — script.js
 * Rotina espiritual diária • Pure HTML/CSS/JS • localStorage persistence
 * =============================================================================
 */

'use strict';

// =============================================================================
// SECTION 1: DATA
// =============================================================================

// ---------------------------------------------------------------------------
// 1a. Daily Encouragement Messages (30+)
// ---------------------------------------------------------------------------
const mensagensDiarias = [
  'Deus nunca abandona quem confia nEle. Mesmo nos dias difíceis, Ele está presente.',
  'Pequenos passos todos os dias são mais importantes do que grandes passos de vez em quando.',
  'A oração não é um recurso de última hora. É uma conversa que pode acontecer a qualquer momento.',
  'Você não precisa ter todas as respostas. Basta confiar em quem as tem.',
  'Cada amanhecer é um novo convite de Deus para recomeçar com esperança.',
  'A gratidão abre portas que a preocupação fecha. Comece agradecendo.',
  'Sua fé não precisa ser perfeita. Deus trabalha mesmo com a fé do tamanho de um grão de mostarda.',
  'Nos momentos de silêncio, Deus fala mais alto. Reserve um tempo só para ouvir.',
  'Você é amado sem precisar fazer nada para merecer. O amor de Deus é gratuito.',
  'A paz que Deus oferece vai além de qualquer entendimento humano. Abra-se a ela.',
  'Cada dificuldade é uma oportunidade de ver Deus agir de maneiras que você nunca imaginou.',
  'Confiar não é passividade. É caminhar com a certeza de que Deus guia cada passo.',
  'O cansaço de hoje não é o fim da sua jornada. Descanse em Deus e continue amanhã.',
  'Você foi criado com um propósito. Pergunte a Deus qual é o dele para você hoje.',
  'A misericórdia de Deus é nova a cada manhã. Aproveite cada início de dia.',
  'Quando as palavras faltam, o coração ainda pode se comunicar com Deus.',
  'Cuide da sua alma com o mesmo cuidado que cuida do seu corpo.',
  'O perdão liberta primeiro quem perdoa. Deus já perdoou — você também pode.',
  'Você não está sozinho. Nunca esteve e nunca estará.',
  'A Bíblia não é apenas um livro antigo. É uma carta de amor endereçada a você.',
  'Em vez de perguntar "por quê", tente perguntar "para quê". Isso muda tudo.',
  'Seja gentil consigo mesmo. Deus é paciente com você — aprenda a ser também.',
  'A humildade não é fraqueza. É a base sobre a qual Deus constrói coisas grandes.',
  'Quando tudo parecer escuro, lembre-se: as estrelas só aparecem na noite.',
  'Cada oração é uma semente plantada no coração de Deus. Nenhuma é desperdiçada.',
  'A alegria cristã não depende das circunstâncias. Ela brota de dentro para fora.',
  'Deus conhece seu nome, sua história e cada detalhe da sua vida. Isso é amor.',
  'Servir ao próximo é uma das formas mais concretas de amar a Deus.',
  'Não compare sua jornada com a dos outros. Deus tem um plano único para você.',
  'Mesmo quando você não sente a presença de Deus, Ele está ali. A fé supera o sentimento.',
  'A perseverança na oração é um ato de confiança profunda. Continue orando.',
  'Deus não mede sua fé pela ausência de dúvidas, mas pela coragem de continuar mesmo com elas.',
  'Um coração agradecido é um coração preparado para receber mais bênçãos.',
  'Hoje pode ser o dia em que uma oração de anos atrás é finalmente respondida.',
  'Você foi feito à imagem e semelhança de Deus. Isso define seu valor, não os erros do passado.'
];

// ---------------------------------------------------------------------------
// 1b. Verses Database (35+ objects)
// ---------------------------------------------------------------------------
const versiculos = [
  {
    id: 1,
    texto: 'O Senhor é o meu pastor e nada me faltará.',
    referencia: 'Salmos 23,1',
    tema: 'Esperança',
    explicacao: 'Davi compara Deus a um pastor dedicado que cuida de cada ovelha. Assim como o pastor bom provê, protege e guia, Deus faz o mesmo por nós.',
    reflexao: 'Em que área da sua vida você está encontrando dificuldade de confiar que Deus provê o suficiente?'
  },
  {
    id: 2,
    texto: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nEle crê não pereça, mas tenha a vida eterna.',
    referencia: 'João 3,16',
    tema: 'Fé',
    explicacao: 'Este versículo resume toda a mensagem do Evangelho: o amor de Deus é tão grande que Ele entregou o que tinha de mais precioso — o próprio Filho.',
    reflexao: 'Como você responderia a um amor tão grande e gratuito no seu dia a dia?'
  },
  {
    id: 3,
    texto: 'Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus.',
    referencia: 'Romanos 8,28',
    tema: 'Esperança',
    explicacao: 'Mesmo situações difíceis e dolorosas podem ser usadas por Deus para produzir algo bom em nossa vida. Isso não nega a dor, mas aponta para um propósito maior.',
    reflexao: 'Há alguma situação difícil em sua vida que você consegue ver, agora ou retrospectivamente, como algo que Deus usou para o bem?'
  },
  {
    id: 4,
    texto: 'Posso fazer tudo naquele que me fortalece.',
    referencia: 'Filipenses 4,13',
    tema: 'Coragem',
    explicacao: 'Paulo não afirma poder fazer qualquer coisa por força própria, mas declara que com Cristo que o fortalece é capaz de enfrentar qualquer situação — inclusive a adversidade.',
    reflexao: 'Qual desafio você está enfrentando hoje onde precisa pedir a força de Deus em vez de depender apenas da sua?'
  },
  {
    id: 5,
    texto: 'Buscai primeiro o Reino de Deus e a sua justiça, e todas as demais coisas serão acrescentadas.',
    referencia: 'Mateus 6,33',
    tema: 'Fé',
    explicacao: 'Jesus convida a colocar Deus em primeiro lugar, e a partir daí tudo o mais se ordena. Não significa ignorar as necessidades, mas mudar as prioridades.',
    reflexao: 'O que concretamente você colocaria em segundo lugar na sua vida para dar a Deus o primeiro lugar hoje?'
  },
  {
    id: 6,
    texto: 'Confia no Senhor de todo o teu coração e não te apoies no teu próprio entendimento.',
    referencia: 'Provérbios 3,5-6',
    tema: 'Sabedoria',
    explicacao: 'A sabedoria bíblica não é ausência de inteligência, mas reconhecer os limites do nosso entendimento e abrir espaço para a perspectiva de Deus.',
    reflexao: 'Em que decisão atual você está confiando demais em sua própria análise e poderia abrir mais espaço para a orientação de Deus?'
  },
  {
    id: 7,
    texto: 'Os que esperam no Senhor renovam as suas forças.',
    referencia: 'Isaías 40,31',
    tema: 'Perseverança',
    explicacao: 'A imagem é de uma águia que sobe com as correntes de vento sem esforço próprio. Esperar em Deus não é passividade, mas apoiar-se nEle como sustento.',
    reflexao: 'Como seria "esperar no Senhor" de forma prática nesta semana, em vez de correr por conta própria?'
  },
  {
    id: 8,
    texto: 'Deus é o nosso refúgio e força, socorro bem presente nas tribulações.',
    referencia: 'Salmos 46,2',
    tema: 'Coragem',
    explicacao: 'O salmista declara que mesmo em meio ao caos — terras que tremem, montes que caem — Deus permanece como refúgio seguro e socorro imediato.',
    reflexao: 'Em que situação de sua vida você mais precisa se lembrar que Deus é seu refúgio agora mesmo?'
  },
  {
    id: 9,
    texto: 'Bem-aventurados os pacificadores, pois serão chamados filhos de Deus.',
    referencia: 'Mateus 5,9',
    tema: 'Amor',
    explicacao: 'Ser pacificador é mais do que evitar conflitos — é trabalhar ativamente pela paz, pela reconciliação e pela harmonia no relacionamento com os outros.',
    reflexao: 'Há algum relacionamento em sua vida que precisa de um gesto de paz da sua parte?'
  },
  {
    id: 10,
    texto: 'O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.',
    referencia: '1 Coríntios 13,4',
    tema: 'Amor',
    explicacao: 'Paulo descreve o amor cristão não como um sentimento romântico, mas como uma escolha concreta de ação: paciência, bondade, humildade.',
    reflexao: 'Qual das características do amor descrito por Paulo você mais precisa cultivar hoje?'
  },
  {
    id: 11,
    texto: 'Toda boa dádiva e todo dom perfeito vem do alto.',
    referencia: 'Tiago 1,17',
    tema: 'Gratidão',
    explicacao: 'Tiago lembra que tudo de bom na nossa vida tem origem em Deus, o Pai das luzes. Reconhecer isso é o fundamento de uma vida de gratidão.',
    reflexao: 'Que bênção recente você poderia reconhecer como vinda de Deus e agradecer agora?'
  },
  {
    id: 12,
    texto: 'Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele.',
    referencia: 'Salmos 118,24',
    tema: 'Gratidão',
    explicacao: 'Cada dia é um presente de Deus. O salmista convida a encarar cada manhã com alegria e gratidão, independentemente das circunstâncias.',
    reflexao: 'Como seria começar este dia com alegria deliberada, reconhecendo-o como um presente de Deus?'
  },
  {
    id: 13,
    texto: 'Lançai sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.',
    referencia: '1 Pedro 5,7',
    tema: 'Esperança',
    explicacao: 'Pedro usa a imagem de jogar um peso — nossa ansiedade — para que Deus carregue. O motivo é claro: Ele se importa com você de forma pessoal e profunda.',
    reflexao: 'O que você está carregando que precisaria entregar a Deus neste momento?'
  },
  {
    id: 14,
    texto: 'A fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.',
    referencia: 'Hebreus 11,1',
    tema: 'Fé',
    explicacao: 'A fé não é ingenuidade — é uma convicção firme fundamentada no caráter fiel de Deus, mesmo quando os olhos não enxergam a resposta ainda.',
    reflexao: 'Em que área da vida você está sendo chamado a confiar no que não vê ainda?'
  },
  {
    id: 15,
    texto: 'Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos darei descanso.',
    referencia: 'Mateus 11,28',
    tema: 'Esperança',
    explicacao: 'Jesus convida especialmente os que carregam pesadas cargas — não para que se esforcem mais, mas para que venham a Ele e encontrem descanso real.',
    reflexao: 'Que peso você está carregando que Jesus está te convidando a deixar com Ele?'
  },
  {
    id: 16,
    texto: 'Não te deixes vencer pelo mal, mas vence o mal com o bem.',
    referencia: 'Romanos 12,21',
    tema: 'Perseverança',
    explicacao: 'Paulo reverte a lógica humana: em vez de combater o mal com mais mal, a resposta cristã é a bondade ativa que transforma situações e corações.',
    reflexao: 'Há alguma situação injusta na sua vida onde você poderia responder com bondade em vez de revide?'
  },
  {
    id: 17,
    texto: 'Acima de tudo, guarda o teu coração, porque dele procedem as fontes da vida.',
    referencia: 'Provérbios 4,23',
    tema: 'Sabedoria',
    explicacao: 'O coração, na visão bíblica, é o centro das decisões, desejos e caráter. Cuidá-lo significa proteger o que entra pela mente, olhos e relacionamentos.',
    reflexao: 'O que você está deixando entrar no seu coração e que poderia estar drenando sua vitalidade espiritual?'
  },
  {
    id: 18,
    texto: 'Não julgueis e não sereis julgados; não condeneis e não sereis condenados; perdoai e sereis perdoados.',
    referencia: 'Lucas 6,37',
    tema: 'Perdão',
    explicacao: 'Jesus apresenta uma lei espiritual: o que oferecemos aos outros tende a voltar para nós. Misericórdia gera misericórdia; condenação gera condenação.',
    reflexao: 'Há alguém que você tem julgado ou condenado em seu coração e que você poderia começar a liberar hoje?'
  },
  {
    id: 19,
    texto: 'Sede uns para com os outros amáveis, tenros de coração, perdoando-vos mutuamente.',
    referencia: 'Efésios 4,32',
    tema: 'Perdão',
    explicacao: 'Paulo liga amabilidade, ternura e perdão como atitudes que fluem naturalmente de quem foi perdoado por Deus. O perdão recebido motiva o perdão oferecido.',
    reflexao: 'Como a consciência de ter sido perdoado por Deus muda sua disposição para perdoar alguém que te magoou?'
  },
  {
    id: 20,
    texto: 'Sede firmes e corajosos! Não tenhais medo nem vos aterrorizeis, porque o Senhor, vosso Deus, estará convosco.',
    referencia: 'Josué 1,9',
    tema: 'Coragem',
    explicacao: 'Deus disse isso a Josué diante de uma missão humanamente impossível. A coragem não vem da ausência de medo, mas da certeza da presença de Deus.',
    reflexao: 'Que tarefa ou missão na sua vida você tem evitado por medo, e que poderia enfrentar com a certeza da presença de Deus?'
  },
  {
    id: 21,
    texto: 'Não temas, porque eu estou contigo; não te assombres, porque eu sou o teu Deus.',
    referencia: 'Isaías 41,10',
    tema: 'Coragem',
    explicacao: 'Deus fala pessoalmente com Israel em exílio — e fala com você hoje. "Eu estou contigo" é uma das promessas mais reconfortantes de toda a Escritura.',
    reflexao: 'O que muda em sua situação atual quando você se lembra concretamente que Deus está ao seu lado agora?'
  },
  {
    id: 22,
    texto: 'Delicia-te no Senhor, e ele te concederá as petições do teu coração.',
    referencia: 'Salmos 37,4',
    tema: 'Fé',
    explicacao: 'Quando nossa alegria mais profunda está em Deus, nossos desejos vão sendo transformados para se alinhar com os Seus. As petições do coração passam a ser também as Suas.',
    reflexao: 'O que significaria, de forma concreta, se deleitar em Deus hoje — não em suas bênçãos, mas nEle mesmo?'
  },
  {
    id: 23,
    texto: 'Bem-aventurados os que têm fome e sede de justiça, porque eles serão satisfeitos.',
    referencia: 'Mateus 5,6',
    tema: 'Perseverança',
    explicacao: 'Jesus usa imagens intensas — fome e sede — para descrever o desejo por justiça. Quem anseia por fazer o bem e agir com retidão encontrará satisfação em Deus.',
    reflexao: 'Qual injustiça ao seu redor você poderia dar um passo concreto para combater ou aliviar?'
  },
  {
    id: 24,
    texto: 'Gloriamo-nos também nas tribulações, sabendo que a tribulação produz perseverança.',
    referencia: 'Romanos 5,3-4',
    tema: 'Perseverança',
    explicacao: 'Paulo não glorifica o sofrimento em si, mas o processo de crescimento que ele pode produzir: tribulação → perseverança → caráter → esperança.',
    reflexao: 'Que tribulação atual você poderia enxergar como uma escola de perseverança, em vez de apenas uma fonte de dor?'
  },
  {
    id: 25,
    texto: 'Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.',
    referencia: 'Salmos 119,105',
    tema: 'Sabedoria',
    explicacao: 'Na antiguidade, as lâmpadas iluminavam apenas alguns passos à frente. A Palavra de Deus não nos dá o roteiro completo, mas luz suficiente para o próximo passo.',
    reflexao: 'Você tem dedicado tempo regular à leitura da Bíblia como fonte de orientação para suas decisões?'
  },
  {
    id: 26,
    texto: 'Em todo tempo ama o amigo, e na adversidade é como um irmão.',
    referencia: 'Provérbios 17,17',
    tema: 'Amor',
    explicacao: 'O amor autêntico se prova na adversidade. Um amigo verdadeiro não some nos momentos difíceis — ele se torna ainda mais próximo.',
    reflexao: 'Quem em sua vida precisa de um irmão ou irmã que apareça nos momentos difíceis — e você poderia ser essa pessoa?'
  },
  {
    id: 27,
    texto: 'Nós o amamos porque ele nos amou primeiro.',
    referencia: '1 João 4,19',
    tema: 'Amor',
    explicacao: 'Nossa capacidade de amar tem origem no amor que Deus primeiro nos dedicou. Não amamos para merecer Seu amor — amamos porque já fomos amados.',
    reflexao: 'Como a consciência de ser amado por Deus antes de qualquer mérito seu transforma a forma como você ama os outros?'
  },
  {
    id: 28,
    texto: 'Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.',
    referencia: '1 Tessalonicenses 5,18',
    tema: 'Gratidão',
    explicacao: 'Dar graças "em tudo" não é fingir que tudo está bem, mas encontrar razão para gratidão mesmo nas situações difíceis — porque Deus ainda está no controle.',
    reflexao: 'Consegue nomear três coisas pelas quais você pode agradecer hoje, mesmo que esteja passando por um momento difícil?'
  },
  {
    id: 29,
    texto: 'Espera no Senhor; tem coragem e ele fortalecerá o teu coração; sim, espera no Senhor.',
    referencia: 'Salmos 27,14',
    tema: 'Coragem',
    explicacao: 'A repetição da exortação "espera no Senhor" no início e no fim mostra a intensidade da mensagem. Esperar não é cruzar os braços — é persistir com coragem.',
    reflexao: 'Em que área você está impaciente com o tempo de Deus, e o que seria esperar nEle com coragem hoje?'
  },
  {
    id: 30,
    texto: 'Para os homens é impossível, mas não para Deus; porque para Deus tudo é possível.',
    referencia: 'Marcos 10,27',
    tema: 'Fé',
    explicacao: 'Jesus diz isso em resposta a uma pergunta sobre salvação — o que é impossível para o esforço humano é realizável pelo poder de Deus.',
    reflexao: 'Que situação "impossível" da sua vida você precisa confiar para o Deus para quem tudo é possível?'
  },
  {
    id: 31,
    texto: 'Porque Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio.',
    referencia: '2 Timóteo 1,7',
    tema: 'Coragem',
    explicacao: 'Paulo anima Timóteo lembrando-o do que o Espírito de Deus produz: poder para agir, amor para relacionar-se e equilíbrio (domínio próprio) para discernir.',
    reflexao: 'Em que situação você tem agido por covardia quando Deus te oferece poder, amor e equilíbrio?'
  },
  {
    id: 32,
    texto: 'Praticar a justiça, amar a misericórdia e andar humildemente com o teu Deus.',
    referencia: 'Miquéias 6,8',
    tema: 'Sabedoria',
    explicacao: 'O profeta Miquéias resume o que Deus pede em três verbos concretos: praticar justiça, amar misericórdia e andar com humildade. Uma síntese brilhante da vida boa.',
    reflexao: 'Qual dos três elementos — justiça, misericórdia ou humildade — você sente que mais precisa cultivar agora?'
  },
  {
    id: 33,
    texto: 'Não andeis ansiosos por coisa alguma; antes em tudo, pela oração e súplica, com ação de graças, apresentai os vossos pedidos a Deus.',
    referencia: 'Filipenses 4,6-7',
    tema: 'Esperança',
    explicacao: 'Paulo não nega as preocupações — ele apresenta um caminho alternativo: transformar a ansiedade em oração, misturada com gratidão. O resultado é a paz de Deus.',
    reflexao: 'O que você tem carregado como ansiedade que poderia transformar em pedido de oração com gratidão agora?'
  },
  {
    id: 34,
    texto: 'Provai e vede que o Senhor é bom; bem-aventurado o homem que nele confia.',
    referencia: 'Salmos 34,8',
    tema: 'Fé',
    explicacao: 'O salmista convida a uma experiência pessoal — não apenas aceitar que Deus é bom como conceito, mas provar, testar, experimentar Sua bondade na vida real.',
    reflexao: 'Você consegue lembrar de uma experiência concreta em que você "provou e viu" que Deus é bom?'
  },
  {
    id: 35,
    texto: 'Eu sou a luz do mundo; quem me segue não andará em trevas, mas terá a luz da vida.',
    referencia: 'João 8,12',
    tema: 'Fé',
    explicacao: 'Jesus declara ser a fonte de orientação e sentido para toda a humanidade. Segui-Lo não é apenas crença intelectual, mas caminhar — uma ação contínua e ativa.',
    reflexao: 'Em que área da sua vida você precisa da luz de Jesus para enxergar com clareza o caminho à sua frente?'
  }
];

// ---------------------------------------------------------------------------
// 1c. Music Database (20+ objects)
// ---------------------------------------------------------------------------
const musicas = [
  {
    id: 1,
    titulo: 'Lugar Secreto',
    artista: 'Ministério Zoe',
    categoria: 'adoracao',
    descricao: 'Um convite a entrar na presença de Deus com o coração aberto, deixando de lado as distrações do mundo.',
    urlYoutube: 'https://www.youtube.com/watch?v=_6_eUoFy1EY',
    urlSpotify: ''
  },
  {
    id: 2,
    titulo: 'Oceanos (Onde Meus Pés Podem Falhar)',
    artista: 'Hillsong em Português',
    categoria: 'contemporanea',
    descricao: 'Poderosa declaração de fé que convida a caminhar sobre as águas, confiando na chamada de Cristo.',
    urlYoutube: 'https://www.youtube.com/watch?v=dy9nwe9NOcQ',
    urlSpotify: ''
  },
  {
    id: 3,
    titulo: 'Reckless Love (Amor Insensato)',
    artista: 'Todofiel',
    categoria: 'adoracao',
    descricao: 'Celebração do amor irracional e incondicional de Deus que vai atrás da ovelha perdida até encontrá-la.',
    urlYoutube: 'https://www.youtube.com/watch?v=Sc6SSHuZvQE',
    urlSpotify: ''
  },
  {
    id: 4,
    titulo: 'Jesus Filho de Deus',
    artista: 'Hillsong',
    categoria: 'adoracao',
    descricao: 'Adoração centrada na identidade de Jesus Cristo como Filho de Deus e Salvador do mundo.',
    urlYoutube: 'https://www.youtube.com/watch?v=4UVxlNPlFW8',
    urlSpotify: ''
  },
  {
    id: 5,
    titulo: 'Tua Graça Me Basta',
    artista: 'Ministério Zoe',
    categoria: 'agradecimento',
    descricao: 'Declaração de contentamento e gratidão pela graça de Deus que sustenta em todos os momentos.',
    urlYoutube: 'https://www.youtube.com/watch?v=RFjAt5MTy5s',
    urlSpotify: ''
  },
  {
    id: 6,
    titulo: 'Nada Além do Sangue',
    artista: 'Oficina G3',
    categoria: 'hinos',
    descricao: 'Clássico hino cristão que exalta o sacrifício de Cristo como único fundamento da salvação.',
    urlYoutube: 'https://www.youtube.com/watch?v=J6L3CbqhBM4',
    urlSpotify: ''
  },
  {
    id: 7,
    titulo: 'Fiel é o Senhor',
    artista: 'Aline Barros',
    categoria: 'esperanca',
    descricao: 'Testemunho de esperança fundada na fidelidade de Deus em todos os momentos da vida.',
    urlYoutube: 'https://www.youtube.com/watch?v=CJiCTJ_9n3E',
    urlSpotify: ''
  },
  {
    id: 8,
    titulo: 'Hallelujah',
    artista: 'Fernanda Brum',
    categoria: 'adoracao',
    descricao: 'Louvor jubiloso que exalta a grandeza e a glória de Deus com toda a força do coração.',
    urlYoutube: 'https://www.youtube.com/watch?v=t1t1H6B5GfE',
    urlSpotify: ''
  },
  {
    id: 9,
    titulo: 'Creio',
    artista: 'Ministério Zoe',
    categoria: 'contemporanea',
    descricao: 'Declaração de fé contemporânea que afirma as verdades fundamentais do credo cristão com adoração.',
    urlYoutube: 'https://www.youtube.com/watch?v=Y6oNOT6rFhQ',
    urlSpotify: ''
  },
  {
    id: 10,
    titulo: 'Amor Maior',
    artista: 'Coral da CNBB / Católico',
    categoria: 'catolica',
    descricao: 'Belo cântico que celebra o amor de Deus como o maior de todos os amores, fonte de toda vida.',
    urlYoutube: 'https://www.youtube.com/watch?v=Lj9r2TGSXMA',
    urlSpotify: ''
  },
  {
    id: 11,
    titulo: 'Soberano',
    artista: 'Ministério Zoe',
    categoria: 'adoracao',
    descricao: 'Adoração que proclama a soberania de Deus sobre todas as coisas, exaltando Seu nome e reinado.',
    urlYoutube: 'https://www.youtube.com/watch?v=2HU7ms8n5Js',
    urlSpotify: ''
  },
  {
    id: 12,
    titulo: 'Todo Poderoso',
    artista: 'Ministério Zoe',
    categoria: 'adoracao',
    descricao: 'Louvor vibrante ao Deus Todo-Poderoso, cujo poder não tem limites e cujo amor é eterno.',
    urlYoutube: 'https://www.youtube.com/watch?v=VCLBObmFMkU',
    urlSpotify: ''
  },
  {
    id: 13,
    titulo: 'Deserto',
    artista: 'Ministério Zoe',
    categoria: 'oracao',
    descricao: 'Canção íntima sobre os momentos de seca e silêncio espiritual, encontrando Deus mesmo no deserto.',
    urlYoutube: 'https://www.youtube.com/watch?v=sxZZ8Hh3_Lc',
    urlSpotify: ''
  },
  {
    id: 14,
    titulo: 'A Ele a Glória',
    artista: 'Coral Shalom',
    categoria: 'agradecimento',
    descricao: 'Cântico de gratidão e glorificação ao Senhor, exaltando Sua bondade e fidelidade eterna.',
    urlYoutube: 'https://www.youtube.com/watch?v=UDdJf3BFKZE',
    urlSpotify: ''
  },
  {
    id: 15,
    titulo: 'Grande é o Senhor',
    artista: 'Coral Shalom',
    categoria: 'hinos',
    descricao: 'Tradicional hino que celebra a grandeza de Deus manifestada na criação e na história da salvação.',
    urlYoutube: 'https://www.youtube.com/watch?v=GE8O0JxUbIY',
    urlSpotify: ''
  },
  {
    id: 16,
    titulo: 'Ave Maria de Schubert',
    artista: 'Orquestra Clássica',
    categoria: 'catolica',
    descricao: 'A famosa oração musicada por Franz Schubert — peça atemporal de beleza e devoção mariana.',
    urlYoutube: 'https://www.youtube.com/watch?v=7XE3WGRXIIY',
    urlSpotify: ''
  },
  {
    id: 17,
    titulo: 'Panis Angelicus',
    artista: 'Clássico Sacro',
    categoria: 'catolica',
    descricao: 'Composição sacra clássica sobre o pão dos anjos — a Eucaristia — com melodia sublime e transcendente.',
    urlYoutube: 'https://www.youtube.com/watch?v=3-GrTFUFD7k',
    urlSpotify: ''
  },
  {
    id: 18,
    titulo: 'How Great Thou Art (Quanto é Grande o Meu Deus)',
    artista: 'Clássico Cristão',
    categoria: 'hinos',
    descricao: 'Um dos hinos mais amados do mundo cristão, exaltando a grandeza de Deus na criação e na redenção.',
    urlYoutube: 'https://www.youtube.com/watch?v=_QEHeLqMBIs',
    urlSpotify: ''
  },
  {
    id: 19,
    titulo: 'Graças a Deus',
    artista: 'Padre Zezinho',
    categoria: 'catolica',
    descricao: 'Cântico animado e popular do Padre Zezinho que convida à gratidão pelas bênçãos cotidianas.',
    urlYoutube: 'https://www.youtube.com/watch?v=BuHPvpwR7wg',
    urlSpotify: ''
  },
  {
    id: 20,
    titulo: 'Hosana',
    artista: 'Padre Marcelo Rossi',
    categoria: 'catolica',
    descricao: 'Aclamação festiva ao Senhor que entra, cantada com alegria e fervor na tradição da música católica carismática.',
    urlYoutube: 'https://www.youtube.com/watch?v=wVSt8S3Kxsc',
    urlSpotify: ''
  }
];

// ---------------------------------------------------------------------------
// 1d. Gospel / Liturgy Data (hardcoded, Oct 29 – Nov 4, 2026)
// All texts are clearly marked as "Trecho selecionado" (selected excerpts).
// For complete texts visit: https://www.cnbb.org.br/liturgia-diaria/
// ---------------------------------------------------------------------------
const gospelData = {
  '2026-10-29': {
    data: '2026-10-29',
    titulo: 'Quinta-feira da 30.ª Semana do Tempo Comum',
    primeiraLeitura: {
      referencia: 'Ef 6,10-20',
      texto: '[Trecho selecionado] "Revesti-vos de toda a armadura de Deus, para que possais resistir às ciladas do diabo... Tomai, pois, a armadura de Deus, para que possais resistir no dia mau e, depois de haverdes superado tudo, ficardes firmes." (Ef 6,11.13)'
    },
    salmo: {
      referencia: 'Sal 144(143),1-2.9-10',
      texto: '[Trecho selecionado] "Bendito seja o Senhor, minha rocha, que treina as minhas mãos para o combate... Ó Deus, cantarei para vós um cântico novo." (Sal 144,1.9)'
    },
    evangelho: {
      referencia: 'Lc 13,31-35',
      texto: '[Trecho selecionado] "Naquela hora, alguns fariseus se aproximaram dizendo a Jesus: \'Sai e vai-te daqui, porque Herodes quer matar-te.\' Jesus respondeu: \'Ide dizer a essa raposa: Eis que expulso demônios e realizo curas hoje e amanhã, e no terceiro dia terminarei minha obra.\'" (Lc 13,31-32)'
    },
    contexto: 'Jesus continua sua caminhada decidida em direção a Jerusalém, apesar das ameaças de Herodes. Sua coragem diante do perigo é um testemunho de fidelidade à missão recebida do Pai.',
    reflexao: 'Jesus não recuou diante das ameaças porque sabia da missão que lhe tinha sido confiada. Nós também somos chamados a perseverar em nossa vocação, mesmo quando encontramos obstáculos.',
    pergunta: 'Há algo que Deus te chamou a fazer e que você tem adiado por medo ou pressão externa? Como a coragem de Jesus te inspira a continuar?',
    oracaoSugestao: 'Senhor Jesus, dai-me a coragem de permanecer fiel à minha missão mesmo diante das dificuldades. Que eu não recue diante do medo, mas avance confiando em Vós. Amém.'
  },

  '2026-10-30': {
    data: '2026-10-30',
    titulo: 'Sexta-feira da 30.ª Semana do Tempo Comum',
    primeiraLeitura: {
      referencia: 'Ef 6,10-18',
      texto: '[Trecho selecionado] "Sede fortes no Senhor e no poder de sua força. Revesti-vos de toda a armadura de Deus." (Ef 6,10-11)'
    },
    salmo: {
      referencia: 'Sal 1,1-4.6',
      texto: '[Trecho selecionado] "Feliz o homem que não segue o conselho dos ímpios... mas encontra alegria na lei do Senhor e medita nela dia e noite." (Sal 1,1-2)'
    },
    evangelho: {
      referencia: 'Lc 14,1-6',
      texto: '[Trecho selecionado] "Aconteceu que, num sábado, Jesus foi comer na casa de um chefe dos fariseus... E havia ali um homem com hidropisia. Jesus tomou a palavra e disse aos doutores da lei e aos fariseus: \'É lícito curar no sábado?\'" (Lc 14,1-3)'
    },
    contexto: 'Jesus cura um homem no sábado e questiona a rigidez das leis religiosas quando estas se sobrepõem à compaixão humana. A misericórdia deve sempre orientar a aplicação das normas.',
    reflexao: 'Jesus coloca a pessoa e sua necessidade acima da norma fria. Somos convidados a agir com misericórdia, discernindo quando o amor ao próximo pede uma resposta que vai além do protocolo.',
    pergunta: 'Em que situação da sua vida você poderia ser mais flexível e compassivo, em vez de se apegar rigidamente a regras ou tradições?',
    oracaoSugestao: 'Senhor, ensinai-me a ter o coração misericordioso como o Vosso, que coloca a pessoa antes da lei. Que eu veja em cada ser humano uma oportunidade de amar. Amém.'
  },

  '2026-10-31': {
    data: '2026-10-31',
    titulo: 'Sábado da 30.ª Semana do Tempo Comum — Véspera de Todos os Santos',
    primeiraLeitura: {
      referencia: 'Fl 1,18b-26',
      texto: '[Trecho selecionado] "Para mim viver é Cristo e morrer é ganho... Estou em aperto entre as duas coisas: tenho desejo de partir e estar com Cristo — o que é muito melhor — mas é mais necessário ficar na carne por causa de vós." (Fl 1,21.23-24)'
    },
    salmo: {
      referencia: 'Sal 42(41),2-3.5',
      texto: '[Trecho selecionado] "Como a corça suspira pelas correntes de água, assim minha alma suspira por vós, ó Deus! Minha alma tem sede de Deus, do Deus vivo." (Sal 42,2-3)'
    },
    evangelho: {
      referencia: 'Lc 14,1.7-11',
      texto: '[Trecho selecionado] "Todo aquele que se exalta será humilhado, e todo aquele que se humilha será exaltado." (Lc 14,11)'
    },
    contexto: 'Na véspera da Solenidade de Todos os Santos, a liturgia convida à reflexão sobre o que realmente importa: a busca de Deus com toda a alma, como a corça que anseia pela água. Os santos são modelo dessa sede de Deus.',
    reflexao: 'A humildade que Jesus ensina na parábola é o fundamento da santidade. Os santos não buscaram os primeiros lugares diante dos homens, mas a proximidade com Deus.',
    pergunta: 'Que tipo de "sede de Deus" você identifica no seu coração hoje? O que alimenta ou apaga essa sede em sua rotina?',
    oracaoSugestao: 'Senhor, que eu tenha a sede dos santos — aquela que só Vós podeis saciar. Humilhai meu coração para que eu seja exaltado por Vós no tempo certo. Amém.'
  },

  '2026-11-01': {
    data: '2026-11-01',
    titulo: 'Solenidade de Todos os Santos',
    primeiraLeitura: {
      referencia: 'Ap 7,2-4.9-14',
      texto: '[Trecho selecionado] "Vi uma grande multidão que ninguém podia contar, de todas as nações, tribos, povos e línguas, de pé diante do trono e diante do Cordeiro, vestidos de branco e com palmas nas mãos... Estes são os que vieram da grande tribulação; lavaram e branquearam as suas vestes no sangue do Cordeiro." (Ap 7,9.14)'
    },
    salmo: {
      referencia: 'Sal 24(23),1-6',
      texto: '[Trecho selecionado] "Do Senhor é a terra e tudo o que ela contém... Quem pode subir ao monte do Senhor? Quem pode estar no seu lugar santo? O homem de mãos inocentes e coração puro." (Sal 24,1.3-4)'
    },
    evangelho: {
      referencia: 'Mt 5,1-12a',
      texto: '[Trecho selecionado] "Felizes os pobres em espírito, porque deles é o Reino dos Céus. Felizes os que choram, porque serão consolados. Felizes os mansos, porque herdarão a terra. Felizes os que têm fome e sede de justiça, porque serão saciados..." (Mt 5,3-6)'
    },
    contexto: 'A Solenidade de Todos os Santos celebra aqueles que já estão com Deus na glória — os canonizados e os desconhecidos. As Bem-aventuranças traçam o caminho que todos trilharam: a lógica do Evangelho que inverte os valores mundanos.',
    reflexao: 'Os santos não eram super-heróis — eram pessoas comuns que fizeram escolhas extraordinárias. Cada Bem-aventurança é uma porta aberta para a santidade que Deus oferece a cada um de nós.',
    pergunta: 'Com qual das Bem-aventuranças você mais se identifica? Qual delas te desafia mais profundamente?',
    oracaoSugestao: 'Santos e santas de Deus, intercedei por nós! Senhor, dai-nos a graça de trilhar o caminho das Bem-aventuranças e um dia nos unirmos à vossa grande família na glória. Amém.'
  },

  '2026-11-02': {
    data: '2026-11-02',
    titulo: 'Comemoração de Todos os Fiéis Defuntos (Finados)',
    primeiraLeitura: {
      referencia: 'Jó 19,1.23-27a',
      texto: '[Trecho selecionado] "Eu sei que o meu Redentor vive, e que ao fim ele se levantará sobre o pó. Depois que minha pele for destruída, ainda assim na minha carne verei a Deus. Eu mesmo o verei, e não um estranho." (Jó 19,25-27)'
    },
    salmo: {
      referencia: 'Sal 27(26),1.4.7.8b.9a.13-14',
      texto: '[Trecho selecionado] "O Senhor é minha luz e minha salvação, a quem temerei?... Espero ver a bondade do Senhor na terra dos viventes. Espera no Senhor, tem coragem!" (Sal 27,1.13-14)'
    },
    evangelho: {
      referencia: 'Jo 6,37-40',
      texto: '[Trecho selecionado] "Porque esta é a vontade do meu Pai: que todo aquele que vê o Filho e crê nele tenha a vida eterna, e eu o ressuscitarei no último dia." (Jo 6,40)'
    },
    contexto: 'No Dia de Finados, a Igreja ora por todos os que partiram e acolhe a esperança cristã da ressurreição. A promessa de Jesus é clara: quem crê nEle não ficará para sempre na morte.',
    reflexao: 'A morte não tem a última palavra para quem crê. O Dia de Finados não é apenas de luto, mas de esperança: nossos irmãos estão nas mãos de Deus, que promete ressuscitá-los no último dia.',
    pergunta: 'Ao lembrar de alguém querido que já partiu, o que você sente? Como a esperança da ressurreição transforma esse luto?',
    oracaoSugestao: 'Senhor, recebei na Vossa misericórdia todos os nossos irmãos que partiram desta vida. Que eles descansem em paz, e que nós, um dia, nos reencontremos na Vossa glória. Amém.'
  },

  '2026-11-03': {
    data: '2026-11-03',
    titulo: 'Terça-feira da 31.ª Semana do Tempo Comum',
    primeiraLeitura: {
      referencia: 'Fl 2,5-11',
      texto: '[Trecho selecionado] "Tende em vós os mesmos sentimentos que houve em Cristo Jesus, o qual, sendo de condição divina, não considerou como uma usurpação ser igual a Deus, mas aniquilou-se a si mesmo, assumindo a condição de servo." (Fl 2,5-7)'
    },
    salmo: {
      referencia: 'Sal 22(21),26b-32',
      texto: '[Trecho selecionado] "Recordar-se-ão e se converterão ao Senhor todos os confins da terra, e adorá-lo-ão todas as famílias dos povos." (Sal 22,28)'
    },
    evangelho: {
      referencia: 'Lc 14,15-24',
      texto: '[Trecho selecionado] "Um homem deu um grande banquete e convidou muitos... Mas todos, um por um, começaram a apresentar desculpas... O senhor, irritado, disse ao servo: \'Sai depressa pelas praças e ruas da cidade, e traz para cá os pobres, os aleijados, os cegos e os coxos.\'" (Lc 14,16.18.21)'
    },
    contexto: 'A parábola do banquete revela como os que foram primeiros convidados recusaram, e os marginalizados foram chamados em seu lugar. É um aviso sobre o perigo de perder o chamado de Deus por causa das prioridades erradas.',
    reflexao: 'Quantas vezes deixamos de responder ao convite de Deus — para orar, servir, amar — porque estamos ocupados com coisas legítimas, mas que assumiram prioridade errada?',
    pergunta: 'O que — negócios, projetos, preocupações — você tem colocado à frente do convite de Deus para uma vida mais plena com Ele?',
    oracaoSugestao: 'Senhor do banquete, que eu nunca deixe de atender ao Vosso convite. Que as coisas boas da vida não ocupem o lugar que é Vosso. Ajudai-me a dizer "sim" com o coração inteiro. Amém.'
  },

  '2026-11-04': {
    data: '2026-11-04',
    titulo: 'Quarta-feira — São Carlos Borromeo (Memória) — 31.ª Semana do Tempo Comum',
    primeiraLeitura: {
      referencia: 'Fl 2,12-18',
      texto: '[Trecho selecionado] "Fazei tudo sem murmúrio nem hesitações, para que sejais irrepreensíveis e puros, filhos de Deus sem mancha no meio de uma geração depravada e perversa, na qual brilhais como astros no mundo." (Fl 2,14-15)'
    },
    salmo: {
      referencia: 'Sal 27(26),1.4.13-14',
      texto: '[Trecho selecionado] "O Senhor é minha luz e minha salvação: a quem temerei? O Senhor é a força da minha vida: de quem me recearei?" (Sal 27,1)'
    },
    evangelho: {
      referencia: 'Lc 14,25-33',
      texto: '[Trecho selecionado] "Se alguém vem a mim e não prefere a mim a seu pai e mãe, mulher e filhos, irmãos e irmãs e até a própria vida, não pode ser meu discípulo. Aquele que não carrega a sua cruz e vem após mim, não pode ser meu discípulo." (Lc 14,26-27)'
    },
    contexto: 'São Carlos Borromeo (1538-1584) viveu radicalmente as exigências do discipulado: abandonou riquezas, reformou a Igreja de Milão e serviu os doentes na peste. Sua vida é comentário vivo das palavras de Jesus neste evangelho.',
    reflexao: 'O discipulado de Jesus tem um custo — não de sofrimento pelo sofrimento, mas de prioridades transformadas. Carregar a cruz é colocar a vontade de Deus acima da própria conveniência.',
    pergunta: 'Que "cruz" — sacrifício, renúncia, mudança de rumo — Deus pode estar te pedindo para carregar neste momento da sua vida?',
    oracaoSugestao: 'Senhor, dai-me a graça de ser discípulo de verdade, não apenas de nome. Como São Carlos, que eu renuncie ao que me impede de Vos seguir com todo o coração. Amém.'
  }
};

// =============================================================================
// SECTION 2: localStorage HELPERS
// =============================================================================

const Storage = {
  get(key, defaultValue = null) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? JSON.parse(val) : defaultValue;
    } catch (e) {
      console.warn('Erro ao ler localStorage:', e);
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('Erro ao salvar localStorage:', e);
      mostrarToast('Não foi possível salvar os dados.', 'erro');
      return false;
    }
  },
  remove(key) {
    try { localStorage.removeItem(key); } catch (e) { /* silent */ }
  },
  clear() {
    try { localStorage.clear(); } catch (e) { /* silent */ }
  }
};

// Storage keys
const KEYS = {
  FAVORITOS_VERSICULOS: 'cdg_favoritos_versiculos',
  FAVORITOS_ORACOES:    'cdg_favoritos_oracoes',
  PLANO_LEITURA:        'cdg_plano_leitura',
  PLANO_HABITOS:        'cdg_plano_habitos',
  META_PESSOAL:         'cdg_meta_pessoal',
  PROGRESSO:            'cdg_progresso',
  NOTAS_PESSOAIS:       'cdg_notas_pessoais',
  METAS_HOJE:           'cdg_metas_hoje'
};

// =============================================================================
// SECTION 3: NAVIGATION
// =============================================================================

/**
 * Navigate to a given section by its ID.
 * @param {string} secaoId - The section element ID to show.
 */
function navegarPara(secaoId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => {
    s.classList.remove('active', 'section-active');
  });

  // Show target section
  const target = document.getElementById(secaoId);
  if (target) {
    target.classList.add('active', 'section-active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === secaoId);
  });

  // Close mobile menu
  fecharMenuMobile();

  // Run section-specific initialization
  inicializarSecao(secaoId);
}

/**
 * Dispatch initialization logic per section.
 * @param {string} secaoId
 */
function inicializarSecao(secaoId) {
  switch (secaoId) {
    case 'home':       inicializarHome();       break;
    case 'versiculos': inicializarVersiculos(); break;
    case 'evangelho':  inicializarEvangelho();  break;
    case 'musicas':    inicializarMusicas();    break;
    case 'progresso':  inicializarProgresso();  break;
    case 'biblia':     inicializarPlanoBiblia(); break;
    case 'habitos':    inicializarPlanoHabitos(); break;
    case 'oracoes':    inicializarOracoes();    break;
    default: break;
  }
}

/** Toggle the mobile navigation menu open/closed. */
function alternarMenuMobile() {
  const nav = document.querySelector('.navbar') || document.querySelector('.nav') || document.querySelector('.nav-menu');
  const hamburger = document.getElementById('menu-hamburger');
  if (nav) {
    nav.classList.toggle('nav-aberta');
    const aberto = nav.classList.contains('nav-aberta');
    if (hamburger) hamburger.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  }
}

/** Close the mobile navigation menu. */
function fecharMenuMobile() {
  const nav = document.querySelector('.navbar') || document.querySelector('.nav') || document.querySelector('.nav-menu');
  const hamburger = document.getElementById('menu-hamburger');
  if (nav) nav.classList.remove('nav-aberta');
  if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
}

// =============================================================================
// SECTION 4: HOME SECTION
// =============================================================================

/** Initialize the home section: date display and daily encouragement message. */
function inicializarHome() {
  const hoje = new Date();

  // Display current date in Portuguese
  const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateEl = document.getElementById('home-date');
  if (dateEl) {
    const formatada = hoje.toLocaleDateString('pt-BR', opcoes);
    dateEl.textContent = formatada.charAt(0).toUpperCase() + formatada.slice(1);
  }

  // Compute day-of-year for a consistent daily message
  const inicioAno = new Date(hoje.getFullYear(), 0, 0);
  const diaDoAno = Math.floor((hoje - inicioAno) / 86400000);
  const mensagem = mensagensDiarias[diaDoAno % mensagensDiarias.length];

  const mensagemEl = document.getElementById('mensagem-diaria');
  if (mensagemEl) {
    const textEl = mensagemEl.querySelector('.daily-encouragement-text') || mensagemEl.querySelector('p');
    if (textEl) {
      textEl.textContent = `"${mensagem}"`;
    } else {
      mensagemEl.textContent = `"${mensagem}"`;
    }
  }
}

// =============================================================================
// SECTION 5: PRAYER TIMER
// =============================================================================

/** Timer state object — single source of truth for the countdown. */
let timerState = {
  intervalo: null,
  segundosRestantes: 300,
  segundosTotais: 300,
  rodando: false,
  pausado: false,
  duracaoSelecionada: 5
};

/** Step-by-step guide for the 5-minute prayer mode. */
const passosOracao = [
  { numero: 1, titulo: 'Silêncio e preparação',    descricao: 'Respire fundo. Deixe as distrações de lado. Você está diante de Deus.',                          icone: '🤫', minuto: 1 },
  { numero: 2, titulo: 'Agradecimento',             descricao: 'Pense nas coisas boas da sua vida e agradeça a Deus por cada uma delas.',                        icone: '🙏', minuto: 2 },
  { numero: 3, titulo: 'Pedidos pessoais',          descricao: 'Apresente suas preocupações e dificuldades a Deus. Ele ouve cada palavra.',                       icone: '💭', minuto: 3 },
  { numero: 4, titulo: 'Oração pelos outros',       descricao: 'Ore por familiares, amigos e pessoas que precisam de ajuda.',                                     icone: '❤️', minuto: 4 },
  { numero: 5, titulo: 'Reflexão e encerramento',   descricao: 'Respire. Confie em Deus. Agradeça por este momento de paz.',                                      icone: '✨', minuto: 5 }
];

/**
 * Select prayer duration and reset the timer.
 * @param {number} minutos - Duration in minutes (1, 3, 5, or 10).
 */
function selecionarDuracao(minutos) {
  // If timer is running or paused, reset it first
  reiniciarTimer();

  timerState.duracaoSelecionada = minutos;
  timerState.segundosTotais = minutos * 60;
  timerState.segundosRestantes = minutos * 60;

  // Update active duration buttons
  document.querySelectorAll('[data-minutos]').forEach(btn => {
    const m = parseInt(btn.dataset.minutos, 10);
    const isSelected = (m === minutos);
    btn.classList.toggle('ativo', isSelected);
    btn.classList.toggle('selecionado', isSelected);
    btn.classList.toggle('btn-duration-active', isSelected);
    btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });

  // Show / hide 5-min step guide
  const passosEl = document.querySelector('.prayer-steps') || document.querySelector('.passos-oracao');
  const indicadorEl = document.querySelector('.step-indicator') || document.querySelector('.indicador-passos');
  if (passosEl) {
    passosEl.style.display = (minutos === 5) ? 'flex' : 'none';
  }
  if (indicadorEl) {
    const passoAtualEl = document.getElementById('passo-atual');
    const descEl = document.getElementById('descricao-passo');
    if (minutos === 5) {
      const p = passosOracao[0];
      if (passoAtualEl) passoAtualEl.textContent = `Passo 1 de 5: ${p.titulo}`;
      if (descEl) descEl.textContent = p.descricao;
    } else {
      if (passoAtualEl) passoAtualEl.textContent = `Oração livre (${minutos} min)`;
      if (descEl) descEl.textContent = 'Reserve este tempo para estar a sós com Deus. Converse com Ele de coração aberto ou apenas descanse em Sua presença.';
    }
  }

  atualizarDisplayTimer();
  resetarUITimer();
}

/** Start the countdown timer from the current seconds remaining. */
function iniciarTimer() {
  if (timerState.rodando) return;
  timerState.rodando = true;
  timerState.pausado = false;

  const btnIniciar = document.getElementById('btn-iniciar');
  const btnPausar = document.getElementById('btn-pausar');
  const btnContinuar = document.getElementById('btn-continuar');
  const btnReiniciar = document.getElementById('btn-reiniciar');

  if (btnIniciar) {
    btnIniciar.hidden = true;
    btnIniciar.style.display = 'none';
  }
  if (btnPausar) {
    btnPausar.hidden = false;
    btnPausar.removeAttribute('disabled');
    btnPausar.style.display = 'inline-flex';
  }
  if (btnContinuar) {
    btnContinuar.hidden = true;
    btnContinuar.style.display = 'none';
  }
  if (btnReiniciar) {
    btnReiniciar.hidden = false;
    btnReiniciar.removeAttribute('disabled');
    btnReiniciar.style.display = 'inline-flex';
  }

  const msgConcl = document.getElementById('mensagem-conclusao');
  if (msgConcl) {
    msgConcl.hidden = true;
    msgConcl.style.display = 'none';
    msgConcl.classList.remove('visivel');
  }

  if (timerState.intervalo) clearInterval(timerState.intervalo);
  timerState.intervalo = setInterval(tickTimer, 1000);
  atualizarPassoAtual();
}

/** Pause a running timer. */
function pausarTimer() {
  if (!timerState.rodando) return;
  clearInterval(timerState.intervalo);
  timerState.intervalo = null;
  timerState.rodando = false;
  timerState.pausado = true;

  const btnIniciar = document.getElementById('btn-iniciar');
  const btnPausar = document.getElementById('btn-pausar');
  const btnContinuar = document.getElementById('btn-continuar');
  const btnReiniciar = document.getElementById('btn-reiniciar');

  if (btnIniciar) {
    btnIniciar.hidden = true;
    btnIniciar.style.display = 'none';
  }
  if (btnPausar) {
    btnPausar.hidden = true;
    btnPausar.style.display = 'none';
  }
  if (btnContinuar) {
    btnContinuar.hidden = false;
    btnContinuar.removeAttribute('disabled');
    btnContinuar.style.display = 'inline-flex';
  }
  if (btnReiniciar) {
    btnReiniciar.hidden = false;
    btnReiniciar.style.display = 'inline-flex';
  }
}

/** Resume a paused timer. */
function continuarTimer() {
  if (!timerState.pausado) return;
  timerState.rodando = true;
  timerState.pausado = false;

  const btnIniciar = document.getElementById('btn-iniciar');
  const btnPausar = document.getElementById('btn-pausar');
  const btnContinuar = document.getElementById('btn-continuar');
  const btnReiniciar = document.getElementById('btn-reiniciar');

  if (btnIniciar) {
    btnIniciar.hidden = true;
    btnIniciar.style.display = 'none';
  }
  if (btnPausar) {
    btnPausar.hidden = false;
    btnPausar.removeAttribute('disabled');
    btnPausar.style.display = 'inline-flex';
  }
  if (btnContinuar) {
    btnContinuar.hidden = true;
    btnContinuar.style.display = 'none';
  }
  if (btnReiniciar) {
    btnReiniciar.hidden = false;
    btnReiniciar.style.display = 'inline-flex';
  }

  if (timerState.intervalo) clearInterval(timerState.intervalo);
  timerState.intervalo = setInterval(tickTimer, 1000);
}

/** Reset the timer to the currently selected duration. */
function reiniciarTimer() {
  if (timerState.intervalo) {
    clearInterval(timerState.intervalo);
    timerState.intervalo = null;
  }
  timerState.rodando = false;
  timerState.pausado = false;
  timerState.segundosRestantes = timerState.segundosTotais;

  atualizarDisplayTimer();
  resetarUITimer();

  // Reset steps for 5-min mode
  if (timerState.duracaoSelecionada === 5) {
    passosOracao.forEach((_, index) => {
      const el = document.getElementById(`passo-${index + 1}`);
      if (el) { el.classList.remove('ativo', 'concluido', 'prayer-step-active', 'prayer-step-concluido'); }
    });
    const passo1 = document.getElementById('passo-1');
    if (passo1) passo1.classList.add('ativo', 'prayer-step-active');
    const p = passosOracao[0];
    const passoAtualEl = document.getElementById('passo-atual');
    if (passoAtualEl) passoAtualEl.textContent = `Passo 1 de 5: ${p.titulo}`;
    const descEl = document.getElementById('descricao-passo');
    if (descEl) descEl.textContent = p.descricao;
  }

  const msgConcl = document.getElementById('mensagem-conclusao');
  if (msgConcl) {
    msgConcl.hidden = true;
    msgConcl.style.display = 'none';
    msgConcl.classList.remove('visivel');
  }
  const overlay = document.getElementById('timer-concluido');
  if (overlay) overlay.style.display = 'none';
}

/** Called every second. Decrements counter and checks for completion. */
function tickTimer() {
  if (timerState.segundosRestantes <= 0) {
    clearInterval(timerState.intervalo);
    timerState.intervalo = null;
    timerState.rodando = false;
    timerState.segundosRestantes = 0;
    atualizarDisplayTimer();
    onTimerConcluido();
    return;
  }

  timerState.segundosRestantes--;
  atualizarDisplayTimer();
  atualizarPassoAtual();
}

/** Update the visual timer display: MM:SS, progress bar, and urgency class. */
function atualizarDisplayTimer() {
  const mins = Math.floor(timerState.segundosRestantes / 60);
  const secs = timerState.segundosRestantes % 60;
  const displayStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const displayEl = document.getElementById('timer-display');
  if (displayEl) {
    displayEl.textContent = displayStr;
    if (timerState.segundosRestantes < 30 && timerState.segundosRestantes > 0) {
      displayEl.classList.add('urgente');
    } else {
      displayEl.classList.remove('urgente');
    }
  }

  // Update progress bar
  const progressEl = document.getElementById('timer-progress');
  if (progressEl && timerState.segundosTotais > 0) {
    const porcentagem = ((timerState.segundosTotais - timerState.segundosRestantes) / timerState.segundosTotais) * 100;
    progressEl.style.width = `${porcentagem.toFixed(1)}%`;
    progressEl.style.setProperty('--progresso', `${porcentagem.toFixed(1)}%`);
    progressEl.setAttribute('aria-valuenow', Math.round(porcentagem));
    if (progressEl.tagName === 'PROGRESS') {
      progressEl.value = porcentagem;
    }
  }
}

/**
 * Determine current step based on elapsed time (5-min mode) and update UI.
 */
function atualizarPassoAtual() {
  if (timerState.duracaoSelecionada !== 5) return;

  const segundosDecorridos = timerState.segundosTotais - timerState.segundosRestantes;
  const minutosDecorridos = Math.floor(segundosDecorridos / 60);
  const passoAtual = Math.min(minutosDecorridos, 4);

  passosOracao.forEach((passo, index) => {
    const el = document.getElementById(`passo-${index + 1}`);
    if (!el) return;
    el.classList.remove('ativo', 'concluido', 'prayer-step-active', 'prayer-step-concluido');
    if (index < passoAtual) {
      el.classList.add('concluido', 'prayer-step-concluido');
    } else if (index === passoAtual) {
      el.classList.add('ativo', 'prayer-step-active');
    }
  });

  const passo = passosOracao[passoAtual];
  const passoAtualEl = document.getElementById('passo-atual');
  if (passoAtualEl) passoAtualEl.textContent = `Passo ${passoAtual + 1} de 5: ${passo.titulo}`;
  const descEl = document.getElementById('descricao-passo');
  if (descEl) descEl.textContent = passo.descricao;
}

/** Handle timer completion: show completion message and record prayer. */
function onTimerConcluido() {
  const btnIniciar = document.getElementById('btn-iniciar');
  const btnPausar = document.getElementById('btn-pausar');
  const btnContinuar = document.getElementById('btn-continuar');
  const btnReiniciar = document.getElementById('btn-reiniciar');

  if (btnIniciar) {
    btnIniciar.hidden = false;
    btnIniciar.style.display = 'inline-flex';
    btnIniciar.removeAttribute('disabled');
  }
  if (btnPausar) {
    btnPausar.hidden = true;
    btnPausar.style.display = 'none';
  }
  if (btnContinuar) {
    btnContinuar.hidden = true;
    btnContinuar.style.display = 'none';
  }
  if (btnReiniciar) {
    btnReiniciar.hidden = false;
    btnReiniciar.style.display = 'inline-flex';
  }

  // Show completion card
  const msgConcl = document.getElementById('mensagem-conclusao');
  if (msgConcl) {
    msgConcl.hidden = false;
    msgConcl.style.display = 'block';
    msgConcl.classList.add('visivel');
    msgConcl.scrollIntoView({ behavior: 'smooth' });
  }

  const overlay = document.getElementById('timer-concluido');
  if (overlay) overlay.style.display = 'flex';

  // Play audio chime if Web Audio API is supported
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, ctx.currentTime);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.8);
    }
  } catch (e) { /* ignore */ }

  mostrarToast('Você reservou um momento para estar com Deus. Que essa pausa traga paz ao seu coração.', 'sucesso', 6000);
  registrarOracao();
}

/**
 * Register a completed prayer session in localStorage progress.
 */
function registrarOracao() {
  const hoje = new Date().toISOString().split('T')[0];
  let prog = Storage.get(KEYS.PROGRESSO, { oracoes: [], leituras: [], metas: [] });
  if (!prog.oracoes.includes(hoje)) {
    prog.oracoes.push(hoje);
    Storage.set(KEYS.PROGRESSO, prog);
    const statEl = document.getElementById('stat-oracoes');
    if (statEl) statEl.textContent = prog.oracoes.length;
  }
}

/** Reset timer button UI to initial state. */
function resetarUITimer() {
  const btnIniciar    = document.getElementById('btn-iniciar');
  const btnPausar     = document.getElementById('btn-pausar');
  const btnContinuar  = document.getElementById('btn-continuar');
  const btnReiniciar  = document.getElementById('btn-reiniciar');

  if (btnIniciar) {
    btnIniciar.hidden = false;
    btnIniciar.removeAttribute('disabled');
    btnIniciar.style.display = 'inline-flex';
  }
  if (btnPausar) {
    btnPausar.hidden = true;
    btnPausar.setAttribute('disabled', 'true');
    btnPausar.style.display = 'none';
  }
  if (btnContinuar) {
    btnContinuar.hidden = true;
    btnContinuar.setAttribute('disabled', 'true');
    btnContinuar.style.display = 'none';
  }
  if (btnReiniciar) {
    btnReiniciar.hidden = true;
    btnReiniciar.style.display = 'none';
  }

  const status = document.getElementById('timer-status');
  if (status) status.classList.add('oculto');
}

// =============================================================================
// SECTION 6: DAILY VERSES
// =============================================================================

/**
 * Get 5 deterministic verses for today using a seeded shuffle.
 * The seed is based on the current date, so each day gives different but
 * consistent verses throughout that day.
 * @returns {Array} Array of 5 verse objects.
 */
function getVersiculosDoDia() {
  const hoje = new Date();
  // Seed based on date (YYYYMMDD as a number)
  const semente = hoje.getFullYear() * 10000 + (hoje.getMonth() + 1) * 100 + hoje.getDate();

  const indices = Array.from({ length: versiculos.length }, (_, i) => i);

  // Linear congruential generator for deterministic shuffle
  let seed = semente;
  function lcgRandom() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }

  // Fisher-Yates shuffle with seeded RNG
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(lcgRandom() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  return indices.slice(0, 5).map(i => versiculos[i]);
}

/** Initialize the Versículos section. */
function inicializarVersiculos() {
  renderizarVersiculos();
  renderizarFavoritosVersiculos();

  // Theme filter buttons
  document.querySelectorAll('[data-tema-filtro]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-tema-filtro]').forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
      filtrarVersiculosPorTema(btn.dataset.temaFiltro);
    });
  });
}

/**
 * Render the daily verse cards into #versiculos-container.
 * @param {Array} [lista] - Optional custom list; defaults to daily verses.
 */
function renderizarVersiculos(lista) {
  const container = document.getElementById('versiculos-container');
  if (!container) return;

  const favoritados = Storage.get(KEYS.FAVORITOS_VERSICULOS, []);
  const itens = lista || getVersiculosDoDia();

  if (itens.length === 0) {
    container.innerHTML = '<p class="text-center" style="color:var(--cor-texto-suave)">Nenhum versículo encontrado para este tema hoje.</p>';
    return;
  }

  container.innerHTML = itens.map(v => `
    <div class="card card-versiculo" id="versiculo-${v.id}">
      <span class="badge tema-tag tema-${v.tema.toLowerCase()}" data-tema="${v.tema}">${v.tema}</span>
      <p class="versiculo-texto">"${v.texto}"</p>
      <p class="versiculo-referencia">— ${v.referencia}</p>
      <div class="versiculo-explicacao"><strong>💡 Entenda:</strong> ${v.explicacao}</div>
      <div class="versiculo-reflexao"><strong>🤔 Reflexão:</strong> ${v.reflexao}</div>
      <div class="card-acoes">
        <button class="btn btn-icone btn-favoritar ${favoritados.includes(v.id) ? 'favoritado' : ''}"
                onclick="window.alternarFavoritoVersiculo(${v.id})"
                aria-label="${favoritados.includes(v.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
          ${favoritados.includes(v.id) ? '★ Favorito' : '☆ Favoritar'}
        </button>
        <button class="btn btn-pequeno btn-secundario" onclick="window.copiarVersiculo(${v.id})" aria-label="Copiar versículo">
          📋 Copiar
        </button>
      </div>
    </div>
  `).join('');
}

/**
 * Filter displayed verses by theme.
 * @param {string} tema - Theme string or 'todos'.
 */
function filtrarVersiculosPorTema(tema) {
  if (tema === 'todos') {
    renderizarVersiculos();
    return;
  }
  const filtrados = versiculos.filter(v => v.tema === tema);
  // Pick up to 5 from filtered list
  renderizarVersiculos(filtrados.slice(0, 5));
}

/**
 * Toggle a verse as favorite and update UI.
 * @param {number} id - Verse ID.
 */
function alternarFavoritoVersiculo(id) {
  let favs = Storage.get(KEYS.FAVORITOS_VERSICULOS, []);
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
    mostrarToast('Removido dos favoritos.', 'info');
  } else {
    favs.push(id);
    mostrarToast('Adicionado aos favoritos! ★', 'sucesso');
  }
  Storage.set(KEYS.FAVORITOS_VERSICULOS, favs);
  renderizarVersiculos();
  renderizarFavoritosVersiculos();
}

/**
 * Copy verse text to clipboard.
 * @param {number} id - Verse ID.
 */
function copiarVersiculo(id) {
  const v = versiculos.find(v => v.id === id);
  if (!v) return;
  const texto = `"${v.texto}" — ${v.referencia}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texto)
      .then(() => mostrarToast('Versículo copiado! 📋', 'sucesso'))
      .catch(() => copiarVersiculoFallback(texto));
  } else {
    copiarVersiculoFallback(texto);
  }
}

/**
 * Fallback copy method for browsers without Clipboard API.
 * @param {string} texto
 */
function copiarVersiculoFallback(texto) {
  const el = document.createElement('textarea');
  el.value = texto;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  mostrarToast('Versículo copiado! 📋', 'sucesso');
}

/** Render favorited verses into #favoritos-versiculos. */
function renderizarFavoritosVersiculos() {
  const container = document.getElementById('lista-favoritos-versiculos-local') || document.getElementById('favoritos-versiculos');
  if (!container) return;

  const favIds = Storage.get(KEYS.FAVORITOS_VERSICULOS, []);
  if (favIds.length === 0) {
    container.innerHTML = '<p class="favoritos-vazio">Você ainda não favoritou nenhum versículo. Toque na estrela ☆ para salvar.</p>';
    return;
  }

  const favs = versiculos.filter(v => favIds.includes(v.id));
  container.innerHTML = favs.map(v => `
    <div class="card card-versiculo">
      <span class="badge tema-tag tema-${v.tema.toLowerCase()}">${v.tema}</span>
      <p class="versiculo-texto">"${v.texto}"</p>
      <p class="versiculo-referencia">— ${v.referencia}</p>
      <div class="card-acoes">
        <button class="btn btn-icone favoritado" onclick="window.alternarFavoritoVersiculo(${v.id})" aria-label="Remover dos favoritos">
          ★ Remover
        </button>
        <button class="btn btn-pequeno btn-secundario" onclick="window.copiarVersiculo(${v.id})" aria-label="Copiar versículo">
          📋 Copiar
        </button>
      </div>
    </div>
  `).join('');
}

// =============================================================================
// SECTION 7: GOSPEL OF THE DAY
// =============================================================================

/** Initialize the Gospel section with today's data or a fallback. */
function inicializarEvangelho() {
  const hoje = new Date();
  const chave = hoje.toISOString().split('T')[0]; // YYYY-MM-DD

  // Display formatted date
  const dataEl = document.getElementById('evangelho-data');
  if (dataEl) {
    const dataFormatada = hoje.toLocaleDateString('pt-BR', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    dataEl.textContent = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);
  }

  const dadosDia = gospelData[chave];
  const offlineEl = document.getElementById('evangelho-offline');
  const fonteEl   = document.getElementById('evangelho-fonte');

  if (dadosDia) {
    // Data found for today
    if (offlineEl) offlineEl.style.display = 'none';
    preencherEvangelho(dadosDia);
    if (fonteEl) {
      fonteEl.innerHTML = 'Conteúdo do banco de dados local do aplicativo. Para o Evangelho completo e atualizado, acesse: <a href="https://www.cnbb.org.br/liturgia-diaria/" target="_blank" rel="noopener">cnbb.org.br/liturgia-diaria</a>';
    }
  } else {
    // No data for today — show informative message and a fallback entry
    if (offlineEl) {
      offlineEl.style.display = 'block';
      offlineEl.innerHTML = `
        <div class="evangelho-aviso">
          <strong>⚠️ Conteúdo não disponível para hoje (${chave})</strong>
          <p>O banco de dados local não possui o Evangelho para a data de hoje.
          Para acessar a liturgia do dia atualizada, visite:</p>
          <a href="https://www.cnbb.org.br/liturgia-diaria/" target="_blank" rel="noopener noreferrer" class="btn btn-primario" style="display:inline-block;margin:8px 0">
            📖 Acessar CNBB — Liturgia Diária
          </a>
          <p><small>Os dados desta seção dependem do banco local do aplicativo.
          Novos conteúdos serão adicionados em atualizações futuras.</small></p>
        </div>
      `;
    }

    // Find closest (most recent) available date as a reference entry
    const datasDisponiveis = Object.keys(gospelData).sort();
    if (datasDisponiveis.length > 0) {
      const maisRecente = datasDisponiveis[datasDisponiveis.length - 1];
      preencherEvangelho({ ...gospelData[maisRecente], _ehFallback: true, _dataOriginal: maisRecente });
    }
  }
}

/**
 * Fill the gospel section DOM with data from an entry object.
 * @param {Object} dados - A gospelData entry (may include _ehFallback).
 */
function preencherEvangelho(dados) {
  // Populate simple text fields
  const mapa = {
    'evangelho-titulo':         dados.titulo,
    'evangelho-referencia':     dados.evangelho?.referencia,
    'evangelho-texto':          dados.evangelho?.texto,
    'evangelho-contexto':       dados.contexto,
    'evangelho-reflexao':       dados.reflexao,
    'evangelho-pergunta':       dados.pergunta,
    'evangelho-oracao-sugestao': dados.oracaoSugestao
  };

  Object.entries(mapa).forEach(([id, texto]) => {
    const el = document.getElementById(id);
    if (el && texto !== undefined && texto !== null) el.innerHTML = texto;
  });

  // First reading
  const primEl = document.getElementById('primeira-leitura');
  if (primEl && dados.primeiraLeitura) {
    primEl.innerHTML = `<strong>${dados.primeiraLeitura.referencia}</strong><p>${dados.primeiraLeitura.texto}</p>`;
  }

  // Responsorial psalm
  const salmoEl = document.getElementById('salmo-responsorial');
  if (salmoEl && dados.salmo) {
    salmoEl.innerHTML = `<strong>${dados.salmo.referencia}</strong><p>${dados.salmo.texto}</p>`;
  }

  // Show fallback notice if applicable
  if (dados._ehFallback) {
    const dataOrigFormatada = new Date(dados._dataOriginal + 'T12:00:00')
      .toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

    const notaEl = document.getElementById('evangelho-fallback-nota');
    if (notaEl) {
      notaEl.innerHTML = `<div class="evangelho-aviso"><strong>📌 Nota:</strong> Exibindo a leitura de ${dataOrigFormatada} como referência. Esta não é a leitura litúrgica de hoje.</div>`;
      notaEl.style.display = 'block';
    }
  } else {
    const notaEl = document.getElementById('evangelho-fallback-nota');
    if (notaEl) notaEl.style.display = 'none';
  }
}

// =============================================================================
// SECTION 8: MUSIC SECTION
// =============================================================================

/** Initialize the music section with all songs and set up category filters. */
function inicializarMusicas() {
  renderizarMusicas('todas');

  // Category filter buttons — use event delegation to support dynamic buttons
  document.querySelectorAll('[data-categoria]').forEach(btn => {
    // Avoid attaching duplicate listeners
    btn.replaceWith(btn.cloneNode(true));
  });

  document.querySelectorAll('[data-categoria]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-categoria]').forEach(b => {
        b.classList.remove('ativo', 'btn-filter-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('ativo', 'btn-filter-active');
      btn.setAttribute('aria-pressed', 'true');
      const cat = btn.dataset.categoria;
      renderizarMusicas(cat === 'todos' ? 'todas' : cat);
    });
  });
}

/**
 * Render music cards filtered by category.
 * @param {string} categoria - Category slug or 'todas' / 'todos'.
 */
function renderizarMusicas(categoria) {
  const grid = document.getElementById('musicas-grid');
  if (!grid) return;

  const filtradas = (categoria === 'todas' || categoria === 'todos')
    ? musicas
    : musicas.filter(m => m.categoria === categoria);

  if (filtradas.length === 0) {
    grid.innerHTML = '<p class="text-center" style="color:var(--cor-texto-suave)">Nenhuma música nesta categoria.</p>';
    return;
  }

  const categoriaNomes = {
    adoracao:      'Adoração',
    agradecimento: 'Agradecimento',
    esperanca:     'Esperança',
    oracao:        'Oração',
    catolica:      'Católica',
    contemporanea: 'Contemporânea',
    hinos:         'Hinos'
  };

  grid.innerHTML = filtradas.map(m => `
    <div class="card card-musica">
      <div class="musica-info">
        <span class="badge badge-categoria badge-${m.categoria}">${categoriaNomes[m.categoria] || m.categoria}</span>
        <h3 class="musica-titulo">${m.titulo}</h3>
        <p class="musica-artista">🎤 ${m.artista}</p>
        <p class="musica-descricao">${m.descricao}</p>
      </div>
      <div class="musica-acoes">
        ${m.urlYoutube ? `
          <a href="${m.urlYoutube}" target="_blank" rel="noopener noreferrer"
             class="btn btn-pequeno link-youtube" aria-label="Ouvir '${m.titulo}' no YouTube">
            ▶ YouTube
          </a>` : ''}
        ${m.urlSpotify ? `
          <a href="${m.urlSpotify}" target="_blank" rel="noopener noreferrer"
             class="btn btn-pequeno link-spotify" aria-label="Ouvir no Spotify">
            🎵 Spotify
          </a>` : ''}
      </div>
    </div>
  `).join('');
}

// =============================================================================
// SECTION 9: PRAYERS SECTION
// =============================================================================

/** Initialize the Prayers section: tabs, copy, favorite and start-timer buttons. */
function inicializarOracoes() {
  // --- Tab switching (for both Orações and Favorites in Progresso) ---
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab || btn.getAttribute('aria-controls');
      const tabContainer = btn.closest('.tabs') || btn.closest('.favoritos-tabs') || btn.parentElement;
      if (tabContainer) {
        tabContainer.querySelectorAll('.tab-btn').forEach(b => {
          b.classList.remove('active', 'tab-btn-active');
          b.setAttribute('aria-selected', 'false');
        });
      }
      btn.classList.add('active', 'tab-btn-active');
      btn.setAttribute('aria-selected', 'true');

      if (tab) {
        const targetPanel = document.getElementById(tab);
        if (targetPanel) {
          const parentGroup = targetPanel.parentElement;
          if (parentGroup) {
            parentGroup.querySelectorAll('.tab-content, .tab-panel, .favoritos-lista').forEach(c => {
              c.classList.remove('active', 'tab-panel-active');
              c.setAttribute('hidden', '');
            });
          }
          targetPanel.classList.add('active', 'tab-panel-active');
          targetPanel.removeAttribute('hidden');
        }
      }
    });
  });

  // --- Copy prayer buttons ---
  document.querySelectorAll('.btn-copiar-oracao').forEach(btn => {
    btn.addEventListener('click', () => {
      const card  = btn.closest('.oracao-card');
      const titulo = card?.querySelector('h3')?.textContent?.trim() || '';
      const texto  = card?.querySelector('.texto-oracao')?.textContent?.trim() || '';
      const full   = `${titulo}\n\n${texto}`;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(full)
          .then(() => mostrarToast('Oração copiada! 🙏', 'sucesso'))
          .catch(() => mostrarToast('Não foi possível copiar.', 'erro'));
      } else {
        try {
          const el = document.createElement('textarea');
          el.value = full;
          el.style.position = 'absolute';
          el.style.left = '-9999px';
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
          mostrarToast('Oração copiada! 🙏', 'sucesso');
        } catch (e) {
          mostrarToast('Não foi possível copiar.', 'erro');
        }
      }
    });
  });

  // --- Favorite prayer buttons ---
  const favOracoesAtuais = Storage.get(KEYS.FAVORITOS_ORACOES, []);

  document.querySelectorAll('.btn-favoritar-oracao').forEach(btn => {
    const card   = btn.closest('.oracao-card');
    const titulo = card?.querySelector('h3')?.textContent?.trim() || '';

    // Restore saved state
    if (favOracoesAtuais.includes(titulo)) {
      btn.textContent = '★ Favoritada';
      btn.classList.add('favoritado');
    }

    btn.addEventListener('click', () => {
      const t = card?.querySelector('h3')?.textContent?.trim() || '';
      let favs = Storage.get(KEYS.FAVORITOS_ORACOES, []);

      if (favs.includes(t)) {
        favs = favs.filter(f => f !== t);
        btn.textContent = '☆ Favoritar';
        btn.classList.remove('favoritado');
        mostrarToast('Removida dos favoritos.', 'info');
      } else {
        favs.push(t);
        btn.textContent = '★ Favoritada';
        btn.classList.add('favoritado');
        mostrarToast('Oração favoritada! ★', 'sucesso');
      }
      Storage.set(KEYS.FAVORITOS_ORACOES, favs);
    });
  });

  // --- "Iniciar oração" buttons that navigate to the timer ---
  document.querySelectorAll('.btn-iniciar-oracao').forEach(btn => {
    btn.addEventListener('click', () => navegarPara('oracao'));
  });
}

// =============================================================================
// SECTION 10: BIBLE READING PLAN
// =============================================================================

/** Initialize the 7-day Bible Reading Plan section. */
function inicializarPlanoBiblia() {
  const plano = Storage.get(KEYS.PLANO_LEITURA, {});

  for (let dia = 1; dia <= 7; dia++) {
    const dadosDia = plano[`dia${dia}`] || { concluido: false, nota: '' };
    const btnEl    = document.getElementById(`btn-dia-${dia}`);
    const notaEl   = document.getElementById(`nota-dia-${dia}`);
    const cardEl   = document.getElementById(`plano-dia-${dia}`);

    // Restore note content
    if (notaEl) notaEl.value = dadosDia.nota || '';

    // Restore completion state
    if (dadosDia.concluido && btnEl && cardEl) {
      btnEl.textContent = '✓ Concluído';
      btnEl.classList.add('btn-sucesso');
      btnEl.classList.remove('btn-primario');
      cardEl.classList.add('dia-concluido');
    }

    // Bind complete button
    if (btnEl) {
      // Clone to remove possible duplicate listeners
      const novoBtnEl = btnEl.cloneNode(true);
      btnEl.parentNode.replaceChild(novoBtnEl, btnEl);
      novoBtnEl.addEventListener('click', () => concluirDiaLeitura(dia));
    }

    // Bind note auto-save on input
    if (notaEl) {
      notaEl.addEventListener('input', () => salvarNotaDia(dia, notaEl.value));
    }
  }
}

/**
 * Toggle the completion state of a reading plan day.
 * @param {number} dia - Day number (1–7).
 */
function concluirDiaLeitura(dia) {
  let plano = Storage.get(KEYS.PLANO_LEITURA, {});
  const jaConcluido = plano[`dia${dia}`]?.concluido || false;

  if (!plano[`dia${dia}`]) plano[`dia${dia}`] = { concluido: false, nota: '' };
  plano[`dia${dia}`].concluido = !jaConcluido;
  Storage.set(KEYS.PLANO_LEITURA, plano);

  const btnEl  = document.getElementById(`btn-dia-${dia}`);
  const cardEl = document.getElementById(`plano-dia-${dia}`);

  if (plano[`dia${dia}`].concluido) {
    if (btnEl) {
      btnEl.textContent = '✓ Concluído';
      btnEl.classList.add('btn-sucesso');
      btnEl.classList.remove('btn-primario');
    }
    cardEl?.classList.add('dia-concluido');
    mostrarToast('Parabéns pela leitura! 📖', 'sucesso');

    // Log reading in progress
    let prog = Storage.get(KEYS.PROGRESSO, { oracoes: [], leituras: [], metas: [] });
    const hoje = new Date().toISOString().split('T')[0];
    if (!prog.leituras.includes(hoje)) prog.leituras.push(hoje);
    Storage.set(KEYS.PROGRESSO, prog);
  } else {
    if (btnEl) {
      btnEl.textContent = 'Marcar como concluído';
      btnEl.classList.remove('btn-sucesso');
      btnEl.classList.add('btn-primario');
    }
    cardEl?.classList.remove('dia-concluido');
    mostrarToast('Leitura desmarcada.', 'info');
  }
}

/**
 * Save a personal note for a reading plan day.
 * @param {number} dia - Day number (1–7).
 * @param {string} texto - Note text.
 */
function salvarNotaDia(dia, texto) {
  let plano = Storage.get(KEYS.PLANO_LEITURA, {});
  if (!plano[`dia${dia}`]) plano[`dia${dia}`] = { concluido: false };
  plano[`dia${dia}`].nota = texto;
  Storage.set(KEYS.PLANO_LEITURA, plano);
}

// =============================================================================
// SECTION 11: HABIT PLAN
// =============================================================================

/** Initialize the 7-day Spiritual Habit Plan section. */
function inicializarPlanoHabitos() {
  const habitos = Storage.get(KEYS.PLANO_HABITOS, {});

  for (let dia = 1; dia <= 7; dia++) {
    const checkEl = document.getElementById(`check-habito-${dia}`);
    const cardEl  = document.getElementById(`habito-dia-${dia}`);

    if (checkEl) {
      // Restore saved state
      checkEl.checked = habitos[`dia${dia}`] || false;
      if (checkEl.checked) cardEl?.classList.add('dia-concluido');

      // Clone to avoid duplicate listeners
      const novoCheck = checkEl.cloneNode(true);
      checkEl.parentNode.replaceChild(novoCheck, checkEl);
      novoCheck.checked = habitos[`dia${dia}`] || false;

      novoCheck.addEventListener('change', () => {
        let h = Storage.get(KEYS.PLANO_HABITOS, {});
        h[`dia${dia}`] = novoCheck.checked;
        Storage.set(KEYS.PLANO_HABITOS, h);

        if (novoCheck.checked) {
          cardEl?.classList.add('dia-concluido');
          mostrarToast('Ótimo! Mais um passo dado! 💪', 'sucesso');
        } else {
          cardEl?.classList.remove('dia-concluido');
        }
      });
    }
  }

  // --- Personal goal ---
  const metaInput    = document.getElementById('meta-pessoal-input');
  const metaDisplay  = document.getElementById('meta-pessoal-display');
  const savedMeta    = Storage.get(KEYS.META_PESSOAL, '');

  if (metaInput)  metaInput.value      = savedMeta;
  if (metaDisplay && savedMeta) metaDisplay.textContent = savedMeta;

  // Clone save button to avoid duplicate listeners
  const btnSalvarMeta = document.getElementById('btn-salvar-meta');
  if (btnSalvarMeta) {
    const novoBtnMeta = btnSalvarMeta.cloneNode(true);
    btnSalvarMeta.parentNode.replaceChild(novoBtnMeta, btnSalvarMeta);

    novoBtnMeta.addEventListener('click', () => {
      const meta = document.getElementById('meta-pessoal-input')?.value.trim();
      if (!meta) {
        mostrarToast('Digite sua meta pessoal antes de salvar.', 'aviso');
        return;
      }
      Storage.set(KEYS.META_PESSOAL, meta);
      if (metaDisplay) metaDisplay.textContent = meta;
      mostrarToast('Meta salva com sucesso! 🎯', 'sucesso');
    });
  }
}

// =============================================================================
// SECTION 12: PROGRESS
// =============================================================================

/** Initialize the Progress/Profile section. */
function inicializarProgresso() {
  const prog     = Storage.get(KEYS.PROGRESSO, { oracoes: [], leituras: [], metas: [] });
  const favVers  = Storage.get(KEYS.FAVORITOS_VERSICULOS, []);

  // Stats counters
  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setEl('stat-oracoes',    prog.oracoes.length);
  setEl('stat-leituras',   prog.leituras.length);
  setEl('stat-versiculos', favVers.length);
  setEl('stat-metas',      prog.metas.length);

  // --- Today's mini goals ---
  const hoje = new Date().toISOString().split('T')[0];
  const metasHoje = Storage.get(KEYS.METAS_HOJE, { data: '', orar: false, ler: false, refletir: false, agradecer: false });
  const metasValidas = (metasHoje.data === hoje)
    ? metasHoje
    : { data: hoje, orar: false, ler: false, refletir: false, agradecer: false };

  ['orar', 'ler', 'refletir', 'agradecer'].forEach(meta => {
    const el = document.getElementById(`meta-${meta}-hoje`);
    if (!el) return;

    // Clone to remove stale listeners
    const novoEl = el.cloneNode(true);
    el.parentNode.replaceChild(novoEl, el);
    novoEl.checked = metasValidas[meta] || false;

    novoEl.addEventListener('change', () => {
      metasValidas[meta] = novoEl.checked;
      Storage.set(KEYS.METAS_HOJE, metasValidas);
      if (novoEl.checked) mostrarToast('Meta do dia registrada! ✅', 'sucesso');
    });
  });

  // --- Manual prayer register button ---
  const btnReg = document.getElementById('btn-registrar-progresso');
  if (btnReg) {
    const novoBtnReg = btnReg.cloneNode(true);
    btnReg.parentNode.replaceChild(novoBtnReg, btnReg);
    novoBtnReg.addEventListener('click', () => {
      const dataHoje = new Date().toISOString().split('T')[0];
      let p = Storage.get(KEYS.PROGRESSO, { oracoes: [], leituras: [], metas: [] });
      if (!p.oracoes.includes(dataHoje)) {
        p.oracoes.push(dataHoje);
        Storage.set(KEYS.PROGRESSO, p);
        setEl('stat-oracoes', p.oracoes.length);
        mostrarToast('Oração registrada! 🙏', 'sucesso');
      } else {
        mostrarToast('Você já registrou uma oração hoje.', 'info');
      }
    });
  }

  // --- Personal notes ---
  const notasEl = document.getElementById('notas-pessoais');
  if (notasEl) notasEl.value = Storage.get(KEYS.NOTAS_PESSOAIS, '');

  const btnSalvarNotas = document.getElementById('btn-salvar-notas');
  if (btnSalvarNotas) {
    const novoBtnNotas = btnSalvarNotas.cloneNode(true);
    btnSalvarNotas.parentNode.replaceChild(novoBtnNotas, btnSalvarNotas);
    novoBtnNotas.addEventListener('click', () => {
      const notas = document.getElementById('notas-pessoais');
      Storage.set(KEYS.NOTAS_PESSOAIS, notas?.value || '');
      mostrarToast('Anotações salvas! 📝', 'sucesso');
    });
  }

  // --- Render favorites summary ---
  renderizarFavoritosProgresso();

  // --- Delete all data button ---
  const btnApagar = document.getElementById('btn-apagar-dados');
  if (btnApagar) {
    const novoBtnApagar = btnApagar.cloneNode(true);
    btnApagar.parentNode.replaceChild(novoBtnApagar, btnApagar);
    novoBtnApagar.addEventListener('click', () => {
      if (confirm('⚠️ Tem certeza que deseja apagar TODOS os seus dados salvos?\n\nEsta ação não pode ser desfeita.')) {
        Storage.clear();
        mostrarToast('Todos os dados foram apagados.', 'info');
        inicializarProgresso(); // refresh UI
      }
    });
  }
}

/** Render favorites summary cards in the progress section. */
function renderizarFavoritosProgresso() {
  const favVersIds = Storage.get(KEYS.FAVORITOS_VERSICULOS, []);
  const favOracoes = Storage.get(KEYS.FAVORITOS_ORACOES, []);

  // Verses
  const listaVers = document.getElementById('lista-favoritos-versiculos');
  if (listaVers) {
    if (favVersIds.length === 0) {
      listaVers.innerHTML = '<p style="color:var(--cor-texto-suave);font-size:0.9rem">Nenhum versículo favorito ainda.</p>';
    } else {
      const favs = versiculos.filter(v => favVersIds.includes(v.id));
      listaVers.innerHTML = favs.map(v => `
        <div class="card" style="margin-bottom:8px;padding:12px 16px">
          <strong>${v.referencia}</strong>
          <p style="font-size:0.9rem;margin:4px 0 0;color:var(--cor-texto-suave)">"${v.texto.length > 90 ? v.texto.substring(0, 90) + '…' : v.texto}"</p>
        </div>
      `).join('');
    }
  }

  // Prayers
  const listaOracoes = document.getElementById('lista-favoritos-oracoes');
  if (listaOracoes) {
    if (favOracoes.length === 0) {
      listaOracoes.innerHTML = '<p style="color:var(--cor-texto-suave);font-size:0.9rem">Nenhuma oração favoritada ainda.</p>';
    } else {
      listaOracoes.innerHTML = favOracoes.map(titulo => `
        <div class="card" style="margin-bottom:8px;padding:12px 16px">
          <strong>🤲 ${titulo}</strong>
        </div>
      `).join('');
    }
  }
}

// =============================================================================
// SECTION 13: TOAST NOTIFICATIONS
// =============================================================================

/**
 * Show a toast notification.
 * @param {string} mensagem - The message to display.
 * @param {'info'|'sucesso'|'aviso'|'erro'} tipo - Notification type.
 * @param {number} duracao - Display duration in ms (default: 3500).
 */
function mostrarToast(mensagem, tipo = 'info', duracao = 3500) {
  const container = document.getElementById('toast-container') || criarToastContainer();

  const toast = document.createElement('div');
  toast.className = `toast toast-${tipo}`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');

  // Icon map for each type
  const icones = { info: 'ℹ️', sucesso: '✅', aviso: '⚠️', erro: '❌' };
  toast.innerHTML = `<span class="toast-icone">${icones[tipo] || ''}</span> <span class="toast-mensagem">${mensagem}</span>`;

  container.appendChild(toast);

  // Trigger entrance animation on next frame
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('visivel'));
  });

  // Schedule removal
  setTimeout(() => {
    toast.classList.remove('visivel');
    toast.classList.add('saindo');
    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 400);
  }, duracao);
}

/** Create and append the toast container to the document body. */
function criarToastContainer() {
  const div = document.createElement('div');
  div.id = 'toast-container';
  div.className = 'toast-container';
  div.setAttribute('aria-live', 'polite');
  div.setAttribute('aria-atomic', 'false');
  document.body.appendChild(div);
  return div;
}

// =============================================================================
// SECTION 14: APP INITIALIZATION
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Ensure toast container exists from the start
  criarToastContainer();

  // -------------------------------------------------------------------------
  // Navigation: .nav-link elements
  // -------------------------------------------------------------------------
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const secao = link.dataset.section;
      if (secao) navegarPara(secao);
    });
  });

  // -------------------------------------------------------------------------
  // Navigation: any element with [data-section] that is NOT a nav-link
  // (home cards, quick-access buttons, etc.)
  // -------------------------------------------------------------------------
  document.querySelectorAll('[data-section]').forEach(el => {
    if (!el.classList.contains('nav-link')) {
      el.addEventListener('click', () => {
        const secao = el.dataset.section;
        if (secao) navegarPara(secao);
      });
    }
  });

  // -------------------------------------------------------------------------
  // Back-to-home buttons
  // -------------------------------------------------------------------------
  document.querySelectorAll('.btn-voltar').forEach(btn => {
    btn.addEventListener('click', () => navegarPara('home'));
  });

  // -------------------------------------------------------------------------
  // Mobile hamburger menu
  // -------------------------------------------------------------------------
  const hamburger = document.getElementById('menu-hamburger');
  if (hamburger) hamburger.addEventListener('click', alternarMenuMobile);

  // Close menu when clicking outside of it
  document.addEventListener('click', (e) => {
    const nav = document.querySelector('.navbar') || document.querySelector('.nav');
    if (nav && nav.classList.contains('nav-aberta')) {
      if (!nav.contains(e.target) && e.target !== hamburger) {
        fecharMenuMobile();
      }
    }
  });

  // -------------------------------------------------------------------------
  // Prayer Timer Buttons
  // -------------------------------------------------------------------------
  document.getElementById('btn-iniciar')?.addEventListener('click', iniciarTimer);
  document.getElementById('btn-pausar')?.addEventListener('click', pausarTimer);
  document.getElementById('btn-continuar')?.addEventListener('click', continuarTimer);
  document.getElementById('btn-reiniciar')?.addEventListener('click', reiniciarTimer);
  document.getElementById('btn-registrar-oracao')?.addEventListener('click', () => {
    registrarOracao();
    mostrarToast('Oração registrada com sucesso! 🙏', 'sucesso');
  });

  // Duration selection buttons
  document.querySelectorAll('[data-minutos]').forEach(btn => {
    btn.addEventListener('click', () => {
      const minutos = parseInt(btn.dataset.minutos, 10);
      if (!isNaN(minutos)) selecionarDuracao(minutos);
    });
  });

  // Close timer completion overlay
  document.getElementById('btn-fechar-concluido')?.addEventListener('click', () => {
    const overlay = document.getElementById('timer-concluido');
    if (overlay) overlay.style.display = 'none';
    reiniciarTimer();
  });

  // Set current year in footer
  const anoEl = document.getElementById('footer-ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  // -------------------------------------------------------------------------
  // Initialize sections that need one-time setup
  // -------------------------------------------------------------------------
  inicializarOracoes();
  inicializarPlanoBiblia();
  inicializarPlanoHabitos();

  // Set default timer duration display (5 min)
  selecionarDuracao(5);

  // -------------------------------------------------------------------------
  // Navigate to Home to start
  // -------------------------------------------------------------------------
  navegarPara('home');

  // Export essential functions to window scope for inline HTML handlers
  window.navegarPara = navegarPara;
  window.alternarFavoritoVersiculo = alternarFavoritoVersiculo;
  window.copiarVersiculo = copiarVersiculo;
  window.iniciarTimer = iniciarTimer;
  window.pausarTimer = pausarTimer;
  window.continuarTimer = continuarTimer;
  window.reiniciarTimer = reiniciarTimer;
  window.selecionarDuracao = selecionarDuracao;
  window.concluirDiaLeitura = concluirDiaLeitura;

  console.info('✝️ Caminho com Deus — aplicativo carregado com sucesso.');
});
