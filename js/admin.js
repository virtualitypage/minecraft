function information(){
	let date = new Date();
	alert(date.toLocaleDateString() + " 現在、最新情報はありません");
	// alert(date.toLocaleDateString() + " 現在\n同一ワールドのストラクチャーバックアップ95％完了\nストラクチャーデータ更新");
	// alert(date.toLocaleDateString() + " 現在\n");
	// alert(date.toLocaleDateString() + " 現在\n");
	// alert(date.toLocaleDateString() + " 現在\n");
	//　　alert(date.toLocaleDateString() + " 現在\n構造物バックアップ&更新用にストラクチャーブロックを設置中");
}

function release(){
	alert('データがアップロードされていないためダウンロードできません');
}

/* =========================================================
open_world
========================================================= */

function artifact(){　//森の洋館(らむちゃまの別荘) へのアラート
	alert('-128, 71, 183 に森の洋館(らむちゃまの別荘)への出入口がある');
}

function impulse_up(){　//陸上監獄 "インペルアップ" へのアラート
	alert('陸上監獄 "インペルアップ" の情報は秘密厳守\n世の中には知らない方がいいこともある');
}

function tickingArea(){　//ticking area
  if (window.confirm( 'オーバーワールドで適用中のティック領域(座標)を表示します。\nよろしいですか？' ) ) {
    alert("/tickingarea list\nminecart1  -5, 69, -88 150, 40, -222\nminecart2  156, 69, -112 252, 60, -3\nminecart3  198, 64, -127 40, 70, -120\nminecart4  243, 71, -4 261, 69, 156");;
	}
  else {
    // alert("");
  }
}
let area = document.getElementById('btn');
button.addEventListener('click', tickingArea);

function mansion(){　//森の洋館の座標
  if (window.confirm( 'creative only! 森の洋館の座標を表示します。\nよろしいですか？' ) ) {
    alert("/locate structure mansion\n  76, 79, -11096\n 920, 119, -25032\n6872, 82, -7560\n11688, 77, 4136\n14584, 63, -19096\n15672, 93, 5848\n19736, 124, 11880\n22072, 93, -2456\n20760, 74, 17528\n31320, 98, 27016");;
  }
  else {
    // alert("");
  }
}
let man = document.getElementById('btn');
button.addEventListener('click', mansion);

function monument(){　//海底神殿の座標
  if (window.confirm( 'creative only! 海底神殿の座標を表示します。\nよろしいですか？' ) ) {
    alert("/locate structure monument\n  760, 56, 280\n -424, 56, 1272\n -872, 56, 1256\n -888, 56, 1864\n-2024, 56, 1384\n-2376, 56, 1400\n-2808, 56, 1256\n-3336, 56, 792\n-3848, 56, 680\n-4264, 56, 712");;
  }
  else {
    // alert("");
  }
}
let mon = document.getElementById('btn');
button.addEventListener('click', monument);

function deepDark(){　//古代都市の座標
  if (window.confirm( 'creative only! 古代都市の座標を表示します。\nよろしいですか？' ) ) {
    alert("/locate biome deep_dark\n 1752, -50, 2040\n 2120, -50, 3608\n 2440, -50, 3544\n 2440, -50, 3928\n 3208, -50, 2360\n 3224, -50, 2760\n 3256, -50, 1992\n -328, -50, 2024\n-1480, -50, 3992\n-2088, -50, -2168");;
  }
  else {
    // alert("");
  }
}
let deep = document.getElementById('btn');
button.addEventListener('click', deepDark);

/* =========================================================
nether
========================================================= */

function tickingArea2(){　//ticking area
  if (window.confirm( 'ネザーで適用中のティック領域(座標)を表示します。\nよろしいですか？' ) ) {
    alert("/tickingarea list\nnone");;
	}
  else {
    // alert("");
  }
}
let area2 = document.getElementById('btn');
button.addEventListener('click', tickingArea2);

function netherFortress(){　//ネザー要塞の座標
  if (window.confirm( 'creative only! ネザー要塞の座標を表示します。\nよろしいですか？' ) ) {
    alert("/locate structure fortress\n  32, 67, -1776\n 304, 57, -2352\n 368, 57, -784\n 672, 60, -2112\n 688, 57, -1168\n1104, 74, -1440\n-224, 53, -2384\n-336, 74, -464\n-720, 66, -2160");;
  }
  else {
    // alert("");
  }
}
let net = document.getElementById('btn');
button.addEventListener('click', netherFortress);

