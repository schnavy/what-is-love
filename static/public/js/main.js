// Static data from poems.json
const texte = [
  "Photo shared by Noor mohammadi on September 20, 2021 tagging @hijab_ismy_identity_, @hijab_modstyle, @hijab_girls_dpz, and @modest_fashions__. May be an image of 1 person and headscarf.",
  "Photo by #Suggest #Follow #Share #Music on September 21, 2021. May be an image of text.",
  "Photo by Erdem Fatih ÇOLAK on September 21, 2021. May be an image of 1 person, standing and sky.",
  "Photo by @saltedchai in Radharaman with @india, @vrindavan_experience, @vrindavan__lovers, @official_radharaman, @vrindavan_diaries, @natgeoindia, @iskcon_vrindavana, @shri_radharamana, @flute_of_radharaman, @sri.radharaman, and @vrindavan_marg.",
  "Photo shared by 𝕬𝖘𝖍𝖚𝖙𝖔𝖘𝖍 𝕾𝖍𝖆𝖗𝖒𝖆 𝕻𝖍𝖔𝖙𝖔𝖌𝖗𝖆𝖕𝖍𝖞™ on September 24, 2021 tagging @ashuu.sharma_. May be an image of flower and nature.",
  "Photo by Ankita Patil in Gujarat. May be an image of one or more people.",
  "Photo by Mithles Das Manik Puri in New Delhi.",
  "Photo shared by akshu3183 Fan Page on September 24, 2021 tagging @akshuu3183.",
  "Photo by ÂME on September 24, 2021. May be an image of standing.",
  "Photo by Oncle Bob in Oncle Bob.",
  "Photo by 𝙎𝙖𝙝𝙞𝙡 𝙏𝙖𝙥𝙖𝙧𝙞𝙖 in Shyam Lal College, University of Delhi.",
  "Photo by @fotosmobiledaca on September 24, 2021.",
  "Photo by Stellar_Insta on September 24, 2021.",
  "Photo by Memes on September 24, 2021.",
  "Photo by Mim ( م‎ ) Stones on September 24, 2021.",
  "Photo shared by Naykhattra on September 24, 2021 tagging @assam_big_shoutout.",
  "Photo by Katie Gamero on September 24, 2021.",
  "Photo by Jesus Saves ✝️ on September 24, 2021. May be an image of text.",
  "Photo by Cilento a Vela-Cilento Sail in Marina Di Camerota, Campania, Italy.",
  "Photo by 𝗡  𝗶  𝗰  𝗼  𝗹  𝗮  𝘀 in Bocca Cabana. May be an image of nature, twilight, beach, ocean and sky.",
  "Photo by J/L on September 24, 2021. May be a black-and-white image of 1 person.",
  "Photo by @snmlbg on September 24, 2021. May be an image of one or more people, people standing and outdoors.",
  "Photo by Alda Castro in En Algun Lugar del Mundo ..",
  "Photo by @pray.on.it.bro in New York City, N.Y.. May be an image of cloud and text that says 'Focus on God not the storm Matthew 14: 22:23'.",
  "Photo by mizldyfsh on September 24, 2021.",
  "Photo by Motivation success Hustle in Ji Xiang Ang Ku Kueh. May be an image of text that says 'I have a sad story too.. No one cares. Work harder. AST THERAPY MINDSET'.",
  "Photo by Politikkka in Lá Onde O Juízo Tá Em Falta. May be an image of 1 person and text that says 'antagon!sta Crusoé Bolsonaro elogia Barroso e diz que \"não tem por que duvidar do voto eletrônico\"'.",
  "Photo by Memories Photography in Tirunelveli. May be an image of one or more people and people standing.",
  "Photo by 𝒄𝒂𝒏𝒕𝒊𝒏𝒉𝒐_𝒅𝒆_𝒇𝒓𝒂𝒔𝒆𝒔.𝑺2 in Baixada Santista.",
  "Photo by 𝑵𝒂𝒓𝒆𝒏𝒅𝒓𝒂 𝒕𝒂𝒅𝒗𝒊•••🐼 in No Location.",
  "Photo by Domenico D'Alonzo in Vasto Costa dei Trabocchi e Dintorni per le Tue Vacanze. May be an image of twilight, nature, sky and ocean.",
  "Photo by Rishu_kumar_official in Patna, India.",
  "Photo by @cute_boy_515 in Gadarpur, India with @shoyab8780, @hulsi_dewqngan, @ashu_khan_890, @i_am_single_boy__2002, @queen_sahiba_8780, and @zoyakhan629115.",
  "Photo by Broadhollow Psychotherapy LLC in In These Streets!!!. May be an image of text that says 'can change him\" Girl did he shit his pants?'.",
  "Photo by ☠︎︎ ʜᴜssɴᴀɪɴ 𝚔𝚑𝚘𝚔𝚑𝚊𝚛101☠︎︎ on September 24, 2021.",
  "Photo by @all_is_the_self_ on September 24, 2021.",
  "Photo by @islamquotesandsayings on September 24, 2021. May be an image of text.",
  "Photo by Coffee Box in Razın.",
  "Photo shared by Nitesh + Pravina ❤️ on September 24, 2021 tagging @nitesh8046, @snaplensfotografia, and @ashwinipranav.",
  "Photo by Naaz Shayari on September 24, 2021.",
  "Photo by Umut.cba on September 24, 2021.",
  "Photo by klaudia in Brač, Croatia with @mateuszfalana.",
  "Photo by Shafiur Rahman🇺🇲 SEO(Expert) in Huston,Texax. May be an image of text that says 'D Hall The Ppl S... HOME VIDEOS PLAYLISTS CHANNE D Hall The Ppl Show Twitter SUBSCRIBE GET NOTIFIED ABOUT ALL NEW VIDEOS f Facebook Instagram D Hall The Ppl Show DHall Pp 94 subscribers SUBSCRIBE'.",
  "Photo by 💙𝙋𝙍𝘼𝘿𝙀𝙀𝙎𝙃 𝙎𝙑 on September 24, 2021. May be a closeup of 1 person, beard and indoor.",
  "Photo by Mojito Rose Soldan on September 24, 2021. May be an image of dog.",
  "Photo shared by Award Leicestershire deli on September 24, 2021 tagging @bhavini_21, @littlem_papergoods, @vinefarmdairy, and @kavitajp. May be an image of 1 person, child and outdoors.",
  "Photo by Magic Tranquility on September 24, 2021. May be an image of text that says 'CRYSTAL STORY SALE ON MY STORY NOW CRYSTALS A LITTLE CHEAPER THAN USUAL'.",
  "Photo by Ankal Memes on September 24, 2021. May be an image of 1 person, phone and text that says 'HANI @be_li hania Or karo online shopping'.",
  "Photo by Akbar Khalid in Lahore, Pakistan. May be an image of flower and text that says 'Zamioculcas zamiifolia a.k.a. zz Raven'.",
  "Photo by Francesca in Santo Wines.",
  "Photo by cute_mahu.. on September 24, 2021. May be an image of 1 person.",
  "Photo by Freaky Planet on September 24, 2021. May be an image of indoor.",
  "Photo by Terii ❤ on September 24, 2021. May be an image of 1 person.",
  "Photo by Salima El Abbassi on September 24, 2021.",
  "Photo by Rudransh Rajput on September 24, 2021. May be an image of sky and text that says 'R'.",
  "Photo by tecla B in Tecla B..",
  "Photo by ꧁༒☬ᶜᴿᴬᶻᵞkíllє®™r☬༒꧂ on September 24, 2021.",
  "Photo by Your story helps others in Austin, Texas.",
  "Photo by CHALO  💫 in Ciudad Autónoma de Buenos Aires. May be an image of text that says 'SI NO TE SUMA... QUE NO TE RESTE SI ESTAS LEYENDO ESTO ES POR ALGO SOY_CHALO'.",
  "Photo shared by 🅢 🅞 🅝 🅐 🅛     🅰🅽🆃🅾🅽🆈 on September 24, 2021 tagging @instagram, @cristiano, @therock, @nature, and @nycsonal. May be an image of flower and nature.",
  "Photo by ఌ︎ᵇᵇʸᴍᴏᴄʜ☽︎ on September 24, 2021. May be an image of 1 person.",
  "Photo shared by La Rubrica delle Donne ♀️👩 on September 24, 2021 tagging @flowers, @pianteinpentola, @mondo_piante, and @qualcosadipersonale. May be an image of flower and text that says 'RUBRICA FIORI Gardenia La Gardenia è un fiore da diversi significati in base alle situazioni. Generalmente ha il significato di sincerità. Ma, se ad esempio, è utilizzato per addobbare la chiesa per un matrimonio assume il significato di purezza e gioia. Mentre, in alcuni paesi, forse per il suo colore giallo quando appassice simboleggia la bellezza che svanisce.'.",
  "Photo by Valentina Ronsisvalle in Casale Monferrato. May be an image of strawberry, cake, flower and indoor.",
  "Photo by Stella ⭐️ in Anglet. May be a closeup of cat.",
  "Photo by kitty 🐈 on September 24, 2021. May be an image of cat.",
  "Photo shared by 𝙎𝘼𝙍𝘼𝙏𝙃✨ on September 24, 2021 tagging @axnnn.r, @_me_ammoos_, @__.karthikprem.__, @_ajnair_, @_.gtm.__, @_arya_aroos, @praxav.__, @_.ashtamii._, @error._44, @artila__, @_.manikaaa._, @_mr_biscuit_, @bikers__of__kerala__, @_.mdhv._, @_arjun_s_nair, @aravind._s.u, @_.gangaa_._, @_vikku._._, @aiswarya_nair_, and @reshmanair._. May be an image of one or more people, motorcycle and outdoors.",
  "Photo by Baxter on September 24, 2021.",
  "Photo by Δανάη Δημητριάδου on September 24, 2021. May be an image of 1 person.",
  "Photo by 𝐘𝐀𝐍𝐆𝐀𝐌𝐎𝐓𝐎 🟢🟢🟡🟡🔰✍️ on September 24, 2021.",
  "Photo by Why aren’t you following me? 🥰 on September 24, 2021. May be an image of text that says 'She said your so small you should be able to park in the handicap spot'.",
  "Photo by Hitesh Meena on September 24, 2021.",
  "Photo by Irusha Damith on September 24, 2021.",
  "Photo shared by Mee Meenoy on September 24, 2021 tagging @hero_ft, @josephinelangford, and @aftermovie.",
  "Photo by Uniq on September 24, 2021.",
  ".\n. \n. \n-\n-\n-\n-\n-\n-\n#gay #instagay #gayboy #bisexual #love #picoftheday #sexymen #instagood #boy #gayman #photooftheday #gayusa #travel #gayguy #gaymexico #gayhot #instagram #gaymadrid #selfie #happy #gaymen #photography #beard #gaylove #gaylife #fashion #gaycolombia #blackandwhite #followme #eurogay",
  "Photo by PRERAK SHIRIMALI in Dungarpur with @prerak_o1. May be an image of 1 person, standing and footwear.",
  "Photo by हिमांशु सिंह राजपूत🚩 in My lifestyle. May be an image of one or more people.",
  "Photo by OCHOA on September 22, 2021. May be an image of jewelry.",
  "Photo by Amazin Doggy on September 22, 2021.",
  "Photo by Dev on September 22, 2021.",
  "Photo by Thamu_24 in Silver Stone Park Resort with @gopi_srinivasan, @pon_rahul_m, @sathish_ram_sr7, @akash___ak10, @blazesiva, @r_o_h_i_t_h_2_1, @abimanyu_sanjay, @madhu.kriss.fl, @im__kavi__, and @steven_harish_.",
  "Photo shared by ミ★ 𝘏𝘢𝘯𝘥𝘮𝘢𝘥𝘦 𝘢𝘳𝘵𝘦𝘧𝘢𝘤𝘵𝘴 ★彡 on September 22, 2021 tagging @inara_arts_. May be art of 1 person, indoor and text that says 'she leavesa little sparkle wherever sho goes INARA ARTS'.",
  "Photo by Calavera Co. ☠️ on September 22, 2021.",
  "Photo by Flutuante Nossa Praia on September 22, 2021. May be an image of sky and text that says 'NOSSAA Na nossa praia Por é lindo! do Sol'.",
  "Photo by Yaruschka in Krk, Croatia. May be an image of body of water.",
  "Photo shared by Vaishnavi Patil on September 22, 2021 tagging @vohobeauty. May be a closeup of one or more people and text.",
  "Photo shared by Zak Shaffer on September 22, 2021 tagging @kstylers.",
  "Photo by David.minss on September 22, 2021. May be an image of one or more people and people standing.",
  "Photo by Roupas e Calçados femininos 👠 in Pacajus, Ceara, Brazil. May be an image of purse and text.",
  "Photo shared by たかはし なみ on May 30, 2021 tagging @balenciaga. May be an image of footwear.",
  "Photo by Can K. Natur - privat in Forst Zinna.",
  "Photo by Ｒｏｂｅｒｔｏ on September 20, 2021. May be an image of indoor.",
  "Photo by Evryday wear on September 21, 2021. May be an image of jewelry.",
  "Photo by @psychosisbutsexy on September 21, 2021. May be an image of one or more people.",
  "Photo by Gilbert Holdrinet in Lac Edja with @eniglizma. May be an image of one or more people and body of water.",
  "Photo by Lovaci on September 21, 2021. May be an image of crochet and purse.",
  "Photo by 🖤pooja.yadav.🖤 on September 21, 2021. May be an image of 1 person and jewelry.",
  "Photo by Esquinna da Lingerie on September 21, 2021.",
  "Photo shared by Hãlkât çhøræ bêtü on September 21, 2021 tagging @detective.sachin_gupta, @divyeshnigam10, @faisu_rampur, @om_pandey559, @sanjanagupta2003, @anuj__rampur, @spriyanka0605, @shail7617, @kanchan_vishwakarma99, @khan_kaish__01, @dipali.gupta_091, @shahidmansuri4907, @killar_king_0s, @defalter_thakurain_80, @agraharishagun, @cutex__sanaya__, @akanksha__agnihotri__, @miya_bhai1952, @pagal_girl_36_50, and @sandeep_saini7225. May be an image of one or more people, beard, people standing, sunglasses and sky.",
  "Photo by Kiwi on September 21, 2021. May be a closeup of cat.",
  "Photo by 𝐼𝑠𝑎 🎀 in Little Bay, New South Wales, Australia. May be an image of one or more people, people standing and outdoors.",
  "Photo by ABC on September 21, 2021.",
  "Photo by Sherry Cheng 鄭雙雙 on September 21, 2021. May be an image of 1 person and sitting.",
  "Photo by Richard Hipkin in Benvie Garden Karkloof with @yvettikin. May be an image of one or more people, people standing, flower, nature and tree.",
  "Photo by @herzwill.bd on September 21, 2021.",
  "Photo by 𝒴ℯ𝒾𝓃𝓃𝓎 𝓀𝒶𝓉𝒽ℯ𝓇𝒾𝓃ℯ 𝓉𝓇𝒾𝓁𝓁ℴ𝓈 in Corregimiento Carmen de Nazareth.   Municipio de Salazar de las Palmas.. May be an image of one or more people, people standing and body of water.",
  "Photo by نی نی بکر on September 21, 2021.",
  "Photo by Pizzaria Toscana on September 21, 2021. May be an image of pizza and text that says 'QUEM PROVA NUNCA esquece!! PIZZARIA TOSCANA'.",
  "Photo by Ирина on September 21, 2021. May be a closeup of 1 person and outdoors.",
  "Photo by HINA on September 21, 2021. May be an image of flower and text that says 'Your love is the best part ofmy life. There is nobody except you'.",
  "Photo by Klaudia 👧🏼 in Italy with @domenicolofaro.",
  "Photo shared by Ajibsayar__ on September 21, 2021 tagging @rohit.words_.",
  "Photo by ❤😍CUTE GIRL❤🥰 on September 21, 2021.",
  "Photo by Amanda Belato on September 21, 2021.",
  "Photo by 𝓛𝓲𝓷𝓭𝓪-𝓔𝓵𝓲𝓼𝓪𝓫𝓮𝓽𝓱 in Château de Kériolet.",
  "Photo by 𝚂𝚝𝚎𝚏𝚊𝚗𝚘 𝙿𝚘𝚕𝚕𝚒𝚗𝚊 in HMS Warrior. May be an image of outdoors.",
  "Photo by Madjory Castro Candiotti on September 21, 2021. May be a closeup of 1 person.",
  "Photo by 【﻿Ｓｈｉｆｔ　Ｈａｐｐｅｎｓ】 in Panama City, Panama. May be an image of 1 person, sunglasses, skyscraper and body of water.",
  "Photo by Cars Info on September 21, 2021.",
  "Photo by Findus the Van 🚐 in Rheinland-Pfalz, Germany.",
  "Photo by ਬਲਦੇਵ🦋🥀 in Salkanpur Temple with @instagram, @oye_its_prank, @__.rahul.___07, @its_rajkamal__07, @oye_indori, @rohittt_09_, @yashraj._07, @itz_shivay_07, @k_u_l_d_e_e_p__13, @mr_sanjay.jamra_143, @jay_joher____07, and @abhi0___07.",
  "Photo by Fanindra Dev bhardwaj in Jaipur, Rajasthan.",
  "Photo by IL VIAGGIOSAURO in Dubai, UAE with @viaggiosauro. May be an image of food.",
  "Photo by Flick Merauld on September 21, 2021.",
  "Photo by Pamonharia Ki Delícia in Caldas Novas, Goias, Brazil. May be an image of 1 person and text that says 'Tudo é motivo Pamonha para comer'.",
  "Photo shared by Insta Indian Male Models on September 21, 2021 tagging @instagram, and @hot_indian_guys_.",
  "Photo by Nandan Arora in New Delhi.",
  "Photo by ashlilcouple on September 21, 2021. May be an image of 1 person.",
  "Photo by dadestore in Concept by DaDé Via Europa ,19 with @save_the_duck.",
  "Photo by سرویش💜⚡ in Mumbai, Maharashtra with @instagram, @swapnil_kamble.09, @whassssup_.mitesh, and @whasssup_.sarvesh.",
  "Photo by Erum Nisar on September 21, 2021. May be an image of text that says 'In spirituality, you become very personal with God.It's a personal relationship with God SUFI MASTER YOUNUS ALGOHAR WATCH ALRA TV'.",
  "Photo by @shyam_sansaar on September 21, 2021.",
  "Photo by IFBB Liechtenstein in Malta with @ifbb_official, @decelisralph, and @ifbbelitepro_official.",
  "Photo by Blackheart Financial on September 21, 2021.",
  "Photo by لُطفي in Van Stapele Koekmakerij with @vanstapele.",
  "Photo by FAHIZURY DELGADO on February 13, 2021. May be an image of 1 person, balloon, cake, indoor and text that says 'NUESTRO BAUT SM 04'.",
  "Photo by songesdenuits on July 26, 2021. May be an image of sky and text.",
  "Photo by SARA  TACT in Alkout Mall Fahaheel. May be an image of outdoors.",
  "Photo by 🇲‌🇷‌ 🇭‌🇪‌🇲‌🇦‌🇳‌🇹‌ 🇸‌🇮‌🇳‌🇬‌🇭‌ on September 21, 2021. May be a closeup of 1 person and beard.",
  "Photo by 朴秀姸 in 영도. May be an image of 1 person, standing and sky.",
  "Photo by ✞ ᐯ|ㄥ乇几 ✞ in Nagpurian Orange City - NOC with @instagram, @pappya_gaikwad_official, @yashofficial__skrillo, @_palash.kamble_06, @akiphotography_07, @_mr.waghmare, @yashwaghmare_, @___shubhu.____, @___.apurvaaa.__, @mr.aashay_, @the_morning_starr__, @ayush__.ak, @itz_niharika_22, @lightroom__presets_, @aaruuuuu_._, @neha_srivastava__09, and @yashh.yt.",
  "Photo by kammal kadai | by ayshu on September 21, 2021. May be an image of jewelry.",
  "Photo by ❤️Sky lover❤️ on September 21, 2021.",
  "Photo shared by Alise on September 21, 2021 tagging @karina_plumane.",
  "Photo by Dilkhush meghwanshi in Rajasthan Royal City, KOTA with @instagram, @rahul_shrimali_official, @team_hunter07, @chirag_agarwal___official, @kiittuu_official_rb, @its_amritakhanal, @chirag_borda_, @moin_hunter07, @priyankafire_rb.queen, @manisha_official7.rb, @i_m_aamir_hunter_07, @heenasha_meghwal, @disha__marwadi, @dishadas5387, @rb_himanshutaparwal, @rb_tripathi_arya, @savan_official_rb, @editor_jk_kharol, @rb_supporter_0874, and @instra.ke_meghwal.",
  "Photo by ᴊúʟɪᴀ ᴄᴀʀᴠᴀʟʜᴏ • ᴛᴜʀɪꜱᴍᴏ • ᴍᴋᴛ on September 21, 2021.",
  "Photo by Lily1999🎀 on September 21, 2021.",
  "Photo by 🔥𝐂𝐫𝐞𝐳𝐲 𝐆𝐮𝐣𝐣𝐮_🧡 on September 21, 2021.",
  "Photo by @christopherjosephwerstler98 on September 21, 2021.",
  "Photo by Sexy_Les_Françaises on September 21, 2021.",
  "Photo by Berna Yağmur Erdal on September 17, 2021. May be an image of 1 person, standing and outdoors.",
  "Photo by Krishna Sharma on September 17, 2021. May be an image of 1 person, sunglasses, ocean, sky and beach.",
  "Photo by RM Bodhi in Versailles, Missouri. May be a cartoon of ‎text that says '‎Creativity Page of Wands My words have power now them wisely Connect Two of Swords OVERthnk eekinner consciousnessto decide Express Queen of Swords Queen of Pentacles Attention my physical& material house Observe Nine of Wands Perseverejust little finish line near Purpose Ace of Wands FINISH Refine arriving Intend Seven of Wands Stand my ground with confidence Ground ا‎'‎.",
  "Photo by Masaż Poznań Adrian Bogoński in Masaż Poznań Adrian Bogoński - Masaż Leczniczy i Relaksacyjny with @adrian_bogonski. May be an image of text that says 'POMYSŁ NA PREZENT DATA Voucher NA MASAŻ DLA DLA'.",
  "Photo by Riháñsh ßãhâb in Faridabad Smart City.",
  "Photo by Liberty Music on September 17, 2021. May be an image of 1 person.",
  "Photo by 𝙹𝚞𝚜𝚝_𝙰𝚔𝚛𝚒𝚝𝚒 in Bhopal, Madhya Pradesh.",
  "Photo by 🌹Jenchulichaeng🌹 on September 17, 2021.",
  "Photo by Marvette on September 17, 2021.",
  "Photo by VonVroni on September 17, 2021.",
  "Photo by 𝐊𝐎𝐑𝐉𝐀𝐀𝐍 on September 17, 2021.",
  "Photo by allam_kotimeera on September 17, 2021.",
  "Photo by Taher mohammed on September 17, 2021.",
  "Photo by Alesha Jewellery on September 17, 2021.",
  "Photo by eli_khan on September 17, 2021.",
  "Photo by ❀فـصـ༅࿆٭ـــ؏ــ۪ونه₂₀₂₂❤️⑅⃝ـ on September 17, 2021.",
  "Photo by Taylor José Menezes Júnior ⭕ in Monumento Da Cruz Caída - Salvador with @trans, @trans_cendendo, @universolgbti, @orgulho_trans, @divulga_lgbt_lgbt, @transgender_world_, @orgulhotrans, @transgeneros.pag, @transbrasil.2, @transgenderspride, @homens_trans_oficial, @ftm_trans12, @transmemesbr, @transgeneros_divulga, @transdesalvador, @trans_divulga_, @trans_bluee, and @orgulho.homenstrans.",
  "Photo by Outfitsgalore on September 17, 2021.",
  "Photo shared by Noni on September 17, 2021 tagging @bubble.house.waffles.",
  "Photo by ꧁༒☬𝓐𝓷𝓴𝓲𝓽☬༒꧂ in Jaipur, Rajasthan with @__mr__ankit__007.",
  "Photo by ∆ U R O R ∆ | ▲▽ in Madrid, Spain.",
  "Photo by 🆂🅷🅰🅼🅼🆄_🅳🅰🅻🆉 on September 17, 2021.",
  "Photo by 𝓓𝓪𝓻𝓲𝓷𝓪 in Vinnitsa with @vlasova_13453. May be an image of 3 people, long hair, people standing, outdoors and text.",
  "Photo by 김예분 on August 28, 2021. May be an image of one or more people, flower and indoor.",
  "Photo by 𝓼𝓽𝓮𝓵𝓵𝓪 ☀️ on August 29, 2021. May be an image of dog and indoor.",
  "Photo by 우연히 우주 💓 on August 29, 2021. May be an image of 1 person, standing, indoor and text.",
  "Photo by Inked by G. on August 29, 2021. May be an image of rose.",
  "Photo by Typewriter's Ink on August 29, 2021.",
  "Photo by a t-shirt on August 29, 2021.",
  "Photo by Andy Wesley on August 29, 2021.",
  "Photo by rara on August 29, 2021.",
  "Photo by Siddu Goud... on August 29, 2021.",
  "Photo by Jake Pissy on August 29, 2021.",
  "Photo shared by aayu❤️ on August 29, 2021 tagging @_aayushibhatnagar. May be an image of 4 people.",
  "Photo by Raj on August 29, 2021. May be an image of 1 person.",
  "Photo by Ufuk on August 29, 2021.",
  "Photo by #💟Sree Sreejith in Kizhakkanmala Sreekrishna Swami Kshethram with @looney_warrior_, @dom_zel___, @the_.jinn_.roni7, @dream_catcher1962003, @__sparky96, @aqua_king_x._.eno, and @_the_stolen_queen_.",
  "Photo shared by ..ഗോകുലം.. on August 29, 2021 tagging @salem_2k_models, @salem_freakzzzzzs_, @salem_than_king, @salem_2k_kings, @salem_2k_trendzz, @salem.models.king.page, @salem_best_pics, @salem_freakzzzz, @tn_kings_queens_modelz, @salem_2k_pasanga__, @salem_2k.models, @pic_of_models_, @model_2k_of_salem, @salem__2k__models__, @attitudekiller__03, @salem_2k_pulligo, @2k_salem_pullingo, @2k_models_contest, @tn_photo_modelz, and @_tamil_trending_models_.",
  "Photo by Jim Andrade in Denver, Colorado. May be an image of 1 person and sunglasses.",
  "Photo by Izadora Piegas in Porto Seguro. May be an image of 1 person, sunglasses, ocean, beach and sky.",
  "Photo by The land of Flame and Ice in Елизово Камчатский край. May be an image of nature.",
  "Photo by ViDeeTravels in Dolmabahçe cafe. May be an image of dessert and indoor.",
  "Photo by MANON in Annecy. May be an image of body of water and text that says 'CA PONT DES AMOURS'.",
  "Photo by LS on August 28, 2021. May be an image of sky.",
  "Photo by @bagheera_the_shepherd_ on August 28, 2021. May be an image of dog.",
  "Photo by Adilson Lanches🍔 in Vila São Sebastião, Mogi das Cruzes.",
  "Photo by Valerie Kudjoe on August 28, 2021.",
  "Photo by JUSTINA on August 28, 2021. May be an image of 1 person.",
  "Photo by Business Consultant on August 28, 2021. May be an image of 1 person.",
  "Photo by Bruna Vasconcelos Dias in Sinop, Brazil. May be an image of 1 person.",
  "Photo shared by 💅🏼SEJA UMA MANICURE E PEDICURE on August 28, 2021 tagging @unhas_paolachaves.",
  "Photo by Bashcv - تصميم سيّر ذاتية on August 28, 2021.",
  "Photo by Paloma Oliveira in Pedra Caida Carolina Maranhão.",
  "Photo by Lubo Vas on August 28, 2021.",
  "Photo shared by Pedro Agostinho Cruz on August 28, 2021 tagging @jesuspeiroofficial, @jesuspeiroporto, @anasofia_monteiro, and @quintadoalferes.",
  "Photo by ivet corbacho on August 28, 2021.",
  "Photo by photographe | du Québec in Sherbrooke, Quebec.",
  "Photo by Bark In Style Boutique Ltd 🧸🧚🏼 on August 25, 2021.",
  "Photo by Cookiestosayit in El Paso, Texas with @ttuhscep.",
  "Photo shared by Nisami B. 🦅 on August 28, 2021 tagging @_der.rostocker_, @ole_sbt, @annaluisa.1302, @lukas.prw, @_curry109, @offical_jxnny, @doss_enrico, and @philipphro20. May be an image of 1 person, standing and indoor.",
  "Photo shared by 🇪🇬⭐️👮 Ahmed peh💪 on August 28, 2021 tagging @raffat_nooreldeen. May be an image of 2 people, people standing and indoor.",
  "Photo by 𝕮𝖗𝖎𝖘𝖙𝖎𝖆𝖓 in San Marino Comics with @mamifit88. May be an image of 2 people and tree.",
  "Photo by @medievalknight_ss on August 28, 2021.",
  "Photo shared by Mai Ebrahim 𓆃 on August 28, 2021 tagging @lensball. May be a closeup of nature and body of water.",
  "Photo by KRISTIN ANDERSON on August 28, 2021. May be an image of 1 person, fire and outdoors.",
  "Photo by 𝐜𝐮𝐭𝐞𝐥𝐢𝐭𝐭𝐥𝐞𝐛𝐚𝐛𝐢𝐞𝐞𝐬™ on August 28, 2021. May be an image of 1 person, baby and indoor.",
  "Photo by Anif on August 28, 2021. May be a closeup of 1 person.",
  "Photo by that_friday_born💦💦😉 on August 28, 2021. May be an image of 1 person.",
  "Photo by Real Bitches 0nly🖤 on August 28, 2021. May be an image of text that says '1/4 Keep everything private until it's permanent.'.",
  "Photo by Simona Giaconella on August 28, 2021. May be an image of 3 people.",
  "Photo by eat plants, not animals 🌱 in Opole.",
  "Photo by Ayli  Davletshina on August 28, 2021.",
  "Photo by BangtanPurpleSea on August 28, 2021. May be a closeup of 1 person.",
  "Photo by PINK&BLUE taller textil on August 28, 2021. May be an image of shorts.",
  "Photo by Isabele Bernardo in Cerro Cora. May be an image of 1 person.",
  "Photo by Ciara Fry in University of Illinois Urbana-Champaign.",
  "Photo by @louisa.werlder on August 28, 2021.",
  "Photo by Leann in Falls Church, Virginia.",
  "Photo by oussama😎 in Hôtel Eden Andalou Suites, Aquapark & SPA. May be an image of 1 person, standing, wrist watch and indoor.",
  "Photo by Anthony in Paris, France with @vans, @bershka, @palmangels, @closedofficial, and @dior. May be an image of ‎1 person, standing, outdoors and ‎text that says '‎RUE L'ANCIEN VIGNOBLEDE PASSY VIGNES م‎'‎‎.",
  "Photo by SEOULBOX on August 28, 2021. May be an anime-style image.",
  "Photo by MADDISON YATES in Honolulu, Hawaii. May be an image of one or more people, people standing and outdoors.",
  "Photo by Paulina on August 28, 2021. May be an image of 1 person and baby.",
  "Photo by Rooz Style Street ♦️ on August 28, 2021. May be an image of rose and indoor.",
  "Photo by CR Store multimarcas in Ouricuri, Pernambuco, Brazil.",
  "Photo by @durazniito.ff on August 28, 2021.",
  "Photo shared by @telesm___doaa on August 28, 2021 tagging @world____end.",
  "Photo by serramusic on August 28, 2021.",
  "Photo by A.r.c.h.i.t.e.c.t on August 28, 2021.",
  "Photo by Uxi_Sabanas in San Andrés Cholula, Puebla, Mexico.",
  "Photo by fashiongirl on August 28, 2021.",
  "Photo by Tarin Rataic on August 28, 2021.",
  "Photo by Rocio Robles Rodriguez on August 28, 2021.",
  "Photo by Royal Fashion on August 28, 2021.",
  "Photo by Corine on April 22, 2019.",
  "Photo by Dannyelle Borges on August 28, 2021. May be a closeup of 1 person.",
  "Photo by ♡ 𝐃𝐈𝐕𝐔𝐋𝐆𝐔𝐄 𝐀𝐐𝐔𝐈 𝐒𝐔𝐀 𝐋𝐎𝐉𝐀 ♡ on August 28, 2021. May be an image of 2 people and people standing.",
  "Photo by louis vuitton collectionz on August 28, 2021. May be an image of cosmetics and indoor.",
  "Photo shared by Segue você on August 28, 2021 tagging @grungeccy, @encantumblr, and @bloominfada. May be an image of 1 person and standing.",
  "Photo by Black Nurse Practitioners on August 28, 2021. May be an image of 1 person, standing and text that says 'TT COLLEGE OF DENTISTRY'.",
  "Photo by Reino dos descontos on August 28, 2021. May be an image of 1 person.",
  "Photo by Taylor Peterson in Top Shape Gym Cedar Rapids with @chloetrca, and @chlochlosfit. May be an image of 2 people and people standing.",
  "Photo by Princess Store Pasto in Pasto, Narino. May be an image of text that says 'Î @princess storepasto'.",
  "Photo by jishu on August 28, 2021. May be an image of 1 person.",
  "Photo by Eyad Hourani Official on August 28, 2021. May be an image of 2 people.",
  "Photo by Nature_is_beautiful in Швейцарские Альпы.",
  "Photo by Mamie Odette on August 28, 2021.",
  "Photo by Grab Deals on August 28, 2021.",
  "Photo by DRIP in London, Unιted Kingdom.",
  "Photo by @soulsearchinmama555 on August 28, 2021.",
  "Photo by Slickk KR on August 28, 2021.",
  "Photo by Didito Tour 🏝☀️ in Praia Grande,arraialdo Cabo with @buggyadventure_arraial, and @babybuggyarraial.",
  "Photo by Mensagens Bíblicas on August 28, 2021.",
  "Photo by Franz Nuebel in Hamburg-Eppendorf with @elvis, @nina_la_vida_schlager, and @ninalavida_offizielle_fanseite.",
  "Photo by Hyago Moraes in Belém, Brazil.",
  "Photo by ƘЄԼԼƳ ƘƛƲƑMƛƝ on August 28, 2021.",
  "Photo by S U D E S    A W A N on August 28, 2021. May be an image of 1 person, standing and outdoors.",
  "Photo by MANON in Annecy. May be an image of body of water and text that says 'CA PONT DES AMOURS'.",
  "Photo by Werner Kentrup in Hotel Clostermanns Hof. May be an image of 2 people, people standing and outdoors.",
  "Photo by Angela Mary Magick on August 28, 2021. May be an image of flower.",
  "Photo by Amanda Eberhardt in Núcleo De Casas Enxaimel. May be an image of 1 person, standing and outdoors.",
];

