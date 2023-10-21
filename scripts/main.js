import { series } from "./data.js";
var seriesTBody = document.getElementById('tableSeries');
var averageSeasonElm = document.getElementById('seasonsAvr');
var contentCard = document.getElementById('contentCardSerie');
seriesTBody.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains("nameSerie")) {
        var nameSerie = target.textContent;
        console.log(nameSerie);
        clearCards();
        renderCardSerie(findSerieByName(series, nameSerie));
    }
});
renderSeriesInTable(series);
averageSeasonElm.innerHTML = "".concat(getAverageSeason(series));
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td class=\"nameSerie\" style=\"color: blue; cursor: pointer;\">").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.season, "</td>");
        seriesTBody.appendChild(trElement);
    });
}
function getAverageSeason(series) {
    var totalSeasons = 0;
    console.log("Entra");
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.season; });
    console.log(totalSeasons / series.length);
    return totalSeasons / series.length;
}
function renderCardSerie(serie) {
    var divElement = document.createElement('div');
    divElement.setAttribute('class', 'card');
    divElement.setAttribute('style', 'width: 20rem;');
    divElement.innerHTML = "\n        <img src=\"./imagenes/".concat(serie.image, "\" alt=\"...\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(serie.name, "</h5>\n            <p class=\"card-text\">").concat(serie.description, "</p>\n            <a href=\"").concat(serie.url, "\" class=\"btn btn-dark\">Mirala aqu\u00ED...</a>\n        </div>\n    ");
    contentCard.appendChild(divElement);
}
function clearCards() {
    while (contentCard.hasChildNodes()) {
        if (contentCard.firstChild != null) {
            contentCard.removeChild(contentCard.firstChild);
        }
    }
}
function findSerieByName(series, name) {
    var i = 0;
    var go = true;
    while (go && i < series.length) {
        if (series[i].name === name) {
            go = false;
            return series[i];
        }
        i++;
    }
    return series[0];
}
