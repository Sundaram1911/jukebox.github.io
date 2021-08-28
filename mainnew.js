$('.back').on("scroll", function () {
    reveal();
});

window.onload = function(){
	$('#loader-wrapper').fadeOut();
	//love_mood
	art_song(175,0),art_song(158,1),art_song(157,2),art_song(156,3),art_song(155,4),
	art_song(141,5),art_song(137,6),art_song(135,7),art_song(134,8),art_song(128,9),
	art_song(129,10),art_song(120,11);
	//party_mood
	art_song(131,12),art_song(132,13),art_song(138,14),art_song(142,15),art_song(148,16),
	art_song(150,17),art_song(159,18),art_song(160,19),art_song(161,20),art_song(163,21),
	art_song(177,22),art_song(93,23);
	//workout mood
	art_song(3,24),
	art_song(209,25),art_song(22,26),art_song(23,27),art_song(27,28),art_song(28,29);
	//top charts song
		
}


function reveal(){
	var reveals = document.querySelectorAll('.reveal');
	for(var i=0;i < reveals.length; i++){
		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 150;
		if (revealtop < windowheight - revealpoint){
				reveals[i].classList.add('active');
		}
		else{
			reveals[i].classList.remove('active');
		}
	}
}
//$(document).ready(function(){
	//$('#magic').fadeIn('slow',function(){
		//$('#magic').delay(500).fadeOut();
	//});
//});



// Select all the elements in the HTML page 
// and assign them to a variable 
let now_playing = document.querySelector(".now-playing"); 
let track_art = document.querySelector(".track-art"); 
let track_art1=document.querySelector(".track-art1");
let track_name = document.querySelector(".track-name"); 
let track_artist = document.querySelector(".track-artist"); 

let playpause_btn = document.querySelector(".playpause-track"); 
let next_btn = document.querySelector(".next-track"); 
let prev_btn = document.querySelector(".prev-track"); 

let seek_slider = document.querySelector(".seek_slider"); 
let volume_slider = document.querySelector(".volume_slider"); 
let curr_time = document.querySelector(".current-time"); 
let total_duration = document.querySelector(".total-duration"); 

let song_img = document.querySelector('.song_img');
let song_name = document.querySelector('.song_name');
let song_artist = document.querySelector('.song_artist');
let lis = document.querySelector('.lis');
// Specify globally used values
let isPlaying = false; 
let updateTimer; 
let track_index = 0;
// Create the audio element for the player 
let curr_track = document.createElement('audio'); 


//artist deatils 

