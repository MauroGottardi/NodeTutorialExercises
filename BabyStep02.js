var somma = 0;
process['argv'].forEach(function(elem, index){
  if(index > 1){
    somma += Number(elem);
  }
});
console.log(somma);