const data = [
  {
    name: "86 EIGHTY-SIX Vol 1",
    link: "https://lectortmo.com/library/manga/38342/86-eighty-six",
    image: "https://m.media-amazon.com/images/I/51A9RnsQV5L.jpg",
  },
  {
    name: "86 EIGHTY-SIX Vol 2",
    link: "https://lectortmo.com/library/manga/61033/86-eighty-six-operation-high-school",
    image: "https://m.media-amazon.com/images/I/51oEvtZoJfL.jpg",
  },
  {
    name: "86 EIGHTY-SIX Vol 3",
    link: "https://lectortmo.com/library/manga/60869/86-eighty-six-fragmental-neoteny",
    image:
      "https://m.media-amazon.com/images/I/91HGinJFr7L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Aho Girl",
    link: "https://inmanga.com/ver/manga/Aho-Girl/20f2c667-b163-4816-991f-3c1c2af8161c",
    image: "https://cdn.myanimelist.net/images/manga/3/184551.jpg",
  },
  {
    name: "Another",
    link: "https://inmanga.com/ver/manga/Another/6ca12a70-53ef-4da8-b3dd-db7c72775e14",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/auEIx2p67fPQE1zQSw6fvFp8rhv.jpg",
  },
  {
    name: "Ao no Exorcist",
    link: "https://inmanga.com/ver/manga/Ao-no-Exorcist/6ba3bd58-32cd-4edf-91b0-3b672a9f91e9",
    image: "https://m.media-amazon.com/images/I/61FgaySLtBL.jpg",
  },
  {
    name: "Apari3ncias",
    link: "https://www.webtoons.com/es/drama/lookism/list?title_no=1930&page=42",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/3b3C7FWpQQa15J02x2zp53D8imF.jpg",
  },
  {
    name: "Arifureta",
    link: "https://inmanga.com/ver/manga/Arifureta-Nichijou-de-Sekai-Saikyou/4b6ffefd-2e24-4e10-9e7e-ed4cb461b837",
    image:
      "https://m.media-amazon.com/images/I/91v5UKrTMqL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Assassination Classroom",
    link: "https://mangaplus.shueisha.co.jp/titles/200008",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/7dHONdLf91r1SmEthST1MmLrLjh.jpg",
  },
  {
    name: "Ayakashi Triangle",
    link: "https://mangaplus.shueisha.co.jp/titles/200052",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/qlrFTJ2kWucHGlk6guAMWaNEjwj.jpg",
  },
  {
    name: "Berserk",
    link: "https://inmanga.com/ver/manga/Berserk/5cc13fca-2e10-41e7-bbca-d70353d6a55a",
    image:
      "https://m.media-amazon.com/images/I/61QWsst-4zL._SX598_BO1,204,203,200_.jpg",
  },
  {
    name: "Black Clover",
    link: "https://mangaplus.shueisha.co.jp/titles/200020",
    image:
      "https://m.media-amazon.com/images/I/51HjwPDEfQL._SX331_BO1,204,203,200_.jpg",
  },
  {
    name: "Bleach",
    link: "https://inmanga.com/ver/manga/Bleach/92ef1c08-d79b-4485-ba5c-2588a7fd25b4",
    image:
      "https://m.media-amazon.com/images/I/511cLXGNhqL._SX331_BO1,204,203,200_.jpg",
  },
  {
    name: "Boruto Naruto Next Generations",
    link: "https://inmanga.com/ver/manga/Boruto/c7922ed3-318a-486e-81fe-bfe7461797a2",
    image:
      "https://m.media-amazon.com/images/I/61mXuhA03UL._SX331_BO1,204,203,200_.jpg",
  },
  {
    name: "Bungo Stray Dogs",
    link: "https://inmanga.com/ver/manga/Bungo-Stray-Dogs/0e2a0582-ae55-45d4-8a34-d663c8b12cff",
    image:
      "https://m.media-amazon.com/images/I/51REGB9wIXL._SX326_BO1,204,203,200_.jpg",
  },
  {
    name: "Bungo Stray Dogs Wan!",
    link: "https://inmanga.com/ver/manga/Bungo-Stray-Dogs-Wan/22b798b6-2e8d-40c7-81c5-ac231d7a7bf1",
    image:
      "https://m.media-amazon.com/images/I/51TJbpUz7BL._SX430_BO1,204,203,200_.jpg",
  },
  {
    name: "Burn the Witch",
    link: "https://inmanga.com/ver/manga/Burn-The-Witch/a295a267-c964-4995-a1c8-0831c55c3f9a",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/ztSeBcOfx99lk4L7wkDFWAfl0ks.jpg",
  },
  {
    name: "Captain Tsubasa",
    link: "https://mangaplus.shueisha.co.jp/titles/200014",
    image:
      "https://www.themoviedb.org/t/p/w1280/guIoz0TElP6udn9YajiW3ciuL8s.jpg",
  },
  {
    name: "Captain Tsubasa Road to 2002",
    link: "https://inmanga.com/ver/manga/Captain-Tsubasa-Road-to-2002/ea7cc8bc-4881-42ae-b24d-afeb1b5ce39d",
    image:
      "https://comicvine.gamespot.com/a/uploads/scale_small/13/136525/5933041-10.jpg",
  },
  {
    name: "Carole And Tuesday",
    link: "https://lectortmo.com/library/manga/48132/carole-tuesday",
    image: "../../img/carole-tuesday.jpg",
  },
  {
    name: "Chainsaw Man",
    link: "https://inmanga.com/ver/manga/Chainsaw-Man/81459b12-bd95-476e-a078-186e91ca6786",
    image: "../../img/chinsawman.jpg",
  },
  {
    name: "Charlotte",
    link: "https://inmanga.com/ver/manga/Charlotte/adb4fd60-b04b-4684-9305-e3f9ed41bdb4",
    image:
      "https://pack-yak.intomanga.com/thumbnails/manga/Charlotte/adb4fd60-b04b-4684-9305-e3f9ed41bdb4",
  },
  {
    name: "Classroom of Elite Vol 1",
    link: "https://lectortmo.com/library/manga/14763/Youkoso-Jitsuryoku-Shijou-Shug",
    image: "https://m.media-amazon.com/images/I/5111IoQQwVL.jpg",
  },
  {
    name: "Classroom of Elite: Other School Days",
    link: "https://lectortmo.com/library/manga/47985/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-other-school-days",
    image: "https://pbs.twimg.com/media/DKbESmyWkAAeqXp?format=jpg&name=large",
  },
  {
    name: "Classroom of Elite: Horikita",
    link: "https://lectortmo.com/library/manga/41539/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-horikita",
    image: "https://m.media-amazon.com/images/I/51kwny2N-ML._AC_SY780_.jpg",
  },
  {
    name: "Classroom of Elite: 2nd Year Vol 1",
    link: "https://lectortmo.com/library/manga/65597/youkoso-jitsuryoku-shijou-shugi-kyoushitsu-e-2-nensei-hen",
    image:
      "https://1.bp.blogspot.com/-Yilt_Pya-eQ/Xzm89h-3Y0I/AAAAAAAAWRA/uaMeWAgRtj0BDc8RouFs3n1BN6W3oqw6QCLcBGAsYHQ/w282-h400/Youkoso%2BVolumen%2B12%2Bespanol.jpg",
  },
  {
    name: "Codename: Sailor V",
    link: "https://inmanga.com/ver/manga/CodeName-Sailor-V/78ae1ba7-aec9-4560-86d1-44a9911977cf",
    image: "https://m.media-amazon.com/images/I/91fTT1sUMvL.jpg",
  },
  {
    name: "Danmachi",
    link: "https://lectortmo.com/library/manga/8717/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka",
    image: "https://otakuteca.com/images/books/cover/5c79d9c2043e9.jpg",
  },
  {
    name: "Danmachi 2",
    link: "https://lectortmo.com/library/manga/45950/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-ii",
    image: "https://otakuteca.com/images/books/cover/5ffba32bc6059.jpg",
  },
  {
    name: "DanMachi Nichijou",
    link: "https://lectortmo.com/library/manga/10118/Dungeon-ni-Deai-o-Motomeru-no-wa-Machigatte-Iru-Darou-ka-4koma--Days-of-Goddess-",
    image: "https://otakuteca.com/images/books/cover/10118_TMOmanga113826.jpg",
  },
  {
    name: "Darling In The FranXX",
    link: "https://inmanga.com/ver/manga/Darling-In-The-FranXX/16c72526-2efb-4a61-9994-8602efdc9fa2",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/ngleTiRHbziuNzclcRK0Mxaqluo.jpg",
  },
  {
    name: "Death Note",
    link: "https://inmanga.com/ver/manga/Death-Note/aadd281d-2bb0-4049-b75e-5ebf92f69e66",
    image: "https://m.media-amazon.com/images/I/51SkSDhUidL.jpg",
  },
  {
    name: "Death Note One-Shot",
    link: "https://mangaplus.shueisha.co.jp/titles/200042",
    image: "https://m.media-amazon.com/images/I/51s8YU7jvfL.jpg",
  },
  {
    name: "Demon Slayer",
    link: "https://inmanga.com/ver/manga/Kimetsu-no-Yaiba/78352626-0e2c-4b10-9610-28abf57c6881",
    image: "https://m.media-amazon.com/images/I/81ZNkhqRvVL.jpg",
  },
  {
    name: "Demon Slayer: Rengoku Kyojuro Gaiden",
    link: "https://inmanga.com/ver/manga/Kimetsu-No-Yaiba-Rengoku-Kyojuro-Gaiden/12ef741f-ef43-4bb5-85a8-0700ac61813e",
    image:
      "https://pack-yak.intomanga.com/thumbnails/manga/Kimetsu-No-Yaiba-Rengoku-Kyojuro-Gaiden/12ef741f-ef43-4bb5-85a8-0700ac61813e",
  },
  {
    name: "Don't Toy With Me, Miss Nagatoro",
    link: "https://nagatoro.manganyaa.com/leer-online-gratis-espanol/",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/MnvFnNNCLSVq6AtiN1MJQ6pCTU.jpg",
  },
  {
    name: "Dr. Stone",
    link: "https://inmanga.com/ver/manga/Dr-Stone/d9e47ba6-7dfc-401d-a21c-19326c2ea45f",
    image: "../../img/dr_stone_manga.jpg",
  },
  {
    name: "Dr. Stone Reboot: Byakuya",
    link: "https://inmanga.com/ver/manga/Dr-Stone-Reboot-Byakuya/f3b16aa1-c350-41d6-bb69-d0862a25591d",
    image: "https://m.media-amazon.com/images/I/81H66ydGKcL.jpg",
  },
  {
    name: "Dragon Ball",
    link: "https://mangaplus.shueisha.co.jp/titles/200010",
    image: "https://m.media-amazon.com/images/I/513nt+LEs6L._AC_SY780_.jpg",
  },
  {
    name: "Dragon Ball Super",
    link: "https://mangaplus.shueisha.co.jp/titles/100012",
    image: "https://m.media-amazon.com/images/I/81lpQYNjXLL.jpg",
  },
  {
    name: "Edens Zero",
    link: "https://inmanga.com/ver/manga/Eden-s-Zero/0d07f1cd-2faf-4834-81a0-16957be58620",
    image:
      "https://api-manga.crunchyroll.com/i/croll_manga/7498b07a9cd167a74c35d0b7daaf4ae4_1530049449_large.jpg",
  },
  {
    name: "Fairy Tail",
    link: "https://inmanga.com/ver/manga/Fairy-Tail/d39c9e78-2d59-422a-b888-cdf6e7d72cbc",
    image:
      "https://api-manga.crunchyroll.com/i/croll_manga/731b1e7fb3ae28b5fef5b97e3de18432_1378507252_large.jpg",
  },
  {
    name: "Fairy Tail: La misión de los 100 años",
    link: "https://inmanga.com/ver/manga/Fairy-Tail-La-misi%C3%B3n-de-los-100-a%C3%B1os/583ac97b-3b8d-49df-9748-8ada7c677b67",
    image: "https://m.media-amazon.com/images/I/91+HE-R3X6L.jpg",
  },
  {
    name: "Fate/Apocryphe",
    link: "https://lectortmo.com/library/manga/16238/fateapocrypha",
    image: "https://m.media-amazon.com/images/I/51eeXap2WOL._AC_SY780_.jpg",
  },
  {
    name: "Fate Stay Night",
    link: "https://inmanga.com/ver/manga/Fate-Stay-Night/0b5cb98f-7e4e-4f79-811f-486f04cc1d7b",
    image: "https://m.media-amazon.com/images/I/51fCwKI8DoL.jpg",
  },
  {
    name: "Fire Force",
    link: "https://inmanga.com/ver/manga/Fire-Brigade-Of-Flames/4b5b74a8-11da-4943-a561-b36f0082f7be",
    image:
      "https://api-manga.crunchyroll.com/i/croll_manga/83fa13859c8baee6f20708b5d4bd5c35_1640071967_large.jpg",
  },
  {
    name: "Fruits Basket",
    link: "https://inmanga.com/ver/manga/Fruits-Basket/8ebd41f1-cca8-4f18-907c-c605327aec70",
    image: "https://m.media-amazon.com/images/I/51Oh-5eENWL.jpg",
  },
  {
    name: "Fruits Basket Another",
    link: "https://inmanga.com/ver/manga/Fruits-Basket-Another/bbc37cd0-f216-452b-af06-e6592e62e07c",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCqVLtvZlAzMlD_uB_KxmHmHmSVrCIo3bzQ&usqp=CAU",
  },
  {
    name: "Fuuka",
    link: "https://inmanga.com/ver/manga/Fuuka/09623b76-59b3-4e37-8bec-f78de05568ac",
    image: "https://m.media-amazon.com/images/I/51AJBBvLCKL.jpg",
  },
  {
    name: "Fuuka Especial Edition",
    link: "https://inmanga.com/ver/manga/Fuuka-Special-Edition/c26decd9-51e0-4072-899f-2d06e945cfe9",
    image:
      "https://pack-yak.intomanga.com/thumbnails/manga/Fuuka-Special-Edition/c26decd9-51e0-4072-899f-2d06e945cfe9",
  },
  {
    name: "Fullmetal Alchemist",
    link: "https://inmanga.com/ver/manga/Fullmetal-Alchemist/42bafd7a-2567-4ffd-8c57-88b67a448d1d",
    image: "https://m.media-amazon.com/images/I/51HW0wQziGL.jpg",
  },
  {
    name: "Goblin Slayer",
    link: "https://inmanga.com/ver/manga/Goblin-Slayer/d9c03100-c6ba-43ff-a67b-8c8a056442c7",
    image: "https://m.media-amazon.com/images/I/51t0YisJowL.jpg",
  },
  {
    name: "Goblin Slayer: Year One",
    link: "https://inmanga.com/ver/manga/Goblin-Slayer-Year-One/3df8e479-ec8f-4a49-bcbd-0f3c706c1004",
    image: "https://m.media-amazon.com/images/I/51oM665GNqL.jpg",
  },
  {
    name: "Goblin Slayer: Brand New Day",
    link: "https://inmanga.com/ver/manga/Goblin-Slayer-Brand-New-Day/915c87ee-1081-4d1f-af21-98b237971b62",
    image: "https://m.media-amazon.com/images/I/51Qv4VmIuQL.jpg",
  },
  {
    name: "Golden Time",
    link: "https://inmanga.com/ver/manga/Golden-Time/55c1e529-ae1a-4b71-8808-b37a953bd370",
    image:
      "https://pack-yak.intomanga.com/thumbnails/manga/Golden-Time/55c1e529-ae1a-4b71-8808-b37a953bd370",
  },
  {
    name: "Girlfriend, Girlfriend",
    link: "https://lectortmo.com/library/manga/48563/kanojo-mo-kanojo",
    image: "https://m.media-amazon.com/images/I/51vNuggtVKL.jpg",
  },
  {
    name: "Haikyu!!",
    link: "https://inmanga.com/ver/manga/Haikyuu/4bfbdcce-93ed-487b-85ef-aab02d17c977",
    image: "https://m.media-amazon.com/images/I/51r7FqAIw8L.jpg",
  },
  {
    name: "Hajime no Ippo",
    link: "https://inmanga.com/ver/manga/Hajime-no-Ippo/45d38b23-1105-4a36-a373-6b4ebb00b398",
    image: "https://m.media-amazon.com/images/I/51e5xkL6hGL.jpg",
  },
  {
    name: "Hell's Paradise: Jigokuraku re-edition",
    link: "https://mangaplus.shueisha.co.jp/titles/200104",
    image: "https://m.media-amazon.com/images/I/51icwPwxt8L.jpg",
  },
  {
    name: "Hell's Paradise: Jigokuraku",
    link: "https://lectortmo.com/library/manga/35014/jigokuraku",
    image:
      "https://m.media-amazon.com/images/I/51OE08rgToL._SX347_BO1,204,203,200_.jpg",
  },
  {
    name: "Hell's Paradise: Jigokuraku One-Shot",
    link: "https://mangaplus.shueisha.co.jp/titles/200109",
    image: "../../img/Jigokuraku_one_shot.jpg",
  },
  {
    name: "Hentai Ouji to Warawanai Neko",
    link: "https://inmanga.com/ver/manga/Haikyuu/4bfbdcce-93ed-487b-85ef-aab02d17c977",
    image:
      "https://pack-yak.intomanga.com/thumbnails/manga/Hentai-Ouji-to-Warawanai-Neko/1d944740-3448-47e8-8527-d4c33a1cd682",
  },
  {
    name: "Hero's",
    link: "https://inmanga.com/ver/manga/Hero-s/789b27e9-14f1-4594-8cf2-c00d99bb1726",
    image: "https://otakuteca.com/images/books/cover/5f3c6facf03b5.jpg",
  },
  {
    name: "High School DxD",
    link: "https://lectortmo.com/library/manga/8495/high-school-dxd",
    image:
      "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_gveud3qkel7rt65vssh6et106l/-S265-FWEBP",
  },
  {
    name: "In the Land of Leadale",
    link: "https://lectortmo.com/library/manga/59673/world-of-leadale",
    image:
      "https://m.media-amazon.com/images/I/81FewBC22WL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "In/Spectre",
    link: "https://r2.leermanga.xyz/kyokou+suiri/18506",
    image:
      "https://api-manga.crunchyroll.com/i/croll_manga/841e6b055d4e951297a7d84e6b28d7d9_1640073610_large.jpg",
  },
  {
    name: "Inazuma Eleven",
    link: "https://inmanga.com/ver/manga/Inazuma-Eleven/7fa3c073-a510-45c2-bb74-f56e6ca6cdd9",
    image:
      "https://m.media-amazon.com/images/I/812KWAh4ZPL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Insomniacs After School",
    link: "https://lectortmo.com/library/manga/45780/kimi-wa-houkago-insomnia",
    image:
      "https://m.media-amazon.com/images/I/71PSYpAlD9S._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Inuyasha",
    link: "https://inmanga.com/ver/manga/Inuyasha/ede0baf1-ef5f-4321-bd53-65368840810a",
    image:
      "https://m.media-amazon.com/images/I/51hmAnGfGFL._SX335_BO1,204,203,200_.jpg",
  },
  {
    name: "JoJo's Bizarre Adventure",
    link: "https://inmanga.com/ver/manga/JoJo-s-Bizarre-Adventure/647ab58c-7c00-4889-acfd-03cd678c6b33",
    image:
      "https://m.media-amazon.com/images/I/511bO4zTWEL._SX336_BO1,204,203,200_.jpg",
  },
  {
    name: "Jojos Bizarre Adventure Parte 2: Battle Tendency",
    link: "https://inmanga.com/ver/manga/Jojos-Bizarre-Adventure-Parte-2-Battle-Tendency/85e85fb5-88d3-4849-85ec-68f2578d9ba1",
    image:
      "https://m.media-amazon.com/images/I/61vKCfI9UXL._SX347_BO1,204,203,200_.jpg",
  },
  {
    name: "Jojos Bizarre Adventure Parte 3: Stardust Crusaders",
    link: "https://inmanga.com/ver/manga/Jojos-Bizarre-Adventure-Parte-3-Stardust-Crusaders/ee17bdf7-53c8-4962-8506-9a0b81efb94f",
    image:
      "https://m.media-amazon.com/images/I/51rdL5YupQL._SX336_BO1,204,203,200_.jpg",
  },
  {
    name: "Re:Zero Movie 1",
    link: "https://www1.otakustv.com/anime/re-zero-kara-hajimeru-isekai-seikatsu-memory-snow-siihyg6j",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/t9ifVuOtSZBvtieF9L83pnHnOcC.jpg",
  },
  {
    name: "Re:Zero Movie 1 Latino",
    link: "https://www1.animeonline.ninja/pelicula/rezero-kara-hajimeru-isekai-seikatsu-memory-snow-1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/t9ifVuOtSZBvtieF9L83pnHnOcC.jpg",
  },
  {
    name: "Re:Zero Movie 2",
    link: "https://www1.otakustv.com/anime/re-zero-kara-hajimeru-isekai-seikatsu-hyouketsu-no-kizuna-aigpmjso",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/uFtwdbAiNP9QKdsU3gOWTErFDUw.jpg",
  },
  {
    name: "Re:Zero Movie 2 Latino",
    link: "https://www1.animeonline.ninja/pelicula/rezero-kara-hajimeru-isekai-seikatsu-hyouketsu-no-kizuna-1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/uFtwdbAiNP9QKdsU3gOWTErFDUw.jpg",
  },
  {
    name: "Bunny Girl Senpai Movie",
    link: "https://www1.otakustv.com/anime/seishun-buta-yarou-wa-yumemiru-shoujo-no-yume-wo-minai",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/5MgMCnslrxQfOfaq6T5ndkLlcCk.jpg",
  },
  {
    name: "Summer Ghost",
    link: "https://www1.otakustv.com/anime/summer-ghost",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/AkZ4ArPT5HR3VGp4cUmvyrtgic8.jpg",
  },
  {
    name: "Summer Ghost Latino",
    link: "https://www1.henaojara.com/ver/summer-ghost-espanol-latino-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/AkZ4ArPT5HR3VGp4cUmvyrtgic8.jpg",
  },
  {
    name: "Suzume",
    link: "https://henaojara2.com/ver/season/suzume-no-tojimari-sub-espanol-hd-1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/lrACtADbyOCEK2K3gU7ZL5LYXR6.jpg",
  },
  {
    name: "Sword Art Online: Ordinal Scale Latino",
    link: "https://drive.google.com/file/d/1n10Tg8Le0f4iu6YdAPOpoqT0Zs-ehcaT/view",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/8qaICWPguiCUlG35McbG4PZ94Zm.jpg",
  },
  {
    name: "Sword Art Online: Extra Edition",
    link: "https://www1.otakustv.com/anime/sword-art-online-extra-edition",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/nI2nNWCZZIMFb1sV7RVq1Nd8iWM.jpg",
  },
  {
    name: "To Every You I've Loved Before",
    link: "https://www1.otakustv.com/anime/boku-ga-aishita-subete-no-kimi-e",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b9165e5aa4edbee30442f0b0e363577b.jpe",
  },
  {
    name: "To Me, The One Who Loved You",
    link: "https://www1.otakustv.com/anime/kimi-wo-aishita-hitori-no-boku-e",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a995e989258d964172a8b84573a6bcc0.jpe",
  },
  {
    name: "That Time I Got Reincarnated as a Slime The Movie: Scarlet Bond",
    link: "https://www1.otakustv.com/anime/tensei-shitara-slime-datta-ken-movie-guren-no-kizuna-hen",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/xBspq7kJsfkzch95MzFl5RDDMK4.jpg",
  },
  {
    name: "That Time I Got Reincarnated as a Slime The Movie: Scarlet Bond Latino",
    link: "https://henaojara2.com/ver/season/tensei-shitara-slime-datta-ken-movie-espanol-latino-hd-1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/xBspq7kJsfkzch95MzFl5RDDMK4.jpg",
  },
  {
    name: "DanMachi: La película",
    link: "https://www1.otakustv.com/anime/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-movie-orion-no-ya",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/eBdT6fBRMHO4bq00VZcAGlDGizz.jpg",
  },
  {
    name: "Demon Slayer: Mugen Train Movie Latino",
    link: "https://henaojara2.com/ver/episode/kimetsu-no-yaiba-mugen-train-espanol-latino-hd-1x1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/AqhA7GXDEaP1spOWih195YzSPem.jpg",
  },
  {
    name: "Ghost Messager",
    link: "https://www.viki.com/movies/35622c",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/41HQbBFxI3AtUTFZbHBvKbImaU3.jpg",
  },
  {
    name: "Given: The Movie",
    link: "https://www1.otakustv.com/anime/given-movie",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/u1wHUA0R48FH4WV3sGqjwx3aNZm.jpg",
  },
  {
    name: "Goblin Slayer: Goblin's Crown Movie",
    link: "https://www1.otakustv.com/anime/goblin-slayer-goblins-crown",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/k0C6lcVUFzxlvjeSldKnMy5hITv.jpg",
  },
  {
    name: "Kakushigoto Movie",
    link: "https://www1.otakustv.com/anime/kakushigoto-movie",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/9K06g8yFjUPGVZ2bFmKhsl1pg12.jpg",
  },
  {
    name: "Kanojo to Kanojo no Neko: Everything Flows",
    link: "https://www1.animeonline.ninja/pelicula/kanojo-to-kanojo-no-neko-everything-flows/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/eVWGvkxYuDy4xZWiUPEu9eQ2ItE.jpg",
  },
  {
    name: "La leyenda de hei",
    link: "https://www1.otakustv.com/anime/the-legend-of-luoxiaohei",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/uK4DbBOadzUC36Pd3Oxdy9mCJsB.jpg",
  },
  {
    name: "La Princesa Y El Piloto Latino",
    link: "https://tubitv.com/movies/689822/la-princesa-y-el-piloto-doblado?start=true",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/BsugEx8xj1MNaowx5YXZ2hfG51.jpg",
  },
  {
    name: "La tumba de las luciernagas",
    link: "https://www.animelatinohd.com/anime/hotaru-no-haka",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/3kFSr5CrSaeQZ00lCOKQopyK7h3.jpg",
  },
  {
    name: "Little Witch Academia: The Enchanted Parade",
    link: "https://www1.otakustv.com/anime/little-witch-academia-mahou-shikake-no-parade",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/1POfVpdNPMURXomBDXbYuk4qV73.jpg",
  },
  {
    name: "Love Live! The School Idol Movie",
    link: "https://animebum.net/v-love-live-the-school-idol-movie",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/52lsYCKGL74ULaRRmLNVIYLeudO.jpg",
  },
  {
    name: "Luces En El Cielo Latino",
    link: "https://www.henaojara.com/ver/luces-en-el-cielo-espanol-latino-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/jALSBQCFjwf3rvkKjpmBZnVeTjT.jpg",
  },
  {
    name: "Lupin III vs. Cat's Eye Latino",
    link: "https://www1.animeonline.ninja/pelicula/lupin-iii-vs-cats-eye/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/vd6qdfp3TjJ0acLtSWfH6gfx3WI.jpg",
  },
  {
    name: "Quiero Comerme tu Pancreas Latino",
    link: "https://monoschinos2.com/anime/kimi-no-suizou-wo-tabetai-latino-sub-espanol",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/7mEdttJoHCHjBUP4YvLXFs3Ddmi.jpg",
  },
  {
    name: "Saenai Heroine no Sodatekata Fine",
    link: "https://www1.otakustv.com/anime/saenai-heroine-no-sodatekata-fine-mhv2yrnb",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/n4mSs3hQ3mQZX6KKqeSRDLs062y.jpg",
  },
  {
    name: "Los Niños Lobo Latino",
    link: "https://monoschinos2.com/anime/ookami-kodomo-no-ame-to-yuki-latino-sub-espanol",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/eNWjMbuhGxJdzaIY9ZZ2KvWx2sQ.jpg",
  },
  {
    name: "Héroes modestos: Teatro de cortometrajes de Ponoc",
    link: "https://www1.otakustv.com/anime/chiisana-eiyuu-kani-to-tamago-to-toumei-ningen",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/o0v4FKQgxP345993HnznYImIiEC.jpg",
  },
  {
    name: "Héroes modestos: Teatro de cortometrajes de Ponoc Latino",
    link: "https://www1.animeonline.ninja/pelicula/chiisana-eiyuu-kani-to-tamago-to-toumei-ningen/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/o0v4FKQgxP345993HnznYImIiEC.jpg",
  },
  {
    name: "Mary y la Flor de la Bruja",
    link: "https://henaojara.com/ver/mary-y-la-flor-de-la-bruja-latino-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/abILXCcNDLbxQNFSidHTaYROqGN.jpg",
  },
  {
    name: "Natsu e no Tunnel, Sayonara no Deguchi",
    link: "https://www1.otakustv.com/anime/natsu-e-no-tunnel-sayonara-no-deguchi",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/4Qtk6XMIaXl8ASgxXJU3uTLzTzH.jpg",
  },
  {
    name: "Naruto Movie 1 Latino",
    link: "https://www1.animeonline.ninja/pelicula/naruto-the-movie-ninja-clash-in-the-land-of-snow/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/cGhW2jigeUUke682LdhzNGtyfA7.jpg",
  },
  {
    name: "Naruto Movie 2 Latino",
    link: "https://www1.animeonline.ninja/pelicula/naruto-the-movie-2-legend-of-the-stone-of-gelel/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/ldwWnaWoW8ziEFflimoraZouyvB.jpg",
  },
  {
    name: "Naruto Movie 3 Latino",
    link: "https://www1.animeonline.ninja/pelicula/naruto-the-movie-3-guardians-of-the-crescent-moon-kingdom/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/w1JPid4Wx9awVpAxcgXFlNcCrUA.jpg",
  },
  {
    name: "Naruto Shippuden Movie 1 Latino",
    link: "https://henaojara2.com/ver/episode/naruto-shippuden-peliculas-espanol-latino-hd-1x1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/cIp2F2KnPVnZ9Klw600uRkfLWu9.jpg",
  },
  {
    name: "Naruto Shippuden Movie 2 Latino",
    link: "https://henaojara2.com/ver/episode/naruto-shippuden-peliculas-espanol-latino-hd-1x2/",
    image:
      "https://www.themoviedb.org/t/p/original/fNseqlKRt7a1MHnPw8L2gGYgd1K.jpg",
  },
  {
    name: "Naruto Shippuden Movie 3 Latino",
    link: "https://henaojara2.com/ver/episode/naruto-shippuden-peliculas-espanol-latino-hd-1x3/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/c8iPAKL5nQqZOmSXVrcJvWNA9DQ.jpg",
  },
  {
    name: "Naruto Shippuden Movie 4 Latino",
    link: "https://henaojara2.com/ver/episode/naruto-shippuden-peliculas-espanol-latino-hd-1x4/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/cRd7J9VS1Z7GeF7qE0V0F4glln2.jpg",
  },
  {
    name: "Naruto Shippuden Movie 5 Latino",
    link: "https://henaojara2.com/ver/episode/naruto-shippuden-peliculas-espanol-latino-hd-1x5/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/2LNoyJWFuBf3HoFQH19yyhxIL7v.jpg",
  },
  {
    name: "Road to Ninja: Naruto Latino",
    link: "https://henaojara.com/ver/episode/naruto-shippuden-peliculas-espanol-latino-hd-1x6/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/euiQ3P7E6wPdETmzWQj7kyDiE3D.jpg",
  },
  {
    name: "Naruto Shippuden Movie 7 Latino",
    link: "https://henaojara.com/ver/episode/naruto-shippuden-peliculas-espanol-latino-hd-1x7/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/uOeaOJi83lKOpPSx4X5oOnUGyNQ.jpg",
  },
  {
    name: "Boruto: Naruto The Movie Latino",
    link: "https://www1.animeonline.ninja/pelicula/boruto-naruto-the-movie/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/lw4Semx1gAQHT7DHIYw8wm9M5fE.jpg",
  },
  {
    name: "Una voz Silenciosa Latino",
    link: "https://animebum.net/v/koe-no-katachi-audio-latino",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/d0Yld2HRTzJsemfjIxMbIqywbSD.jpg",
  },
  {
    name: "Coicent Latino",
    link: "https://www.animeonegai.com/es/watch/5gJEL6EjLN6yLcdqV",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/Aeyvtayt8ZxOuxWA1zf5MkoVNbn.jpg",
  },
  {
    name: "Sailor Moon Eternal Parte 1 Latino",
    link: "https://www1.animeonline.ninja/pelicula/bishoujo-senshi-sailor-moon-eternal-1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/3FvokGWH2yMz4CbjpcHPFYBP8qb.jpg",
  },
  {
    name: "Sailor Moon Eternal Parte 2 Latino",
    link: "https://www1.animeonline.ninja/pelicula/bishoujo-senshi-sailor-moon-eternal-2/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/4QA7pKpmNgeXkhN1FFIBelHwr6V.jpg",
  },
  {
    name: "Date A Bullet: Dead or Bullet",
    link: "https://www1.otakustv.com/anime/date-a-bullet-dead-or-bullet",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/4EokCcm4N6BMp42oLgNOl6r7aoy.jpg",
  },
  {
    name: "Date A Live Movie: Mayuri Judgment",
    link: "https://animebum.net/v-date-a-live-movie-mayuri-judgment",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/66F3PsT9JzE93WDgp5Ry8KIdM4n.jpg",
  },
  {
    name: "Dragon Ball Super Broly Latino",
    link: "https://www.animelatinohd.com/anime/dragon-ball-super-movie-broly",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/qdAdwnlkNogUATybTncHAG0MT3i.jpg",
  },
  {
    name: "Hulla Fulla Dance",
    link: "https://animebum.net/v-hula-fulla-dance",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/8SYsf4yF0CmrdCVZSj43tZHGoG6.jpg",
  },
  {
    name: "BELLE Latino",
    link: "https://peliculasflix.co/peliculas/belle",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/fE79agBNwNTZf28fGVs9wY2NkCS.jpg",
  },
  {
    name: "El Viaje de Chihiro Latino",
    link: "https://www.animelatinohd.com/anime/sen-to-chihiro-no-kamikakushi",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/sRDfWh1x7qVi9R6Y86XVCQzSjVH.jpg",
  },
  {
    name: "Palabras que Burbujean Como un Refresco Latino",
    link: "https://henaojara2.com/ver/episode/palabras-que-burbujean-como-un-refresco-espanol-latino-hd-1x1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/489F49miNdfDanV1buIPKLR6ym9.jpg",
  },
  {
    name: "Pokémon Mewtwo Contraataca: Evolución Latino",
    link: "https://animebum.net/v-pokemon-mewtwo-contraataca-evolucion-audio-latino",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/6ufHj6uqyje1ogAlCvRB54hcGgn.jpg",
  },
  {
    name: "Pokémon: El poder de todos Latino",
    link: "https://www.animelatinohd.com/anime/pokemon-movie-21-minna-no-monogatari",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/kgNLLBgKxUKViZ0NiBED6cN8KnK.jpg",
  },
  {
    name: "Pokémon: Detective Pikachu Latino",
    link: "https://pelispop.lat/pelicula/pokemon-detective-pikachu/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/99fKFSYYKadyJ8axbhuXDy4zpfO.jpg",
  },
  {
    name: "Sword Art Online: Progressive",
    link: "https://www1.otakustv.com/anime/sword-art-online-progressive-movie-hoshi-naki-yoru-no-aria",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/2kvl6lcgoyAaf8cSRkzxE611u6T.jpg",
  },
  {
    name: "Sword Art Online: Progressive Latino",
    link: "https://henaojara2.com/ver/sword-art-online-progressive-espanol-latino-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/2kvl6lcgoyAaf8cSRkzxE611u6T.jpg",
  },
  {
    name: "Sword Art Online: Progressive Scherzo of Deep Night Latino",
    link: "https://www.henaojara.com/ver/season/sword-art-online-progressive-scherzo-of-deep-night-espanol-latino-hd-1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/a5alro35e0XUa21Hb9Wlci67U73.jpg",
  },
  {
    name: "Teasing Master Takagi-san: Pelicula Latino",
    link: "https://henaojara2.com/ver/season/pelicula-eiga-karakai-jouzu-no-takagi-san-espanol-latino-hd-1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/14XlXF6t940NLEm8WCmPXmRDtnc.jpg",
  },
  {
    name: "Ai No Utagoe Wo Kikasete",
    link: "https://www1.otakustv.com/anime/ai-no-utagoe-wo-kikasete",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/4nswAImPQjLbyCpXkwHjFlXxAeG.jpg",
  },
  {
    name: "Canta Con Una Chispa De Armonía",
    link: "https://henaojara2.com/ver/episode/ai-no-utagoe-wo-kikasete-espanol-latino-hd-1x1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/2hkyfxdJkBRR75msNs6V7Y9hd8k.jpg",
  },
  {
    name: "Fruit Basket Prelude",
    link: "https://www1.otakustv.com/anime/fruits-basket-prelude",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/dUgCPD69mBKpg41DVc9gEBHs3wY.jpg",
  },
  {
    name: "Más Allá De Ti",
    link: "https://www.henaojara.com/ver/kimi-wa-kanata-mas-alla-de-ti-espanol-latino-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/zremTsDpnGNOBFOfcSzIQdk0WFU.jpg",
  },
  {
    name: "Flavors of Youth Latino",
    link: "https://henaojara2.com/ver/sabores-juventud-latino-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/AmEvVC8H4v9ITSVgpG3HCTPaBo1.jpg",
  },
  {
    name: "El Castillo Ambulante Latino",
    link: "https://www.animelatinohd.com/anime/howl-no-ugoku-shiro",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/summupW5iJAbgStpAxSrZq0NiJu.jpg",
  },
  {
    name: "Jujutsu Kaisen 0 Latino",
    link: "https://henaojara2.com/ver/season/pelicula-jujutsu-kaisen-0-espanol-latino-hd-1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/7Cqu1tJpptsoozc93vPiISgyhBm.jpg",
  },
  {
    name: "El niño y la bestia Latino",
    link: "https://henaojara2.com/ver/el-nino-y-la-bestia-latino-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/iMfe0tPCOQJRkiqOyAWGMheky01.jpg",
  },
  {
    name: "El Cuento De La Princesa Kaguya Latino",
    link: "https://henaojara2.com/ver/el-cuento-de-la-princesa-kaguya-espanol-latino-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/3SPzYCeY1KNNIEKgK7GjV1Dwayz.jpg",
  },
  {
    name: "El Viento Se Levanta Latino",
    link: "https://henaojara2.com/ver/el-viento-se-levanta-espanol-latino-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/qHNn6lQ4TLS6ClckCztMAvgsTIP.jpg",
  },
  {
    name: "Shingeki no Kyojin: El arco y la flecha escarlata",
    link: "https://www.animelatinohd.com/anime/shingeki-no-kyojin-movie-1-guren-no-yumiya",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/1tmIKXWWDAvMJbbo66HrpZtHCb6.jpg",
  },
  {
    name: "Shingeki no Kyojin: Las alas de la libertad",
    link: "https://www.animelatinohd.com/anime/shingeki-no-kyojin-movie-2-jiyuu-no-tsubasa",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/tcVANUddqdRm2hOyrrISd89Lid2.jpg",
  },
  {
    name: "Shingeki no Kyojin: El rugido del despertar",
    link: "https://www.animelatinohd.com/anime/shingeki-no-kyojin-season-2-movie-kakusei-no-houkou",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/juKWzBx4jgF8dhAV0qktMCeEfe6.jpg",
  },
  {
    name: "Kanna Y Los Dioses De Octubre Latino",
    link: "https://drive.google.com/drive/u/0/folders/1O3g1RXAd-3j4-QEVBwABR3cZjZOIWjGy",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/kfjgWuV5oRhzM3pTqvKU8DTDGEu.jpg",
  },
  {
    name: "Koutetsujou no Kabaneri Movie 3",
    link: "https://www1.otakustv.com/anime/koutetsujou-no-kabaneri-unato-kessen",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/pJOYBevz1tMTtexr3KeSx8G6SCN.jpg",
  },
  {
    name: "Koutetsujou no Kabaneri Movie 3 Latino",
    link: "https://animebum.net/v-koutetsujou-no-kabaneri-movie-3-unato-kessen-audio-latino",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/pJOYBevz1tMTtexr3KeSx8G6SCN.jpg",
  },
  {
    name: "Yu-Gi-Oh! El Lado Obscuro De Las Dimensiones Latino",
    link: "https://monoschinos2.com/anime/yu-gi-oh-el-lado-oscuro-de-dimensiones-latino-sub-espanol",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/gwHQsHSGdJD0xcru4JF6Xd99q3p.jpg",
  },
  {
    name: "Made in Abyss Movie 1 Latino",
    link: "https://henaojara2.com/ver/season/pelicula-eiga-karakai-jouzu-no-takagi-san-espanol-latino-hd-1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/qFIW1hxWOSLMwUuI9MB3udqmFUU.jpg",
  },
  {
    name: "Made in Abyss Movie 2 Latino",
    link: "https://animebum.net/v-made-in-abyss-movie-2-hourou-suru-tasogare-audio-latino",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/fUANpIoeKeK9mngo5wJz6bTNzt4.jpg",
  },
  {
    name: "Mi Vecino Totoro Latino",
    link: "https://henaojara2.com/ver/496/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/cajdWJfmvTqZJjbryygNNMe65GW.jpg",
  },
  {
    name: "Okko y los fantasmas: la pelicula",
    link: "https://henaojara2.com/ver/wakaokami-wa-shougakusei-espanol-latino-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/vYjzuMvI3Q4VUr7LYK4oJ2pJx9Y.jpg",
  },
  {
    name: "Inazuma Eleven: La película Latino",
    link: "https://vix.com/es-es/detail/video-4259665",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/g08t3r6oesgg2Js0bQgWY4ZnHY1.jpg",
  },
  {
    name: "InuYasha Movie 1 Latino",
    link: "https://vix.com/es-es/detail/video-4259681",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/xhfSdY68URA7iHXVmMjmWBJd07q.jpg",
  },
  {
    name: "InuYasha Movie 2 Latino",
    link: "https://vix.com/es-es/detail/video-4287298",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/enYAtRF46XCm1qUHI2sDS7U2T5z.jpg",
  },
  {
    name: "InuYasha Movie 3 Latino",
    link: "https://vix.com/es-es/detail/video-4259692",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/wuwnRFk8pmuyAPlBdWo1cW9C8Dx.jpg",
  },
  {
    name: "InuYasha Movie 4 Latino",
    link: "https://vix.com/es-es/detail/video-4287290",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/i5IFMT8dgMBAL8W80GSOzqS8kXm.jpg",
  },
  {
    name: "La chica que saltaba a través del tiempo Latino",
    link: "https://www.animelatinohd.com/anime/toki-wo-kakeru-shoujo",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/d2OqnQtOu31lImipTIcTTT9FaQI.jpg",
  },
  {
    name: "Pompoko Latino",
    link: "https://henaojara2.com/ver/pompoko-espanol-latino-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/3YDaDwaB4XnRhYLLdW8qzS9VVoS.jpg",
  },
  {
    name: "Perfect Blue",
    link: "https://www1.otakustv.com/anime/perfect-blue",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/t102ksBHM4P6t2AQZQ6zipGtYbr.jpg",
  },
  {
    name: "Ponyo y el secreto de la Sirenita Latino",
    link: "https://henaojara2.com/ver/851/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/c4si8JOIVnN03fESnwngdkJxNj3.jpg",
  },
  {
    name: "Psycho-Pass Movie 1 Latino",
    link: "https://www1.animeonline.ninja/pelicula/psycho-pass-sinners-of-the-system-case-1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/pieDnLArEw43kZxYejn3XbrNZdg.jpg",
  },
  {
    name: "Psycho-Pass Movie 2 Latino",
    link: "https://www1.animeonline.ninja/pelicula/psycho-pass-sinners-of-the-system-case-2-first-guardian/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/pvPvg8k7tfER4xPFJ4edPcx7ImC.jpg",
  },
  {
    name: "Psycho-Pass Movie 3 Latino",
    link: "https://www1.animeonline.ninja/pelicula/psycho-pass-sinners-of-the-system-case-3/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/z58HUycqOWH38CK8R3Q03v0M8UC.jpg",
  },
  {
    name: "Psycho-Pass 3: FIRST INSPECTOR",
    link: "https://www1.animeonline.ninja/pelicula/psycho-pass-3-first-inspector/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/cojOMQvTwcPTSUc0BnRZqfKU34y.jpg",
  },
  {
    name: "The Secret World of Arrietty Latino",
    link: "https://henaojara2.com/ver/mundo-de-los-diminutos-latino-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/dJIY15svyL5aCeGfd036uAB5x4D.jpg",
  },
  {
    name: "The King's Avatar: For the Glory Latino",
    link: "https://tubitv.com/movies/581873/the-king-s-avatar-for-the-glory-espa-ol?start=true",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/9CC0s1VbBHBUBWMWi5mueXHQYCK.jpg",
  },
  {
    name: "Towa no Quon: Movie 1 Latino",
    link: "https://henaojara2.com/ver/episode/peliculas-towa-no-quon-espanol-latino-hd-1x1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/ylXRjwhPvN3hPtMfQ1kLHtP1Mfs.jpg",
  },
  {
    name: "Towa no Quon: Movie 2 Latino",
    link: "https://henaojara2.com/ver/episode/peliculas-towa-no-quon-espanol-latino-hd-1x2/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/83mzED0e2naR6ap8W74GelFM8cf.jpg",
  },
  {
    name: "Towa no Quon: Movie 3 Latino",
    link: "https://henaojara2.com/ver/episode/peliculas-towa-no-quon-espanol-latino-hd-1x3/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/nOd53C825QEVQboCIh43iAxHxpy.jpg",
  },
  {
    name: "Towa no Quon: Movie 4 Latino",
    link: "https://henaojara2.com/ver/episode/peliculas-towa-no-quon-espanol-latino-hd-1x4/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/oQheBkbGkMzvc57N2LZgY73Oj16.jpg",
  },
  {
    name: "Towa no Quon: Movie 5 Latino",
    link: "https://henaojara2.com/ver/episode/peliculas-towa-no-quon-espanol-latino-hd-1x5/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/tiqvem84cpEJTVB0xhq3SP5ejuc.jpg",
  },
  {
    name: "Towa no Quon: Movie 6 Latino",
    link: "https://henaojara2.com/ver/episode/peliculas-towa-no-quon-espanol-latino-hd-1x6/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/83mzED0e2naR6ap8W74GelFM8cf.jpg",
  },
  {
    name: "Un Estraño En La Orilla Del Mar",
    link: "https://henaojara2.com/ver/umibe-no-etranger-sub-espanol-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/oAWRp4jwuCFZshUlkYyJIXAvF99.jpg",
  },
  {
    name: "Ghost in the Shell Latino",
    link: "https://www.animelatinohd.com/anime/koukaku-kidoutai-stand-alone-complex-2nd-gig-individual-eleven",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/9dcsUNdMVK6hEyD3CiVmBWG594s.jpg",
  },
  {
    name: "Mobile Suit Gundam",
    link: "https://www1.otakustv.com/anime/kidou-senshi-gundam-cucuruz-doan-no-shima",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/sRUKTGQngY3XAJ0nxjvCO030Kby.jpg",
  },
  {
    name: "Ni no Kuni Latino",
    link: "https://www1.animeonline.ninja/pelicula/ni-no-kuni/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/rtmpBx8BBRyCjZwLu1x9Zg2VnMZ.jpg",
  },
  {
    name: "Konosuba The Movie Legend of Crismon",
    link: "https://www1.otakustv.com/anime/kono-subarashii-sekai-ni-shukufuku-wo-kurenai-densetsu-16o2iapv",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/wqpTrmGiqMJ6onAq3zrBhfomIJl.jpg",
  },
  {
    name: "Konosuba The Movie Legend of Crismon Latino",
    link: "https://ww3.animeonline.ninja/pelicula/konosuba-kurenai-densetsu-2/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/wqpTrmGiqMJ6onAq3zrBhfomIJl.jpg",
  },
  {
    name: "La Colina De Las Amapolas Latino",
    link: "https://henaojara2.com/ver/862/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/A70r0FeqeASmm8X5uqoTwXLiO4r.jpg",
  },
  {
    name: "La Princesa Mononoke Latino",
    link: "https://henaojara2.com/ver/la-princesa-mononoke-espanol-latino-hd/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/9EXOVRt9j6Fy7RqhgU3CLtWkXPL.jpg",
  },
  {
    name: "Odd Taxi Movie",
    link: "https://www1.otakustv.com/anime/odd-taxi-movie-in-the-woods",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/hV0ORYPc3ImcfgK0ay3BuPgjg1G.jpg",
  },
  {
    name: "WATATEN!",
    link: "https://www1.otakustv.com/anime/watashi-ni-tenshi-ga-maiorita-precious-friends",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/A5IUpILPQufbCbjI62LXrYZTWhm.jpg",
  },
  {
    name: "Youjo Senki Movie",
    link: "https://www1.otakustv.com/anime/youjo-senki-movie",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/dMcaQp4XfPK11bDeUyj2JOqEY8I.jpg",
  },
  {
    name: "Youjo Senki Movie Latino",
    link: "https://www1.otakustv.com/anime/youjo-senki-movie-latino",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/dMcaQp4XfPK11bDeUyj2JOqEY8I.jpg",
  },
  {
    name: "Yuru Camp Movie",
    link: "https://www1.otakustv.com/anime/yuru-camp-movie",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/nBU9ZF7P397Xp7IlUfwbShigAcE.jpg",
  },
];
const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");
var ul = document.getElementById("mangas");
var encontrado = false;
function search() {
  const query = searchInput.value.toLowerCase().trim();
  const filteredData = data.filter((item) => item.name.toLowerCase() === query);
  // Mostrar los resultados
  filteredData.forEach((item) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.link;
    link.target = "_blank";
    link.style = "text-decoration: none; color: white;";
    li.style = "padding: 10px; margin-bottom: 5px;";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.width = 50;
    img.height = 50;
    img.style = "padding-right: 5px;";
    link.appendChild(img);

    const span = document.createElement("span");
    span.textContent = item.name;
    link.appendChild(span);

    li.appendChild(link);
    resultsList.appendChild(li);
    ul.classList.add("filtro");
  });
  if (filteredData.length === 0) {
    var mensaje = document.getElementById("mensaje");
    mensaje.style.display = "block";
  } else {
    var mensaje = document.getElementById("mensaje");
    mensaje.style.display = "none";
  }
  if (query === "") {
    resultsList.innerHTML = ""; // Limpiar la lista de resultados si el campo de búsqueda está vacío
    ul.classList.remove("filtro");
    var mensaje = document.getElementById("mensaje");
    mensaje.style.display = "none";
    return; // Salir de la función
  }
}
window.addEventListener("scroll", function () {
  var scrollUpButton = document.getElementById("scrollUpButton");
  var scrollDownButton = document.getElementById("scrollDownButton");
  var windowHeight = window.innerHeight;
  var documentHeight = document.body.scrollHeight;
  if (window.pageYOffset > windowHeight / 2) {
    // Muestra el botón de ir hacia arriba si estás más abajo de la mitad de la ventana
    scrollUpButton.classList.add("show");
  } else {
    scrollUpButton.classList.remove("show");
  }
  if (window.pageYOffset + windowHeight < documentHeight - windowHeight / 2) {
    // Muestra el botón de ir hacia abajo si no estás cerca del final de la página
    scrollDownButton.classList.add("show");
  } else {
    scrollDownButton.classList.remove("show");
  }
});

document
  .getElementById("scrollUpButton")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" }); // Desplázate suavemente hacia la parte superior de la página
  });

document
  .getElementById("scrollDownButton")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    }); // Desplázate suavemente hacia el final de la página
  });

// Escuchar eventos de entrada en el campo de búsqueda
searchInput.addEventListener("input", search);
