// Seletor de idioma: mostra o bloco [data-lang] escolhido. Sem cookies nem rastreamento.
(function () {
  var blocos = document.querySelectorAll('[data-lang]');
  var botoes = document.querySelectorAll('.idiomas button');

  function escolher(lang) {
    for (var i = 0; i < blocos.length; i++) {
      blocos[i].hidden = blocos[i].getAttribute('data-lang') !== lang;
    }
    for (var j = 0; j < botoes.length; j++) {
      botoes[j].setAttribute('aria-pressed', String(botoes[j].getAttribute('data-set') === lang));
    }
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  }

  // ?lang=en na URL vence; senão, o idioma do navegador.
  var pedido = (location.search.match(/[?&]lang=(pt|en)\b/) || [])[1];
  var inicial = pedido || ((navigator.language || 'pt').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en');

  for (var k = 0; k < botoes.length; k++) {
    botoes[k].addEventListener('click', function () {
      escolher(this.getAttribute('data-set'));
    });
  }
  escolher(inicial);
})();
