let kitap1 ={
    isim: "Felsefe Sözlüğü",
    yazar: "Ahmet Cevizci",
    fiyat: 36 + "₺",
    raf:"5.Satır-1.Raf"
}
let kitap2 ={
    isim: "Bİr Ömür Nasıl Yaşanır",
    yazar: "İlber Ortaylı",
    fiyat: 52 + "₺",
    raf:"4.Satır-3.Raf"
}
let kitap3 ={
    isim: "1984",
    yazar: "Geroge Orwell",
    fiyat: 62 + "₺",
    raf:"3.Satır-2.Raf"
}
let kitap4 ={
    isim: "Zengin Baba Yoksul Baba",
    yazar: "Robert T. Kiyosaki",
    fiyat: 86 + "₺",
    raf:"1.Satır-5.Raf"
}
let kitap5 ={
    isim: "Veba Geceleri",
    yazar: "Orhan Pamuk",
    fiyat: 45 + "₺",
    raf:"2.Satır-5.Raf"
}
//Mantığı anlasak yeter rafların hepsini doldurmaya gerek yok

let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];
// Kitapları tek bir dizinde topladık

let raf11 = { kod: "1.Satır-1.Raf", goster: false }
let raf12 = { kod: "1.Satır-2.Raf", goster: false }
let raf13 = { kod: "1.Satır-3.Raf", goster: false }
let raf14 = { kod: "1.Satır-4.Raf", goster: false }
let raf15 = { kod: "1.Satır-5.Raf", goster: false }


let raf21 = { kod: "2.Satır-1.Raf", goster: false }
let raf22 = { kod: "2.Satır-2.Raf", goster: false }
let raf23 = { kod: "2.Satır-3.Raf", goster: false }
let raf24 = { kod: "2.Satır-4.Raf", goster: false }
let raf25 = { kod: "2.Satır-5.Raf", goster: false }

let raf31 = { kod: "3.Satır-1.Raf", goster: false }
let raf32 = { kod: "3.Satır-2.Raf", goster: false }
let raf33 = { kod: "3.Satır-3.Raf", goster: false }
let raf34 = { kod: "3.Satır-4.Raf", goster: false }
let raf35 = { kod: "3.Satır-5.Raf", goster: false }

let raf41 = { kod: "4.Satır-1.Raf", goster: false }
let raf42 = { kod: "4.Satır-2.Raf", goster: false }
let raf43 = { kod: "4.Satır-3.Raf", goster: false }
let raf44 = { kod: "4.Satır-4.Raf", goster: false }
let raf45 = { kod: "4.Satır-5.Raf", goster: false }

let raf51 = { kod: "5.Satır-1.Raf", goster: false }
let raf52 = { kod: "5.Satır-2.Raf", goster: false }
let raf53 = { kod: "5.Satır-3.Raf", goster: false }
let raf54 = { kod: "5.Satır-4.Raf", goster: false }
let raf55 = { kod: "5.Satır-5.Raf", goster: false }


let raflar = [
    [raf51,raf52,raf53,raf54,raf55],
    [raf41,raf42,raf43,raf44,raf45],
    [raf31,raf32,raf33,raf34,raf35],
    [raf21,raf22,raf23,raf24,raf25],
    [raf11,raf12,raf13,raf14,raf15]];
// rafları tek bir dizinde topladık

    function rafOlustur(){
        // burada önce kitapların kodunun yerleşeceği rafları oluşturuyoruz
        console.clear();
        let satir="";
        for(let i =0  ; i<raflar.length ; i++){
            for(let j=0 ; j<5 ; j++){
                satir+="|"+ (raflar[i][j].goster ? raflar[i][j].kod : "---")+"";
                // (?)true ise raflar[i][j].kod bunu yaz (:) değilse "---" bunu yaz
              
            }
            console.log(satir);
            console.log("--------------------");
            satir="";
        }
        
    }

    function kodBul(kitapIsmi){
        let rafKod=null;
        // kitap ismi başta null çünkü null ise bişe yazmayacak içi dolu ise rafta gösterecek
        kitaplar.forEach(function(kitap){
            //forEach ile kitapları tek tek dönüyoruz
            if(kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(),0)){
                rafKod=kitap.raf;
                // Kullanıcıdan gelen kitap ismi (kitapIsmi), bulunan kitapların içinde var ise o kitabın rafını rafKod a koy
            }
        });
        return rafKod;
    }

    function raftaGoster(rafKod){
        //rafta göstermek için rafKodunu aldık
        for(let i =0 ; i<raflar.length; i++){
            for(let j=0 ; j<5 ; j++){
                if(raflar[i][j].kod==rafKod){
                    raflar[i][j].goster=true;
                    break;
                    //raf kodlarını dönüyoruz eğer kitaplıktaki raf kodu ile kullanıcının yazdığı kitabın raf kodu aynı ise  goster ini true yap. Çünkü true ler gözükür.
                }
            }
        }
    }

    rafOlustur();

    let kitapIsmi = prompt("Lütfen bir kitap ismi giriniz.");
    //kullanıcı kitap ismi girecek
    let rafKod = kodBul(kitapIsmi);
    // kitap ismi rafKod a aktarılacak
   
    if(rafKod!=null){
        raftaGoster(rafKod);
        rafOlustur();
    }else{
        alert("Girdiğiniz kitap kütüphanemizde bulunmamaktadır.");
    }
    //eğer raf kodu null değilse raf kodunu rafta göster null sa kitap bulunamadı.



 




