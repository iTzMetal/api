const URL = 'http://192.168.56.101/api/resource/Employee?fields=["employee_name","cell_number","emergency_phone_number"]'; //'https://api.thecatapi.com/v1/images/search';
//const cors = require("cors");

//app.use(cors({
//    origin: "http://localhost:3000"
//}));

fetch(URL,
    {
	    method:'GET',
	    headers:{
		    'Authorization' : 'token 7cfe99a1d71c975:331ba53591b9010',
	    },
        //mode: 'no-cors',
        //cache: 'default'
    })
    
    .then(res => res.json())
    .then(data => {
        console.log(data.data);
        
        llenarTabla(data.data);
    });


function searchPage() {

    var _txtSearch = $("#search").val();
    
    var _url_search = 'http://192.168.56.101/api/resource/Employee?fields=["employee_name","date_of_birth"]&filters=[["employee_name","like","%'+_txtSearch+'%"]]';

    fetch(_url_search,
        {
            method:'GET',
            headers:{
                'Authorization' : 'token 7cfe99a1d71c975:331ba53591b9010'
            },
            //mode: 'no-cors',
            //cache: 'default'
        })
        .then(res => res.json())
        .then(data => {
            llenarTabla(data.data);
        });

    //
    
}

function llenarTabla(_data) {
    $("#tblData").empty("");

    var _tblStr = "";
    _tblStr += " <thead>";
    _tblStr += "    <tr>";
    _tblStr += "        <th>Nombre de Colaborador</th>";
    _tblStr += "        <th>Teléfono Ext.</th>";
    _tblStr += "    </tr>";
    _tblStr += " </thead>";
    _tblStr += "     <tbody>";

    for (var i = 0; i < _data.length; i++) {
        _tblStr += "    <tr>";
        _tblStr += "        <td>" + _data[i].employee_name + "</td>";
        _tblStr += "        <td>" + _data[i].cell_number + "</td>";
        _tblStr += "    </tr>";
    }
    _tblStr += "  </tbody>";

    $("#tblData").html(_tblStr);
}