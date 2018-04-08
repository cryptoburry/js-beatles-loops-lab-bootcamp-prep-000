
function theBeatlesPlay(musicians, instruments){
  var abc = [];
  for(i=0;i<musicians.length;i++){
    abc[i] = `${musicians} plays the ${instruments}`;
  }
  return abc;
}