// Define the list of tracks that have to be played 
let track_list = [
{  
	name: "Lahore",  //0
	artist: "Guru Randhawa", 
	image: "block/Lahore.jpg", 
	path: "https://sklktcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/437/a5bf59099a04ed7c10681a1aabfa5ea2_96.mp4"
}, 
{ 
	name: "Ishare Tere",  //1
	artist: "Guru Randhawa", 
	image: "block/a100.jpeg", 
	path: "https://snoidcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/161/2f4d371246f8de0edd0da13f701144df_96.mp4"
}, 
{ 
	name: "Jee Karda", //2
	artist: "Hardy Sandhu", 
	image: "block/a105.jpeg", 
	path: "https://sdlhivkecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/677/aa4794055e399b28019fd5effe210940_160.mp4"
},
{ 
	name: "Kaam 25", //3
	artist: "Divine", 
	image: "block/a101.jpeg", 
	path: "https://sdlhivkecdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/845/86dc1a587904a9bed3967dea5798fcb6_96.mp4"
}, 
{ 
	name: "Tum Hi Ho", //4
	artist: "arijit singh", 
	image: "block/a102.jpeg", 
	path: "https://sgdccdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/430/5c5ea5cc00e3bff45616013226f376fe_96.mp4"
}, 
{ 
	name: "Comethru", //5
	artist: "Zeremy Zuker", 
	image: "block/a103.jpeg", 
	path: "https://sklktcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/279/5d2d6e0ef653b020dff92e990d61a38c_96.mp4"
}, 
{ 
	name: "Cradles", //6
	artist: "Sub Urban", 
	image:"block/a104.jpeg", 
	path: "https://sgdccdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/585/428da9aee0c873925a05229122211257_160.mp4"
}, 
{ 
	name: "Farak", //7
	artist: "Divine", 
	image: "block/farak.jpg", 
	path: "https://sgdccdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/506/af593bfa6973572bdd7b6af4bd964a05_96.mp4"
}, 
{ 
	name: "Made In India", //8
	artist: "Guru Randhawa", 
	image:"block/madeinindia.jpg", 
	path: "https://sklktcdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/887/17cf96163c2cb8a7bd5072cd7566a3da_160.mp4"
},
{ 
	name: "Closer", //9
	artist: "Hesley", 
	image:"block/closer.jpg", 
	path: "https://sklktecdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/147/88201a8381e13cd6a9399f4bbfc5b7e9_160.mp4"
},
{ 
	name: "Bedardi Se Pyar Ka", //10
	artist: "Jubin Nautiyal", 
	image:"https://c.saavncdn.com/105/Bedardi-Se-Pyaar-Ka-Hindi-2021-20210608051001-500x500.jpg", 
	path: "https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/105/275ed393f3856eb36e43fa4249e580d1_160.mp4"
},
{ 
	name: "Ve Maahi", //11
	artist: "Arijit Singh", 
	image:"block/kesari.jpg", 
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/693/b2a7b5ebe6c8f3e864c531bb0b292b5e_160.mp4"
},
{ 
	name: "High Rated Gabru", //12
	artist: "Guru Randhawa", 
	image:"block/gabru.jpg", 
	path: "https://sdlhivkecdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/344/4e7a96829b1ab444247a2a8db16673a8_160.mp4" 
},
{ 
	name: "Mera Wala Dance", //13
	artist: "Nakash Aziz", 
	image:"block/mera.jpg", 
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/616/905b0b3a40bd0b695c61c203a49c64b4_160.mp4"
},
{ 
	name: "She Move It Like", //14
	artist: "Badshah", 
	image:"block/one.jpg", 
	path: "https://sdlhivkcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/155/b1bb163beec608758c11027b15eb19c4_96.mp4"
},
{ 
	name: "Heartless", //15
	artist: "Badshah", 
	image:"block/heartless.jpg", 
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/792/34b637a24b5c802abbd02e69556ae747_96.mp4"
},
{ 
	name: "Dholida", //16
	artist: "Udit Narayan", 
	image:"block/dholida.jpg", 
	path: "https://snoidcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/401/f877ecb847c6241474952b0cda3eafda_160.mp4"
},
{ 
	name: "Pehla Pyaar", //17
	artist: "Arman Malik", 
	image:"https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20190614075009-500x500.jpg", 
	path: "https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/807/c25bd9ec3f8d8701f7ccad29d3494f37_160.mp4" 
},
{ 
	name: "Bom Diggy Diggy", //18
	artist: "Jack Knight & Jasmin Walia", 
	image:"block/bom.jpg", 
	path: "https://sgdccdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/240/2aadba62ec424782c9a3434a21b70639_160.mp4" 
},
{ 
	name: "Kya Baat Hai", //19
	artist: "Hardy Sandhu", 
	image:"block/kyabaat.jpg", 
	path: "https://sdlhivkcdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/706/0b0b41c3585fb565b06078d6e2b89406_160.mp4"
},
{ 
	name: "Asli Hiphop", //20
	artist: "Ranveer Singh", 
	image:"block/gully.jpg", 
	path: "https://snoidcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/512/ba6ed5eed84af862c599055f1ad2ad44_160.mp4"
},
{ 
	name: "Shape Of You", //21
	artist: "Ed Sheeran", 
	image:"block/shape.jpg", 
	path: "https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/126/da7cde34b008294e181842062530546d_160.mp4" 
}, 
//divine songs 
{ 
	name: "One Side", //22
	artist: "Divine", 
	image:"block/oneside.jpg", 
	path: "https://sdlhivkecdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/842/0ca3e2ccc2934315898f929abe1e2a7d_160.mp4", 
},
{ 
	name: "Satya", //23
	artist: "Divine", 
	image:"block/punya.jpeg", 
	path: "https://snoidcdnems08.cdnsrv.jio.com/jiosaavn.cdn.jio.com/715/b212af6f67100ce6494f807cb2cb0bca_160.mp4", 
},
{ 
	name: "Disco Rap", //24
	artist: "Divine", 
	image:"block/punya.jpeg", 
	path: "https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/715/af7c8dbc9d5db08f3458bfbca4689df1_160.mp4", 
},
{ 
	name: "Rider", //25
	artist: "Divine", 
	image:"block/punya.jpeg", 
	path: "https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/715/9ccf7851c1100fe75030b04b5d655796_160.mp4", 
},
{ 
	name: "3:59", //26
	artist: "Divine", 
	image:"block/punya.jpeg", 
	path: "https://sgdccdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/715/f35278c96e2631a6c78a21ae32707e56_160.mp4", 
},
{ 
	name: "Holy", //27
	artist: "Justin Bieber", 
	image:"https://c.saavncdn.com/998/Holy-English-2020-20200918093946-500x500.jpg", 
	path: "https://sdlhivkcdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/998/c7ec5194e011d87a330a0a5606ab0955_160.mp4", 
},
{ 
	name: "Teesri Manzil", //28
	artist: "Divine", 
	image:"block/punya.jpeg", 
	path: "https://snoidcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/607/094082e3d3531697360d74877a9eef77_160.mp4", 
},
{ 
	name: "City Slums", //29
	artist: "Divine", 
	image:"block/cityslum.jpg", 
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/666/2fc2f2df9f67f62ec9786ad4cf539e42_160.mp4", 
},
{ 
	name: "Tujhe Kitna Chahne Lage", //30
	artist: "Arijit Singh,Mithoon", 
	image:"https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20190614075009-500x500.jpg", 
	path: "https://snoidcdnems08.cdnsrv.jio.com/jiosaavn.cdn.jio.com/807/45c3bc39c23cf7c6909bb83468e5fa66_160.mp4", 
},
{ 
	name: "Punya Paap", //31
	artist: "Divine", 
	image:"block/punya.jpeg", 
	path: "https://sdlhivkecdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/926/baf240abdf3307c1a8c366977084a6fb_160.mp4", 
},
{ 
	name: "Legends", //32
	artist: "Divine", 
	image:"block/punya.jpeg", 
	path: "https://sklktcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/164/3db503e87e2891be176b2f9d709279d4_160.mp4", 
},
{ 
	name: "Aankh Marey", //33
	artist: "Mika Singh", 
	image:"block/aankh.jpg", 
	path: "https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/453/2d344918899a1606ef658be8189daaeb_160.mp4", 
},
{ 
	name: "No Compition", //34
	artist: "Jass Manak", 
	image:"block/nocom.jpg", 
	path: "https://sdlhivkecdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/679/d4a5ad9eb35145c7695c2c9eafde2807_96.mp4", 
},
{ 
	name: "Tera Mera Viah", //35
	artist: "Jass Manak", 
	image:"block/terameraviah.webp", 
	path: "https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/153/6f6c8c169609f2cd6d5d3d77b3a8ee30_96.mp4", 
},
{ 
	name: "Morni Banke", //36
	artist: "Guru Randhawa", 
	image:"block/mornibanke.jpg", 
	path: "https://snoidcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/494/5d45970dd1a935686f61cd15d52bb9d0_160.mp4", 
},
{ 
	name: "Ban Meri Rani", //37
	artist: "Guru Randhawa", 
	image:"block/banjarani.jpg", 
	path: "https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/962/4f670f3162684440b24682ac20636aaf_160.mp4", 
},
{ 
	name: "Believer", //38
	artist: "Imagine Dragons", 
	image:"block/believer.jpg", 
	path: "https://sklktcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/248/a6b1b78b396245f712abda8f1daefee0_160.mp4", 
},
{ 
	name: "Kaise Huaa", //39
	artist: "Vishal Mishra", 
	image:"block/soneya.jpg", 
	path: "https://snoidcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/807/9def501f3878ec28bbe740520ae48edc_160.mp4", 
},
{  
	name: "Kala Chashma", //40
	artist: "Amar Arshi, Badshah, Neha Kakkar", 
	image:"block/barbardekho.jpg", 
	path: "https://sklktecdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/279/ac760f157a9cf82a96ac1440b01bdf18_160.mp4", 
},
{ 
	name: "Nehu Da Vhya", //41
	artist: "Rohanpreet, Neha Kakkar", 
	image:"block/nehudavyah.jpg", 
	path: "https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/921/0bde30c887423e7d926b6f3edf66eefe_160.mp4", 
},
{ 
	name: "Alone", //42
	artist: "Allen Walker", 
	image:"https://c.saavncdn.com/522/Alone-English-2017-20180131085202-500x500.jpg", 
	path: "https://snoidcdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/522/cc62bd3e274e8d8b1a54c27c70ada512_160.mp4", 
},
{ 
	name: "Teri Aankhon Me", //43
	artist: "Darshan Raval", 
	image:"https://c.saavncdn.com/099/Teri-Aankhon-Mein-Hindi-2020-20201007061000-500x500.jpg", 
	path: "https://sgdccdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/099/8de95cb53e1dcad466edcd3ce69669fa_160.mp4", 
},
{ 
	name: "Is Qadar", //44
	artist: "Darshan Raval", 
	image:"https://c.saavncdn.com/349/Is-Qadar-Hindi-2021-20210408051001-500x500.jpg", 
	path: "https://sdlhivkecdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/349/e4f2ff8ff6de2204fa2cb1d816b8da75_160.mp4", 
},
{ 
	name: "Memories", //45
	artist: "Maroon", 
	image:"block/memories.jpg", 
	path: "https://sklktecdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/816/3e180f55162047561f893f1b4dd95ce2_96.mp4", 
},
{ 
	name: "Mere Soneya", //46
	artist: "Arijit Singh", 
	image:"block/soneya1.jpg", 
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/807/0cfc797daf91dff5f53bdf09b6465ee4_96.mp4", 
},
{ 
	name: "Dil Chori", //47
	artist: "Yo Yo Honey Singh", 
	image:"block/sonu.jpg", 
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/136/855223f12c622ce0edf6cba160c73fae_160.mp4", 
},
{ 
	name: "Pehli Mohabbat", //48
	artist: "Darshan Raval", 
	image:"block/pehli.jpg", 
	path: "https://sklktecdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/999/eaecc6332fbf5b9d63e6544fac505e07_96.mp4", 
},
{ 
	name: "Patola", //49
	artist: "Guru Randhawa", 
	image:"block/patola.jpg", 
	path: "https://snoidcdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/180/ee3ee781659207810bacd7fc37ef5549_96.mp4", 
},
{ 
	name: "Chogada Tara", //50  //darshan raval
	artist: "Darshan Raval", 
	image:"block/loveyatri.jpg", 
	path: "https://snoidcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/401/9c69465db7c1ba1fc1d6264199cb7d03_160.mp4", 
},
{ 
	name: "Bhula Dunga", //51
	artist: "Darshan Raval", 
	image:"block/bhuladunga.jpg", 
	path: "https://sdlhivkecdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/581/ebfc98246a2cc02a00db6271967a25b2_160.mp4", 
},
{ 
	name: "Hawa Banke", //52
	artist: "Darshan Raval", 
	image:"block/hawa.jpg", 
	path: "https://sklktecdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/751/0f95a1efad8027d16f31a4a4598b9f4c_96.mp4", 
},
{ 
	name: "Vilayati Sharaab", //53
	artist: "Darshan Raval,Neeti Mohan", 
	image:"https://c.saavncdn.com/030/Vilayati-Sharaab-Hindi-2021-20210317141052-500x500.jpg", 
	path: "https://sdlhivkcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/030/dbdbc910ca4c455088aac4a6d4482283_160.mp4", 
},
{ 
	name: "Do Din", //54
	artist: "Darshan Raval", 
	image:"block/dodin.jpg", 
	path: "https://sgdccdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/049/d2a68f783bb3a35b826d0442935e9a5c_160.mp4", 
},
{ 
	name: "Barish Lete Aana", //55
	artist: "Darshan Raval", 
	image:"block/barishleteaana.jpg", 
	path: "https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/030/69e55a54a02f0ffd98e637eddcbce0b4_96.mp4", 
},
{ 
	name: "Tera Zikr", //56
	artist: "Darshan Raval", 
	image:"block/terazikr.jpg", 
	path: "https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/820/3d732a9092272f172cd6a25cab3244d6_96.mp4", 
},

//eminem songs
{ 
	name: "Not Afraid", //57
	artist: "Eminem", 
	image:"block/notafraid.jpg", 
	path: "https://sklktecdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/985/812326607359bbf694cd6fb94302f5e0_160.mp4", 
},
{ 
	name: "River Ft. Ed Sheeran", //58
	artist: "Eminem", 
	image:"block/river.jpg", 
	path: "https://sklktecdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/201/74c6ec27388b994d7f7e32e7f70e6c70_160.mp4", 
},
{ 
	name: "No Love", //59
	artist: "Eminem", 
	image:"block/nolove.jpg", 
	path: "https://snoidcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/527/ad35c510a1fe3bb70aa1d4f14ef9d128_160.mp4", 
},
{ 
	name: "Killer", //60
	artist: "Eminem", 
	image:"block/killer.jpg", 
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/178/ae7407039f48d5df6bacc7f11d39ef34_160.mp4", 
},
{ 
	name: "Black Magic", //61
	artist: "Eminem", 
	image:"block/blackmagin.jpg", 
	path: "https://sklktcdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/636/38a475cc7bcf0427ccfe4fbe59074b5e_160.mp4", 
},
{ 
	name: "Rap God", //62
	artist: "Eminem", 
	image:"block/rapgod.jpg", 
	path: "https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/321/87f5368237d4de3aecdd8f0e3a8cb510_160.mp4", 
},
{ 
	name: "Space Bound", //63
	artist: "Eminem", 
	image:"block/spacebound.jpg", 
	path: "https://snoidcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/527/07fa58d03b8af46593dcfc20211f2c6f_160.mp4", 
},
{ 
	name: "Godzilla", //64
	artist: "Eminem", 
	image:"block/godzilla.jpg", 
	path: "https://snoidcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/830/e17defe16f9e3eda8895f83cb4676ab5_160.mp4", 
},
{ 
	name: "Stuck With You", //65
	artist: "Justin Bieber,Arena Grande", 
	image:"https://c.saavncdn.com/307/Stuck-with-U-English-2020-20200508041707-500x500.jpg", 
	path: "https://sgdccdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/307/d683b3b75b1b38d43288ba585ea46082_160.mp4", 
},
{ 
	name: "Surma", //66
	artist: "Guru Randhawa", 
	image:"block/surma.jpg", 
	path: "https://sdlhivkecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/971/656b81a2482cd9eb6ce04e3f7448983e_160.mp4", 
},
//akull songs
{ 
	name: "Bahana", //67
	artist: "Akull", 
	image:"block/bahana.jpg", 
	path: "https://snoidcdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/478/2fdea60f110a372e39d8018f981fcfaa_96.mp4", 
},
{ 
	name: "I Love You", //68
	artist: "Akull", 
	image:"block/iloveyou.jpg", 
	path: "https://sdlhivkcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/562/b6e9c3407bd999779731063febcc1509_96.mp4", 
},
{ 
	name: "Laal Bindi", //69
	artist: "Akull", 
	image:"block/laalbindi.jpg", 
	path: "https://sdlhivkcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/863/80c9ba98ec9509f7f04f0bb84b90ea14_160.mp4", 
},
{ 
	name: "Laal Chunariya", //70
	artist: "Akull", 
	image:"block/laal.jpg", 
	path: "https://snoidcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/268/dc9f89606ddb6c6168d5fae93de83e24_96.mp4", 
},
{ 
	name: "Faraar", //71
	artist: "Akull", 
	image:"block/faraar.jpg", 
	path: "https://sklktecdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/660/b83d7145197a326be76035a1e0adee98_160.mp4", 
},
//hardy sandhu songs
{ 
	name: "Naah Goriye", //72
	artist: "Hardy Sandhu", 
	image:"block/naah.jpg", 
	path: "https://snoidcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/634/12880c54200607ae79be60ce6876af0b_96.mp4", 
},
{ 
	name: "Kya Baat Ay", //73
	artist: "Hardy Sandhu", 
	image:"block/kyabaat.jpg", 
	path: "https://sdlhivkcdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/706/0b0b41c3585fb565b06078d6e2b89406_160.mp4", 
},
{ 
	name: "Dance Like", //74
	artist: "Hardy Sandhu", 
	image:"block/dancelike.jpg", 
	path: "https://sklktecdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/850/a2db8bb1e498e0663bdda219135b2cfe_96.mp4", 
},
{ 
	name: "Yaar Superstar", //75
	artist: "Hardy Sandhu", 
	image:"block/yaar.jpg", 
	path: "https://sklktcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/472/c7354761ba48013f50d3a51705a4cab0_160.mp4", 
},
{ 
	name: "Bakebone", //76
	artist: "Hardy Sandhu", 
	image:"block/backbone.jpg", 
	path: "https://sklktecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/828/51c8a9497dbaa053502624085a7e1d4b_96.mp4", 
},
{ 
	name: "Chandighar Me", //77
	artist: "Hardy Sandhu", 
	image:"https://c.saavncdn.com/753/Good-Newwz-Hindi-2019-20191226100303-500x500.jpg", 
	path: "https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/753/d168b0d580054e712ecf00fc86b3a151_160.mp4", 
},
//divine songs
{ 
	name: "Farak", //78
	artist: "Divine", 
	image:"block/farak.jpg", 
	path: "https://snoidcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/506/af593bfa6973572bdd7b6af4bd964a05_160.mp4", 
},
{ 
	name: "Walking Miracle", //79
	artist: "Divine", 
	image:"block/Walking.jpeg", 
	path: "https://snoidcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/715/d1f39ab3bfa1db021b853cbd77b97811_160.mp4", 
},
{ 
	name: "Mirchi", //80
	artist: "Divine", 
	image:"block/mirchi.jpg", 
	path: "https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/874/47b2ff2276462fe9531325da82f0e1e6_160.mp4", 
},
{ 
	name: "Mera Bhai", //81
	artist: "Divine", 
	image:"block/punya.jpeg", 
	path: "https://sgdccdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/858/53ab0aa2a7797e1634a7dc7288b2ae41_160.mp4", 
},
{ 
	name: "Remand", //82
	artist: "Divine", 
	image:"block/punya.jpeg", 
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/943/9d83a776998cd66db67cae6dd7f36573_160.mp4", 
},
{ 
	name: "Barish Ban Jana", //83
	artist: "Stebin Ben,Payal Dev", 
	image:"https://c.saavncdn.com/347/Baarish-Ban-Jaana-Hindi-2021-20210601053345-500x500.jpg", 
	path: "https://snoidcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/347/57c5400e920d5e949c36ec69042d8733_160.mp4", 
},
{ 
	name: "Laare", //84
	artist: "Maninder Buttar", 
	image:"block/laare.jpg", 
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/136/855223f12c622ce0edf6cba160c73fae_160.mp4", 
},
{ 
	name: "Ishq Tera", //85
	artist:"Guru Randhawa", 
	image:"block/ishqtera.jpg", 
	path: "https://sdlhivkecdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/181/b093bfd81a06d6f82ceaef82d9ff9843_96.mp4", 
},
{ 
	name: "Slowly Slowly", //86
	artist: "Guru Randhawa", 
	image:"block/slowly.jpg", 
	path: "https://snoidcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/945/bb424ef17c9ca73763e1a10c96bcddb5_160.mp4", 
},
{ 
	name: "Namo Namo", //87
	artist: "Amit Mishra", 
	image:"https://c.saavncdn.com/367/Kedarnath-Hindi-2019-20190219-500x500.jpg", 
	path: "https://snoidcdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/367/c5de371dc840f6fd7d55d8b1fecefa0c_96.mp4", 
},
{ 
	name: "Monster", //88
	artist: "Justin Bieber,Shawn Mendes", 
	image:"https://c.saavncdn.com/362/Monster-English-2020-20201120104411-500x500.jpg", 
	path: " https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/362/3081f777bbbc44273d8348cb75979f62_160.mp4", 
},
{ 
	name: "Intension", //89
	artist: "Justin Bieber", 
	image:"https://c.saavncdn.com/818/Changes-English-2020-20200214135638-500x500.jpg", 
	path: "https://snoidcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/818/c8792bcb476db59cf7a4c2120bfccb01_160.mp4", 
},
{ 
	name: "Prada", //90
	artist: "Jass Manak", 
	image:"block/prada.jpg", 
	path: "https://sdlhivkcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/522/8176775480541e3ecaa7fc4e38595e3e_160.mp4", 
},
{ 
	name: "On My Way", //91
	artist: "Allen Walker", 
	image:"block/onmyway.webp",
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/866/7e3a01418e755de4f0c9baee5febf6ad_160.mp4", 
},
{ 
	name: "3 peg", //92
	artist: "Sharry Mann", 
	image: "https://a10.gaanacdn.com/images/albums/10/1833610/crop_175x175_1833610.jpg" , 
	path: "https://sklktcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/213/55cf22737aef21861e0f7129ff805d40_160.mp4"
},
{ 
	name: "Baarish Ki Jaaye", //93
	artist: "B  Praak", 
	image: "https://c.saavncdn.com/691/Baarish-Ki-Jaaye-Hindi-2021-20210325181900-500x500.jpg" , 
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/691/35a4f45faf5e9c0f4075ce3f3ef63dc7_96.mp4"
},
{ 
	name: "We Dont Talk", //94
	artist: "Charlie", 
	image: "https://c.saavncdn.com/660/We-Don-t-Talk-Anymore-feat-Selena-Gomez-Mr-Collipark-Remix-English-2016-500x500.jpg" , 
	path: "https://sdlhivkcdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/850/5952fccb5414a98de39f08303164f6df_160.mp4"
},
{ 
	name: "Death Bed", //95
	artist: "Powfu", 
	image: "https://c.saavncdn.com/180/death-bed-English-2020-20200228133600-500x500.jpg" , 
	path: "https://sklktcdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/140/6bc9e5c1f7e9b2e64b4928d424d4cbdd_160.mp4"
},
{ 
	name: "ill come", //96
	artist: "Powfu", 
	image: "https://c.saavncdn.com/140/poems-of-the-past-English-2020-20200618075916-500x500.jpg" , 
	path: "https://sgdccdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/140/45e127464c410bf1b2ba4bc375870a6d_160.mp4"
},
{ 
	name: "Every Thing", //97
	artist: "Leeka", 
	image: "https://c.saavncdn.com/065/Everything-At-Once-2013-150x150.jpg" , 
	path: "https://sdlhivkecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/065/5e06e4502fe07551b53a6caf37e0c74f_160.mp4"
},
{ 
	name: "Ek Raat", //98
	artist: "Villen", 
	image: "https://c.saavncdn.com/509/Ek-Raat-Hindi-2018-20180209-500x500.jpg" , 
	path: "https://snoidcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/509/c2d3ce73f09d3149156ea616e8489062_160.mp4"
},
{ 
	name: "Humnava Mere", //99
	artist: "Jubin Nautiyal", 
	image: "https://c.saavncdn.com/259/Humnava-Mere-Hindi-2018-20180522-150x150.jpg" , 
	path: "https://sdlhivkecdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/259/d2fdab66c38d8f252427da927db4cf4b_160.mp4"
},
{ 
	name: "Titliyaan", //100
	artist: "Titliyaan", 
	image: "https://c.saavncdn.com/887/Titliaan-Punjabi-2020-20201107053501-500x500.jpg" , 
	path: "https://snoidcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/887/a9ac75cf1159375c3a39cf23981f206f_160.mp4"
},
{ 
	name: "Machayenge-3", //101
	artist: "Emiway", 
	image: " https://c.saavncdn.com/954/Machayenge-3-Hindi-2021-20210505144120-150x150.jpg",
	path: "https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/954/6756dc436df83974f91b98b7d94927e1_160.mp4"
},
{ 
	name: "Jingle-Bell", //102
	artist: "Honey Singh", 
	image: "//c.saavncdn.com/920/Jingle-Bell-Hindi-2020-20201226024123-500x500.jpg  ",
	path: "https://sklktecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/920/bc7bb6e427de9c49fcb69e2054460980_160.mp4"
},
{ 
	name: "Dynamite", //103
	artist: "BTS", 
	image: "https://c.saavncdn.com/918/Dynamite-Daytime-Version--English-2020-20200916220042-500x500.jpg",
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/918/237cd1b455f3f03c6908d8c2f8faa5bc_160.mp4"
},
{ 
	name: "Peaches", //104
	artist: "Justin Bieber", 
	image: "https://c.saavncdn.com/983/Justice-English-2021-20210325102906-500x500.jpg",
	path: "https://sdlhivkcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/983/01100b84f61ca8b3a0432f12c564be8e_160.mp4"
},
{ 
	name: "Vibez", //105
	artist: "Zyan Malik", 
	image: "https://c.saavncdn.com/257/Vibez-English-2021-20210106225626-500x500.jpg",
	path: "https://sklktcdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/257/5f929252d0465fc571035e24592d402d_160.mp4"
},
{ 
	name: "Let Me Down", //106
	artist: "Alec Benjamin", 
	image: "https://c.saavncdn.com/681/Let-Me-Down-Slowly-English-2018-20180524060056-500x500.jpg",
	path: "https://snoidcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/681/c43b26ef7cddd54690fba5888a44c9cf_160.mp4"
},
{ 
	name: "Bang Bang", //107
	artist: "Benny Dayal,Neeti Mohan", 
	image: "https://c.saavncdn.com/169/Bang-Bang-Hindi-2014-20201005203831-500x500.jpg",
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/169/78aecb4a5cd13bae3297cf8a001ae8a6_160.mp4"
},
{ 
	name: "Please Dont Go", //108
	artist: "Joel Adams", 
	image: "https://c.saavncdn.com/923/Please-Don-t-Go-English-2015-500x500.jpg",
	path: " https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/923/9acc6cc72cff6adc191b270f591f48c1_160.mp4"
},
{ 
	name: "Umbrella", //109
	artist: "Ember Island", 
	image: "https://c.saavncdn.com/432/Umbrella-The-White-Panda-Remix--English-2017-20170824104552-150x150.jpg",
	path: "https://sklktecdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/344/0157e9477d60b1374539043cd64b011b_160.mp4"
},
{ 
	name: "Sugar And Brownies", //110
	artist: "Dharia", 
	image: "https://c.saavncdn.com/059/Sugar-Brownies-English-2019-20190326005637-500x500.jpg",
	path: "https://snoidcdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/059/eb681d882472ed0f8a5996b379f27379_160.mp4"
},
{ 
	name: "Phir Bhi Tumko chahunga", //111
	artist: "Arijit Singh", 
	image: "https://c.saavncdn.com/441/Half-Girlfriend-Hindi-2017-20180622-150x150.jpg",
	path: "https://sdlhivkecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/441/5be788f75761b20e5dbcecdd3069a1c4_160.mp4"
},
{ 
	name: "Sanam Re", //112
	artist: "Arijit Singh,Mithoon", 
	image: "https://c.saavncdn.com/829/Sanam-Re-Hindi-2015-150x150.jpg",
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/829/60f214aa16aadb4de15be6db3e962232_160.mp4"
},
{ 
	name: "Soch Na Sake", //113
	artist: "Arijit Singh,Tulsi Kumar", 
	image: "https://c.saavncdn.com/451/Airlift-Hindi-2015-150x150.jpg",
	path: "https://sklktecdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/026/335ea6a63ec7a32bd0403ae809a1ab36_160.mp4"
},
{ 
	name: "Kaise Huaa", //114
	artist: "Vishal Mishra", 
	image: "https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20190614075009-500x500.jpg",
	path: "https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/807/9def501f3878ec28bbe740520ae48edc_160.mp4"
},
{ 
	name: "Shayad", //115
	artist: "Arijit Singh", 
	image: "https://c.saavncdn.com/862/Love-Aaj-Kal-Hindi-2020-20200214140423-500x500.jpg",
	path: "https://snoidcdnems08.cdnsrv.jio.com/jiosaavn.cdn.jio.com/862/e277c1b441b562640c6b264aa3335a83_160.mp4"
},
{ 
	name: "Ghungroo", //116
	artist: "Arijit Singh,Shilpa Rao", 
	image: "https://c.saavncdn.com/881/War-Hindi-2019-20191001104931-500x500.jpg",
	path: "https://sdlhivkcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/881/604fb2ba41aac81b5db565fcbf4fca9b_160.mp4"
},
{ 
	name: "Abhi To Party Shuru Hui Hai", //117
	artist: "Badshah", 
	image: "https://c.saavncdn.com/666/Khoobsurat-Hindi-2014-500x500.jpg",
	path: "https://sklktecdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/666/114f4b83eedf5b119ebefc4b0ad0e759_160.mp4"
},
{ 
	name: "Tu Jo Mila-Raabta", //118
	artist: "Jubin Nautiyal,Shirley", 
	image: "https://c.saavncdn.com/258/T-Series-Mixtape-Hindi-2017-20170818102253-500x500.jpg",
	path: "https://sklktecdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/258/26534e0c7c7385c58fb0c82146eafb58_160.mp4"
},
{ 
	name: "Bol Do Na-Main Agar Kahoon", //119
	artist: "Arman Malik,Jonita Gandhi", 
	image: "https://c.saavncdn.com/258/T-Series-Mixtape-Hindi-2017-20170818102253-150x150.jpg",
	path: "https://snoidcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/258/1c5bab1c9fd56196487e83dcbbe370d0_160.mp4"
},
{ 
	name: "Kabira Naina", //120
	artist: "Mithoon,NEha Kakkar", 
	image: "https://c.saavncdn.com/258/T-Series-Mixtape-Hindi-2017-20170818102253-150x150.jpg",
	path: "https://sdlhivkecdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/258/3994d28cce37bc14cc8eb377031f5e74_160.mp4"
},
{ 
	name: "Kar Maidan Fhateh", //121
	artist: " Shreya Ghoshal, Sukhwinder Singh", 
	image: "https://c.saavncdn.com/319/Sanju-Hindi-2018-20180629-500x500.jpg",
	path: "https://sklktcdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/319/d3527e7086440a3948677ae0fd591c04_96.mp4"
},
{ 
	name: "Doori", //122
	artist: "Ranveer Singh", 
	image: "https://c.saavncdn.com/512/Gully-Boy-Hindi-2019-20190225175507-500x500.jpg",
	path: "https://snoidcdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/512/7cc17b2caf3894167a5e0a4a43a195e9_160.mp4"
},
{ 
	name: "Sher Aaya Sher", //123
	artist: " DIVINE, Major C", 
	image: "https://c.saavncdn.com/512/Gully-Boy-Hindi-2019-20190225175507-500x500.jpg",
	path: "https://sdlhivkcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/512/392bf8a2ca162bb61f6ba08fa8bd932a_96.mp4"
},
{ 
	name: "Dangal", //124
	artist: " Daler Mehndi", 
	image: "https://c.saavncdn.com/480/Dangal-Hindi-2016-20200116120806-500x500.jpg",
	path: "https://sdlhivkecdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/480/dec8a44e725e68c682962df67e7909dc_96.mp4"
},
{ 
	name: "Parinda", //125
	artist: "Arman Malik", 
	image: "https://c.saavncdn.com/323/Saina-Hindi-2021-20210326161001-500x500.jpg",
	path: "https://sgdccdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/813/edcc28f682e805d5aa32129fb432bfa8_96.mp4"
},
{ 
	name: "Le Chalang", //126
	artist: "Daler Mehndi", 
	image: "https://c.saavncdn.com/621/Le-Chhalaang-From-Chhalaang--Hindi-2020-20201105111001-500x500.jpg",
	path: "https://sklktcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/621/559372c9de7cb6ecb9a14342bbf520da_96.mp4"
},
{ 
	name: "Nayan", //127
	artist: "Dhvani Bhanushali", 
	image: "https://c.saavncdn.com/769/Nayan-Hindi-2020-20201208051000-500x500.jpg",
	path: "https://snoidcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/769/b72ecd3754ffc47a4cb521a61bb86e4a_160.mp4"
},
{ 
	name: "Tera Ban Jaunga", //128
	artist: "Akhil Sachdeva,Tulsi Kumar", 
	image: "https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20190614075009-500x500.jpg",
	path: "https://sklktcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/807/d79d6dea5ab2f70e15cd37c7480d848c_160.mp4"
},
{ 
	name: "Bekhayali", //129
	artist: "Arijit Singh", 
	image: "https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20190614075009-500x500.jpg",
	path: "https://sklktcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/807/f1e8642d89c0719ae566459394935a22_160.mp4"
},
{ 
	name: "Kabira", //130
	artist: "Jubin Nautiyal", 
	image: "https://c.saavncdn.com/341/Kabira-Hindi-2021-20210603031001-500x500.jpg",
	path: "https://sklktcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/341/2f6923c42d68d05b01ee8a4392ce668c_160.mp4"
},
{ 
	name: "Sawan Me Lag Gayi Aag", //131
	artist: "Payal Dev,Neha Kakkar", 
	image: "https://c.saavncdn.com/802/Ginny-Weds-Sunny-Hindi-2020-20201002143353-500x500.jpg",
	path: "https://snoidcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/802/88cc6596ede448b1c6cbbbead98c3684_160.mp4"
},
{ 
	name: "Haan Main Galat", //132
	artist: "Shashwat Singh,Pritam", 
	image: "https://c.saavncdn.com/205/Haan-Main-Galat-From-Love-Aaj-Kal--Hindi-2020-20200128113239-500x500.jpg",
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/205/32d8728d6dc9f6ee7e00a3d28c46d4a3_160.mp4"
},
{ 
	name: "Veham", //133
	artist: "Arman Malik", 
	image: "https://c.saavncdn.com/032/Veham-Hindi-2020-20201214051001-500x500.jpg",
	path: "https://sklktecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/032/e0fc99d7d090b0bd2ee43f5ef11e4b7e_160.mp4"
},
{ 
	name: "Kya Kiya Hai Tune", //134
	artist: "Arman Malik,Palak Muchhal", 
	image: "https://c.saavncdn.com/268/Broken-but-Beautiful-Season-3-Hindi-2021-20210603155120-500x500.jpg",
	path: "https://sklktecdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/268/8bbb83d9f7d04e1bcf076f413b0bdef1_160.mp4"
},
{ 
	name: "Bol Do Na Jara", //135
	artist: "Arman Malik", 
	image: "https://c.saavncdn.com/633/Azhar-1-Hindi-2016-500x500.jpg",
	path: "https://snoidcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/633/2fddfdf78b3c810d561b594d15a9456b_160.mp4"
},
{ 
	name: "Jab Tak", //136
	artist: "Arman Malik", 
	image: "https://c.saavncdn.com/569/M-S-Dhoni-The-Untold-Story-3-Hindi-2016-150x150.jpg",
	path: "https://sklktcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/569/007b8edcbbaba8c5e68a71dbc8c04496_160.mp4"
},
{ 
	name: "Sab Tera", //137
	artist: "Arman Malik", 
	image: "https://c.saavncdn.com/454/Baaghi-Hindi-2016-150x150.jpg",
	path: "https://sklktcdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/454/d7f52331560c7b79dae9f0e6b8b0bdd8_160.mp4"
},
{ 
	name: "Sau Aasmaan", //138
	artist: "Arman Malik,Neeti Mohan", 
	image: "https://c.saavncdn.com/279/Baar-Baar-Dekho-Hindi-2016-20181205114400-150x150.jpg",
	path: "https://snoidcdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/279/295984541bc830d75580f2a8f1d80376_160.mp4"
},
{ 
	name: "Besabriyaan", //139
	artist: "Arman Malik", 
	image: "https://c.saavncdn.com/569/M-S-Dhoni-The-Untold-Story-3-Hindi-2016-150x150.jpg",
	path: "https://sgdccdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/569/bd7c23f639f3f509012fc8a642b89138_160.mp4"
},
{ 
	name: "How Many", //140
	artist: "Arman Malik", 
	image: "https://c.saavncdn.com/131/How-Many-English-2020-20201111093940-500x500.jpg",
	path: "https://sklktecdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/131/739884d820d3e83fa515553b87be6000_160.mp4"
},
{ 
	name: "Kaun Tujhe", //141
	artist: "Arman Malik", 
	image: "https://c.saavncdn.com/443/Kaun-Tujhe-Armaan-Malik-Version-Hindi-2017-500x500.jpg",
	path: "https://sklktecdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/443/5ec384ac5d754bc184ec166926019976_160.mp4"
},
{ 
	name: "Shape Of You", //142
	artist: "Ed Sheeran", 
	image: "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg",
	path: "https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/126/da7cde34b008294e181842062530546d_160.mp4"
},
{ 
	name: "Perfect", //143
	artist: "Ed Sheeran", 
	image: "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg",
	path: "https://sgdccdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/286/71bb6cc3391ddf619a4a3f1a1134f1c4_160.mp4"
},
{ 
	name: "Afterglow", //144
	artist: "Ed Sheeran", 
	image: "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg",
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/828/e7af267261177a96ae97ad08adebf629_160.mp4"
},
{ 
	name: "Happier", //145
	artist: "Ed Sheeran", 
	image: "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg",
	path: "https://sdlhivkecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/286/1f1e72e0d96ca82ac4f9b2439032ed6c_160.mp4"
},
{ 
	name: "Photograph", //146
	artist: "Ed Sheeran", 
	image: "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg",
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/835/2d0cf8c83a9f3b900ac214e21d07badc_160.mp4"
},
{ 
	name: "Wolves", //147
	artist: "Selena Gomez", 
	image: "https://c.saavncdn.com/404/Wolves-English-2017-20171025165934-500x500.jpg",
	path: "https://sdlhivkecdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/404/244795898c441ae61ca596d0a7bdb568_160.mp4"
},
{ 
	name: "Feel Me", //148
	artist: "Selena Gomez", 
	image: "https://c.saavncdn.com/519/Feel-Me-English-2020-20200220231001-500x500.jpg",
	path: "https://sdlhivkecdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/519/1f298d8fe86a0ab87e9d2fc02476cd36_160.mp4"
},
{ 
	name: "Anyone", //149
	artist: "Justin Bieber", 
	image: "https://c.saavncdn.com/953/Anyone-English-2021-20210101103354-500x500.jpg",
	path: "https://sdlhivkcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/953/f45bbe579cf4a0b2a38f02f57af4e40e_160.mp4"
},
{ 
	name: "Baby", //150
	artist: "Justin Bieber", 
	image: "https://c.saavncdn.com/728/My-World-2-0-English-2010-20200606003742-500x500.jpg",
	path: "https://sdlhivkecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/728/94485509c750427c19faa074404292c8_160.mp4"
},
{ 
	name: "Yummy", //151
	artist: "Justin Bieber", 
	image: "https://c.saavncdn.com/522/Yummy-English-2020-20200103035142-500x500.jpg",
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/522/91418fe99e4edafa08a1a874fadf40a5_160.mp4"
},
{ 
	name: "Khulke Jeene Ka", //152
	artist: "Arijit Singh,A.R.Rahman", 
	image: "https://c.saavncdn.com/870/Dil-Bechara-Hindi-2020-20200709070438-500x500.jpg",
	path: "https://sdlhivkecdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/870/fb54067c62d43a48ba62e1a6d3f543bd_160.mp4"
},
{ 
	name: "Kabira", //153
	artist: "Pritam,Tochi Raina", 
	image: "https://c.saavncdn.com/440/Yeh-Jawaani-Hai-Deewani-2013-500x500.jpg",
	path: "https://sdlhivkecdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/440/664097ba2ddb94e9a8c9e9527b3010ec_160.mp4"
},
{ 
	name: "Jaise Mera Tu", //154
	artist: "Arijit Singh,PRiya Saraiya", 
	image: "https://c.saavncdn.com/769/Happy-Ending-Hindi-2014-500x500.jpg",
	path: "https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/769/33c04bef3ee80a264bf37f2c3f27533d_160.mp4"
},
{ 
	name: "Pachtaoge", //155
	artist: "Arijit Singh", 
	image: "https://c.saavncdn.com/200/Pachtaoge-From-Jaani-Ve--Hindi-2019-20190823024539-500x500.jpg",
	path: "https://snoidcdnems08.cdnsrv.jio.com/jiosaavn.cdn.jio.com/200/35c0c9ddb5ad17460ba1442632fbc271_160.mp4"
},
{ 
	name: "Dekhte Dekhte", //156
	artist: "Atif Aslam", 
	image: "https://c.saavncdn.com/418/Batti-Gul-Meter-Chalu-Hindi-2018-20180908134024-500x500.jpg",
	path: "https://snoidcdnems08.cdnsrv.jio.com/jiosaavn.cdn.jio.com/418/13d86fa0864691badb95898c5a7a5acb_160.mp4"
},
{ 
	name: "Beeghi Beeghi", //157
	artist: "Neha Kakkar,Tony Kakkar", 
	image: "https://c.saavncdn.com/214/Bheegi-Bheegi-Hindi-2020-20200510234001-500x500.jpg",
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/214/545d41f13f2c7246c8c0821b1d4ebaf1_160.mp4"
},
{ 
	name: "Bawra Mann", //158
	artist: "Meet Bros,Vishal Khurana", 
	image: "https://c.saavncdn.com/736/JOLLY-LLB-2-Full-Hindi-2017-500x500.jpg",
	path: "https://sklktcdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/736/9ff5fe8ef7ee0106bc1d8588fa429139_160.mp4"
},
{ 
	name: "Pani Pani", //159
	artist: "Badshah,Aashta Gill", 
	image: "https://c.saavncdn.com/939/Paani-Paani-Hindi-2021-20210603103127-500x500.jpg",
	path: "https://snoidcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/939/d98c15807ade93336347506235540752_160.mp4"
},
{ 
	name: "Top Tucker", //160
	artist: "Badshah", 
	image: "https://c.saavncdn.com/970/Top-Tucker-Hindi-2021-20210208161410-500x500.jpg",
	path: "https://sklktcdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/970/fb82ce3cab8089dda8a4a0fd52da5338_160.mp4"
},
{ 
	name: "Dheeme Dheeme", //161
	artist: "Neha Kakkar,Tony Kakkar", 
	image: "https://c.saavncdn.com/026/Pati-Patni-Aur-Woh-Hindi-2020-20200114134020-500x500.jpg",
	path: "https://sklktecdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/026/a1a799b0de9c6c437007c63fc04732c1_160.mp4"
},
{ 
	name: "Beats", //162
	artist: "Alomax", 
	image: "https://c.saavncdn.com/991/Beats-English-2016-500x500.jpg",
	path: "https://sdlhivkecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/991/62e4c97150274b587390ad293f9b6a92_160.mp4"
},
{ 
	name: "Playdate", //163
	artist: "Ashley Price", 
	image: "https://c.saavncdn.com/883/Play-Date-English-2021-20210409015428-500x500.jpg",
	path: "https://sklktecdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/883/8671dd9f9587f5c94358baccda3e8b00_160.mp4"
},
{ 
	name: "Senorita", //164
	artist: "Shawan Mendes", 
	image: "https://c.saavncdn.com/624/Se-orita-English-2019-20190822022326-500x500.jpg",
	path: "https://sgdccdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/624/08f3aeb374b4b6d641c47a0400b52db2_160.mp4"
},
{ 
	name: "Let Me Love You", //165
	artist: "DJ Snake", 
	image: "https://a10.gaanacdn.com/images/albums/75/1734375/crop_175x175_1734375.jpg",
	path: "https://sdlhivkecdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/273/d1912077904b928c57eeb27b4b61d068_160.mp4"
},
{ 
	name: "Cheap Thrills", //166
	artist: "Sia", 
	image: "https://c.saavncdn.com/722/Cheap-Thrills-English-2015-500x500.jpg",
	path: "https://sklktcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/722/7f3218eb23ec7273f73d5317e5083d7e_160.mp4"
},
{ 
	name: "Ignite", //167
	artist: "Alen Walker", 
	image: "https://c.saavncdn.com/014/Ignite-English-2018-20180615143214-500x500.jpg",
	path: "https://sklktcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/014/5a1c76a6977a2aab6e5bfcc1adbe029f_160.mp4"
},
{ 
	name: "Arcade", //168
	artist: "Duncan lawrence", 
	image: "https://c.saavncdn.com/182/Arcade-English-2019-20190306171851-500x500.jpg",
	path: "https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/182/69b5de038fe84a73d61df94fce2a1998_160.mp4"
},
{ 
	name: "Friends", //169
	artist: "Marshmello,Anne Marie", 
	image: "https://c.saavncdn.com/197/FRIENDS-English-2018-20180202150057-500x500.jpg",
	path: "https://snoidcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/197/8cf5928b7396903dfc2f9c89e389ffe4_160.mp4"
},
{ 
	name: "Whatever It Takes", //170
	artist: "Imagine Dragons", 
	image: "https://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.jpg",
	path: "https://snoidcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/248/b9be0dde2787651dfe097a73863037d8_160.mp4"
},
{ 
	name: "Rockboy", //171
	artist: "Sean Paul", 
	image: "https://c.saavncdn.com/040/Singalong-English-2019-20200529113754-500x500.jpg",
	path: "https://sgdccdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/040/8d78d55daacccacaca353247a86d9b3b_160.mp4"
},
{ 
	name: "Naina Da Kya Kasoor", //172
	artist: "Amit Trivedi", 
	image: "https://c.saavncdn.com/237/Andhadhun-Hindi-2018-20181003-150x150.jpg",
	path: "https://sdlhivkecdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/237/be86c6982e274b7d5032510f93568f83_160.mp4"
},
{ 
	name: "Same Beef", //173
	artist: "Bohemia,Sidhu Moose wala ", 
	image: "https://c.saavncdn.com/154/Same-Beef-Punjabi-2019-20190919071247-500x500.jpg",
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/154/d8e13e5a519f8392580616d3931b8adb_160.mp4"
},
{ 
	name: "Sakhiyaan", //174
	artist: "Maninder Buttar", 
	image: "https://c.saavncdn.com/714/Sakhiyaan-Punjabi-2018-20181017164150-500x500.jpg",
	path: "https://sgdccdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/714/37cae7526c2dedf5a66956d993d8f8bc_160.mp4"
},
{ 
	name: "Filhaal", //175
	artist: "B-Praak", 
	image: "https://c.saavncdn.com/972/Filhall-Punjabi-2019-20191108174428-500x500.jpg",
	path: "https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/972/0206f9992772499eb7b0e5013959fd45_160.mp4"
},
{ 
	name: "Qismat", //176
	artist: "Ammy Virk", 
	image: "https://c.saavncdn.com/175/Qismat-Punjabi-2017-500x500.jpg",
	path: "https://snoidcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/175/a1422a0481aa599cf99f21edf578a455_160.mp4"
},
{ 
	name: "Daru Badnam", //177
	artist: "Kamal Khalon,Param Singh", 
	image: "https://c.saavncdn.com/125/Daru-Badnaam-Punjabi-2016-20191010170948-500x500.jpg",
	path: "https://sklktecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/125/7d98b2a0f235f957f236b75372f53a44_160.mp4"
},
{
	name:"So High",//178
	artist:"Sidhu Moose Wala",
	image:"https://c.saavncdn.com/078/So-High-Punjabi-2017-20200528064421-500x500.jpg",
	path: "https://sdlhivkcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/809/457d604a22e36222db1689ec8234a933_160.mp4"
},
{
	name:"Pani Di Gal",//179
	artist:"Maninder Buttar,Asees Kaur",
	image:"https://c.saavncdn.com/724/Jugni-My-First-Album--Punjabi-2021-20210324052941-500x500.jpg",
	path: "https://sklktcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/724/c56cd613a78ee054ebe15426bdd1a929_160.mp4"
},
{
	name:"Yaar Ni Mileya",//180
	artist:"Hardy Sandhu,Jaani",
	image:"https://c.saavncdn.com/640/Yaarr-Ni-Milyaa-Punjabi-2017-500x500.jpg",
	path: "https://sdlhivkecdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/640/7025914f6f13ec8669e7ae7bd1b151ad_160.mp4"
},
{
	name:"Yaar Mod Do",//181
	artist:"Milind Gaba,Guru Randhawa",
	image: "https://c.saavncdn.com/679/Yaar-Mod-Do-Punjabi-2016-500x500.jpg",
	path: "https://sdlhivkcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/679/85407634a8d8b10eaa697ca6da266d27_160.mp4"
},
{
	name:"Thoda Todha Pyar",//182
	artist:"Stebin Ben",
	image: "https://c.saavncdn.com/959/Thoda-Thoda-Pyaar-Hindi-2021-20210212084501-500x500.jpg",
	path: "https://sklktecdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/959/943d9cecfb9ae4c1267ed7ac553e0422_160.mp4"
},
{
	name:"Mai Jis Din Bhula Du",//183
	artist:"Jubin Nautiyal,Tulsi Kumar",
	image: "https://c.saavncdn.com/947/Main-Jis-Din-Bhulaa-Du-Hindi-2021-20210210191001-500x500.jpg",
	path: "https://sdlhivkecdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/947/d4999c6b5ab94f9c47d7f7bf9a8a6775_160.mp4"
},
{
	name:"Lut Gaye",//184
	artist:"Jubin Nautiyal,Tanishk Bagchi",
	image: "https://c.saavncdn.com/706/Lut-Gaye-Feat-Emraan-Hashmi--Hindi-2021-20210217051001-500x500.jpg",
	path: "https://sdlhivkcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/706/b274a96623aded2e6f6cf47581893a30_160.mp4"
},
{
	name:"Number Likh",//185
	artist:"Tony Kakkar",
	image: "https://c.saavncdn.com/225/Number-Likh-Hindi-2021-20210614121018-500x500.jpg",
	path: "https://sdlhivkcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/225/2b70055ef4d7cb85eef60f230a0ddaf7_160.mp4"
},
{
	name:"Zara Zara",//186
	artist:"Stebin Ben",
	image: "https://a10.gaanacdn.com/gn_img/albums/P7m3GvNKqx/m3GvgVj6Kq/size_l_1623915543.webp",
	path: "https://sklktcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/295/f6cb1016e55dac6f51db6655c639cfe7_160.mp4"
},
{
	name:"Qaafirana",//187
	artist:"Arijit Singh",
	image: "https://c.saavncdn.com/367/Kedarnath-Hindi-2019-20190219-500x500.jpg",
	path: "https://sdlhivkecdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/367/26219b47f27fd176cca8cfa9ccd43b99_160.mp4"
},
{
	name:"Rabba Mehar Kari",//188
	artist:"Darshan Raval",
	image: "https://c.saavncdn.com/438/Rabba-Mehar-Kari-Hindi-2021-20210213092052-500x500.jpg",
	path: "https://sklktecdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/438/8c7c6c8606a378473057d93ad238c8c4_160.mp4"
},
{
	name:"Shanti",//189
	artist: "Milind Gaba",
	image:"https://c.saavncdn.com/324/Shanti-Hindi-2021-20210622051001-500x500.jpg",
	path:"https://snoidcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/324/83369ee6aec2727bde0d3ff87697b290_160.mp4"
},
{
	name:"Banjaara",//190
	artist:"Mithoon,Mohammed Irfan",
	image:"https://c.saavncdn.com/151/Ek-Villain-Hindi-2014-500x500.jpg",
	path:"https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/151/d47f0f0edf55c1ec4ea5633b1ff1ba49_160.mp4"
},
{
	name:"Galliyan",//191
	artist:"Ankit Tiwari",
	image:"https://c.saavncdn.com/151/Ek-Villain-Hindi-2014-500x500.jpg",
	path:"https://sklktcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/151/83d9815e1d6129ff644dc9575ef6db7e_160.mp4"
},
{
	name:"Baarish",//192
	artist:"Mohammed Irfan",
	image:"https://c.saavncdn.com/503/Yaariyan-Hindi-2013-500x500.jpg",
	path:"https://snoidcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/503/4810b42acc4eb25251c191343abca555_160.mp4"
},
{
	name:"Tum Bewafa Ho",//193
	artist:"Payal Dev,Stebin Ben",
	image:"https://c.saavncdn.com/595/Tum-Bewafa-Ho-Hindi-2021-20210518134533-500x500.jpg",
	path:"https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/595/ac5106ec0f8d810bbe471948534fe3f8_160.mp4"
},
{
	name:"Levitating",//194
	artist:"Dua Lipa",
	image:"https://c.saavncdn.com/651/Levitating-feat-DaBaby--English-2020-20200928114801-500x500.jpg",
	path:"https://snoidcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/651/1961c02c707b866858ce1db3ce304d5c_160.mp4"
},
{
	name:"Butter",//195
	artist:"BTS",
	image:"https://c.saavncdn.com/660/Butter-English-2021-20210526234150-500x500.jpg",
	path:"https://sgdccdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/660/ca8af3b951cbc0dc352d6201208420cc_160.mp4"
},
{
	name:"Astronaut In The Ocean",//196
	artist:"Masked Wolf",
	image:"https://c.saavncdn.com/102/Astronaut-In-The-Ocean-English-2021-20210226023119-500x500.jpg",
	path:"https://snoidcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/102/311cb62e65636d5d55654760923d2819_160.mp4"
},
{
	name:"Good 4 u",//197
	artist:"Olivia Rodrigo",
	image:"https://c.saavncdn.com/443/SOUR-English-2021-20210622205946-500x500.jpg",
	path:"https://snoidcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/443/d88a9886def0460c2eb937cf392acf94_160.mp4"
},
{
	name:"Save Your Tears",//198
	artist:"Arina Grande",
	image:"https://c.saavncdn.com/995/Save-Your-Tears-Remix--English-2021-20210622192937-500x500.jpg",
	path:"https://sdlhivkecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/995/0b2b801d69fcd3e5cb4cbe2ea8533d31_160.mp4"
},
{
	name:"Lost",//199
	artist:"Marron 5",
	image:"https://c.saavncdn.com/735/JORDI-Deluxe--English-2021-20210622202023-500x500.jpg",
	path:"https://sklktcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/735/ae2334c21490ceaf1b4ccb15a318bccf_160.mp4"
},
{
	name:"Shiv Shiv Shankara",//200
	artist:"Hansraj Raghuwanshi",
	image:"https://c.saavncdn.com/741/Shiv-Shiv-Shankara-Hindi--Hindi-2020-20201107104830-500x500.jpg",
	path:"https://snoidcdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/741/c5809bbe08d4fd758b1bce80cdcf96c4_160.mp4"
},
{
	name:'Toofan',//201
	artist:'Siddhart Mahadevan',
	image:'https://c.saavncdn.com/325/Toofaan-Hindi-2021-20210702155601-500x500.jpg',
	path:'https://snoidcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/325/0997887101b906689e5154a897a4dffd_160.mp4'
},
{
	name:'Challa',//202
	artist:'Rony,Vivek Hariharan',
	image:'https://c.saavncdn.com/486/Uri-The-Surgical-Strike-Hindi-2019-20190201145433-500x500.jpg',
	path:'https://snoidcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/486/19949bbcbb4347004089b126e38f0e56_160.mp4'
},
{
	name:'Ud-daa Punjab',//203
	artist:'Vishal Dadlani,Amit Trivedi',
	image:'https://c.saavncdn.com/901/Udta-Punjab-Hindi-2016-20180116-500x500.jpg',
	path:'https://sdlhivkecdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/901/a5643cfbf711a9889137bff6ba308fc5_160.mp4'
},
{
	name:'Bhaag Milkha Bhaag',//204
	artist:'Shankar-Ehsaan',
	image:'https://c.saavncdn.com/575/Bhaag-Milkha-Bhaag-Hindi-2013-20190607111645-500x500.jpg',
	path:'https://sklktecdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/575/3da8645c20a53a66621471d308e53149_160.mp4'
},
{
	name:'Zinda',//205
	artist:'Shankar-Ehsaan',
	image:'https://c.saavncdn.com/575/Bhaag-Milkha-Bhaag-Hindi-2013-20190607111645-500x500.jpg',
	path:'https://sdlhivkecdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/575/3b471affabea456458ba32423bc376a3_160.mp4'
},
{
	name:'Tum Kyo Chale Aate',//206
	artist:'Vicky Singh',
	image:'',
	path:'https://snoidcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/568/50748c167db6131ae17926529e1674f6_160.mp4'
},
{
	name:'Sham Bhi Koi',//207
	artist:'Jalraj',
	image:'https://c.saavncdn.com/033/Sham-Bhi-Koi-Hindi-2021-20210605121743-500x500.jpg',
	path:'https://sklktcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/033/4ef7613ebae2122db185359355b569be_160.mp4'
},
{
	name:'Kya Mujhe Pyaar hai',//208
	artist:'Pritam,KK',
	image:'https://c.saavncdn.com/832/Woh-Lamhe-Hindi-2006-20180406-500x500.jpg',
	path:'https://sdlhivkcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/832/414fc9a68ccf3108c3b4eac754a5ae28_160.mp4'
},
{
	name:'Gandhi Money',//209
	artist:'Divine',
	image:'https://c.saavncdn.com/943/Kohinoor-Hindi-2019-20191007230518-500x500.jpg',
	path:'https://sklktcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/943/dca23dcbfde765f82471b08c9ce7ecb1_160.mp4'
},
{
	name:'Nikle Currant',//210
	artist:'Jassie Gill,NeHa Kakkar',
	image:'https://c.saavncdn.com/373/Nikle-Currant-Punjabi-2018-20181011231550-500x500.jpg',
	path:'https://sklktecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/373/dfe2b5ebb438defdf5c0860cc9054b63_160.mp4'
},
{
	name:'Happy Birthday',//211
	artist:'Nakash Aziz',
	image:'https://c.saavncdn.com/442/Ishq-Forever-Hindi-2016-20200507060334-500x500.jpg',
	path:'https://sdlhivkcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/442/c629c5264e1aeca6201f04cc26da06a2_160.mp4'
},
{
	name:'Taaron Ke Shahar',//212
	artist:'Jubin Nautiyal,Jaani',
	image:'https://c.saavncdn.com/439/Taaron-Ke-Shehar-Hindi-2020-20200920035507-500x500.jpg',
	path:'https://sklktcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/439/db7faf1d84749f3eb9a3eccebc293a26_160.mp4'
},
{
	name:'Jaan Nissar',//213
	artist:'Arijit Singh',
	image:'https://c.saavncdn.com/367/Kedarnath-Hindi-2019-20190219-500x500.jpg',
	path:'https://sdlhivkecdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/367/f4aca5ce16a93e1bedb991f66c2f2f01_160.mp4'
},
{
	name:'Kabhi Jo badal Barse',//214
	artist:'Arijit Singh',
	image:'https://c.saavncdn.com/151/Jackpot-2013-500x500.jpg',
	path:'https://sklktecdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/151/98c60a124032ef442fd890cc2fdae7c7_160.mp4'
},
{
	name:'Tera Yaar Hoon Main',//215
	artist:'Arijit Singh',
	image:'https://c.saavncdn.com/074/Sonu-Ke-Titu-Ki-Sweety-Hindi-2018-20180214153942-500x500.jpg',
	path:'https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/074/1f7370aa302c7fec4d6b2bec451abbae_160.mp4'
},
{
	name:'Tum Kyo Chale Aate',//216
	artist:'Jalraj',
	image:'https://c.saavncdn.com/838/Tum-Kyun-Chale-Aate-Ho-Hindi-2021-20210627115550-500x500.jpg',
	path:'https://sklktecdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/838/43bded8c33b147471198667051923a64_160.mp4'
},
{
	name:'Enna Sona',//217
	artist:'Arijit Singh',
	image:'https://c.saavncdn.com/835/OK-Jaanu-Hindi-2017-500x500.jpg',
	path:'https://sdlhivkcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/835/29bf43dc4e18db09b7e9641ecb74c89b_160.mp4'
},
{
	name:'Saiyaan',//218
	artist:'Jass Manak',
	image:'https://c.saavncdn.com/202/Saiyaan-Punjabi-2021-20210213162202-500x500.jpg',
	path:'https://sdlhivkecdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/202/504d24554be37b3376eacdb78bf50142_160.mp4'
},
{
	name:'Nain Bangali',//219
	artist:'Guru Randhawa',
	image:'https://c.saavncdn.com/259/Nain-Bengali-Hindi-2021-20210714071001-500x500.jpg',
	path:'https://sdlhivkecdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/259/abef04a74b6fc5bbbcb1fbc5b8e14b56_160.mp4'
},
{
	name:'Filhaal2 Mohabbat',//220
	artist:'B Praak',
	image:'<img src="https://i.scdn.co/image/ab67616d00001e02279e732c44948f9d56aa5413">',
	path:'https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/621/143c6a6fb975b6387a943418e0e60f33_160.mp4'
},
{
	name:'Nashe Se Chadh Gayi',//221
	artist:'Arijit Singh',
	image:'https://c.saavncdn.com/256/Befikre-Hindi-2016-20190329150318-500x500.jpg',
	path:'https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/256/6786cb875bc75dd60a541261ef04a919_160.mp4'
},
{
	name:'Shaitan Ka Saala',//222
	artist:'Sohail Sen,Vishal Dadlani',
	image:'https://c.saavncdn.com/944/Housefull-4-Hindi-2019-20200114134101-500x500.jpg',
	path:'https://snoidcdnems07.cdnsrv.jio.com/jiosaavn.cdn.jio.com/944/1278cf1bc987641d31f96196f4c078f7_160.mp4'
},
{
	name:'Subha Hone Na De',//223
	artist:'Pritam,Mika Singh',
	image:'https://c.saavncdn.com/979/Desi-Boyz-2011-500x500.jpg',
	path:'https://sgdccdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/979/4562c8ed1f766a6508c73f1a1a786fcb_160.mp4'
},
{
	name:'Tu Meri',//224
	artist:'Vishal Dadlani',
	image:'https://c.saavncdn.com/169/Bang-Bang-Hindi-2014-20201005203831-500x500.jpg',
	path:'https://sdlhivkecdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/169/cb2c2ff36be56fbf2fea3bd0671adb42_160.mp4'
},
{
	name:'Malhari',//225
	artist:'Vishal dadlani',
	image:'',
	path:'https://sgdccdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/732/79d2b5abd0a49b33a879788fd75b5822_160.mp4'
},
{
	name:'Chammak Challo',//226
	artist:'Vishal Shekhar,Akon',
	image:'https://c.saavncdn.com/026/Ra-One-Hindi-2011-500x500.jpg',
	path:'https://sgdccdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/026/4525eb9287203ed2f7d2abab5eff46bc_160.mp4'
},
{
	name:'Dance Pe Chance',//227
	artist:'Sunidhi Chauhan',
	image:'https://c.saavncdn.com/344/Rab-Ne-Bana-Di-Jodi-Hindi-2008-500x500.jpg',
	path:'https://snoidcdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/344/5faa9eb757721a43d1a42260409e034b_160.mp4'
},
{
	name:'Yeh Aaina',//228
	artist:'Shreya Ghoshal',
	image:'https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20190614075009-500x500.jpg',
	path:'https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/807/7e9f871d4bd402b5fd9c3b46d087d276_160.mp4'
},
{
	name:'Teri Meri',//229
	artist:'Shreya Ghoshal,Himesh',
	image:'https://c.saavncdn.com/667/Bodyguard-2011-500x500.jpg',
	path:' https://snoidcdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/667/ea1e7d916b43ea0eb0997c76f3f057e6_160.mp4'
},
{
	name:'Heeriye',//230
	artist:'Arijit Singh,Shreya Ghoshal',
	image:'https://c.saavncdn.com/181/Happy-Hardy-And-Heer-Hindi-2019-20200120065920-500x500.jpg',
	path:'https://snoidcdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/181/372c99e366dbc4a8b215f6934afc1aec_160.mp4'
},
{
	name:'Pal',//231
	artist:'Arijit Singh,Shreya Ghoshal',
	image:'https://c.saavncdn.com/619/Jalebi-Hindi-2018-20180921123431-500x500.jpg',
	path:'https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/619/b4445298084e62597bddbb334d62e078_160.mp4'
},
{
	name:'Judaiyaan',//232
	artist:'Darshan Raval,Shreya Ghoshal',
	image:'https://c.saavncdn.com/170/Judaiyaan-Hindi-2020-20201010033124-500x500.jpg',
	path:'https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/170/c6c85dc509164192107314f09877a87b_160.mp4'
},
{
	name:'Taare Ginn',//233
	artist:'Shreya Ghoshal,A.R.Rahmaan',
	image:'https://c.saavncdn.com/870/Dil-Bechara-Hindi-2020-20200709070438-500x500.jpg',
	path:'https://sdlhivkecdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/870/ec5183010778d5db1164eabc32d9f0ed_160.mp4'
},
{
	name:'Tumhe Jo Maine Dekha',//234
	artist:'Shreya Ghoshal',
	image:'https://c.saavncdn.com/388/Main-Hoon-Na-Hindi-2004-500x500.jpg',
	path:'https://sdlhivkcdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/388/ef00f5ad4d77b83c1ca04a38d6745a92_160.mp4'
},
{
	name:'Sunn Raha Hai',//235
	artist:'Shreya Ghoshal',
	image:'https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg',
	path:'https://sdlhivkecdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/430/d262bf981e14140383c36698e2e7730e_160.mp4'
},
{
	name:'Raataan Lambiyan',//236
	artist:'Jubin Nautiyal',
	image:'https://c.saavncdn.com/222/Raataan-Lambiyan-From-Shershaah--Hindi-2021-20210729181107-500x500.jpg',
	path:'https://sdlhivkecdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/222/115d5cb9924b84b4b8ff3a5a4d732ef1_160.mp4'
},
{
	name:'Ranjha',
	artist:'Bpraak',
	image:'https://c.saavncdn.com/264/Ranjha-From-Shershaah--Hindi-2021-20210804173407-500x500.jpg',
	path:'https://snoidcdnems06.cdnsrv.jio.com/jiosaavn.cdn.jio.com/264/eb5bf3908be1c26cfda000e615c647d6_160.mp4'
},
{
	name:'Barsaat ki Dhun',
	artist:'Jubin Nautiyal',
	image:'https://c.saavncdn.com/600/Barsaat-Ki-Dhun-Hindi-2021-20210720121009-500x500.jpg',
	path:'https://sgdccdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/600/34fcd4b1b45889b24dd35246104156e7_160.mp4'
},
{
	name:'Gallan Kardi',
	artist:'Jazzy B,Jyotika tangri',
	image:'https://c.saavncdn.com/423/Jawaani-Jaaneman-Hindi-2020-20201117092602-500x500.jpg',
	path:'https://sgdccdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/423/9350d142b11210217ff344c478af692e_160.mp4'
},
{
	name:'Jee Ni Karda',
	artist:'JAss Manak,Nikita Gandhi',
	image:'https://c.saavncdn.com/302/Jee-Ni-Karda-From-Sardar-Ka-Grandson--Hindi-2021-20210425051001-500x500.jpg',
	path:'https://sgdccdnems01.cdnsrv.jio.com/jiosaavn.cdn.jio.com/302/9e06321a66a8de23911fd5b8b62a08d0_160.mp4'
},
{
	name:'Naah (Bala)',
	artist:'Hardy Sandhu',
	image:'https://c.saavncdn.com/647/Naah-Goriye-From-Bala--Hindi-2019-20191025062350-500x500.jpg',
	path:'https://sdlhivkcdnems05.cdnsrv.jio.com/jiosaavn.cdn.jio.com/647/8705ed29f0c98c39bd5e64d1bd624268_160.mp4'
},
{
	name:'Montero',
	artist:'Lil Nas X',
	image:'https://c.saavncdn.com/012/MONTERO-Call-Me-By-Your-Name--English-2021-20210322233947-500x500.jpg',
	path:'https://snoidcdnems04.cdnsrv.jio.com/jiosaavn.cdn.jio.com/012/f5b28379824be192ddde090a6c046c55_160.mp4'
},
{
	name:'Dont Let Me down',
	artist:'Chainsmokers',
	image:'https://c.saavncdn.com/848/Don-t-Let-Me-Down-English-2016-500x500.jpg',
	path:'https://snoidcdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/848/29c0372cad82dee0a7b942eb15119a8d_160.mp4'
},
{
	name:'Attention',
	artist:'Charlie Puth',
	image:'https://c.saavncdn.com/292/Attention-English-2017-500x500.jpg',
	path:'https://sdlhivkecdnems03.cdnsrv.jio.com/jiosaavn.cdn.jio.com/292/cd080a5ab86f380a194bda417682efb2_160.mp4'
},
{
	name:'Lovely',
	artist:'Billie Eilish',
	image:'https://c.saavncdn.com/947/lovely-English-2018-20180418150240-500x500.jpg',
	path:'https://sgdccdnems02.cdnsrv.jio.com/jiosaavn.cdn.jio.com/947/580fe2c0cb03ba147b00a4b2261764d4_160.mp4'
}
]; 

