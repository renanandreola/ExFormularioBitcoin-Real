
//Serviço JSON: https://www.mercadobitcoin.net/api/BTC/ticker/

//var numberReal = $("#real").val();
//var numberBiticoin = $("#biticoin").val();
//var value = $("#value").val();
//var result = $("#result");

//function submit(event) {
//    event.preventDefualt()
//    var valor = $("#value").val().replace(/[^\d]+/g,'');
//    var result = 0;

//    //{"ticker": {"high":"43000.00000000","low":"41500.00000000","vol":"167.62755762","last":"42303.26000000","buy":"42217.05003000","sell":"42300.00000000","date":1566787255}}

//    var valueJSON = $.getJSON("https://www.mercadobitcoin.net/api/BTC/ticker/", function(data) {
//        if (numberReal && value >= 0) {
//            result = valor

//        }else if (numberBiticoin && value >= 0) {
//             result = numberBiticoin*data.ticker.buy;
//        }else {
//            alert("ERRO")
//        }
//        $("#result").html(result.toLocaleString());
//    });
//}



$("#bitcoin").submit(function(event) {
	event.preventDefault();
  	var value = $("#value").val().replace(/[^\d]+/g,'');
    if (value === "") {
      $(".alert").alert('close');
    }
  	var valueJSON = $.getJSON("https://www.mercadobitcoin.net/api/BTC/ticker/", function(data) {

	  	if ($("#biticoin").prop("checked") === true) {
              result = '₿ ' + value*data.ticker.buy;
	  	}else {
               result = 'R$ ' + value;
	  	}
	  	$("#result").html(result.toLocaleString());
  	});
 });
