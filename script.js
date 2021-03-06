var windowWidth;


$(document).ready(function(){

	$('.the-sun').click(function(){
		$('#current-planet').addClass('earth');
		$('.name').html('The Sun');
		$('.description').html("The Sun is the star at the center of the Solar System. It is by far the most important source of energy for life on Earth. The Sun is a nearly perfect spherical ball of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. The diameter of the Sun is about 109 times that of Earth, and it has a mass about 330,000 times that of Earth, accounting for about 99.86% of the total mass of the Solar System. Chemically, about three quarters of the Sun's mass consists of hydrogen, whereas the rest is mostly helium, and much smaller quantities of heavier elements, including oxygen, carbon, neon and iron");
		$('.earth').css({'background':'url(images/sun.png)'});
		$('#info-window').css({'display':'block'});
	});
	$('.planet-mercury').click(function(){
		$('#current-planet').addClass('earth');
		$('.name').html('Mercury');
		$('.description').html("Mercury is the smallest and closest to the Sun of the eight planets in the Solar System, with an orbital period of about 88 Earth days. Seen from Earth, it appears to move around its orbit in about 116 days, which is much faster than any other planet in the Solar System. It has no known natural satellites. The planet is named after the Roman deity Mercury, the messenger to the gods.");
		$('.earth').css({'background':'url(images/mercury.png)'});
		$('#info-window').css({'display':'block'});
	});
	$('.planet-venus').click(function(){
		$('#current-planet').addClass('earth');
		$('.name').html('Venus');
		$('.description').html("Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has no natural satellite. It is named after the Roman goddess of love and beauty. After the Moon, it is the brightest natural object in the night sky, reaching an apparent magnitude of −4.6, bright enough to cast shadows. Because Venus is an inferior planet from Earth, it never appears to venture far from the Sun: its elongation reaches a maximum of 47.8°.");
		$('.earth').css({'background':'url(images/venus.png)'});
		$('#info-window').css({'display':'block'});
	});
	$('.planet-earth').click(function(){
		$('#current-planet').addClass('earth');
		$('.name').html('Earth');
		$('.description').html("Earth, also called the world and, less frequently, Gaia (and Terra in some works of science fiction) is the third planet from the Sun, the densest planet in the Solar System, the largest of the Solar System's four terrestrial planets, and the only astronomical object known to accommodate life. The earliest life on Earth arose at least 3.5 billion years ago. Earth's biodiversity has expanded continually except when interrupted by mass extinctions. Although scholars estimate that over 99 percent of all species that ever lived on the planet are extinct, Earth is currently home to 10–14 million species of life, including over 7.2 billion humans who depend upon its biosphere and minerals. Earth's human population is divided among about two hundred sovereign states which interact through diplomacy, conflict, travel, trade and communication media.");
		$('.earth').css({'background':'url(images/earth.png)'});
		$('#info-window').css({'display':'block'});
	});
	$('.planet-mars').click(function(){
		$('#current-planet').addClass('earth');
		$('.name').html('Mars');
		$('.description').html("Mars is the fourth planet from the Sun and the second smallest planet in the Solar System, after Mercury. Named after the Roman god of war, it is often referred to as the 'Red Planet' because the iron oxide prevalent on its surface gives it a reddish appearance. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the volcanoes, valleys, deserts, and polar ice caps of Earth. The rotational period and seasonal cycles of Mars are likewise similar to those of Earth, as is the tilt that produces the seasons. Mars is the site of Olympus Mons, the second highest known mountain within the Solar System (the tallest on a planet), and of Valles Marineris, one of the largest canyons. The smooth Borealis basin in the northern hemisphere covers 40% of the planet and may be a giant impact feature.");
		$('.earth').css({'background':'url(images/mars.png)'});
		$('#info-window').css({'display':'block'});
	});
	$('.planet-jupiter').click(function(){
		$('#current-planet').addClass('earth');
		$('.name').html('Jupiter');
		$('.description').html("Jupiter is the fifth planet from the Sun and the largest planet in the Solar System. It is a giant planet with a mass one-thousandth of that of the Sun, but is two and a half times that of all the other planets in the Solar System combined. Jupiter is a gas giant, along with Saturn (Uranus and Neptune are ice giants). Jupiter was known to astronomers of ancient times. The Romans named it after their god Jupiter. When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough to cast shadows, and making it on average the third-brightest object in the night sky after the Moon and Venus. (Mars can briefly match Jupiter's brightness at certain points in its orbit.)");
		$('.earth').css({'background':'url(images/jupiter.png)'});
		$('#info-window').css({'display':'block'});
	});
	$('.planet-saturn').click(function(){
		$('#current-planet').addClass('earth');
		$('.name').html('Saturn');
		$('.description').html("Saturn is the sixth planet from the Sun and the second largest planet in the Solar System, after Jupiter. Named after the Roman god of agriculture, its astronomical symbol (♄) represents the god's sickle. Saturn is a gas giant with an average radius about nine times that of Earth. Although only one-eighth the average density of Earth, with its larger volume Saturn is just over 95 times more massive.");
		$('.earth').css({'background':'url(images/saturn.png)'});
		$('#info-window').css({'display':'block'});
	});
	$('.planet-uranus').click(function(){
		$('#current-planet').addClass('earth');
		$('.name').html('Uranus');
		$('.description').html("Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn. Therefore, astronomers increasingly place them in a separate category called 'ice giants'. Uranus's atmosphere, although similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, contains more 'ices', such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224.2 °C), and has a complex, layered cloud structure, with water thought to make up the lowest clouds, and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock.");
		$('.earth').css({'background':'url(images/uranus.png)'});
		$('#info-window').css({'display':'block'});
	});
	$('.planet-neptune').click(function(){
		$('#current-planet').addClass('earth');
		$('.name').html('Neptune');
		$('.description').html("Neptune is the eighth and farthest planet from the Sun in the Solar System. It is the fourth-largest planet by diameter and the third-largest by mass. Among the gaseous planets in the Solar System, Neptune is the most dense. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth, and not as dense as Neptune. Neptune orbits the Sun at an average distance of 30.1 astronomical units. Named after the Roman god of the sea, its astronomical symbol is ♆, a stylised version of the god Neptune's trident.");
		$('.earth').css({'background':'url(images/neptune.png)'});
		$('#info-window').css({'display':'block'});
	});


	$('#info-window').click(function(){
			$('#info-window').scrollTop(0).fadeOut(1000);
	});
	// planet dropdown exit toggle
	$('.click-here').click(function(){
		$('.list').slideToggle();
	});

	$('.header').click(function(){
		$('.list').slideToggle();
	});

	var $zoom = 0;
	$('.zoom-control').click(
    function() {
    	if($zoom === 0){
    		$('#container').animate({ 'zoom': 0.4 }, 1000);
    		$zoom = 1;
    	}else{
    		$('#container').animate({ 'zoom': 1 }, 1000);
    		$zoom = 0;
    	}
        
    });

    $('#container').animate({ 'zoom': 0.01 }, 0);
    $('.interactive-text').animate({ 'zoom': 0.01 }, 0);

    windowWidth = $(window).width();

});

function startSystem(){
	$('#container, .interactive-text').css({'display': 'block'});
	if(windowWidth < 1000){
		$('.interactive-text').hide().animate({ 'zoom': 1 }, 0).fadeIn(2000).delay(1000).fadeOut();
		$('#container').hide().animate({ 'zoom': 1 }, 0).delay(3000).fadeIn(2000);
		$('.instructions').delay(5000).fadeIn(2000).delay(2000).fadeOut(1000);
	}else{
		$('.interactive-text').animate({ 'zoom': 1 }, 2000);
		$('#container').delay(3000).animate({ 'zoom': 1 }, 5000);
		$('.interactive-text').delay(1000).animate({ 'zoom': 10 }, 2000, function(){
		$('.interactive-text').hide();
		$('.instructions').delay(5000).fadeIn(2000).delay(2000).fadeOut(1000);
	});
	}
}

window.onresize = function(event) {
};

$(window).load(function(){
	startSystem();
});

