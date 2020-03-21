/*
	Javascript-tiedosto AJAX-tehtäviä varten.
*/

// Etsitään HTML-sivulta tarvittavat komponentit id:n avulla.
const hakunappi = document.getElementById('hakunappi');
const hakukentta = document.getElementById('hakuteksti');
const tulosalue = document.getElementById('tulos');
// Datan hakuosoitteen alkuosa.
const apiurl = 'https://soccer.sportmonks.com/api/v2.0/continents/1?api_token=MEytkDzROVaUoqN48cnIDjVYhnbw4VDrExJjzcDkdd26vBMTilJiCWITz3Bf';

// Lisätään nappulalle tapahtumankäsittelijä.
hakunappi.addEventListener('click', tee_haku);

// Idea: tämä fetch-osa säilyy aina lähes vakiona.
function tee_haku()  {
    let hakusana = document.getElementById('hakuteksti').value;
    fetch(apiurl + hakusana).then(function(response) {
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

    for(i=0;i<json.length;i++) {
        let html = '';
        html += json[i].show.name + '<br>'
        if(json[i].show.image) {
            html += "<img src =" + json[i].show.image.medium + ">" + '<br>';
        }
        else {
            html +="Kuva puuttuu"+'<br>';
        }
        html += 'id: ' + json[i].show.id;
     //   html += 'summary: ' + json[i].show.summary + '<br>';
  //      html += '<a href=' + '\"' + json[i].show.url + '\">' + 'Sarjan kotisivu' + '</a>'+'<br>';

        tulosalue.innerHTML += html;
    }
    return;
}


