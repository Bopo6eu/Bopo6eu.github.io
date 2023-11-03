$(document).ready(function(){
    $("#inputTel").mask("+7(999) 999-9999");
    $('form').submit(function(event){
        if ($("#inputTel").val == "" || $("#inputEmail").val == ""){
            event.preventDefault();
            alert("Не оставляйте поле пустым!!")
        }
    })
	//new WOW().init();
	$(window).scroll(() =>{
		let scrollDistance = $(window).scrollTop();
		$(".section").each((i, el)=>{
			if($(el).offset().top - $('nav').outerHeight() <= scrollDistance){
				$("nav a").each((i, el) =>{
					if($(el).hasClass('active')){
						$(el).removeClass('active');
					}
				});
				$('nav li:eq('+ i +')').find('a').addClass('active')
			}
		});
	});
	function calculate(){
        let sum = parseInt($("#list1 option:selected").val()) + parseInt($("#list2 option:selected").val()) + parseInt($("#list3 option:selected").val());
        let days = parseInt($("#list1 option:selected").attr("days")) + parseInt($("#list2 option:selected").attr("days")) + parseInt($("#list3 option:selected").attr("days"));
        $(".days .digit").text(days);
        $(".money .digit").text(sum);
    }
    $("select").on("change", function(){
        calculate();
    });
    
    calculate();
    var show = true;
    var countbox = ".numbers";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.numbers').css('opacity', '1');
            $('.numbers').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
             
            show = false;
        }
    });
    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.img');
    elements.each((i,el) =>{
    	observer.observe(el);
    });
    setTimeout(function(){ 
    	modalwin = document.getElementById('modal-content');
    	modalwin.style.display="block"; 
    	document.getElementById("modal-close").addEventListener("click", function(){
        	modalwin.style.display="none";            
    	});
	}, 10000);
});
function onEntry(entry){
	entry.forEach(change => {
		if (change.isIntersecting){
			change.target.classList.add('.img');
			change.target.src = change.target.dataset.src;
		}
	});
}
$('a[href^="#"]').click(function() {
	let valHref = $(this).attr("href");
	$('html,body').animate({srollTop: $(valHref).offset().top - 60 + "px"});
});