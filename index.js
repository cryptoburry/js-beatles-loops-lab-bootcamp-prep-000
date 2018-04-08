function theBeatlesPlay(musicians,instruments){
  array1 = new array();
  for (i=0;i<musicians.length;i++){
    var musician = musicians[i];
    var instrument = instruments[i];
    array1[i] = '${musician} plays ${instrument}';
  }
  return array1;
}

function johnLennonFacts