import { series } from "./data.js";
var seriesTBody = document.getElementById('tableSeries');
var averageSeasonElm = document.getElementById('seasonsAvr');
renderSeriesInTable(series);
averageSeasonElm.innerHTML = "".concat(getAverageSeason(series));
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.season, "</td>");
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
