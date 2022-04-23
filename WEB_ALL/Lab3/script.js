
function validateForm()
{
    var teamName=document.forms["myForm"]["tname"].value;
    var stationName=document.forms["myForm"]["station"].value;

    var phoneNumber=document.forms["myForm"]["phone"].value;
    var money=document.forms["myForm"]["money"].value;
    var teamPlayer=document.forms["myForm"]["team-player"].value;

    var email=document.forms["myForm"]["email"].value;


    if (teamName==null || teamName=="")
      {
      alert("Имя команды должно быть обязательно введено");
      return false;
      }


    else if (isNaN(phoneNumber)){
    	alert("Введите корректное значение в поле \"Телефон\"");
      	return false;
    }

    else if (email.slice(-10)!="@email.com" || email.lenght<13){
    	alert("Введите корректное значение в поле \"Email\"");
      	return false;

    }
    else if (isNaN(money)){
    	alert("Введите корректное значение в поле \"Цена не более чем\" ");
      	return false;
    }
    else if (isNaN(teamPlayer)){
    	alert("Введите корректное значение в поле \"Количество членов команды\" ");
      	return false;
    }
    else if (stationName==null || stationName=="")
      {
      alert("Станция должно быть обязательно введено");
      return false;
      }

    else if (document.getElementById("age1").checked==false && document.getElementById("age2").checked==false && document.getElementById("age3").checked==false && document.getElementById("age4").checked==false){
      alert("Вы должны выбрать возрастную категорию");
      return false;
    }
     else if (document.getElementById("age1").checked==false && document.getElementById("age2").checked==false && document.getElementById("age3").checked==false && document.getElementById("age4").checked==false){
      alert("Вы должны выбрать возрастную категорию");
      return false;
    }
     else if (document.getElementById("type1").checked==false && document.getElementById("type2").checked==false && document.getElementById("type3").checked==false && document.getElementById("type4").checked==false){
      alert("Вы должны выбрать тип игры");
      return false;
    }


}
