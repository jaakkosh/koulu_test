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
    unorderedlist.innerHTML+='<li><img src='+kuvat[i]+'/></li>';
  }

}
kuva();