function search_music(){
	let input = document.getElementById('searchbar').value;
	input = input.toLowerCase();
	let x = document.getElementsByClassName('sea');

	for (i=0;i<x.length;i++){
		if (!x[i].innerHTML.toLowerCase().includes(input)){
			x[i].style.display = "none";
		}
		else{
			x[i].style.display= "inline-flex";
		}
	}
	document.getElementById("list").style.display = "block";
}

function viewsearch(){
	document.getElementById("searchicon1").style.display="none";
	document.getElementById("hidefolder").style.display="none";
	document.getElementById("gupta").style.display="block";
	document.getElementById("m").style.display="block";
	document.getElementById("sundi").style.display="none";
	document.getElementById("hide_spinner").style.display="none";
	document.getElementById("images_hide").style.display="none";
	document.getElementById("hide_list").style.display="none";
	document.getElementById("hide_list1").style.display="none";
	document.getElementById("foot").style.display="none";
	document.getElementById("charts").style.display="none";
	$('#banner').css('display', 'none');
	document.getElementsByClassName("choose")[0].style.display="none";
	document.getElementsByClassName("choose")[1].style.display="none";
	$('.artists').css('display', 'none');
	$('.choose').css('display', 'none');
	$('#hide_slider').css('display', 'none');
	$('.head').css('display','none');
	
}