const isExhibitMode = false;

let audio = document.querySelector("audio");

document.addEventListener("click", (e) => {
  if (!audio.paused) {
    audio.pause();
  } else {
    audio.play();
  }
});

document.addEventListener("touchend", (e) => {
  if (!audio.paused) {
    audio.pause();
  } else {
    audio.play();
  }
});

let content = document.querySelector("#col1");
let editedAlts = [];
let index = 0;

for (let i = 0; i < 200; i++) {
  if (typeof texte[i] == "string" && texte[i].includes("May be")) {
    let string = texte[i]
      .substring(texte[i].indexOf("May"))
      .replace("an image of ", "");
    editedAlts.push(string);
  }
}
console.log(editedAlts);

let textElements = [];

for (let i = 0; i < editedAlts.length; i++) {
  textElements[i] = createNeuesElement("p", i, "poem");
  textElements[i].textContent = editedAlts[i];
}

newLine();
setInterval(() => {
  newLine();
}, 4000);

let artefacts = [" <3", "(?)", "..", "?!", "*"];

setInterval(() => {
  let r = Math.floor(Math.random() * editedAlts.length);
  let r2 = Math.floor(Math.random() * artefacts.length);
  textElements[r].textContent += artefacts[r2];
}, 100000);

function newLine() {
  let r = Math.floor(Math.random() * editedAlts.length);
  let curr = textElements[r];
  content.prepend(curr);
  setTimeout(() => {
    curr.classList.add("visible");
  }, 300);
  index++;
  if (index > 100) {
    index = 0;
  }
  console.log(r);
}

let title = document.querySelector("#title");
let col1 = document.querySelector("#col1");
let col2 = document.querySelector("#col2");

title.addEventListener("mouseenter", (e) => {
  toggleInfos("show");
});

title.addEventListener("mouseleave", (e) => {
  toggleInfos("hide");
});

function createNeuesElement(type, id, klasse) {
  let elem = document.createElement(type);
  elem.setAttribute("id", id);
  elem.setAttribute("class", klasse);
  return elem;
}

function toggleInfos(action) {
  let infos = document.querySelector(".info");
  if (action == "show") {
    infos.style.display = "inline-block";
  } else {
    infos.style.display = "none";
  }
}
