document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.dropbtn').addEventListener('click', function() {
      document.querySelector('.dropdown-content').classList.toggle('show');
  });

  window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropbtn')) {
          const dropdowns = document.querySelectorAll('.dropdown-content');
          dropdowns.forEach(function(dropdown) {
              if (dropdown.classList.contains('show')) {
                  dropdown.classList.remove('show');
              }
          });
      }
  });
});

//
let Array =[
{img:"https://puui.qpic.cn/vcover_hz_pic/0/oz5ppkfjx9niv571663939752987/0",episodes:"EP 165",minute:"0:00",name:"Perfect World"},
{img:"https://m.media-amazon.com/images/M/MV5BYmVhNDcwYWYtNTQyNi00MThmLTk5NTUtNzA0ZjBkODU2NzBjXkEyXkFqcGdeQXVyMTMwNTc3Mw@@._V1_FMjpg_UX1000_.jpg",episodes:"EP 83",minute:"0:00",name:"The Peak of True Martial Arts 2nd Season"},
{img:"https://trakteer.id/storage/images/content/mv7dk48gk8d3b690/ct-CvHEACHjHjxQiQ63cJOWMLC7pH87jRUf1625798242.jpg",episodes:"EP 281",minute:"0:00",name:"Supreme God Emperor 2nd Season"},
{img:"https://i.ytimg.com/vi/LHT0EQtSkbA/maxresdefault.jpg",episodes:"EP 70",minute:"10:35",name:"Glorious Revenge of Ye Feng - Dubu Wangu"},
{img:"https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/8gocrbloaz36fh81702611529943/0",episodes:"EP 310",minute:"7:20",name:"Against The Sky Supreme"},
{img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/8bfa5ecce45d2d497f88f0b1a0f511df.jpe",episodes:"EP 12",minute:"23:59" ,name:"Lv2 kara Cheat datta Motoyuusha Kouho no Mattari Isekai Life - Chillin' in Another World with Level 2 Super Cheat Powers"},
{img:"https://lh3.googleusercontent.com/pw/ABLVV86pN5GloK6QQnYHmBHupaN1u7fx-Pxhmr0XWQBjvXlmmNzAZT7Ht5T9q_PwTMc0ucWd4jQhjR78WZMrGQLYcUtRLrdcMZ6ZIPAuMNnN6AUBPXK5ne0ZAHn9sCtQPF6pO1sGgBMMOidx7Y8AHntDI7wF=w1200-h630-p-k-no-nu",episodes:"EP 20",minute:"0:00",name:"Wangu Kuang Di - The Proud Emperor of Eternity"},
{img:"https://i.ytimg.com/vi/WCCF5KvBmv0/maxresdefault.jpg",episodes:"EP 30",minute:"8:19",name:"Taigu Xing Shen Jue - The Secrets of Star Divine Arts"},
{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYu0q7e_YH4iYXvY9YsOxco296EwzWEz5efQN1cc774NsBclgkQ5ifekPVcVWqREZIfY&usqp=CAU",episodes:"EP 20",minute:"0:00",name:"Nitian Xie Shen - Against the Gods"},
{img:"https://i.pinimg.com/736x/b0/ab/c4/b0abc47f52d25b3285c6c1d4c546f956.jpg",episodes:"EP 54",minute:"21:35",name:"Bai Lian Cheng Shen - Apotheosis"},
{img:"https://www.ascomaxx.com/uploads/large/6ed73bcb74244896f944e9cf3cac105c.png",episodes:"EP 24",minute:"16:16",name:"Shixiong A Shixiong - Big Brother"},
{img:"https://i.ytimg.com/vi/ZebmOkcHwVg/maxresdefault.jpg",episodes:"EP 22",minute:"15:32",name:"Legend of Xianwu 2nd Season"}
];
let Card = document.querySelector(".box-movies");
var Data = "";
for (i in Array){
Data += `
<div class="movies">
      <img src="${Array[i].img}" alt="">
      <p>${Array[i].episodes}</p>
      <p id="coming">${Array[i].minute}</p>
      <h5>${Array[i].name}</h5>
    </div>
`
}
Card.innerHTML = Data;

// 
let Array2 =[
{img:"https://pic-bstarstatic.akamaized.net/ugc/d31f0933354245b0ac2ead5ddedb2248.jpg",episodes:"EP 10",name:"As Beautiful As You"},
{img:"https://lh3.googleusercontent.com/-iMNi-Dg0SQY/Zn5ufPA_9KI/AAAAAAAAKVE/7BtKdxVHSesnk_U6IOCJHHZVZ6ys5v5hwCNcBGAsYHQ/h800/princess%2Broyal%2Bposter.jpeg",episodes:"EP 22",name:"The Royal Princess"},
{img:"https://pic9.iqiyipic.com/image/20240620/54/75/a_100553151_m_601_en_m2_720_405.jpg",episodes:"EP 12",name:"The Stand-In: Uncut"},
{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJR69IcgJK0DoXQhqoE-dScCFzyrtkjS_9lj-zcpfWtTfPki9iK_wOc8NpHzmmkHaK6gY&usqp=CAU",episodes:"EP 6",name:"My Love Mix-Up! (Thai)"},
{img:"https://puui.wetvinfo.com/vcover_hz_pic/0/wu7vz4vgfi8ugan1687491647591/0",episodes:"EP 57",name:"Soul Land 2: The Peerless Tang Clan"},
{img:"https://pic0.iqiyipic.com/image/20240624/c1/af/a_100543050_m_601_en_m2_1080_608.jpg",episodes:"EP 36",name:"Follow Your Heart"},
{img:"https://i.ytimg.com/vi/u0Dg63OGfVQ/maxresdefault.jpg",episodes:"EP 40",name:"Lost You Forever S1+S2"},
{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIrtM1EiWvXfinKtggm5fn57vBeuh6wynog&s",episodes:"EP 17",name:"Jade Dynasty Season2"},
{img:"https://img.novatotelevision.tv/xxrz/1200x600/862/91/cb/91cb0a8b6101881a7aeff9da8667c992/91cb0a8b6101881a7aeff9da8667c992.jpg",episodes:"EP 22",name:"Yu Jun Xiang Ren-Blade's Dance With You"},
{img:"https://1.vikiplatform.com/c/40414c/f4bef6aa49.jpg?x=b",episodes:"EP 30",name:"The Legend of Heroes"},
{img:"https://pic7.iqiyipic.com/image/20240621/a2/79/a_100575416_m_601_en_m7_720_405.jpg",episodes:"EP 22",name:"His Man Season3"},
{img:"https://1.vikiplatform.com/c/40438c/0c4a44ab2e.jpg?x=b",episodes:"EP 9",name:"My Sweet Mobster"},
{img:"https://i.redd.it/the-rebound-meenping-has-been-revealed-as-the-actual-main-v0-7b0mhg7g241c1.jpg?width=1567&format=pjpg&auto=webp&s=6fa604226ce52656f5601572de7af7033bcadedf",episodes:"EP 5",name:"The Rebound"},
{img:"https://pic6.iqiyipic.com/image/20240614/38/00/a_100571590_m_601_en_m2_1013_569.jpg",episodes:"EP 12",name:"I-LAND Season2: N/a"},
{img:"https://m.media-amazon.com/images/M/MV5BNjAxOTU3YzItM2VjZC00NjZlLWFmN2QtMDQwNzYxMzI0ZjY1XkEyXkFqcGc@._V1_.jpg",episodes:"EP 10",name:"My MiliTary Valentine"},
{img:"https://www.comingsoon.net/wp-content/uploads/sites/3/2024/05/Knock-Knock-Boys.jpg",episodes:"EP 14",name:"Knock Knock Boys!"},
{img:"https://puui.qpic.cn/vcover_hz_pic/0/oz5ppkfjx9niv571663939752987/0",episodes:"EP 170",name:"Perfect World"},
{img:"https://www.comingsoon.net/wp-content/uploads/sites/3/2024/02/We-Are-Series-cast.jpg",episodes:"EP 15",name:"We Are The Series-We Are Khue Rao Rak Kan"},
{img:"https://pic-bstarstatic.akamaized.net/ugc/90931e9b5f183c70eb6693cba109ee39.jpg",episodes:"EP 2",name:"I Hear the Sunspot-Hidamari Ga Kikoeru"},
{img:"https://6.soompi.io/wp-content/uploads/image/20240610041249_red-swan-1-1-1.jpg?s=900x600&e=t",episodes:"EP 2",name:"Red Swan"}
];
let Movies = document.querySelector(".late-movies");
var Data = "";
for (i in Array2){
Data += `
<div class="movies">
      <img src="${Array2[i].img}" alt="">
      <p>${Array2[i].episodes}</p>
      <h5>${Array2[i].name}</h5>
    </div>
`
}
Movies.innerHTML = Data;

// 
let Array3 = [
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlECxMkusX-hoM5gCKZq0SDtf_C0vSifpyxw&s",episodes:"EP 16",name:"My Demon"},
    {img:"https://giveitashotreview.wordpress.com/wp-content/uploads/2021/03/true-beauty-drama-poster.jpg?w=660",episodes:"EP 16",name:"True Beauty"},
    {img:"https://media.zenfs.com/en/comingsoon_net_477/9c3640d901a450234179fdee50b000bc",episodes:"EP 16",name:"lovely Runner"},
    {img:"https://blog.asianwiki.com/wp-content/uploads/2021/11/Snowdrop-teaser3SM1.jpeg",episodes:"EP 16",name:"SnowDrop"},
    {img:"https://upload.wikimedia.org/wikipedia/en/e/e1/Marry_My_Husband_poster.jpg",episodes:"EP 16",name:"Marry My Husband"},
    {img:"https://img.etimg.com/thumb/width-640,height-480,imgsize-314528,resizemode-75,msid-105049965/news/international/us/all-of-us-are-dead-season-2-what-we-know-till-now.jpg",episodes:"EP 12",name:"All of Us Are Dead"},
    {img:"https://resizing.flixster.com/50HR4NgmUoW72E60_TpsXXagnxU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21402965_b_h8_ad.jpg",episodes:"EP 13",name:"A Business Proposal"},
    {img:"https://images.gmanews.tv/webpics/2024/04/Untitled_design_(16)_2024_04_09_14_44_00.jpg",episodes:"EP 18",name:"Queen of Tears"},
    {img:"https://1.vikiplatform.com/c/40131c/e83b817bb3.jpg?x=b",episodes:"EP 16",name:"Twinkling Watermelon"},
    {img:"https://annyeongkimchiland.wordpress.com/wp-content/uploads/2022/10/feat.jpg",episodes:"EP 16",name:"Eve 2022-Eve's Scandl"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS61NwIEgiGM0m1C6QbmXEuNZNvqofuWQATQ&s",episodes:"EP 9",name:"Squid Game"},
    {img:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTgxgU7fiZDcwJZwHxqOybrOptMV_uUpP1EF1WEYFtzTqwAcFQ19soU40DbIguXfFYgr7a67IWFk87NkFlCKnaK-uFtCqJMboNgQK9Tpew-5uNlJxAL8fBUXE27qOwvjl67cog.webp?r=b69",episodes:"EP 16",name:"King th Land"},
    {img:"https://blogger.googleusercontent.com/img/a/AVvXsEhXZr5GHxbEZ0ZztQkdvRVJnOE8beL3LOHkdMy2Wy6ak3eHGJ8NBnGOUH4HLJgtZ9my-TOEcaWO6-ce8ZjkYPFRy6f3s4Ja8vcXptNwqqYl0acIs7_9ARb6LhA8TstDqt9bvagoqYCGgw3HbRaaXxbK5uhCSEMqmev2CRzJOoU1jwayGk2hTh11sThNtAg=s16000",episodes:"EP 16",name:"My  Lovely Liar"},
    {img:"https://www.allkpop.com/upload/2022/08/content/261654/web_data/allkpop_1661548323_untitled-1.jpg",episodes:"EP 16",name:"Big mouth"},
    {img:"https://pic5.iqiyipic.com/image/20220422/7f/3d/a_100498863_m_601_en_1080_608.jpg",episodes:"EP 16",name:"Sh**ting Stars-Shooting Stars"},
    {img:"https://www.jaehakim.com/wp-content/uploads/9999/12/Alchemy-of-the-Souls-season-1.jpg",episodes:"EP 22",name:"Alchemy of Souls"},
    {img:"https://puui.wetvinfo.com/vcover_hz_pic/0/7yubdomdwl95ryh1610861960777/0",episodes:"EP 715",name:"Running Man"},
    {img:"https://1.vikiplatform.com/c/38039c/f6e2c1ae56.jpg?x=b",episodes:"EP 12",name:"Happiness"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0B4pna4fymUoF8bYU83_hDY10I22-dhE_A&s",episodes:"EP 20",name:"Vincenzo"},
    {img:"https://occ-0-37-33.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbnby54svePv1NYgRipeEhV4XadgZK4JLcQ_ZXFpnNM2YNJ9LgqJpz86CuHKi54XP62J0FzQilNbHz2FIk4OF7gsY-AYfMERy1ByheVer6iMp_n4nq1GLrR1IEnvSO4P2X34hA.jpg?r=141",episodes:"EP 16",name:"Extraordinary Attorney Woo"}
];
let Kdrama = document.querySelector(".Kdrama-movies");
var Data = "";
for (i in Array3){
    Data+=`
    <div class="movies">
      <img src="${Array3[i].img}" alt="">
      <p>${Array3[i].episodes}</p>
      <h5>${Array3[i].name}</h5>
    </div>
    `
}
Kdrama.innerHTML = Data;

// 
let Array4 = [
    {img:"https://rosieopolis.com/wp-content/uploads/2021/11/Falling-Into-Your-Smile-Drama.jpeg",episodes:"EP 31",name:"Falling Into Your Smile"},
    {img:"https://miro.medium.com/v2/resize:fit:1024/1*XSPebIkn0Z_QGrHsUldB-Q.jpeg",episodes:"EP 26",name:"Hidden Love"},
    {img:"https://image.tmdb.org/t/p/original/zva4nQPrhm65ffCaVJTEJcyK3gs.jpg",episodes:"EP 40",name:"Fireworks of My Heart"},
    {img:"https://1.vikiplatform.com/c/40104c/d1f4ff85c9.jpg?x=b",episodes:"EP 37",name:"Only for Love"},
    {img:"https://i.pinimg.com/736x/bd/85/7d/bd857db0f5936b6d81536779274c102a.jpg",episodes:"EP 56",name:"Love Like the Galaxy"},
    {img:"https://dramaslot.com/wp-content/uploads/2023/08/When-I-Fly-Towards-You.webp",episodes:"EP 24",name:"When I Fly Toward You"},
    {img:"https://1.vikiplatform.com/c/37502c/784667eac1.jpg?x=b&a=0x0",episodes:"EP 30",name:"Forever Love"},
    {img:"https://1.vikiplatform.com/c/39764c/d1b93b7ae5.jpg?x=b",episodes:"EP 28",name:"The Love You Give Me"},
    {img:"https://pic5.iqiyipic.com/image/20240625/61/74/a_100537757_m_601_en_m1_1013_569.jpg",episodes:"EP 24",name:"Exclusive Fairytale"},
    {img:"https://1.vikiplatform.com/c/38912c/994ee1097f.jpg?x=b",episodes:"EP 25",name:"Unforgettable Love"},
    {img:"https://c4.wallpaperflare.com/wallpaper/580/354/473/soul-land-tang-san-hd-wallpaper-thumb.jpg",episodes:"EP 242",name:"Douluo Dalu-Soul Land 2nd Season"},
    {img:"https://1.vikiplatform.com/c/39703c/29504ba01e.jpg?x=b",episodes:"EP 40",name:"Till the End of the Moon"},
    {img:"https://1.vikiplatform.com/c/40381c/61d99dc4a8.jpg?x=b",episodes:"EP 30",name:"Amidst a Snowstorm of Love"},
    {img:"https://puui.wetvinfo.com/vcover_hz_pic/0/uvwdajywre9oli91649657202704/0",episodes:"EP 40",name:"Who Rules The World (2021)"},
    {img:"https://pic3.iqiyipic.com/image/20220822/1f/31/a_100472263_m_601_en_m5_720_405.jpg",episodes:"EP 39",name:"love Between Fairy and Devil"},
    {img:"https://cms.dmpcdn.com/movie/2022/12/19/f28cfb30-7f45-11ed-9392-1b74ecb2c36d_webp_original.webp",episodes:"EP 24",name:"Please Feel at Ease Mr.Ling"}
];
let Cdrama = document.querySelector(".Cdrama-movies");
var Data = "";
for (i in Array4){
    Data += `
    <div class="movies">
      <img src="${Array4[i].img}" alt="">
      <p>${Array4[i].episodes}</p>
      <h5>${Array4[i].name}</h5>
    </div>
    `
}
Cdrama.innerHTML = Data;

// 
let Array5 = [
    {img:"https://lumiere-a.akamaihd.net/v1/images/io2_desktop_640x480_fb99b254.jpeg?region=0,0,2667,2000",episodes:"EP 1",name:"Inside Out 2 (CAM)"},
    {img:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/06/despicable-me-4.jpg",episodes:"EP 1",name:"Despicable Me 4 (CAM)"},
    {img:"https://s10019.cdn.ncms.io/wp-content/uploads/2024/05/House-of-the-Dragon-Season-2.jpg.jpeg",episodes:"EP 4",name:"House of the Dragon-Season 2"},
    {img:"https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/06/a-quiet-place-day-one-2024-prequel-review-1.jpg",episodes:"EP 1",name:"A Quiet Place: Day One (CAM)"},
    {img:"https://www.mensjournal.com/.image/t_share/MjA1NjM3NjIxMzk5OTU0OTcz/furiosa.png",episodes:"EP 1",name:"Furiosa: A Mad Max Saga"},
    {img:"https://sysfilessacbe149174fee.blob.core.windows.net/public-container/clients/worthingtheatres/files/dac20151-d134-4def-8336-24b016825f1f.jpg",episodes:"EP 1",name:"IF (2024)"},
    {img:"https://9meters.com/wp-content/uploads/the-boys-logo.webp",episodes:"EP 5",name:"The Boys- Season 4"},
    {img:"https://images.thedirect.com/media/article_full/bridgts.jpg",episodes:"EP 8",name:"Bridgerton- Swason 3"},
    {img:"https://resizing.flixster.com/bekWvGp_806HkfQEqbDKg4JhYQ8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27251908_b_h10_ab.jpg",episodes:"EP 8",name:"Raising Voices"},
    {img:"https://m.media-amazon.com/images/S/pv-target-images/c3f907e39f54fee99da531ddb5f3657d1014efc89d036af4158c85c9f414a494.jpg",episodes:"EP 6",name:"Maxton Hall-The World Between Us"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2MDdLHJaUzFMNiZexjKh6UT4XP2A5KJJjIF0kD1eDc_75hJEdxMBgm_uilqVDa159xJk&usqp=CAU",episodes:"EP 1",name:"Challenger"},
    {img:"https://img2.rojgarlive.com/news/2024/06/under-paris-ending-explained-is-under-paris-a-true-story-66682d8d27c5655402958-300.webp",episodes:"EP 1",name:"Under Paris"},
    {img:"https://www.justwatch.com/images/backdrop/316603005/s640/atlas-2024/atlas-2024",episodes:"EP 1",name:"Atlas (2024)"},
    {img:"https://miro.medium.com/v2/resize:fit:1358/1*pk9GAZDVnnwIlNAXKjhwwA.jpeg",episodes:"EP 1",name:"Godzilla x Kong:The New Empire"},
    {img:"https://m.media-amazon.com/images/S/pv-target-images/5ff58c9f0f4b29ddfaaf5a81d939a08b9893c94c47c1f15a186f4dc19247af13.png",episodes:"EP 1",name:"The Idea of You"},
    {img:"https://deadline.com/wp-content/uploads/2024/04/image001.jpg?w=681&h=383&crop=1",episodes:"EP 1",name:"Fallout (2024)"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIRjvI53dSab-cm-Y2nP2Y8Vt4caME7U-UrtG4Geuwv4CUc67szLZXB2od6jAhi6XNDg&usqp=CAU",episodes:"EP 1",name:"The Tearsmith"},
    {img:"https://cdn.mos.cms.futurecdn.net/vZygtNS3pKeH9W5BMhL5k4-1200-80.jpg",episodes:"EP 8",name:"3 Body Problem"},
    {img:"https://cdn.prod.website-files.com/62110a605fdbb37d44dae271/65e71a37d955283d04855f78_YoungRoyalsS3_16x9.jpg",episodes:"EP 6",name:"Young Royals-Season3"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19i_J58Ra5BTxPP59MhLXkwjXXhxBwKHN_A&s",episodes:"EP 1",name:"Kung Fu Panda 4"}
];
let Hollywood = document.querySelector(".Hollywood-movies");
var Data = "";
for (i in Array5){
    Data += `
    <div class="movies">
      <img src="${Array5[i].img}" alt="">
      <p>${Array5[i].episodes}</p>
      <h5>${Array5[i].name}</h5>
    </div>
    `
}
Hollywood.innerHTML = Data;

// 
let Array6 = [
    {img:"https://puui.wetvinfo.com/vcover_hz_pic/0/0qgqd4kcd9ajxrs1606899697480/0",episodes:"EP 101",name:"Swallowed Star Season 2+3+4"},
    {img:"https://standardanime.com/wp-content/uploads/2024/03/Untitled-design.jpg",episodes:"EP 44",name:"Renegade Immortal-Xian Ni"},
    {img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/8321a5945ab77607f014d5d7a77065e6.jpg",episodes:"EP 1",name:"Fairy Tail: 100 Year Quest"},
    {img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe",episodes:"EP 1111",name:"One Piece"},
    {img:"https://puui.wetvinfo.com/vcover_hz_pic/0/fc0jm32uyhpfqae1692700218430/0?imageMogr2/thumbnail/1400xg",episodes:"EP 102",name:"Battle Through the Heavens 5th Season"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200xf3rir61718349747399/0",episodes:"EP 57",name:"Soul Land2: THe Peerless Tang Clan"},
    {img:"https://m.ykimg.com/053500006411710F2052EE0B04D93A06",episodes:"EP 42",name:"Legend of Xianwu 2nd Season"},
    {img:"https://m.ykimg.com/053500006572D8A413EBC61258A7957C",episodes:"EP 84",name:"Bai Lian Cheng Shen-Apotheosis"},
    {img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=640,height=360/catalog/crunchyroll/54c1578f7c441dd7d9d610a2ba7c5f30.jpg",episodes:"EP 2",name:"A Journey Through Another World: Raising Kids While Adventuring - Isekai Yururi Kikou: Kosodateshinagara Boukensha Shimasu"},
    {img:"https://external-preview.redd.it/na-nare-hana-nare-new-visual-v0-m3FjAGG8Bbcr36ibJWEf4jlM9cTJ_5uR5dOuplfK8dU.jpg?auto=webp&s=fbc5bd7fb3961e03903dad10be8ddb47c45acd2c",episodes:"EP 1",name:"Na Nare Hana Nare-Narenare-Cheer for You!-"},
    {img:"https://a.storyblok.com/f/178900/750x421/894809cfd7/5ad05adf0ddee930fb9a66caffb17b071674134193_main.jpg/m/filters:quality(95)format(webp)",episodes:"EP 1",name:"VTuber Legend: How I Went Viral After Forgetting to Turn Off My Stream - VTuber Nandaga Haishin Kiri Wasuretara Densetsu ni Natteta"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZ5_7dgNCVHH5TEe5oJacyqktmXFvuLsx-Q&s",episodes:"EP 13",name:"Kami no Tou-Tower of God"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccFlFyv0I7cbjFiobOin6QwNJJQfpJawmM6TAyEV9_ISAjtONUaG04TY9wOoQUIVgCT0&usqp=CAU",episodes:"EP 1",name:"Kami no Tou:Ouji no Kikan-Tower of God Season2"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnshHabP4tkp9EeJ5gTFIV0K8gud9YrJ1dvAD0y2ro7_bjia34F1eueMRUUCoEdMlE3Bk&usqp=CAU",episodes:"EP 1",name:"Tsue to Tsurugi no Wistoia-Wistoria: Wand and Sword"},
    {img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/708f05a9bcccbe9d55a2364af50c50cc.jpg",episodes:"EP 1",name:"SHOSHIMIN: How to Become Ordinary"},
    {img:"https://s1.zerochan.net/Nige.Jouzu.No.Wakagimi.600.3601331.jpg",episodes:"EP 1",name:"Nige Jouzu no Wakagimi-The Elusive Samurai"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/xu2nKEcu3NpvLAvhoBbxQDv3icG.jpg",episodes:"EP 1",name:"Tensui no Sakuna-hime-Sakuna:Of Rice and Ruin"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/2WBO3C7CjsOTT5wgi9Inn5iQhVv.jpg",episodes:"EP 1",name:"Monogatari Series: Off & Monster 'Season"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/pyjYaz2q6UyUGljdgiCr42vmiyO.jpg",episodes:"EP 1",name:"Elf-san wa Yaserarenai.-Plus-Sized Elf"}
];
let Anime = document.querySelector(".anime");
var Data = "";
for(i in Array6){
    Data +=`
    <div class="movies">
      <img src="${Array6[i].img}" alt="">
      <p>${Array6[i].episodes}</p>
      <h5>${Array6[i].name}</h5>
    </div>
    `
}
Anime.innerHTML = Data;

// 
let Array7 = [
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/kOMVnfYWJGEcGgIE3r51qZEnyi4.jpg",episodes:"EP 0",text:"Coming Jul 15",name:"Tarot (KDrama)"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/atnFseGbEI9nIRK9SDk3hHQVYQi.jpg",episodes:"EP 0",text:"Coming Aug 4",name:"The Loyal Pin"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/zvV3oYwJ28fxbjamjeBcWk3pvMa.jpg",episodes:"EP 0",text:"Coming Jul 10",name:"Century of love"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200jy3k3r71709802948996/0",episodes:"EP 0",text:"Coming Jul 9",name:"Love in a Dream"},
    {img:"https://2img.hitv.com/preview/sp_images/2024/02/09/202402091725166181431.jpg",episodes:"EP 0",text:"Coming Soon",name:"You Are My Secret"},
    {img:"https://1img.hitv.com/preview/sp_images/2024/4/17/dianshiju/642790/20835289/20240417114023350.jpg",episodes:"EP 0",text:"Coming Soon",name:"Chang Le Qu"},
    {img:"https://1.vikiplatform.com/c/40646c/c8c3778faa.jpg?x=b",episodes:"EP 0",text:"Coming Jul 22",name:"Serendipity's Embrace-Is It a Coincidence?"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/eN73mSyQB1Z8in3DpQmIhAN65MU.jpg",episodes:"EP 0",text:"Coming Jul 11",name:"Meet You at the Blossom"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/1dkNTbpDwywxEBZziQp22Tw5WHV.jpg",episodes:"EP 0",text:"Coming Jul 26",name:"4 Minutes"},
    {img:"https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/rtsqlllpjcu566a1719371681424/0?imageMogr2/thumbnail/N/A",episodes:"EP 0",text:"Coming 2024",name:"The Glory(CDrama)"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200d70bilg1710726522075/0",episodes:"EP 0",text:"Coming 2024",name:"Love on the Turquoise Land"},
    {img:"https://puui.qpic.cn/vcover_hz_pic/0/mzc00200qc847lo1693896924861/0",episodes:"EP 0",text:"Coming 2024",name:"Sword And Rose"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200kswafkb1711094092362/0",episodes:"EP 0",text:"Coming 2024",name:"Hold a Court Now"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200n3cpif81719201493692/0",episodes:"EP 0",text:"Coming 2024",name:"Always Home"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200vvr86iv1719200669570/0",episodes:"EP 0",text:"Coming 2024",name:"Be Passionately in Love"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc0020021vnujn1704782774345/0",episodes:"EP 0",text:"Coming 2024",name:"Dear Enemy"}
];
let Upmovies = document.querySelector(".up-movies");
var Data = "";
for(i in Array7){
    Data +=`
    <div class="movies">
      <img src="${Array7[i].img}" alt="">
      <p>${Array7[i].episodes}</p>
      <p id="coming2">${Array7[i].text}</p>
      <h5>${Array7[i].name}</h5>
    </div>
    `
}
Upmovies.innerHTML = Data;


// 

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});


// 
const container = document.querySelector('body');

function toggleTheme() {
    container.classList.toggle('dark-theme');
}


// 
let Array8 = [
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/zixjsw1KIphrpeerv0vGU4V5hK1.jpg",episodes:"EP 10",name:"the rain in espana"},
    {img:"https://m.ykimg.com/05350000649264B71427220BB938EDB4",episodes:"EP 25",name:"Hidden love (2023)"},
    {img:"https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/efaMS00Fevc3fw2dbeP7rh22O6D.jpg",episodes:"EP 16",name:"twinkling watermelon"},
    {img:"https://www.themoviedb.org/t/p/w1000_and_h563_face/am7bBtf7RUDCjRVf3rU3WpDMreG.jpg",episodes:"EP 1",name:"365 Days"},
    {img:"https://i0.wp.com/pic0.iqiyipic.com/image/20220812/24/e2/a_100514397_m_601_en_720_405.webp",episodes:"EP 15",name:"love in the air"},
    {img:"https://i0.wp.com/pic0.iqiyipic.com/image/20231229/42/cc/a_100545227_m_601_en_m1_720_405.webp",episodes:"EP 13",name:"pit babe the series"},
    {img:"https://rosieopolis.com/wp-content/uploads/2021/11/Falling-Into-Your-Smile-Drama.jpeg",episodes:"EP 31",name:"Falling Into Your Smile"},
    {img:"https://miro.medium.com/v2/resize:fit:1024/1*XSPebIkn0Z_QGrHsUldB-Q.jpeg",episodes:"EP 26",name:"Hidden Love"},
    {img:"https://image.tmdb.org/t/p/original/zva4nQPrhm65ffCaVJTEJcyK3gs.jpg",episodes:"EP 40",name:"Fireworks of My Heart"},
    {img:"https://1.vikiplatform.com/c/40104c/d1f4ff85c9.jpg?x=b",episodes:"EP 37",name:"Only for Love"},
    {img:"https://i.pinimg.com/736x/bd/85/7d/bd857db0f5936b6d81536779274c102a.jpg",episodes:"EP 56",name:"Love Like the Galaxy"},
    {img:"https://dramaslot.com/wp-content/uploads/2023/08/When-I-Fly-Towards-You.webp",episodes:"EP 24",name:"When I Fly Toward You"},
    {img:"https://1.vikiplatform.com/c/37502c/784667eac1.jpg?x=b&a=0x0",episodes:"EP 30",name:"Forever Love"},
    {img:"https://1.vikiplatform.com/c/39764c/d1b93b7ae5.jpg?x=b",episodes:"EP 28",name:"The Love You Give Me"},
    {img:"https://pic5.iqiyipic.com/image/20240625/61/74/a_100537757_m_601_en_m1_1013_569.jpg",episodes:"EP 24",name:"Exclusive Fairytale"},
    {img:"https://1.vikiplatform.com/c/38912c/994ee1097f.jpg?x=b",episodes:"EP 25",name:"Unforgettable Love"},
    {img:"https://1.vikiplatform.com/c/39703c/29504ba01e.jpg?x=b",episodes:"EP 40",name:"Till the End of the Moon"},
    {img:"https://1.vikiplatform.com/c/40381c/61d99dc4a8.jpg?x=b",episodes:"EP 30",name:"Amidst a Snowstorm of Love"},
    {img:"https://puui.wetvinfo.com/vcover_hz_pic/0/uvwdajywre9oli91649657202704/0",episodes:"EP 40",name:"Who Rules The World (2021)"},
    {img:"https://pic3.iqiyipic.com/image/20220822/1f/31/a_100472263_m_601_en_m5_720_405.jpg",episodes:"EP 39",name:"love Between Fairy and Devil"},
    {img:"https://cms.dmpcdn.com/movie/2022/12/19/f28cfb30-7f45-11ed-9392-1b74ecb2c36d_webp_original.webp",episodes:"EP 24",name:"Please Feel at Ease Mr.Ling"},
    {img:"https://puui.wetvinfo.com/vcover_hz_pic/0/0qgqd4kcd9ajxrs1606899697480/0",episodes:"EP 101",name:"Swallowed Star Season 2+3+4"},
    {img:"https://standardanime.com/wp-content/uploads/2024/03/Untitled-design.jpg",episodes:"EP 44",name:"Renegade Immortal-Xian Ni"},
    {img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/8321a5945ab77607f014d5d7a77065e6.jpg",episodes:"EP 1",name:"Fairy Tail: 100 Year Quest"},
    {img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe",episodes:"EP 1111",name:"One Piece"},
    {img:"https://puui.wetvinfo.com/vcover_hz_pic/0/fc0jm32uyhpfqae1692700218430/0?imageMogr2/thumbnail/1400xg",episodes:"EP 102",name:"Battle Through the Heavens 5th Season"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200xf3rir61718349747399/0",episodes:"EP 57",name:"Soul Land2: THe Peerless Tang Clan"},
    {img:"https://m.ykimg.com/053500006411710F2052EE0B04D93A06",episodes:"EP 42",name:"Legend of Xianwu 2nd Season"},
    {img:"https://m.ykimg.com/053500006572D8A413EBC61258A7957C",episodes:"EP 84",name:"Bai Lian Cheng Shen-Apotheosis"},
    {img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=640,height=360/catalog/crunchyroll/54c1578f7c441dd7d9d610a2ba7c5f30.jpg",episodes:"EP 2",name:"A Journey Through Another World: Raising Kids While Adventuring - Isekai Yururi Kikou: Kosodateshinagara Boukensha Shimasu"},
    {img:"https://external-preview.redd.it/na-nare-hana-nare-new-visual-v0-m3FjAGG8Bbcr36ibJWEf4jlM9cTJ_5uR5dOuplfK8dU.jpg?auto=webp&s=fbc5bd7fb3961e03903dad10be8ddb47c45acd2c",episodes:"EP 1",name:"Na Nare Hana Nare-Narenare-Cheer for You!-"},
    {img:"https://a.storyblok.com/f/178900/750x421/894809cfd7/5ad05adf0ddee930fb9a66caffb17b071674134193_main.jpg/m/filters:quality(95)format(webp)",episodes:"EP 1",name:"VTuber Legend: How I Went Viral After Forgetting to Turn Off My Stream - VTuber Nandaga Haishin Kiri Wasuretara Densetsu ni Natteta"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZ5_7dgNCVHH5TEe5oJacyqktmXFvuLsx-Q&s",episodes:"EP 13",name:"Kami no Tou-Tower of God"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccFlFyv0I7cbjFiobOin6QwNJJQfpJawmM6TAyEV9_ISAjtONUaG04TY9wOoQUIVgCT0&usqp=CAU",episodes:"EP 1",name:"Kami no Tou:Ouji no Kikan-Tower of God Season2"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnshHabP4tkp9EeJ5gTFIV0K8gud9YrJ1dvAD0y2ro7_bjia34F1eueMRUUCoEdMlE3Bk&usqp=CAU",episodes:"EP 1",name:"Tsue to Tsurugi no Wistoia-Wistoria: Wand and Sword"},
    {img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/708f05a9bcccbe9d55a2364af50c50cc.jpg",episodes:"EP 1",name:"SHOSHIMIN: How to Become Ordinary"},
    {img:"https://s1.zerochan.net/Nige.Jouzu.No.Wakagimi.600.3601331.jpg",episodes:"EP 1",name:"Nige Jouzu no Wakagimi-The Elusive Samurai"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/xu2nKEcu3NpvLAvhoBbxQDv3icG.jpg",episodes:"EP 1",name:"Tensui no Sakuna-hime-Sakuna:Of Rice and Ruin"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/2WBO3C7CjsOTT5wgi9Inn5iQhVv.jpg",episodes:"EP 1",name:"Monogatari Series: Off & Monster 'Season"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/pyjYaz2q6UyUGljdgiCr42vmiyO.jpg",episodes:"EP 1",name:"Elf-san wa Yaserarenai.-Plus-Sized Elf"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/kOMVnfYWJGEcGgIE3r51qZEnyi4.jpg",episodes:"EP 0",text:"Coming Jul 15",name:"Tarot (KDrama)"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/atnFseGbEI9nIRK9SDk3hHQVYQi.jpg",episodes:"EP 0",text:"Coming Aug 4",name:"The Loyal Pin"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/zvV3oYwJ28fxbjamjeBcWk3pvMa.jpg",episodes:"EP 0",text:"Coming Jul 10",name:"Century of love"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200jy3k3r71709802948996/0",episodes:"EP 0",text:"Coming Jul 9",name:"Love in a Dream"},
    {img:"https://2img.hitv.com/preview/sp_images/2024/02/09/202402091725166181431.jpg",episodes:"EP 0",text:"Coming Soon",name:"You Are My Secret"},
    {img:"https://1img.hitv.com/preview/sp_images/2024/4/17/dianshiju/642790/20835289/20240417114023350.jpg",episodes:"EP 0",text:"Coming Soon",name:"Chang Le Qu"},
    {img:"https://1.vikiplatform.com/c/40646c/c8c3778faa.jpg?x=b",episodes:"EP 0",text:"Coming Jul 22",name:"Serendipity's Embrace-Is It a Coincidence?"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/eN73mSyQB1Z8in3DpQmIhAN65MU.jpg",episodes:"EP 0",text:"Coming Jul 11",name:"Meet You at the Blossom"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/1dkNTbpDwywxEBZziQp22Tw5WHV.jpg",episodes:"EP 0",text:"Coming Jul 26",name:"4 Minutes"},
    {img:"https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/rtsqlllpjcu566a1719371681424/0?imageMogr2/thumbnail/N/A",episodes:"EP 0",text:"Coming 2024",name:"The Glory(CDrama)"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200d70bilg1710726522075/0",episodes:"EP 0",text:"Coming 2024",name:"Love on the Turquoise Land"},
    {img:"https://puui.qpic.cn/vcover_hz_pic/0/mzc00200qc847lo1693896924861/0",episodes:"EP 0",text:"Coming 2024",name:"Sword And Rose"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200kswafkb1711094092362/0",episodes:"EP 0",text:"Coming 2024",name:"Hold a Court Now"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200n3cpif81719201493692/0",episodes:"EP 0",text:"Coming 2024",name:"Always Home"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200vvr86iv1719200669570/0",episodes:"EP 0",text:"Coming 2024",name:"Be Passionately in Love"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc0020021vnujn1704782774345/0",episodes:"EP 0",text:"Coming 2024",name:"Dear Enemy"},
    {img:"https://lumiere-a.akamaihd.net/v1/images/io2_desktop_640x480_fb99b254.jpeg?region=0,0,2667,2000",episodes:"EP 1",name:"Inside Out 2 (CAM)"},
    {img:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/06/despicable-me-4.jpg",episodes:"EP 1",name:"Despicable Me 4 (CAM)"},
    {img:"https://s10019.cdn.ncms.io/wp-content/uploads/2024/05/House-of-the-Dragon-Season-2.jpg.jpeg",episodes:"EP 4",name:"House of the Dragon-Season 2"},
    {img:"https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/06/a-quiet-place-day-one-2024-prequel-review-1.jpg",episodes:"EP 1",name:"A Quiet Place: Day One (CAM)"},
    {img:"https://www.mensjournal.com/.image/t_share/MjA1NjM3NjIxMzk5OTU0OTcz/furiosa.png",episodes:"EP 1",name:"Furiosa: A Mad Max Saga"},
    {img:"https://sysfilessacbe149174fee.blob.core.windows.net/public-container/clients/worthingtheatres/files/dac20151-d134-4def-8336-24b016825f1f.jpg",episodes:"EP 1",name:"IF (2024)"},
    {img:"https://9meters.com/wp-content/uploads/the-boys-logo.webp",episodes:"EP 5",name:"The Boys- Season 4"},
    {img:"https://images.thedirect.com/media/article_full/bridgts.jpg",episodes:"EP 8",name:"Bridgerton- Swason 3"},
    {img:"https://resizing.flixster.com/bekWvGp_806HkfQEqbDKg4JhYQ8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27251908_b_h10_ab.jpg",episodes:"EP 8",name:"Raising Voices"},
    {img:"https://m.media-amazon.com/images/S/pv-target-images/c3f907e39f54fee99da531ddb5f3657d1014efc89d036af4158c85c9f414a494.jpg",episodes:"EP 6",name:"Maxton Hall-The World Between Us"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2MDdLHJaUzFMNiZexjKh6UT4XP2A5KJJjIF0kD1eDc_75hJEdxMBgm_uilqVDa159xJk&usqp=CAU",episodes:"EP 1",name:"Challenger"},
    {img:"https://img2.rojgarlive.com/news/2024/06/under-paris-ending-explained-is-under-paris-a-true-story-66682d8d27c5655402958-300.webp",episodes:"EP 1",name:"Under Paris"},
    {img:"https://www.justwatch.com/images/backdrop/316603005/s640/atlas-2024/atlas-2024",episodes:"EP 1",name:"Atlas (2024)"},
    {img:"https://miro.medium.com/v2/resize:fit:1358/1*pk9GAZDVnnwIlNAXKjhwwA.jpeg",episodes:"EP 1",name:"Godzilla x Kong:The New Empire"},
    {img:"https://m.media-amazon.com/images/S/pv-target-images/5ff58c9f0f4b29ddfaaf5a81d939a08b9893c94c47c1f15a186f4dc19247af13.png",episodes:"EP 1",name:"The Idea of You"},
    {img:"https://deadline.com/wp-content/uploads/2024/04/image001.jpg?w=681&h=383&crop=1",episodes:"EP 1",name:"Fallout (2024)"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIRjvI53dSab-cm-Y2nP2Y8Vt4caME7U-UrtG4Geuwv4CUc67szLZXB2od6jAhi6XNDg&usqp=CAU",episodes:"EP 1",name:"The Tearsmith"},
    {img:"https://cdn.mos.cms.futurecdn.net/vZygtNS3pKeH9W5BMhL5k4-1200-80.jpg",episodes:"EP 8",name:"3 Body Problem"},
    {img:"https://cdn.prod.website-files.com/62110a605fdbb37d44dae271/65e71a37d955283d04855f78_YoungRoyalsS3_16x9.jpg",episodes:"EP 6",name:"Young Royals-Season3"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19i_J58Ra5BTxPP59MhLXkwjXXhxBwKHN_A&s",episodes:"EP 1",name:"Kung Fu Panda 4"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlECxMkusX-hoM5gCKZq0SDtf_C0vSifpyxw&s",episodes:"EP 16",name:"My Demon"},
    {img:"https://giveitashotreview.wordpress.com/wp-content/uploads/2021/03/true-beauty-drama-poster.jpg?w=660",episodes:"EP 16",name:"True Beauty"},
    {img:"https://media.zenfs.com/en/comingsoon_net_477/9c3640d901a450234179fdee50b000bc",episodes:"EP 16",name:"lovely Runner"},
    {img:"https://blog.asianwiki.com/wp-content/uploads/2021/11/Snowdrop-teaser3SM1.jpeg",episodes:"16",name:"SnowDrop"},
    {img:"https://upload.wikimedia.org/wikipedia/en/e/e1/Marry_My_Husband_poster.jpg",episodes:"EP 16",name:"Marry My Husband"},
    {img:"https://img.etimg.com/thumb/width-640,height-480,imgsize-314528,resizemode-75,msid-105049965/news/international/us/all-of-us-are-dead-season-2-what-we-know-till-now.jpg",episodes:"EP 12",name:"All of Us Are Dead"},
    {img:"https://resizing.flixster.com/50HR4NgmUoW72E60_TpsXXagnxU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21402965_b_h8_ad.jpg",episodes:"EP 13",name:"A Business Proposal"},
    {img:"https://images.gmanews.tv/webpics/2024/04/Untitled_design_(16)_2024_04_09_14_44_00.jpg",episodes:"EP 18",name:"Queen of Tears"},
    {img:"https://1.vikiplatform.com/c/40131c/e83b817bb3.jpg?x=b",episodes:"EP 16",name:"Twinkling Watermelon"},
    {img:"https://annyeongkimchiland.wordpress.com/wp-content/uploads/2022/10/feat.jpg",episodes:"EP 16",name:"Eve 2022-Eve's Scandl"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS61NwIEgiGM0m1C6QbmXEuNZNvqofuWQATQ&s",episodes:"EP 9",name:"Squid Game"},
    {img:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTgxgU7fiZDcwJZwHxqOybrOptMV_uUpP1EF1WEYFtzTqwAcFQ19soU40DbIguXfFYgr7a67IWFk87NkFlCKnaK-uFtCqJMboNgQK9Tpew-5uNlJxAL8fBUXE27qOwvjl67cog.webp?r=b69",episodes:"EP 16",name:"King th Land"},
    {img:"https://blogger.googleusercontent.com/img/a/AVvXsEhXZr5GHxbEZ0ZztQkdvRVJnOE8beL3LOHkdMy2Wy6ak3eHGJ8NBnGOUH4HLJgtZ9my-TOEcaWO6-ce8ZjkYPFRy6f3s4Ja8vcXptNwqqYl0acIs7_9ARb6LhA8TstDqt9bvagoqYCGgw3HbRaaXxbK5uhCSEMqmev2CRzJOoU1jwayGk2hTh11sThNtAg=s16000",episodes:"EP 16",name:"My  Lovely Liar"},
    {img:"https://www.allkpop.com/upload/2022/08/content/261654/web_data/allkpop_1661548323_untitled-1.jpg",episodes:"EP 16",name:"Big mouth"},
    {img:"https://pic5.iqiyipic.com/image/20220422/7f/3d/a_100498863_m_601_en_1080_608.jpg",episodes:"EP 16",name:"Sh**ting Stars-Shooting Stars"},
    {img:"https://www.jaehakim.com/wp-content/uploads/9999/12/Alchemy-of-the-Souls-season-1.jpg",episodes:"EP 22",name:"Alchemy of Souls"},
    {img:"https://puui.wetvinfo.com/vcover_hz_pic/0/7yubdomdwl95ryh1610861960777/0",episodes:"EP 715",name:"Running Man"},
    {img:"https://1.vikiplatform.com/c/38039c/f6e2c1ae56.jpg?x=b",episodes:"EP 12",name:"Happiness"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0B4pna4fymUoF8bYU83_hDY10I22-dhE_A&s",episodes:"EP 20",name:"Vincenzo"},
    {img:"https://occ-0-37-33.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbnby54svePv1NYgRipeEhV4XadgZK4JLcQ_ZXFpnNM2YNJ9LgqJpz86CuHKi54XP62J0FzQilNbHz2FIk4OF7gsY-AYfMERy1ByheVer6iMp_n4nq1GLrR1IEnvSO4P2X34hA.jpg?r=141",episodes:"EP 16",name:"Extraordinary Attorney Woo"},
    {img:"https://pic-bstarstatic.akamaized.net/ugc/d31f0933354245b0ac2ead5ddedb2248.jpg",episodes:"EP 10",name:"As Beautiful As You"},
    {img:"https://lh3.googleusercontent.com/-iMNi-Dg0SQY/Zn5ufPA_9KI/AAAAAAAAKVE/7BtKdxVHSesnk_U6IOCJHHZVZ6ys5v5hwCNcBGAsYHQ/h800/princess%2Broyal%2Bposter.jpeg",episodes:"EP 22",name:"The Royal Princess"},
    {img:"https://pic9.iqiyipic.com/image/20240620/54/75/a_100553151_m_601_en_m2_720_405.jpg",episodes:"EP 12",name:"The Stand-In: Uncut"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJR69IcgJK0DoXQhqoE-dScCFzyrtkjS_9lj-zcpfWtTfPki9iK_wOc8NpHzmmkHaK6gY&usqp=CAU",episodes:"EP 6",name:"My Love Mix-Up! (Thai)"},
    {img:"https://puui.wetvinfo.com/vcover_hz_pic/0/wu7vz4vgfi8ugan1687491647591/0",episodes:"EP 57",name:"Soul Land 2: The Peerless Tang Clan"},
    {img:"https://pic0.iqiyipic.com/image/20240624/c1/af/a_100543050_m_601_en_m2_1080_608.jpg",episodes:"EP 36",name:"Follow Your Heart"},
    {img:"https://i.ytimg.com/vi/u0Dg63OGfVQ/maxresdefault.jpg",episodes:"EP 40",name:"Lost You Forever S1+S2"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIrtM1EiWvXfinKtggm5fn57vBeuh6wynog&s",episodes:"EP 17",name:"Jade Dynasty Season2"},
    {img:"https://img.novatotelevision.tv/xxrz/1200x600/862/91/cb/91cb0a8b6101881a7aeff9da8667c992/91cb0a8b6101881a7aeff9da8667c992.jpg",episodes:"EP 22",name:"Yu Jun Xiang Ren-Blade's Dance With You"},
    {img:"https://1.vikiplatform.com/c/40414c/f4bef6aa49.jpg?x=b",episodes:"EP 30",name:"The Legend of Heroes"},
    {img:"https://pic7.iqiyipic.com/image/20240621/a2/79/a_100575416_m_601_en_m7_720_405.jpg",episodes:"EP 22",name:"His Man Season3"},
    {img:"https://1.vikiplatform.com/c/40438c/0c4a44ab2e.jpg?x=b",episodes:"EP 9",name:"My Sweet Mobster"},
    {img:"https://i.redd.it/the-rebound-meenping-has-been-revealed-as-the-actual-main-v0-7b0mhg7g241c1.jpg?width=1567&format=pjpg&auto=webp&s=6fa604226ce52656f5601572de7af7033bcadedf",episodes:"EP 5",name:"The Rebound"},
    {img:"https://pic6.iqiyipic.com/image/20240614/38/00/a_100571590_m_601_en_m2_1013_569.jpg",episodes:"EP 12",name:"I-LAND Season2: N/a"},
    {img:"https://m.media-amazon.com/images/M/MV5BNjAxOTU3YzItM2VjZC00NjZlLWFmN2QtMDQwNzYxMzI0ZjY1XkEyXkFqcGc@._V1_.jpg",episodes:"EP 10",name:"My MiliTary Valentine"},
    {img:"https://www.comingsoon.net/wp-content/uploads/sites/3/2024/05/Knock-Knock-Boys.jpg",episodes:"EP 14",name:"Knock Knock Boys!"},
    {img:"https://www.comingsoon.net/wp-content/uploads/sites/3/2024/02/We-Are-Series-cast.jpg",episodes:"EP 15",name:"We Are The Series-We Are Khue Rao Rak Kan"},
    {img:"https://pic-bstarstatic.akamaized.net/ugc/90931e9b5f183c70eb6693cba109ee39.jpg",episodes:"EP 2",name:"I Hear the Sunspot-Hidamari Ga Kikoeru"},
    {img:"https://6.soompi.io/wp-content/uploads/image/20240610041249_red-swan-1-1-1.jpg?s=900x600&e=t",episodes:"EP 2",name:"Red Swan"},
    {img:"https://puui.qpic.cn/vcover_hz_pic/0/oz5ppkfjx9niv571663939752987/0",episodes:"EP 165",minute:"0:00",name:"Perfect World"},
    {img:"https://m.media-amazon.com/images/M/MV5BYmVhNDcwYWYtNTQyNi00MThmLTk5NTUtNzA0ZjBkODU2NzBjXkEyXkFqcGdeQXVyMTMwNTc3Mw@@._V1_FMjpg_UX1000_.jpg",episodes:"EP 83",minute:"0:00",name:"The Peak of True Martial Arts 2nd Season"},
    {img:"https://trakteer.id/storage/images/content/mv7dk48gk8d3b690/ct-CvHEACHjHjxQiQ63cJOWMLC7pH87jRUf1625798242.jpg",episodes:"EP 281",minute:"0:00",name:"Supreme God Emperor 2nd Season"},
    {img:"https://i.ytimg.com/vi/LHT0EQtSkbA/maxresdefault.jpg",episodes:"EP 70",minute:"10:35",name:"Glorious Revenge of Ye Feng - Dubu Wangu"},
    {img:"https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/8gocrbloaz36fh81702611529943/0",episodes:"EP 310",minute:"7:20",name:"Against The Sky Supreme"},
    {img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/8bfa5ecce45d2d497f88f0b1a0f511df.jpe",episodes:"EP 12",minute:"23:59" ,name:"Lv2 kara Cheat datta Motoyuusha Kouho no Mattari Isekai Life - Chillin' in Another World with Level 2 Super Cheat Powers"},
    {img:"https://lh3.googleusercontent.com/pw/ABLVV86pN5GloK6QQnYHmBHupaN1u7fx-Pxhmr0XWQBjvXlmmNzAZT7Ht5T9q_PwTMc0ucWd4jQhjR78WZMrGQLYcUtRLrdcMZ6ZIPAuMNnN6AUBPXK5ne0ZAHn9sCtQPF6pO1sGgBMMOidx7Y8AHntDI7wF=w1200-h630-p-k-no-nu",episodes:"EP 20",minute:"0:00",name:"Wangu Kuang Di - The Proud Emperor of Eternity"},
    {img:"https://i.ytimg.com/vi/WCCF5KvBmv0/maxresdefault.jpg",episodes:"EP 30",minute:"8:19",name:"Taigu Xing Shen Jue - The Secrets of Star Divine Arts"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYu0q7e_YH4iYXvY9YsOxco296EwzWEz5efQN1cc774NsBclgkQ5ifekPVcVWqREZIfY&usqp=CAU",episodes:"EP 20",minute:"0:00",name:"Nitian Xie Shen - Against the Gods"},
    {img:"https://i.pinimg.com/736x/b0/ab/c4/b0abc47f52d25b3285c6c1d4c546f956.jpg",episodes:"EP 54",minute:"21:35",name:"Bai Lian Cheng Shen - Apotheosis"},
    {img:"https://www.ascomaxx.com/uploads/large/6ed73bcb74244896f944e9cf3cac105c.png",episodes:"EP 24",minute:"16:16",name:"Shixiong A Shixiong - Big Brother"},
    {img:"https://i.ytimg.com/vi/ZebmOkcHwVg/maxresdefault.jpg",episodes:"EP 22",minute:"15:32",name:"Legend of Xianwu 2nd Season"}
];
let Search = document.querySelector(".row");
function filterItems(){
    let input = document.querySelector('input').value.toLowerCase();
    let filterItems = Array8.filter(item => item.name.toLowerCase().includes(input));
    Search.innerHTML = '';
    filterItems.map((e) =>{
        Search.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="pmovies w-auto">
              <img src="${e.img}" alt="">
              <p>${e.episodes}</p>
              <h5>${e.name}</h5>
            </div>
          </div>
        `;
    });

}
filterItems();


// 
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.fil-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});
// 
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filt-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});
// 
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filte-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});
// 
let Array9 = [
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/deRQVctu8M4S0cKgeClMDGLFYye.jpg",episodes:"ep 1",name:"inside out2 (cam)"},
    {img:"https://prod-images.viu.com/708175124/1d3ca9e0cd9cac0d7e57839ac82b9ed41c5a8013?im=Resize,width=1920",episodes:"ep 16",name:"Lovely runner"},
    {img:"https://m.ykimg.com/05350000665EE49C13EBC61B0D1271EF",episodes:"ep 41",name:"the double"},
    {img:"https://puui.wetvinfo.com/vcover_hz_pic/0/yk9j5qmbfiqfnyn1690185518173/0",episodes:"ep 50",name:"lost you forever S1+S2"},
    {img:"https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/1ltnca63z2g478c1719894873957/0?imageMogr2/thumbnail/1080x",episodes:"ep 22",name:"as beautiful as you"},
    {img:"https://prod-images.viu.com/2639312418/4bc6be6c0c0385ec0867fd1919d5646f6cfb3f66?im=Resize,width=1920",episodes:"ep 40",name:"the princeess royal"},
    {img:"https://prod-images.viu.com/556864296/2cd37bb7f7ac5973ca72085142fa7a695e77e719?im=Resize,width=1920",episodes:"ep 12",name:"wandee goodday"},
    {img:"https://puui.wetvinfo.com/vcover_hz_pic/0/fc0jm32uyhpfqae1692700218430/0?imageMogr2/thumbnail/1400x",episodes:"ep 103",name:"battle through the heavens 5th season"},
    {img:"https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/ukyrq56k4ijfo0e1720774872841/0",episodes:"ep 6",name:"love's little delicacies"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/uicia399gyMGE1smatJ41M0CtFx.jpg",episodes:"ep 10",name:"My Hero Academia Season 7 - Boku no Hero Academia 7th Season"},
    {img:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVgFGYEctrQjdYSY4RfkAUz4u2jCd16J4K5Pph_tiknQV3Iy6bKjhCNko7AzjbnG51Wu24dl12zMiHW8gW9870p01VPXq0oLSoJ5.jpg?r=f62",episodes:"ep 9",name:"miss night and day"},
    {img:"https://d2y2efdi5wgkcl.cloudfront.net/fit-in/1280x720/media-io/2024/7/3/landscape_the_audito.ccf9e9b1.jpg",episodes:"ep 3",name:"the auditors"},
    {img:"https://prod-images.viu.com/2683879528/142c59bea743e57e1282c903f7f5d525b8536486?im=Resize,width=1920",episodes:"ep 2",name:"good partner"},
    {img:"https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/p0wyvxe3jzqrrfo1720172311193/0",episodes:"ep 20",name:"treasures around"},
    {img:"https://m.ykimg.com/0535000066866FED13EB661612E77AB0",episodes:"ep 22",name:"her fantastic adventure"},
    {img:"https://im.gurl.eu.org/file/a92d0c4308c24a4dffb4d.jpg",episodes:"ep 12",name:"my stand-in: uncut"},
    {img:"https://im.gurl.eu.org/file/b40c17d08c9633ce41174.jpg",episodes:"ep 3",name:"this love doesn't have long beans"},
    {img:"https://m.ykimg.com/0535000066909EADC54FDB20AEBB9532",episodes:"ep 27",name:"cang yuan tu-the demon hunter"},
    {img:"https://m.ykimg.com/05350000668B52DC13EBC61F0A36DD91",episodes:"ep 0",name:"dashing youth"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/mzc00200xf3rir61718349747399/0",episodes:"ep 58",name:"soul land2: the peerless tang clan"},
    {img:"https://prod-images.viu.com/clip_asset_v6/1166199989/1166199437/dd51a24ea4c35f8fa8098a58088bb030291183ca?im=Resize,width=1920",episodes:"ep 7",name:"my love mix-up (thai)"},
    {img:"https://m.media-amazon.com/images/S/pv-target-images/b2f85870cd4eb8a62a305e9cbbf55d6e534e150320de89fae923c46c973f589f.jpg",episodes:"ep 3",name:"jinny's kitchen season2"},
    {img:"https://vcover-hz-pic.puui.qpic.cn/vcover_hz_pic/0/62e9ut2hxil9sgj1711694947725/0?imageMogr2/thumbnail/NaNx",episodes:"ep 18",name:"jade dynasty season2"},
    {img:"https://im.gurl.eu.org/file/a5da89369d66ee67f9a42.jpg",episodes:"ep 8",name:"his man season3"},
    {img:"https://d1zrl0x0gzfyfr.cloudfront.net/c/40441c/1f538acb24.jpg?x=b&s=1920x1080",episodes:"ep 12",name:"my military valentine"},
    {img:"https://img.gagaoolala.com/media/1883f630-958487-lg.jpg",episodes:"ep 3",name:"century of love"},
    {img:"https://prod-images.viu.com/410323229/e204bbf27aaf28ad53c476cd98e6ea33669e1d73?im=Resize,width=1920",episodes:"ep 11",name:"my sweet mobster"},
    {img:"https://prod-images.viu.com/272489652/1741a3a3fe45508490a7deb6bf020881b0e44dce?im=Resize,width=1920",episodes:"ep 7",name:"the rebound"},
    {img:"https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/c5o1ffdwm6yhwy51720593393769/0",episodes:"ep 3",name:"meet you at the blossom"},
    {img:"https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/89w1vvkv6zpo6wf1715856634459/0?imageMogr2/thumbnail/NaNx",episodes:"rp 16",name:"knock knock boys!"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/wnOyzCLRiTAdmoY8V1Dmk3AWyHg.jpg",episodes:"ep 2",name:"Failure Frame: I Became the Strongest and Annihilated Everything with Low-Level Spells - Hazurewaku no Joutai Ijou Skill de Saikyou ni Natta Ore ga Subete wo Juurin suru made"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/zdQCKF8UvJvc38eSrw42yjVMb1Z.jpg",episodes:"ep 2",name:"tasogare out focus-twilight out of focus"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/yty0BiTi3BYfkR6a3KjpjefGoIt.jpg",episodes:"ep 1",name:"descendants: the rise of god"},
    {img:"https://im.gurl.eu.org/file/cf2ba0f3af8c767b927bc.jpg",episodes:"ep 6",name:"sunset x vibes: uncut version"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/rBtLTnmqjcj0yDDoeP26cet03og.jpg",episodes:"ep 1",name:"atri: my dear moments"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/zS1a6Dd7YO5W18aKjKpOgh4zslz.jpg",episodes:"ep 1",name:"Why Does Nobody Remember Me in This World? - Naze Boku no Sekai wo Daremo Oboeteinai no ka?"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/5BCJIAr0rpmW7ChRLCArUdjzixJ.jpg",episodes:"ep 1",name:"bye bye, earth"},
    {img:"https://puui.wetvinfo.com/vcover_hz_pic/0/oz5ppkfjx9niv571663217506808/0?imageMogr2/thumbnail/720x",episodes:"ep 171",name:"perfect world"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/4lyFXFwIyvLHUJlW4Wqxq3xeXWX.jpg",episodes:"ep 1",name:"kingdom of the planet of the apes"},
    {img:"https://m.ykimg.com/053500006572D8A413EBC61258A7957C",episodes:"ep 85",name:"Bai lian cheng shen-apoteosis"},
    {img:"https://puui.wetvinfo.com/vcover_hz_pic/0/nxxyh0x1vp4nydt1693388089802/0?imageMogr2/thumbnail/1400x",episodes:"ep 115",name:"throne of seal - shen yin wangzuo"},
    {img:"https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/avfzml3f5rf0wpt1716893833481/0?imageMogr2/thumbnail/NaNx",episodes:"ep 10",name:"the dragon prince yuan"},
    {img:"https://prod-images.viu.com/1340109222/cc9eb13a293ce66d9a9adc8128575841416a09cb?im=Resize,width=1920",episodes:"ep 12",name:"the player2: master of swindlers"},
    {img:"https://images.lifestyleasia.com/wp-content/uploads/sites/5/2024/06/12154511/untitled-design-2024-06-12t102434-712-1600x900.jpeg",episodes:"ep 8",name:"sweet home season3"},
    {img:"https://image.tving.com/ntgs/contents/CTC/caip/CAIP1500/ko/20240417/1000/P001755148.jpg/dims/resize/1280",episodes:"ep 11",name:"girls on fire"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/4PXkr1eaa7YOnDjdVSEoiV1UpOK.jpg",episodes:"ep 1",name:"despicable me 4"},
    {img:"https://vcover-hz-pic.wetvinfo.com/vcover_hz_pic/0/19q8yj9d3bzqfqk1700634890668/0",episodes:"ep 44",name:"renegade immortal - xian ni"},
    {img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/cc5f435b0ef38f8c630b8f13b2d02665.jpg",episodes:"ep 1",name:"no longer allowed in another world-isekai shikkaku"},
    {img:"https://occ-0-4265-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVnt6Oaz1UGSZFqiFBKI8f-8gRVOAELSjuy-0jMPb2S-qYDnHBjZOprwoRCch2htdhAUOa0BzHvk5pJ1je1PXS2f1A-Dk1-1gCns.webp?r=e55",episodes:"ep 111",name:"one piece"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/vwxLBV1U4Unv5cRsBKUGEeH6jg8.jpg",episodes:"ep 1",name:"love is indivisible by twins-Koi wa futago de warikirenai"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/gjUkdl62eBtxAl4L4Xurm5UBZ0x.jpg",episodes:"ep 1",name:"Our Last Crusade or the Rise of a New World Season 2 - Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen Season II"},
    {img:"https://m.ykimg.com/053500006411710F2052EE0B04D93A06",episodes:"ep 42",name:"legend of xianwu 2nd season"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/42WMAfTOeNXlMxln3DHZmYs6qA5.jpg",episodes:"ep 2",name:"Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san - Alya Sometimes Hides Her Feelings in Russian"},
    {img:"https://prod-images.viu.com/30199903/999ece1ad58af2fd043bfe98c76ea3721f3c9448?im=Resize,width=1920",episodes:"ep 3",name:"the trainee"},
    {img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/332c8d08547e7d9d28a9130d03f65cd9.jpg",episodes:"ep 1",name:"Katsute Mahou Shoujo to Aku wa Tekitai shiteita. - The Magical Girl and the Evil Lieutenant Used to Be Archenemies"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/noltPP2UudjOiiDGUUVUcgs0UVo.jpg",episodes:"ep 4",name:"House of the dragon-season2"},
    {img:"https://im.gurl.eu.org/file/84229f928525527204d8e.jpg",episodes:"ep 1",name:"wonderland (2024)"},
    {img:"https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/yOsPSyY0dMWmNosgDRS3X0AS0wq.jpg",episodes:"ep 8",name:"blue boys"},
    {img:"https://i.ytimg.com/vi/rOTsNNf2Hj4/maxresdefault.jpg",episodes:"ep 1",name:"following"},
    {img:"https://media.themoviedb.org/t/p/w1000_and_h563_face/rKKRrr9UywyCi1pxyRKSOoauO9q.jpg",episodes:"ep 2",name:"oshi no ko 2nd season"}
];
let explore = document.getElementById("row");
var Data = "";
for(i in Array9){
    Data += `
      <div class="col-lg-3 col-md-4 col-sm-6 mt-5">
        <div class="img-con">
          <img class="img" src="${Array9[i].img}" alt="">
          <p class="img-text">${Array9[i].episodes}</p>
        </div>
        <h5>${Array9[i].name}</h5>
      </div>
    `
}

explore.innerHTML = Data;