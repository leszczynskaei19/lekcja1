imie = "Maria";
nazwisko = Array ['L','E','S','Z','C','Z','Y','Ń','S','K','A'];

function ImieNazwisko(tekst = ""){
i = 0;
  wynik = " ";
  while(tekst[i] != undefined){
  wynik += tekst [i];
    i++;
  }
  return wynik;
}
console.log(ImieNazwisko(imie)+" "ImieNazwisko(nazwisko));
