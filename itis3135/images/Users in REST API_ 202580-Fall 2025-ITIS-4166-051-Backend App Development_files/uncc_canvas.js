////////////////////////////////////////////////////
// DESIGNPLUS CONFIG                            //
////////////////////////////////////////////////////
// Legacy
var DT_variables = {
        iframeID: '',
        // Path to the hosted USU Design Tools
        path: 'https://designtools.ciditools.com/',
        templateCourse: '147464',
        // OPTIONAL: Button will be hidden from view until launched using shortcut keys
        hideButton: false,
    	 // OPTIONAL: Limit by course format
	     limitByFormat: false, // Change to true to limit by format
	     // adjust the formats as needed. Format must be set for the course and in this array for tools to load
	     formatArray: [
            'online',
            'on-campus',
            'blended'
        ],
        // OPTIONAL: Limit tools loading by users role
        limitByRole: false, // set to true to limit to roles in the roleArray
        // adjust roles as needed
        roleArray: [
            'student',
            'teacher',
            'admin'
        ],
        // OPTIONAL: Limit tools to an array of Canvas user IDs
        limitByUser: true, // Change to true to limit by user
        // add users to array (Canvas user ID not SIS user ID)
        userArray: [
            // Also update the following spreadsheet:
            // https://docs.google.com/spreadsheets/d/13eJlh9nNE7jsmmOR00LztFnFa13yhea6k1uGEdrRC7c/edit?usp=sharing
            //
            // CTL
            '21890',  // afrizze2
            '298024', // amharris
            '303787', // amharris_a
            '194198', // bstampe1
            '205147', // bstampe1_a
            '229534', // cmuellen
            '230177', // cmuellen_a
            '13743',  // epark17
            '122539', // epark17_a
            '17674',  // gstalli5
            '211876', // jbaile97
            '10277',  // jtrombly
            '288074', // jtrombly_a
            '30018',  // kbudhran
            '90785',  // kbudhran_a
            '20195',  // ktroscla
            '224488', // ktroscla_a
            '246788', // mairoldi
            '253189', // melanielewis1234@gmail.com
            '4106',   // nnstrace
            '69023',  // pcolema1
            '270301', // pcolema1_a
            '304081', // rburry
            '306267', // rburry_a
            '80147',  // rwahl
            '85269',  // rwahl_a
            // ITS
            '3483',   // jharr189
            '33',     // jharr189_a
            '32',     // jjmeier
            '3633',   // jjmeier_a
            '16500',  // jkeithle
            '337988', // jkeithle_a
            '34',     // malgozzi
            '136',    // malgozzi_a
            '4093',   // ntrick
            '4117',   // ntrick_a
            // Faculty
            '8269',   // abarsant
            '153828', // aberard1
            '64',     // abpolly
            '12705',  // acanevel
            '8364',   // adekort
            '20225',  // adils
            '6128',   // afernan2
            '4251',   // afquesin
            '224580', // agolmoha
            '8393',   // agood5
            '12848',  // aking86
            '194',    // alblanch
            '141695', // amickels
            '10394',  // amyers35
            '304491', // aoakley5
            '180',    // arbobyar
            '43962',  // asadaf
            '305849', // asmit715
            '7674',   // astylian
            '67005',  // aturovli
            '13716',  // avwray
            '10235',  // awhaley9
            '7359',   // awill143
            '19577',  // bbasu
            '12937',  // bbutle19
            '6850',   // bebjerre
            '163163', // bhaight
            '4780',   // bjhinso1
            '2063',   // bjring
            '67002',  // bknigh13
            '159670', // bpatte38
            '8558',   // bpotryku
            '28526',  // bstinso1
            '6679',   // bthiede
            '56601',  // bwagne12
            '224592', // bwashi17
            '185666', // bwoods22
            '11265',  // cboles3
            '6990',   // cbrown
            '7137',   // cbsincla
            '282856', // cflink
            '190',    // cfuente4
            '189802', // chalfman
            '8615',   // chmahaff
            '73161',  // cmelling
            '34952',  // cmerlin1
            '9204',   // cpiper1
            '31567',  // cranda10
            '337857', // croger91
            '21519',  // crwhites
            '28872',  // csgreen2
            '26359',  // cwells19
            '7716',   // cwhouck
            '6494',   // cwscott
            '49108',  // dalsto13
            '81',     // davils
            '320117', // dbeckman
            '37374',  // dbryan30
            '9068',   // dchen9
            '56722',  // ddalto14
            '62368',  // ddiegman
            '68',     // debrasmi
            '31566',  // dgardn32
            '88090',  // dkirkey
            '28820',  // dlnewell
            '58767',  // dmaxwel8
            '154231', // dnsummer
            '193474', // dowens
            '61451',  // dpowel24
            '6127',   // drowan
            '6470',   // dskerr
            '267394', // dsmit423
            '7641',   // dsruiz
            '2857',   // dtaylo72
            '8019',   // dwall
            '258095', // dzeidan
            '4124',   // ebyker
            '33356',  // egodlyre
            '19814',  // emille90
            '44108',  // emontana
            '8425',   // ephill28
            '7982',   // esheberl
            '35325',  // ewantlan
            '135440', // ewashbu1
            '187379', // fferdous
            '120827', // fferrant
            '6940',   // fgkatsan
            '59',     // fmartin3
            '6211',   // fmohiudd
            '172',    // frneale
            '164',    // gbanks3
            '210111', // gdepaul
            '156299', // geldridg
            '116528', // gethridg
            '297129', // gethridg_a
            '116457', // gshaw11
            '9109',   // hcoffey
            '34359',  // hdack
            '65',     // hramapra
            '9214',   // hstutts
            '6210',   // htaylo29
            '8432',   // ichiang1
            '7181',   // jagrymes
            '216115', // jande215
            '58957',  // jbahamon
            '4791',   // jbbyrd
            '16367',  // jbleds11
            '57610',  // jbowlin9
            '11797',  // jcary1
            '5092',   // jchattop
            '191',    // jcpaddoc
            '308198', // jdamron
            '8025',   // jdianesm
            '19030',  // jdippong
            '119443', // jgarci43
            '135438', // jgaub
            '4851',   // jgiersch
            '11624',  // jgooty
            '208100', // jhouse6
            '10041',  // jhumphr1
            '338068', // jjang6
            '40702',  // jjohn496
            '6344',   // jjszmer
            '40670',  // jkarp3
            '6911',   // jkgodfre
            '17896',  // jkim161
            '8138',   // jkimble
            '7290',   // jkshedd
            '6647',   // jlrolsto
            '8942',   // jlyerly3
            '26354',  // jmarin11
            '12694',  // jmassino
            '141030', // jmckee19
            '40308',  // jmill283
            '5649',   // jmorto29
            '7287',   // jmrobin2
            '6495',   // jmrobin4
            '19576',  // jpiatak
            '216240', // jprinci1
            '6582',   // jpvintin
            '38140',  // jreed58
            '222997', // jrobi202
            '2856',   // jrtaylor
            '50068',  // jsmithw1
            '6318',   // jsnelson
            '18359',  // jstogne1
            '69',     // jstrickl
            '296116', // jtayl278
            '297130', // jtayl278_a
            '401918', // jtucke87
            '58955',  // jwei8
            '4017',   // jwhit241
            '228098', // jwhit283
            '79294',  // jwindett
            '6199',   // kasala
            '80710',  // kdavin
            '4753',   // kdshue
            '155687', // kdutt1
            '16726',  // keickhof
            '29455',  // khammac
            '16616',  // kjason
            '11441',  // kjcarnes
            '7493',   // kkmurray
            '4998',   // klutteck
            '6645',   // kmclark1
            '21570',  // kredwar2
            '87733',  // ksaral
            '92131',  // ksarkar
            '308245', // kscanlo4
            '64015',  // kvimr
            '202949', // kwater12
            '282070', // kzacherl
            '6134',   // kzhao2
            '230240', // lapyatt
            '236859', // lbaker54
            '78839',  // lbaltean
            '117828', // lcolli36
            '179545', // lcuster
            '6759',   // ldedward
            '11407',  // ldymes
            '21808',  // lhames1
            '55600',  // lkearney
            '25715',  // lpowel28
            '6738',   // lquach
            '41985',  // lreinke
            '112407', // lschmid9
            '224833', // ltourign
            '266358', // lyoung57
            '4600',   // magordon
            '7301',   // malowder
            '20430',  // matkin29
            '78592',  // mbarne56
            '155393', // mbenjam3
            '127167', // mchen37
            '100082', // mcoope51
            '6273',   // mekropf
            '7515',   // memuesin
            '6497',   // mestearn
            '6518',   // methomp1
            '133711', // mfitzg21
            '2855',   // mfmckenz
            '8555',   // mhuang5
            '6950',   // mjcoffma
            '223618', // mjenki74
            '54',     // mjkhouja
            '7941',   // mjshephe
            '27916',  // mlamarca
            '86941',  // mlee173
            '223281', // mmack13
            '57',     // mmaher9
            '62344',  // mmason32
            '8392',   // mmatth36
            '13636',  // mmetzgar
            '25935',  // mmills44
            '31353',  // mperez19
            '6868',   // mpizzato
            '5991',   // mrand1
            '191430', // mroman7
            '6346',   // msjohar
            '7916',   // mteaker
            '222998', // mviale
            '4282',   // nanajjar
            '54973',  // nbarclay
            '151469', // ndawson2
            '8159',   // njcaste
            '2166',   // njennin4
            '141142', // nkorepan
            '401597', // nmchugh1
            '3849',   // ntriple1
            '35324',  // nyahyapo
            '91564',  // oshoghli
            '90800',  // pbanks4
            '90440',  // pfernan2
            '8743',   // pgaggl
            '7228',   // plthomps
            '38156',  // pmadsen
            '6155',   // ppilonie
            '7626',   // pthorshe
            '11396',  // ragosta
            '248580', // rbinabdu
            '9350',   // rboswel3
            '6894',   // rdraymer
            '267273', // rdudley5
            '103455', // ressenma
            '85966',  // rporrasa
            '8539',   // rrothber
            '11684',  // rsuclupe
            '9743',   // sabtbum
            '7124',   // sae
            '350242', // sbokash
            '161',    // sboyd
            '267059', // sbradl19
            '225589', // scacace
            '7225',   // sdhancoc
            '31746',  // seallred
            '4136',   // serevell
            '11785',  // seriley
            '240354', // shan27
            '7290',   // shippens
            '8631',   // sjbrais
            '122083', // skanczew
            '4994',   // slevens
            '11595',  // slistwan
            '3984',   // smichael
            '226803', // smiles16
            '158197', // smoor191
            '60456',  // smumford
            '35850',  // snorande
            '153289', // spettway
            '143766', // spotochn
            '12927',  // sputman
            '6144',   // sramse17
            '6191',   // ssalas
            '92254',  // ssmit392
            '16823',  // ssomayaj
            '61376',  // sspilla1
            '58547',  // svoigt
            '4145',   // swatts2
            '186425', // swilde2
            '6408',   // tamorin
            '6544',   // tcaldw16
            '106948', // tcrocke7
            '117485', // thales
            '7962',   // theafner
            '4131',   // thubbar1
            '8105',   // tjkitric
            '126272', // tktaylo1
            '61',     // tlmoore2
            '153827', // tmannahb
            '103019', // tmcguffi
            '13670',  // tmjohnso
            '179',    // trshirle
            '8401',   // tstarker
            '234111', // tterry10
            '119442', // twithro1
            '267373', // usilwal
            '308208', // vbredy
            '74494',  // vcavines
            '92551',  // vjbeaver
            '53494',  // vprabha2
            '92257',  // vrankin1
            '16820',  // vreynol2
            '7248',   // vvcifare
            '7208',   // wjdibias
            '8154',   // wjgarcia
            '301421', // wli31
            '20224',  // wmabel
            '8454',   // xhe8
            '50500',  // xmo2
            '115381', // xnewton
            '37376',  // xniu2
            '6705',   // ydiao
            '16391',  // yge
            '139164', // yguo16
            '7779',   // ylo1
            '153823', // yyan7
            '228254', // zchen32
            '4481'    // zldavid
        ]
};

