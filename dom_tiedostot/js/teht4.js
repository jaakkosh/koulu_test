const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];
function kuva() {
  for(i=0;i<kuvat.length;i++){
    let unorderedlist = document.getElementsByTagName('ul')[0];
    let li=document.createElement('li');
    let img=document.createElement('img');
    
    img.src=kuvat[i];

    unorderedlist.appendChild(li);
    li.appendChild(img);

  }
}
kuva();