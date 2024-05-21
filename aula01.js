var qg = prompt('DIGITA A QTD DE GOLS') 
var qc = prompt('DIGITA A QTD DE PASSES CERTO')
var qe = prompt('DIGITA A QTD DE PASSES ERRADAS')

var pontos = (qg * 50) + (qc * 10) + (qe * -5);

if (pontos < 50) {
    document.write("PÉSSIMA PARTIDA");
} else if (pontos >= 50 && pontos < 100) {
    document.write("PARTIDA RUIM");
} else if (pontos >= 100 && pontos < 150) {
    document.write("FEZ O BÁSICO");
} else if (pontos >= 150 && pontos < 200) {
    document.write("JOGOU BEM");
} else {
    document.write("JOGOU DEMAIS");
}