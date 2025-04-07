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
    name: "Alya Sometimes Hides Her Feelings in Russian",
    link: "https://visortmo.com/library/manga/73200/tokidokibosottorussiagodedererutonarinoalyasan",
    image:
      "https://images.tokopedia.net/img/cache/700/hDjmkQ/2023/5/2/14074ab6-5305-4bcd-81f4-9801476ae2a3.jpg",
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
    image:
      "https://m.media-amazon.com/images/I/61X7Q844lHL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Danmachi 2",
    link: "https://lectortmo.com/library/manga/45950/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-ii",
    image:
      "https://m.media-amazon.com/images/I/71E8l2cKUYL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "DanMachi Nichijou",
    link: "https://lectortmo.com/library/manga/10118/Dungeon-ni-Deai-o-Motomeru-no-wa-Machigatte-Iru-Darou-ka-4koma--Days-of-Goddess-",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5SPvr9sbssCEMAxApvSZYFbSMMLR8zOraw&usqp=CAU",
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
      "https://m.media-amazon.com/images/I/814ZrdPDRfL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Fairy Tail",
    link: "https://inmanga.com/ver/manga/Fairy-Tail/d39c9e78-2d59-422a-b888-cdf6e7d72cbc",
    image:
      "https://m.media-amazon.com/images/I/81EIdomF4FL._AC_UF1000,1000_QL80_.jpg",
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
      "https://m.media-amazon.com/images/I/81oCwXtMrfL._AC_UF894,1000_QL80_.jpg",
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
    image: "https://m.media-amazon.com/images/I/51jKolaitgL.jpg",
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
      "https://m.media-amazon.com/images/I/71LMJz0VfBL._AC_UF1000,1000_QL80_.jpg",
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
    name: "Jojos Bizarre Adventure Parte 7: Steel Ball Run",
    link: "https://inmanga.com/ver/manga/Jojos-Bizarre-Adventure-Parte-7-Steel-Ball-Run/9bb83484-c474-4750-baaa-c4b028ec744b",
    image: "https://m.media-amazon.com/images/I/51V1bzeEAoL._AC_SY780_.jpg",
  },
  {
    name: "Jojo's Bizarre Adventure: Asi Hablo Kishibe Rohan",
    link: "https://inmanga.com/ver/manga/Kishibe-Rohan-wa-Ugokanai/07e56a21-3dd6-4624-a32b-1e4d5878f0b0",
    image: "https://imagessl9.casadellibro.com/a/l/s5/49/9788418837449.webp",
  },
  {
    name: "Joshi Kausei",
    link: "https://lectortmo.com/library/manga/11675/joshi-kausei",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1478295912i/32873150.jpg",
  },
  {
    name: "Jujutsu Kaisen",
    link: "https://inmanga.com/ver/manga/Jujutsu-Kaisen/d88692a5-c341-47fc-8e39-da11a8fdee82",
    image: "../../img/jujutsu_kaisen_manga.jpg",
  },
  {
    name: "K-ON!",
    link: "https://inmanga.com/ver/manga/K-ON/53978dbf-6629-42ae-965c-f3e9de12ca03",
    image:
      "https://m.media-amazon.com/images/I/518+dP7oYqL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Kaguya-sama",
    link: "https://lectortmo.com/library/manga/131/kaguya-sama-wa-kokurasetai-tensai-tachi-no-renai-zunosen",
    image: "https://m.media-amazon.com/images/I/81+380N1RFL.jpg",
  },
  {
    name: "Kaguya-sama Full Color",
    link: "https://lectortmo.com/library/manga/70841/kaguya-sama-love-is-war-digital-colored-comics",
    image: "https://m.media-amazon.com/images/I/81+380N1RFL.jpg",
  },
  {
    name: "Kaguya-sama Wa Kokurasetai Official Dounjinshi",
    link: "https://lectortmo.com/library/manga/41615/kaguya-sama-wa-kokurasetai-official-doujinshi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhv4OWHvizSgUlzXKnPfZ-ZijTpk45zSZ07MDIkd5YJO-9jyJ5ra5WFr3I_H-AC1-iFd4&usqp=CAU",
  },
  {
    name: "La Sacerdotisa de Octubre",
    link: "https://lectortmo.com/library/manga/40541/kannazuki-no-miko",
    image:
      "https://m.media-amazon.com/images/I/51tBCoh6phL._AC_UF350,350_QL50_.jpg",
  },
  {
    name: "La Sacerdotisa de Octubre Spin-Off",
    link: "https://lectortmo.com/library/manga/50416/kannazuki-no-miko-destiny-of-shrine-maiden-spin-off",
    image:
      "https://m.media-amazon.com/images/I/51837wCFORL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Kanojo Okarishimasu",
    link: "https://lectortmo.com/library/manga/30388/kanojo-okarishimasu",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRGtQh-PRMsAMGEpT7H1GsSYv6dyNcdqXtQhQnPdoKLm-kgQnNb45lmUx0RD3qVS733qk&usqp=CAU",
  },
  {
    name: "Kanojo Okarishimasu Antologia",
    link: "https://lectortmo.com/library/manga/52414/kanojo-okarishimasu-antologia",
    image: "https://pbs.twimg.com/media/EeFL1wiXsAEYobd.jpg:large",
  },
  {
    name: "Karakai Jouzu no Takagi-san",
    link: "https://lectortmo.com/library/manga/8960/karakai-jouzu-no-takagi-san",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumiB_KuOrIOPXuH6SIorvCJUTMyy54Q_zhmKm37JjAa2dXZER6ht1XMuTbItYPhnZPAY&usqp=CAU",
  },
  {
    name: "Katekyo Hitman Reborn",
    link: "https://inmanga.com/ver/manga/Katekyo-Hitman-Reborn/242430be-c91b-461d-a3f2-4505003299f8",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/6x7mx9f3ufHCC3pNgMoMnzVo3jw.jpg",
  },
  {
    name: "Kenichi",
    link: "https://inmanga.com/ver/manga/Shijo-Saikyo-no-Deshi-Kenichi/82697fa5-678a-405c-b5a3-0608ee7e7244",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNL7wtw_hhTeCtBBVHUtEdmKwNih0N6LVq8RnOrmnXwfNlRj6Kq8RkKZNHE7KNpg6wRz4&usqp=CAU",
  },
  {
    name: "Kimi Ni Todoke",
    link: "https://inmanga.com/ver/manga/Kimi-Ni-Todoke/62aad989-b37d-410f-893d-5ae788fa9ffc",
    image:
      "https://m.media-amazon.com/images/I/51rsjJvXMsL._SX330_BO1,204,203,200_.jpg",
  },
  {
    name: "Kimi No Na Wa",
    link: "https://inmanga.com/ver/manga/Kimi-no-Na-wa/7ac03e04-35a4-4abf-81ed-e12d0256019e",
    image: "https://m.media-amazon.com/images/I/41PleQlMxVL.jpg",
  },
  {
    name: "Kimi No Na Wa After Story",
    link: "https://inmanga.com/ver/manga/Your-Name-After-Story/6c69b3f6-28ae-441e-8515-0482d9bdb126",
    image: "https://m.media-amazon.com/images/I/81yvin6NLvL.jpg",
  },
  {
    name: "Kiss Him, Not Me",
    link: "https://inmanga.com/ver/manga/Watashi-ga-Motete-Dousunda/9bf8c174-8061-408c-814e-a7b6c9364010",
    image: "https://m.media-amazon.com/images/I/91ODsEQ7kPL.jpg",
  },
  {
    name: "Koe no Katachi",
    link: "https://inmanga.com/ver/manga/Koe-no-Katachi/a8d51383-4afc-43c6-adea-78c20cfce80c",
    image: "https://m.media-amazon.com/images/I/61leF3kduEL.jpg",
  },
  {
    name: "Komi-San no puede comunicarse",
    link: "https://lectortmo.com/library/manga/13698/komi-san-wa-komyushou-desu",
    image:
      "https://img1.ak.crunchyroll.com/i/spire3/9d8a8183b40eacb1911e0489bd7dc6421638218741_main.png",
  },
  {
    name: "Kubo no me deja ser invisible",
    link: "https://mangaplus.shueisha.co.jp/titles/200089",
    image: "https://m.media-amazon.com/images/I/71FZU3diOWL.jpg",
  },
  {
    name: "Kuma Kuma Kuma Bear",
    link: "https://lectortmo.com/library/manga/38049/kuma-kuma-kuma-bear-manga",
    image: "https://m.media-amazon.com/images/I/81IxEKUSt9S.jpg",
  },
  {
    name: "Kuma Kuma Kuma Bear Spin-Off",
    link: "https://lectortmo.com/library/manga/58570/kuma-kuma-kuma-bear-kyou-mo-kuma-kuma-biyori",
    image:
      "https://somoskudasai.com/wp-content/uploads/2020/09/EhjkGqAU4AMr_SU.jpg",
  },
  {
    name: "Kuroko no Basket",
    link: "https://inmanga.com/ver/manga/Kuroko-no-Basket/d81c979d-469f-47cf-bacb-f253b72921b3",
    image: "https://m.media-amazon.com/images/I/71Jscy4HqEL.jpg",
  },
  {
    name: "Konosuba",
    link: "https://inmanga.com/ver/manga/Kono-Subarashii-Sekai-ni-Bakuen-wo/57c88d71-9190-4ee1-8e01-6896c7fa5842",
    image:
      "https://m.media-amazon.com/images/I/51vcSEZ-vZL._SX332_BO1,204,203,200_.jpg",
  },
  {
    name: "Lycoris Recoil",
    link: "https://lectortmo.com/library/manga/71550/lycoris-recoil",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/xTYDhM8LCoXX8VOLUmqR2qTW7Hi.jpg",
  },
  {
    name: "The Honor at Magic High School",
    link: "https://inmanga.com/ver/manga/Mahouka-Koukou-no-Rettousei-Tsuioku-Hen/be5cd7f5-3307-4562-879a-ed60b3082c1a",
    image:
      "https://pack-yak.intomanga.com/thumbnails/manga/Mahouka-Koukou-no-Rettousei-Tsuioku-Hen/be5cd7f5-3307-4562-879a-ed60b3082c1a",
  },
  {
    name: "The Irregular at Magic High School",
    link: "https://inmanga.com/ver/manga/Mahouka-Koukou-no-Rettousei-Nyuugaku-hen/4febd68e-1c51-4f7f-8141-f6067afeab05",
    image:
      "https://pack-yak.intomanga.com/thumbnails/manga/Mahouka-Koukou-no-Rettousei-Nyuugaku-hen/4febd68e-1c51-4f7f-8141-f6067afeab05",
  },
  {
    name: "Mashle",
    link: "https://lectortmo.com/library/manga/48025/mashle",
    image: "../../img/mashle.jpg",
  },
  {
    name: "Mieruko-Chan",
    link: "https://lectortmo.com/library/manga/41746/mieruko-chan",
    image: "https://m.media-amazon.com/images/I/51cWTdQTBrL.jpg",
  },
  {
    name: "Mieruko-Chan Official Anthology Comic",
    link: "https://lectortmo.com/library/manga/65152/mieruko-chan-koushiki-anthology-comic",
    image: "https://m.media-amazon.com/images/I/81FWczZ+IJL.jpg",
  },
  {
    name: "Miss Kobayashi-San Dragon Maid",
    link: "https://es.novelcool.com/novel/Kobayashi-san-Chi-No-Maid-Dragon.html",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/3bTFNsVnEGk4h2S84fr1ncl8wKn.jpg",
  },
  {
    name: "Mob Psycho 100",
    link: "https://inmanga.com/ver/manga/Mob-Psycho-100/646ff44c-15dd-4838-b08d-a8d3f6f2ccc5",
    image:
      "https://m.media-amazon.com/images/I/61Uyznt4MeL._SX351_BO1,204,203,200_.jpg",
  },
  {
    name: "Monster",
    link: "https://inmanga.com/ver/manga/Monster/be792685-a03f-4ac6-94c3-d9149c12f808",
    image: "https://m.media-amazon.com/images/I/51DKcL0JMVL.jpg",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation",
    link: "https://lectortmo.com/library/manga/8635/mushoku-tensei-isekai-ittara-honki-dasu",
    image: "https://m.media-amazon.com/images/I/81vgliRXgRL.jpg",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Roxy Gets Serious",
    link: "https://lectortmo.com/library/manga/38880/Mushoku-Tensei--Roxy-datt",
    image: "https://m.media-amazon.com/images/I/51Ax571KWEL.jpg",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation 4-koma",
    link: "https://lectortmo.com/library/manga/47498/mushoku-tensei-4-koma-ni-natte-mo-honki-dasu",
    image: "https://somoskudasai.com/wp-content/uploads/2020/07/716pJIkhqL.jpg",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Depressed Magican Arc",
    link: "https://lectortmo.com/library/manga/65568/mushoku-tensei-isekai-ittara-honki-dasu-shitsui-no-majutsushi-hen",
    image:
      "https://m.media-amazon.com/images/I/81vgliRXgRL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Eris Gaiden",
    link: "https://lectortmo.com/library/manga/67784/mushoku-tensei-eris-wa-honki-de-kiba-wo-togu",
    image:
      "https://m.media-amazon.com/images/I/81+9230+OLL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "My Clueless First Friend",
    link: "https://lectortmo.com/library/manga/42332/jijyou-wo-shiranai-tenkousei-ga-guigui-kuru",
    image: "https://m.media-amazon.com/images/I/51EpK2wFI1L.jpg",
  },
  {
    name: "My Dress-Up Darling",
    link: "https://lectortmo.com/library/manga/38647/sono-bisque-doll-wa-koi-wo-suru",
    image:
      "https://m.media-amazon.com/images/I/71Qp3bjYWML._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "My Hero Academia",
    link: "https://mangaplus.shueisha.co.jp/titles/200019",
    image: "../../img/myheroacademia.jpg",
  },
  {
    name: "My Hero Academia Vigiliants",
    link: "https://mangaplus.shueisha.co.jp/titles/200035",
    image: "https://m.media-amazon.com/images/I/81+j6ZZFFML.jpg",
  },
  {
    name: "My Next Life as a Villainess: On the Verge of Doom!",
    link: "https://lectortmo.com/library/manga/46698/otome-game-no-hametsu-flag-shika-nai-akuyaku-reijou-ni-tensei-shite-shimatta-zettai-zetsumei-hametsu-sunzen-hen",
    image:
      "https://m.media-amazon.com/images/I/51zj9eGYmnL._SX349_BO1,204,203,200_.jpg",
  },
  {
    name: "My Next Life as a Villainess: All Routes Lead to Doom!",
    link: "https://lectortmo.com/library/manga/32788/otome-game-no-hametsu-flag-shika-nai-akuyaku-reijou-ni-tensei-shite-shimatta",
    image:
      "https://m.media-amazon.com/images/I/51aNuNYD3DL._SX349_BO1,204,203,200_.jpg",
  },
  {
    name: "My Next Life as a Villainess: Destruction Flag Otome",
    link: "https://lectortmo.com/library/manga/49346/otome-game-no-hametsu-flag-shika-nai-akuyaku-reijou-ni-tensei-shite-shimatta-komikku-ansorojii",
    image: "https://m.media-amazon.com/images/I/51ki4Kv+qsL.jpg",
  },
  {
    name: "My Next Life as a Villainess: All Routes Lead to Doom! x Arte",
    link: "https://lectortmo.com/library/manga/50480/hamefura-x-arte",
    image:
      "https://somoskudasai.com/wp-content/uploads/2020/05/EYmetNdUEAAJjQz-724x1024.jpg",
  },
  {
    name: "Naruto",
    link: "https://mangaplus.shueisha.co.jp/titles/200001",
    image: "https://m.media-amazon.com/images/I/61LVJN2aIoL.jpg",
  },
  {
    name: "Neon Genesis Evangelion",
    link: "https://inmanga.com/ver/manga/Neon-Genesis-Evangelion/7d6045aa-1cb9-46e7-89b9-19e50798d70a",
    image: "https://m.media-amazon.com/images/I/71xYmFF2ElL.jpg",
  },
  {
    name: "Neon Genesis Evangelion: Shinji Ikari Raising Project",
    link: "https://inmanga.com/ver/manga/Neon-Genesis-Evangelion-Ikari-Shinji-Ikusei-Keikaku/a5026f6f-77cb-4a65-bba9-d3f3fad65c5e",
    image:
      "https://pack-yak.intomanga.com/thumbnails/manga/Neon-Genesis-Evangelion-Ikari-Shinji-Ikusei-Keikaku/a5026f6f-77cb-4a65-bba9-d3f3fad65c5e",
  },
  {
    name: "No Game No Life",
    link: "https://inmanga.com/ver/manga/No-Game-No-Life/47d17e57-0f6e-469a-8707-f120965b9071",
    image:
      "https://pack-yak.intomanga.com/thumbnails/manga/No-Game-No-Life/47d17e57-0f6e-469a-8707-f120965b9071",
  },
  {
    name: "Noblesse",
    link: "https://inmanga.com/ver/manga/Noblesse/b17f2ddb-d279-444e-bad4-cf62aac44bbe",
    image: "https://m.media-amazon.com/images/I/4170SRz2AWL.jpg",
  },
  {
    name: "Noragami",
    link: "https://inmanga.com/ver/manga/Noragami/c9eac783-2e3b-4efa-892e-8300e03c077f",
    image: "https://m.media-amazon.com/images/I/81c15BmyXvL.jpg",
  },
  {
    name: "Nisekoi",
    link: "https://mangaplus.shueisha.co.jp/titles/200004",
    image: "https://m.media-amazon.com/images/I/51iTzpttHgL.jpg",
  },
  {
    name: "One Punch Man",
    link: "https://inmanga.com/ver/manga/One-Punch-Man/030de05e-ef8f-4cfe-a349-89b4599f6bf5",
    image:
      "https://m.media-amazon.com/images/I/81VAgJoB3BL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Oshi No Ko",
    link: "https://lectortmo.com/library/manga/49490/oshi-no-ko",
    image:
      "https://m.media-amazon.com/images/I/51jhRrffW5L._SX331_BO1,204,203,200_.jpg",
  },
  {
    name: "Overlord",
    link: "https://inmanga.com/ver/manga/Overlord/56019792-bc4b-4c9a-b463-a1077d69451c",
    image: "https://m.media-amazon.com/images/I/51vzWfbGqpL.jpg",
  },
  {
    name: "Owari no Seraph",
    link: "https://inmanga.com/ver/manga/Owari-no-Seraph/377313f9-2a94-454c-9552-ae836c906151",
    image: "https://m.media-amazon.com/images/I/51bKwXVFlYL._AC_SY780_.jpg",
  },
  {
    name: "Platinum End",
    link: "https://inmanga.com/ver/manga/Platinum-End/96495c7b-1c03-4b3e-b3ce-08859e6fd47e",
    image:
      "https://m.media-amazon.com/images/I/51kTMAiNFAL._SX331_BO1,204,203,200_.jpg",
  },
  {
    name: "Pretty Soldier Sailor Moon Material Collection",
    link: "https://issuu.com/sailormoongerman/docs/smg",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/aVjhC5Iv0VHq6RgSEo479ANxImG.jpg",
  },
  {
    name: "Pretty Soldier Sailor Moon",
    link: "https://inmanga.com/ver/manga/Sailor-Moon/a679025c-f5ec-438d-8747-b58142b07de0",
    image: "https://m.media-amazon.com/images/I/61ddWZJCYwL.jpg",
  },
  {
    name: "Re:Zero",
    link: "https://inmanga.com/ver/manga/Re-Zero-kara-Hajimeru-Isekai-Seikatsu-Dai-2-Shou-Yashiki-no-Isshuukan-hen/834b0816-eee1-434a-8e55-ab98a0d84b13",
    image: "https://m.media-amazon.com/images/I/51GmY8i7UML._AC_SY780_.jpg",
  },
  {
    name: "Re:Zero Official Anthology",
    link: "https://inmanga.com/ver/manga/Re-Zero-Kara-Hajimeru-Isekai-Seikatsu-Official-Anthology/f8d15aa7-2f3b-477f-a388-2304f8cfb0f7",
    image:
      "https://pack-yak.intomanga.com/thumbnails/manga/Re-Zero-Kara-Hajimeru-Isekai-Seikatsu-Official-Anthology/f8d15aa7-2f3b-477f-a388-2304f8cfb0f7",
  },
  {
    name: "Re:Zero x Konosuba",
    link: "https://inmanga.com/ver/manga/Re-Zero-x-Konosuba/e49e17d2-2d23-4b3f-8ad0-8f3f84b4b956",
    image: "https://otakuteca.com/images/books/cover/6162193f50728.webp",
  },
  {
    name: "Rurouni Kenshin",
    link: "https://mangaplus.shueisha.co.jp/titles/200011",
    image: "https://m.media-amazon.com/images/I/A1-NjP6ZNAL.jpg",
  },
  {
    name: "Rokudenashi Majutsu Koushi to Akashic Records",
    link: "https://inmanga.com/ver/manga/Rokudenashi-Majutsu-Koushi-to-Akashic-Records/aba78f85-0bda-4dd8-af5e-46937b092c59",
    image:
      "https://pack-yak.intomanga.com/thumbnails/manga/Rokudenashi-Majutsu-Koushi-to-Akashic-Records/aba78f85-0bda-4dd8-af5e-46937b092c59",
  },
  {
    name: "Saekano",
    link: "https://inmanga.com/ver/manga/Saenai-Heroine-no-Sodatekata-Koisuru-Metronome/f5103fbe-f626-4a92-ac84-3d63cf3d607f",
    image:
      "https://m.media-amazon.com/images/I/51sMSlE8V6L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Saint Seiya",
    link: "https://inmanga.com/ver/manga/Saint-Seiya/f4262f21-9b93-49e7-967e-ffab96f19614",
    image: "https://m.media-amazon.com/images/I/61n253zMiuL.jpg",
  },
  {
    name: "Sakura Cardcaptor",
    link: "https://inmanga.com/ver/manga/Cardcaptor-Sakura/5d36d77d-4e0f-4a38-858b-3ff07b5dfebd",
    image: "https://m.media-amazon.com/images/I/91tVeROvtHL.jpg",
  },
  {
    name: "School Days",
    link: "https://inmanga.com/ver/manga/Shaman-King-Kanzenban-Edition/56deee0f-9367-4c25-b102-03f223dbc237",
    image:
      "https://pack-yak.intomanga.com/thumbnails/manga/School-Days/55c9106c-09ea-4b3d-b7e6-2841ce25d6a2",
  },
  {
    name: "Shaman King",
    link: "https://inmanga.com/ver/manga/Shaman-King-Kanzenban-Edition/56deee0f-9367-4c25-b102-03f223dbc237",
    image:
      "https://m.media-amazon.com/images/I/612g0+yjqqL._SX332_BO1,204,203,200_.jpg",
  },
  {
    name: "Shigatsu Wa Kimi No Uso",
    link: "https://inmanga.com/ver/manga/Shigatsu-wa-Kimi-no-Uso/3b5d688d-53e5-4b21-a3b3-5c297627904b",
    image: "https://m.media-amazon.com/images/I/5131fgzv4IL._AC_SY780_.jpg",
  },
  {
    name: "Shigatsu Wa Kimi No Uso: Coda",
    link: "https://inmanga.com/ver/manga/Shigatsu-wa-Kimi-no-Uso-Coda/c8a17395-6112-4e98-9fc7-de650604c380r",
    image: "https://cdn.myanimelist.net/images/manga/2/182483.jpg",
  },
  {
    name: "Shikimori's Not Just a Cutie",
    link: "https://lectortmo.com/library/manga/41757/kawaii-dake-ja-nai-shikimori-san",
    image:
      "https://m.media-amazon.com/images/I/81qx3FBCutL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Shingeki No Kyojin",
    link: "https://inmanga.com/ver/manga/Shingeki-no-Kyojin/f5abfdce-15e5-42ca-93f4-98f824cc1c42",
    image: "https://m.media-amazon.com/images/I/91M9VaZWxOL.jpg",
  },
  {
    name: "Shokugeki no Soma",
    link: "https://inmanga.com/ver/manga/Shokugeki-no-Soma/6cbdc6ec-f4ba-4f4d-8054-d4ad2d04df0c",
    image:
      "https://m.media-amazon.com/images/I/51W8+BwjpNL._SX331_BO1,204,203,200_.jpg",
  },
  {
    name: "Skip and Loafer",
    link: "https://lectortmo.com/library/manga/43012/skip-to-loafer",
    image:
      "https://m.media-amazon.com/images/I/819xN25j8LL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Soul Eater",
    link: "https://inmanga.com/ver/manga/Soul-Eater/15a95686-7daf-4987-b700-a6ec024a9a58",
    image:
      "https://m.media-amazon.com/images/I/51lDdPwBMuL._SX331_BO1,204,203,200_.jpg",
  },
  {
    name: "Soy una Diosa ¿Y ahora que?",
    link: "https://inmanga.com/ver/manga/Kamisama-Hajimemashita/e2d29e94-29ec-4c5f-90ca-c485103817f3",
    image: "https://m.media-amazon.com/images/I/81c4DLObIxL.jpg",
  },
  {
    name: "La chica que me gusta olvidó sus lentes",
    link: "https://lectortmo.com/library/manga/41962/sukinako-ga-megane-wo-wasuretaserie",
    image:
      "https://m.media-amazon.com/images/I/81l0mKjJ7dL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "La chica que me gusta olvidó sus lentes Extras",
    link: "https://visortmo.com/library/manga/65358/extras-de-sukinako-ga-megane-wo-wasureta-extras",
    image:
      "https://m.media-amazon.com/images/I/61PKylTUjFL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Spy x Family",
    link: "https://mangaplus.shueisha.co.jp/titles/200031",
    image: "../../img/spy_x_family_manga.jpg",
  },
  {
    name: "Strike The Blood",
    link: "https://inmanga.com/ver/manga/Strike-The-Blood/578582c9-f45a-4f22-be42-59b7cc488395",
    image: "https://m.media-amazon.com/images/I/510yR6ITHYL.jpg",
  },
  {
    name: "Sword Art Online",
    link: "https://inmanga.com/ver/manga/Sword-Art-Online/4c44cef6-956b-4a8b-a9e1-66420c58a935",
    image: "https://m.media-amazon.com/images/I/518sI436VXL.jpg",
  },
  {
    name: "Sword Art Online: Fairy Dance",
    link: "https://lectortmo.com/library/manga/8603/sword-art-online-fairy-dance",
    image:
      "https://m.media-amazon.com/images/I/81iiUHsAKxL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Sword Art Online: Phantom Bullet",
    link: "https://lectortmo.com/library/manga/8075/sword-art-online-phantom-bullet",
    image: "https://m.media-amazon.com/images/I/51alGHOP0LL.jpg",
  },
  {
    name: "Sword Art Online Alternative: Gun Gale Online",
    link: "https://lectortmo.com/library/manga/18751/Sword-Art-Online-Alternat",
    image:
      "https://m.media-amazon.com/images/I/819XFqc6RsL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Sword Art Online: Ordinal Scale",
    link: "https://lectortmo.com/library/manga/42033/sword-art-online-ordinal-scale",
    image:
      "https://m.media-amazon.com/images/I/71Tssj-NouL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Sword Art Online: Project Alicization",
    link: "https://lectortmo.com/library/manga/19190/sword-art-online-project-alicization",
    image: "https://m.media-amazon.com/images/I/514RdCcLhHL.jpg",
  },
  {
    name: "Sword Art Online: 4-koma",
    link: "https://lectortmo.com/library/manga/10765/sword-art-online-4-koma",
    image:
      "https://m.media-amazon.com/images/I/71AqkddWQmL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Sword Art Online: Progressive",
    link: "https://lectortmo.com/library/manga/8156/sword-art-online-progressive",
    image: "https://m.media-amazon.com/images/I/51e4EtbunRL.jpg",
  },
  {
    name: "Sword Art Online: Girls Ops",
    link: "https://lectortmo.com/library/manga/10095/Sword-Art-Online-Girls-Ops",
    image: "https://m.media-amazon.com/images/I/515tvKUP7lL.jpg",
  },
  {
    name: "Sword Art Online Progressive Scherzo of Deep Night",
    link: "https://lectortmo.com/library/manga/48240/sword-art-online-progressive-kuraki-yuuyami-no-scherzo",
    image: "https://m.media-amazon.com/images/I/51OFJhN6FPL._SY445_SX342_.jpg",
  },
  {
    name: "Sword Art Online Progressive Barcarolle of Froth",
    link: "https://lectortmo.com/library/manga/48094/sword-art-online-progressive-houei-no-barcarole",
    image: "https://m.media-amazon.com/images/I/61UEjTw6PvL._SY466_.jpg",
  },
  {
    name: "Sword Art Online Progressive Canon Of The Golden Rule",
    link: "https://lectortmo.com/library/manga/61579/basado-en-la-novela-ligera-sword",
    image:
      "https://www.nautiljon.com/images/manga/00/16/sword_art_online_-_progressive_-_kogane_ritsu_no_kanon_20361.webp",
  },
  {
    name: "Sword Art Online Canon Of The Golden Rule",
    link: "https://lectortmo.com/library/manga/65071/sword-art-online-canon-of-the-golden-rule",
    image:
      "https://www.nautiljon.com/images/manga/00/16/sword_art_online_-_progressive_-_kogane_ritsu_no_kanon_20361.webp",
  },
  {
    name: "Sword Art Online Comic Anthology",
    link: "https://lectortmo.com/library/manga/28591/Sword-Art-Online-Comic-An",
    image:
      "https://m.media-amazon.com/images/I/71-g8jfFVcL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Tonari no Seki-kun",
    link: "https://lectortmo.com/library/manga/8704/tonari-no-seki-kun",
    image: "https://m.media-amazon.com/images/I/61p-89ac-jL.jpg",
  },
  {
    name: "Tonari no Seki-kun Junior",
    link: "https://lectortmo.com/library/manga/54368/tonari-no-seki-kun-junior",
    image: "https://cdn.myanimelist.net/images/manga/3/247172.jpg",
  },
  {
    name: "That Time I Got Reincarnated as a Slime",
    link: "https://es.novelcool.com/novel/Tensei-Shitara-Slime-Datta-Ken.html",
    image: "https://m.media-amazon.com/images/I/91zgCwPjO8L.jpg",
  },
  {
    name: "The Angel Next Door Spoils Me Rotten",
    link: "https://lectortmo.com/library/manga/65931/otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken",
    image:
      "https://m.media-amazon.com/images/I/81cXBPgRaPL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "The Celebration of Haruhi Suzumiya",
    link: "https://lectortmo.com/library/manga/70604/the-celebration-of-haruhi-suzumiya",
    image:
      "https://m.media-amazon.com/images/I/71k+ih9GLYL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "The Dangers In My Heart",
    link: "https://lectortmo.com/library/manga/36933/boku-no-kokoro-no-yabai-yatsu",
    image:
      "https://m.media-amazon.com/images/I/815-50o7v5L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "The Disapparence of Nagato Yuki-Chan",
    link: "https://inmanga.com/ver/manga/Nagato-Yuki-chan-no-Shoushitsu/9956a35f-daee-419b-a161-778deb542672",
    image:
      "https://m.media-amazon.com/images/I/51PSNCYxWAL._SX331_BO1,204,203,200_.jpg",
  },
  {
    name: "The Future Diary",
    link: "https://inmanga.com/ver/manga/Mirai-Nikki/60e47f02-5140-4830-bb09-9a9aee3d862f",
    image: "https://m.media-amazon.com/images/I/51gknk-FO+S.jpg",
  },
  {
    name: "The Genius Prince's Guide To Raising A Narion Out Of Debt",
    link: "https://lectortmo.com/library/manga/46592/souda-baikoku-shiyou-tensai-ouji-no-akaji-kokka-saisei-jutsu",
    image:
      "https://m.media-amazon.com/images/I/91wtPMMBjZL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "The God Of High School",
    link: "https://www.webtoons.com/es/action/the-god-of-high-school/list?title_no=2163&page=40",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/vGA8nKXoE7houjoRWId0enAq4Vo.jpg",
  },
  {
    name: "The Melancholy Of Haruhi Suzumiya",
    link: "https://lectortmo.com/library/manga/10130/Suzumiya-Haruhi-no-Yuuutsu",
    image:
      "https://m.media-amazon.com/images/I/91a3OKU0mZL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "The Melancholy of Haruhi-chan Suzumiya",
    link: "https://lectortmo.com/library/manga/52040/suzumiya-haruhi-chan-no-yuuutsu",
    image:
      "https://m.media-amazon.com/images/I/61mZQLpO4FL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "The Misfit Of Demon King Academy",
    link: "https://lectortmo.com/library/manga/42144/maou-gakuin-no-futekigousha",
    image:
      "https://m.media-amazon.com/images/I/91Q6r0D2GgL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "The Promised Neverland",
    link: "https://inmanga.com/ver/manga/The-Promised-Neverland/df035c49-d49f-4f15-bd2d-4ae9ea94d72d",
    image: "https://m.media-amazon.com/images/I/81GIb6GMhRL.jpg",
  },
  {
    name: "Tokyo Metropolitan Curse Technical School",
    link: "https://es.novelcool.com/novel/Tokyo-Metropolitan-Magic-Technical-School.html",
    image:
      "https://m.media-amazon.com/images/I/51wBm2hLTSL._SX315_BO1,204,203,200_.jpg",
  },
  {
    name: "Tomo-Chan Is A Girl!",
    link: "https://lectortmo.com/library/manga/12299/tomo-chan-wa-onnanoko?orderDir=ASC",
    image:
      "https://m.media-amazon.com/images/I/81OAl-FBUTL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Torre de Dios",
    link: "https://inmanga.com/ver/manga/Torre-de-Dios/3e589d2a-12b3-4144-bbc0-4c24d76582f6",
    image: "https://m.media-amazon.com/images/I/51N704I+B2L._AC_SY780_.jpg",
  },
  {
    name: "Urusei Yatsura",
    link: "https://inmanga.com/ver/manga/Urusei-Yatsura/d83e736e-df6c-406c-a33a-ec98e13ab4eb",
    image:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/u4qYP0Puxjw0rgCbq5cYMYIpyNR.jpg",
  },
  {
    name: "Uzaki-chan wa Asobitai!",
    link: "https://lectortmo.com/library/manga/38888/uzaki-chan-wa-asobitai",
    image: "https://somoskudasai.com/wp-content/uploads/2021/07/Vol-7.jpg",
  },
  {
    name: "Vinland Saga",
    link: "https://lectortmo.com/library/manga/145/vinland-saga",
    image:
      "https://m.media-amazon.com/images/I/91nhuMimxjL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "WATAMOTE",
    link: "https://lectortmo.com/library/manga/11075/watashi-ga-motenai-no-wa-dou-kangaete-mo-omaera-ga-warui",
    image:
      "https://m.media-amazon.com/images/I/81-nGqXQbFL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "WATAMOTE Spin-Off",
    link: "https://lectortmo.com/library/manga/13214/watashi-no-tomodachi-ga-motenai-no-wa-dou-kangaetemo-omaera-ga-warui",
    image:
      "https://m.media-amazon.com/images/I/81+0xlrfDNL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Wolf Children",
    link: "https://inmanga.com/ver/manga/Ookami-Kodomo-No-Ame-To-Yuki/f5076b22-7017-416d-b1c9-9c450e74239e",
    image:
      "https://pack-yak.intomanga.com/thumbnails/manga/Ookami-Kodomo-No-Ame-To-Yuki/f5076b22-7017-416d-b1c9-9c450e74239e",
  },
  {
    name: "World Trigger",
    link: "https://mangaplus.shueisha.co.jp/titles/200023",
    image:
      "https://m.media-amazon.com/images/I/51S8Pb57W4L._SX331_BO1,204,203,200_.jpg",
  },
  {
    name: "Yamada-kun and the Seven Witches",
    link: "https://inmanga.com/ver/manga/Yamada-kun-to-7-nin-no-majo/b3dab5aa-bab2-4d02-a48f-27bf174c3bbc",
    image:
      "https://m.media-amazon.com/images/I/81yYpSLMAiL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Yu-Gi-Oh!",
    link: "https://visortmo.com/library/manga/12282/yugioh",
    image: "https://m.media-amazon.com/images/I/71Lc33eUICL.jpg",
  },
  {
    name: "Yu-Gi-Oh! 5D'S",
    link: "https://inmanga.com/ver/manga/Yu-Gi-Oh-5ds/9a0964d2-5b1a-4a20-8f00-328f4195ea54",
    image:
      "https://m.media-amazon.com/images/I/61LRJbxAkvL._SX331_BO1,204,203,200_.jpg",
  },
  {
    name: "Yu-Gi-Oh! Gx",
    link: "https://inmanga.com/ver/manga/Yu-Gi-Oh-Gx/a5f4c7ce-0920-47a5-9c85-47b5f976bc19",
    image: "https://m.media-amazon.com/images/I/51CkXLCcePL.jpg",
  },
  {
    name: "Zom 100: The Bucket List of the Dead",
    link: "https://lectortmo.com/library/manga/46447/zombie-100-zombie-ni-naru-made-ni-shitai-100-no-koto",
    image:
      "https://m.media-amazon.com/images/I/81Bd1IBzG3L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "ZOMBIE-LOAN",
    link: "https://inmanga.com/ver/manga/Zombie-Loan/434e2549-df2e-4aaa-b2db-8155efcf6587",
    image:
      "https://m.media-amazon.com/images/I/61pUO3yjqFL._AC_UF350,350_QL50_.jpg",
  },
  {
    name: "Tis Time for Torture, Princess",
    link: "https://mangaplus.shueisha.co.jp/titles/200036",
    image:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/7vPpzw4goRUojCVFIsU3drIhu3B.jpg",
  },
  {
    name: "UNDEAD + UNLUCK",
    link: "https://mangaplus.shueisha.co.jp/titles/200038",
    image:
      "https://m.media-amazon.com/images/I/81DAHnJa6PL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "La mision de la familia Yozakura",
    link: "https://mangaplus.shueisha.co.jp/titles/200039",
    image:
      "https://m.media-amazon.com/images/I/81YtMz4osML._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "My Deer Friend Nokotan",
    link: "https://visortmo.com/library/manga/71285/shikanoko-nokonoko-koshitantan",
    image:
      "https://m.media-amazon.com/images/I/818zS7ES2DL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Dandadan",
    link: "https://mangaplus.shueisha.co.jp/titles/200084",
    image:
      "https://m.media-amazon.com/images/I/81kHWcb7n4L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Magilumiere Co. Ltd.",
    link: "https://mangaplus.shueisha.co.jp/titles/200091",
    image:
      "https://m.media-amazon.com/images/I/81fGkLMnZbL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Hokkaido Gals Are Super Adorable!",
    link: "https://mangaplus.shueisha.co.jp/titles/200056",
    image:
      "https://m.media-amazon.com/images/I/8163Ey4i0GL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "SAKAMOTO DAYS",
    link: "https://mangaplus.shueisha.co.jp/titles/200059",
    image:
      "https://m.media-amazon.com/images/I/71VXV2meQJL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Kagurabachi",
    link: "https://mangaplus.shueisha.co.jp/titles/200123",
    image:
      "https://m.media-amazon.com/images/I/912V2U+luQL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Blue Box",
    link: "https://mangaplus.shueisha.co.jp/titles/200083",
    image: "https://m.media-amazon.com/images/I/81CkR4j6EzL.jpg",
  },
  {
    name: "Kindergarten Wars",
    link: "https://mangaplus.shueisha.co.jp/titles/200135",
    image:
      "https://m.media-amazon.com/images/I/71ru-lZw2oL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Look Back",
    link: "https://zonatmo.com/library/one_shot/61622/look-back",
    image: "https://m.media-amazon.com/images/I/81r9pMwJCoL.jpg",
  },
  {
    name: "The Marshal King",
    link: "https://mangaplus.shueisha.co.jp/titles/200149",
    image: "../../img/MarshalKing.jpg",
  },
];
const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");
var ul = document.getElementById("mangas");
var encontrado = false;
function search() {
  const query = searchInput.value.toLowerCase().trim();
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query)
  );
  results.innerHTML = filteredData
    .map(
      (item) => ` <li style="padding: 10px; margin-bottom: 5px">
            <a
              href=${item.link}
              target="_blank"
              style="text-decoration: none; color: white"
            >
              <img
                src=${item.image}
                alt=${item.name}
                width="50"
                height="50"
                style="padding-right: 5px"
              />
              <span>${item.name}</span>
            </a>
          </li>`
    )
    .join("");
  // Mostrar los resultados
  /*filteredData.forEach((item) => {
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
  });*/
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
