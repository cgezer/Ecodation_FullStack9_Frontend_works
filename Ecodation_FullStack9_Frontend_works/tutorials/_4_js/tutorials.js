alert("alert denemesi");
console.log("consol dene;mesi")
console.error("consol eror denemesi");
console.warn("warn denemesi");
console.info("info denemesi");
alert("Pop-up");
window.alert("Pop-up denemesi window");
document.writeln("<br/>"+"ekran çıktısı için Document.write");
document.writeln(" `` back ticks");
var numberdata=33;
var numberdata=3;
let numberdata1=13;

const numberdata2=23;
numberdata1=21;
console.log(numberdata1);
var sayı=numberdata;
let data=true;
let datastr="selam";
console.log(typeof data);
console.log(typeof datastr);

let num1=12, num2=32;

console.log("num1+num2="+num1+num2);
console.log("num1+num2="+(num1+num2));

let deneme=["Ankara","Adıyaman","Malatya","Mersin"];
console.log(deneme instanceof Array);
console.log(deneme instanceof Object);
console.log(deneme instanceof Number);
console.log(deneme instanceof String);
let userData=prompt("Lütfen birşeyler yazınız...");
console.log(userData);
document.writeln("<br/>"+userData);
alert(userData);
let typeCast=String(12089);
console.log("type is:"+typeof typeCast);
let example=Number(prompt("lütfen bir sayı giriniz."));
console.log("example:"+example);
let numberSqr=Number(prompt("Hangi sayının kare kökünü öğrenmek istiyorsunuz..."));
alert(numberSqr+"'un karekökü="+Math.sqrt(numberSqr));
console.log("3/3="+3/3);
console.log("0/3="+0/3);
console.log("3/0="+3/0);
//Math(Mutlak Değer)
console.log(Math.min(12,90,23,54,9,-21));
console.log(Math.max(12,90,23,54,9,-21));
console.log(Math.ceil(8.2));
console.log(Math.floor(8.2));
console.log(Math.round(6.4));
console.log(Math.round(6.5));
console.log(Math.abs(-12));
console.log(Math.sqrt(Math.abs(-25)));
console.log(Math.pow(3,Math.sqrt(Math.abs(-25))));
console.log(Maht.floor(Math.random()*9+1));//1<=x<=9