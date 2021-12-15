var pytania = [
    {
id: 0,
question: "W silniku z bezpośrednim wtryskiem paliwa powstanie oblodzenia w systemie zasilania: ",
odpowiedzPISEMNA: "nie",
wyjasnienie: "Pytanie dosyć niejasne, można podejrzewać, że chodzi po prostu o brak gaźnika. Pomimo, że lodzenie jest możliwe, silniki z wtryskami są mniej narażone na lodzenie, niż te z gaźnikiem.",
odpowiedz1: "jest niemożliwe", //pierwsza zawsze poprawna
odpowiedz2: "jest możliwe tylko przed pompą paliwową",
odpowiedz3: "jest możliwe tylko za pompą paliwową",
odpowiedz4: "jest możliwe tylko na dużej wysokości"
},

{
    id: 1,
    question: "Sterowanie ZSS przez pilota odbywa się za pomocą:",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Przepustnica pozwala na zwiększenie ciśnienia ładowania, a zmienny skok śmigła pozwala na zmianę obrotów silnika.",
    odpowiedz1: "dźwigni przepustnicy i dźwigni skoku śmigła",
    odpowiedz2: "dźwigni przepustnicy",
    odpowiedz3: "dźwigni skoku śmigła",
    odpowiedz4: "dźwigni mieszanki"
    },
    
 {   id: 2,
    question: "Maksymalna masa do lądowania wynosi: (kg)",
    odpowiedzPISEMNA: "tak",
    wyjasnienie: "Maksymalne masy do startu i do lądowania wynoszą 1180kg = 2601lb",
    odpowiedz1: "1180"
},
    
{   id: 3,
   question: "Przy wystąpieniu drgań śmigieł po wejściu w strefę oblodzenia należy:",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "W przypadku śmigieł w pewnym zakresie skutecznie można zapobiegać ich oblodzeniu poprzez okresowe zwiększenie prędkości obrotowej śmigła i wykorzystanie siły odśrodkowej do usuwania kropel wody z powierzchni.",
   odpowiedz1: "zwiększyć na krótko obroty śmigieł",
   odpowiedz2: "zmniejszyć na krótko obroty śmigieł",
   odpowiedz3: "zwiększyć na krótko ciśnienie ładowania",
   odpowiedz4: "zmniejszyć na krótko ciśnienie ładowania"
},
    
{   id: 4,
   question: "VMCA (minimalna prędkość lotu sterowanego z niepracującym silnikiem) na Tecnamie P2006T wynosi: (KIAS)",
   odpowiedzPISEMNA: "tak",
   wyjasnienie: "Strona 37 z AFM SP-ULC.",
   odpowiedz1: "62"
},

{   id: 5,
    question: "Jeżeli oblodzenie wystąpi na niechronionych powierzchniach samolotu to lądowanie powinno być wykonane z całkowicie wychylonymi klapami na prędkości:",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Niestety w AFM nie ma żadnej informacji o ile dokładnie należy zwiększyć prędkość podejścia w przypadku oblodzenia, a w wielu źródłach jest napisane, że właśnie wg tego pilot powinien wiedzieć o ile zwiększyć prędkość podejścia. Wiedząc jednak, że 'Minute amounts of ice (equivalent to medium grit sandpaper) covering the leading edges or upper surfaces of wings can increase the stall speed up to 15 knots.' można przypuszczać, że odpowiedż 10-15kt jest najbardziej prawdopodobna. Maksymalna prędkość na pełnych klapach wynosi 93KIAS, a prędkość podejścia 70KIAS, a zatem prędkości nie zostaną przekroczone.",
    odpowiedz1: "większej od prędkości podejścia o 10 do 15 kt",
    odpowiedz2: "mniejszej od prędkości podejścia o 10 do 15 kt",
    odpowiedz3: "większej od prędkości podejścia o 5 kt",
    odpowiedz4: "większej od prędkości podejścia o 15 do 20 kt"
 },

 {   id: 6,
    question: "Na konwencjonalnym samolocie dwusilnikowym uszkodzenie jednego silnika powoduje zboczenie samolotu w kierunku:",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Zawsze samolot po utracie jednego silnika będzie miał moment skręcający w stronę uszkodzonego silnika. Odpowiedź z silnikiem krytycznym można odrzucić, ponieważ samoloty ze śmigłami kręcącymi się przeciwbieżnie nie mają silnika krytycznego. Odpowiedź z wiatrem może zostać wykluczona, ponieważ pomimo faktycznego wpływu wiatru na kierunek lotu, jest on nieznaczny, a w przypadku wiatru tylnego samolot nie zacznie nagle skręcać do tyłu i nie zatrzyma się na tym kierunku.",
    odpowiedz1: "uszkodzonego silnika",
    odpowiedz2: "pracującego silnika",
    odpowiedz3: "silnika krytycznego",
    odpowiedz4: "w stronę pod wiatr"
 },

 {   id: 7,
    question: "Jeśli na jednym silniku pracującym (drugi ustawiony w chorągiewkę) nie można utrzymać wznoszenia to przyczyną tego jest to, że: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Wzór na gradient wznoszenia w liczniku ma T-D (thrust - drag), a zatem jeśli gradient jest mniejszy, bądź równy 0, oznacza to że opór jest większy, bądź równy ciągowi.",
    odpowiedz1: "opór jest większy od ciągu",
    odpowiedz2: "opór jest większy niż siła nośna",
    odpowiedz3: "siła nośna jest mniejsza od ciągu",
    odpowiedz4: "siła nośna jest większa od ciągu"
 },

 {   id: 8,
    question: "Maksymalna prędkość normalnego użytkowania oznaczona jest w instrukcjach samolotu jako: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "VNO - Maksymalna prędkość normalnego użytkowania/strukturalna jest prędkością, która może być przekraczana z ostrożnością tylko w spokojnym powietrzu.",
    odpowiedz1: "VNO",
    odpowiedz2: "VNE",
    odpowiedz3: "VA",
    odpowiedz4: "VMC"
 },

 {   id: 9,
    question: "Gdy temperatura płynu chłodzącego zbliża się do maksymalnej wartości to sposobem na jej obniżenie może być: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Wysoka temperatura płynu chłodzącego, może powodować zwiększenie temperatur cylindrów (CHT). Aby nie dopuścić do ich rozgrzewania należy zwiększyć prędkość i zmniejszyć moc.",
    odpowiedz1: "zmniejszenie mocy",
    odpowiedz2: "zwiększenie skoku śmigła",
    odpowiedz3: "ustawienie małego skoku śmigła",
    odpowiedz4: "zamknięcie zasłonek silnika"
 },

 {   id: 10,
    question: "Przy defekcie jednego silnika utrata parametrów wznoszenia wynosi: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Według AFM wartość wznoszenia Vy przy schowanych klapach i schowanym podwoziu dla masy 1080kg na wysokości poziomu morza wynosi 1360ft/min. Odpowiednio ta sama wartość VySE przy tych samych warunkach wynosi 330ft/min. 330/1080 = 24%, więc daje to spadek około 76%.",
    odpowiedz1: "80%",
    odpowiedz2: "20%",
    odpowiedz3: "40%",
    odpowiedz4: "50%"
 },

 {   id: 11,
    question: "Jeden alternator na samolocie dwusilnikowym pokryje zapotrzebowanie na prąd w: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Z AFM: Akumulator i pojedynczy generator są w stanie dostarczyć energii elektrycznej na cały lot, jednak utracony zostaje nadmiar. Wydajność mocy alternatorów jest dobrane w sposób, że w razie awarii jednego z nich, drugi dostarczy energii potrzebnej do bezpiecznego kontynuowania lotu. ",
    odpowiedz1: "100%",
    odpowiedz2: "75%",
    odpowiedz3: "80%",
    odpowiedz4: "50%"
 },

 {   id: 12,
    question: "Wzorst ciężaru załadowania samolotu spowoduje, że długość rozbiegu: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Większa masa samolotu = dłuższa droga do pokonania podczas startu.",
    odpowiedz1: "zwiększy się",
    odpowiedz2: "zmniejszy się",
    odpowiedz3: "pozostanie bez zmian",
    odpowiedz4: "zmniejszy się na pasach asfaltowych, zwiększy się na trawiastych"
 },

 {   id: 13,
    question: "Które przyrządy podczas startu dają najpewniejszą informację o poprawnie pracującym silniku: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Po ciśnieniu ładowania i obrotomierzu można jednoznacznie ocenić czy silnik pracuje prawidłowo. Temperatura płynu chłodzącego wpływa na pracę silnika, jednak po samej temperaturze ocena pracy silnika jest niemożliwa - silnik może przez jakiś czas pracować poprawnie pomimo wysokiej temperatury płynu. Prędkościomierz jest przyrządem, który nie ma związku z pracą silnika. Temperaturę gazów wylotowych można odrzucić, ponieważ wskaźnik ten nie znajduje się w ogóle w SP-ULC.",
    odpowiedz1: "ciśnienie ładowania i obrotomierz",
    odpowiedz2: "obrotomierz i temperatura płynu chłodzącego",
    odpowiedz3: "prędkościomierz i ciśnienie ładowania",
    odpowiedz4: "temperatura gazów wylotowych i przepływ paliwa"
 },

 {   id: 14,
    question: "Dźwignie składu mieszanki służą do doboru: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Pomimo, że są tu dwie poprawne odpowiedzi (ilość paliwa do ilości powietrza również jest poprawna), to w pytaniu tym należy wskazać, iż w tym samolocie dźwignie te nie występują.",
    odpowiedz1: "w Tecnamie P2006T nie ma takich dźwigni",
    odpowiedz2: "ilości paliwa do ilości powietrza",
    odpowiedz3: "ilości powietrza do obrotów śmigieł",
    odpowiedz4: "ilości paliwa do obrotów śmigieł"
 },

 {   id: 15,
    question: "Ze śmigłem ustawionym w 'chorągiewkę' najlepsze parametry są zapewnione w locie przy utrzymaniu przechylenia: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Przechylenie zawsze należy wykonać w stronę pracującego silnika. Z AFM: 'Aby zwiększyć efektywność, wskazane jest zastosowanie przechylenia o około 5° na stronę pracującego silnika.'",
    odpowiedz1: "3-5 stopni w stronę pracującego silnika",
    odpowiedz2: "2 stopnie w stronę niepracującego silnika",
    odpowiedz3: "2 stopnie w stronę pracującego silnika",
    odpowiedz4: "5 stopni w stronę niepracującego silnika"
 },

 {   id: 16,
    question: "Maksymalna moc startowa jednego silnika wynosi: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Z AFM: '73.5 kW (98.6hp) @ 5800 rpm - maksymalnie 5 minut.69.0 kW (92.5hp) @ 5500 rpm – ciągła'",
    odpowiedz1: "98,6KM",
    odpowiedz2: "92,5KM",
    odpowiedz3: "100KM",
    odpowiedz4: "112KM"
 },

 {   id: 17,
    question: "Ustawiając moc należy unikać: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Wysokie ładowania, a niskie obroty, można porównać do ruszania samochodem z piątego biegu.",
    odpowiedz1: "wysokiego ładowania - niskich obrotów",
    odpowiedz2: "niskiego ładowania - wysokich obrotów",
    odpowiedz3: "niskiego ładowania - niskich obrotów",
    odpowiedz4: "wysokiego ładowania - wysokich obrotów"
 },

 {   id: 18,
    question: "W czasie przeglądu przedlotowego sprawdzamy ugięcie amortyzatora goleni podwozia głównego. Prawidłowe ugięcie powinno wynosić: (cm)",
    odpowiedzPISEMNA: "tak",
    wyjasnienie: "Niestety brak odpowiedzi w AFM. Odpowiedź wzięta z feedbacku starszego rocznika.",
    odpowiedz1: "9"
 },

 {   id: 19,
    question: "W czasie przeglądu przedlotowego sprawdzamy ugięcie amortyzatora goleni podwozia przedniego. Prawidłowe ugięcie powinno wynosić: (cm)",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Niestety prawidłowa odpowiedź nie jest znana. Zaznaczona odpowiedź może być niepoprawna.",
    odpowiedz1: "6,4",
    odpowiedz2: "2",
    odpowiedz3: "4",
    odpowiedz4: "5"
 },

 {   id: 20,
    question: "Środek ciężkości to: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Środek Ciężkości to punkt równowagi samolotu lub wyposażenia. Jego odległość od datum znajduje się przez dzielenie sumy momentów przez sumę mas samolotu",
    odpowiedz1: "punkt na samolocie - podparty w tym miejscu samolot jest w równowadze",
    odpowiedz2: "punkt na profilu skrzydła wyznaczony przez przecięcie siły nośnej z SAC",
    odpowiedz3: "punkt na SAC, w którym zamocowany jest ładunek",
    odpowiedz4: "wypadkowy punkt na osi pionowej samolotu, przez który przechodzi wektor ciągu"
 },

 {   id: 21,
    question: "VLE - prędkość maksymalna lotu z wypuszczonym podwoziem na Tecnamie P2006T wynosi: (kt)",
    odpowiedzPISEMNA: "tak",
    wyjasnienie: "Prędkość maksymalna lotu z otwartym podwoziem wynosi 93KIAS. Interesuje nas prędkość przyrządowa, ponieważ taką wskazuje prędkościomierz w samolocie.",
    odpowiedz1: "93"
 },

 {   id: 22,
    question: "Który ze sposobów chłodzenia silnika jest właściwy dla P2006T? ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Z AFM: '4-cylindrowy bokser o całkowitej pojemności skokowej 1352cm3, głowice chłodzone cieczą, cylindry chłodzone powietrzem, dwa gaźniki, zintegrowana przekładnia redukcyjna z tłumikiem wstrząsów i sprzęgłem przeciążeniowym'",
    odpowiedz1: "cylindry są chłodzone powietrzem, a głowice cieczą",
    odpowiedz2: "cylindry chłodzone są cieczą i głowice chłodzone są cieczą",
    odpowiedz3: "cały silnik chłodzony jest powietrzem",
    odpowiedz4: "cylindry chłodzone są cieczą, a głowice powietrzem"
 },

 {   id: 23,
    question: "W czasie podejścia do lądowania - dźwignie obrotów śmigieł powinny być całkowicie przestawione do przodu, gdy samolot: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Ustawienie dźwigni obrotów śmigieł do przodu powoduje zwiększenie obrotów, które ustawiane są podczas checklisty BEFORE LANDING, właśnie po to, aby podczas odejścia na drugi krąg miał wystarczającą moc. Odpowiedź 'tylko w momencie przechodzenia na drugie okrążenie' sugeruje, że należy przestawić te dźwignie dopiero w momencie podjęcia decyzji o odejściu, co jest oczywiście nieprawdą.",
    odpowiedz1: "jest na krótkiej prostej do lądowania",
    odpowiedz2: "jest przy wejściu w krąg",
    odpowiedz3: "jest w czasie zakrętu na prostą do lądowania",
    odpowiedz4: "jest tylko w momencie przechodzenia na drugie okrążenie"
 },

 {   id: 24,
    question: "Podwozie w położeniu schowanym na P2006T utrzymuje: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Z AFM: 'Normalne działanie pozwala na wypuszczanie i chowanie podwozia za pomocą siłowników hydraulicznych. Wypuszczanie wspomagane jest też grawitacyjnie. Działanie awaryjne pozwala tylko na wypuszczenie podwozia za pomocą hydroakumulatora, który wpompowuje sprężony olej we wspomniane siłowniki.'",
    odpowiedz1: "ciśnienie hydrauliczne pompy podwozia",
    odpowiedz2: "zamek kulkowy w cylindrze podwozia",
    odpowiedz3: "zamek mechaniczny w komorze skrzydłowej podwozia",
    odpowiedz4: "napór strug powietrza"
 },

 {   id: 25,
    question: "Maksymalna masa do startu wynosi: (kg)",
    odpowiedzPISEMNA: "tak",
    wyjasnienie: "Maksymalne masy do startu i do lądowania wynoszą 1180kg = 2601lb",
    odpowiedz1: "1180"
},

 {   id: 26,
    question: "Ładunek handlowy to ciężar: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Ładunek handlowy to inaczej Traffic Load i zawiera on masy pasażerów, ładunku (cargo) i bagażu.",
    odpowiedz1: "pasażerów, ładunku i bagażu",
    odpowiedz2: "paliwa, oleju, pasażerów",
    odpowiedz3: "pasażerów i bagażu",
    odpowiedz4: "załogi, pasażerów i paliwa"
 },

 {   id: 27,
    question: "Skrót ZFM oznacza: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "ZFM - Zero Fuel Mass - masa samolotu bez paliwa zużywalnego.",
    odpowiedz1: "masa samolotu z zerowym paliwem",
    odpowiedz2: "ładunek handlowy",
    odpowiedz3: "masa samolotu pustego",
    odpowiedz4: "maksymalną masę startową"
 },

 {   id: 28,
    question: "Odcinek poziomy od płaszczyzny odniesienia do środka ciężkości danego składnika samolotu określamy jako: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Odcinek pomiędzy DATUM, a środkiem ciężkości nazywany jest ramieniem środka ciężkości.",
    odpowiedz1: "ramię środka ciężkości",
    odpowiedz2: "ramię samolotu",
    odpowiedz3: "moment statyczny",
    odpowiedz4: "współrzędną przekroju"
 },

 {   id: 29,
    question: "Zakres położenia środka ciężkości, który nie może być przekroczony przy załadowaniu określonego ciężaru określamy jako: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Zakres położenia środka ciężkości nazywany jest polem wyważeń, które to jest określone przez obwiednię - linię wyznaczającą maksymalne położenie środka ciężkości.",
    odpowiedz1: "pole wyważeń (określone obwiednią dopuszczalnych położeń ś.c.)",
    odpowiedz2: "zakres wędrówki środka parcia",
    odpowiedz3: "zakres zmian wyważenia spowodowany chowaniem i wypuszczaniem podwozia",
    odpowiedz4: "wartość wykresu załadowania w funkcji ładunek - moment statyczny"
 },

 {   id: 30,
    question: "Jeżeli w wyniku obliczeń środek ciężkości wypada poza obwiednię załadowania, to dowódca samolotu powinien: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Start ze środkiem ciężkości poza obwiednią jest niedopuszczalny, dlatego należy dokonać zmian w obciążeniu samolotu.",
    odpowiedz1: "dokonać zmian w obciążeniu samolotu i obliczyć powtórnie położenie ś.c.",
    odpowiedz2: "wybrać najdłuższy kierunek do startu",
    odpowiedz3: "startować tylko z klapami w położeniu startowym",
    odpowiedz4: "przełożyć start na godziny późniejsze, kiedy temperatura powietrza będzie korzystniejsza dla startu"
 },

 {   id: 31,
    question: "Poprawę położenia środka ciężkości można uzyskać poprzez: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Wszystkie wymienione sposoby dokonają poprawy środka ciężkości, jeśli ten znajduje się poza obwiednią.",
    odpowiedz1: "wszystkimi wymienionymi sposobami",
    odpowiedz2: "zmniejszenie ilości paliwa",
    odpowiedz3: "zmniejszenie ilości pasażerów i bagażu",
    odpowiedz4: "przemieszczenie bagażu i pasażerów"
 },

 {   id: 32,
    question: "Określenie bazowej wagi samolotu pustego oraz położenia środka ciężkości wykonuje: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Bazowa waga samolotu pustego określana jest po wyprodukowaniu samolotu przez producenta.",
    odpowiedz1: "producent samolotu",
    odpowiedz2: "nadzór lotniczy KCSP przy rejestracji samolotu",
    odpowiedz3: "użytkownik samolotu",
    odpowiedz4: "pilot w wyniku oblotu samolotu"
 },

 {   id: 33,
    question: "Która z wielkości ciężaru dla określonego typu statku powietrznego jest wartością niezmienną? ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Jedynie maksymalny ciężar startowy się nie zmienia i jest określony w AFM. Wynosi on 1180kg. Ciężar samolotu wyposażonego może się zmienić, jeśli użytkownik wyposaży go w dodatkowe urządzenia. Ładunek handlowy jest to Traffic Load i zmienia się w zależności od masy pasażerów, bagażu i ładunku. Ciężar użyteczny to połączenie Take-off fuel i Traffic Load i również jest zmienny.",
    odpowiedz1: "maksymalny ciężar startowy",
    odpowiedz2: "ciężar samolotu pustego wyposażonego",
    odpowiedz3: "ciężar użyteczny",
    odpowiedz4: "ładunek handlowy"
 },

 {   id: 34,
    question: "Położenie środka ciężkości znajdujemy przez podzielenie całkowitego momentu poprzez: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Odległość środka ciężkości od DATUM można obliczyć poprzez podzielenie sumy momentów przez sumę wszystkich mas (czyli całkowity ciężar samolotu).",
    odpowiedz1: "ciężar samolotu do lotu",
    odpowiedz2: "ciężar pustego samolotu",
    odpowiedz3: "ciężar paliwa i ładunku",
    odpowiedz4: "ramię momentu"
 },

 {   id: 35,
    question: "Obliczenie położenia środka ciężkości przeprowadza się ze względu na zachowanie: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Pytanie jest dosyć podchwytliwe i można podejrzewać, że odpowiedź 'sterowności' również może być poprawna. Bardziej poprawna jest jednak stateczność podłużna. Stateczność podłużna zmniejsza się, gdy środek ciężkości przesuwa się w kierunku tylnym, wtedy zwiększa się sterowność. Należy mieć na uwadze, iż w małych samolotach ustawienie środka ciężkości poza PRZEDNI zakres jest trudne lub niemożliwe. Dlatego też utracenie sterowności jest mało prawdopodobne i zapewne to też wziął pod uwagę autor pytania.",
    odpowiedz1: "stateczności statycznej podłużnej",
    odpowiedz2: "stateczności statycznej poprzecznej",
    odpowiedz3: "sterowności",
    odpowiedz4: "odpowiedniej prędkości progowej"
 },

 {   id: 36,
    question: "Zmiana ciężaru całkowitego samolotu powoduje zmianę wartości prędkości manewrowej (VA): ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Nowe VA (po zmianie masy) można obliczyć ze wzoru: VAold * pierwiastek (Nowa masa/Stara masa). Oznacza to, że jeśli masa maleje, to maleje również prędkość manewrowa VA. Lecąc z maksymalną masą przy prędkości VA, maksymalne obciążenie (+3,8g) osiągnie się przy krytycznym kącie natarcia. Przy zmniejszeniu masy lecąc z tą samą prędkością początkowo nasz kąt natarcia będzie mniejszy - zatem osiągnięcie maksymalnego obciążenia nastąpi szybciej niż osiągnięcie krytycznego kąta natarcia. Aby znowu otrzymać maksymalne obciążenie przy krytycznym kącie natarcia należy zmniejszyć prędkość.",
    odpowiedz1: "wprost proporcjonalnie",
    odpowiedz2: "odwrotnie proporcjonalnie",
    odpowiedz3: "nie rozpatruje się tego",
    odpowiedz4: "nie powoduje zmiany"
 },

 {   id: 37,
    question: "Przy maksymalnym ciężarze startowym długość rozbiegu zwiększy się: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Klapy startowe skracają długość rozbiegu, tak samo jak wysokie ciśnienie i niska temperatura.",
    odpowiedz1: "przy wyższej temperaturze powietrza na ziemi",
    odpowiedz2: "przy niższej temperaturze powietrza na ziemi",
    odpowiedz3: "przy wyższym ciśnieniu atmosferycznym",
    odpowiedz4: "przy wychylonych klapach startowych"
 },

 {   id: 38,
    question: "VNE na Tecnam P2006T wynosi: (KIAS)",
    odpowiedzPISEMNA: "tak",
    wyjasnienie: "Strona 37 AFM.",
    odpowiedz1: "167"
 },

 {   id: 39,
    question: "Brak właściwego zamocowania ładunku na pokładzie samolotu może spowodować: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Źle zamocowany ładunek może przemieścić się i spowodować przemieszczenie się środka ciężkości do tylnego położenia poza obwiednię. Spowodowałoby to utratę stateczności samolotu.",
    odpowiedz1: "utratę stateczności",
    odpowiedz2: "zmniejszenie zasięgu lotu",
    odpowiedz3: "wystąpienie drgań steru kierunku",
    odpowiedz4: "zmniejszenie prędkości przelotowej"
 },

 {   id: 40,
    question: "Zatankowanie samolotu należy przeprowadzić: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Ilość paliwa, którą można zatankować jest znana dopiero po dokonaniu odpowiednich obliczeń.",
    odpowiedz1: "po dokonaniu obliczeń załadunku i środka ciężkości",
    odpowiedz2: "bezpośrednio po lądowaniu",
    odpowiedz3: "po zatwierdzeniu planu lotu",
    odpowiedz4: "w dowolnym czasie"
 },

 {   id: 41,
    question: "Zezwala się na start i wykonanie lotu, jeżeli: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Zarówno środek ciężkości, jak i maksymalny ciężar muszą znajdować się dopuszczalnych granicach.",
    odpowiedz1: "ś.c. jest w granicach obwiedni załadowania, a ciężar maksymalny nie jest przekroczony",
    odpowiedz2: "ś.c. jest w granicach obwiedni załadowania, a ciężar maksymalny jest nieznacznie przekroczony",
    odpowiedz3: "ś.c. nie jest w granicach obwiedni załadowania, a ciężar maksymalny nie jest przekroczony",
    odpowiedz4: "ś.c. nie jest w granicach obwiedni załadowania, a ciężar maksymalny jest przekroczony"
 },

 {   id: 42,
    question: "Ile wynosi moment (w funtach/cal) obciążenia danego elementu np. 240 funtów na ramieniu 100 cali od linii odniesienia: ",
    odpowiedzPISEMNA: "tak",
    wyjasnienie: "M = siła (obciążenie) * ramię. M = 240 lb * 100in = 24000fb/in",
    odpowiedz1: "24000"
 },

 {   id: 43,
    question: "Najbardziej niebezpieczne warunki pod względem obciążenia samolotu i położenia środka ciężkości występują, gdy: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Odpowiedź NIE jest potwierdzona. Najgorszym położeniem środka ciężkości jest poza tylnym limitem, ponieważ samolot może wtedy wpaść w korkociąg płaski, który jest o wiele gorszy od korkociągu stromego. Można zatem podejrzewać, że najbardziej niebezpieczne położenie jest tylne i jest to bardziej poprawna odpowiedź niż ogólnie środek poza limitem.",
    odpowiedz1: "samolot przekracza dopuszczalny ciężar, a środek ciężkości znajduje się z tyłu poza limitem",
    odpowiedz2: "samolot przekracza dopuszczalny ciężar, a środek ciężkości znajduje się poza limitem",
    odpowiedz3: "samolot nie przekracza dopuszczalnego ciężaru, a środek ciężkości jest z tyłu poza limitem",
    odpowiedz4: "samolot nie przekracza dopuszczalnego ciężaru, a środek ciężkości jest z przodu poza limitem"
 },

 {   id: 44,
    question: "Płaszczyzna odniesienia (linia odniesienia) to: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Płaszczyzna odniesienia, tzw. DATUM - punkt lub płaszczyzna wzdłuż podłużnej osi samolotu, określona przez producenta samolotu, jako płaszczyzna referencyjna, od której mierzone są wszystkie dystanse (ramiona).",
    odpowiedz1: "wyobrażalna płaszczyzna (linia) pionowa, od której są mierzone wszystkie wartości - w poziomie, dla celów wyważenia",
    odpowiedz2: "wartość ciśnienia (QNH), dla którego oblicza się parametry ładunku",
    odpowiedz3: "płaszczyzna (linia) wyznaczona przez położenie środka ciężkości nad osią symetrii samolotu",
    odpowiedz4: "wyobrażalna płaszczyzna (linia) pozioma, od której są mierzone wszystkie wartości - w pionie, dla celów wyważenia"
 },

 {   id: 45,
    question: "Lista kontrolna (checklist) przed lądowaniem powinna być zakończona: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Krótka prosta definiowana jest 4NM od progu pasa. Na 4NM przy standardowej ścieżce zniżania jest się na wysokości około 1200ft AAL. Checklista BEFORE LANDING powinna zostać wykonana przed osiągnięciem 1000ft AAL, dlatego też odpowiedź poprawna jest najbardziej logiczna.",
    odpowiedz1: "zawsze przed krótką prostą do lądowania",
    odpowiedz2: "po wykonaniu zakrętu na prostą do lądowania",
    odpowiedz3: "przed wejściem w krąg",
    odpowiedz4: "przed zakończeniem III zakrętu"
 },

 {   id: 46,
    question: "Decydujący wpływ na charakterystyki lotne dla steru wywiera: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Sterowność jest tym większa, im środek ciężkości jest położony bardziej z tyłu (w granicach obwiedni). Spośród pozostałych odpowiedzi, to on ma największy wpływ na sterowność, nazwane tutaj charakterystykami lotnymi.",
    odpowiedz1: "położenie środka ciężkości",
    odpowiedz2: "ilość zatankowanego paliwa",
    odpowiedz3: "kierunek i rodzaj nawierzchni",
    odpowiedz4: "położenie klap"
 },

 {   id: 47,
    question: "VA na Tecnamie P2006T wynosi (KIAS): ",
    odpowiedzPISEMNA: "tak",
    wyjasnienie: "Strona 37 w AFM.",
    odpowiedz1: "118"
 },

 {   id: 48,
    question: "Najlepiej utrzymać prędkość wznoszenia na obydwu silnikach po starcie równą: ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "Po starcie z dwoma silnikami należy utrzymywać prędkość Vy = 80KIAS. Pomimo, że dla SP-ULC Vx i Vy są sobie równe, to jeżeli na drodze nie ma żadnych przeszkód, powinno się utrzymywać prędkość najlepszego wznoszenia - Vy.",
    odpowiedz1: "Vy",
    odpowiedz2: "Vx",
    odpowiedz3: "VySE",
    odpowiedz4: "VxSE"
 },

 {   id: 49,
    question: "Która prędkość krytyczna zmaleje jeśli następuje wzrost wysokości? ",
    odpowiedzPISEMNA: "nie",
    wyjasnienie: "VMCA - minimum control (air). Prędkość poniżej której w przypadku wyłączenia jednego z silników, nie ma możliwości utrzymania kierunku, gdyż na sterach są za małe siły. Jest ona zależna od gęstości powietrza, a zatem od wysokości. Prędkości w pozostałych odpowiedziach mogą wzrosnąć w przypadku wzrostu wysokości.",
    odpowiedz1: "VMCA",
    odpowiedz2: "Vx",
    odpowiedz3: "Vy",
    odpowiedz4: "VxSE"
 },

 {   id: 50,
   question: "Zaleconym sposobem wykonania zakrętów na kołowaniu jest: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "Brak odpowiedzi na pytanie w AFM. Jednak skoro pytanie dotyczy wielosilnika, można przypuszczać, że autorowi pytania chodziło o wykorzystanie dodatkowego momentu skręcającego z mocy silników. 'Turning with an assist from differential power minimizes both the need for brakes during turns and the turning radius.'",
   odpowiedz1: "zróżnicowanie obrotów",
   odpowiedz2: "użycie sterowania przednim kółkiem",
   odpowiedz3: "użycie hamulców",
   odpowiedz4: "użycie sterowania przednim kółkiem wraz z hamulcami"
},

{   id: 51,
   question: "Wartość prędkości VSO na tarczy prędkościomierza określa: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "VSO - prędkość przeciągniecia w konfiguracji do lądowania określana jest początkiem białego zakresu na prędkościomierzu. 39 strona w AFM: 'Dolna granica to VSO, górna granica to maksymalna prędkość z pełnym wychyleniem klap.'",
   odpowiedz1: "początek białego zakresu",
   odpowiedz2: "koniec białego zakresu",
   odpowiedz3: "początek zielonego zakresu",
   odpowiedz4: "koniec zielonego zakresu"
},

{   id: 52,
   question: "Wartość prędkości VS1 na tarczy prędkościomierza określa: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "VS1 - prędkość przeciągnięcia w gładkiej konfiguracji określana jest początkiem zielonego zakresu. 39 strona w AFM: 'Zakres normalnego użytkowania samolotu (dolna granica to VS1, prędkość przeciągnięcia w konfiguracji gładkiej, a dolna granica to maksymalna prędkość normalnego użytkowania VNO). '",
   odpowiedz1: "początek zielonego zakresu",
   odpowiedz2: "koniec zielonego zakresu",
   odpowiedz3: "początek białego zakresu",
   odpowiedz4: "koniec białego zakresu"
},

{   id: 53,
   question: "Dopuszczalną prędkość VFE na tarczy prędkościomierza określa: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "VFE - maksymalna prędkość lotu z wychylonymi klapami określana jest końcem białego zakresu na prędkościomierzu. 39 strona w AFM: 'Dolna granica to VSO, górna granica to maksymalna prędkość z pełnym wychyleniem klap.'",
   odpowiedz1: "koniec białego zakresu",
   odpowiedz2: "początek białego zakresu",
   odpowiedz3: "początek zielonego zakresu",
   odpowiedz4: "koniec zielonego zakresu"
},

{   id: 54,
   question: "Prędkość manewrowa oznaczona jest: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "AFM strona 37: 'VA - Prędkość manewrowa teoretyczna'",
   odpowiedz1: "VA",
   odpowiedz2: "VNO",
   odpowiedz3: "VNE",
   odpowiedz4: "VMC"
},

{   id: 55,
   question: "Maksymalny współczynnik przeciążenia dodatniego wynosi: [odpowiedź wpisz z przecinkiem bez jednostki - g]",
   odpowiedzPISEMNA: "tak",
   wyjasnienie: "Strona 48 AFM. Dodatni: +3,8g. Ujemny: -1,78g.",
   odpowiedz1: "3,8"
},

{   id: 56,
   question: "Lądowanie z nagromadzonym lodem na skrzydłach należy wykonać: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "With ice accumulations, landing approaches should be made with a minimum wing flap setting (flap extension increases the AOA of the horizontal stabilizer) and with an added margin of airspeed. Sudden and large configuration and airspeed changes should be avoided.",
   odpowiedz1: "lądować bez klap na zwiększonej prędkości",
   odpowiedz2: "tak jak normalnie, utrzymując zwiększoną prędkość lądowania",
   odpowiedz3: "nie lądować do czasu usunięcia lodu ze skrzydeł",
   odpowiedz4: "lądować na maksymalnie wychylonych klapach z niewielką mocą silnika"
},

{   id: 57,
   question: "Sygnalizacja akustyczna przeciągnięcia samolotu działa, gdy prędkość lotu jest wyższa od prędkości przeciągnięcia o: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "During a wings level, decelerating condition in any normal configuration, the stall warning must begin at a speed which is a minimum of 5 knots greater than stalling speed (Vs) and continue until the stall occurs. Minimum 5 węzłów = 9,26km/h. Zaznaczamy więc odpowiedź, która zawiera minimum 10km/h.",
   odpowiedz1: "10-20km/h",
   odpowiedz2: "5-10km/h",
   odpowiedz3: "20-25km/h",
   odpowiedz4: "15-20km/h"
},

{   id: 58,
   question: "Prędkość największego wznoszenia na samolocie wielosilnikowym z jednym silnikiem pracującym oznaczamy jako: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "AFM strona 25: 'VySE - Prędkość najlepszego wznoszenia z jednym silnikiem.'",
   odpowiedz1: "VySE",
   odpowiedz2: "VxSE",
   odpowiedz3: "Vy",
   odpowiedz4: "Vx"
},

{   id: 59,
   question: "Podczas rozbiegu pilot powinien sprawdzić oprócz obrotów silnika: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "Ustawienie kranów paliwa, położenie klap i zamknięcie drzwi powinno zostać sprawdzone przed wjazdem na pas. Podczas rozbiegu należy sprawdzić wzrost prędkości i potwierdzić to call-outem 'Airspeed alive', dlatego ta odpowiedź wydaje się najbardziej rozsądna.",
   odpowiedz1: "przepływ paliwa i wzrost prędkości na prędkościomierzu",
   odpowiedz2: "ustawienie kranów paliwa",
   odpowiedz3: "położenie klap podskrzydłowych",
   odpowiedz4: "zamknięcie drzwi"
},

{   id: 60,
   question: "Podczas normalnego startu podwozie powinno być chowane: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "Podwozie powinno zostać schowane po potwierdzeniu wznoszenia (positive rate) oraz gdy wiadomo, że pozostała część pasa jest już niewystarczająca do lądowania. 'When to raise the landing gear after takeoff depends on several factors. Normally, the gear should be retracted when there is insufficient runway available for landing and after a positive rate of climb is established as indicated on the altimeter.'",
   odpowiedz1: "po ustabilizowaniu wznoszenia, gdy pas jest już niewystarczający do ewentualnego lądowania",
   odpowiedz2: "po osiągnięciu bezpiecznej wysokości manewrowej",
   odpowiedz3: "zaraz po oderwaniu",
   odpowiedz4: "na wysokości 15m"
},

{   id: 61,
   question: "Jeżeli przy energicznej redukcji mocy podczas szybowania na prostej przed lądowaniem występuje gwałtowny wzrost opadania samolotu, to spowodowany jest on: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "Odpowiedź NIE jest potwierdzona. Strumienie zaśmigłowe i momenty obrotowe śmigieł zmniejszą się, a nie znikną całkowicie. Opór nie wzrośnie gwałtownie, dlatego tą odpowiedź również można odrzucić.",
   odpowiedz1: "spadkiem siły ciągu",
   odpowiedz2: "brakiem strumieni zaśmigłowych",
   odpowiedz3: "gwałtownym wzrostem oporu",
   odpowiedz4: "brakiem momentów obrotowych śmigieł"
},

{   id: 62,
   question: "Najmniejszy opór powoduje śmigło, gdy: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "Smigło ustawione w chorągiewkę powoduje najmniejszy opór - dlatego też w przypadku niedziałającego silnika, należy łopaty ustawić w chorągiewkę.",
   odpowiedz1: "ustawione jest w 'chorągiewkę'",
   odpowiedz2: "zatrzymane z łopatami na maksymalnych kątach",
   odpowiedz3: "zatrzymane z łopatami na minimalnych kątach",
   odpowiedz4: "wiatrakuje"
},

{   id: 63,
   question: "Kiedy samolot jest na dużych kątach natarcia - opadająca łopata śmigła jest niesymetrycznie obciążona, ponieważ: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "'Propeller blades will be more forward when in the down position, and more backwards when in the up position. The propeller blade moving down and forward (for clockwise rotation, from the one o'clock to the six o'clock position when viewed from the cockpit) will have a greater forward speed. This will increase the airspeed of the blade, so the down-going blade will produce more thrust. The propeller blade moving up and back (from the seven o'clock to the 12 o'clock position) will have a decreased forward speed, therefore a lower airspeed than the down-going blade and lower thrust. This asymmetry displaces the center of thrust of the propeller disc towards the blade with increased thrust.'",
   odpowiedz1: "wytwarza większy ciąg niż łopata wznosząca się",
   odpowiedz2: "jest cięższa niż łopata wznosząca się",
   odpowiedz3: "jest to właściwość śmigła trzyłopatowego",
   odpowiedz4: "łopata wznosząca się daje większy moment obrotowy"
},

{   id: 64,
   question: "Pierwszą czynnością pilota przy defekcie silnika jest: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "Aviate - navigate - communicate. Najważniejsze na początku jest zachowanie sterowności, dopiero po opanowaniu samolotu, należy wziąć się za identyfikację niesprawnego silnika i ustawienie go w chorągiewkę.",
   odpowiedz1: "zachować sterowanie samolotem",
   odpowiedz2: "przestawić śmigło w ''chorągiewkę'",
   odpowiedz3: "zidentyfikować niesprawny silnik",
   odpowiedz4: "zastosować pełną moc"
},

{   id: 65,
   question: "Najczęściej występującym powodem przerwy pracy silnika w locie po trasie jest: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "Najczęstszym powodem przerwy pracy silnika jest przerwany dopływ paliwa. Należy sprawdzić ilośc paliwa w zbiorniku, jeśli jego poziom jest niski należy przestawić zbiornik na drugi.",
   odpowiedz1: "przerwany dopływ paliwa",
   odpowiedz2: "uszkodzenie zapłonu",
   odpowiedz3: "zakłócenie smarowania silnika",
   odpowiedz4: "uszkodzenie mechaniczne wewnątrz silnika"
},

{   id: 66,
   question: "W czasie startu najbardziej krytyczny punkt przy defekcie silnika występuje: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "'VMC - Minimalna prędkość lotu kontrolowanego: to minimalna prędkość potrzebna do efektywnego sterowania samolotem w przypadku awarii jednego silnika.' Przed osiągnięciem VMC w przypadku utraty jednego silnika sterowanie samolotem może być niewystarczające.",
   odpowiedz1: "przed osiągnięciem VMC",
   odpowiedz2: "pomiędzy VMC i VySE",
   odpowiedz3: "pomiędzy VySE i Vy",
   odpowiedz4: "po osiągnięciu VxSE, ale przed osiągnięciem bezpiecznej wysokości przelotu nad przeszkodami"
},

{   id: 67,
   question: "Na samolocie z przeciwbieżnymi obrotami śmigieł, silnikiem krytycznym jest zawsze: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "Samolot ze śmigłami kręcącymi się w przeciwną stronę nie posiada silnika krytycznego.",
   odpowiedz1: "nie ma krytycznego silnika",
   odpowiedz2: "lewy silnik",
   odpowiedz3: "prawy silnik",
   odpowiedz4: "obojętnie który może być krytycznym"
},

{   id: 68,
   question: "Przy nieoczekiwanej przerwie w pracy silnika prawidłowa kolejność działań jest następująca: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "Najpierw należy zidentyfikować silnik, następnie ściągnąć przepustnicę zidentyfikowanego silnika i sprawdzić, czy coś się stanie. Jeśli nie - oznacza to, że silnik został zidentyfikowany poprawnie. Następnie należy ustawić śmigło zidentyfikowanego silnika w 'chorągiewkę'.",
   odpowiedz1: "zidentyfikować, sprawdzić, 'chorągiewka'",
   odpowiedz2: "sprawdzić, zidentyfikować, 'chorągiewka'",
   odpowiedz3: "'chorągiewka', sprawdzić, zidentyfikować",
   odpowiedz4: "sprawdzić, 'chorągiewka', zidentyfikować"
},

{   id: 69,
   question: "W czasie lądowania z jednym niepracującym silnikiem klapy powinny być w położeniu: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "AFM angielski strona 102: 'When on final leg: 7. Flap T/O'",
   odpowiedz1: "T/O",
   odpowiedz2: "schowane",
   odpowiedz3: "10 stopni",
   odpowiedz4: "FULL"
},

{   id: 70,
   question: "W przypadku powstania 'kangura' przy lądowaniu należy: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "If you bounce, the first thing you should do is hold back pressure to keep the aircraft in a nose-high landing attitude. You might need to release some back pressure on the yoke or stick if your nose is too high, but don't push the nose down. If you force the nose down, you could land even harder than the first time, or worse, land on your nose gear. As you start descending back to the runway, you might also need to add some power to reduce your descent rate. But don't over-correct with power. Adding small amounts of power is all it takes to safely reduce your descent rate for a soft touchdown.",
   odpowiedz1: "zwiększyć moc silników - powtórnie płynnie przyziemiać",
   odpowiedz2: "natychmiast opuścić przednie koło podwozia",
   odpowiedz3: "ująć całkowicie moc silników - opuścić przednie koło",
   odpowiedz4: "nie zmieniając obrotów silników powtórnie płynnie przyziemiać"
},

{   id: 71,
   question: "Jeżeli ciśnienie oleju w piaście śmigła na samolocie wielosilnikowym spadnie do zera, to śmigło: ",
   odpowiedzPISEMNA: "nie",
   wyjasnienie: "AFM strona 88: 'Zmniejszanie zbyt dużego ciśnienia oleju prowadzi do ustawienia dużego skoku śmigła i dalej do chorągiewki i zatrzymania silnika'.",
   odpowiedz1: "ustawi się w 'chorągiewkę'",
   odpowiedz2: "osiągnie 'nadobroty'",
   odpowiedz3: "osiągnie obroty minimalne",
   odpowiedz4: "zatrzyma się"
},

{   id: 72,
   question: "Pojemność całkowita zbiorników paliwa wynosi: (l)",
   odpowiedzPISEMNA: "tak",
   wyjasnienie: "Strona 21 w AFM.",
   odpowiedz1: "200"
},

{   id: 73,
   question: "Przyporządkuj nazwy przycisków oznaczonych numerem 1",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/Garmin.png",
   wyjasnienie: "Strona 92 w instrukcji Garmina G950",
   odpowiedz1: "NAV VOL/ID Knob",
   odpowiedz2: "COM Knob",
   odpowiedz3: "NAV Knob",
   odpowiedz4: "COM VOL/SQ Knob"
},

{   id: 74,
   question: "Przyporządkuj nazwy przycisków oznaczonych numerem 2",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/Garmin.png",
   wyjasnienie: "Strona 92 w instrukcji Garmina G950",
   odpowiedz1: "NAV Frequency Transfer Key",
   odpowiedz2: "COM Frequency Box",
   odpowiedz3: "NAV Frequency Box",
   odpowiedz4: "COM Frequency Transfer Key"
},

{   id: 75,
   question: "Przyporządkuj nazwy przycisków oznaczonych numerem 3",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/Garmin.png",
   wyjasnienie: "Strona 92 w instrukcji Garmina G950",
   odpowiedz1: "NAV Knob",
   odpowiedz2: "COM Knob",
   odpowiedz3: "COM VOL/SQ Knob",
   odpowiedz4: "NAV VOL/ID Knob"
},

{   id: 76,
   question: "Przyporządkuj nazwy przycisków oznaczonych numerem 4",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/Garmin.png",
   wyjasnienie: "Strona 92 w instrukcji Garmina G950",
   odpowiedz1: "NAV Frequency Box",
   odpowiedz2: "COM Frequency Box",
   odpowiedz3: "Nearest Airports Window",
   odpowiedz4: "Transponder Data Box"
},

{   id: 77,
   question: "Przyporządkuj nazwy przycisków oznaczonych numerem 5",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/Garmin.png",
   wyjasnienie: "Strona 92 w instrukcji Garmina G950",
   odpowiedz1: "COM Frequency Box",
   odpowiedz2: "NAV Frequency Box",
   odpowiedz3: "Nearest Airports Window",
   odpowiedz4: "Transponder Data Box"
},

{   id: 78,
   question: "Przyporządkuj nazwy przycisków oznaczonych numerem 6",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/Garmin.png",
   wyjasnienie: "Strona 92 w instrukcji Garmina G950",
   odpowiedz1: "COM Knob",
   odpowiedz2: "NAV Knob",
   odpowiedz3: "COM VOL/SQ Knob",
   odpowiedz4: "NAV VOL/ID Knob"
},

{   id: 79,
   question: "Przyporządkuj nazwy przycisków oznaczonych numerem 7",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/Garmin.png",
   wyjasnienie: "Strona 92 w instrukcji Garmina G950",
   odpowiedz1: "COM Frequency Transfer Key",
   odpowiedz2: "COM Frequency Box",
   odpowiedz3: "NAV Frequency Box",
   odpowiedz4: "NAV Frequency Transfer Key"
},

{   id: 80,
   question: "Przyporządkuj nazwy przycisków oznaczonych numerem 8",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/Garmin.png",
   wyjasnienie: "Strona 92 w instrukcji Garmina G950",
   odpowiedz1: "COM VOL/SQ Knob",
   odpowiedz2: "COM Knob",
   odpowiedz3: "NAV Knob",
   odpowiedz4: "NAV VOL/ID Knob"
},

{   id: 81,
   question: "Przyporządkuj nazwy przycisków oznaczonych numerem 9",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/Garmin.png",
   wyjasnienie: "Strona 92 w instrukcji Garmina G950",
   odpowiedz1: "Nearest Airports Window",
   odpowiedz2: "NAV Frequency Box",
   odpowiedz3: "COM Frequency Box",
   odpowiedz4: "Transponder Data Box"
},

{   id: 82,
   question: "Przyporządkuj nazwy przycisków oznaczonych numerem 10",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/Garmin.png",
   wyjasnienie: "Strona 92 w instrukcji Garmina G950",
   odpowiedz1: "ENT Key",
   odpowiedz2: "CLR Key",
   odpowiedz3: "FPL Key",
   odpowiedz4: "PROC Key"
},

{   id: 83,
   question: "Przyporządkuj nazwy przycisków oznaczonych numerem 11",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/Garmin.png",
   wyjasnienie: "Strona 92 w instrukcji Garmina G950",
   odpowiedz1: "FMS Knob",
   odpowiedz2: "COM Knob",
   odpowiedz3: "COM VOL/SQ Knob",
   odpowiedz4: "NAV VOL/ID Knob"
},

{   id: 84,
   question: "Przyporządkuj nazwy przycisków oznaczonych numerem 12",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/Garmin.png",
   wyjasnienie: "Strona 92 w instrukcji Garmina G950",
   odpowiedz1: "Transponder Data Box",
   odpowiedz2: "NAV Frequency Box",
   odpowiedz3: "COM Frequency Box",
   odpowiedz4: "Nearest Airports Window"
},

{   id: 85,
   question: "Nazwa przyrządu oznaczonego numerem 1:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/standby.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "Prędkościomierz",
   odpowiedz2: "Wysokościomierz",
   odpowiedz3: "LH Oil Pressure",
   odpowiedz4: "Obrotomierz"
},

{   id: 86,
   question: "Nazwa przyrządu oznaczonego numerem 2:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/standby.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "Wysokościomierz",
   odpowiedz2: "Prędkościomierz",
   odpowiedz3: "LH Fuel Pressure",
   odpowiedz4: "Wariometr"
},

{   id: 87,
   question: "Nazwa przyrządu oznaczonego numerem 3:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/standby.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "RH Fuel Pressure",
   odpowiedz2: "RH ram air inlet",
   odpowiedz3: "RH Oil Pressure",
   odpowiedz4: "RH Paliwomierz"
},

{   id: 88,
   question: "W jakich jednostkach jest przyrząd oznaczony numerem 1?",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/standby.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "knots",
   odpowiedz2: "ft",
   odpowiedz3: "PSI",
   odpowiedz4: "RPM"
},

{   id: 89,
   question: "W jakich jednostkach jest przyrząd oznaczony numerem 2?",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/standby.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "ft",
   odpowiedz2: "knots",
   odpowiedz3: "PSI",
   odpowiedz4: "ft/min"
},

{   id: 90,
   question: "W jakich jednostkach jest przyrząd oznaczony numerem 3?",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/standby.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "PSI",
   odpowiedz2: "°C/F",
   odpowiedz3: "gal",
   odpowiedz4: "gal/min"
},

{   id: 91,
   question: "Nazwa przyrządu oznaczonego numerem 1:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/right-upper.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "Obrotomierz",
   odpowiedz2: "Manifold Pressure",
   odpowiedz3: "RH Oil Pressure",
   odpowiedz4: "Prędkościomierz"
},

{   id: 92,
   question: "Nazwa przyrządu oznaczonego numerem 2:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/right-upper.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "Manifold Pressure",
   odpowiedz2: "Obrotomierz",
   odpowiedz3: "Oil Pressure",
   odpowiedz4: "Oil Temperature"
},

{   id: 93,
   question: "Nazwa przyrządu oznaczonego numerem 3:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/right-upper.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "LH CHT",
   odpowiedz2: "LH Paliwomierz",
   odpowiedz3: "LH Oil Pressure",
   odpowiedz4: "LH Oil Temperature"
},

{   id: 94,
   question: "Nazwa przyrządu oznaczonego numerem 4:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/right-upper.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "RH Oil Temperature",
   odpowiedz2: "RH Paliwomierz",
   odpowiedz3: "RH Oil Pressure",
   odpowiedz4: "RH CHT"
},

{   id: 95,
   question: "Nazwa przyrządu oznaczonego numerem 5:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/right-upper.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "RH Paliwomierz",
   odpowiedz2: "RH Oil Temperature",
   odpowiedz3: "RH Oil Pressure",
   odpowiedz4: "RH CHT"
},

{   id: 96,
   question: "Nazwa przyrządu oznaczonego numerem 6:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/right-upper.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "LH Oil Pressure",
   odpowiedz2: "LH Oil Temperature",
   odpowiedz3: "LH Paliwomierz",
   odpowiedz4: "LH CHT"
},

{   id: 97,
   question: "Jednostki przyrządu oznaczonego numerem 1:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/right-upper.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "RPM",
   odpowiedz2: "inHg",
   odpowiedz3: "bar",
   odpowiedz4: "PSI"
},

{   id: 98,
   question: "Jednostki przyrządu oznaczonego numerem 2:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/right-upper.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "inHg",
   odpowiedz2: "RPM",
   odpowiedz3: "bar",
   odpowiedz4: "°C/F"
},

{   id: 99,
   question: "Jednostki przyrządu oznaczonego numerem 3:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/right-upper.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "°C/F",
   odpowiedz2: "Litry",
   odpowiedz3: "bar",
   odpowiedz4: "PSI"
},

{   id: 100,
   question: "Jednostki przyrządu oznaczonego numerem 4:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/right-upper.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "°C/F",
   odpowiedz2: "Litry",
   odpowiedz3: "bar",
   odpowiedz4: "PSI"
},

{   id: 101,
   question: "Jednostki przyrządu oznaczonego numerem 5:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/right-upper.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "Litry",
   odpowiedz2: "°C/F",
   odpowiedz3: "bar",
   odpowiedz4: "PSI"
},

{   id: 102,
   question: "Jednostki przyrządu oznaczonego numerem 6:",
   odpowiedzPISEMNA: "nie",
   zdjecie: "tak",
   source: "../images/SPULC/right-upper.png",
   wyjasnienie: "Strona 207 w AFM SP-ULC",
   odpowiedz1: "bar",
   odpowiedz2: "°C/F",
   odpowiedz3: "Litry",
   odpowiedz4: "PSI"
}

];