import { Serie } from "./serie.js";
import { series } from "./data.js";

let seriesTBody: HTMLElement = document.getElementById('tableSeries')!;
let averageSeasonElm: HTMLElement = document.getElementById('seasonsAvr')!;
let contentCard: HTMLElement = document.getElementById('contentCardSerie')!;

seriesTBody.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("nameSerie")) {
        let nameSerie: string = target.textContent!;
        console.log(nameSerie);
        clearCards();
        renderCardSerie(findSerieByName(series,nameSerie));
    }
});

renderSeriesInTable(series);
averageSeasonElm.innerHTML = `${getAverageSeason(series)}`

function renderSeriesInTable(series: Serie[]): void{
    
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
        <td class="nameSerie" style="color: blue; cursor: pointer;">${serie.name}</td>
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


function renderCardSerie(serie: Serie){
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'card');
    divElement.setAttribute('style', 'width: 18rem;');

    divElement.innerHTML = `
        <img src="https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200612/196177803-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustraci%C3%B3n-de-alta-calidad.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${serie.name}</h5>
            <p class="card-text">${serie.description}</p>
            <a href="${serie.url}" class="btn btn-dark">Mirala aquí...</a>
        </div>
    `

    contentCard.appendChild(divElement);
}

function clearCards() {
    while (contentCard.hasChildNodes()) {
        if (contentCard.firstChild != null) {
            contentCard.removeChild(contentCard.firstChild);
        }
    }
}

function findSerieByName(series: Serie[], name: string){
    let i: number = 0;
    let go: boolean = true;
    
    while (go && i<series.length){
        if (series[i].name === name){
            go = false;
            return series[i];
        }
        i++;
    }
    return series[0];
}