function playerkidherhai(){  //for spinner to open running track b1
	document.getElementById("sundi").style.display="block";
	document.getElementById("hide_spinner").style.display="none";
	document.getElementById("images_hide").style.display="none";
	document.getElementById("hide_list").style.display="none";
	document.getElementById("hide_list1").style.display="none";
	document.getElementById("foot").style.display="none";
	document.getElementById("charts").style.display="none";
	$('#banner').css('display', 'none');
	document.getElementsByClassName("choose")[0].style.display="none";
	document.getElementsByClassName("choose")[1].style.display="none";
	document.getElementById("appname").style.display="none";
	document.getElementById("searchicon1").style.display="none";
	$('.artists').css('display', 'none');
	$('.choose').css('display', 'none');
	$('#hide_slider').css('display', 'none');
}
function mainpage(){  //circle spinner return to mainpage  b2
	document.getElementById("sundi").style.display="none";
	document.getElementById("hide_spinner").style.display="block";
	document.getElementById("images_hide").style.display="block";
	document.getElementById("hide_list").style.display="block";
	document.getElementById("hide_list1").style.display="block";
	document.getElementById("foot").style.display="block";
	document.getElementById("charts").style.display="block";
	$('#banner').css('display', 'flex');
	document.getElementsByClassName("choose")[0].style.display="block";
	document.getElementsByClassName("choose")[1].style.display="block";
	document.getElementById("m").style.display="none";
	document.getElementById("closeicon1").style.display="none";
	document.getElementById("searchicon1").style.display="block";
	document.getElementById("appname").style.display="block";
	$('.artists').css('display', 'flex');
	$('.choose').css('display', 'block');
	$('#hide_slider').css('display', 'block');
}

