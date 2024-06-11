function Continuar() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você : </h3>';
  formation += ' <img src="tete/dança.jpg" class="a">';
  formation += '<br>';
  formation += '<button onclick="Escolha1()">Aceitar a bolsa</button>';
  formation += '<button onclick="Escolha2()">Negar a bolsa</button>';
  $(".principal").append(formation);
}


function Escolha1() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>Você aceita a bolsa e descobre que você precisa ir morar em São Paulo  para cursá-la presencialmente. </h3>';
  formation += ' <img src="tete/saopaulo.webp" class="b">';
  formation += '<br>';
  formation += '<button onclick="Escolha11()">Ir para São Paulo</button>';
  formation += '<button onclick="Escolha12()">Fazer as aulas online</button>';
  $(".principal").append(formation);
}

function Escolha11() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você vai para São Paulo morar na casa da sua tia, suas aulas começam daqui a uma semana, então sua tia se oferece pra te apresentar a cidade que você irá morar a partir de hoje. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha111()">Aceitar a ideia </button>';
  formation += '<button onclick="Escolha112()">Negar a ideia</button>';
  $(".principal").append(formation);
}

function Escolha112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Deixa de ser burra e aceita logo!!!!!.';
  formation += '<br>';
  formation += '<button onclick="Escolha111()">Aceitar a ideia</button>';
  $(".principal").append(formation);
}

function Escolha111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Sua tia te levar para conhecer a cidade e te apresenta uma amiga, a amiga da sua tia tem uma filha chamada Luana que também vai estudar na mesma escola que você. </h3>'
  formation += ' <img src="tete/amiga.jpg" class="c">';
  formation += '<br>'
  formation += '<button onclick="Escolha1111()">Se tornar amiga dela</button>';
  formation += '<button onclick="Escolha1112()">Deixar de lado</button>';
  $(".principal").append(formation);
}

function Escolha1111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> As aulas começam, você e Luana vão juntas para escola e passam o dia todo juntas, se passam duas semanas e a turma de vocês decidem sair para um shopping para  se conhecerem melhor. </h3>'
  formation += ' <img src="tete/Shopping.jpg" class="d">';
  formation += '<br>'
  formation += '<button onclick="Escolha11111()">Ir ao shopping com a turma</button>';
  formation += '<button onclick="Escolha11112()">Ficar em casa</button>';
  $(".principal").append(formation);
}
function Escolha1112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Deixa de ser trouxa e aceita ser amiga dela logo !!!!!.';
  formation += '<br>';
  formation += '<button onclick="Escolha1111()">Se tornar amiga dela</button>';
  $(".principal").append(formation);
}

function Escolha11112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Sua tia saí para resolver algumas coisas e você acaba indo ao shopping. </h3>'
  formation += '<button onclick="Escolha11111()">Continuar</button>';
  $(".principal").append(formation);
}

function Escolha11111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>Num piscar de olhos, já se passaram um ano, você tem uma apresentação e nessa apresentação vai estar o diretor da maior faculdade de dança do mundo e você precisa se sair bem nessa apresentação, você precisa escolher um tema. </h3>'
  formation += '<h3> Qual peça de ballet você vai escolher? </h3>'
  formation += ' <img src="tete/unnamed.jpg" class="e">';
  formation += '<br>'
  formation += '<button onclick="Escolha111111()">Lago dos cisnes</button>';
  formation += '<button onclick="Escolha111112()">Quebra nozes</button>';
  $(".principal").append(formation);
}


function Escolha111112() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> O diretor da faculdade odiou o tema escolhido. Pois é um tema ultrapassado. </h3>'
  formation += ' <img src="tete/quebra nozes.jpg" class="f">';
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha111111() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> O diretor adorou sua apresentação e te convidou como bolsista para sua companhia de dança em Paris. </h3>'
  formation += ' <img src="tete/lago.jpg" class="f">';
  formation += '<br>'
  formation += '<button onclick="Escolha1111111()">Aceitar o convite </button>';
  formation += '<button onclick="Escolha1111112()">Negar o convite</button>';
  $(".principal").append(formation);
}

function Escolha1111111() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> Você se torna um bailarina de sucesso e funda sua própria companhia de dança. </h3>'
  formation += ' <img src="tete/oiiiii.jpeg" class="g">';
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha1111112() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> Você perde sua maior chance de se tornar uma bailarina profissional e desiste de tudo. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha12() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>Você começa as aulas, faz amigos e combina de se encotrar com eles em um parque. </h3>'
  formation += ' <img src="tete/parque.png" class="h">';
  formation += '<br>'
  formation += '<button onclick="Escolha121()">Encotrar com eles</button>';
  formation += '<button onclick="Escolha122()">Ignorar o convite</button>';
  $(".principal").append(formation);
}

function Escolha121() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você se encotra com eles e descobre que eles eram inteligência artificial que eram controlados por um hacker chamado Adryan, ele a sequestra, te tranca num porão e a tortura até a morte. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha122() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você se salva de um hacker que preparava uma emboscada para você. </h3>'
  formation += '<h3> Você acaba ficando sobrecarregada com a quantidade de trabalhos, pois você trabalha e não tem tempo para se dedicar as aulas e acaba desistindo das aulas. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha2() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você negar a bolsa e perde uma oportunidade única de se torna a melhor dançariana do mundo. </h3>';
  formation += '<br>';
  $(".principal").append(formation);
}















