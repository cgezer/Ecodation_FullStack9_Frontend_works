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
// let deger=0;
// for(i=0;i<100;i++){
//     deger+=1;
//     console.log(deger);
// }
// let sum=0;
// let t=0;

// while(t<=10){
//     sum+=t;
//     t++;
//     if(t>10){break;} 
    
// }
// console.log("sum:"+sum);
// let sum1=0,t1=1;
// do{
// sum1+=t1;
// t1++;
// }while(t1<=10);
// console.log("sum1:"+sum1);
// let sayi=Number(Math.abs(prompt("Lütfen bir sayı giriniz...")));
// let absultNum=sayi;
// let sum2=0;
// let evenNumber=0, oddNumber=0,counter=0;

// switch (absultNum) {
//     case 0:
//         counter+=1;
//         console.log(counter);
//         evenNumber=1;    
//         break;
//         case absultNum<0:            
//             console.log("sayı negatif olamaz");            
//             break;
//     case 44:
//     console.log("Secret key girildi");
//         break;

//     default:        
//             for(i=1;i<=absultNum;i++){
//                 sum2+=i;
//                 if(i%2==0){evenNumber+=1;}
//                 else{oddNumber+=1}
//             }
            
// console.log("toplam: "+sum2);
// console.log("çift sayısı: "+evenNumber);
// console.log("tek sayısı: "+oddNumber);      
// }
//////////////////////////////////////////////////////////
// soru:kulanıcıdan alınan arada boşluk olan isim ve soy isminin ilk harflerinin küçük harf girilmişse büyük harfe dönüştürülmesi js kodunu yazınız.
// let isimSoyisim=String(prompt("Lütfen isim ve soy isminizi giriniz"));
// let ilkHarf=isimSoyisim.charAt(0);
// let bosluk=isimSoyisim.indexOf(" ");
// console.log(isimSoyisim.charAt(0)+"***"+" "+isimSoyisim.charAt(isimSoyisim.indexOf(" ")+1)+"***");
// console.log(String(isimSoyisim.charAt(0)).toLocaleUpperCase()+isimSoyisim.substring(1,bosluk)+isimSoyisim.charAt(bosluk+1).toUpperCase()+String(isimSoyisim).substring((bosluk+2),(String(isimSoyisim).length)));
//////////////////////////////////////////////////////////////////
//try chatch,axception handling

// let tryChatchTutorials=()=>{
//     // global variable (var)
//     //Local variable (let-const)
//     try{
//         var number1 =Number(prompt("lütfen bir sayı giriniz"));
//         number1=number1**2;//like Math.pow(number,2)
//         window.alert(number1);
//         console.log("hatadan dolayı çalışmaaycak alan"+number1);
//     }catch(error){
//         console.error("Hata Mesajı-1: "+error.name);//type error veriyor.
//         console.error("Hata Mesajı-2: "+error.message);//type error vermiyor hata mesajı veriyor.
//         console.error("Hata Mesajı-3: "+error);//type error veriyor.
//     }finally{
//         console.info("Mecburi çalışacak alan")
//     }
//     console.log("Çalışacak alan");
// }
// tryChatchTutorials();
//MONAD FUNCTİON
// let birinci=(number)=>{
//     number=number**2;// like Math.pow(number,2)
//     return number;
// }
// let ikinci=()=>{
//     let number = Number(promt("lütfen bir sayı giriniz"));
//     let result=birinci(number);
// }
// //ikinci();

// //CALLBACK FUNCTION(HELL)
// let ucuncu=(number)=>{
//     number=number**2;// like Math.pow(number,2)
//     return number;
// }
// let dorduncu=(callBackFunction)=>{
//     let number1 = Number(prompt("lütfen bir sayı giriniz"));
//     let result=callBackFunction(number1);
//     console.log(result);
// }
// dorduncu(ucuncu);

