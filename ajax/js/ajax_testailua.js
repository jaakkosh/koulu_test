/*
	Javascript-tiedosto AJAX-tehtäviä varten.
*/

// Etsitään HTML-sivulta tarvittavat komponentit id:n avulla.
const hakunappi = document.getElementById('hakunappi');
const hakukentta = document.getElementById('hakuteksti');
const tulosalue = document.getElementById('tulos');
// Datan hakuosoitteen alkuosa.
const apiurl = 'http://api.tvmaze.com/updates/shows';

// Lisätään nappulalle tapahtumankäsittelijä.
hakunappi.addEventListener('click', tee_haku);

// Idea: tämä fetch-osa säilyy aina lähes vakiona.
function tee_haku()  {
    let hakusana = document.getElementById('hakuteksti').value;
    fetch(apiurl).then(function(response) {
        return response.json();
    }).then(function(json) {
        naytaVastaus(json);
    }).catch(function(error){       	// Jos tapahtuu virhe,
        console.log(error);           // kirjoitetaan virhe konsoliin.
    });
    return;
}

// Idea: tämä json-osa muokataan sovelluksen mukaan
function naytaVastaus(json) {

    tulosalue.innerHTML= 'Tuloksia ' + json.length + 'kpl <br>';


    return;
}