function bastionRemnant(){　//ピグリン要塞の座標
  if (window.confirm( 'creative only! ピグリン要塞の座標を表示します。\nよろしいですか？' ) ) {
    alert("/locate structure bastion_remnant\n   88, 33, -184\n -440, 33, -696\n -648, 33, -1112\n-1368, 33, -1208\n-1880, 33, -760\n-2120, 33, -792\n-2296, 33, -1672\n-2792, 33, -1176\n-2776, 33, -2152\n-3208, 33, -2536\n");;
  }
  else {
    // alert("");
  }
}
let bastion = document.getElementById('btn');
button.addEventListener('click', bastionRemnant);

/* =========================================================
end
========================================================= */

function tickingArea3(){　//ticking area
  if (window.confirm( 'エンドで適用中のティック領域(座標)を表示します。\nよろしいですか？' ) ) {
    alert("/tickingarea list\nnone");;
	}
  else {
    // alert("");
  }
}
let area3 = document.getElementById('btn');
button.addEventListener('click', tickingArea3);

function endCity(){　//エンドシティの座標
  if (window.confirm( 'creative only! エンドシティの座標を表示します。\nよろしいですか？' ) ) {
    alert("/locate structure end_city\n   40, 62, -1880\n1032, 62, -2168\n1320, 61, -2808\n2040, 62, -1832\n2344, 64, -2168\n2360, 61, -2792\n-1192, 63, 1048\n-1496, 62, -888\n-1544, 61, -1544\n-1560, 66, -232\n-1864, 61, 376\n-2200, 61, -1560\n-2424, 61, -1544\n");;
  }
  else {
    // alert("");
  }
}
let city = document.getElementById('btn');
button.addEventListener('click', endCity);

function endShip(){　//エンドシップの座標
  if (window.confirm( 'creative only! エンドシップの座標を表示します。\nよろしいですか？' ) ) {
    alert("/locate structure end_ship\n    64, 148, -1790\n   931, 104, -2171\n  1317, 103, -2919\n2096, 120, -1833\n2377, 154, -2084\n2441, 91, -2790\n-1115, 133, 1082\n-1434, 143, -1545\n-1575, 108, -888\n-1666, 152, -235\n-1866, 103, 269\n-2225, 103, -1637\n-2424, 143, -1426");;  }
  else {
    // alert("");
  }
}
let ship = document.getElementById('btn');
button.addEventListener('click', endShip);

function endGateway(){　//エンドゲートウェイポータルの座標
  if (window.confirm( 'creative only! エンドゲートウェイポータルの座標を表示します。\nよろしいですか？' ) ) {
    alert("/locate structure end_gateway_portal\n    55, 67, -1857\n 1034, 64, -2187\n 1327, 62, -2830\n2047, 64, -1849\n2355, 66, -2186\n2380, 63, -2779\n-1182, 65, 1031\n-1511, 64, -909\n-1545, 67, -249\n-1565, 63, -1552\n-1848, 62, 386\n-2230, 66, -1556\n-2412, 65, -1533");;
  }
  else {
    // alert("");
  }
}
let gate = document.getElementById('btn');
button.addEventListener('click', endGateway);


/* =========================================================
chest
========================================================= */


/* 再生ボタン */

const bgm = document.querySelector("#Mutation");
const btn  = document.querySelector("#btn-play");

btn.addEventListener("click", ()=>{
  if( ! bgm.paused ){
    btn.innerHTML = '<i class="fas fa-play"></i>';
      bgm.pause();
  }
  else{
    btn.innerHTML = '<i class="fas fa-pause"></i>';
      bgm.play();
  }
});

bgm.addEventListener("ended", ()=>{
  bgm.currentTime = 0;
  btn.innerHTML = '<i class="fas fa-play"></i>';
});

/* =========================================================
REALMS
========================================================= */

// function worldDownload(){　//seed-map
//   if (window.confirm( 'ワールドデータ(zip形式)をダウンロードします。\nよろしいですか？' ) ) {
//     window.location.href = './dl/-2115676107773891739.zip';
//   }
//   else {
//     // alert("");
//   }
// }
// let dl = document.getElementById('btn');
// button.addEventListener('click', worldDownload);