function displayblocks(){ //for mainpage listen event a
	document.getElementById("gupta").style.display="block";
	document.getElementById("images_hide").style.display="block";
	document.getElementById("sundaram").style.display="none";
	document.getElementById("hide_spinner").style.display="block";
	document.getElementById("sundi").style.display="none";
	document.getElementById("hidefolder").style.display="none";
	document.getElementById("hide_list").style.display="block";
	document.getElementById("hide_list1").style.display="block";
	document.getElementById("foot").style.display="block";
    document.getElementById("charts").style.display="block";
	document.getElementsByClassName("back")[0].style.backgroundImage = "none";
	document.getElementsByClassName("back")[0].style.backgroundColor = "black";
	document.getElementById("appname").style.display="blocks";
	document.getElementById("closeicon1").style.display="none";
	document.getElementById("searchicon1").style.display="block";
	document.getElementById("m").style.display="none";
	document.getElementById("hide_slider").style.display="block";
	$('.head').css('display','block');
	$('#banner').css('display', 'flex');
	$('.artists').css('display', 'flex');
	$('#hide_slider').css('display', 'block');
}
function hideblocks(){  //for 2nd page jukebox title back to mainpage function a2
	document.getElementById("sundaram").style.display="block";
	document.getElementById("gupta").style.display="none";
	document.getElementById("hide_spinner").style.display="block";
	document.getElementById("sundi").style.display= "none";
	document.getElementById("foot").style.display="none";
	document.getElementById("charts").style.display="none";
	document.getElementsByClassName("back")[0].style.backgroundImage = "url('main/back4.png')";
	document.getElementById("appname").style.display="block";
	$('.artists').css('display', 'none');
	$('#banner').css('display', 'flex');
	$('#hide_slider').css('display', 'block');
	$('.choose').css('display', 'block');
}