// New
DpPrimary = {
    lms: 'canvas',
    templateCourse: '219772',
    hideButton: false,
    hideLti: false,
    extendedCourse: '', // added in sub-account theme
    sharedCourse: '', // added from localStorage
    courseFormats: [],
    canvasRoles: [],
    canvasUsers: [
        // CTL
        '21890',  // afrizze2
        '298024', // amharris
        '303787', // amharris_a
        '194198', // bstampe1
        '205147', // bstampe1_a
        '229534', // cmuellen
        '230177', // cmuellen_a
        '13743',  // epark17
        '122539', // epark17_a
        '17674',  // gstalli5
        '211876', // jbaile97
        '10277',  // jtrombly
        '288074', // jtrombly_a
        '30018',  // kbudhran
        '90785',  // kbudhran_a
        '20195',  // ktroscla
        '224488', // ktroscla_a
        '246788', // mairoldi
        '253189', // melanielewis1234@gmail.com
        '4106',   // nnstrace
        '69023',  // pcolema1
        '270301', // pcolema1_a
        '304081', // rburry
        '306267', // rburry_a
        '80147',  // rwahl
        '85269',  // rwahl_a
        // ITS
        '3483',   // jharr189
        '33',     // jharr189_a
        '32',     // jjmeier
        '3633',   // jjmeier_a
        '16500',  // jkeithle
        '337988', // jkeithle_a
        '34',     // malgozzi
        '136',    // malgozzi_a
        '4093',   // ntrick
        '4117',   // ntrick_a
        // Faculty
        '8269',   // abarsant
        '153828', // aberard1
        '64',     // abpolly
        '12705',  // acanevel
        '8364',   // adekort
        '20225',  // adils
        '6128',   // afernan2
        '4251',   // afquesin
        '224580', // agolmoha
        '8393',   // agood5
        '12848',  // aking86
        '194',    // alblanch
        '141695', // amickels
        '10394',  // amyers35
        '304491', // aoakley5
        '180',    // arbobyar
        '43962',  // asadaf
        '305849', // asmit715
        '7674',   // astylian
        '67005',  // aturovli
        '13716',  // avwray
        '10235',  // awhaley9
        '7359',   // awill143
        '19577',  // bbasu
        '12937',  // bbutle19
        '6850',   // bebjerre
        '163163', // bhaight
        '4780',   // bjhinso1
        '2063',   // bjring
        '67002',  // bknigh13
        '159670', // bpatte38
        '8558',   // bpotryku
        '28526',  // bstinso1
        '6679',   // bthiede
        '56601',  // bwagne12
        '224592', // bwashi17
        '185666', // bwoods22
        '11265',  // cboles3
        '6990',   // cbrown
        '7137',   // cbsincla
        '282856', // cflink
        '190',    // cfuente4
        '189802', // chalfman
        '8615',   // chmahaff
        '73161',  // cmelling
        '34952',  // cmerlin1
        '9204',   // cpiper1
        '31567',  // cranda10
        '337857', // croger91
        '21519',  // crwhites
        '28872',  // csgreen2
        '26359',  // cwells19
        '7716',   // cwhouck
        '6494',   // cwscott
        '49108',  // dalsto13
        '81',     // davils
        '320117', // dbeckman
        '37374',  // dbryan30
        '9068',   // dchen9
        '56722',  // ddalto14
        '62368',  // ddiegman
        '68',     // debrasmi
        '31566',  // dgardn32
        '88090',  // dkirkey
        '28820',  // dlnewell
        '58767',  // dmaxwel8
        '154231', // dnsummer
        '193474', // dowens
        '61451',  // dpowel24
        '6127',   // drowan
        '6470',   // dskerr
        '267394', // dsmit423
        '7641',   // dsruiz
        '2857',   // dtaylo72
        '8019',   // dwall
        '258095', // dzeidan
        '4124',   // ebyker
        '33356',  // egodlyre
        '19814',  // emille90
        '44108',  // emontana
        '8425',   // ephill28
        '7982',   // esheberl
        '35325',  // ewantlan
        '135440', // ewashbu1
        '187379', // fferdous
        '120827', // fferrant
        '6940',   // fgkatsan
        '59',     // fmartin3
        '6211',   // fmohiudd
        '172',    // frneale
        '164',    // gbanks3
        '210111', // gdepaul
        '156299', // geldridg
        '116528', // gethridg
        '297129', // gethridg_a
        '116457', // gshaw11
        '9109',   // hcoffey
        '34359',  // hdack
        '65',     // hramapra
        '9214',   // hstutts
        '6210',   // htaylo29
        '8432',   // ichiang1
        '7181',   // jagrymes
        '216115', // jande215
        '58957',  // jbahamon
        '4791',   // jbbyrd
        '16367',  // jbleds11
        '57610',  // jbowlin9
        '11797',  // jcary1
        '5092',   // jchattop
        '191',    // jcpaddoc
        '308198', // jdamron
        '8025',   // jdianesm
        '19030',  // jdippong
        '119443', // jgarci43
        '135438', // jgaub
        '4851',   // jgiersch
        '11624',  // jgooty
        '208100', // jhouse6
        '10041',  // jhumphr1
        '338068', // jjang6
        '40702',  // jjohn496
        '6344',   // jjszmer
        '40670',  // jkarp3
        '6911',   // jkgodfre
        '17896',  // jkim161
        '8138',   // jkimble
        '7290',   // jkshedd
        '6647',   // jlrolsto
        '8942',   // jlyerly3
        '26354',  // jmarin11
        '12694',  // jmassino
        '141030', // jmckee19
        '40308',  // jmill283
        '5649',   // jmorto29
        '7287',   // jmrobin2
        '6495',   // jmrobin4
        '19576',  // jpiatak
        '216240', // jprinci1
        '6582',   // jpvintin
        '38140',  // jreed58
        '222997', // jrobi202
        '2856',   // jrtaylor
        '50068',  // jsmithw1
        '6318',   // jsnelson
        '18359',  // jstogne1
        '69',     // jstrickl
        '296116', // jtayl278
        '297130', // jtayl278_a
        '401918', // jtucke87
        '58955',  // jwei8
        '4017',   // jwhit241
        '228098', // jwhit283
        '79294',  // jwindett
        '6199',   // kasala
        '80710',  // kdavin
        '4753',   // kdshue
        '155687', // kdutt1
        '16726',  // keickhof
        '29455',  // khammac
        '16616',  // kjason
        '11441',  // kjcarnes
        '7493',   // kkmurray
        '4998',   // klutteck
        '6645',   // kmclark1
        '21570',  // kredwar2
        '87733',  // ksaral
        '92131',  // ksarkar
        '308245', // kscanlo4
        '64015',  // kvimr
        '202949', // kwater12
        '282070', // kzacherl
        '6134',   // kzhao2
        '230240', // lapyatt
        '236859', // lbaker54
        '78839',  // lbaltean
        '117828', // lcolli36
        '179545', // lcuster
        '6759',   // ldedward
        '11407',  // ldymes
        '21808',  // lhames1
        '55600',  // lkearney
        '25715',  // lpowel28
        '6738',   // lquach
        '41985',  // lreinke
        '112407', // lschmid9
        '224833', // ltourign
        '266358', // lyoung57
        '4600',   // magordon
        '7301',   // malowder
        '20430',  // matkin29
        '78592',  // mbarne56
        '155393', // mbenjam3
        '127167', // mchen37
        '100082', // mcoope51
        '6273',   // mekropf
        '7515',   // memuesin
        '6497',   // mestearn
        '6518',   // methomp1
        '133711', // mfitzg21
        '2855',   // mfmckenz
        '8555',   // mhuang5
        '6950',   // mjcoffma
        '223618', // mjenki74
        '54',     // mjkhouja
        '7941',   // mjshephe
        '27916',  // mlamarca
        '86941',  // mlee173
        '223281', // mmack13
        '57',     // mmaher9
        '62344',  // mmason32
        '8392',   // mmatth36
        '13636',  // mmetzgar
        '25935',  // mmills44
        '31353',  // mperez19
        '6868',   // mpizzato
        '5991',   // mrand1
        '191430', // mroman7
        '6346',   // msjohar
        '7916',   // mteaker
        '222998', // mviale
        '4282',   // nanajjar
        '54973',  // nbarclay
        '401597', // nmchugh1
        '151469', // ndawson2
        '8159',   // njcaste
        '2166',   // njennin4
        '141142', // nkorepan
        '3849',   // ntriple1
        '35324',  // nyahyapo
        '91564',  // oshoghli
        '90800',  // pbanks4
        '90440',  // pfernan2
        '8743',   // pgaggl
        '7228',   // plthomps
        '38156',  // pmadsen
        '6155',   // ppilonie
        '7626',   // pthorshe
        '11396',  // ragosta
        '248580', // rbinabdu
        '9350',   // rboswel3
        '6894',   // rdraymer
        '267273', // rdudley5
        '103455', // ressenma
        '85966',  // rporrasa
        '8539',   // rrothber
        '11684',  // rsuclupe
        '9743',   // sabtbum
        '7124',   // sae
        '350242', // sbokash
        '161',    // sboyd
        '267059', // sbradl19
        '225589', // scacace
        '7225',   // sdhancoc
        '31746',  // seallred
        '4136',   // serevell
        '11785',  // seriley
        '240354', // shan27
        '7290',   // shippens
        '8631',   // sjbrais
        '122083', // skanczew
        '4994',   // slevens
        '11595',  // slistwan
        '3984',   // smichael
        '226803', // smiles16
        '158197', // smoor191
        '60456',  // smumford
        '35850',  // snorande
        '153289', // spettway
        '143766', // spotochn
        '12927',  // sputman
        '6144',   // sramse17
        '6191',   // ssalas
        '92254',  // ssmit392
        '16823',  // ssomayaj
        '61376',  // sspilla1
        '58547',  // svoigt
        '4145',   // swatts2
        '186425', // swilde2
        '6408',   // tamorin
        '6544',   // tcaldw16
        '106948', // tcrocke7
        '117485', // thales
        '7962',   // theafner
        '4131',   // thubbar1
        '8105',   // tjkitric
        '126272', // tktaylo1
        '61',     // tlmoore2
        '153827', // tmannahb
        '103019', // tmcguffi
        '13670',  // tmjohnso
        '179',    // trshirle
        '8401',   // tstarker
        '234111', // tterry10
        '119442', // twithro1
        '267373', // usilwal
        '308208', // vbredy
        '74494',  // vcavines
        '92551',  // vjbeaver
        '53494',  // vprabha2
        '92257',  // vrankin1
        '16820',  // vreynol2
        '7248',   // vvcifare
        '7208',   // wjdibias
        '8154',   // wjgarcia
        '301421', // wli31
        '20224',  // wmabel
        '8454',   // xhe8
        '50500',  // xmo2
        '115381', // xnewton
        '37376',  // xniu2
        '6705',   // ydiao
        '16391',  // yge
        '139164', // yguo16
        '7779',   // ylo1
        '153823', // yyan7
        '228254', // zchen32
        '4481'    // zldavid
    ],
    canvasCourseIds: [],
    plugins: [],
    excludedModules: [],
    includedModules: [],
    lang: 'en',
    defaultToLegacy: true,
    enableVersionSwitching: true,
    hideSwitching: false,
}

