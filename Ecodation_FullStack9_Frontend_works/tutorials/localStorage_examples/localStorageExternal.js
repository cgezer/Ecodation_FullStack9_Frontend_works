const submitButton=(event)=>{
    //event.preventDefault();
    // JAVASCRIPT
    let emailData=document.getElementById("email_data").value;
    //console.log(emailData);
    // localStorage
    let localStorageSetEmail=localStorage.setItem("email",emailData);
    console.log(localStorage);
    let localStorageGetEmail=localStorage.getItem("email");
    console.log(localStorageGetEmail);
////////////////////////////////////////////////////////////////////////
    //JQUERY
    //jQuery.trim() ile input'da başta ve sonda yazılan boşlukları alır
    //ya da $.trim() şeklinde de yazılabilir aynı işlemi yapar
    let passwordData=jQuery.trim($("#password_data").val());
   //console.log(passwordData);
 // localStorage
 let localStorageSetPassword=localStorage.setItem("password",passwordData);
 console.log(localStorage);
 let localStorageGetPassword=localStorage.getItem("password");
 console.log(localStorageGetPassword);

   
}