function displayart(call){
    var a = document.getElementsByClassName("arc")[call];
	document.getElementById("hidefolder").style.display="block";
    a.style.display="block";
    document.getElementById("gupta").style.display = "none";
    console.log("check");
}
function return2nd(were){
	var b = document.getElementsByClassName("arc")[were];
    b.style.display="none";
	document.getElementById("gupta").style.display="block";
	document.getElementById("m").style.display="none";
	console.log("return function Clicked");
}

function displaysongs(m){
	var i,j;
	for (i=m,j=0;i<track_list.length,j<track_list.length;i++,j++){
	console.log(i);
	var x = track_list[i].name;
	var y = track_list[i].artist;
	document.getElementsByClassName("lis")[j].style.backgroundImage = "url(" + track_list[i].image + ")"; 
	document.getElementsByClassName("disco")[j].innerHTML =  x ;
	document.getElementsByClassName("discocap")[j].innerHTML = y;
	}
}
let artist_img = document.querySelector('.artist_img');
let artist_s = document.querySelector('.artist_s');
let artist_n = document.querySelector('.artist_n');

function art_song(i,j){
	var x = track_list[i].name;
	var y = track_list[i].artist;
		document.getElementsByClassName("artist_img")[j].style.backgroundImage = "url(" + track_list[i].image + ")"; 
		document.getElementsByClassName("artist_s")[j].innerHTML =  x ;
		document.getElementsByClassName("artist_n")[j].innerHTML = y;
}

