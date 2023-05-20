// alert("alert denemesi");
// console.log("consol dene;mesi")
// console.error("consol eror denemesi");
// console.warn("warn denemesi");
// console.info("info denemesi");
// alert("Pop-up");
// window.alert("Pop-up denemesi window");
// document.writeln("<br/>"+"ekran çıktısı için Document.write");
// document.writeln(" `` back ticks");
// var numberdata=33;
// var numberdata=3;
// let numberdata1=13;

// const numberdata2=23;
// numberdata1=21;
// console.log(numberdata1);
// var sayı=numberdata;
// let data=true;
// let datastr="selam";
// console.log(typeof data);
// console.log(typeof datastr);

// let num1=12, num2=32;

// console.log("num1+num2="+num1+num2);
// console.log("num1+num2="+(num1+num2));

// let deneme=["Ankara","Adıyaman","Malatya","Mersin"];
// console.log(deneme instanceof Array);
// console.log(deneme instanceof Object);
// console.log(deneme instanceof Number);
// console.log(deneme instanceof String);
// let userData=prompt("Lütfen birşeyler yazınız...");
// console.log(userData);
// document.writeln("<br/>"+userData);
// alert(userData);
// let typeCast=String(12089);
// console.log("type is:"+typeof typeCast);
// let example=Number(prompt("lütfen bir sayı giriniz."));
// console.log("example:"+example);
// let numberSqr=Number(prompt("Hangi sayının kare kökünü öğrenmek istiyorsunuz..."));
// alert(numberSqr+"'un karekökü="+Math.sqrt(numberSqr));
// console.log("3/3="+3/3);
// console.log("0/3="+0/3);
// console.log("3/0="+3/0);
// //Math(Mutlak Değer)
// console.log(Math.min(12,90,23,54,9,-21));
// console.log(Math.max(12,90,23,54,9,-21));
// console.log(Math.ceil(8.2));
// console.log(Math.floor(8.2));
// console.log(Math.round(6.4));
// console.log(Math.round(6.5));
// console.log(Math.abs(-12));
// console.log(Math.sqrt(Math.abs(-25)));
// console.log(Math.pow(3,Math.sqrt(Math.abs(-25))));
// console.log(Maht.floor(Math.random()*9+1));//1<=x<=9
///////////////////////////////////////////////////////////sonraki ders/////////
// NUMBER
// let number1=35;
// console.log(number1);
// number1=35.7;
// console.log(number1);
// console.log(typeof number1);//typeof
// console.log(12/"1");
// console.log(12/Number("a"));
// console.log(12/Number("1"));//cast
// //console.log(Math.sqrt(Math.abs(Number(prompt("lütfen bir sayı yazınız"))))); //Monad: Bir işlemin çıktısı baska bir işelmin girdisi olarak işlem görünüyorsa bu işlem monad işlemidir.
// console.log(isNaN(12)); //isNaN: is Not a Number
// console.log(isNaN("acd"));
// let bilimselgosterim=150000000;
// console.log(bilimselgosterim);
// bilimselgosterim=15E+7;
// console.log(bilimselgosterim);
// // Sayı Sistemleri (taban çevirme)
// //Binary 2 li sayı sistemi yazımı ve 10 luk tabana çevirimi
// let binary2=0b10111;
// console.log(binary2);
// //octal: 8 li sayı sistemi yazımı  ve 10 luk tabana çevirimi
// let binary8=0o72;
// console.log(binary8);
// //Decimal 10 luk sayı sistemi yazımı ve 10 luk tabana çevirimi
// let binary10=8549;
// console.log(binary10);
// //Hexdecimal 10 luk sayı sistemi yazımı ve 10 luk tabana çevirimi
// let binary16=0x8f9a;
// console.log(binary16);
 /////////////////////////////////////////////////////////////
 //string