function realms(){
	let name = prompt('Realmsに参加します。これには認証が必要です。\nEnter password:');
	switch(name) {
		case 'RumCHEAT':
			alert("認証が完了しました");
			window.location.href = './fdca0d23/638f2ecb';
			break;
		case 'Bur10ger':
			alert("認証が完了しました");
			window.location.href = './fdca0d23/096e1c48';
			break;
		case 'DonaldPutin1750':
			alert("認証が完了しました");
			window.location.href = './fdca0d23/fff9b16e';
			break;
		case 'marikojithan':
			alert("認証が完了しました");
			window.location.href = './fdca0d23/147c3eea';
			break;
		case 'MediocreSteam91':
			alert("認証が完了しました");
			window.location.href = './fdca0d23/b012d144';
			break;
		case 'mfrRFB':
			alert("認証が完了しました");
			window.location.href = './fdca0d23/23a82809';
			break;
		case 'terimayo485':
			alert("認証が完了しました");
			window.location.href = './fdca0d23/46994c36';
			break;
		case 'UsutyaFiber11':
			alert("認証が完了しました");
			window.location.href = './fdca0d23/98ffdb7d';
			break;
		default:
			alert("認証に失敗しました");
	}
}

function realms25(){
  var password = 'RumCHEAT';
  function verifyPassword(inputPassword) {
    if (inputPassword === password) {
			alert("authentication completed.");
      window.location.href = '../fdca0d23/096e1c48';
    } else {
      alert("authentication failure.");
    }
  }
  var enteredPassword = prompt("join Realms. this requires authentication.\nEnter password:");
  verifyPassword(enteredPassword);
}

function realms2(){
	let name = prompt('Realmsに参加します。これには認証が必要です。\nEnter password:');
	switch(name) {
		case 'RumCHEAT':
			alert("認証が完了しました");
			window.location.href = '../fdca0d23/096e1c48';
			break;
		case 'Bur10ger':
			alert("認証が完了しました");
			window.location.href = '../fdca0d23/46994c36';
			break;
		case 'DonaldPutin1750':
			alert("認証が完了しました");
			window.location.href = '../fdca0d23/b012d144';
			break;
		case 'marikojithan':
			alert("認証が完了しました");
			window.location.href = '../fdca0d23/147c3eea';
			break;
		case 'MediocreSteam91':
			alert("認証が完了しました");
			window.location.href = '../fdca0d23/23a82809';
			break;
		case 'mfrRFB':
			alert("認証が完了しました");
			window.location.href = '../fdca0d23/98ffdb7d';
			break;
		case 'terimayo485':
			alert("認証が完了しました");
			window.location.href = '../fdca0d23/fff9b16e';
			break;
		case 'UsutyaFiber11':
			alert("認証が完了しました");
			window.location.href = '../fdca0d23/638f2ecb';
			break;
		default:
			alert("認証に失敗しました");
	}
}

function realms3(){
	let name = prompt('Realmsに参加します。これには認証が必要です。\nEnter password:');
	switch(name) {
		case 'RumCHEAT':
			alert("認証が完了しました。\nauthentication completed.");
			window.location.href = '../../fdca0d23/638f2ecb';
			break;
		case 'Bur10ger':
			alert("認証が完了しました。\nauthentication completed.");
			window.location.href = '../../fdca0d23/096e1c48';
			break;
		case 'DonaldPutin1750':
			alert("認証が完了しました。\nauthentication completed.");
			window.location.href = '../../fdca0d23/fff9b16e';
			break;
		case 'marikojithan':
			alert("認証が完了しました。\nauthentication completed.");
			window.location.href = '../../fdca0d23/147c3eea';
			break;
		case 'MediocreSteam91':
			alert("認証が完了しました。\nauthentication completed.");
			window.location.href = '../../fdca0d23/b012d144';
			break;
		case 'mfrRFB':
			alert("認証が完了しました。\nauthentication completed.");
			window.location.href = '../../fdca0d23/23a82809';
			break;
		case 'terimayo485':
			alert("認証が完了しました。\nauthentication completed.");
			window.location.href = '../../fdca0d23/46994c36';
			break;
		case 'UsutyaFiber11':
			alert("認証が完了しました。\nauthentication completed.");
			window.location.href = '../../fdca0d23/98ffdb7d';
			break;
		default:
			alert("認証に失敗しました");
	}
}

function butClick(){
  var password = "82aac94ebf94bf5722c4ba130d5a09e10569553f";
  function verifyPassword(inputPassword) {
    if (inputPassword === password) {
      window.location.href = './82aac94ebf94bf5722c4ba130d5a09e1/0569553f';
    } else {
      alert("authentication failure.");
    }
  }
  var enteredPassword = prompt("admin only! authentication required to proceed.\nEnter password:");
  verifyPassword(enteredPassword);
}

//https://www.javadrive.jp/javascript/webpage/index1.html
