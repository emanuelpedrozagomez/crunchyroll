const data = [
  {
    name: "¡Soy Reiko Shiratori!",
    link: "https://www.viki.com/tv/35653c#episodes",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/33e4cbe6255ed8f44b19f4f3c6c4ad73.jpe",
  },
  {
    name: "¡Soy Reiko Shiratori! La Pelicula",
    link: "https://www.viki.com/movies/35652c",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/yReI97H20J5RdYsLOtKbE6WsseS.jpg",
  },
  {
    name: "Alarma de Amor Season 1",
    link: "https://pandrama.com/detalle/alarma-de-amor/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/mXouvrZbn8YpZMURGvw30QK8qfo.jpg",
  },
  {
    name: "Alarma de Amor Season 2",
    link: "https://pandrama.com/detalle/Love-Alarm-2/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/3LxH7kVJOK0dW5vdjPzKQ4ZWVQy.jpg",
  },
  {
    name: "Alarma de Amor Season 1 Latino",
    link: "https://pandrama.com/detalle/love-alarm-doblada/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/mXouvrZbn8YpZMURGvw30QK8qfo.jpg",
  },
  {
    name: "Alarma de Amor Season 2 Latino",
    link: "https://pandrama.com/detalle/Love-Alarm-2-doblado/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/3LxH7kVJOK0dW5vdjPzKQ4ZWVQy.jpg",
  },
  {
    name: "Alta Dirección",
    link: "https://www.doramasvip.vip/ver-doramas-online/top-managament/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/1KvB3lhnP1Q0Di6CVH2fEsYGJOE.jpg",
  },
  {
    name: "Asistente de superestrella",
    link: "https://www.viki.com/tv/38154c#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/lavVUgjBzbAsSi6LX1MEMGpqSFg.jpg",
  },
  {
    name: "Beso Travieso: Amor en Tokyo",
    link: "https://www.viki.com/tv/22593c#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/hSPl1ASM2HuWitindaK8LPmm0w.jpg",
  },
  {
    name: "Beso Travieso 2: Amor en Tokyo",
    link: "https://www.viki.com/tv/25563c#episodes",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/674355dd0d327d84e878ee80a9ef76d7.jpe",
  },
  {
    name: "Blackpink: Light Up the Sky",
    link: "https://doramasflix.in/peliculas-online/blackpink-light-up-the-sky",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/hjwByr4YkMLOCBAohiq6lK3ymvr.jpg",
  },
  {
    name: "Blackpink: The Movie",
    link: "https://doramasflix.in/peliculas-online/blackpink-the-movie",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/19BZEsN5p3LWHaZqPzPWEbo4t44.jpg",
  },
  {
    name: "Blackpink: The Show",
    link: "https://doramasflix.in/doramas-online/blackpink-the-show",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/bc3k6ybsMISVl9W6AZvKPwVTn08.jpg",
  },
  {
    name: "Boys Over Flowers",
    link: "https://www.viki.com/tv/38391c#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/7guIurRpW1U4nKLRVRV3OFJozQc.jpg",
  },
  {
    name: "Boys Over Flowers: Returns",
    link: "https://www.viki.com/tv/38390c#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/rO4XFHXdKCmFcysiMy9YH7YJuhs.jpg",
  },
  {
    name: "Chicos Nobles",
    link: "https://www.viki.com/tv/37348c-noble-boys?qId=7205793ae351abf880d90227e66eaaa9#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/tbS9ICa9RGNGqj0d681U46hCc2f.jpg",
  },
  {
    name: "Cursed in Love",
    link: "https://doramasflix.in/doramas-online/cursed-in-love",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/f9WIXqDKEiHn2jRwWsmT2hcg714.jpg",
  },
  {
    name: "Descendientes del Sol",
    link: "https://www.viki.com/tv/23205c#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/xoPtxpbc2WSbjTZvoiNQ05m65hL.jpg",
  },
  {
    name: "Descendientes del Sol Latino",
    link: "https://doramasflix.in/doramas-online/descendants-of-the-sun",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/xoPtxpbc2WSbjTZvoiNQ05m65hL.jpg",
  },
  {
    name: "El amor da mucha guerra",
    link: "https://doramasflix.in/doramas-online/love-to-hate-you",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/6zbGMxkmKbCnARQsJcPML4Se4uD.jpg",
  },
  {
    name: "El amor es como el chachachá",
    link: "https://pandrama.com/detalle/hometown-cha-cha-cha/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/niIq1sFJLIdFmwBFJNGzJR7xrnp.jpg",
  },
  {
    name: "El amor es como el chachachá Latino",
    link: "https://pandrama.com/detalle/hometown-cha-cha-cha-sp/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/niIq1sFJLIdFmwBFJNGzJR7xrnp.jpg",
  },
  {
    name: "El asesino del impermeable",
    link: "https://doramasflix.in/variedades-online/el-asesino-del-impermeable",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/ctDcoK9QJ5yac7RmdQwfIUSOT9n.jpg",
  },
  {
    name: "El primer amor: Hatsukoi Latino",
    link: "https://pandrama.com/detalle/el-primer-amor-hatsukoi-latino/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/yJsFFvlGLjcbcDzziElJMfWFzW3.jpg",
  },
  {
    name: "Eligiendo al cónyuge por lotería",
    link: "https://www.viki.com/tv/37465c-choosing-spouse-by-lottery#about",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/AjV5SkyD93e1GgluwpFBUyiTHTe.jpg",
  },
  {
    name: "Érase un Amor Rural",
    link: "https://doramasflix.co/doramas/once-upon-a-small-town",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/bdkfBz4waYCe3DsgLMMHsgQGw8R.jpg",
  },
  {
    name: "¡Éxito inesperado!",
    link: "https://www.viki.com/tv/38709c#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/vKyZiSaYVyLgmz62cg1uVOSujfM.jpg",
  },
  {
    name: "Fábrica de fideos de Tokio",
    link: "https://www.viki.com/tv/38229c#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/IstbbAFb5ndkDSO74FVHnTi0KZ.jpg",
  },
  {
    name: "Given Live Action",
    link: "https://www1.otakustv.com/anime/given-live-action",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/bjSvFFmLtB4luDBdh4amXCO0qUL.jpg",
  },
  {
    name: "Gudetama: Del Cascaron A La Aventura Latino",
    link: "https://pandrama.com/detalle/gudetama-del-cascaron-a-la-aventura-latino/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/aDi1Eke1u3QGkVYQakXTqqIC7kZ.jpg",
  },
  {
    name: "Horimiya Live Action Latino",
    link: "https://www1.animeonline.ninja/online/horimiya-live-action/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/sZoJtjNDfyCx3xOWXL8SmMYh44O.jpg",
  },
  {
    name: "Hotel Del Luna",
    link: "https://www.viki.com/tv/36667c#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/oC40djK4MXkqpJ0ItVxRjCl9vsc.jpg",
  },
  {
    name: "Kakafukaka",
    link: "https://www.viki.com/tv/36906c-kakafukaka-series#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/gNBcaReWhvYaMRHH45Im1V8naXM.jpg",
  },
  {
    name: "Kakafukaka Especial",
    link: "https://www.viki.com/movies/37015c#about",
    image:
      "https://www.themoviedb.org/t/p/w227_and_h127_bestv2/3gZzBBA59NMq44OTTTGOye1YR2z.jpg",
  },
  {
    name: "Koinaka",
    link: "https://www.viki.com/tv/28495c-koinaka#episodes",
    image:
      "https://3.bp.blogspot.com/-0tGfoqN58_s/VePC0w3of-I/AAAAAAAACWM/2HdHImPNAoQ/s1600/maxresdefault.jpg",
  },
  {
    name: "Kanojo Okarishimasu Live Action",
    link: "https://www.viki.com/tv/38941c-rental-a-girlfriend#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/ySBgNFRLSiCYmS6LCqXMTRLMl31.jpg",
  },
  {
    name: "Kimi ni Todoke: Llegando a Ti Live Action Latino",
    link: "https://doramasflix.in/doramas-online/kimi-ni-todoke-from-me-to-you",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/9yuEDUTjM3XnzNN0P1NcMhEEvIl.jpg",
  },
  {
    name: "Kimi ni Todoke: Llegando a Ti Live Action Movie",
    link: "https://www1.animeonline.ninja/pelicula/kimi-ni-todoke-llegare-a-ti/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/vQc3i8dFIEKx36FEpeApg7MXQD9.jpg",
  },
  {
    name: "Kimi wa Petto",
    link: "https://www.viki.com/tv/35651c-youre-my-pet-kimi-wa-petto#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/VgFpBfD8utG4axW0im74aJmGeg.jpg",
  },
  {
    name: "Komi-San no puede comunicarse Live Action",
    link: "https://www1.animeonline.ninja/online/komi-san-wa-comyushou-desu-live-action/",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/jLU47Vzxqr06BYwVaWmOwQxWJ5I.jpg",
  },
  {
    name: "La Gloria",
    link: "https://pandrama.com/detalle/the-glory-2022/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/iu5zBMCRKZECC78flUGd10tuQVT.jpg",
  },
  {
    name: "La Gloria Latino",
    link: "https://pandrama.com/detalle/la-gloria-lat/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/iu5zBMCRKZECC78flUGd10tuQVT.jpg",
  },
  {
    name: "Lupin III y el corazón púrpura de Cleopatra Latino",
    link: "https://tubitv.com/movies/100002369/lupin-iii-y-el-coraz-n-p-rpura-de-cleopatra-doblado?start=true",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/z1N17Y5q1EE0IMrBbALyCHBuNE8.jpg",
  },
  {
    name: "Mi ID es belleza de Gangnam",
    link: "https://www.viki.com/tv/36424c-my-id-is-gangnam-beauty#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/eNK7aolIJ75W7tNeh5I0An14rtg.jpg",
  },
  {
    name: "MURAI ENAMORADO",
    link: "https://www.viki.com/tv/39609c#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/etdIIYKAnmLRw6DH602cAJL1sLc.jpg",
  },
  {
    name: "Niños antes que flores",
    link: "https://www.viki.com/tv/50c#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/9juHZxm3AIaYY7SVqw82MZEX9zB.jpg",
  },
  {
    name: "Power Rangers Latino",
    link: "https://www.lacartoons.com/serie/68",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/7QDBljltPXib9ozSbm67OZ5n3is.jpg",
  },
  {
    name: "Power Rangers Tormenta Ninja Latino",
    link: "https://www.lacartoons.com/serie/466",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/iflYm9fxcZHlzvDsOetnaCMOtU0.jpg",
  },
  {
    name: "Programador Adorable",
    link: "https://www.viki.com/tv/38692c#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/kx8BO31XgNbefidUJGxbKjG2A6v.jpg",
  },
  {
    name: "Propuesta Laboral",
    link: "https://pandrama.com/detalle/propuesta-de-negocios/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/wWlIpEOsxoJgM53sjvyaeOZvon9.jpg",
  },
  {
    name: "Propuesta Laboral Latino",
    link: "https://pandrama.com/detalle/propuesta-de-trabajo-latino/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/wWlIpEOsxoJgM53sjvyaeOZvon9.jpg",
  },
  {
    name: "Querida Hermana Latino",
    link: "https://www6.doramasprime.com/drama/querida-hermana",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/5mSk2KfeSFTw73N6f4sPWpzTDS0.jpg",
  },
  {
    name: "Snowdrop",
    link: "https://doramasflix.in/doramas-online/snowdrop",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/jByjtObPfhcxTrDJhh3KyoNS4yU.jpg",
  },
  {
    name: "Sabuesos",
    link: "https://doramasflix.in/doramas-online/bloodhounds",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/b2iWqSFpuy9CS5XWiAmnLzNv9eP.jpg",
  },
  {
    name: "Silencio",
    link: "https://www.viki.com/tv/38836c-silent#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/qQaD2tWg73TnVNhiskFnvPMOCQ8.jpg",
  },
  {
    name: "Soundtrack 1 Latino",
    link: "https://pandrama.com/detalle/soundtrack-1-latino/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/wQ5XdGHM59uw0Aobw0uDgHyyyfe.jpg",
  },
  {
    name: "The Good Bad Mother",
    link: "https://doramasflix.in/doramas-online/the-good-bad-mother",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/mNjXLuhgvj8ILVVeuuL2Lg4Uc0d.jpg",
  },
  {
    name: "Theatre of Darkness Live Action",
    link: "https://www1.otakustv.com/anime/yami-shibai-live-action",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/8pIgytRmoLsc1uIsBm2nUzF9aZ.jpg",
  },
  {
    name: "True Beauty",
    link: "https://doramasflix.in/doramas-online/true-beauty",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/lJunoYq5iMFFjqcRP88vYk7XvS4.jpg",
  },
  {
    name: "True Beauty Latino",
    link: "https://vix.com/es-es/detail/series-5010",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/lJunoYq5iMFFjqcRP88vYk7XvS4.jpg",
  },
  {
    name: "Tú eres mi destino",
    link: "https://www.viki.com/tv/36951c-you-are-my-destiny?qId=d84cc0b930d2a20bd3fd534ba78079bd#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/wIR1yAVJIF4IcmiPQR8SZJ5C4JN.jpg",
  },
  {
    name: "Un amor precioso",
    link: "https://pandrama.com/detalle/un-amor-tan-hermoso/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/haOBvTkiTXhDgMpRfFN0RGLOyPg.jpg",
  },
  {
    name: "Un amor precioso Latino",
    link: "https://pandrama.com/detalle/un-amor-tan-hermoso-latino/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/haOBvTkiTXhDgMpRfFN0RGLOyPg.jpg",
  },
  {
    name: "Un amor tan hermoso",
    link: "https://wetv.vip/es/play/1twrzqdqktvdgu8-Un%20amor%20tan%20hermoso/h00309h5ais-EP1%3A%20A%20love%20so%20beautiful",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/75jkeATO7961xE00qFhQW9gFCOz.jpg",
  },
  {
    name: "Un caso incurable de amor",
    link: "https://www.viki.com/tv/38087c-an-incurable-case-of-love#about",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/dSz2x0nQ0wV60HCOC3gw8DJHjsX.jpg",
  },
  {
    name: "Una chica del siglo XX",
    link: "https://doramasflix.in/peliculas-online/20th-century-girl",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/zwmuyx5ivQbU3TQDJxbUgxo41Jl.jpg",
  },
  {
    name: "Wakakozake Live Action",
    link: "https://www.viki.com/tv/38733c#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/8MNGBuBqovJxDwQ7BQm9Yi3RR8c.jpg",
  },
  {
    name: "Wakakozake Season 2 Live Action",
    link: "https://www.viki.com/tv/38734c#episodes",
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/671d39b04cb4147a40b0300bcd6d69d9.jpe",
  },
  {
    name: "Wotakoi Live Action",
    link: "https://pandrama.com/detalle/wotakoi-love-is-hard/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/prNSFGKGjtc2lYEr8zjDastCeEg.jpg",
  },
  {
    name: "Youth of May",
    link: "https://doramasflix.in/doramas-online/youth-of-may",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/xhKV1XuW4DkcFRQVXbTpSMQSmfg.jpg",
  },
  {
    name: "Yuri u otro",
    link: "https://www.viki.com/tv/37464c-yuri-or-another",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/c2EsCiXttFfF1xKCRSPfWDBGAfm.jpg",
  },
  {
    name: "Zom 100: The Bucket List of the Dead Live Action",
    link: "https://ww3.animeonline.ninja/pelicula/zom-100-bucket-list-of-the-dead-live-action/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/9yWftdMEsbu2BiMdcB2XcUAzxhF.jpg",
  },
  {
    name: "La Isla",
    link: "https://doramasflix.in/doramas-online/island",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/7vapdGNjm5FMQ2dbfj1F5Aby6Hq.jpg",
  },
  {
    name: "One Piece Live Action Latino",
    link: "https://www.henaojara.com/ver/season/one-piece-live-action-espanol-latino-hd-1/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/dHRjYJETHIsnI8eS5KgWPKS4Oki.jpg",
  },
  {
    name: "Amor Bajo la Luz de la Luna",
    link: "https://pandrama.tv/detalle/luz-de-luna-pintada-por-las-nubes/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/cCNE7fPYi0ezR0Jr5fs4cpmfVwb.jpg",
  },
  {
    name: "Amor Bajo la Luz de la Luna Latino",
    link: "https://pluto.tv/es/on-demand/series/love-in-the-moonlight-lt/details/season/1",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/cCNE7fPYi0ezR0Jr5fs4cpmfVwb.jpg",
  },
  {
    name: "Sueña Sin Limites",
    link: "https://pandrama.tv/detalle/dream-high/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/cOVekHdWlmTJCLcOpH3OQGy8G4.jpg",
  },
  {
    name: "Sueña Sin Limites Latino",
    link: "https://pluto.tv/es/on-demand/series/dream-high-lt/details/season/1",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/cOVekHdWlmTJCLcOpH3OQGy8G4.jpg",
  },
  {
    name: "Sueña Sin Limites Season 2 Latino",
    link: "https://pandrama.tv/detalle/suena-sin-limites-t2/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/farxfrH7D7D3TpybCs1AzXooICK.jpg",
  },
  {
    name: "!Doona¡",
    link: "https://doramasflix.in/doramas-online/doona",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/bQJ4jNRukeXzYr53RPVImq61p5l.jpg",
  },
  {
    name: "Amor y Deseo",
    link: "https://www.viki.com/tv/38259c-love-wish",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/lVnppVtW8a5DZvxxIUTLTRZDbSP.jpg",
  },
  {
    name: "Amor y Deseo Pelicula",
    link: "https://www.viki.com/movies/38458c-love-wish-movie",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/g1cIqW6wc6R57a0cibnGno1JdzX.jpg",
  },
  {
    name: "Barbie",
    link: "https://www.viki.com/movies/39693c-barbie",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/uhv9ktRUEVL0V6LsPGcCrJx90BP.jpg",
  },
  {
    name: "Chica de secundaria reprobada y profesor irresponsable",
    link: "https://www.viki.com/tv/39862c-falling-high-school-girl-and-irresponsible-teacher#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/leWJPydcOpdqV1R9yobSaNgqIXn.jpg",
  },
  {
    name: "El mejor error",
    link: "https://www.viki.com/tv/37010c-best-mistake",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/hHVAIvnL5rHqUViwXDyt20AbSiJ.jpg",
  },
  {
    name: "El mejor error: Pelicula",
    link: "https://www.viki.com/movies/38974c-best-mistake-1-the-movie",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/1YDoLpQ3VUmPI4BuDrgzCMXoNAo.jpg",
  },
  {
    name: "El mejor error Season 2",
    link: "https://www.viki.com/tv/37460c-best-mistake-2",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/efl38qiTbaQKKXh0J6KiHcXsz3h.jpg",
  },
  {
    name: "El mejor error Season 2 Pelicula",
    link: "https://www.viki.com/movies/38975c-best-mistake-2-the-movie",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/jUAhEPIIsKSoLcAbooUXUht1iPA.jpg",
  },
  {
    name: "El sellador",
    link: "https://www.viki.com/tv/38949c-the-sealer#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/vPXVNlrDG4a9JqICDO8YQjX7WK0.jpg",
  },
  {
    name: "Felices Juntos",
    link: "https://www.viki.com/movies/38591c-happy-together",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/arC5VnxkaLgtgRXgFmzIgybZXLh.jpg",
  },
  {
    name: "Goodbye Summer",
    link: "https://www.viki.com/movies/36712c-goodbye-summer#about",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/lJzpEfNbaxuhFVp7C9VRrEGD9Xg.jpg",
  },
  {
    name: "Lanzándote un hechizo",
    link: "https://www.viki.com/tv/39612c-casting-a-spell-to-you#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/vSsMzlTVChNsRbEG8JqdKqfQhEs.jpg",
  },
  {
    name: "Link: come, ama, mata",
    link: "https://ww1.pandra.ma/detalle/link-eat-love-kill/",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/fks4aBXRg2VfW2SDPpOcJfMOBgv.jpg",
  },
  {
    name: "Link: come, ama, mata Latino",
    link: "https://ww1.pandra.ma/detalle/link-come-ama-mata-lat/",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/fks4aBXRg2VfW2SDPpOcJfMOBgv.jpg",
  },
  {
    name: "Romance a romance",
    link: "https://www.viki.com/tv/39813c-romance-by-romance#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/oMqfDRD9zcqlkWi1LFNv1PIjVNj.jpg",
  },
  {
    name: "Yu Yu Hakusho Live Action",
    link: "https://ww3.animeonline.ninja/online/yu-yu-hakusho-netflix/",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/lV51aaGIlLpYtzZhw8sNMqZyKAe.jpg",
  },
  {
    name: "Diario Gourmet para Conquistar",
    link: "https://www.viki.com/tv/39741c-one-sided-love-gourmet-diary#episodes",
    image:
      "https://www.themoviedb.org/t/p/w500_and_h282_face/ygrZxTIMzIET8UALPkZsSAuH6HC.jpg",
  },
  {
    name: "My Demon",
    link: "https://doramasflix.in/doramas-online/my-demon",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/j1CqeaHMBBcRYDWHmeLZpVmS6le.jpg",
  },
  {
    name: "El momento de los dieciocho",
    link: "https://www.viki.com/tv/36633c-moment-of-eighteen#episodes",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/pCg4xhu8zH5d8gDvj7aeXq96nq0.jpg",
  },
  {
    name: "Nota de Venganza",
    link: "https://www.viki.com/tv/36316c-revenge-note-1#episodes",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/fo3ZHfGfd7JfT4hVimd5Pgq6KkD.jpg",
  },
  {
    name: "Nota de Venganza 2",
    link: "https://www.viki.com/tv/36317c-revenge-note-2?qId=9508c20e133340dda496b0fab4c61127#episodes",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/mZ1PiZMIvdM2rv2vT4z0AIiK0BO.jpg",
  },
  {
    name: "Manual para Residentes",
    link: "https://ww1.pandra.ma/detalle/resident-playbook-2025/",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/qNQmn66YwyvZ7Fu95gMIf4Ifc4y.jpg",
  },
  {
    name: "Manual para Residentes Latino",
    link: "https://doramasflix.in/doramas-online/resident-playbook",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/qNQmn66YwyvZ7Fu95gMIf4Ifc4y.jpg",
  },
  {
    name: "Marry my husband",
    link: "https://doramasflix.in/doramas-online/marry-my-husband",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/7BoRhg8zXP0ca9Zql4p8llCFR2P.jpg",
  },
  {
    name: "She Was Pretty",
    link: "https://vix.com/es-es/detail/series-3134",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/xneAHh06sCs48SPvnKfiyxL6pqn.jpg",
  },
  {
    name: "Queen Of Tears",
    link: "https://doramasflix.in/doramas-online/queen-of-tears",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/gnkSyB7OYvFAF6oUN726nGSvgpL.jpg",
  },
  {
    name: "Lovely Runner",
    link: "https://doramasflix.in/doramas-online/lovely-runner",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/xLvIQrrjM7DlZBSAtvROQk1XtqY.jpg",
  },
  {
    name: "The Best Hit",
    link: "https://www.viki.com/tv/35431c-the-best-hit#episodes",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/eaibOV0VXlHR5zHruThezTTwksI.jpg",
  },
  {
    name: "No Gain No Love Latino",
    link: "https://pandrama.app/detalle/el-que-no-gana-no-ama-2024/",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/2tMeSoqZZOvssRVd30XvVAhiNaU.jpg",
  },
  {
    name: "Go Ahead",
    link: "https://www.viki.com/tv/36770c-go-ahead?qId=52e076c09dc0bad7c744b1838310730b#episodes",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/5tulkIFh4wqb5a9Vu2CIqwxp0aY.jpg",
  },
  {
    name: "Oshi No Ko Live Action",
    link: "https://ww3.animeonline.ninja/online/oshi-no-ko-live-action/",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/fkYX0fGTg2ankAIyy0epHo7OuQG.jpg",
  },
  {
    name: "Shin-Ultraman Latino",
    link: "https://pluto.tv/latam/on-demand/movies/67376a6e091e24001382ecc8/details?utm_source=googleads&utm_medium=cpc&utm_campaign=MexicoNon-BrandServicios",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/tLkW6RX5Tx8xxJLiJMEfCcBJyA8.jpg",
  },
  {
    name: "No Soy un Robot Latino",
    link: "https://vix.com/es-es/detail/video-3562189",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/yJuNdF2lvSw2setvUdXDYZNRSSZ.jpg",
  },
  {
    name: "Callejero Novato",
    link: "https://www.freetv.com/es/shows/callejero-novato",
    image:
      "https://img3.static-ottera.com/prod/oly/show/thumbnails/widescreen/960x540/callejeronovato_app_16_9.jpg",
  },
  {
    name: "Descubrimiento del Amor",
    link: "https://pluto.tv/latam/on-demand/series/66e8739673aa510013467cff/season/1?utm_source=googleads&utm_medium=cpc&utm_campaign=MexicoNon-BrandServicios",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/ipEK62f4lJFztUBjvpEr1x83MC3.jpg",
  },
  {
    name: "El comienzo del mar",
    link: "https://www.viki.com/tv/40778c-where-does-the-sea-begin#episodes",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/dHkWgdFwLSxbHSEUwM4KrWugfNt.jpg",
  },
  {
    name: "Amor en el Laboratorio",
    link: "https://www.pandra.ma/detalle/the-potato-lab-2025/",
    image:
      "https://occ-0-116-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdwQABCn9v_uSvIwzTm_kODbn3I3bDh7F7YW6sgTU3MRdaGP31odZgLyRlBI-ULzdUrfU8VIOLu_RBUoK4k76-esifk2nZAAXCGUlAvIQGfOh7SeJKkfcAWlUz_JZvoBujKK8QnYBhkS5BXIkAe5rrhi5xHHJN9ao6Wvw_KJU1vbkOqVf6Y_SW5joYTXCZsp3yhV7-A_VdzHgbn9nEEModUUjd_1UX-jtlfb-Ny3eDPtXxVrVwVDwOSZ-yU_DdIA5hQmBC8S-Mgw6TzVKuO4Vd24M4Y0cA15l9qG9QA4j61_X3T3wu9lpzrQPxlg7hWGMzlTEShPU9FbkFk5pma1UMkhAxweemxoXqgn-vjIq--obV744hYvv3BE7caHIlThJfxtKfIr7k7uLX8sHqiQRGEwFkR468o-1e3dC7Ca_3k3e2YT6LDQfx-ynFVTwhPVceRJ1ljddJCx.jpg?r=f17",
  },
  {
    name: "Amor en el Laboratorio Latino",
    link: "https://www.pandra.ma/detalle/the-potato-lab-lat-2025/",
    image:
      "https://occ-0-116-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdwQABCn9v_uSvIwzTm_kODbn3I3bDh7F7YW6sgTU3MRdaGP31odZgLyRlBI-ULzdUrfU8VIOLu_RBUoK4k76-esifk2nZAAXCGUlAvIQGfOh7SeJKkfcAWlUz_JZvoBujKK8QnYBhkS5BXIkAe5rrhi5xHHJN9ao6Wvw_KJU1vbkOqVf6Y_SW5joYTXCZsp3yhV7-A_VdzHgbn9nEEModUUjd_1UX-jtlfb-Ny3eDPtXxVrVwVDwOSZ-yU_DdIA5hQmBC8S-Mgw6TzVKuO4Vd24M4Y0cA15l9qG9QA4j61_X3T3wu9lpzrQPxlg7hWGMzlTEShPU9FbkFk5pma1UMkhAxweemxoXqgn-vjIq--obV744hYvv3BE7caHIlThJfxtKfIr7k7uLX8sHqiQRGEwFkR468o-1e3dC7Ca_3k3e2YT6LDQfx-ynFVTwhPVceRJ1ljddJCx.jpg?r=f17",
  },
  {
    name: "Si la vida te da mandarinas...",
    link: "https://www.pandra.ma/detalle/when-life-gives-you-tangerines-2025/",
    image:
      "https://occ-0-1079-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY9vpbO8cCM0O5iZILevbl0IPIg0xKisBHPW2Hq38lcvLxOdGyZyAmaNcW_FrsfJgJieU9ZqHXlk-tEA1ijzsBncygJSh2GtFGdPU1uPg5lecQyXLhyUjAHNBWCsaF6zAv9cVste7GHAgXIqKslbG2FfLpyfEHN6QIdYQX5n4Bj3RF8TgJCZe8rZ75vt3lxCAlVUXeboQeKwcRVpjEyD8f1U3sziL4EKv_0etxkTSGu1Y5fXWK1OOCVE7MwGSV9DcTABC6z6cnGf2Z2YiF437ud1cOLm3wcm9fGCR4wHZovHyuUgMaEnjYQw4uAWURhl47BqPMnDWPVfZeI37LuFF6o2UbMbcv947kXNE8yIlJ8IYb0XkvZN97FQrsk9R2KxDd8p9fnBzKfuyeDVhbQUNQO4g6QzI-od0TlwzUeL2KQHgQfArFeMUZJErfBFzb6s05sn5UtocDfO9DvyI3Z1eNrDF8Sp2GA0vU_aua_QGbmCM9Ove_S2PfczhkuNSc29YyKioiU.jpg?r=247",
  },
  {
    name: "Si la vida te da mandarinas... Latino",
    link: "https://www.pandra.ma/detalle/when-life-gives-you-tangerines-lat-2025/",
    image:
      "https://occ-0-1079-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY9vpbO8cCM0O5iZILevbl0IPIg0xKisBHPW2Hq38lcvLxOdGyZyAmaNcW_FrsfJgJieU9ZqHXlk-tEA1ijzsBncygJSh2GtFGdPU1uPg5lecQyXLhyUjAHNBWCsaF6zAv9cVste7GHAgXIqKslbG2FfLpyfEHN6QIdYQX5n4Bj3RF8TgJCZe8rZ75vt3lxCAlVUXeboQeKwcRVpjEyD8f1U3sziL4EKv_0etxkTSGu1Y5fXWK1OOCVE7MwGSV9DcTABC6z6cnGf2Z2YiF437ud1cOLm3wcm9fGCR4wHZovHyuUgMaEnjYQw4uAWURhl47BqPMnDWPVfZeI37LuFF6o2UbMbcv947kXNE8yIlJ8IYb0XkvZN97FQrsk9R2KxDd8p9fnBzKfuyeDVhbQUNQO4g6QzI-od0TlwzUeL2KQHgQfArFeMUZJErfBFzb6s05sn5UtocDfO9DvyI3Z1eNrDF8Sp2GA0vU_aua_QGbmCM9Ove_S2PfczhkuNSc29YyKioiU.jpg?r=247",
  },
  {
    name: "My Name",
    link: "https://doramasflix.in/doramas-online/my-name",
    image:
      "https://occ-0-1079-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdxF9b-VG-MYGtGB2STio1EUNNUs_Bm7dXXpJmI0IFpO479-bdMNQHiy9V8L-iybRlvU_PANTOY8nGhXLXW4FpqNROPpYRMf1k--Q1vTZ-j5fJ88nYcHxIEMVv5ADJTYr-vR.jpg?r=8f9",
  },
  {
    name: "Go Ahead Latino",
    link: "https://www.freetv.com/es/shows/sigue-adelante",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/5tulkIFh4wqb5a9Vu2CIqwxp0aY.jpg",
  },
  {
    name: "Hush: Callate Latino",
    link: "https://www.freetv.com/es/shows/hush-callate",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/mvExQnOOF8YOITPnnBpbG2ROH3z.jpg",
  },
  {
    name: "Encuéntrame a las 10 con 6 Latino",
    link: "https://www.freetv.com/es/shows/encuentrame-las-10-con-6",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/1JUPybLd8E7UiuN1WRcDJQ7Aiu2.jpg",
  },
  {
    name: "The Comic Bang",
    link: "https://www.youtube.com/playlist?list=PLK_bdxobz0cL4koyA_XxOK812fZDmKgGo",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/cYDRuFhHy19o2lKnhpYttDXXnxL.jpg",
  },
  {
    name: "Porque esta es mi primera vida",
    link: "https://www.viki.com/tv/35630c-because-this-is-my-first-life#episodes",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/gF5T9ElejDTmZGYmXlBUYsH21zC.jpg",
  },
  {
    name: "Porque esta es mi primera vida Latino",
    link: "https://vix.com/es-es/detail/series-3196",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/gF5T9ElejDTmZGYmXlBUYsH21zC.jpg",
  },
  {
    name: "Amor imperfecto Latino",
    link: "https://vix.com/es-es/detail/series-4981",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/9CUgyUnNu1Wli4kqlC9rwc2zCtm.jpg",
  },
  {
    name: "Doom at your Service latino",
    link: "https://vix.com/es-es/detail/series-5009",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/6fd6Cb1DMwb4eW1cRLT98FmSDDY.jpg",
  },
  {
    name: "Live Stage BOOCHI THE ROCK!",
    link: "https://ww3.animeonline.ninja/pelicula/live-stage-bocchi-the-rock/",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/sCgh2bx7oEFCXjGVBIspxEQsmee.jpg",
  },
  {
    name: "Karakai Jouzu no Takagi-san Live Action",
    link: "https://ww3.animeonline.ninja/online/karakai-jouzu-no-takagi-san-netflix-live-action-090224/",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/AaR7SKJrs6F5JElYV6hpPxUwxWf.jpg",
  },
  {
    name: "S-LINE",
    link: "https://pandrama.com/detalle/s-line-2025/",
    image:
      "https://media.themoviedb.org/t/p/w500_and_h282_face/aptfOkVieXQLePhG5QsDhW9mu8E.jpg",
  },
];
const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");
var ul = document.getElementById("series");
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
                width="80"
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
    img.width = 80;
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