//  let vocabulary="lesson about works of JS ";
//  console.log(vocabulary);
//  console.log(typeof vocabulary);
//  console.log(typeof String(25)); //cast process
//  console.log(vocabulary.length);
//  // trim using: "trim" use to cuts spaces of start or end of text
//  console.log(vocabulary.trim());
//  console.log(vocabulary.trim().length);
//  console.log(vocabulary.toLocaleUpperCase());
//  console.log(vocabulary.toLocaleLowerCase());
//  console.log(vocabulary.charAt(4));
//  console.log(vocabulary.indexOf("of"));
//  console.log(vocabulary.lastIndexOf("of"));
//  console.log(vocabulary.substring(4));
//  console.log(vocabulary.substring(4).toLocaleUpperCase());
//  console.log(vocabulary.substring(4,9));
//  console.log(vocabulary.concat(" sona eklenen"));// concat, given text end of text
//  console.log(vocabulary.startsWith("JS"));
//  console.log(vocabulary.endsWith("JS "));
//  let alinanCumle=String(prompt("bir cümle giriniz"));
//  console.log("cumle:"+alinanCumle);
//  let ilkbosluk=Number(alinanCumle.indexOf(" "));
//  console.log("ilk boşluk:"+ilkbosluk);
// console.log(alinanCumle.replace(alinanCumle.substring(0,alinanCumle.indexOf(" ")),"Javascript"));
///////////////////////////////////////////////////////////////////////////////////////////////
// NORMAL FUNCTİON
// function returnsuzParametresizFonksiyon(){
// console.log("returnsuz parametresiz fonksiyon");
// }
// returnsuzParametresizFonksiyon();
// function returnsuzParametreliFonksiyon(id){
// console.log("id:"+id);
// }
// returnsuzParametreliFonksiyon(25);
// function returnluParametresizFonksiyon(){
//     return "returnlu parametresiz fonksiyon";
// }
// let geleneBilgi=returnluParametresizFonksiyon();
// console.log(geleneBilgi);
// function returnluParametreliFonksiyon (id,name){
// return ("id:"+(id*100)+" "+String(name).substring(0,2).concat("***")+"Gezer".substring(0,2).concat("***"));
// }
// console.log(returnluParametreliFonksiyon(25,"Celal"));
//  // ANONYMOUS FUNCTION
//  let anonymousFunction= function() {
//     console.log("anonymous functions");
//  } 
//  anonymousFunction();
//  // Arrow Function
//  let arrowFunction=(name)=>{
//     console.log("arrow function"+String(name).substring(0,2));
//  }
//  arrowFunction("Celal");
//  // Arrow Function With Return
//  let arrowFunctionWithReturn=(name)=>{
//     return "arrow function with return "+String(name).substring(0,2).concat("***");
//  }
//  //ternary(if kısayol)
//  let arrowRetur=arrowFunctionWithReturn("CelalGezer");
//  console.log(arrowRetur);
//  let yas=16;
//  let result=(yas>=18)?"Karar alabilir":"Karar alamaz";
//  console.log(result);
// //  if,else
// if(yas==14){
//     console.log("yas 14");
// }else if(yas==15){
//     console.log("yas 15");
// }
// else if(yas===16){// === hem değer hem tip karşılaştırması yapar.
// console.log("yas 16");
// }
// else if(yas===18){
//     console.log("yas 18");
// }
//switch case yapısı

// let debugTest=17;
// switch (debugTest) {
//     case 15:
//         console.log("yaş 15");
//         break;
//     case 16:
//             console.log("yaş 16");
//             break;
//     case 17:
//         console.log("yaş 17");
//         break;

//     case 18:
//             console.log("yaş 18");
//             break;
//     default:
//         console.log("yaş dışında");
//         break;
// }
// let girilenSayi=Number(prompt("bir sayı giriniz"));
// let gs=girilenSayi;
// let sonuc=(girilenSayi>0)?"sayı pozitiftir":"sayı sıfır veya negatiftir.";
// console.log(sonuc);

// let saatHesapla=() =>{
//     let saat=Date(new Date);
//     return saat;
// }
// let saat=saatHesapla();
// console.log(saat);
///////////////////////////////////////////////////////////////////7
// loop, for, while,do-while
let deger=0;
for(i=0;i<100;i++){
    deger+=1;
    console.log(deger);
}
let sum=0;
let t=0;

while(t<=10){
    sum+=t;
    t++;
    if(t>10){break;} 
    
}
console.log("sum:"+sum);
let sum1=0,t1=1;
do{
sum1+=t1;
t1++;
}while(t1<=10);
console.log("sum1:"+sum1);