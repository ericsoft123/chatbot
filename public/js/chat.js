
$(function(){
    
//var arraydata=[ 'first_name', 'lastname', 'Account_number', 'balance' ];






});

function input_message(){//this describe input field
var message_input=$('.message_input').val();

$('.messages').append(`<li class="message right appeared"><div class="avatar"></div><div class="text_wrapper">
           <div class="text">${message_input}</div></div></li> `);
           $('.message_input').val("");//empty text after submit
           var messageid=$('#messageid').val();
           setTimeout(function(){ 
           
               if(messageid==='2'){//just to track user type first sms
                greeting();// started random message
               }
               else{
                Account(message_input);//pass message value to Account route
               }
          
 }, 2000);

         

return false;
}

function greeting(){
    //start user  greeting then bot reply randomly
    $.ajax({
url:"/greeting",
type:"get",

success:function(data){


$('.messages').append(` <li class="message left appeared"><div class="avatar">
    </div><div class="text_wrapper"><div class="text">${data}</div></div></li>
`);
$('#messageid').val(0);
//call table hotel data

setTimeout(function(){ 
    message();
 }, 1500);


}

});

    //start user  greeting then bot reply randomly
}

function message(){
//check message
var messageid=$('#messageid').val();
$.ajax({
url:`/question/${messageid}`,
type:"get",

success:function(data){


$('.messages').append(` <li class="message left appeared"><div class="avatar">
    </div><div class="text_wrapper"><div class="text">${data}</div></div></li>
`);
//call table hotel data

getservice();


}

});

//
}



function getservice(){
//start code get services
$.ajax({
url:`/services`,
type:"get",
dataType: 'json',

success:function(data){
//console.log(data);

//now json variable contains data in json format
//let's display a few items
// $('.btn-wrapper').append(element.service_name);

$.each(data, function(index, element) {
// firstname_display:"block",lastname_display:"block",account_display:"block",balance_display:"block"},
$('.btn-wrapper').append(`<div class="btn"
 onclick="return button_message(${element.question_number}
 ,'${element.column_track}'
 ,'${element.firstname_display}'
 ,'${element.lastname_display}'
 ,'${element.account_display}','${element.balance_display}','${element.service_name}')">${element.service_name}</div><span>&nbsp;</spa>`);
//(data.service_name);

});
$('.message_wrapper').hide();

//call table hotel data




}

});

//start code get services
}
function button_message(question_number,column_track,firstname_display,lastname_display,account_display,balance_display,service_name){//this will help as to scale our app,and make it dynamic without using more code
messageid=question_number;
//alert(column_track);
$('.btn-wrapper').hide();
$('.messages').append(`<li class="message right appeared"><div class="avatar"></div><div class="text_wrapper">
        <div class="text">${service_name}</div></div></li> `);

$.ajax({
url:`/question/${messageid}`,
type:"get",

success:function(data){


setTimeout(function(){ 
   //

   
$('.messages').append(`<li class="message left appeared"><div class="avatar"></div><div class="text_wrapper">
        <div class="text">${data}</div></div></li> `);
//call table hotel data
$('#options').val(column_track);
$('#question_number').val(question_number);


$(".messages").animate({ scrollTop: $('.messages').prop("scrollHeight")}, 1000);

var servicedata = {//this is to save those services in object

"column_track":column_track,
"firstname_display":firstname_display,
"lastname_display":lastname_display,
"account_display":account_display,
"balance_display":balance_display,
"service_name":service_name,

}; 

//

//then save those object to localstorage on browser to be able to access it every where;

localStorage.setItem('service_localstorage',JSON.stringify(servicedata));

$('.message_wrapper').show();


   //
 }, 2000);






}

});

return false;
}



function Account(message_input){



var options =$('#options').val();
$.ajax({
url:`/account/${message_input}/${options}`,//is to send account input value,and parameters options to check in your bank
type:"get",

success:function(data){

if(data.message!='1'){
// return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);

$(".messages").animate({ scrollTop: $('.messages').prop("scrollHeight")}, 1000);//animate and make div scrollable to down
// {"first_name":"kayiranga","lastname":"Eric","Account_number":"1224566","balance":"45000"}
 
   //call table hotel data
  // getbalance(data);


  getaccountdata(data);
  /* var question_number=$('#question_number').val();
   if(question_number==='1'){
    getbalance(data);
   }
   else{
    getAccountInfos();
   }*/
  
   $('.message_wrapper').show();

}
else{
alert(`" ${message_input} doesn't exist please try again"`); 
}

}

});
}

function getaccountdata(data){
  // console.log(data);
  var data_localstorage=JSON.parse(localStorage.getItem('service_localstorage'));
$('.messages').append(`<li class="message left appeared"><div class="avatar"></div><div class="text_wrapper">
           <div class="text">
            <p>Dear ${data.first_name} ${data.lastname} Your ${data_localstorage.service_name}</p>
            <ul>
                <div><li style="display:${data_localstorage.firstname_display}">First Name:${data.first_name}</li><div>
            <div><li style="display:${data_localstorage.lastname_display}">Last Name:${data.lastname}</li><div>
            <div><li style="display:${data_localstorage.account_display}">Account Number:${data.Account_number}</li><div>
            <div><li style="display:${data_localstorage.balance_display}">Account Balance:R ${data.balance}</li><div>
            
            </ul></div></div></li> `);
}


