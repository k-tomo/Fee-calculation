
function calc(f){
	var discount;
	var skind;
	var pkind;
	var area;
	var sum;
	var result;

	for(var i = 0;i < f.discount.length;i++){
		if(f.discount[i].checked){
			discount=parseInt(f.discount[i].value);
			break;
		}
	}

	for(var i = 0;i < f.skind.length;i++){
		if(f.skind[i].checked){
			skind=parseInt(f.skind[i].value);
			break;
		}
	}

	for(var i = 0;i < f.pkind.length;i++){
		if(f.pkind[i].checked){
			pkind=parseInt(f.pkind[i].value);
			break;
		}
	}

	for(var i = 0;i < f.area.length;i++){
		if(f.area[i].checked){
			area=f.area[i].value;
			break;
		}
	}

	if(!(isNaN(f.number.value)) && area=="1"){
		sum = (skind + pkind - discount) * f.number.value;

	}else if(!(isNaN(f.number.value)) && area=="2"){
		sum = (skind + pkind * 2 - discount * 2) * f.number.value;
	}else{

	}
	result = document.getElementById('result');
	result.innerHTML = sum;


}
