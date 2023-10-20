import { Serie } from "./serie.js";
import { series } from "./data.js";

let seriesTBody: HTMLElement = document.getElementById('tableSeries')!;
let averageSeasonElm: HTMLElement = document.getElementById('seasonsAvr')!;

renderSeriesInTable(series);
averageSeasonElm.innerHTML = `${getAverageSeason(series)}`

function renderSeriesInTable(series: Serie[]): void{
    
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.season}</td>`;
    seriesTBody.appendChild(trElement);
    });

}

function getAverageSeason(series: Serie[]): number{

    let totalSeasons: number = 0;
    console.log("Entra")
    series.forEach((serie) => totalSeasons = totalSeasons + serie.season);
    console.log(totalSeasons/series.length);
    return totalSeasons/series.length;

}