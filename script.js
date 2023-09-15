var kelimeler;
var anlamlar;

var puan = 0;

var dogrucevapkontrol = false;

var sorulankelimeid;
var sorulaneskikelimeid = 0;

var kelimeinput = document.querySelector("#kelime");
var anlaminput = document.querySelector("#anlam");

var cevaplainput = document.querySelector("#kelimeanlaminput");

var puantext = document.querySelector("#puantext");

var kelimetext = document.querySelector("#kelimetext");

var kelimegirdiv = document.querySelector("#kelimegir");

var bildiri = document.querySelector("#bildiri");

var cevaplamakismi = document.querySelector("#cevaplamakismidiv");

puantext.innerHTML = puan;

function kelimeonay()
{
    let kelimelerstring = kelimeinput.value;
    let anlamlarstring = anlaminput.value;

    kelimeler = kelimelerstring.split(",");
    anlamlar = anlamlarstring.split(",");

    kelimegirdiv.style.display = "none";
    cevaplamakismi.style.display = "block"
    sonraki();
}

function cevapla()
{
    if((anlamlar[sorulankelimeid].trim()).toLowerCase() == (cevaplainput.value.trim()).toLowerCase())
    {
        bildiri.innerHTML = "CEVAP DOĞRU";
        bildiri.style.color = "lime";
        if(!dogrucevapkontrol)
        {
            puan++;
            puantext.innerHTML = puan;
            dogrucevapkontrol = true;
        }
    }else
    {
        bildiri.innerHTML = "CEVAP YANLIŞ";
        bildiri.style.color = "red";
    }
}

function sonraki()
{
    let aynimi = true;
    if(kelimeler.length != 1)
    {
        while(aynimi)
        {
            sorulankelimeid = Math.floor(Math.random() * kelimeler.length);
            if(sorulankelimeid != sorulaneskikelimeid)
            {
                aynimi = false;
            }
        }
        sorulaneskikelimeid = sorulankelimeid;
    }else
    {
        sorulankelimeid = 0;
    }

    
    dogrucevapkontrol = false;
    cevaplainput.value = "";
    kelimetext.innerHTML = kelimeler[sorulankelimeid];
    bildiri.innerHTML = "";
}