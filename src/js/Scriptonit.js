if (confirm("хочешь заказать у меня сайт и узнать на него цену?")) {
	let array = [];
	function aboba() {
		let adapt = prompt("для чего тебе надо адаптировать сайт? 1 - Только ПК, 2 - Только мобильный телефон, 3 - ПК+Мобильный телефон");
		console.log(adapt);
		if(adapt==1){
			price+=2500;
			array.unshift(1);
			alert("Спасибо, что обратился именно ко мне, я тебя не подведу ;)");
			confirm("вот твоя конечная цена: "+ price + " рублей.");		
		}
		else if(adapt==2){
			price+=3350;
			array.unshift(2);
			alert("Спасибо, что обратился именно ко мне, я тебя не подведу ;)");
			confirm("вот твоя конечная цена: "+ price + " рублей.");
		}
		else if(adapt==3){
			price+=1000;
			array.unshift(3);
			alert("Спасибо, что обратился именно ко мне, я тебя не подведу ;)");
			confirm("вот твоя конечная цена: "+ price + " рублей.");
		}
		else{
			alert("Я тебя не понимаю, что ты от меня хочешь, попробуй определиться и выбрать еще раз");
		}
	}
	function amogus() {
		
		let disine = prompt("Какой дизайн ты хочешь получить? 1 - Шаблонный, 2 - Уникальный, 3 - WOW-дизайн");
		console.log(disine);
		let two = 0;
		if(disine==1){
			price+=2200;
			aboba();
			array.unshift(1);
		}
		else if(disine==2){
			price+=1000;
			aboba();
			array.unshift(2);
		}
		else if(disine==3){
			price+=3000;
			aboba();
			array.unshift(3);
		}
		else{
			alert("Я тебя не понимаю, что ты от меня хочешь, попробуй определиться и выбрать еще раз");
		}
	}
	let type = prompt("Kакой тип сайта ты хочешь? 1 - Сайт-визитка, 2 - Корпоротивный сайт, 3 - Интернет-магазин");
	console.log(type);
	let price = 0;
	if(type==1){
		price+=1500;
		amogus();
		array.unshift(1);
		console.log(array);
	}
	else if(type==2){
		price+=2000;
		amogus();
		array.unshift(2);
			console.log(array);
	}
	else if(type==3){
		price+=1000;
		amogus();
		array.unshift(3);
			console.log(array);
	}
	else{
		alert("Я тебя не понимаю, что ты от меня хочешь, попробуй определиться и выбрать еще раз");
	}
}