let lis1 = document.querySelector('.lis1');
let disco1 = document.querySelector('.disco1');
let discocap1 = document.querySelector('.discocap1');
let heart2 = document.querySelector('.heart2');


function song(i,j){
		var xx = track_list[i].name;
		var yy = track_list[i].artist;
			document.getElementsByClassName("lis1")[j].style.backgroundImage = "url(" + track_list[i].image + ")"; 
			document.getElementsByClassName("disco1")[j].innerHTML =  xx ;
			document.getElementsByClassName("discocap1")[j].innerHTML = yy;
}


//main function to play the all songs with the help of index number you can call easily with onclick event
function loadTrack(track_index,were) {
// Clear the previous seek timer 
clearInterval(updateTimer); 
resetValues(); 
var b = document.getElementsByClassName("arc")[were];
document.getElementById("gupta").style.display = "block";
b.style.display="none";
// Load a new track 
curr_track.src = track_list[track_index].path; 
curr_track.load(); 

// Update details of the track 
track_art.style.backgroundImage = 
	"url(" + track_list[track_index].image + ")"; 
track_name.textContent = track_list[track_index].name; 
track_artist.textContent = track_list[track_index].artist; 

// Set an interval of 1000 milliseconds 
// for updating the seek slider 
updateTimer = setInterval(seekUpdate, 1000); 

// Move to the next track if the current finishes playing 
// using the 'ended' event 
curr_track.addEventListener("ended", nextTrack);
loadTrack1(track_index);
playTrack();

var track_holder = `${track_index}`
console.log(track_holder);
document.getElementById('holder1').innerHTML = track_holder;

document.getElementById("gupta").style.display="block";
document.getElementById("hide_spinner").style.display="none";
document.getElementById("images_hide").style.display="none";
document.getElementById("hide_list").style.display="none";
document.getElementById("hide_list1").style.display="none";
document.getElementById("foot").style.display="none";
document.getElementById("charts").style.display="none";
document.getElementById("banner").style.display="none";
document.getElementsByClassName("choose")[0].style.display="none";
document.getElementsByClassName("choose")[1].style.display="none";
document.getElementById('sundi').style.display ="block";
document.getElementById("closeicon1").style.display="none";
document.getElementById("searchicon1").style.display="none";
document.getElementById("m").style.display="none";
document.getElementById("appname").style.display="none";
$('#hide_slider').css('display', 'none');
$('.artists').css('display', 'none');
$('.choose').css('display', 'none');

if ( 'mediaSession' in navigator ) {
	navigator.mediaSession.metadata = new MediaMetadata({
	  title: track_name.textContent,
	  artist: track_artist.textContent,
	  artwork: [
		{ src: track_list[track_index].image }]
});
navigator.mediaSession.setActionHandler('pause', () => {
    curr_track.pause();
  });
  navigator.mediaSession.setActionHandler('play', () => {
    curr_track.play();
  });

  navigator.mediaSession.setActionHandler('previoustrack', () => {
	  prevTrack();
  });
  navigator.mediaSession.setActionHandler('nexttrack', () => {
	nextTrack();
  });
}
}

