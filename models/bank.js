const bank={
    "Services":[
        //every object that has display keyword will be responsibe to hide and show on css
        //column tracker :search object that has property name equal as column_track
        //question number it will help as to search question on array of question.js
        //Service name,will help us to display services as button
        {service_name:"Account infos",question_number:"1",column_track:"Account_number",firstname_display:"block",lastname_display:"block",account_display:"block",balance_display:"block"},
        {service_name:"Account balance",question_number:"2",column_track:"Account_number",firstname_display:"none",lastname_display:"none",account_display:"none",balance_display:"block"},

    ],
    "Account":[
        {first_name:'kayiranga',lastname:'Eric',Account_number:'1224566',balance:'45000'},
        {first_name:'peza',lastname:'siyabonga',Account_number:'144456',balance:'4900'},
        {first_name:'busile',lastname:'vusi',Account_number:'4566009',balance:'45000'},
    ],
    "support":[
        {admin:'Kayiranga',phone:'0782389359'}
    ]
 };
 module.exports=bank;