// let arrayTutorials=()=>{
//     let array=["cg",02,true,3.24];
//     console.log(typeof array);
//     console.log(array.length);
//     console.log(array[2]);
//     console.log(array[array.length-1]);
//     console.log(array);
//     array.push(16);
//     console.log("16 push sonrası: "+array);
//     array.pop();
//     console.log("pop sonrası: "+array);
//     array.shift();
//     console.log("sort: küçükten büyüge sıralama
//     array.sort();
//     console.log("shift sonrası: "+array);
//     array.unshift(55);
//     console.log("unshift sonrası: "+array);
//     array.reverse();
//     console.log("reverse sonrası tersine sıraya dizer: "+array);
//     array.sort().reverse();
//     console.log("array.sort().reverse(); büyükten küçüğe sıralar: "+array);
//     array.unshift(55);
//     console.log("unshift sonrası: "+array);
// }
//arrayTutorials();
//////////////////////////////////////////////////////
// let arrayDataSet=()=>{
//     let numberData=[];
//     for(let i=1;i<=5;i++){
//         numberData[i]=Math.floor(Math.random()*9+1);
//     }
//     return numberData;
// }
// console.log("1-\n***********************");
// let arrayTutorials2 =function(){
//     //console.log(arrayDataSet());
//     let array=arrayDataSet();
//     for(let i=0;i<array.length;i++){
// console.log(array[i]);
//     }
//     console.log("2-\n**********************");
//     for(let temp in array){//dizi elemanın indis bilgisini verir
//         console.log(temp+"=>"+array[temp]);
//         console.log(`${temp}=>${array[temp]}`);// bir üst satırla aymı şeyi yapar yeni bir özellik
//     }
//     console.log("3-\n***********************");
//     for(let temp of array){//dizi elemanın kendisini verir
//         console.log(temp);

       
//     }
// }
// // Escape Character(\)
// console.log("\n4-***********************");
// //arrayTutorials2();
// // ForEach with Anonymous Function
// //forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// let array=arrayDataSet();
// array.forEach(function(value,index,array){
// console.log(`${index}=>${value}`)
// console.log(array);
// });
// console.log("*****************************");
// // ForEach Arrow Function
// //forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// array.forEach((value,index,array)=>{
// console.log(`${index}=>${value}`)
// console.log(array);
// });
// //////////////////////////////////////////
// let arrayTutorials3= function(){
//         let array=arrayDataSet();
//         array.sort();
//         //split
//         let textExample="Bu-gün günlerden pazartesi";
//         let result0=array.toString().split(" ");
//         console.log(`split: ${result0}`);
//         let resultSplit=textExample.split("--");
//         console.log(`resultSplit: ${resultSplit}`);

//         // toString 
//         let result1=array.toString().substring(1,5);
//         console.log(result1);
//         // join
//         //join(separator?: string): string; istenilen apıyı string'e çevirir ve araya isteğimiz sayı veya karakteri ekler
//         let result2=array.join("--");
//         console.log(`join=> ${result2}`);
        
//         //slice
//         //slice(start?: number, end?: number): T[]; belirtilen aralıktaki elemanları döndürür
//         let result3=array.slice(0,3);
//         console.log(`slice 0,3: => ${result3}`);
//         console.log(`splice öncesi 0,3: => ${result3}`);
//         let result4=array.splice();
//         console.log(`splice 0,3: => ${result4}`);}
//         //arrayTutorials3();
// ///////////////////////////////////////////////////////
// console.log("************************");
// //forEach(döngü)
// //forEach(callbackfn:(value: T,index:number,array:T[]))
//         let arrayTutorials5=function(){
//             let array=arrayDataSet();

//             array.forEach((value,index,array)=>{
//                 console.log(`${index}=>${value}`);
//             });
// //filter
// //filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
// console.log("*******Filter******");
// let data = array.filter((value,index,array)=>{
//     //console.log(`${index}=>${value}`);
//     return value%2==0;
// }).forEach((value,index,array)=>{
//     console.log(`${index}=>${value}`);
// });

// //map
// //map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
// console.log("*******MAP*******");
// let mapData=array.map((value,index,array)=>{
//     return Math.pow(value,2);
// }).forEach((value,index,array)=>{
//     console.log(`${index}=>${value}`);
// });
// //fill
// //fill(value: T, start?: number, end?: number): this;
// console.log("*******fill*******");
// let fillData=array.fill(3,1,3);
// console.log(fillData);
// }
// arrayTutorials5();



// //ÖDEV: verilen metnin boşluklardan arındırılması
//    let spaceDelete=()=>{
//    let text=String(prompt("Lütfen metin giriniz..."))   
//    var result="";
//    var space=0,counter=0;
//     for(let i=0;i<=text.length;i++){
//         if(text.charAt(i)==" "){
//             result=result.concat(text.slice(space,i));
//             space=i+1;
//         }  
//     }
//     result=result.concat(text.slice(space,text.length)); 
//     console.log(`Result: ${result}`);  
// }
// spaceDelete();
///////////////////////////////////////////////////////////7
// let data1=(number)=>{
// let result=Math.abs(number);
// alert(result);
// }
// let data2=(callbackfnc)=>{
//     let number=Number(prompt("Lütfen bir sayı giriniz"));
//     callbackfnc(number);
// }
// data2(data1);

///////////////////////////////////////////////////////
//setInterval
//setInterval(callbackfnc(),ms)
let customer1=()=>{
    setInterval(function(){
    alert("customer1");
   },2000);
}   
let customer2=()=>{alert("customer2");}

customer1();
customer2();


      