function loadTrack1(track_index) {
document.getElementById("sundi").style.display="block";
document.getElementById("hide_spinner").style.display="none";
// Clear the previous seek timer 

// Load a new track 

// Update details of the track 2
track_art1.style.backgroundImage = 
	"url(" + track_list[track_index].image + ")"; 

// Set an interval of 1000 milliseconds 
// for updating the seek slider 
} 

// Functiom to reset all values to their default 
function resetValues() { 
curr_time.textContent = "00:00"; 
total_duration.textContent = "00:00"; 
seek_slider.value = 0; 
} 
function playpauseTrack() { 
// Switch between playing and pausing 
// depending on the current state 
if (!isPlaying) playTrack(); 
else pauseTrack(); 
} 

function Play(){
clearInterval(updateTimer); 
resetValues(); 
curr_track.src = track_list[track_index].path; 
curr_track.load(); 
curr_track.play(); 
isPlaying = true; 

// Replace icon with the pause icon 
playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>'; 
}

function playTrack() { 
// Play the loaded track 
curr_track.play(); 
isPlaying = true; 

// Replace icon with the pause icon 
playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>'; 
} 

function pauseTrack() { 
// Pause the loaded track 
curr_track.pause(); 
isPlaying = false; 

// Replace icon with the play icon 
playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
} 


function nextTrack() { 
// Go back to the first track if the 
a= document.getElementById('holder1').innerText;
track_index = a;
console.log(track_index);
if (track_index < track_list.length) 
	track_index -= 1; 
else track_index = 0; 
var were=0;
// Load and play the new track 
loadTrack(track_index,were); 
loadTrack1(track_index); 
playTrack(); 
} 

function prevTrack() { 
// Go back to the last track if the 

if (track_index < track_list.length) 
	track_index += 1; 
else track_index = 0; 
// Load and play the new track 3 
var were = 0;
loadTrack(track_index,were); 
loadTrack1(track_index); 
playTrack(); 
} 



/*To Play Songs Via List And Blocks On Home Page*/





function seekTo() { 
// Calculate the seek position by the 
// percentage of the seek slider 
// and get the relative duration to the track 
seekto = curr_track.duration * (seek_slider.value / 100); 

// Set the current track position to the calculated seek position 
curr_track.currentTime = seekto; 
} 

function seekUpdate() { 
let seekPosition = 0; 

// Check if the current track duration is a legible number 
if (!isNaN(curr_track.duration)) { 
	seekPosition = curr_track.currentTime * (100 / curr_track.duration); 
	seek_slider.value = seekPosition; 

	// Calculate the time left and the total duration 
	let currentMinutes = Math.floor(curr_track.currentTime / 60); 
	let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60); 
	let durationMinutes = Math.floor(curr_track.duration / 60); 
	let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60); 

	// Add a zero to the single digit time values 
	if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; } 
	if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; } 
	if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; } 
	if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; } 

	// Display the updated duration 
	curr_time.textContent = currentMinutes + ":" + currentSeconds; 
	total_duration.textContent = durationMinutes + ":" + durationSeconds; 
} 
} 




var elem = document.documentElement;

/* View in fullscreen*/

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}



/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}


$('.mid a').on('click', function() {
    $(this).toggleClass('clicked');
});

function myFunction123() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


function displaysidemenu(){
	document.getElementById("option").style.width = "410px";
	document.getElementById("bars").style.display="none";
	document.getElementById("close").style.display="block";
	console.log("event fired display menu");
}
function hidesidemenu(){
	document.getElementById("option").style.width = "0px";
	document.getElementById("bars").style.display="block";
	document.getElementById("close").style.display="none";
}


//authentication code goes from here//
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA5Ovm8neQEmd0Z7l0KeH_CdAmPpo-R5Pg",
    authDomain: "jukebox-a0183.firebaseapp.com",
    projectId: "jukebox-a0183",
    storageBucket: "jukebox-a0183.appspot.com",
    messagingSenderId: "253777131804",
    appId: "1:253777131804:web:b40e3e7f3185c8a37122d9",
    measurementId: "G-TM532PVRDN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
	const auth = firebase.auth();


	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));

	}

	function signIn(){
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
	}
	
	function signOut(){
		auth.signOut();
		alert("Signed Out");
	}
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			var email = user.email;
			alert('active user ' + email);
			//Take user to a different or home page
			showuserdetails(user)
			document.getElementById('userdetails').style.display = 'block';
			document.getElementById('googlesign').style.display="none";
			document.getElementById('googlesignout').style.display="block";
			//is signed in
			
		}else{
			alert('no active user');
			document.getElementById('userdetails').style.display = 'none';
			document.getElementById('googlesign').style.display="block";
			document.getElementById('googlesignout').style.display="none";
			//no user is signed in
		}
		
	});

	googleSignIn=()=>{
		base_provider = new firebase.auth.GoogleAuthProvider()
		firebase.auth().signInWithPopup(base_provider).then(function(result){
			console.log(result)
			console.log('sign btn clicked');
			document.getElementById('userdetails').styel.display = 'block';
		}).catch(function(err){
			console.log(err)
		})
	}

	googleSignOut=()=>{
		firebase.auth().signOut().then(()=>{
			document.getElementById('googlesign').style.display="block";
			document.getElementById('googlesignout').style.display="none";
		}).catch(e=>{
			console.log(e)
		})
	}
	function showuserdetails(user){
		document.getElementById('userdetails').innerHTML = `
		<h2 id="dash">Dashboard</h2>
		<img src="${user.photoURL}" id="userimg">
		<p id="username">${user.displayName}</p>
		<p id="useremail">${user.email}</p> <br/>`

	}

//databse storage for new songs of jukebox 
var messagesRef = firebase.database().ref('new_request_song');

// Listen for form submit
document.getElementById('request_song').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  let message = document.querySelector('#message').value;
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;


  // Save message
  saveMessage(message,name, email);

  // Show alert
  document.querySelector('.request_alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.request_alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('request_song').reset();
  sendEmail(message,name,email);
}

// Save message to firebase
function saveMessage(message,name, email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
	message: message,
    name: name,
    email: email
  });
}

function sendEmail(message,name,email,){
  Email.send({
    Host:'smtp.gmail.com',
    Username:'guptasundaram7@gmail.com',
    Password:'lfixbxvhmblfdpgn',
    To:'guptasundaram7@gmail.com',
    // president.rca3141@gmail.com
    From:`${email}`,
    Subject: `${name} sent you a message`,
    Body: `name: ${name} <br/> Email: ${email}<br/> Message: ${message}`         
  }).then( (message) => alert("message has been sent"))
}