// merge with extended/shared customizations config
DpConfig = { ...DpPrimary, ...(window.DpConfig ?? {}) }

$(function () {
    const uriPrefix = (location.href.includes('.beta.')) ? 'beta.' : '';
    const toolsUri = (DpConfig.toolsUri) ? DpConfig.toolsUri : `https://${uriPrefix}designplus.ciditools.com/`;
    $.getScript(`${toolsUri}js/controller.js`);
});
////////////////////////////////////////////////////
// END DESIGNPLUS CONFIG                        //
////////////////////////////////////////////////////
$(document).ready(function(){
	$('label[for=pseudonym_session_unique_id_forgot]').html('Thank you');

	$('#allowed_extensions_container #explanation_nest').html('Enter a list of accepted extensions, for example: doc, docx, xls, xlsx, txt');

	// Hide delete and reset buttons on course settings page for non-admins
	if (/^\/courses\/[0-9]+\/settings$/.test(window.location.pathname)) {
		if($.inArray('admin',ENV.current_user_roles) == -1){
			$('a[href*=\'confirm_action?event=delete\']').hide();
			//$('a[href*=\'/reset\']').hide();
		}
	}

	var current_term = $("#section-tabs-header-subtitle").text();
	//if (current_term == 'Spring 2020') {
		if ($("#assignment_vericite_enabled").is(":checked")) {
			$('label[for=assignment_vericite_enabled]').show();
		} else {
			$('label[for=assignment_vericite_enabled]').hide();
		}
	//}

	var el = document.getElementById("default_email_id");
	while (el && el.parentNode) {
		el = el.parentNode;
		if (el.tagName && el.tagName.toLowerCase() == "tr") {
			el.style.display = "none";
		}
	}

   $('#forgot_password_form').find("button").click(function(){
		var forgot_password_url = "https://services.help.charlotte.edu/TDClient/33/Portal/Requests/TicketRequests/NewForm?ID=3PxB4GNoh3c_&RequestorType=Service";
	    window.open(forgot_password_url);
        return false;
	})
});


var SPSheader = '<div id="spsheader">School of Professional Studies</div>';
var spsheader = document.getElementsByClassName("ic-Login__body")[0];
var loginform = spsheader.innerHTML;
spsheader.innerHTML = SPSheader + loginform ;
var forgot_password_instructions = `If you need help logging in, click <strong>Request Password</strong> below and include the following:<br /><br />
<strong>Issue Category:</strong> Canvas<br />

<strong>Your email address:</strong> Type the email address used to register for your Continuing Ed course.
<br /><br />
<div id='sps_note'>NOTE:  If you have not tried to log in to Canvas with your temporary password, 
please try first before completing this form.  Your Canvas username is the same as your Continuing Education account username.  
Your temporary password is:  username + 49ER (ex. jdoe49ER)</div>
`;

document.getElementById("forgot_password_instructions").innerHTML = forgot_password_instructions;
//document.getElementsByTagName("label")[2].firstChild.data = "Email address";