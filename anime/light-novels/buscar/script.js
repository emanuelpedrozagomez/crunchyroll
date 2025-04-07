const data = [
  {
    name: "86 EIGHTY-SIX Light Novel Vol 1",
    link: "https://mega.nz/file/TNJDQa5Q#qqEotdTR97vJUujsarSu6tybSXvujt2KgLQvU8Ak25U",
    image: "https://m.media-amazon.com/images/I/51WUXGblafL.jpg",
  },
  {
    name: "86 EIGHTY-SIX Light Novel Vol 2",
    link: "https://mega.nz/file/rMIVkYxS#GhtQCIaxOSFlhn1vORzoGdlPLMjS0KsskZtGqhj6efo",
    image:
      "https://bilder.akademibokhandeln.se/images_akb/9781975303143_383/86-eighty-six-vol-2-light-novel",
  },
  {
    name: "86 EIGHTY-SIX Light Novel Vol 3",
    link: "https://mega.nz/file/fdQCgIDC#1C8THIkVrb7cnVFLeGMTMNEjLhStKPMKLHKgPSdu-NI",
    image: "https://m.media-amazon.com/images/I/51Furj9B+QL.jpg",
  },
  {
    name: "86 EIGHTY-SIX Light Novel Vol 4",
    link: "https://mega.nz/file/ONoiBDBA#adtEf7vU3j9cZnDVXWoQSc0ummZzzy5AWxb1Jc_3MTI",
    image: "https://m.media-amazon.com/images/I/51dJgNJJOsL.jpg",
  },
  {
    name: "86 EIGHTY-SIX Light Novel Vol 5-10",
    link: "https://mega.nz/folder/WNx2WDgY#rX3R3GkdVmvyO_FPDh9gjw",
    image: "https://m.media-amazon.com/images/I/91p3hM+OveL.jpg",
  },
  {
    name: "Accel World Light Novel",
    link: "https://mega.nz/folder/nFQkQBJQ#zInKOx5n0hCPmrLgDJmIFA",
    image:
      "https://universonl.files.wordpress.com/2017/12/accelw1.jpg?w=215&h=312",
  },
  {
    name: "Angel Beats! Light Novel",
    link: "https://mega.nz/file/rMwnDa6Q#qgaeo5RPiRhyFiTVGsXaDAps45OTmzAB9h_W1Ptjvj4",
    image:
      "https://2.bp.blogspot.com/-iEgvfwLrb68/WoSrPDyppEI/AAAAAAAAN5k/WX-LIwi3LKofabkVwV6Rk5ORakXZLWUrQCLcBGAs/s640/Angel%2BBeats%2521%2BTrack%2BZero%2B%2528Novela%2BLigera%2Ben%2Bespa%25C3%25B1ol%2529.jpg",
  },
  {
    name: "Akashic Records of Bastard Magical Instructor Light Novel Vol 1",
    link: "https://mega.nz/file/XQRGQTZC#EmbapfkzMxkyYX1vUHsWx_zYKlODGjH3EjOJUnQ1KpY",
    image: "https://universonl.files.wordpress.com/2016/01/rokudena1.jpg",
  },
  {
    name: "Akashic Records of Bastard Magical Instructor Light Novel Vol 2",
    link: "https://mega.nz/file/KR4V3CQb#VFxKHFnbXxmKwTaxIZW4YYJ6D0Jx5HwnYm9XW_J1Nbs",
    image:
      "https://1.bp.blogspot.com/-H7V7fyLcezU/WvysjibxzhI/AAAAAAAAPfI/YGPIkNsemhIXoRozKhEk51pRqQfCxBXrgCLcBGAs/s400/Rokudenashi%2BMajutsu%2BKoushi%2Bto%2BAkashic%2BRecords%2Bvolumen%2B2%2Bespanol.jpg",
  },
  {
    name: "Akashic Records of Bastard Magical Instructor Light Novel Vol 3",
    link: "https://mega.nz/file/HdxnRQxI#ifTjRloumVsz1bI_GjDtk21gg1wbPNFlykKJg-PONn4",
    image:
      "https://1.bp.blogspot.com/-et8ixE6DoYs/Xt1WQlZRgzI/AAAAAAAAU-U/QqxvPGPFLOkO9KJ4UA3RxupFnfzQGCs2wCK4BGAsYHg/w285-h400/RokuAka%2BVolumen%2B3%2Bespanol.png",
  },
  {
    name: "Akashic Records of Bastard Magical Instructor Light Novel Vol 5",
    link: "https://mega.nz/file/OdITlQza#gJM0B1BW2nQBWOtqR4mIuTMtPmgwb9I8A5Q4VHY-IgA",
    image:
      "https://1.bp.blogspot.com/-mk6sR9L3y_U/YGd-ed-5x2I/AAAAAAAAXq4/U8eSKM0PzcoOy17a1-Eg6m4KFgDD_nsRgCLcBGAsYHQ/w285-h400/Rokudenashi%2BMajutsu%2BKoushi%2Bto%2BAkashic%2BRecords%2Bvolumen%2B5%2Bespanol.jpg",
  },
  {
    name: "Akashic Records of Bastard Magical Instructor Light Novel Vol 6",
    link: "https://mega.nz/file/acQmjZAJ#2Isd2c8P_iDJcGdzCGptpqroi2KKHszfNLZyd2-KYPs",
    image:
      "https://1.bp.blogspot.com/-SIgsTrKdhIE/WvytYVwRNCI/AAAAAAAAPfY/EH-ThJWbom0fNz4UGyqiXJ_AJX26jtuaQCLcBGAs/s400/Rokudenashi%2BMajutsu%2BKoushi%2Bto%2BAkashic%2BRecords%2Bvolumen%2B6%2Bespanol.jpg",
  },
  {
    name: "Akashic Records of Bastard Magical Instructor Light Novel Vol 7",
    link: "https://mega.nz/file/iIhRlSiJ#qIVH4y5X9enA6_HlXOpSym1e6oDith01Xko5PaeKufA",
    image:
      "https://1.bp.blogspot.com/-k8uhkV4vHno/WvytYDN170I/AAAAAAAAPfU/twj3ONRQmZQENuqE4AP0TRIdAjL3DDztwCLcBGAs/s400/Rokudenashi%2BMajutsu%2BKoushi%2Bto%2BAkashic%2BRecords%2Bvolumen%2B7%2Bespanol.jpg",
  },
  {
    name: "Akashic Records of Bastard Magical Instructor Light Novel Vol 8",
    link: "https://mega.nz/file/6VhFiC6Y#nKpt3-j23kf32SzPV9eLQYMTUbCvltEyuk01MFnosG4",
    image:
      "https://1.bp.blogspot.com/-2cNTk7hPJf4/Xt1XCH6KShI/AAAAAAAAU-s/1GJpwbSlsBQN6jEY55ADfkiKhWn7KqaiACK4BGAsYHg/w285-h400/RokuAka%2BVolumen%2B8%2Bespanol.jpg",
  },
  {
    name: "Akashic Records of Bastard Magical Instructor Light Novel Vol 9",
    link: "https://mega.nz/file/CVAF1Sga#JBLGJxa810xlBlGy-hL4pJN4nERnsq_UwaHhO3qDqZU",
    image:
      "https://1.bp.blogspot.com/-vfTFjANFwCE/YGd_Qstm2XI/AAAAAAAAXrE/Jqq1a1TCwsEf49A-srkbZ1fGGwz8LgSYQCLcBGAsYHQ/w284-h400/Rokudenashi%2BMajutsu%2BKoushi%2Bto%2BAkashic%2BRecords%2Bvolumen%2B9%2Bespanol.jpg",
  },
  {
    name: "Akashic Records of Bastard Magical Instructor Light Novel Vol 10",
    link: "https://mega.nz/file/mRgkFQSL#SonK-8xRAYHn5Kk9xMdkeCxWdVopYRQjQqzSk4Wf9Xw",
    image:
      "https://1.bp.blogspot.com/-WiWcvGDwfQg/YGeAQeYWvGI/AAAAAAAAXrM/fIyoxUtc4KcJAo6WkGSPwuT9P3shF3fFgCLcBGAsYHQ/w284-h400/Rokudenashi%2BMajutsu%2BKoushi%2Bto%2BAkashic%2BRecords%2Bvolumen%2B10%2Bespanol.jpg",
  },
  {
    name: "Arifureta Vol 1",
    link: "https://mega.nz/file/WZVjzQrI#KlyBeUtiqZp7wtaFejqW33Qs9EW0_hNBv3qH_smXUdU",
    image:
      "https://universonl.files.wordpress.com/2016/01/arifu1.jpg?w=380&h=552",
  },
  {
    name: "Arifureta Vol 2",
    link: "https://mega.nz/file/2NsVVJab#d0kC8UKK5JURp8VPPXE54tF4iOpQCSC6FC9Iox3DNM4",
    image:
      "https://universonl.files.wordpress.com/2015/12/arifure2.jpg?w=380&h=552",
  },
  {
    name: "Arifureta Vol 3",
    link: "https://mega.nz/file/6N92hSwS#jADtVHHfDK89VS1IxkKLdGjJl7CINUnDCKcQGYskePY",
    image:
      "https://universonl.files.wordpress.com/2016/03/arifur32.jpg?w=380&h=552",
  },
  {
    name: "Arifureta Vol 4",
    link: "https://mega.nz/file/WdM0ybCT#omB1u1pdcd5yk-tMhD9i1dSQn1sfRUYsQZ1VgxRZOz0",
    image:
      "https://universonl.files.wordpress.com/2016/07/arifu4.jpg?w=380&h=552",
  },
  {
    name: "Arifureta Vol 5",
    link: "https://mega.nz/file/KM9TkCoJ#UiQ2KRJ1RRdANTaN76PhbDUPFGwUYFhoyIxtyjsFX7I",
    image:
      "https://universonl.files.wordpress.com/2016/12/arifure5.jpg?w=380&h=552",
  },
  {
    name: "Arifureta Vol 6",
    link: "https://mega.nz/file/7ctXHYDD#smt_e93bm4F_dErTz4Y5ubSyqqpiq4Ar2CBjDU0fuQ4",
    image:
      "https://universonl.files.wordpress.com/2017/06/arifu6.jpg?w=380&h=552",
  },
  {
    name: "Arifureta Vol 7",
    link: "https://mega.nz/file/SRFRwYrB#C5vE1fdKzCuAe6tz5hM9Glze8X9Oxf_ocAifdHEVRl0",
    image:
      "https://universonl.files.wordpress.com/2018/01/arifuret7.jpg?w=380&h=552",
  },
  {
    name: "Arifureta Vol 8",
    link: "https://mega.nz/file/bENzxBbY#syN4kegGBp75HORc1ScGIyfMyexdc5m34h1ZMVc87HU",
    image: "https://m.media-amazon.com/images/I/51EX54meDfL.jpg",
  },
  {
    name: "Arifureta Vol 9",
    link: "https://mega.nz/file/LM82hbZK#2LSQL-aYJbg8r8JQqxpvZakHlV9De3Z40ZkKoe4sfEs",
    image:
      "https://static.wixstatic.com/media/0c0cdf_ab47a3a79523444f8eccd889d35e2784~mv2_d_1400_1962_s_2.png/v1/fill/w_420,h_580,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/A.png",
  },
  {
    name: "Arifureta Vol 10",
    link: "https://novelasligeras.net/index.php/producto/arifureta-shokugyou-de-sekai-saikyou-novela-ligera/",
    image: "https://m.media-amazon.com/images/I/51ZqdVQJu5L.jpg",
  },
  {
    name: "Arifureta Vol 11",
    link: "https://mega.nz/file/yNlyWTpJ#Clf8oJCTx_FYwiFexqbOxyw2_lfm06mo4i-VOsdhx1s",
    image: "https://m.media-amazon.com/images/I/51pzueyz8oL.jpg",
  },
  {
    name: "Arifureta Vol 12",
    link: "https://mega.nz/file/PI9gTZIQ#pKnDoQ930Kid4FobeS5jE07ajR5r25gF1MLPHWAPhvo",
    image:
      "https://static.wixstatic.com/media/0c0cdf_15ca26aeb74a47bc9ee139ff1d0c0b0d~mv2.jpg/v1/fill/w_420,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cover.jpg",
  },
  {
    name: "Arifureta Short Story",
    link: "https://mega.nz/file/DNcmCQRK#RquziR7RqSSsQgZdLA_HTE66Al_gm_2KmcihEAxIsic",
    image: "https://m.media-amazon.com/images/I/51UPA6MPLuL.jpg",
  },
  {
    name: "Arifureta Zero Vol 1",
    link: "https://mega.nz/file/bIMjVIzS#PiMwkjJ5ikKMkepgneF9Mhjv3aDaUArE-2LYaTQoqkQ",
    image:
      "https://universonl.files.wordpress.com/2018/04/arifuzer.jpg?w=380&h=552",
  },
  {
    name: "Arifureta Zero Vol 2",
    link: "https://mega.nz/file/PAMHWSLI#nsG5-LbIuNiXyBz4d7sVl-swy9uQoZhmDfXa0ZhxMh4",
    image:
      "https://static.wixstatic.com/media/0c0cdf_6af37474dc57448aaaded16c279886b1~mv2.jpg/v1/crop/x_14,y_21,w_718,h_1012/fill/w_420,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Arifureta%20Zero%20Portada%20Vol%202.jpg",
  },
  {
    name: "Arifureta Zero Vol 3",
    link: "https://mega.nz/file/KItFnSqa#ykRcE3mLpkAUqlVhzTpL6VNPL_FUcz52Ebp54dnRrSk",
    image: "https://m.media-amazon.com/images/I/51Ac+scTwCL.jpg",
  },
  {
    name: "Arifureta Zero Vol 4",
    link: "https://mega.nz/file/2FEACT6S#oH_qgkXVNzME5dUvRfhXNWXWYkTQfMtWxK4EWgvtQlM",
    image: "https://m.media-amazon.com/images/I/515EvindLiL.jpg",
  },
  {
    name: "Arifureta Zero Vol 5",
    link: "https://mega.nz/file/KEcCjTpZ#RFpFJ0TZHIDF-utCYnmU03emWjLb4tHT6-WVf1MHDgw",
    image:
      "https://m.media-amazon.com/images/I/81Ihn6YpI+L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "BOFURI Light Novel Vol 1",
    link: "https://mega.nz/file/DZJSiCbS#boNLY_ZEHVRfMOOMB_-hIHWdEcyyZY0m_cq1CIYPGSw",
    image:
      "https://2.bp.blogspot.com/-_oDtcAnH67E/W9o2oKc1u3I/AAAAAAAAQfk/F-mydPvCYTMapnM1dfr_p89e92ryXB1HACLcBGAs/s400/itai-no-wa-iya.jpg",
  },
  {
    name: "BOFURI Light Novel Vol 2",
    link: "https://mega.nz/file/CZQ2hCCA#BkPienqM9hlm1cdmVAl5-w8keIxLKoGLXFlbgSPuA28",
    image:
      "https://1.bp.blogspot.com/-JxWbm4kJO_k/XR_U8RA8UiI/AAAAAAAAR7o/MTaK10UuYk8bdJAsQ3lmaFIPIeRpaJXXACLcBGAs/s400/Itai%2Bno%2Bwa%2BIya%2Bvolumen%2B2%2Bespanol.png",
  },
  {
    name: "BOFURI Light Novel Vol 3",
    link: "https://mega.nz/file/7YImVC7A#qLin9LkFSjrEhtWrlqHmrCdIO0GGOk-H8gZfptT1txQ",
    image:
      "https://1.bp.blogspot.com/-c7RFk_RopLk/XR_VESrN9pI/AAAAAAAAR74/umlr3qQLb1YnKp-tJIES203aToFELioKwCLcBGAs/s400/Itai%2Bno%2Bwa%2BIya%2Bvolumen%2B3%2Bespanol.jpg",
  },
  {
    name: "BOFURI Light Novel Vol 4",
    link: "https://mega.nz/file/PRBQDQxY#2-0XbHQCHhjLSwPCO20GJ3BhXa68Z6eh_Io9BuXa-ug",
    image:
      "https://1.bp.blogspot.com/-dDQtz24W4tg/XR_VARbZEII/AAAAAAAAR7w/wh3VH4y_yfsNofuh47Fh05sxuKhlWLQIACLcBGAs/s400/Itai%2Bno%2Bwa%2BIya%2Bvolumen%2B4%2Bespanol.png",
  },
  {
    name: "BOFURI Light Novel Vol 5",
    link: "https://mega.nz/file/jQQkSKAI#ZiQUKJ5E0Vl2bL8RmpXUycHllFPEXTAWvbjrmjG6yKM",
    image:
      "https://1.bp.blogspot.com/-LIID4F9uRXg/XR_VCO_4E2I/AAAAAAAAR70/3z4LAnxKCfUbGpZaGrnh9h7NkfyeA45pwCLcBGAs/s400/Itai%2Bno%2Bwa%2BIya%2Bvolumen%2B5%2Bespanol.png",
  },
  {
    name: "Bungo Stray Dogs Light Novel vol 1",
    link: "https://drive.google.com/file/d/17SgW3QG_8jzPyo2IYrrlNkASSctb77n4/view",
    image:
      "https://m.media-amazon.com/images/I/51pAf1mNrBL._SX430_BO1,204,203,200_.jpg",
  },
  {
    name: "Bungo Stray Dogs Light Novel vol 2",
    link: "https://drive.google.com/file/d/18WhG5M5j1X4mh_14OlAfixdZ6y8VQ7ca/view",
    image: "https://m.media-amazon.com/images/I/51ZnXOmBMRL.jpg",
  },
  {
    name: "Bungo Stray Dogs Light Novel vol 3",
    link: "https://mega.nz/file/CVFXGSBK#Hp2BvUNX9CxYOlofCY9j0jQCsSDf2b66e_H6Xr1XotA",
    image: "https://m.media-amazon.com/images/I/51Rg10J07+L.jpg",
  },
  {
    name: "Bungo Stray Dogs Light Novel vol 4",
    link: "https://mega.nz/file/SMMAlLDD#TjEtjLtIHPlRQevKgGJM43KqBA5N1Aq8-9NHvxCurOw",
    image: "https://m.media-amazon.com/images/I/51o21ZBQ+sL.jpg",
  },
  {
    name: "Bungo Stray Dogs Light Novel vol 5",
    link: "https://mega.nz/file/WYtlzIKA#g_6zJBm9AsqgHnM8VBkoP0nUY4eCXetrEdv7eDo0mtc",
    image: "https://m.media-amazon.com/images/I/51upAGGMkYL.jpg",
  },
  {
    name: "Bungo Stray Dogs Light Novel vol 6",
    link: "https://mega.nz/file/uBcxxDqD#WtAS3GO1qn0aPqJURTZ9wZGYTjKQg2sLRUvrUBTCVfc",
    image:
      "https://m.media-amazon.com/images/I/51V2ah5tP7L._SX351_BO1,204,203,200_.jpg",
  },
  {
    name: "Classroom of the Elite Vol 0",
    link: "https://mega.nz/file/qJ5BGCIJ#x5yI1O0tok6CCNqnkRAVxB-CJsgsW1eI3FblUI9tHc0",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaRndIismxwK03UejLHLSbUi0wagbe_RrjScAc1Er1nRakFl0Fta3Xg-9VftTZXf0AXuCpQdQsY-RLzSBrnb66J3dwuUh0rE_ZgaNEzzaR90sfPs-medwQ6K3JvOmEnS8wnLrkvE3ckP1dRNlkylJIJef4tjs-ViJDkYRAHW8Jk4V-ljDp2Ey9kRGh/w283-h400/Youkoso-Vol-0-espanol.jpg",
  },
  {
    name: "Classroom of the Elite Vol 1",
    link: "https://mega.nz/file/TIw3DCzK#dENieTgjlklyw-xBFtWfRO7iPCGhvtgvmuvzkuMulqI",
    image:
      "https://universonl.files.wordpress.com/2017/12/youkosojitsuryoku.jpg",
  },
  {
    name: "Classroom of the Elite Vol 2",
    link: "https://mega.nz/file/6JQDzSrS#2oL5wq4Q_fAqGmpaeJdnnAbA2cp_pSm8Iv98q8VCefg",
    image: "https://universonl.files.wordpress.com/2018/01/youkos2.jpg",
  },
  {
    name: "Classroom of the Elite Vol 3",
    link: "https://mega.nz/file/vQIjVCxQ#a5fAmB75eXmkX9nOryrbJW2gECJnTVCXFbGmkm1_FCQ",
    image:
      "https://1.bp.blogspot.com/-ZdDvFyZowjQ/XZFE7t7QjYI/AAAAAAAASe0/7djtwVkZ-jQHg3BRITEseOKmh-pvrHVBACLcBGAsYHQ/s400/youkoso%2Bvolumen%2B3%2Bespanol.jpg",
  },
  {
    name: "Classroom of the Elite Vol 4",
    link: "https://mega.nz/file/yJoB2a6C#xrQlQO9O9oTvuHtlN2nyT0sJnEg6_y2yrJSBiJApoQY",
    image: "https://universonl.files.wordpress.com/2018/01/youkos4.jpg",
  },
  {
    name: "Classroom of the Elite Vol 4.5",
    link: "https://mega.nz/file/aIQzRAKQ#0jWhuSw7SlsL9K6F98na5WW7A6_NA0dfsHig7q5ILgk",
    image: "https://universonl.files.wordpress.com/2018/01/youkos4-5.jpg",
  },
  {
    name: "Classroom of the Elite Vol 5",
    link: "https://mega.nz/file/PVQXiYBa#xUEJbcbp5WZMjutkmVQP-e9wKKud52XqpDJWYc2A-bs",
    image: "https://universonl.files.wordpress.com/2018/06/youkoso5.jpg",
  },
  {
    name: "Classroom of the Elite Vol 6",
    link: "https://mega.nz/file/HABFxYjL#_mQNit6eWpDPl9cAWItCEgH_lX2awsMQXoZ-UtnjIak",
    image:
      "https://2.bp.blogspot.com/-AxdQzN2_LRU/WyWMmRIRZoI/AAAAAAAAP3g/lgeviLu1_vkWVzu_9SsLJ0oB43FKascZQCLcBGAs/s1600/Youkoso%2Bvolumen%2B6%2Bespanol.jpg",
  },
  {
    name: "Classroom of the Elite Vol 7",
    link: "https://mega.nz/file/LY5TWQDS#QA2u3D1HUlpwL4eno6wTfH23fpwvmDDJt6WEAeWpBMY",
    image:
      "https://3.bp.blogspot.com/-hlzgsAYa66Q/WgDtJwSxwQI/AAAAAAAAMZ0/tUHz6eGOzKYIkZXe_HhM4kjA8o2M_QEuQCLcBGAs/s400/Ilustraciones%2Bde%2BYoukoso%2BJitsuryoku%2BShijou%2BShugi%2Bno%2BKyoushitsu%2Be%2BVolumen%2B7-1.jpg",
  },
  {
    name: "Classroom of the Elite Vol 7.5",
    link: "https://mega.nz/file/qcgjDKAa#8ZgkBRlpXYKYdurIhQ_AHdHI8blUqPl87T6X9w4We7I",
    image:
      "https://4.bp.blogspot.com/-0POO3DmllRw/WooARbrk_NI/AAAAAAAAN_o/w4o7QYc7X9EM6j9hdaLQ9bFcaS0IAgkAgCLcBGAs/s1600/Youkoso%2BLN_Vol_7.5_cover.jpg",
  },
  {
    name: "Classroom of the Elite Vol 8",
    link: "https://mega.nz/file/eU5kWKyT#2U_nXDQb5cAx_9vCjadl3pfvT3rkWS-WiCywlfhDMlM",
    image:
      "https://2.bp.blogspot.com/-qSAcK3Fe54E/WwyOq4zpR1I/AAAAAAAAPtc/daiAOmbMn4A1SLdgxxFtkEId8seLXv27ACLcBGAs/s400/Ilustraciones%2Bde%2BYoukoso%2BJitsuryoku%2BShijou%2BShugi%2Bno%2BKyoushitsu%2Be%2BVolumen%2B8-1.jpg",
  },
  {
    name: "Classroom of the Elite Vol 9",
    link: "https://mega.nz/file/LNYxnKyI#DVPvzhwJPhCR1NlorLkL-HiUm-_qi4GzaM2XVDdt3FQ",
    image:
      "https://2.bp.blogspot.com/-WCNyqPr-4Sg/XHhxaaxulvI/AAAAAAAAQ7U/rIoYgF0-HZsp1P0Yl7oyVdYEfBmZVm_CgCLcBGAs/s400/Youkoso%2Bvolumen%2B9.jpg",
  },
  {
    name: "Classroom of the Elite Vol 10",
    link: "https://mega.nz/file/jF5nBIpL#WPbRbCBf9GWDSEIcuIsNHI77c8r9djELZz1_h8-CbJ0",
    image:
      "https://1.bp.blogspot.com/-_jatgARoWSo/Xgu61tEcn2I/AAAAAAAATKg/qqcRTesHf_QA62VBhqpTzd3q25-DuvfIwCLcBGAsYHQ/s400/Youkoso%2BVolumen%2B10%2Bespanol.jpg",
  },
  {
    name: "Classroom of the Elite Vol 11",
    link: "https://mega.nz/file/OIhBWAYJ#tsn3u6qI6URGjkRj3bOKjws4ajKe-fcjUtxXEewjQs8",
    image:
      "https://1.bp.blogspot.com/-jocO2AAH1ns/Xgu7TJNvbtI/AAAAAAAATKo/Z0HglTZZlWAi3zfcjdxtulw6yVg21bcYACLcBGAsYHQ/s400/Youkoso%2BVolumen%2B11%2Bespanol.jpg",
  },
  {
    name: "Classroom of the Elite Vol 11.5",
    link: "https://mega.nz/file/6MADlKxJ#ZWv_eMV1A_bLlX78TGBzKoOgacWTHzQno_dBf9erdL4",
    image:
      "https://1.bp.blogspot.com/-RlNtNrWoejY/Xsr8NYVxztI/AAAAAAAAUkg/l2AvVfXRadAv7mZwPuIyAFV0xhxjSOKGgCK4BGAsYHg/w281-h400/Youkoso%2BVolumen%2B11.5%2Bespanol.jpg",
  },
  {
    name: "Classroom of the Elite 2nd Year Vol 1",
    link: "https://mega.nz/file/2MBjEAYT#knil27ACpyZo32pS17BY5EBNXSXI59rIB0Jr-E5-WZA",
    image:
      "https://1.bp.blogspot.com/-Yilt_Pya-eQ/Xzm89h-3Y0I/AAAAAAAAWRA/uaMeWAgRtj0BDc8RouFs3n1BN6W3oqw6QCLcBGAsYHQ/w282-h400/Youkoso%2BVolumen%2B12%2Bespanol.jpg",
  },
  {
    name: "Classroom of the Elite 2nd Year Vol 2",
    link: "https://mega.nz/file/vV523STS#s31m-ZB8643Hhis0zqeaG5Sx8bLfa4D58Ht0t56FiX4",
    image:
      "https://1.bp.blogspot.com/-CwZhyxrqaUg/Xzm9gKifjZI/AAAAAAAAWRI/II1K2yOx0uM6M5637W9qtRHwtx7qvm_JACLcBGAsYHQ/w282-h400/Youkoso%2BVolumen%2B13%2Bespanol.jpg",
  },
  {
    name: "Classroom of the Elite 2nd Year Vol 3",
    link: "https://mega.nz/file/TIBQkTIB#EJ5iujpZ5HddIz0zd3WYtKiP2temLgOWiSynRBJXKrY",
    image:
      "https://1.bp.blogspot.com/-cRuoQL6UbLA/X_IxFcyR85I/AAAAAAAAXVM/oHFCYHI7RhQKvlRH_m03hYOYlsodiXSvQCLcBGAsYHQ/w283-h400/Youkoso%2BVolumen%2B14%2Bespanol.jpg",
  },
  {
    name: "Classroom of the Elite 2nd Year Vol 4",
    link: "https://mega.nz/file/jE5Ehagb#Got-dIiY2Qvme11HSuLFBZjvnubseI2WfBwRpvk9dc8",
    image:
      "https://1.bp.blogspot.com/-sxJLGWeVG70/YGYc-mAX_LI/AAAAAAAAXps/chI9b2445H8db8bndxV3nZZe-mPR85AwgCLcBGAsYHQ/w283-h400/Youkoso%2BVolumen%2B15%2Bespanol.jpg",
  },
  {
    name: "Classroom of the Elite 2nd Year Vol 4.5",
    link: "https://mega.nz/file/HRxGEBKL#b7u2GhvLMjUkTISuEcF2pEOu7XcX1uGjB8UtmhCnV8g",
    image:
      "https://1.bp.blogspot.com/-3hU8o_nByoM/YQcmn5FlFSI/AAAAAAAAYbw/-AdFLG8zF5g6qupFJWvMGbV1v7r9_wkZACLcBGAsYHQ/w283-h400/Youkoso%2BVolumen%2B15.5%2Bespanol.jpg",
  },
  {
    name: "Classroom of the Elite 2nd Year Vol 5",
    link: "https://mega.nz/file/HRxGEBKL#b7u2GhvLMjUkTISuEcF2pEOu7XcX1uGjB8UtmhCnV8g",
    image: "https://m.media-amazon.com/images/I/51FTXqFNs-L._AC_SY1000_.jpg",
  },
  {
    name: "Classroom of the Elite 2nd Year Vol 6",
    link: "https://mega.nz/file/XRQyWLRA#rTmrudomCwSwbQ6ek-SrpjhcvAnj0q3BSJwHhaSsc0c",
    image:
      "https://m.media-amazon.com/images/I/81Hd-uHl2-L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Classroom of the Elite 2nd Year Vol 7",
    link: "https://mega.nz/file/LRpkhIxb#vNZoLAS2QW6VNZSzj7mohMthNck8ETce84WCXk2dbus",
    image:
      "https://i1.wp.com/animecenterbr.com/wp-content/uploads/2022/06/pic_001.jpg?fit=1000%2C1420&ssl=1",
  },
  {
    name: "Classroom of the Elite 2nd Year Vol 8",
    link: "https://mega.nz/file/WF5i3DJD#CiY8dTibaOfnNJ9ggihL5HnPkyz79X-3j21aXLoNoQI",
    image: "https://m.media-amazon.com/images/I/81xZqAhvRrL.jpg",
  },
  {
    name: "Danmachi Light Novel Vol 1",
    link: "https://mega.nz/file/CdJzkagJ#dcuGX2GpRtnEz-KJY0YvgUYD8yOufoRdHwgr0bSNdWo",
    image:
      "https://universonl.files.wordpress.com/2016/01/danma1.jpg?w=190&h=276",
  },
  {
    name: "Danmachi Light Novel Vol 2",
    link: "https://mega.nz/file/GNQW1SYT#WN3ZOuOQmK3gqCpLsfNEIA8rmzAdpvWeMkA7rEdIz7U",
    image:
      "https://universonl.files.wordpress.com/2015/12/danma2.jpg?w=190&h=276",
  },
  {
    name: "Danmachi Light Novel Vol 3",
    link: "https://mega.nz/file/eQY1WLYQ#hQYRgXbLRfRsVmrlCtNtiqVs2MpT5TbwAz3_k-s2CA0",
    image:
      "https://universonl.files.wordpress.com/2016/01/danma3.jpg?w=190&h=276",
  },
  {
    name: "Danmachi Light Novel Vol 4",
    link: "https://mega.nz/file/zYBgDTSI#ZeHfSyDXJfcdJxW8iBq4ZoZKTIby9QWkeugaAT4H2_0",
    image:
      "https://universonl.files.wordpress.com/2016/06/danmachi4.jpg?w=190&h=276",
  },
  {
    name: "Danmachi Light Novel Vol 5",
    link: "https://mega.nz/file/3EpTgD5b#Ts0j9n2rEnrNWAYAQQ8luGVaVjZy1ZcE1K8fnrdXtwU",
    image:
      "https://universonl.files.wordpress.com/2016/08/danmachi5.jpg?w=190&h=276",
  },
  {
    name: "Danmachi Light Novel Vol 6",
    link: "https://mega.nz/file/KA4hnKpY#0GalLKdXKgABgbGzPfNYc7SCNteEgAybu6PKocb6Q_U",
    image:
      "https://universonl.files.wordpress.com/2016/11/dungeon6.jpg?w=189&h=275",
  },
  {
    name: "Danmachi Light Novel Vol 7",
    link: "https://mega.nz/file/CRAV0SpT#6aTPOBmIn00DhtdhfN7m4M1mv2vjBNJv-mQwKHwZmRE",
    image:
      "https://universonl.files.wordpress.com/2017/03/danmachi7.jpg?w=190&h=276",
  },
  {
    name: "Danmachi Light Novel Vol 8",
    link: "https://mega.nz/file/eFQSmR5R#OaMvvUykXD_Z6NlysXNRbaQE9uLr2hsMIkF-hgi122M",
    image:
      "https://universonl.files.wordpress.com/2017/05/danmachi8.jpg?w=190&h=276",
  },
  {
    name: "Danmachi Light Novel Vol 9",
    link: "https://mega.nz/file/2Z5QmZbI#JHkV9XjjeGk15OOBUXde7cLfBapbBQ1f2hGmRJ8vqHM",
    image:
      "https://universonl.files.wordpress.com/2017/12/danmachi9.jpg?w=190&h=276",
  },
  {
    name: "Danmachi Light Novel Vol 10",
    link: "https://mega.nz/file/OZoXiTpR#bh79zn2O4V61j3ZVx-Uz5TkVmAt056vHH2Np1xNXe30",
    image:
      "https://universonl.files.wordpress.com/2018/02/danmachi10.jpg?w=190&h=276",
  },
  {
    name: "Danmachi Light Novel Vol 11",
    link: "https://mega.nz/file/vMYSBagZ#0lFaHVxRbT24Hl5p9qW5G0U5ZB3bOdeS6me8LP6uz54",
    image:
      "https://2.bp.blogspot.com/-y5aiGga4zt8/XAmqK8uL56I/AAAAAAAAQoA/YAj9kvKTBp8lve0AH6SBaWV0GqH0Y01sQCLcBGAs/s400/danmachi%2Bvolumen%2B11.jpg",
  },
  {
    name: "Danmachi Light Novel Vol 12",
    link: "https://mega.nz/file/GUZylCyY#9338zWpHOC46-yyL-ZEH5c3yk7eyBoUGKgyqjzNT5lY",
    image:
      "https://3.bp.blogspot.com/-TC49sU6hh0s/XAmqW21XxeI/AAAAAAAAQoE/2p3B2S6-8YE8B4TQB1HWYa5TYvq-VwSMwCLcBGAs/s400/danmachi%2Bvolumen%2B12.jpg",
  },
  {
    name: "Danmachi Light Novel Vol 13",
    link: "https://mega.nz/file/2MgBnCgZ#LiRAE6hyfbmBiZUjbN3-Acevakb2cKoQJeJ1BgT7hW4",
    image:
      "https://3.bp.blogspot.com/-r6DZn9lFh9g/XKk0H8JLSOI/AAAAAAAARGw/J9QIm3zYIPwQZTIASF33pFIoDMHPIxfjgCLcBGAs/s1600/danmachi%2Bvolumen%2B13%2Bespanol.jpg",
  },
  {
    name: "Danmachi Light Novel Vol 14",
    link: "https://mega.nz/file/mJARVSxB#GrLZy3rOmZ0OKFxklpcXDhdPvAZU_Ev2q6RyVmi2w7M",
    image:
      "https://1.bp.blogspot.com/-3AfSNbZqCKQ/X6h34V9dcoI/AAAAAAAAW_I/jlHvPyGYBQw60GnGZbE5OhBITBCclHzywCLcBGAsYHQ/w280-h400/danmachi%2Bvolumen%2B14%2Bespanol.jpg",
  },
  {
    name: "Danmachi Light Novel Vol 15",
    link: "https://mega.nz/file/6EpQ0BwQ#V_iMlnu_i3M_heLQvIkgqeJDe1cEwbwZiLBuVvTjUyo",
    image:
      "https://1.bp.blogspot.com/-NiB1_exdBtw/X6h4fMz_hHI/AAAAAAAAW_Q/YLamaY-v3hcXpZ4EQ1HwJNTGhpn1qP7jgCLcBGAsYHQ/w280-h400/danmachi%2Bvolumen%2B15%2Bespanol.jpg",
  },
  {
    name: "Danmachi Light Novel Vol 16",
    link: "https://mega.nz/file/bN4GHRpa#foiQ9ZP61kve9-mudU0LeTF7qDSO_tIxITIbsrevkA8",
    image:
      "https://1.bp.blogspot.com/-KyQhYBNx_0s/X_SabPK5woI/AAAAAAAAXWE/AHc68MZRVi42RlYF5g-EdqIGAIgHKDMLgCLcBGAsYHQ/w288-h400/danmachi%2Bvolumen%2B16%2Bespanol.jpg",
  },
  {
    name: "Danmachi Light Novel Vol 17",
    link: "https://mega.nz/file/GFhCWY6C#e1zYPi49_KMkHTDwoqlaAulWeA7BFDI8WOoD_vKvJak",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8ocuN8lweYZ7yygxpPXPNUmQXa2arWNiB9xI4aQAif_m5NcJrL2k0oH1y9_NNBqYUBxpgZRk9kdG6TBd-cD79MLXF8r7bCBzd0k0wQrmllrxBfXLvG9u3BV_f63RFTsLi0IVzyfjzdDs6NxMmY7y3zU6mBeNAaDQ-xXvQyyLxgxX5ruN8_3VQWv_z/w280-h400/Danmachi%20volumen%2017%20espanol.jpg",
  },
  {
    name: "Danmachi Familia Chronicle Episode Ryuu",
    link: "https://mega.nz/file/WNoimTIA#PFk0IQd7Ss3rKRxsatCyN0gcrOc82RV3RwWwNZ-hwwk",
    image:
      "https://1.bp.blogspot.com/-wOvsuD6Zod0/X_NvY-cUgZI/AAAAAAAAXVw/f2WzAwxoLlgcdCCVdAU6ozfTNnmY3Lw-gCLcBGAsYHQ/w448-h640/Episode_Ryuu_Cover.jpg",
  },
  {
    name: "Danmachi Familia Chronicle Episode Freya",
    link: "https://mega.nz/file/yF5WGbCC#H0fT9nbfGWI1cDhufQkLdE3e_60RTmji5PUcS3cOoRo",
    image:
      "https://1.bp.blogspot.com/-bpsC56CY2wo/X_NvsitEHbI/AAAAAAAAXV4/5WEr2e74m0w5P92KxSbKMsNvZoJnTHXAQCLcBGAsYHQ/w448-h640/Episode_Freya_Cover.png",
  },
  {
    name: "Danmachi Sword Oratoria Light Novel Vol 1",
    link: "https://drive.google.com/file/d/0B3e_iVri06-_NjNCYWRmRlVEclU/view?resourcekey=0-Z22mHsFyRciuA-W8WfbH4Q",
    image:
      "https://universonl.files.wordpress.com/2017/12/dungesword-oratoria.jpg?w=347&h=504",
  },
  {
    name: "Danmachi Sword Oratoria Light Novel Vol 2",
    link: "https://drive.google.com/file/d/138D_eOjI-h1LgYP52ruuTZf9lz6Ndz1_/view",
    image:
      "https://universonl.files.wordpress.com/2018/01/swordorato2.jpg?w=347&h=504",
  },
  {
    name: "Danmachi Sword Oratoria Light Novel Vol 3",
    link: "https://drive.google.com/file/d/1ZPFwiH_p265mRmoRqYlpliytzJGhaD1R/view",
    image:
      "https://universonl.files.wordpress.com/2018/05/swordora3.jpg?w=347&h=504",
  },
  {
    name: "Danmachi Sword Oratoria Light Novel Vol 4",
    link: "https://mega.nz/file/HERSyIjC#Xds6zvq6Z58UuS3wzYeuuQTQTOYmnLe822wAwdhxbFo",
    image:
      "https://1.bp.blogspot.com/-GFdlKBXTSDI/XAmsb4qx_gI/AAAAAAAAQoQ/hk01CYS5yrwqRQ9QCBO8lJ8Bx_BTGiMXACLcBGAs/s400/oratoria%2Bvol%2B4.jpg",
  },
  {
    name: "Danmachi Sword Oratoria Light Novel Vol 5",
    link: "https://mega.nz/file/fAYEGAQY#ZCrWxoHjkdLiNqOjwrGq8yITU6EmhhcOXOWwDszYYJA",
    image:
      "https://1.bp.blogspot.com/-8RV7AO8J0K4/XhelHfqxywI/AAAAAAAATY0/ybdhMrt3ksAzW0YzHKpXkbRQj9eSdfsjACLcBGAsYHQ/s400/Sword%2BOratoria%2BVolumen%2B5%2Bespanol.jpg",
  },
  {
    name: "Danmachi Sword Oratoria Light Novel Vol 6",
    link: "https://mega.nz/file/7URWxKjQ#QF_VaF3ImiLPk-ZPFwAGl664bGOsCHhY5qx7DOKYY7o",
    image:
      "https://1.bp.blogspot.com/-O7tLakJAYe4/XhelOacNsWI/AAAAAAAATY4/ilBfkw09c7orkP3rg-_bDAoS7e3aide1QCLcBGAsYHQ/s400/Sword%2BOratoria%2BVolumen%2B6%2Bespanol.jpg",
  },
  {
    name: "Danmachi Sword Oratoria Light Novel Vol 7",
    link: "https://mega.nz/file/rVJg0YLK#c48hwNE8QsmemdMZMci-0dupOOO5v4xXlplz5gAhziw",
    image:
      "https://1.bp.blogspot.com/-NETCMX54r0Q/XheleMmcvfI/AAAAAAAATZE/1n4aZDqQjzEYZ8uKdvpXcpeN1-RXOuUEwCLcBGAsYHQ/s400/Sword%2BOratoria%2BVolumen%2B7%2Bespanol.jpg",
  },
  {
    name: "Danmachi Sword Oratoria Light Novel Vol 8",
    link: "https://mega.nz/file/LIQUxIyA#tRhXKcvlfhgZmPqyKC0RV3aXrdErfveEPFt4wfWXfvg",
    image:
      "https://1.bp.blogspot.com/-Nnr0caQzggE/XheljvfdThI/AAAAAAAATZI/FkN7jnP2qowgRLdc7CVxUdAIwa8d-83EwCLcBGAsYHQ/s400/Sword%2BOratoria%2BVolumen%2B8%2Bespanol.jpg",
  },
  {
    name: "Danmachi Sword Oratoria Light Novel Vol 9",
    link: "https://mega.nz/file/zQZSmCSL#DkBq6y2xdNXLAbnfq70SzeUZDg5SRccBCJwydzdQ3gc",
    image:
      "https://1.bp.blogspot.com/-tZF2bjDknAs/Xhelt6eknDI/AAAAAAAATZQ/uLB1AH23-u8OQL_b8hOQKXxqgQGUolXXwCLcBGAsYHQ/s400/Sword%2BOratoria%2BVolumen%2B9%2Bespanol.jpg",
  },
  {
    name: "Date A Bullet Light Novel",
    link: "https://mega.nz/file/XFBnVS4B#o6x3SNDluL_s0dSqxaR7VKNCUMkoZ6QWYF5Hz8XXsxw",
    image:
      "https://1.bp.blogspot.com/-U2b6y53KvKs/XbYmL25NFhI/AAAAAAAASng/jKtc3uOUMikdb4FMg16JYxOtKa8eDYFnQCLcBGAsYHQ/s400/Date_A_Bullet_Volumen%2B1%2BEspanol.jpg",
  },
  {
    name: "Date A Live Light Novel",
    link: "https://mega.nz/folder/3cQygJ7T#NhZExqglJ-az1kmZ9n1nyQ",
    image:
      "https://universonl.files.wordpress.com/2016/01/datea1.jpg?w=374&h=544",
  },
  {
    name: "Date A Live Light Novel Vol 15",
    link: "https://mega.nz/folder/qAxHiYII#qfPcZOObSwQB-90XWAOC4g",
    image:
      "https://3.bp.blogspot.com/-f_txZSBZJVs/WT8O1u0e1ZI/AAAAAAAAKU8/Pa2BIT4M4IUKQRQh3wQptZfuX-ifNUKpACLcB/s1600/Volumen%2B15%2Bde%2BDate%2Ba%2BLive%2Ben%2Bespa%25C3%25B1ol.jpg",
  },
  {
    name: "Date A Live Encore Light Novel",
    link: "https://mega.nz/folder/aY4jTSLD#88pNvO7BAVoQkkCI1qmz2Q",
    image:
      "https://somoskudasai.com/wp-content/uploads/2020/07/Eb0V5LmWkAUms5--726x1024.jpg",
  },
  {
    name: "Death Note: Another Note Light Novel",
    link: "https://mega.nz/file/CBxxSDpA#b-niu6nMTPKAA3HiIv1U2CeibeZVu8CAYM6EKh9gSfA",
    image:
      "https://universonl.files.wordpress.com/2016/01/deathnot2.jpg?w=300&h=436",
  },
  {
    name: "Death Note: L Change the World Light Novel",
    link: "https://mega.nz/file/2IYVQLaK#y9jJYCWeRXK5nkz4x-ETfPJkhggzRIWeeaEmNRVd70c",
    image:
      "https://universonl.files.wordpress.com/2017/12/deathnotelcha.jpg?w=309&h=449",
  },
  {
    name: "Classroom for Heroes Light Novel Vol 1",
    link: "https://mega.nz/file/b1EnjLRb#F3GXuKAYZNKJ3c1XuqdG0GOSvjjI153fkbBnUkNujsQ",
    image:
      "https://4.bp.blogspot.com/-tsWb0f1qhyY/WZYgRBXBifI/AAAAAAAALLM/Dsrt7jlqAXYVNT1z0Cn-93VeZDrZ-PxQwCLcBGAs/s1600/Eiyuu%2BKyoushitsu%2Bvolumen%2B1%2Bespanol.jpg",
  },
  {
    name: "Fate/Zero Light Novel Vol 1",
    link: "https://mega.nz/file/fJgHBIRT#m7rkUjpzwyz_YDDK3ykwaDCwvSiqcWlmWHgXYt9-ReQ",
    image:
      "https://universonl.files.wordpress.com/2017/12/fatezero.jpg?w=374&h=544",
  },
  {
    name: "Fate/Zero Light Novel Vol 2",
    link: "https://mega.nz/file/HBwFxYoZ#ACldOgdhsfnVaaiDoq68EDJp1xyU10_MMkagAP7vhFs",
    image: "https://universonl.files.wordpress.com/2015/08/fateze2.jpg",
  },
  {
    name: "Fate/Zero Light Novel Vol 3",
    link: "https://mega.nz/file/3YpxTSgY#OYGJv2r00fum9XzkrLTnCVxdpEIBhT8qtOF-132NIw4",
    image: "https://universonl.files.wordpress.com/2015/08/fateze3.jpg",
  },
  {
    name: "Fate/Zero Light Novel Vol 4",
    link: "https://mega.nz/file/WVoEEDqb#9_hl8FFSEt-0HIjCagbkcSnAMEO9EIydqv_R0JbCnNM",
    image: "https://universonl.files.wordpress.com/2015/08/fateze4.jpg",
  },
  {
    name: "Fate/Prototype: Fragments of Blue and Silver Vol 1",
    link: "https://mega.nz/file/5kABySiR#luqH7F_ErXHZsTgfcj-116uThEKCiGm0z-rWPOTZL_4",
    image:
      "https://universonl.files.wordpress.com/2016/01/fateproto.jpg?w=302&h=439",
  },
  {
    name: "Fate/Prototype: Fragments of Blue and Silver Vol 2",
    link: "https://mega.nz/file/JtQDkSSC#hzndRv96rkQ8_A3t9d4lcT0OeDd5WP1hMNxPgm6IffI",
    image:
      "https://universonl.files.wordpress.com/2017/03/fateproto2.jpg?w=298&h=434",
  },
  {
    name: "Fate/Prototype: Fragments of Blue and Silver Vol 3",
    link: "https://mega.nz/file/M0xAzKRD#zs_NINkK-y965GKAmKGyFPPsCMiaEHql9LXu1Dz0Zss",
    image:
      "https://m.media-amazon.com/images/I/81ysDT1-1vL._AC_UF350,350_QL50_.jpg",
  },
  {
    name: "Fate/Strange Fake Light Novel Vol 1",
    link: "https://mega.nz/file/WMwS2QSQ#y2u0VUf4qxIKVGTVypqj_oMHz9ORhQHXRioSiyadamI",
    image: "https://universonl.files.wordpress.com/2017/12/fatestran.jpg",
  },
  {
    name: "Fate/Strange Fake Light Novel Vol 2",
    link: "https://mega.nz/file/PFokhaBC#yiL2DDfGBK7rSxbBXB0IQ4qLRJf7eHFpjSnJtIi9pls",
    image:
      "https://1.bp.blogspot.com/-OJ6_sn8SgH0/Xg-sBU-7dbI/AAAAAAAATRg/Yiq8pljPO7wdZzTJMpANbcfYU5GvjN81gCLcBGAsYHQ/s400/Fate-strange%2BFake%2Bvolumen%2B2%2Bespanol.jpg",
  },
  {
    name: "Fate/Requiem Light Novel",
    link: "https://mega.nz/file/Ep5z0JRA#TduTnmcyB_gaBR6Qq_Iv9QWmGOaZpMlblZzQ9LTNNbQ",
    image: "https://m.media-amazon.com/images/I/51gOjxIHXmL._AC_SY445_.jpg",
  },
  {
    name: "Goblin Slayer Light Novel Vol 1",
    link: "https://mega.nz/file/HEokjRiI#06KiiRDtkAiiG-UYz3txrXhMOPTWRdf5oo4QElH3H5k",
    image:
      "https://universonl.files.wordpress.com/2016/01/goblin1.jpg?w=380&h=552",
  },
  {
    name: "Goblin Slayer Light Novel Vol 2",
    link: "https://mega.nz/file/DBR0SR4Q#zzGNHvP84mzOEPSSQUcFGf8uZZv1rXFb4k1ePXLyamw",
    image:
      "https://universonl.files.wordpress.com/2018/01/goblinsla2.jpg?w=380&h=552",
  },
  {
    name: "Goblin Slayer Light Novel Vol 3",
    link: "https://mega.nz/file/WZwzgYgB#3uqPvsh563qioHkjF-8omEnkWuMJtJCGqcoNnJBwIog",
    image:
      "https://universonl.files.wordpress.com/2018/01/goblinsla3.jpg?w=380&h=552",
  },
  {
    name: "Goblin Slayer Light Novel Vol 4",
    link: "https://mega.nz/file/PQZSTI5A#bOsXZG6hR--1P06mUvanrUubPlmQWLvDWeUpbmN9gIc",
    image:
      "https://universonl.files.wordpress.com/2018/06/goblinsla4.jpg?w=380&h=552",
  },
  {
    name: "Goblin Slayer Light Novel Vol 5",
    link: "https://mega.nz/file/iN5BiSaT#pi4QOe8yLP6Cn0cBhlaVbuzQ5MZGf0liHGc91c95L6w",
    image:
      "https://1.bp.blogspot.com/-Gck1nz95NuA/XHMgxA-IshI/AAAAAAAAQ6s/Y8lP2B7LIL45G16pJABeOsi_vHkVBj1GACLcBGAs/s400/goblin%2Bslayer%2Bvolumen%2B5%2Bespanol.jpg",
  },
  {
    name: "Goblin Slayer Light Novel Vol 6",
    link: "https://mega.nz/file/vNJgwIyb#GnzXSAwdT7Hk8WP0zoQiD8CBH18C4qdWpA7vt2ENaEk",
    image:
      "https://1.bp.blogspot.com/-t1TDQFVRO_Y/XoT4s_mkNYI/AAAAAAAAT4o/aMg3yeEAVck9rSp_j3V7_AMLT5pYDKZvQCLcBGAsYHQ/s400/Goblin%2BSlayer%2Bvolumen%2B6%2Bespanol.png",
  },
  {
    name: "Goblin Slayer Side Story: Year One Vol 1",
    link: "https://mega.nz/file/WdchCIaT#0mIk3I8QClMbb47vbmfj8gzt8hyjkxtT-g5HKwvfVpQ",
    image:
      "https://1.bp.blogspot.com/-Ckug4kkNwyc/XopNbOsI1VI/AAAAAAAAT7Y/fzLJJ2HyeO0dA33VYz4q-0OgNJdrWO6CACLcBGAsYHQ/s1600/Goblin%2BSlayer%2BSide%2BStory%2BYear%2BOne%2BVol%2B1%2Bespanol.jpg",
  },
  {
    name: "Goblin Slayer Side Story: Year One Vol 2",
    link: "https://mega.nz/file/KB0RhazK#5c1qP-T3mspPgLcY6H3nCFN06CWASoR8scpsHivRSeM",
    image:
      "https://1.bp.blogspot.com/-bbiv5mRlZNQ/XopNbEa6uyI/AAAAAAAAT7c/Mi-jqaMhs-o46qrbtSHsxOXLt6sdvVDIACLcBGAsYHQ/s1600/Goblin%2BSlayer%2BSide%2BStory%2BYear%2BOne%2BVol%2B2%2Bespanol.jpg",
  },
  {
    name: "Goblin Slayer Gaiden 2 Vol 1",
    link: "https://drive.google.com/file/d/19zD21ru_9zZUQyC_nYIvNqqYPHL6eBbK/view",
    image:
      "https://static.wixstatic.com/media/46079e_2baff4d5c8ec49e7a1d48a01d0d0e4ce~mv2.jpg/v1/fill/w_227,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9781975318246.jpg",
  },
  {
    name: "Goblin Slayer Gaiden 2 Vol 2",
    link: "https://drive.google.com/file/d/12PeI84IHrcjVYSrohLIT-an1FctBVXKY/view",
    image:
      "https://static.wixstatic.com/media/46079e_27cae559dc48413688d49d3f4bcb1f3a~mv2.jpg/v1/fill/w_227,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9781975333546.jpg",
  },
  {
    name: "Golden Time Light Novel",
    link: "https://lectortmo.com/library/novel/13699/Golden-Time",
    image:
      "https://universonl.files.wordpress.com/2017/12/goldenti.jpg?w=187&h=272",
  },
  {
    name: "Hensuki Light Novel Vol 1",
    link: "https://mega.nz/file/mFhlnaKD#w5uHOE1Uyx2cA91AeWpiWCGZO1YTNoOUC864M07FBU4",
    image:
      "https://1.bp.blogspot.com/-aGY8DC-NTSA/XLo5p0HygUI/AAAAAAAARQ4/iJNlHDfDxCsO6EZDLmKbAndr1e_49Qv2ACLcBGAs/s400/Kawaikereba%2BHentai%2Bdemo%2BSuki%2Bni%2BNatte%2BKuremasu%2Bka%2Bvolumen%2B1.jpg",
  },
  {
    name: "Hensuki Light Novel Vol 2",
    link: "https://mega.nz/file/yQIXyA7I#KH7OSt6VmlDpsLQ5dRA0jAA7QkB736Xs6d12NBfzoo0",
    image:
      "https://2.bp.blogspot.com/-8aFgfP8-TLc/XLo5sAa-NjI/AAAAAAAARQ8/o_CP3EpJIEEgc_y_NlweMO1Ujg2LsVgeQCLcBGAs/s400/Kawaikereba%2BHentai%2Bdemo%2BSuki%2Bni%2BNatte%2BKuremasu%2Bka%2Bvolumen%2B2.jpg",
  },
  {
    name: "Hensuki Light Novel Vol 3",
    link: "https://mega.nz/file/2YIgSYAD#hQQKWHOzDHtr1SZGKR90YjzWXA86KdEtj67LOj_ZZDw",
    image:
      "https://1.bp.blogspot.com/-C7oqVODqFec/XgaGMFRMimI/AAAAAAAATFA/n-Ycfhwvez8hDmiHMEiiLuysahb9LSBHwCLcBGAsYHQ/s400/hensuki%2Bvolumen%2B3%2Bespanol.jpg",
  },
  {
    name: "Hensuki Light Novel Vol 4",
    link: "https://mega.nz/file/OVZg0Iia#1_nSwbhwRbbQ0jqmyeGNvznka4jr1VaPXqNF2dhhKSQ",
    image:
      "https://1.bp.blogspot.com/-Kq-LK3WTVk8/XgaG-aa3PiI/AAAAAAAATFQ/Yha-nycCqfM_ywtElY1a00RvKM8TknFiwCLcBGAsYHQ/s400/hensuki%2Bvolumen%2B4%2Bespanol.jpg",
  },
  {
    name: "Hensuki Light Novel Vol 5",
    link: "https://mega.nz/file/CJAUWaBb#xv5VslyJ4FDQ6T77nLRCcbSK8DnVaJzjN3T9z78gxQk",
    image:
      "https://1.bp.blogspot.com/-llB-H1ec40c/XgaG4GlOEDI/AAAAAAAATFM/m2vNxkvisKA-kyeeDTXl2bdvEoz8Ht7eQCLcBGAsYHQ/s400/hensuki%2Bvolumen%2B5%2Bespanol.jpg",
  },
  {
    name: "Hensuki Light Novel Vol 6",
    link: "https://mega.nz/file/CUJiwIza#vC3ghdzvO1CkLIe53_S1D259v58MXKJ4ih6dGXzXToc",
    image:
      "https://1.bp.blogspot.com/-IZM79t1mRCo/XgaHLKiOuxI/AAAAAAAATFY/o_JGSeosV-cSDlklEGoJwkd_NOY884inwCLcBGAsYHQ/s400/hensuki%2Bvolumen%2B6%2Bespanol.jpg",
  },
  {
    name: "Hensuki Light Novel Vol 7",
    link: "https://mega.nz/file/mNRmmarI#MO3oUEqa_M-DD-9Ak5IkOIlBf_jDoJDeZYqOHYSXrpY",
    image:
      "https://1.bp.blogspot.com/--yS28pxP4Xk/XgaHWBHTdPI/AAAAAAAATFg/PWQV8Vd0hqYHiy5s40pQIgTL9Lvc0zgAgCLcBGAsYHQ/s400/hensuki%2Bvolumen%2B7%2Bespanol.jpg",
  },
  {
    name: "Hensuki Light Novel Vol 8",
    link: "https://mega.nz/file/eMRCDYLb#wVSjny0-QFVpyPS_NDhooPStPLcgQ36mtFFIBco2fYA",
    image:
      "https://1.bp.blogspot.com/-5omhjrvxhLk/XgaHlHr7tyI/AAAAAAAATFo/Okh9bAvOhiEQxoyLxFGvI6jl9i7bkWHagCLcBGAsYHQ/s400/hensuki%2Bvolumen%2B8%2Bespanol.jpg",
  },
  {
    name: "Hensuki Light Novel Vol 9",
    link: "https://mega.nz/file/LYpE3YrC#Bh_XFDhrbteLeG42RQOatTF0-ERhJwmQE5mnHvCOZjY",
    image:
      "https://1.bp.blogspot.com/-DwcLV94e79s/XxsKjZDSCrI/AAAAAAAAWBo/179jJ10YjYcQR8DUDzcmxLCQelHTbBu-wCLcBGAsYHQ/w283-h400/hensuki%2Bvolumen%2B9%2Bespanol.jpg",
  },
  {
    name: "Hensuki Light Novel Vol 10",
    link: "https://mega.nz/file/yJpgjKwK#jRcevfhnexG4ZI42TWcE_QQvLQVZUJSqopR4hImPUno",
    image:
      "https://elmundodeshirohome.files.wordpress.com/2020/07/el-volumen-11-de-hensuki-serc3a1-lanzado-en-septiembre.jpg?w=84",
  },
  {
    name: "Hensekai Afterword",
    link: "https://mega.nz/file/fUwWACjZ#ImMW3cH-kW9N378QwfcsowIZKV-OkorfUh_AH-s-wzo",
    image:
      "https://1.bp.blogspot.com/-Q2KkEEqE8pU/XxsKxmSGf6I/AAAAAAAAWBw/cznlJitKBbwH_kJ3pnNJyiW-8Fz_GQagQCLcBGAsYHQ/w274-h400/Hensekai%2Ben%2Bespanol.jpg",
  },
  {
    name: "HenNeko Vol 1",
    link: "https://mega.nz/file/HklHBDRL#SRniA4cH9Qe9kJPIiRc-i4KtAZTzlEAMlEK6UwUz-E8",
    image: "https://universonl.files.wordpress.com/2016/01/hentaiou.jpg",
  },
  {
    name: "HenNeko Vol 2",
    link: "https://mega.nz/file/W0UQ0TJZ#gEI1pH-q_SbIKdudW72IRV8WULKSdUK_ksUdwkHCq8E",
    image: "https://universonl.files.wordpress.com/2017/12/hentaiou2.jpg",
  },
  {
    name: "Aria the Scarlet Ammo",
    link: "https://issuu.com/novelasligeras/docs/_kklr__hna_01",
    image:
      "https://universonl.files.wordpress.com/2017/12/hidannoa.jpg?w=374&h=544",
  },
  {
    name: "Aria the Scarlet Ammo: Blazing Diamond Dust",
    link: "https://issuu.com/novelasligeras/docs/_kklr__hna_02",
    image:
      "https://universonl.files.wordpress.com/2014/10/hidan2.jpg?w=374&h=542",
  },
  {
    name: "Aria the Scarlet Ammo: Honey Trap",
    link: "https://issuu.com/novelasligeras/docs/_kklr__hna_03",
    image:
      "https://universonl.files.wordpress.com/2014/10/hidan3.jpg?w=374&h=542",
  },
  {
    name: "Aria the Scarlet Ammo: Fall of the Scarlet Ammo",
    link: "https://issuu.com/novelasligeras/docs/_kklr__hna_04",
    image:
      "https://universonl.files.wordpress.com/2014/10/hidan4.jpg?w=374&h=544",
  },
  {
    name: "Aria the Scarlet Ammo: Overture's Fine",
    link: "https://issuu.com/novelasligeras/docs/_kklr__hna_05",
    image:
      "https://universonl.files.wordpress.com/2014/10/hidan5.jpg?w=376&h=546",
  },
  {
    name: "Aria the Scarlet Ammo: Killing Range 2051",
    link: "https://issuu.com/novelasligeras/docs/_kklr__hna_06",
    image:
      "https://universonl.files.wordpress.com/2014/10/hidan6.jpg?w=374&h=544",
  },
  {
    name: "Aria the Scarlet Ammo: Castling Turn",
    link: "https://mega.nz/folder/QSYXwaKb#AosNMDicXUzxeaEf1_ij2w",
    image:
      "https://universonl.files.wordpress.com/2014/10/hidan7.jpg?w=374&h=544",
  },
  {
    name: "Aria the Scarlet Ammo: Tornado High",
    link: "https://issuu.com/novelasligeras/docs/_kklr__hna_08",
    image:
      "https://universonl.files.wordpress.com/2014/10/hidan8.jpg?w=374&h=544",
  },
  {
    name: "Aria the Scarlet Ammo: Spark Out",
    link: "https://mega.nz/folder/UGQhyS7S#RvWK23vS_-82ur1bbYF3Lg",
    image:
      "https://cdn1.booknode.com/book_cover/1216/hidan_no_aria_tome_9_spark_out-1215819-264-432.jpg",
  },
  {
    name: "Aria the Scarlet Ammo: Arcanum Duo",
    link: "https://mega.nz/folder/QLIFXC4J#pMkiCBR6qSCnn8UxO32ipg",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=175x10000:format=jpg/path/s0780ed699b42afd7/image/ic6a42c18413f0e48/version/1620317187/image.jpg",
  },
  {
    name: "Aria the Scarlet Ammo: Collateral Bros",
    link: "https://mega.nz/folder/ZGIF0K4A#wHzul71G3Icxbnyd89pU7g",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=175x10000:format=jpg/path/s0780ed699b42afd7/image/i8547ebe1574184d5/version/1620317189/image.jpg",
  },
  {
    name: "Aria the Scarlet Ammo: Fall Oblige",
    link: "https://mega.nz/folder/NOZ1nKIB#6zYzlAzJmQyitJKd0CxgCA",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=175x10000:format=jpg/path/s0780ed699b42afd7/image/i3e85339429c06c28/version/1620317192/image.jpg",
  },
  {
    name: "Aria the Scarlet Ammo: Kowloon Reverse",
    link: "https://mega.nz/folder/oGYTTaJT#0q0TB6sqjB03e5BDPP0k1w",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=175x10000:format=jpg/path/s0780ed699b42afd7/image/i234ec7aa295fb732/version/1620317195/image.jpg",
  },
  {
    name: "Aria the Scarlet Ammo: Aquamarine Kreuz",
    link: "https://mega.nz/folder/FOAl0IZQ#NT9IH8pnzflvH1Hx3aQUKQ",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=175x10000:format=jpg/path/s0780ed699b42afd7/image/i14acd4a85055c2ac/version/1620317197/image.jpg",
  },
  {
    name: "Aria the Scarlet Ammo: Constellation",
    link: "https://mega.nz/folder/1TYDTaDJ#0gzwiKtWPRrhpHTWYwzHZw",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=175x10000:format=jpg/path/s0780ed699b42afd7/image/iee15eaac05f5b07c/version/1620317200/image.jpg",
  },
  {
    name: "Higehiro",
    link: "https://mega.nz/folder/bAJzUKAR#5aGbUOxCgO2JufYsxrO08A",
    image:
      "https://4.bp.blogspot.com/-cNtB8wcBy-o/XLTaNWSs7FI/AAAAAAAAADQ/3QMzxN9PIL8I60BSLz2lXq04-5LKzThzQCEwYBhgL/s320/Volumen%2B1.png",
  },
  {
    name: "High School DxD Light Novel Vol 1",
    link: "https://mega.nz/file/RpND0SRA#zOtefuYN3q4a__4AjYVdzU3KTKlsg-Z9OEPxCBjdZag",
    image:
      "https://universonl.files.wordpress.com/2017/12/higschoold.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 2",
    link: "https://mega.nz/file/s4N03SZQ#xYglq70fOrRexT7fVmmBXDMZEGUpeR5rHEtJZlMGlZo",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs2.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 3",
    link: "https://mega.nz/file/k8VmmQoB#1oeG0lP-mwH5klvFWyKaCUA9ZX9xG8VfTVDeobld6ys",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs3.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 4",
    link: "https://mega.nz/file/w89QCBZB#-4Y5n4k88xTZ0oa6vsYarB5zTm6ERJIz91yJzLXOUPQ",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs4.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 5",
    link: "https://mega.nz/file/BlMxXKwZ#zapTVJxfswOki1-6CDlfBJ_vXUUJiduHFfzS2lWwB9o",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs5.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 6",
    link: "https://mega.nz/file/gtVETLpB#Iez8FexAV9STZ3OhYcC79SuPukXwfoQoa80s3YaoGJQ",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs6.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 7",
    link: "https://mega.nz/file/Al0A0RZI#pFF7NHvBlNjISDRYIuIf4k_yeRcOTPhRhODUaFqkj1A",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs7.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 8",
    link: "https://mega.nz/file/YgEUUZDQ#P5itechgwvCab-bTxQOQ7Rj29ZY3eiDmXr6YB-umi9A",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs8.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 9",
    link: "https://mega.nz/file/s1khTDzC#6UcoalHULKA_aUons4579c1etOZMmomlg93WT3l5G0g",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs9.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 10",
    link: "https://mega.nz/file/B5kRlZIS#7yVlK7psNmcn3-IzZ_-sHXsnTCybHC-iPi9IVpiDXIo",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs10.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 11",
    link: "https://mega.nz/file/8lk0iaaK#_6FrZcgletB7OrWZg2F4P0d4AsAj8QED9jknb67p5lk",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs11.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 12",
    link: "https://mega.nz/file/4pU0GIBQ#hkOK7wpQXIoKrKIWTNvAvDi8RYWRgPjXOtiMzdMSd2w",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs12.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 13",
    link: "https://mega.nz/file/1x9TwSoD#kwoVlG_5dLPfSeevVt8zEy-PAh7yzF1jYfn4l_CvadM",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs131.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 14",
    link: "https://mega.nz/file/ppFkAA6J#uoEg-kHWB7QEtYMXe7msrWhtCRHt603qWr8R_S_DpOA",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs141.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 15",
    link: "https://mega.nz/file/khMxCACI#kseq77OG3JC5KMpSkpPndQjZRMXcLB-Ch2oyklF-kIs",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs15.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 16",
    link: "https://mega.nz/file/Z4EDXbjJ#057Hpm2IdJIUGA_285oeWhE2lLuiHj95hm9uYiDrlb0",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs16.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 17",
    link: "https://mega.nz/file/VplVwaaa#Cny95PhWx6-rUjRgs94Agg3hEQY3TNbQnxHYWFNudqE",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs17.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 18",
    link: "https://mega.nz/file/S4UEnJ6S#p1OqDmLB9eELkaB2NTZo0CKFsP21sgMokogCGZPpTZ0",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs18.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 19",
    link: "https://mega.nz/file/XgkDlCgJ#ZQ2TaxOMi_IV6pTtd7bYxFkT8aHE6Us4c7N3OK233X8",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs19.jpg?w=190&h=276",
  },
  {
    name: "High School DxD Light Novel Vol 20-24",
    link: "https://lectortmo.com/library/novel/10887/high-school-dxd",
    image:
      "https://universonl.files.wordpress.com/2014/10/highs20.jpg?w=190&h=276",
  },
  {
    name: "The Vexations of a Shut-In Vampire Princess Light Novel Vol 1",
    link: "https://mega.nz/file/3d4xjY5D#l5gIKf9--RAVRPKMMpEQAItNMnjDiG_6DAik16tGCdE",
    image:
      "https://1.bp.blogspot.com/-tDFlFSGSeJM/YAB_JlENQXI/AAAAAAAAXcA/Twk7auP04eEhIQmCDZa9tLA3zou0n6z4QCLcBGAsYHQ/w280-h400/Hikikomari%2BKyuuketsuki%2Bno%2BMonmon%2Bvolumen%2B1%2Bespanol.jpg",
  },
  {
    name: "How A Realist Hero Rebuilt The Kingdom Light Novel",
    link: "https://trueflamesproject.wixsite.com/light-novel/realist-hero",
    image:
      "https://universonl.files.wordpress.com/2018/04/genjitsu1.jpg?w=380&h=552",
  },
  {
    name: "In the Land of Leadale Light Novel",
    link: "https://lectortmo.com/library/novel/66999/leadale-no-daichi-nite",
    image: "https://m.media-amazon.com/images/I/51otj-GfPrL.jpg",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 1",
    link: "https://mega.nz/file/DAhgBLKI#RF2svYgy7oax20K-qpaV020htS3ojFwU5vwuyChAMQo",
    image:
      "https://universonl.files.wordpress.com/2017/12/isekaitoshoukan.jpg?w=273&h=396",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 2",
    link: "https://mega.nz/file/qBA0zBTS#SqTyDWkCpFlFiXLVLP3csC65ewczSvFiqVScfVCTqnw",
    image:
      "https://universonl.files.wordpress.com/2016/10/isekaimao2.jpg?w=277&h=403",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 3",
    link: "https://mega.nz/file/TZBkGIpK#C1uRyeqGv0rH54dHYoglhbEaeD1zmKYDV9Mt98VSrlU",
    image:
      "https://2.bp.blogspot.com/-j4gJX2R8F_0/WqGm8EslvCI/AAAAAAAAOPE/5QimC6rOu_MCwqyvFC3_hxdbF1XO3eEOgCLcBGAs/s1600/Isekai%2BMaou%2Bto%2BShoukan%2BShoujo%2Bno%2BDorei%2BMajutsu%2Bvolumen%2B3.png",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 4",
    link: "https://mega.nz/file/PF4ykDBS#eGbFk3BVH7HT8t0kYNELCze8YfvsdmQjBHv9fIlWt8E",
    image:
      "https://1.bp.blogspot.com/-1LJc0GFyPj0/WtfQNoIQy2I/AAAAAAAAPDM/okWLfWRMh3sbDVfn0woqwOYFk60oL0YKACLcBGAs/s400/Isekai%2BMaou%2Bto%2BShoukan%2BShoujo%2Bno%2BDorei%2BMajutsu%2BVolumen%2B4%2Bespanol.jpg",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 5",
    link: "https://mega.nz/file/OQBAGIKY#ZMQl5uiEVpa47x339u2JpVIVdMm69aKou9P64Enr3TE",
    image:
      "https://3.bp.blogspot.com/-EgMcOlCt-Co/WzLRNSGgEWI/AAAAAAAAP7M/bFnl2PaDUPEAj_t31qKTbkOJuN3Qh1mYgCLcBGAs/s400/Isekai%2BMaou%2Bto%2BShoukan%2BShoujo%2Bno%2BDorei%2BMajutsu%2Bvolumen%2B5.jpg",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 6",
    link: "https://mega.nz/file/iEgHmYLA#lPn1KbUNL0DSiA3VX89HCQ4tBFCpnlnuCg3wqSIdPlQ",
    image:
      "https://1.bp.blogspot.com/-SPjDWuk8p0o/W1z7z6YkzYI/AAAAAAAAQD4/tn0kaEcAJnsnmUZFA9Xw1EJgHHESo4EEQCLcBGAs/s400/Isekai%2BMaou%2Bto%2BShoukan%2BShoujo%2Bno%2BDorei%2BMajutsu%2Bvolumen%2B6.jpg",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 7",
    link: "https://mega.nz/file/CVwhyYrB#lYuorktms1yZQXoMZiEAR_V2jEgPr7mCKd6Lx6T1TA4",
    image:
      "https://3.bp.blogspot.com/-dVyUBzHiYWM/W7FhXNIZNZI/AAAAAAAAQXo/KMwjZe-ztvss3K3F-o92xtGVh9dSe1YKgCLcBGAs/s400/maou.jpg",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 8",
    link: "https://mega.nz/file/jMIiQQTK#z72PTZePSoUWYLwNZaacTp0-nB52v_yxsG4bNVoaevU",
    image:
      "https://2.bp.blogspot.com/-p2EVMOZcWU8/W7KSFe6U_OI/AAAAAAAAQYU/XCdejnuCiDso0F6BnQYmGJfoSOz0rurDwCLcBGAs/s400/Isekai%2BMaou%2Bto%2BShoukan%2BShoujo%2Bno%2BDorei%2BMajutsu%2Bvolumen%2B8.jpg",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 9",
    link: "https://mega.nz/file/fJ5HzQhB#xOFYPdJ7Tu3Zp6jjzKaoBmq66FZGSHZvHAMae3WUSeY",
    image:
      "https://3.bp.blogspot.com/-BknLTBDWvCE/XJgS5j_rhiI/AAAAAAAARD0/LNjdEUFb-mUyGcePsyeR_57MPFpdCMc7ACLcBGAs/s400/Isekai%2Bmaou%2Bvolumen%2B9.jpg",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 10",
    link: "https://mega.nz/file/eQx1AYRA#HuPEIJTCR4_yoFLjc2Bb7lKVJyz4qBtnlHMFR4VaEac",
    image:
      "https://4.bp.blogspot.com/-LvRiMsCfAR0/XJgTRTAdxCI/AAAAAAAARD8/TULBAQSQVL0ZcCneolifg5V0jA5z9OeQACLcBGAs/s400/Isekai%2Bmaou%2Bvolumen%2B10.jpg",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 11",
    link: "https://mega.nz/file/vU5n1Aab#__ANBlNheRB1UcUw6ycGe6hnNoFWzyVgjoSA-QlQitE",
    image:
      "https://3.bp.blogspot.com/-XazYNklHHcQ/XJgTXcw_JjI/AAAAAAAAREA/npfQfr1CflMjuYEpwQVPrF7DUgR7rj_WwCLcBGAs/s400/Isekai%2Bmaou%2Bvolumen%2B11.jpg",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 12",
    link: "https://mega.nz/file/mIwVHQCD#HH550a84sos8LEwi5t4Pp1bx8i452ZGmrl63bzxy3kw",
    image:
      "https://1.bp.blogspot.com/-j1F6jdPbEFw/XgU84rHspnI/AAAAAAAATDg/6FWYOmMYLLsjGHBGqpCosnVrut0zKPcxQCLcBGAsYHQ/s400/Isekai%2BMaou%2Bto%2BShoukan%2BShoujo%2Bno%2BDorei%2BMajutsu%2BVolumen%2B12%2Bespanol.jpg",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 13",
    link: "https://mega.nz/file/HNASjLSD#dup6g9bxYv0BC4iTComJCY5couRO0ZqbHxftkPqtlZk",
    image:
      "https://1.bp.blogspot.com/-MSsInTNK7kg/YGd6nMjeveI/AAAAAAAAXqs/mj5TKkuFMUgO-3Vo9jYWlMoxrS4HS953wCLcBGAsYHQ/w284-h400/Isekai%2BMaou%2Bto%2BShoukan%2BShoujo%2Bno%2BDorei%2BMajutsu%2BVolumen%2B13%2Bespanol.jpg",
  },
  {
    name: "Como No Invocar A Un Rey Demonio Vol 14",
    link: "https://mega.nz/file/mRRm3DjL#em2iI4JencMXwU8pR9hXPRp27VyJUR9BQnNkBjMNE3A",
    image:
      "https://m.media-amazon.com/images/I/716RtPTXPPL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Farming Life in Another World Light Novel Vol 1",
    link: "https://mega.nz/file/2MgB3CZJ#AWGMKSMnGopTQrK7177KBN2BzKtibiVa5zBRiOyLB7c",
    image:
      "https://1.bp.blogspot.com/-vMO7WakXysA/XRfqLVCldbI/AAAAAAAARyE/vW2Ur_YXYEExttTdiasp3ukuj874aWoIACLcBGAs/s400/Isekai%2BNonbiri%2BNouka%2BVolumen%2B1%2Bespanol.jpg",
  },
  {
    name: "Farming Life in Another World Light Novel Vol 2",
    link: "https://mega.nz/file/KF5TAaCT#5aOUuh5m0Z5eLah5jzVJ7woEE-zIgTbmh2oC6k9zXZM",
    image:
      "https://1.bp.blogspot.com/-b4QSLa1mUMA/XRfqMY-KizI/AAAAAAAARyI/mGHkLGTfhJEC6KghSwQqYVIatGK3bEMQgCLcBGAs/s400/Isekai%2BNonbiri%2BNouka%2BVolumen%2B2%2Bespanol.jpg",
  },
  {
    name: "Farming Life in Another World Light Novel Vol 3",
    link: "https://mega.nz/file/Od5nRACB#NR3vwAgUMuOkeMspR0jeUrFgCosX0HKFsk97wXEvZ-o",
    image:
      "https://1.bp.blogspot.com/-4tmxQIBqfCk/XRfqOaPDxLI/AAAAAAAARyM/eZ-ADDBojMI7A1obtM_-FP0CVZiN0b07ACLcBGAs/s400/Isekai%2BNonbiri%2BNouka%2BVolumen%2B3%2Bespanol.jpg",
  },
  {
    name: "Farming Life in Another World Light Novel Vol 4",
    link: "https://mega.nz/file/jdojmAJJ#NNRgn3HH6FGv7X6mWuF77pxvRwKu_7P_PHYxqG7jKW8",
    image:
      "https://1.bp.blogspot.com/-12Oa91PxAIk/XRfqPuskXhI/AAAAAAAARyQ/dBRjQ5WsOwQccyogEB_QsRntz7e1f5dBgCLcBGAs/s400/Isekai%2BNonbiri%2BNouka%2BVolumen%2B4%2Bespanol.jpg",
  },
  {
    name: "Redo of Healer Light Novel",
    link: "https://mega.nz/folder/CVR3AQ4Y#It1778dIGMZwdZzdgyqOng",
    image:
      "https://universonl.files.wordpress.com/2017/06/kaifuku-jutsushi.jpg",
  },
  {
    name: "Kaguya-Sama Love is War Light Novel",
    link: "https://mega.nz/file/6JpTAKCY#Z7qSn-2Vyn7PUKh_5pve-gLE7Xq9aVYY25nJvBW4A-Q",
    image:
      "https://1.bp.blogspot.com/-CLJ8-QcbKDk/Xgp71R6dOOI/AAAAAAAATJ8/dqxN_UpzM8UMeG2W9IaqMiWAPj6pDVHFgCLcBGAsYHQ/s640/Kaguya-sama%2Bwa%2BKokurasetai%257E%252C%2Blos%2Bsiete%2Bmisterios%2Bde%2Bla%2Bacademia%2BShuchin%257E.jpg",
  },
  {
    name: "Kimetsu no Yaiba: The Flower of Happiness Light Novel",
    link: "https://lectortmo.com/library/novel/52875/demon-slayer-kimetsu-no-yaiba-shiawase-no-hana",
    image:
      "https://m.media-amazon.com/images/I/51FA85W75tL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
  },
  {
    name: "Kimetsu no Yaiba: One-Winged Butterfly Light Novel",
    link: "https://lectortmo.com/library/novel/52876/demon-slayer-kimetsu-no-yaiba-katahane-no-chou",
    image: "https://m.media-amazon.com/images/I/51PKbX3eguL.jpg",
  },
  {
    name: "Konosuba Light Novel Vol 1",
    link: "https://drive.google.com/file/d/1uMa_rhuoTLsaqltY1pQnoGGY0fxYJSNw/view",
    image:
      "https://universonl.files.wordpress.com/2016/01/konosub1.jpg?w=380&h=552",
  },
  {
    name: "Konosuba Light Novel Vol 2",
    link: "https://drive.google.com/file/d/1_sCOubkZGwdjg4G7WitCRZ8drHr_Sd6Q/view",
    image:
      "https://universonl.files.wordpress.com/2015/06/konosub2.jpg?w=380&h=552",
  },
  {
    name: "Konosuba Light Novel Vol 3",
    link: "https://drive.google.com/file/d/18pdq5OYBCzAzyRaauZHpSg9xzFoTc-jU/view",
    image:
      "https://universonl.files.wordpress.com/2015/06/konosub3.jpg?w=380&h=552",
  },
  {
    name: "Konosuba Light Novel Vol 4",
    link: "https://drive.google.com/file/d/1IFJV63zm640GfxE0I7BLTmQXeq3BFAJA/view",
    image:
      "https://universonl.files.wordpress.com/2016/05/kono4.jpg?w=380&h=552",
  },
  {
    name: "Konosuba Light Novel Vol 5",
    link: "https://drive.google.com/file/d/1H4LhpRocV9dqMADJWB0S9gZW_RLYuxPX/view",
    image: "../../img/konosuba5.webp",
  },
  {
    name: "Konosuba Light Novel Vol 6",
    link: "https://drive.google.com/file/d/1tTH1b5aQVmXXAVsvNJSJDoA-XPM9jEII/view",
    image:
      "https://universonl.files.wordpress.com/2017/12/konosuba6.jpg?w=190&h=276",
  },
  {
    name: "Konosuba Light Novel Vol 7",
    link: "https://drive.google.com/file/d/1Zyhd8uHWvi26Xc4UFjwFs3XAXOeu2jcq/view",
    image:
      "https://universonl.files.wordpress.com/2017/12/konosuba7.jpg?w=190&h=276",
  },
  {
    name: "Konosuba Light Novel Vol 8",
    link: "https://drive.google.com/file/d/1UhXki8N67MtAZ6ajhL6Ld6eG6C58vPtL/view",
    image:
      "https://universonl.files.wordpress.com/2017/12/konosuba8.jpg?w=190&h=276",
  },
  {
    name: "Konosuba Light Novel Vol 9",
    link: "https://drive.google.com/file/d/1RsoX2M-iaA8eKJh234DCgZExKKG5cn7o/view",
    image:
      "https://universonl.files.wordpress.com/2017/12/konosuba9.jpg?w=190&h=276",
  },
  {
    name: "Konosuba Light Novel Vol 10",
    link: "https://drive.google.com/file/d/1wh0T0EPvqXRzFK9Ok9-S275JRPNR3Eyp/view",
    image:
      "https://universonl.files.wordpress.com/2017/12/konosub10.jpg?w=190&h=276",
  },
  {
    name: "Konosuba Light Novel Vol 11",
    link: "https://drive.google.com/file/d/183DAZBfKBWwOAJO_6omGOShVLju4Rw_p/view",
    image:
      "https://universonl.files.wordpress.com/2017/12/konosub11.jpg?w=190&h=276",
  },
  {
    name: "Konosuba Light Novel Vol 12",
    link: "https://drive.google.com/file/d/1h6zv8-4KS27X9N4sI9flLEm5sqz81YAx/view",
    image: "https://m.media-amazon.com/images/I/51UrgW8jSjL.jpg",
  },
  {
    name: "Konosuba Light Novel Vol 13",
    link: "https://drive.google.com/file/d/12ZX_NLRN5ccDjbr0FIX5Y6ce0RANnOaN/view",
    image:
      "https://1.bp.blogspot.com/-vbBixxq1L94/WiB8hXt5gPI/AAAAAAAAMw0/JNKeBy8fxXYVoZLrOPDPwZ6RBiP9Y8xEwCLcBGAs/s640/Ilustraciones%2Bde%2BKono%2BSubarashii%2BSekai%2Bni%2BShukufuku%2Bo%2521%2BVolumen%2B13-1.jpg",
  },
  {
    name: "Konosuba Light Novel Vol 14",
    link: "https://drive.google.com/file/d/1rQUvOHFkL60HM8rJWw9QXInE7R_MCmA3/view",
    image: "https://m.media-amazon.com/images/I/51syztyt3iL.jpg",
  },
  {
    name: "Konosuba Light Novel Vol 15",
    link: "https://drive.google.com/file/d/1cHco13JF_RIXpP-KBVfEXOScfE7k00pp/view",
    image: "https://m.media-amazon.com/images/I/51f-NvoMG1L.jpg",
  },
  {
    name: "Konosuba Light Novel Vol 16",
    link: "https://drive.google.com/file/d/1LS044K38uFGJILlSAz14szOvdaMnzSt0/view",
    image: "https://m.media-amazon.com/images/I/515hx0HKhrL.jpg",
  },
  {
    name: "Konosuba Light Novel Vol 17",
    link: "https://drive.google.com/file/d/1oOiLCVgrUwSQ9vSfLjCO6KsBb7Kq8U0m/view",
    image:
      "https://1.bp.blogspot.com/-NFXKV1RmFGk/Xqx7mJAuv_I/AAAAAAAAUPo/MSRWz87AmiwEMRQRvHCoKqvAFGP0ohBSQCK4BGAsYHg/w451-h640/Konosuba%2BVolumen%2B17%2BIlustraciones%2B1.jpg",
  },
  {
    name: "Konosuba Spin-Off Megumi Light Novel Vol 1",
    link: "https://mega.nz/file/QExFGQJK#LjgMU5XWnSr-wEyV27FVpiiS6JaAYee70vJimFv-lKI",
    image:
      "https://universonl.files.wordpress.com/2016/10/konospin.jpg?w=190&h=276",
  },
  {
    name: "Konosuba Spin-Off Megumi Light Novel Vol 2",
    link: "https://mega.nz/folder/0dx03R4a#CrXz2c531S78U-5IzvHWnQ/file/AYJ31YoZ",
    image:
      "https://universonl.files.wordpress.com/2015/06/konosubarashi2.jpg?w=190&h=276",
  },
  {
    name: "Konosuba Spin-Off Megumi Light Novel Vol 3",
    link: "https://mega.nz/folder/0dx03R4a#CrXz2c531S78U-5IzvHWnQ/file/8YxnlBCZ",
    image:
      "https://universonl.files.wordpress.com/2017/03/konosuspin3.jpg?w=190&h=276",
  },
  {
    name: "Konosuba Spin-Off Megumi Light Novel Vol 4",
    link: "https://mega.nz/file/QExFGQJK#LjgMU5XWnSr-wEyV27FVpiiS6JaAYee70vJimFv-lKI",
    image:
      "https://universonl.files.wordpress.com/2018/01/zokukonosub.jpg?w=190&h=276",
  },
  {
    name: "Konosuba Spin-Off Megumi Light Novel Vol 5",
    link: "https://mega.nz/folder/5N8AUTDb#RG_rqRxP02oFLilAe2rXkQ/file/EUdT3K7L",
    image: "https://m.media-amazon.com/images/I/51uApPHV7jS.jpg",
  },
  {
    name: "Kamen Konosuba Spin-Off Light Novel Vol 1",
    link: "https://mega.nz/folder/AZYCXJDD#6I7EuGaQVEuibVlyVLzTlA/file/9V5VDYiY",
    image:
      "https://universonl.files.wordpress.com/2017/07/konosubaspin.jpg?w=190&h=276",
  },
  {
    name: "Konosuba Dust Spin-Off Light Novel",
    link: "https://mega.nz/folder/OZQXyAoI#q4IqTS20qXSnFby5v_MioQ",
    image:
      "https://cgtranslations.me/wp-content/uploads/2018/11/front_redraw_text.png",
  },
  {
    name: "Konosuba Dust Spin-Off Light Novel Vol 6",
    link: "https://mega.nz/folder/5N8AUTDb#RG_rqRxP02oFLilAe2rXkQ/file/pJdlTAJC",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRg28A9ZsMzaovuoMPNVwsOBctipYBtWlodGZITEJSBR1eIf6hLTkISl7NW4w-LAYPh0U&usqp=CAU",
  },
  {
    name: "Konosuba Dust Spin-Off Light Novel Vol 7",
    link: "https://mega.nz/folder/5N8AUTDb#RG_rqRxP02oFLilAe2rXkQ/file/tINUBbzZ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZgZsMpMrP664tUMeoUcAznmz7odaRzFVn-Q9SClQ-1CpdYf2HXIy-cBBfcgP2LyQS1DM&usqp=CAU",
  },
  {
    name: "Kuma Kuma Kuma Bear Light Novel",
    link: "https://lectortmo.com/library/novel/24545/Kuma-Kuma-Kuma-Bear",
    image:
      "https://universonl.files.wordpress.com/2016/09/thebear1.jpg?w=300&h=436",
  },
  {
    name: "Love, Chunibyo & Other Delusions Light Novel",
    link: "https://mega.nz/folder/uZEw3ZQY#jjJ72hXqbcMNj3-_8vEVLg",
    image:
      "https://universonl.files.wordpress.com/2017/12/chuunibi.jpg?w=297&h=431",
  },
  {
    name: "Lycoris Recoil: Ordinary days",
    link: "https://lectortmo.com/library/novel/72410/lycoris-recoil-ordinary-days",
    image:
      "https://m.media-amazon.com/images/I/712kzyWKyLL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "My Stepmom's Daughter is my EX Light Novel Vol 1",
    link: "https://drive.google.com/file/d/19PGq0NYUj3-4879xxKJqyu7HHU9eMHn-/view",
    image:
      "https://1.bp.blogspot.com/-9PbJBrZGcvg/Xslm7PXLU3I/AAAAAAAADkg/PAkf5Oc5p9UXVG5jJclNmje0MAnsZlBwQCPcBGAYYCw/s320/1%2B-%2BUuOI8wh.jpg",
  },
  {
    name: "My Stepmom's Daughter is my EX Light Novel Vol 2",
    link: "https://drive.google.com/file/d/1VJwuxTRQFSWVfji1teIkJtJQXwdva4Jp/view",
    image:
      "https://1.bp.blogspot.com/-lPmbH9P-edo/XslnoHcz1LI/AAAAAAAADkY/f7JyejdO7D4K7x77oHNSGJIpjawre6NjACPcBGAYYCw/s320/1%2B-%2B1ywByrB.jpg",
  },
  {
    name: "My Stepmom's Daughter is my EX Light Novel Vol 3",
    link: "https://drive.google.com/file/d/1GgjyUtQX4hPfTgA33Dl9MBVkTqEfVva1/view",
    image:
      "https://1.bp.blogspot.com/-nxywi5nweLQ/XslnuXGOZwI/AAAAAAAADkc/0VmBZghQepcqX_gXynNvoIwg5VWhGdCLACPcBGAYYCw/s320/1%2B-%2By72H46v.jpg",
  },
  {
    name: "My Stepmom's Daughter is my EX Light Novel Vol 4",
    link: "https://drive.google.com/file/d/16vQ4viD8FwHpFbVHqJT6a2mwFp2KVbsI/view",
    image:
      "https://1.bp.blogspot.com/-StKOnY2AcH4/YH4KKIjGxUI/AAAAAAAAEpg/M1xYp_mwR4UResFdxcKtV_B1dfHV0-W5QCPcBGAYYCw/s320/Vol.%2B4.jpg",
  },
  {
    name: "My Stepmom's Daughter is my EX Light Novel Vol 5",
    link: "https://drive.google.com/file/d/1jxt41zbxPKv9JHChffw8ZUDYX1NPvVFu/view",
    image:
      "https://1.bp.blogspot.com/-a-74vNnXlOA/YH4Kbs5l2cI/AAAAAAAAEps/arxqFhrNS5AMdJUYG6sjlT9bHl87u89zQCPcBGAYYCw/s320/Vol.%2B5.jpg",
  },
  {
    name: "My Stepmom's Daughter is my EX Light Novel Vol 6",
    link: "https://drive.google.com/file/d/1-GJZ4b6n7tpiuyCED39hHI2a6wuVdbFn/view",
    image:
      "https://1.bp.blogspot.com/-EvF7iOkPR74/YH4KgrH7wlI/AAAAAAAAEpw/RiixThwF7monNudlO4l6rxk-8u8RkqXfQCPcBGAYYCw/s320/Vol.%2B6.jpg",
  },
  {
    name: "My Stepmom's Daughter is my EX Light Novel Vol 7",
    link: "https://drive.google.com/file/d/1uysCUG0wfPSxtIGZBG8JPwf7dkSIEisV/view",
    image:
      "https://1.bp.blogspot.com/-8QCzVQAQ2kQ/YVKK_eBO0jI/AAAAAAAAE3M/0ukB0I9v1oE06BlK5LG2w9fh2N1Y6dK2QCPcBGAYYCw/s320/Vol.%2B7.jpg",
  },
  {
    name: "My Stepmom's Daughter is my EX Light Novel Vol 8",
    link: "https://drive.google.com/file/d/15dlY_PaVt9HfVsAdIJpEBqTNLIZUaaqw/view",
    image: "https://pbs.twimg.com/media/FI6HUtRXEAYR99Z.jpg",
  },
  {
    name: "My Stepmom's Daughter is my EX Light Novel Vol 8 Color",
    link: "https://drive.google.com/drive/u/0/folders/1tSkuXOD4E_9WvxvwOCA_OMLE3deGNc-Q",
    image: "https://pbs.twimg.com/media/FI6HUtRXEAYR99Z.jpg",
  },
  {
    name: "The Irregular at Magic High School Light Novel",
    link: "https://mega.nz/folder/Wd51UYoT#6TX_xhqbr2u3s5O_AJB7Pg",
    image:
      "https://universonl.files.wordpress.com/2016/01/mahouka.jpg?w=190&h=276",
  },
  {
    name: "The Irregular at Magic High School: Magian Company Light Novel",
    link: "https://mega.nz/folder/jd5yRRZC#gH4OEkftoA0gEM7E8_JU7w",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7VO_yOSZGFSelkRtYVBx1qbDtn4TJA17Bun3eWFtthYWL4VGdv0AlrPBfqTCtszKYbM&usqp=CAU",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 1",
    link: "https://mega.nz/file/vREUXZLL#cWUliPi6mt4OixxnHZeHEeZGak8su7MReeuLqLuHp4M",
    image:
      "https://universonl.files.wordpress.com/2016/01/mushoku1.jpg?w=374&h=544",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 2",
    link: "https://mega.nz/file/nRcFhbrI#KpQ0wCQVsFT9klzB52leMjZjlBDRE7JAO7VTx4JlLug",
    image:
      "https://universonl.files.wordpress.com/2014/12/mushoku2.jpg?w=374&h=544",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 3",
    link: "https://mega.nz/file/iJUWASrL#pTvJwGgxHzsSI0eipUZmb1AXXxPnBxvxed3bOTLXMck",
    image:
      "https://universonl.files.wordpress.com/2014/12/mushoku3.jpg?w=374&h=544",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 4",
    link: "https://mega.nz/file/aMMhDKzY#y9gZLmhMzJSQX4s55zI5wxBDrl-dxTwmEGJ_5mPw1js",
    image:
      "https://universonl.files.wordpress.com/2014/12/mushoku4.jpg?w=374&h=544",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 5",
    link: "https://mega.nz/file/vdcx2bLA#xDTE5wn-va4fVfeAeG5RwFQ-Xlxp0Y95chcQVAXWxzw",
    image:
      "https://universonl.files.wordpress.com/2014/12/mushoku5.jpg?w=374&h=544",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 6",
    link: "https://mega.nz/file/bVsHxYhS#Lht1SjCx18rGLtaBRJftV09aoFoaZ7TsRyvCZ-ARSwg",
    image:
      "https://universonl.files.wordpress.com/2014/12/mushoku6.jpg?w=374&h=544",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 7",
    link: "https://mega.nz/file/XR9lQSxQ#toMk9Y5GCqqnDmS9PxzIwOJceGleOlP_g8y1haRMveE",
    image: "https://m.media-amazon.com/images/I/516LtQ16OwL.jpg",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 8",
    link: "https://mega.nz/file/rRsDBQLY#eRC8caGurb89W-8e8eHm9e5BhBgv0_NEbm9NiX9Eo6Q",
    image:
      "https://universonl.files.wordpress.com/2017/12/mushok8.jpg?w=187&h=272",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 9",
    link: "https://mega.nz/file/qNkCyS7D#lkU-xiTc1sZHIrEk3dN02-etUh4NQqvdYCVW8V0p3tY",
    image:
      "https://universonl.files.wordpress.com/2017/12/mushok9.jpg?w=187&h=272",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 10",
    link: "https://mega.nz/file/SAM1mSSZ#r7E3PWyay0pzlkwuyiRGqSXdKlrPMP8P_wgkNVytwqM",
    image:
      "https://universonl.files.wordpress.com/2017/12/mushok10.jpg?w=187&h=272",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 11",
    link: "https://mega.nz/file/vUMQAJ6b#uAo15-BJh1zDK81QHbmN-Q1fyfgsdzo-7tU_9Y9XTFU",
    image:
      "https://universonl.files.wordpress.com/2017/12/mushok11.jpg?w=187&h=272",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 12",
    link: "https://mega.nz/file/DcEiVZzS#7neQRPgxUqTgMEcTOKPdpNVw5Uro38yGgsKO8UsOGYg",
    image:
      "https://universonl.files.wordpress.com/2017/12/mushok12.jpg?w=187&h=272",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 13",
    link: "https://mega.nz/file/Odsk3YxI#TyCZWpNmbFiG2IJUcrY6QRg2nlxoHfT_uRsiJAu3OTM",
    image:
      "https://universonl.files.wordpress.com/2017/12/mushok13.jpg?w=187&h=272",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 13 Color",
    link: "https://mega.nz/file/DM9iGIJB#iyfhGF-BJ7Zg9JU3wilhBkOL-Ae3iuCYjcZvWszXRTc",
    image:
      "https://universonl.files.wordpress.com/2017/12/mushok13.jpg?w=187&h=272",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 14",
    link: "https://mega.nz/file/uA9jgQqI#1ranrWXrZQFzmRZswiRgzfuYhQwLpz2si8FwXjuyiUg",
    image:
      "https://universonl.files.wordpress.com/2017/12/mushok14.jpg?w=187&h=272",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 15",
    link: "https://mega.nz/file/TMNkQKhI#AlWNyER8AHB3fE761pmbm0JBzDmf0Uvp-iUNHLLC4Z4",
    image:
      "https://universonl.files.wordpress.com/2017/12/mushoku15.jpg?w=187&h=272",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 16",
    link: "https://mega.nz/file/6MViADDL#0gUQp8YWVGromhcVW_n7j4xVilcvmwAJogeGZuxspqE",
    image:
      "https://universonl.files.wordpress.com/2018/05/mushoku16.jpg?w=187&h=272",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 17",
    link: "https://mega.nz/file/6VMmxa4R#gt2Rhh7G_Vo-wlkHq0LwWZe3ywYlqRlH5sivDIxonlc",
    image:
      "https://universonl.files.wordpress.com/2018/05/mushoku17.jpg?w=187&h=272",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 18",
    link: "https://mega.nz/file/rJkknCIA#7r2Gy9vz_aZWz4FsKFaJUJUUkO2Mj1QRlgR4immqdcY",
    image: "https://m.media-amazon.com/images/I/511CzCiOsJL.jpg",
  },
  {
    name: "Mushoku Tensei Jobless Reincarnation Light Novel Vol 19",
    link: "https://mega.nz/file/2V0wCJRC#MXUVyg_LFZDi41Me2tOdrmB4FcQ9Gph5RV9eegNImSY",
    image:
      "https://m.media-amazon.com/images/I/81Zzr65Y0SL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "My Next Life as a Villainess Light Novel Vol 1",
    link: "https://mega.nz/file/2NAQmI4Q#mg4lPuHU6aM51ijIIvz--FaZqtP1bZ1hbBniOlrvjVQ",
    image:
      "https://1.bp.blogspot.com/-s-vF1kMjMBs/XhuZqibHoaI/AAAAAAAATdM/dqEVI0OYAP40Pm6XgsSsXgi3fZW6jth-gCLcBGAsYHQ/s1600/bakarina%2Bvolumen%2B1%2Bespanol.jpg",
  },
  {
    name: "My Next Life as a Villainess Light Novel Vol 2",
    link: "https://mega.nz/file/uIBUgAaQ#04Bo4LkJ1XWjSvDW4plJaZJV8jmYQ4Npc8ReSshl2ZE",
    image:
      "https://1.bp.blogspot.com/-QCRaBO_cT8Y/XhuaIWVXKHI/AAAAAAAATdU/s437v5NX7fcg2-AlNbFF88HKHakyXhYxwCLcBGAsYHQ/s400/bakarina%2Bvolumen%2B2%2Bespanol.jpg",
  },
  {
    name: "My Next Life as a Villainess Light Novel Vol 3",
    link: "https://mega.nz/file/HEYCVKpJ#OhS7oVUh_SymPdqq_rZaC_Lj93xBQ4vHxHHHvF0-Rts",
    image:
      "https://1.bp.blogspot.com/-pE2CHfw82zQ/XhuaOPJMIKI/AAAAAAAATdY/Zqve7es3FwcwAanIp-XM1bNcXegJSzArgCLcBGAsYHQ/s400/bakarina%2Bvolumen%2B3%2Bespanol.jpg",
  },
  {
    name: "My Next Life as a Villainess Light Novel Vol 4",
    link: "https://mega.nz/file/CJwgXQyb#3BMdnPGg0_Hu2EYGS3Rg1bg7W-1108CgYZzV2jK38HQ",
    image:
      "https://1.bp.blogspot.com/-SkW4rWFqQ8c/XouXev3iShI/AAAAAAAAT8E/LtYzibvTAasfhagdCHG1CjtxKtwkEIr4ACLcBGAsYHQ/s400/Bakarina%2Bvolumen%2B4%2Bespanol.jpg",
  },
  {
    name: "My Next Life as a Villainess Light Novel Vol 5",
    link: "https://mega.nz/file/WVBVBKpI#MaxsNaw5KU1cmKiFpO8bjtrC7MU_dSAlTtFJj0-E7wA",
    image:
      "https://1.bp.blogspot.com/-IOZShi4lKCw/XxnEOQcJsoI/AAAAAAAAV_w/NV5Wjk2j0NsEjfaDmg_VFjbSE-XP6zrLgCLcBGAsYHQ/w281-h400/bakarina%2Bvolumen%2B5%2Bespanol.jpg",
  },
  {
    name: "My Next Life as a Villainess Light Novel Vol 6",
    link: "https://mega.nz/file/HQZn3A5L#a2ePq9WEc0MtFsTxqdBubEjo8As5EaiJPq58L7AJcHs",
    image:
      "https://1.bp.blogspot.com/-9NBvFozq3cc/XxnEYJjon7I/AAAAAAAAV_0/quBDdtWKmr85h3UZJGH6ojxPOyWvnsk0QCLcBGAsYHQ/w281-h400/bakarina%2Bvolumen%2B6%2Bespanol.jpg",
  },
  {
    name: "My Next Life as a Villainess Light Novel Vol 7",
    link: "https://mega.nz/file/bAxCFZoa#uPsBqahfRl0rgnlfOn2WypofLYs6C-UlSxlllw-FqrE",
    image:
      "https://1.bp.blogspot.com/-Ziq44oo8Upc/YAXl8S7p_hI/AAAAAAAAXdU/ZmjrBR6cTIIpo8GHfnZ9yOtWPDIIh82xACLcBGAsYHQ/w280-h400/Bakarina%2BVolumen%2B7%2Bespanol.jpg",
  },
  {
    name: "My Next Life as a Villainess Light Novel Vol 8",
    link: "https://mega.nz/file/LJZVgITY#T69zXy0meZuqn781Q-XS_TD1EYCR5ay86rvG2rv-3ZA",
    image:
      "https://1.bp.blogspot.com/-2kEDK58tMGY/YL1HfsKYGTI/AAAAAAAAX-8/e_GzZ6n2dkMU97rrBJbc5FC2mpXaIVw0ACLcBGAsYHQ/w286-h400/Bakarina%2BVolumen%2B8%2Bespanol.jpg",
  },
  {
    name: "My Next Life as a Villainess Light Novel Vol 9",
    link: "https://mega.nz/file/HZ43wb6D#P5ptMyRpqfPWeYyXUWt7rlWiUA4yCSqhXzT9y6PZeQs",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiveJBNKaClvUp1v085RMh4cW4Oou16jB-r4LvZn7Z1k9FivzqFZ5ST0CR2dd39YQFzaBzXNYHv4l2ZtG9pkoBtiPBN2Ex_jy8J4GxMgb0Rdyq1NWYVrABEH87wZr-qY-NelHqs6fbcc8FUfcJyc1sSiiWT9MaP56dWKwFxeOrfZmsH2cqWy6xddpII/w281-h400/Bakarina-Volumen%2009%20espanol.webp",
  },
  {
    name: "My Next Life as a Villainess Light Novel Vol 10",
    link: "https://mega.nz/file/XIwiXbDJ#G4OTl_SW8RISN6R8p85-BAtblz9DfrPj42xHQWzo_A4",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDakSAJ59G3QMm_rNqLyEIfrU7qAZHPaMhoLyZcMUeCngVCdEyBqtECwzjMSxoq8KhuT3Ksh93V0gLA_YoSEhQ56TcA84o35i7-tMGNoz4lvJcrEKqQN8oyOQFE_OZ2iKUJAdByIZC2WaYd_eZf8QNLSeyc5ysxLNs9R2xKwjRpqeueoQtmyIFFko8/w281-h400/Bakarina-Volumen%2010%20espanol.webp",
  },
  {
    name: "My Next Life as a Villainess Light Novel Vol 11",
    link: "https://mega.nz/file/yMpwTCoD#Daf2zT0gYENDH759LzdfhJONQNIUjeT0F7TLpFhMYfI",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTOYVkAGzqocvNGBewWA-czyWqr1o42MLqJT5IzI6rNwWb28Q0EQzYqMsyzQU_6GALxT_EwYXFMNnZBX-oe_ZdqtHVsEPixy7tXtr0Z8AwWKs0_XVhPGZr1srQp2oM6km7esBBj8J_11wywBlH8knXHBEyWStQuwhnnBcx4JNr42iwequuW76ghEQb/w283-h400/Bakarina-Volumen%2011%20espanol.webp",
  },
  {
    name: "NieR-Automata: Short Story Long Light Novel Vol 1",
    link: "https://mega.nz/file/3FYXSQAR#ieGf4CpUcXe6MzFy3ZpcYikWEldBq9A06wYdu8lIL2k",
    image:
      "https://1.bp.blogspot.com/-Z8X9GFIayhA/YNtUZYB7eNI/AAAAAAAAYNY/RLIz6cKnfpwpZll73W2tUsmapYBb0FAYQCLcBGAsYHQ/w266-h400/NieR%2BAutomata%2BShort%2BStory%2BLong%2Bvolumen%2B1%2Bespanol.jpg",
  },
  {
    name: "NieR-Automata: Short Story Long Light Novel Vol 2",
    link: "https://mega.nz/file/eNBViS6J#4bfX6bdTcwG0G_3asq5C4xqFw5-R6Xpi-SVMW2lhES0",
    image:
      "https://1.bp.blogspot.com/-BfQSdE1wqjY/YNtUfWqFlqI/AAAAAAAAYNc/PsXI7gsUEII1OIMznzYPJP61_2KWUGi8gCLcBGAsYHQ/w276-h400/NieR%2BAutomata%2BShort%2BStory%2BLong%2Bvolumen%2B2%2Bespanol.jpg",
  },
  {
    name: "No Game No Life Light Novel",
    link: "https://mega.nz/folder/nU4UgCpJ#MzDLXKhwIesePpKojO2eYg",
    image:
      "https://universonl.files.wordpress.com/2016/01/nogame1.jpg?w=374&h=544",
  },
  {
    name: "The Hidden Dungeon Only I Can Enter Light Novel",
    link: "https://mega.nz/folder/PYwSiA7B#42JxrXEoAtJJRrwmUnl84A",
    image:
      "https://m.media-amazon.com/images/I/81mw-E2El0L._AC_UF350,350_QL50_.jpg",
  },
  {
    name: "Overlord Light Novel Vol 1",
    link: "https://drive.google.com/file/d/15GGgeEiqsL0TPOBKEhSdQfjw0cfCgKfN/view",
    image:
      "https://universonl.files.wordpress.com/2016/01/overlor1.jpg?w=187&h=272",
  },
  {
    name: "Overlord Light Novel Vol 2",
    link: "https://drive.google.com/file/d/1-yTNo22oc0cPyI-UEV1c-ReSvWOhV1g0/view",
    image:
      "https://universonl.files.wordpress.com/2016/01/overlor2.jpg?w=187&h=272",
  },
  {
    name: "Overlord Light Novel Vol 3",
    link: "https://drive.google.com/file/d/1HYasNctK1y7XNFPNwTt9tCVUfDzu9nXK/view",
    image:
      "https://universonl.files.wordpress.com/2016/01/overlor3.jpg?w=187&h=271",
  },
  {
    name: "Overlord Light Novel Vol 4",
    link: "https://drive.google.com/file/d/1oj0CoMXbdoZ1KpVxK6eUHSG8GQ96ypcI/view",
    image:
      "https://universonl.files.wordpress.com/2016/01/overlor4.jpg?w=187&h=272",
  },
  {
    name: "Overlord Light Novel Vol 5",
    link: "https://drive.google.com/file/d/12Pv3PoP2iA2srs8F4FvSxbYYbIISI0tz/view",
    image:
      "https://universonl.files.wordpress.com/2016/01/overlor5.jpg?w=187&h=272",
  },
  {
    name: "Overlord Light Novel Vol 6",
    link: "https://drive.google.com/file/d/15GPLzG9CslRY2eGBl7V98sM74rXkaZv1/view",
    image:
      "https://universonl.files.wordpress.com/2016/01/overlor6.jpg?w=187&h=272",
  },
  {
    name: "Overlord Light Novel Vol 7",
    link: "https://drive.google.com/file/d/1kN7eZRAnS5ZFrfjXtpbuMv4-22sK1F1q/view",
    image:
      "https://universonl.files.wordpress.com/2016/01/overlor7.jpg?w=187&h=272",
  },
  {
    name: "Overlord Light Novel Vol 8",
    link: "https://drive.google.com/file/d/1D47-3qF0c3oz-_OGrUrqADdyQVTDhY82/view",
    image:
      "https://universonl.files.wordpress.com/2016/01/overlor8.jpg?w=187&h=272",
  },
  {
    name: "Overlord Light Novel Vol 9",
    link: "https://drive.google.com/file/d/1tm0-ArSb7odQ1pPi_bsMJH2qH99SFKxE/view",
    image:
      "https://universonl.files.wordpress.com/2016/01/overlor9.jpg?w=187&h=272",
  },
  {
    name: "Overlord Light Novel Vol 10",
    link: "https://drive.google.com/file/d/1AOQHdAAOmCpRGAqQhB7PQ2yj884AeuuW/view",
    image:
      "https://universonl.files.wordpress.com/2016/07/overlord10.jpg?w=187&h=272",
  },
  {
    name: "Overlord Light Novel Vol 11",
    link: "https://drive.google.com/file/d/12lJkAtxzZklq0yKZE1HlL6fbruaK2BxE/view",
    image:
      "https://universonl.files.wordpress.com/2016/10/over11.jpg?w=187&h=272",
  },
  {
    name: "Overlord Light Novel Vol 12 Parte 1",
    link: "https://drive.google.com/file/d/1F8BhKUQaREKzR7qzQBi-mEdJebDHNlPT/view",
    image:
      "https://universonl.files.wordpress.com/2017/12/overlor12.jpg?w=187&h=272",
  },
  {
    name: "Overlord Light Novel Vol 12 Parte 2",
    link: "https://drive.google.com/file/d/16GjrR7LVFBhFKbsx_k14nH6xNkRGcDH9/view",
    image:
      "https://universonl.files.wordpress.com/2017/12/overlor12.jpg?w=187&h=272",
  },
  {
    name: "Overlord Light Novel Vol 13",
    link: "https://drive.google.com/file/d/1LYiWoWcQ-6exj2xseD9O1oFK_ZbqEG6S/view",
    image:
      "https://universonl.files.wordpress.com/2016/01/overlor8.jpg?w=187&h=272",
  },
  {
    name: "Parallel World Pharmacy Light Novel",
    link: "https://zonatmo.com/library/novel/15623/Parallel-World-Pharmacy",
    image:
      "https://universonl.files.wordpress.com/2016/01/diferent.jpg?w=318&h=462",
  },
  {
    name: "Re:Zero Light Novel Vol 1",
    link: "https://mega.nz/file/ucwywYRY#vHte2K-P7K9gS0zzbjToNPYOrYclJs-q9wDPq8LZrng",
    image:
      "https://universonl.files.wordpress.com/2016/01/rezero.jpg?w=190&h=276",
  },
  {
    name: "Re:Zero Light Novel Vol 2",
    link: "https://mega.nz/file/WQZkzBBL#t7IekV7c0YvRIDomBbwjp2_-LrxN7-wzVOzgS9AFU48",
    image:
      "https://universonl.files.wordpress.com/2017/01/rezero2.jpg?w=190&h=276",
  },
  {
    name: "Re:Zero Light Novel Vol 3",
    link: "https://mega.nz/file/HMw3GIRI#u4-MhAwNVtZuWASC_qC1Mk7PHeJPbiMAgo3M3VNF6Vc",
    image:
      "https://universonl.files.wordpress.com/2017/12/rezero3.jpg?w=190&h=276",
  },
  {
    name: "Re:Zero Light Novel Vol 4",
    link: "https://mega.nz/file/KEYHVKTD#m7qdK65pivDOcdu81N3G15Tro6u65Cs9xx5r0GFJKQc",
    image:
      "https://3.bp.blogspot.com/-jw_K-etkhYM/W9vOliYMYlI/AAAAAAAAQgA/Y-okljAWALs04GoNklnoZ8kNS4PRWqpKQCLcBGAs/s400/re%2Bzero%2Bvolumen%2B4.jpg",
  },
  {
    name: "Re:Zero Light Novel Vol 5",
    link: "https://mega.nz/file/LdgxwB5J#WGcX7Mhwc_2JtOXNkkF70IuoHeqvmTNIdinUaw5uZg0",
    image:
      "https://1.bp.blogspot.com/-5RQtjIgv8G8/Xo4LJEwulTI/AAAAAAAAT9U/OT9Cttq4CwwbayhbZi-ZSrNo05Wv-kLMwCLcBGAsYHQ/s400/Re%2BZero%2Bkara%2BHajimeru%2BIsekai%2BSeikatsu%2Bvolumen%2B5%2Bespanol.png",
  },
  {
    name: "Re:Zero Light Novel Vol 6",
    link: "https://mega.nz/file/rN53XYDQ#ghDivHNsejqoYQfHgVhy6wwhj6bZBQfOvEc7sMsQtBg",
    image:
      "https://1.bp.blogspot.com/-rLYqAUe2rgM/Xo4LdSfViPI/AAAAAAAAT9c/HOiWAly6ySAWsAhVRx01p7CSTi6Mn_wkgCLcBGAsYHQ/s400/Re%2BZero%2Bkara%2BHajimeru%2BIsekai%2BSeikatsu%2Bvolumen%2B6%2Bespanol.png",
  },
  {
    name: "Re:Zero Light Novel Vol 7",
    link: "https://mega.nz/file/SUBwVKib#jpNlMQuJjJ0lZeppKL8Fp0_DnG-oSPgMzDLTBn82iB4",
    image:
      "https://1.bp.blogspot.com/-SwLiU4-jHBs/Xo4Lr3FqbQI/AAAAAAAAT9g/RDsdfDcPjMI2FVpMdxGbXaakxIICTkPSQCLcBGAsYHQ/s400/Re%2BZero%2Bkara%2BHajimeru%2BIsekai%2BSeikatsu%2Bvolumen%2B7%2Bespanol.png",
  },
  {
    name: "Re:Zero Light Novel Vol 8",
    link: "https://mega.nz/file/mAY1VAII#r3kMwb-EL7ltpAVhZvzXJH7G-YT-Ve7tol6eJtqg4n4",
    image:
      "https://1.bp.blogspot.com/-F99jBw9Yezg/Xo4MHj8seKI/AAAAAAAAT9s/6bjZmAsvx7YoIjYHTR75ibjDClj7pjVCQCLcBGAsYHQ/s400/Re%2BZero%2Bkara%2BHajimeru%2BIsekai%2BSeikatsu%2Bvolumen%2B8%2Bespanol.png",
  },
  {
    name: "Re:Zero Ex Light Novel Vol 1",
    link: "https://mega.nz/file/LdgxwB5J#WGcX7Mhwc_2JtOXNkkF70IuoHeqvmTNIdinUaw5uZg0",
    image:
      "https://1.bp.blogspot.com/-LmyGMfcMRGA/XpDgncTtS_I/AAAAAAAAT-k/ROyU8P3DTmw-yu0w_QSmdY6msADYk2QLwCLcBGAsYHQ/s1600/Re%2BZero%2BEX%2BVolumen%2B1%2Bespanol",
  },
  {
    name: "Re:Zero Ex Light Novel Vol 2",
    link: "https://mega.nz/file/iZAEVS4Q#8Kwggpss2j4Q1yv40sh56Z-8Bpf5tlIxttZ398YaICM",
    image:
      "https://1.bp.blogspot.com/-GLp9myLJiXA/XpDgndyAD-I/AAAAAAAAT-g/7zFVlmaZ7AkojMtq0MBQya8o1x2H7umOgCLcBGAsYHQ/s1600/Re%2BZero%2BEX%2BVolumen%2B2%2Bespanol.jpg",
  },
  {
    name: "Re:Zero Ex Light Novel Vol 3",
    link: "https://mega.nz/file/aMZSUaIL#NVTUdIXEBs4TqdCVpzPRa36Q2eTQWQZmAip3QhTgRG8",
    image:
      "https://1.bp.blogspot.com/-ctFGW7KUSL8/XpDgnb6AwcI/AAAAAAAAT-c/bs9zOl1FTvErrtxs2SnTlbmPcMnR6nDVACLcBGAsYHQ/s1600/Re%2BZero%2BEX%2BVolumen%2B3%2Bespanol.jpg",
  },
  {
    name: "Remake Our Life! Light Novel",
    link: "https://mega.nz/folder/PJhEGAYC#Mn0YyC5dPhRtmlQVs5B11g",
    image:
      "https://i1.whakoom.com/large/33/10/a4f7449ba7da47569f428e52fb133a2a.jpg",
  },
  {
    name: "The Ryuo's Work is Never Done! Light Novel Vol 1",
    link: "https://mega.nz/file/GYA3CKZA#yKYyP3lRjTpPyn7831mFR140BB4YbUms6ocM45HplOo",
    image:
      "https://universonl.files.wordpress.com/2017/06/ryuuono.jpg?w=300&h=436",
  },
  {
    name: "The Ryuo's Work is Never Done! Light Novel Vol 2",
    link: "https://mega.nz/file/iRglRBhZ#mOeWG875X_yi7Hb8kmwUskI4hJ9CDGV3-bS2g794R9c",
    image:
      "https://universonl.files.wordpress.com/2018/04/ryuuono2.jpg?w=300&h=436",
  },
  {
    name: "The Ryuo's Work is Never Done! Light Novel Vol 3",
    link: "https://mega.nz/file/GUAFUSzB#DrH9iFJLyGIst6bOwtvuVj43jxyzBlsB9g7-PkxTwIQ",
    image:
      "https://1.bp.blogspot.com/-IworRaY-0FI/W14_E1BRlrI/AAAAAAAAQEg/06B7gyNdJHAPeV49Fty1Xza_PA44GmvogCLcBGAs/s400/Ryuuou%2Bno%2BOshigoto%2521%2Bvolumen%2B3.jpg",
  },
  {
    name: "The Ryuo's Work is Never Done! Light Novel Vol 4",
    link: "https://mega.nz/file/yZYAjC7L#Gr5EynBNBAvgsdIn-c4oMNhbPNRLYBe5Q6jR4bbami0",
    image:
      "https://1.bp.blogspot.com/-eq_CO_47Gew/XDPNlLWP8sI/AAAAAAAAQtI/t7ye6Z6k1QwF78e4OlcHylhYqWFbAVdTQCLcBGAs/s400/Ryuuou%2Bno%2BOshigoto%2521%2Bvolumen%2B4.jpg",
  },
  {
    name: "The Ryuo's Work is Never Done! Light Novel Vol 5",
    link: "https://mega.nz/file/3EQwhApT#GwDIUZTJbrwwtq0wqspfzWcgV45BNOyfmxCBOB4kc8I",
    image:
      "https://3.bp.blogspot.com/-cPeZcEAY06g/XDPN8RwOnrI/AAAAAAAAQtQ/Hw7I1mkLqmcRdy8jz6sA2FiYD0ioTJkawCLcBGAs/s400/Ryuuou%2Bno%2BOshigoto%2521%2Bvolumen%2B5.jpg",
  },
  {
    name: "The Ryuo's Work is Never Done! Light Novel Vol 6",
    link: "https://mega.nz/file/zcoVwaaI#HEBStFKv95t6sS9sRPW6cor92NtCMJrqFuMXLAjCJ0E",
    image:
      "https://2.bp.blogspot.com/-MrTHh5ZddHA/XE442M7x9fI/AAAAAAAAQzw/oFNxlv2wm7ssjni2nhW3TbFH9NVBra_JwCLcBGAs/s400/Ryuuou%2Bno%2BOshigoto%2521%2B%2Bvolumen%2B6%2Bespanol.jpg",
  },
  {
    name: "Bunny Girl Senpai Series Light Novel Vol 1",
    link: "https://mega.nz/file/eZICXaxC#ENiv7lNw5pcIer2n55eUAn-a5RtKvFrNcYhU-ImmWaE",
    image:
      "https://3.bp.blogspot.com/-_xC0bi3fPO8/XD0E8C5IwFI/AAAAAAAAQv4/sXyXdoHTcpAOWbJKQTWSz2RC6xQffAMKACLcBGAs/s400/Seishun%2BButa%2BYarou%2Bvolumen%2B1.jpg",
  },
  {
    name: "Bunny Girl Senpai Series Light Novel Vol 2",
    link: "https://mega.nz/file/WVJWzKSQ#kJIz83BrONk2jPKsUV9CpBa7FRS_jEiAxW0-mX-TPpM",
    image:
      "https://3.bp.blogspot.com/-CPRdoz7W3nM/XD0F6VI8aDI/AAAAAAAAQwA/eRqPk7LEXl0un2RgDaTnoOVYn61SuE5_QCLcBGAs/s400/Seishun%2BButa%2BYarou%2Bvolumen%2B2.png",
  },
  {
    name: "Bunny Girl Senpai Series Light Novel Vol 3",
    link: "https://mega.nz/file/3YJ2WQhJ#0qNOv09tZmGD07FuaeVXfxtAS_E_Mx-WiSkUl56nU6U",
    image:
      "https://3.bp.blogspot.com/-I2a8pATYdaE/XD0GGsAqi4I/AAAAAAAAQwE/P7SzmFLGZkMgnY3Qic1Qy5UMLrXQ7BD4QCLcBGAs/s400/Seishun%2BButa%2BYarou%2Bvolumen%2B3.png",
  },
  {
    name: "Bunny Girl Senpai Series Light Novel Vol 4 and 10",
    link: "https://mega.nz/folder/QXpm3Qra#EqaQJPE6BsUvO4HpgH3FoQ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhn4Z1Hf_HaM67t7f_CW7lKNHyKLP5F6wGwNvcLoE8JpH6cSTzzRi-n4DDJqPa4NiU3k&usqp=CAU",
  },
  {
    name: "The Testament of Sister New Devil Light Novel",
    link: "https://mega.nz/folder/WQQEBDRQ#0mNshkF5VULdhqycFC0yVQ",
    image:
      "https://universonl.files.wordpress.com/2016/01/shinmai1.jpg?w=190&h=276",
  },
  {
    name: "I've Been Killing Slimes For 300 Years And Maxed Out My Level Web Novel Vol 1",
    link: "https://mega.nz/file/fdBwGIxL#NJazqLU_D0la-s9Nc9vZkx1-x7vs6bLmA-LiFWA7tCc",
    image:
      "https://3.bp.blogspot.com/-yi4O5UEqIxM/Woyhbum68gI/AAAAAAAAOBc/70aUhkbirFckRZNjREwSOzXOY3tFO9fXwCLcBGAs/s1600/Slime%2BTaoshite%2B300-nen%2Bvolumen%2B1%2Bespanol.jpg",
  },
  {
    name: "Spy Room Light Novel Vol 1",
    link: "https://mega.nz/folder/4KolBAKb#zT7Q1HiA8gGGLnc6q_WScg/file/ofowhAhZ",
    image:
      "https://shinsengumitranslations.files.wordpress.com/2020/01/hanazono.full_.2817172.jpg?w=260",
  },
  {
    name: "Spy Room Light Novel Vol 2",
    link: "https://mega.nz/folder/4TQjGSBa#iC25jK2EM89Sl7GBm0UEgw/file/xTQwXBIY",
    image:
      "https://shinsengumitranslations.files.wordpress.com/2020/04/1-kbu0jp2.jpg?w=260",
  },
  {
    name: "Spy Room Light Novel Vol 3",
    link: "https://mega.nz/folder/gXA2zJhA#IAcrSJdd_P-qAXU4rgGZmA/file/gOgGQbba",
    image:
      "https://shinsengumitranslations.files.wordpress.com/2020/08/01.jpeg?w=260",
  },
  {
    name: "La Melancolia de Suzumiya Haruhi Vol 1",
    link: "https://mega.nz/folder/CZwmkIKD#FkdDjLSq9ImKnBnrow2yvg/file/ndokHKaI",
    image:
      "https://universonl.files.wordpress.com/2017/12/suzumiyahar.jpg?w=374&h=544",
  },
  {
    name: "Los Suspiros de Suzumiya Haruhi Vol 2",
    link: "https://mega.nz/folder/CZwmkIKD#FkdDjLSq9ImKnBnrow2yvg",
    image:
      "https://universonl.files.wordpress.com/2015/08/suzumi2.jpg?w=374&h=544",
  },
  {
    name: "El Aburrimiento de Suzumiya Haruhi Vol 3",
    link: "https://mega.nz/folder/CZwmkIKD#FkdDjLSq9ImKnBnrow2yvg",
    image:
      "https://universonl.files.wordpress.com/2015/08/suzumi3.jpg?w=374&h=544",
  },
  {
    name: "La Desaparición de Suzumiya Haruhi Vol 4",
    link: "https://mega.nz/folder/CZwmkIKD#FkdDjLSq9ImKnBnrow2yvg",
    image:
      "https://universonl.files.wordpress.com/2015/08/suzumi4.jpg?w=374&h=544",
  },
  {
    name: "El Descontrol de Suzumiya Haruhi Vol 5",
    link: "https://mega.nz/folder/CZwmkIKD#FkdDjLSq9ImKnBnrow2yvg",
    image:
      "https://universonl.files.wordpress.com/2015/08/suzumi5.jpg?w=374&h=544",
  },
  {
    name: "Las Inquietudes de Suzumiya Haruhi Vol 6",
    link: "https://mega.nz/folder/CZwmkIKD#FkdDjLSq9ImKnBnrow2yvg",
    image:
      "https://universonl.files.wordpress.com/2015/08/suzumi6.jpg?w=374&h=544",
  },
  {
    name: "Las Conspiraciones de Suzumiya Haruhi Vol 7",
    link: "https://mega.nz/folder/CZwmkIKD#FkdDjLSq9ImKnBnrow2yvg",
    image:
      "https://universonl.files.wordpress.com/2015/08/suzumi7.jpg?w=374&h=544",
  },
  {
    name: "La Indignación de Suzumiya Haruhi Vol 8",
    link: "https://mega.nz/folder/CZwmkIKD#FkdDjLSq9ImKnBnrow2yvg",
    image:
      "https://universonl.files.wordpress.com/2015/08/suzumi8.jpg?w=374&h=544",
  },
  {
    name: "La Disociación de Suzumiya Haruhi Vol 9",
    link: "https://mega.nz/folder/CZwmkIKD#FkdDjLSq9ImKnBnrow2yvg",
    image:
      "https://universonl.files.wordpress.com/2015/08/suzumi9.jpg?w=374&h=544",
  },
  {
    name: "La Sorpresa de Suzumiya Haruhi Vol 10 Part 1",
    link: "https://mega.nz/folder/CZwmkIKD#FkdDjLSq9ImKnBnrow2yvg",
    image:
      "https://universonl.files.wordpress.com/2015/08/suzumi10.jpg?w=376&h=546",
  },
  {
    name: "La Sorpresa de Suzumiya Haruhi Vol 10 Part 2",
    link: "https://mega.nz/folder/CZwmkIKD#FkdDjLSq9ImKnBnrow2yvg",
    image:
      "https://universonl.files.wordpress.com/2015/08/suzumi11.jpg?w=376&h=546",
  },
  {
    name: "La Melancolia de Suzumiya Haruhi Dia Lluvioso",
    link: "https://mega.nz/folder/CZwmkIKD#FkdDjLSq9ImKnBnrow2yvg/file/jVwSWIwB",
    image:
      "https://universonl.files.wordpress.com/2015/08/rainy_day_cover.jpg?w=606&h=878",
  },
  {
    name: "Slave Harem In The Labyrinth Of The Other World Light Novel",
    link: "https://lectortmo.com/library/novel/14065/Slave-harem-in-the-labyrinth-o",
    image: "https://universonl.files.wordpress.com/2017/12/slaveharem.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 1",
    link: "https://mega.nz/file/PApixIrQ#lLns1qDH4hd6JXU4G0JUHrRueiVVwj1FXbUkfrmS-Tw",
    image:
      "https://universonl.files.wordpress.com/2016/07/strike.jpg?w=374&h=544",
  },
  {
    name: "Strike the Blood Light Novel Vol 2",
    link: "https://mega.nz/file/SZAnkK6K#rBnuIark-eOLJ8w2qYRT5ztNMUq-7T6K62iIuhm3yXs",
    image:
      "https://universonl.files.wordpress.com/2016/10/strike2.jpg?w=374&h=544",
  },
  {
    name: "Strike the Blood Light Novel Vol 3",
    link: "https://mega.nz/file/rQh3zQTY#n4IlBe5oQ0ISG_yIuC8lFI8H5w4JiUumJalElP5fSb8",
    image:
      "https://universonl.files.wordpress.com/2016/12/strike3.jpg?w=374&h=544",
  },
  {
    name: "Strike the Blood Light Novel Vol 4",
    link: "https://mega.nz/file/eFRAxaDT#TFNYn6Vjm3Bm2rpQr1rsJnh1ggNT2LZdYdxrpvNARYw",
    image:
      "https://universonl.files.wordpress.com/2017/04/strikethe4.jpg?w=374&h=544",
  },
  {
    name: "Strike the Blood Light Novel Vol 5",
    link: "https://mega.nz/file/jQBRXa4Y#_R-0PWf0m8swqyjdiuqAbJYJNCUB2gS99KCIGzR1pHA",
    image:
      "https://universonl.files.wordpress.com/2017/06/strike5.jpg?w=374&h=544",
  },
  {
    name: "Strike the Blood Light Novel Vol 6",
    link: "https://mega.nz/file/mBBwGZKD#4nPAE4deh-Z2BV1CWTRlVYZlzcceOHBVdonV26pQDkk",
    image:
      "https://universonl.files.wordpress.com/2017/12/strikeblo6.jpg?w=374&h=544",
  },
  {
    name: "Strike the Blood Light Novel Vol 7",
    link: "https://mega.nz/file/WRYBwACL#UmeAZERdffgHfoT0F1O--WIOd6kvCbNQ7r6kXqyH3OI",
    image:
      "https://universonl.files.wordpress.com/2017/12/strikeb7.jpg?w=374&h=544",
  },
  {
    name: "Strike the Blood Light Novel Vol 8",
    link: "https://drive.google.com/file/d/1K7O-YcQVio2aa-157PY3_Fg9y5uVQkKr/view",
    image:
      "https://static.wixstatic.com/media/46079e_b2a945a4a4884100aab7dcfd0fc6594f~mv2.jpg/v1/fill/w_169,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 9",
    link: "https://drive.google.com/file/d/1h97EL3vp7g27bW-Cz78qlfJzKd_W6sqV/view",
    image:
      "https://static.wixstatic.com/media/46079e_807dce7eb28740409d6d0b0e5cda6d0a~mv2_d_1200_1800_s_2.jpg/v1/fill/w_170,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 10",
    link: "https://drive.google.com/file/d/1B5GDnOgDzixfiF2JxuTZ_SIdGW8hcLJV/view",
    image:
      "https://static.wixstatic.com/media/46079e_c20df8c7f20d4598bda2aed5c12b7ebb~mv2_d_1200_1800_s_2.jpg/v1/fill/w_179,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 11",
    link: "https://drive.google.com/file/d/1XZkfhmihq6Bu2oKrG7t2CVzvx7gjptbv/view",
    image:
      "https://static.wixstatic.com/media/46079e_2393ef80999d49b5bdc8e2c23ee690a7~mv2_d_1200_1800_s_2.jpg/v1/fill/w_179,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 12",
    link: "https://drive.google.com/file/d/1ksoMKkHQ4yPWGKTYRg9OcTtj59950PDu/view",
    image:
      "https://static.wixstatic.com/media/46079e_d7c22199eff64364932b8c80eb8d92bd~mv2.jpg/v1/fill/w_179,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 13",
    link: "https://drive.google.com/file/d/1-DZgKhmiF1aBK8QA1lCy8AOyNyTWmjYn/view",
    image:
      "https://static.wixstatic.com/media/46079e_ef2d1df29df4465eabe3d32c3ac229a7~mv2.jpg/v1/fill/w_179,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 14",
    link: "https://drive.google.com/file/d/1A85aVx_C96W187kouDNkr9ub6quVKG8g/view",
    image:
      "https://static.wixstatic.com/media/46079e_73a80395c12447e7a0406bf62a6ca23c~mv2.jpg/v1/fill/w_179,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 15",
    link: "https://drive.google.com/file/d/10LqXSkYOIRwBBKKkSlOmI5CzaNoAbe3H/view",
    image:
      "https://static.wixstatic.com/media/46079e_6bc3ba05737940a2986d4c7f42e1f504~mv2.jpg/v1/fill/w_178,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 16",
    link: "https://drive.google.com/file/d/133kvG2OjI3Evo1u0EPGbAO-ELneWQYS6/view",
    image:
      "https://static.wixstatic.com/media/46079e_96279c3e5f414207a17dfdaa620ef097~mv2.jpg/v1/fill/w_178,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 17",
    link: "https://drive.google.com/file/d/1gWcNKSiTalOSvbHRWletPFtPM5gwt3Ut/view",
    image:
      "https://static.wixstatic.com/media/46079e_c3af5e16d2494788af049ea67998de95~mv2.jpg/v1/fill/w_178,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 18",
    link: "https://drive.google.com/file/d/1KZ8jGXTWhaUCEp4DytwuAh20kJL8YVR_/view",
    image:
      "https://static.wixstatic.com/media/46079e_6ec38e072d64407db86f4d6ef93ab155~mv2.jpg/v1/fill/w_178,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 19",
    link: "https://drive.google.com/file/d/1vL0cIc0x6Poxa8-PepTxQvjxz2Cmleva/view",
    image:
      "https://m.media-amazon.com/images/I/5197MstkmeL._SX331_BO1,204,203,200_.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 20",
    link: "https://drive.google.com/file/d/1zDs8zxjdC0NYfZadTb4aEXHElzBcc2dR/view",
    image:
      "https://m.media-amazon.com/images/I/81adSq2DSdL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Strike the Blood Light Novel Vol 21",
    link: "https://drive.google.com/file/d/1FRJeWoepp_KDCoq5HcxvjQWcROjg4e7x/view",
    image: "https://m.media-amazon.com/images/I/512V6cy12DL.jpg",
  },
  {
    name: "Strike the Blood EX: Yukina Before/After Light Novel",
    link: "https://drive.google.com/file/d/1ElOnfTYcn8l-AlcZZR1z8TuR_iWo7tUF/view",
    image:
      "https://4.bp.blogspot.com/-dgZ9rJDS-20/WiMjyeGyAsI/AAAAAAAAM0U/daXa0i82mpc_yED0z52LJmYZNiIV0z5ZACLcBGAs/s1600/Strike%2Bthe%2Bblood%2Bvolumen%2Bespecial.png",
  },
  {
    name: "Sword Art Online Light Novel Vol 1 Aincrad",
    link: "https://drive.google.com/file/d/0B0uRo1bSI3yfR1VoZkQ0aGdTeW8/view?resourcekey=0-JTu7dfazosHBe3nKeAH3TQ",
    image:
      "https://universonl.files.wordpress.com/2017/12/swordart.jpg?w=374&h=544",
  },
  {
    name: "Sword Art Online Light Novel Vol 2 Aincrad",
    link: "https://issuu.com/novelasligeras/docs/sword_art_online_02",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword2.jpg?w=374&h=544",
  },
  {
    name: "Sword Art Online Light Novel Vol 3 Fairy Dance",
    link: "https://issuu.com/antoniohernandez24/docs/sword_art_online_novela_3__completa",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword3.jpg?w=374&h=544",
  },
  {
    name: "Sword Art Online Light Novel Vol 4 Fairy Dance",
    link: "https://issuu.com/novelasligeras/docs/sword_art_online_04",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword4.jpg?w=374&h=544",
  },
  {
    name: "Sword Art Online Light Novel Vol 5 Phanthom Bullet",
    link: "https://issuu.com/novelasligeras/docs/sword_art_online_05",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword51.jpg?w=374&h=544",
  },
  {
    name: "Sword Art Online Light Novel Vol 6 Phanthom Bullet",
    link: "https://issuu.com/novelasligeras/docs/sword_art_online_06",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword6.jpg?w=374&h=544",
  },
  {
    name: "Sword Art Online Light Novel Vol 7 Mother's Rosario",
    link: "https://issuu.com/novelasligeras/docs/sword_art_online_07",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword71.jpg?w=374&h=544",
  },
  {
    name: "Sword Art Online Light Novel Vol 8 Early and Late",
    link: "https://mega.nz/folder/nN4mWZxB#8rUBEDRTZlgrvQiqmK1gFQ/file/ScZz3A7Z",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword81.jpg?w=374&h=544",
  },
  {
    name: "Sword Art Online Light Novel Vol 9 Alicization Beginning",
    link: "https://mega.nz/folder/nN4mWZxB#8rUBEDRTZlgrvQiqmK1gFQ/file/SQY2SL7D",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword9.jpg?w=374&h=544",
  },
  {
    name: "Sword Art Online Light Novel Vol 10 Alicization Running",
    link: "https://mega.nz/folder/nN4mWZxB#8rUBEDRTZlgrvQiqmK1gFQ/file/SUJkAT7Y",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword10.jpg?w=374&h=544",
  },
  {
    name: "Sword Art Online Light Novel Vol 11 Alicization Dividing",
    link: "https://mega.nz/folder/nN4mWZxB#8rUBEDRTZlgrvQiqmK1gFQ/file/qMwAXAIR",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword11.jpg?w=374&h=544",
  },
  {
    name: "Sword Art Online Light Novel Vol 12 Alicization Rising",
    link: "https://mega.nz/folder/nN4mWZxB#8rUBEDRTZlgrvQiqmK1gFQ/file/TBwEVbhQ",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword12.jpg?w=374&h=544",
  },
  {
    name: "Sword Art Online Light Novel Vol 13 Alicization Dividing",
    link: "https://mega.nz/folder/nN4mWZxB#8rUBEDRTZlgrvQiqmK1gFQ/file/rAwEmCBa",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword13.jpg?w=187&h=272",
  },
  {
    name: "Sword Art Online Light Novel Vol 14 Alicization Uniting",
    link: "https://mega.nz/folder/nN4mWZxB#8rUBEDRTZlgrvQiqmK1gFQ/file/WYQFwSQK",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword14.jpg?w=187&h=272",
  },
  {
    name: "Sword Art Online Light Novel Vol 15 Alicization Invading",
    link: "https://mega.nz/folder/nN4mWZxB#8rUBEDRTZlgrvQiqmK1gFQ/file/KYggBara",
    image:
      "https://universonl.files.wordpress.com/2014/10/sword15.jpg?w=187&h=272",
  },
  {
    name: "Sword Art Online Light Novel Vol 16 Alicization Exploding",
    link: "https://mega.nz/folder/nN4mWZxB#8rUBEDRTZlgrvQiqmK1gFQ/file/WAQDFZjA",
    image:
      "https://universonl.files.wordpress.com/2014/10/swordart16.jpg?w=187&h=272",
  },
  {
    name: "Sword Art Online Light Novel Vol 17 Alicization Awakening",
    link: "https://mega.nz/folder/nN4mWZxB#8rUBEDRTZlgrvQiqmK1gFQ/file/eNgkWSgS",
    image:
      "https://universonl.files.wordpress.com/2017/03/swordart17.jpg?w=187&h=272",
  },
  {
    name: "Sword Art Online Light Novel Vol 18 Alicization Lasting",
    link: "https://mega.nz/folder/nN4mWZxB#8rUBEDRTZlgrvQiqmK1gFQ/file/LIokTR5Z",
    image:
      "https://universonl.files.wordpress.com/2018/03/swordart18.jpg?w=187&h=271",
  },
  {
    name: "Sword Art Online Progressive Light Novel Vol 1",
    link: "https://mega.nz/file/3IR1zaAa#3lBcvnbXcNZN2hURSNsYoNeJgOSG16kMuxcE_mqtj_A",
    image:
      "https://3.bp.blogspot.com/-CXuDr4XoTy4/WoYJoKRSNrI/AAAAAAAAN60/57TiocA9IF0KWnbsAObD_mgzYH7Mp3G0gCLcBGAs/w281-h400/SAO%2BProgressive%2Bvolumen%2B1.png",
  },
  {
    name: "Sword Art Online Progressive Light Novel Vol 2",
    link: "https://mega.nz/file/3JBAxKQJ#Y0yvdp_mSC3j-I5k-i_KxW8_fTVohcbCdhEF5S9uaIs",
    image:
      "https://3.bp.blogspot.com/--7QsKLFjeTk/WoYKGWt3jcI/AAAAAAAAN64/QpIPjlVV2A4F_B-5d8OrCIs6ntm-2TbuACLcBGAs/w280-h400/SAO%2BProgressive%2Bvolumen%2B2.png",
  },
  {
    name: "Sword Art Online Progressive Light Novel Vol 3",
    link: "https://mega.nz/file/SMpDlAjC#waN5JCdG0JN_4_PnnGxIEn_QprVo0R__-qvL1-s8rFw",
    image:
      "https://1.bp.blogspot.com/-gDWslTH3hFw/WoYKjmMCS4I/AAAAAAAAN7A/NcMiy--bXoI2ejuAre2PWSLi1-3bgFd3wCLcBGAs/w267-h400/SAO%2BProgressive%2Bvolumen%2B3.jpg",
  },
  {
    name: "Sword Art Online Progressive Light Novel Vol 4",
    link: "https://mega.nz/file/aBRhURwQ#yPNX1q55LVgwzKTDueQbqMtGHjpwvJtCV3TMo1BmMDk",
    image:
      "https://4.bp.blogspot.com/-sYHUpzgPFWM/WoYK0uItySI/AAAAAAAAN7I/hIIflc6BCIg5KyIYCDkf8C2E-f-XuEOOgCLcBGAs/w280-h400/SAO%2BProgressive%2Bvolumen%2B4.png",
  },
  {
    name: "Sword Art Online Progressive Light Novel Vol 5",
    link: "https://mega.nz/file/nN4zUZ7T#PaIH8h0E6fz9uknsUiIHmCv12nPh3CJeD512zFe81ik",
    image:
      "https://1.bp.blogspot.com/-IVnFMACgUis/X2oF3zJZ9II/AAAAAAAAWns/r9nO9QVk5r8tzt4sB2bFn_-PeCHkePD4gCLcBGAsYHQ/w281-h400/Sword%2BArt%2BOnline%2BProgressive%2BVolumen%2B5%2Bespanol.png",
  },
  {
    name: "Sword Art Online Progressive Light Novel Vol 6",
    link: "https://mega.nz/file/HIonWTbK#C3jXNYl4HHlwcs0rk7q_fjVR5-LmA0YOiRnDpNYWcd4",
    image:
      "https://1.bp.blogspot.com/-3hqgaA1qSgw/X2oGJs90RPI/AAAAAAAAWn0/k71ABAsFkmwEZhxr8bJ--A3q4Yhnz-JhwCLcBGAsYHQ/w279-h400/Sword%2BArt%2BOnline%2BProgressive%2BVolumen%2B6%2Bespanol.png",
  },
  {
    name: "Sword Art Online Progressive Light Novel Vol 7",
    link: "https://drive.google.com/file/d/1n-biJV_jRvS_44PmTlkCx2k7FSFg0R_z/view",
    image:
      "https://traducciontsa.files.wordpress.com/2021/06/img_20210529_1327197e22705578219762904081..jpg?w=720",
  },
  {
    name: "Sword Art Online Progressive Light Novel Vol 8",
    link: "https://drive.google.com/file/d/1on55b5KNhPxtp9ohFE4IePLjZaAZlTQ8/view",
    image:
      "https://traducciontsa.files.wordpress.com/2022/07/sword-art-online-progressive-8-light-novel2602971130932248836.jpg?w=683",
  },
  {
    name: "Sword Art Online Alternative Gun Gale Online Light Novel Squad Jam",
    link: "https://mega.nz/file/kBtjnTSQ#SR1F6w_ptwD3vwmsY6S6uSoWBKJ5QxK4IYo3YVN7Wpk",
    image:
      "https://universonl.files.wordpress.com/2014/10/swordalter1.jpg?w=187&h=272",
  },
  {
    name: "Sword Art Online Alternative Gun Gale Online Light Novel 2nd Squad Jam",
    link: "https://www.dropbox.com/s/u20ny8eso911ecp/Sword%20Art%20Online%20Alternative%20GGO%2002%20espa%C3%B1ol%20%28TSA%29.pdf?dl=0",
    image:
      "https://universonl.files.wordpress.com/2014/10/swordalter2.jpg?w=187&h=272",
  },
  {
    name: "Sword Art Online Alternative Gun Gale Online Light Novel 2nd Squad Jam II",
    link: "https://drive.google.com/file/d/1-gRw8oYs-ZC47JrnCbNoiFwO_b19scPI/view",
    image:
      "https://traducciontsa.files.wordpress.com/2017/03/sword-art-online-alternative-gun-gale-online-iii-2nd-squad-jam-414939-1-e1489883146128.jpg?w=205&h=300",
  },
  {
    name: "Sword Art Online Alternative Gun Gale Online Light Novel 3rd Squad Jam Betrayers' Choice I",
    link: "https://drive.google.com/file/d/1xE6ndlM5KlPLg3WRlFpkwep-Pob0XCir/view",
    image:
      "https://traducciontsa.files.wordpress.com/2020/05/sword_art_online_alternative_-_gun_gale_online_4_cover-1.png?w=209&h=299",
  },
  {
    name: "Sword Art Online Hopeful Chant Light Novel",
    link: "https://mega.nz/file/nJYC1Drb#99-4RsHZE1KJu2MtwADkFJvoVkP_Z2Ccu3rfZJ-e5Us",
    image:
      "https://3.bp.blogspot.com/-toPuuNd0jsU/WlPr-ZU3HSI/AAAAAAAANXg/lDqO5kmhljMFhYoMH5yJaV81JN983mPVQCLcBGAs/s1600/Sword%2BArt%2BOnline%2B%25E2%2580%259CHopeful%2BChant%25E2%2580%259D%2B%2528en%2Bespa%25C3%25B1ol%2529.jpg",
  },
  {
    name: "The Detective Is Already Dead Light Novel",
    link: "https://mega.nz/file/HIwF2AoK#8Ap8OD3XBCGOJtpsFGPIE0yHFfA0ubUGkOBCDdKxhI0",
    image:
      "https://1.bp.blogspot.com/-w-BKfZuFoCk/X_X1Wk_9ugI/AAAAAAAAXXE/qJ36D9p8p2E_xNAKMPEdNbuCzkgg6brygCLcBGAsYHQ/w283-h400/Tantei%2Bwa%2BMou%252C%2BShindeiru%2Bvolumen%2B1%2Bespanol.jpg",
  },
  {
    name: "Reincarnated as a Sword Light Novel Vol 1",
    link: "https://drive.google.com/file/d/1MP4PB5GqrR9KB5PPtfiX2BjGfzbvqqcC/view",
    image:
      "https://universonl.files.wordpress.com/2016/01/tensei-shitara.jpg?w=320&h=465",
  },
  {
    name: "Reincarnated as a Sword Light Novel Vol 2",
    link: "https://drive.google.com/file/d/12hH8qHSYrrA04bsMR-U9R-zHwyiXy3BO/view",
    image:
      "https://static.wixstatic.com/media/46079e_036dcafda66b4d6da28a59254ac76301~mv2.jpg/v1/fill/w_217,h_309,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cover_00.jpg",
  },
  {
    name: "That Time I Got Reincarnated as a Slime Light Novel Vol 1",
    link: "https://drive.google.com/file/d/1knHbcGaOjjbge5iGzCBEHNkhf1eKaGLP/view",
    image:
      "https://static.wixstatic.com/media/46079e_e249e6e6ea3e454e8382da942836023a~mv2_d_1200_1800_s_2.jpg/v1/fill/w_185,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/000.jpg",
  },
  {
    name: "That Time I Got Reincarnated as a Slime Light Novel Vol 2",
    link: "https://drive.google.com/file/d/1d2epGz8t15EEetV8UR0TncLNE2kmIu_L/view",
    image:
      "https://static.wixstatic.com/media/46079e_6c4ff4629e3b43dc97560406af19caa6~mv2.jpg/v1/fill/w_180,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/That-Time-I-Got-Reincarnated-as-a-Slime-.jpg",
  },
  {
    name: "That Time I Got Reincarnated as a Slime Light Novel Vol 3",
    link: "https://drive.google.com/file/d/1--x0TNdk9IYttMdPgb13EMgBR2Bb8kFT/view",
    image:
      "https://static.wixstatic.com/media/46079e_61ca711f7a524b2eba0779a6274ea0e5~mv2.jpg/v1/fill/w_191,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/That-Time-I-Got-Reincarnated-as-a-Slime-.jpg",
  },
  {
    name: "That Time I Got Reincarnated as a Slime Light Novel Vol 4",
    link: "https://drive.google.com/file/d/1s_qwTONBI4WiQYw5RGE0GmSBTaEUOJZo/view",
    image:
      "https://static.wixstatic.com/media/46079e_b1f079b56d524f7985f639280e3730fa~mv2.jpg/v1/fill/w_186,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/That-Time-I-Got-Reincarnated-as-a-Slime-.jpg",
  },
  {
    name: "That Time I Got Reincarnated as a Slime Light Novel Vol 5",
    link: "https://drive.google.com/file/d/1MI62BLrfgUoM4okyi1-QpBJ1PbinV3CE/view",
    image:
      "https://static.wixstatic.com/media/46079e_84685704a9294e30b662d80a6490d612~mv2.jpg/v1/fill/w_191,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/That-Time-I-Got-Reincarnated-as-a-Slime-.jpg",
  },
  {
    name: "That Time I Got Reincarnated as a Slime Light Novel Vol 6",
    link: "https://drive.google.com/file/d/1eOSJTaceuvqfIbyBlgSChzQhqrIHlGdb/view",
    image:
      "https://static.wixstatic.com/media/46079e_cd4d9407b6c741a8b94b4fceeba0a26f~mv2.jpg/v1/fill/w_181,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/That-Time-I-Got-Reincarnated-as-a-Slime-.jpg",
  },
  {
    name: "That Time I Got Reincarnated as a Slime Light Novel Vol 7",
    link: "https://drive.google.com/file/d/1qyahs0QoJoeEimt0y1HuJFsyOVmrVYJm/view",
    image:
      "https://static.wixstatic.com/media/46079e_4054531d625a4501ad768a8ea4c400d0~mv2.jpg/v1/fill/w_181,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/That-Time-I-Got-Reincarnated-as-a-Slime-.jpg",
  },
  {
    name: "That Time I Got Reincarnated as a Slime Light Novel Vol 8",
    link: "https://drive.google.com/file/d/1lvlDy-qGhFKRmqFPyQmOEDGr35xjWWK-/view",
    image:
      "https://static.wixstatic.com/media/46079e_8355d7f9fba24ab19906169716021049~mv2.jpg/v1/fill/w_178,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/01.jpg",
  },
  {
    name: "That Time I Got Reincarnated as a Slime Light Novel Vol 9",
    link: "https://drive.google.com/file/d/1UF6zbDXS-Qj6CTLbxs_pvOrrdbXwr5U4/view",
    image:
      "https://static.wixstatic.com/media/46079e_492131ffd3c0442994b0a32a0dc0a81e~mv2.jpg/v1/fill/w_189,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/That-Time-I-Got-Reincarnated-as-a-Slime-.jpg",
  },
  {
    name: "That Time I Got Reincarnated as a Slime Light Novel Vol 10",
    link: "https://drive.google.com/file/d/117WIF97RixUmejNx7bssBmz1Ry6V-l0-/view",
    image:
      "https://static.wixstatic.com/media/46079e_1e52382344b64b949be4bbbbf9559dbc~mv2.jpg/v1/fill/w_178,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/That-Time-I-Got-Reincarnated-as-a-Slime-.jpg",
  },
  {
    name: "A Certain Magical Heavy Zashiki-Warashi Deals With a Simple Killer Princess' Marriage Circumstances Light Novel",
    link: "https://mega.nz/file/6ZYAHJTC#UI-WiOmAB8eOYneDurfTb8ksfbVgQpk6UZWCltTRNHA",
    image:
      "https://i0.wp.com/jnovels.com/wp-content/uploads/2019/06/Kamachi_Super_Crossover.jpg?fit=500%2C714&ssl=1",
  },
  {
    name: "Toradora! Light Novel",
    link: "https://mega.nz/folder/G1V2lL7b#2DqzLYxQLvrdyssWhwjeug",
    image:
      "https://universonl.files.wordpress.com/2017/12/torador.jpg?w=374&h=544",
  },
  {
    name: "The Angel Next Door Spoils Me Rotten Light Novel",
    link: "https://lectortmo.com/library/novel/71739/otonari-no-tenshi-sama-ni-itsu-no-ma-ni-ka-dame-ningen-ni-sareteita-ken-ln",
    image: "https://m.media-amazon.com/images/I/91euieTpMsL.jpg",
  },
  {
    name: "The Angel Next Door Spoils Me Rotten Web Novel",
    link: "https://lectortmo.com/library/novel/53756/otonari-no-tenshi-sama-ni-itsu-no-ma-ni-ka-dame-ningen-ni-sareteita-ken",
    image: "https://m.media-amazon.com/images/I/51BFLo2uy+L.jpg",
  },
  {
    name: "The Best Assassin Incarnated Light Novel Vol 1",
    link: "https://mega.nz/file/vRtwATbb#kn7JyDlTDxdz0jlYXsJqWHF5KcooCVBx51aBzOJuTsE",
    image: "https://m.media-amazon.com/images/I/81+ZT2W52zL.jpg",
  },
  {
    name: "The Best Assassin Incarnated Light Novel Vol 2",
    link: "https://mega.nz/file/zA0zwSBB#PnJzUROn053ujqQWEovZB-tJ2yV4fAfqQKqDOpDoNcE",
    image: "https://m.media-amazon.com/images/I/513JHRzjsWL.jpg",
  },
  {
    name: "The Best Assassin Incarnated Light Novel Vol 3",
    link: "https://mega.nz/file/SEcG2J7b#rDMbJ8Gtf6nt6AS50cylv-tOuQNu9G-6FByOvULaGo8",
    image:
      "https://m.media-amazon.com/images/I/612EbbAYQ3L._SX430_BO1,204,203,200_.jpg",
  },
  {
    name: "The Best Assassin Incarnated Light Novel Vol 4",
    link: "https://mega.nz/file/ydkF3I7K#8Lkpcc5YhI04Dm4lqWB6pXHfsYmmpzISRGzBM29FFLo",
    image: "https://m.media-amazon.com/images/I/51YHyGrbdcL.jpg",
  },
  {
    name: "The Fruit of Evolution: Before I Knew It My Life Had It Made Light Novel",
    link: "https://lectortmo.com/library/novel/25262/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei",
    image: "https://universonl.files.wordpress.com/2016/01/shinkanomi.jpg",
  },
  {
    name: "The Genius Prince's Guide To Raising A Nation Out Of Debt Light Novel",
    link: "https://lectortmo.com/library/novel/68227/the-genius-princes-guide-to-raising-a-nation-out-of-debt",
    image:
      "https://m.media-amazon.com/images/I/71IBea18O-L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "The Misfit Of Demon King Academy Light Novel Vol 1",
    link: "https://mega.nz/file/ARNiVbjT#VYUIHSxaqpcAEKuWUB69Ul44JtvrSaOr5kC_thlop8I",
    image:
      "https://1.bp.blogspot.com/-UAXJClCrmMg/X1lnsRY3SAI/AAAAAAAAAYQ/4HUxChMHmpQQlb3xEcYIqw0b7xHPgj0CwCPcBGAYYCw/w225-h320/458a120df86d2fbca69a13b6dd0b835b.jpg",
  },
  {
    name: "The Misfit Of Demon King Academy Light Novel Vol 2",
    link: "https://mega.nz/file/cQVyRbYR#c_Tez7nwf6-GVTNecuvl92gLNbk_cGdeCZHqamxMwGk",
    image:
      "https://1.bp.blogspot.com/-0ShKYmXK9j0/X1lrTm4wZGI/AAAAAAAAAZo/wDTaMeOwvuQRDvsIRcNEJX9mcf-hHQsmwCLcBGAsYHQ/w226-h320/e9864cbf5be50d5d30bbd1396b9d27bb.jpg",
  },
  {
    name: "The Misfit Of Demon King Academy Light Novel Vol 3",
    link: "https://mega.nz/file/AEcQxTZQ#woAhlTaQVwldu4vaJoT24N9WFjkBFGvZhOkrWBEiwlU",
    image:
      "https://1.bp.blogspot.com/-XojMqEwgKYg/X1lqwq90s-I/AAAAAAAAAYk/mS4dgqDaqAgv5g-yLrQuTTm0hpo5C_slgCLcBGAsYHQ/w226-h320/447341c643a0048332a50c702fdeccd3.jpg",
  },
  {
    name: "The Misfit Of Demon King Academy Light Novel Vol 4",
    link: "https://mega.nz/file/1NFWjJTL#nze2oFS0Dh9Gjht9bzqTKMWpBxI05KDRpMIEGqTq8NI",
    image:
      "https://1.bp.blogspot.com/-YPOKeQOaOCM/X1lq3VTA75I/AAAAAAAAAYw/7Lb33zZbbpU5W77zNkYYEvlCY13Mb5IIwCLcBGAsYHQ/w226-h320/254c4c404b4c04f905c5ae63a3eba717.jpg",
  },
  {
    name: "The Misfit Of Demon King Academy Light Novel Vol 4.5",
    link: "https://mega.nz/file/AEcyXTIa#8yE1rsin0R6bTwYLpv3mrFCIDlYe3-Y7wQ_JeyAZV24",
    image:
      "https://1.bp.blogspot.com/-vSoHiQkaF8U/YLRDuapJ6iI/AAAAAAAABUY/IPVyVAyBRxE0v8SVDsbIXqe5CRi5jgduQCLcBGAsYHQ/w225-h320/Maou-Gakuin-no-Futekigousha-Volumen-4.5.jpg",
  },
  {
    name: "The Misfit Of Demon King Academy Light Novel Vol 5",
    link: "https://mega.nz/file/QNVygbDa#953PwioyuDTjo_u4zbsBSo_2ZM9v0WVEvQVw3hShWh4",
    image:
      "https://1.bp.blogspot.com/-WMdYoX1fwuI/X1lqwcWIKoI/AAAAAAAAAYg/7j3Pwz8Ay3QkKWUkmXkvfLc6VnIDV7ABACLcBGAsYHQ/w226-h320/5c8ac6da5839232112a5e101412f0edf.jpg",
  },
  {
    name: "The Misfit Of Demon King Academy Light Novel Vol 6",
    link: "https://mega.nz/file/4IVgVJSS#6-sNq9GIKxjB-jHjZyFGz1qlkzEbAENxoEAeParkT8s",
    image:
      "https://1.bp.blogspot.com/-X_x-SNpRX5c/YLRCwNK5-LI/AAAAAAAABT8/dbot4s-lBS8mQ5l3Fg5HdRZdSrIotdtngCLcBGAsYHQ/w225-h320/Maou-Gakuin-no-Futekigousha-Volumen-6.jpg",
  },
  {
    name: "The Misfit Of Demon King Academy Light Novel Vol 7",
    link: "https://mega.nz/file/hdVS0TYJ#uT0LF1xpzKk7f7Um6C8MWM3Amb7q5ij9R8z0zarkpak",
    image:
      "https://1.bp.blogspot.com/-kCkRpjNoN3o/YLRCwKOI_kI/AAAAAAAABT4/_xgwuiZegxoqyU2S31y8gbpnnGFVSY7yQCLcBGAsYHQ/w228-h320/Maou-Gakuin-no-Futekigousha-Volumen-7.jpg",
  },
  {
    name: "The Misfit Of Demon King Academy Light Novel Vol 8",
    link: "https://mega.nz/file/pZcU0LTD#tazbbXlmlmtJBnO2J51eeG7j-k5LxCsTEBm3mQ6Ka4k",
    image:
      "https://1.bp.blogspot.com/-WkO4HoscLYo/YLRCwdMcyrI/AAAAAAAABUA/w7djUV72_H8_zGQfFTY1BdffVNtH9NmTwCLcBGAsYHQ/w226-h320/Maou-Gakuin-no-Futekigousha-Volumen-8.png",
  },
  {
    name: "The Misfit Of Demon King Academy Light Novel Vol 9",
    link: "https://mega.nz/file/4EMy1Z4I#fhqiOY0wWmqgK9DfCD-4d44cZB5FqRIg1xYzL_s9OPI",
    image:
      "https://1.bp.blogspot.com/-6VLSm4yZrF0/YLRCxy651MI/AAAAAAAABUE/s2mILLFu5IEGLVQo2LXy_3P90oj3ejmsACLcBGAsYHQ/w226-h320/Maou-Gakuin-no-Futekigousha-Volumen-9.jpg",
  },
  {
    name: "The Rising of the Shield Hero Light Novel Vol 1",
    link: "https://mega.nz/folder/s4VUwT7T#JafTH92IwtHd1R5LiIYGJQ",
    image:
      "https://universonl.files.wordpress.com/2016/01/tate1.jpg?w=374&h=544",
  },
  {
    name: "The Rising of the Shield Hero Light Novel Vol 2",
    link: "https://mega.nz/folder/VlECwbbJ#l2MoEa2HbL49mtIx8ZIY1Q",
    image:
      "https://universonl.files.wordpress.com/2015/04/tate2.jpg?w=374&h=544",
  },
  {
    name: "The Rising of the Shield Hero Light Novel Vol 3",
    link: "https://mega.nz/folder/chFAhJxY#uRTwxS4fUZkR9Vp5Z86BdQ",
    image:
      "https://universonl.files.wordpress.com/2015/04/tate3.jpg?w=374&h=544",
  },
  {
    name: "The Rising of the Shield Hero Light Novel Vol 4",
    link: "https://mega.nz/folder/QwEmFDzL#iRkaBUN4Gl8DesmyY64svA",
    image:
      "https://universonl.files.wordpress.com/2016/08/tate4.jpg?w=374&h=544",
  },
  {
    name: "The Rising of the Shield Hero Light Novel Vol 5",
    link: "https://mega.nz/folder/IoVCCBgT#RXeqvcq_SvW9bjO8OVxQbA",
    image:
      "https://universonl.files.wordpress.com/2016/08/tate5.jpg?w=374&h=544",
  },
  {
    name: "The Rising of the Shield Hero Light Novel Vol 6",
    link: "https://mega.nz/folder/UocgiLhI#AAiahe8b6UDyhLtLAcpopw",
    image:
      "https://universonl.files.wordpress.com/2016/09/tate6.jpg?w=374&h=544",
  },
  {
    name: "The Rising of the Shield Hero Light Novel Vol 7",
    link: "https://mega.nz/folder/JtEigZRS#l3WmHfh7uRer4FQZHkyUnQ",
    image:
      "https://universonl.files.wordpress.com/2016/11/tate7.jpg?w=374&h=544",
  },
  {
    name: "Violet Evergarden Light Novel Vol 1",
    link: "https://mega.nz/file/zQR1QAZA#IAHe1nGAGEEQl2yUd2QjNYhPpyT2WPH3dH59xAuTfCY",
    image:
      "https://universonl.files.wordpress.com/2017/07/violetever1.jpg?w=380&h=552",
  },
  {
    name: "Violet Evergarden Light Novel Vol 2",
    link: "https://mega.nz/file/Wcwm3BKJ#n2-dOhO1AhevKWBoAcNDObXLqZ0gbW2Th5xEyAtyiD4",
    image:
      "https://4.bp.blogspot.com/-3sXdEKMFVhQ/WviwA14KDsI/AAAAAAAAPcE/KOtUEU31c0cVc2XepEu32NzUh6tI2ieAgCLcBGAs/s400/Violet%2BEvergarden%2Bvolumen%2B2%2Bespanol.jpg",
  },
  {
    name: "Violet Evergarden Light Novel Vol 3",
    link: "https://mega.nz/folder/hstgxb5Q#9XGs0SSL_KBpwHU2bxpqow",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=175x10000:format=jpg/path/s0780ed699b42afd7/image/i585278d3202605e7/version/1626568631/violet-evergarden-gaiden-portada.jpg",
  },
  {
    name: "Violet Evergarden Light Novel Vol 4",
    link: "https://mega.nz/folder/Vh0gBCrK#J-LLiOYfgGZQJKjig1id-A",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=175x10000:format=jpg/path/s0780ed699b42afd7/image/i65a91dd3eeed2696/version/1626568642/violet-evergarden-ever-after-portada.jpg",
  },
  {
    name: "Wandering Witch The Journey of Elaina Light Novel Vol 1",
    link: "https://mega.nz/file/L9831Z7K#QYJA7pI2D1-FFvv4_-mdaRRTZORexm0daQF6Dk-E5jw",
    image:
      "https://2.bp.blogspot.com/-WfQbViRdgj0/WWRSAoxP2kI/AAAAAAAAG24/PsbYnAn2yh8cd233Y4aGlCUJHPjd3WemgCLcBGAs/s320/cover.jpg",
  },
  {
    name: "Wandering Witch The Journey of Elaina Light Novel Vol 2",
    link: "https://mega.nz/file/38Vw1LgT#WuxGrSH1-QJ-M8Sh5pp1SkIh44rpOacwgH6zv-colv4",
    image:
      "https://4.bp.blogspot.com/-8RpL1_gHsQw/Wfn5mOuzJRI/AAAAAAAAG84/TabVLN6drpU95jdT2dtYluwZVPol3Tq-ACLcBGAs/s320/001.jpg",
  },
  {
    name: "Wandering Witch The Journey of Elaina Light Novel Vol 3",
    link: "https://mega.nz/file/Ct8iDICL#sWXiXv_NAY90N4RrST8On4VlhupCJwliw-0axlol8ek",
    image:
      "https://4.bp.blogspot.com/-aA5yoF-rElQ/Wi3x_bUNjcI/AAAAAAAAG_A/E1Nkaz9MelQnN5EzMbCZ0W99TCkvdplEACLcBGAs/s320/majo%2Bv3.jpg",
  },
  {
    name: "Wandering Witch The Journey of Elaina Light Novel Vol 4",
    link: "https://mega.nz/folder/ICJCmBTQ#gEM5InZJeS49QvS1fyroOg/file/1L4EGIxY",
    image:
      "https://shinsengumitranslations.files.wordpress.com/2021/01/vol4-1.png?w=703",
  },
  {
    name: "Wandering Witch The Journey of Elaina Light Novel Vol 5",
    link: "https://mega.nz/folder/cLhw3ZBJ#cp5xmhmFXjvXX70ZVsHwDQ/file/sWow0DAB",
    image:
      "https://shinsengumitranslations.files.wordpress.com/2021/10/cover5.jpg?w=262",
  },
  {
    name: "Wandering Witch The Journey of Elaina Light Novel Vol 6",
    link: "https://mega.nz/folder/8PJV2LAR#ef6PNoUbZdKGWW90qLx6jw/file/1SgCWABQ",
    image:
      "https://shinsengumitranslations.files.wordpress.com/2022/06/vol6-cleaned.jpg?w=723",
  },
  {
    name: "My Teen Romantic Comedy SNAFU Light Novel",
    link: "https://mega.nz/folder/WUxgGJIA#aoWa5py58rxaZ2HBT7uIbA",
    image:
      "https://universonl.files.wordpress.com/2016/01/oregai1.jpg?w=231&h=335",
  },
  {
    name: "Your Name Light Novel",
    link: "https://drive.google.com/file/d/1jAVg_dmFcajZ1fSWXv06jYXZznC5uVPC/view",
    image: "https://hasutl.files.wordpress.com/2020/11/cover.jpg",
  },
  {
    name: "Alya Sometimes Hides Her Feelings in Russian Light Novel",
    link: "https://mega.nz/folder/aVQ02TLJ#aWDw9KH350WzsO4aaa_NUw",
    image:
      "https://m.media-amazon.com/images/I/81JddG6AU7L._AC_UF350,350_QL50_.jpg",
  },
  {
    name: "Alya Sometimes Hides Her Feelings in Russian Light Novel Vol 5",
    link: "https://mega.nz/folder/mlx1SLaS#IvuUwgwu5BPy0RNOix81Bg",
    image: "https://m.media-amazon.com/images/I/81SnOIF1SLL.jpg",
  },
  {
    name: "Alya Sometimes Hides Her Feelings in Russian Light Novel Vol 6",
    link: "https://mega.nz/folder/e9ojgJTQ#GcPG1harFRxQwh3JYXL5TA",
    image:
      "https://m.media-amazon.com/images/I/81H9bJxZmPL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Alya Sometimes Hides Her Feelings in Russian Light Novel Vol 7",
    link: "https://mega.nz/folder/zpAXDIBR#vj6WCnoCd9fHyIyqDuZoPA",
    image: "https://pbs.twimg.com/media/F0_t15uWwAA1_vK.jpg",
  },
  {
    name: "Alya Sometimes Hides Her Feelings in Russian Light Novel Vol 8",
    link: "https://mega.nz/file/LxIiSCQb#LRmyCl5ku_mPYfRuDJ8qxg1uSZowwNivkedHRAndVHA",
    image:
      "https://imgv2-2-f.scribdassets.com/img/document/730069741/original/88a7f563bc/1729829563?v=1",
  },
  {
    name: "Alya Sometimes Hides Her Feelings in Russian Light Novel Vol 9",
    link: "https://mega.nz/folder/vpYnmQyT#Du52YmTQ--iIxLss1UVgdA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWL-IYyVLFskNyagmevm4AAjoFG7IiVJK1sg&s",
  },
  {
    name: "Alya Sometimes Hides Her Feelings in Russian Light Novel Behind The Scenes",
    link: "https://mega.nz/folder/XsYTlYhS#V1ij2kBoyhQIPMKit0WWNQ",
    image: "../../img/roshidare.jpg",
  },
];
const searchInput = document.getElementById("searchInput");

const resultsList = document.getElementById("results");
var ul = document.getElementById("novelas");
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
  /* filteredData.forEach((item) => {
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

function crearNovelasCard(novelas) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = novelas.link;
  link.target = "_blank";
  link.style = "text-decoration: none; color: white;";
  li.style = "padding: 10px; margin-bottom: 5px;";

  const img = document.createElement("img");
  img.src = novelas.image;
  img.alt = novelas.name;
  img.width = 50;
  img.height = 50;
  img.style = "padding-right: 5px;";
  link.appendChild(img);

  const span = document.createElement("span");
  span.textContent = novelas.name;
  link.appendChild(span);

  li.appendChild(link);
  resultsList.appendChild(li);
  ul.classList.add("filtro");
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
