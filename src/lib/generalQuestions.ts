const questions = [
  {
    id: 1,
    question: `In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil ... :: In Germany, people are allowed to openly say something against the government because ...`,
    options: {
      A: `hier Religionsfreiheit gilt. :: religious freedom applies here.`,
      B: `die Menschen Steuern zahlen. :: people pay taxes.`,
      C: `die Menschen das Wahlrecht haben. :: people have the right to vote.`,
      D: `hier Meinungsfreiheit gilt. :: freedom of opinion applies here.`
    },
    correctAnswer: "D"
  },
  {
    id: 2,
    question: `In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am ... :: In Germany, parents can decide until their child's 14th birthday whether it participates in school ...`,
    options: {
      A: `Geschichtsunterricht teilnimmt. :: history lessons.`,
      B: `Religionsunterricht teilnimmt. :: religious education.`,
      C: `Politikunterricht teilnimmt. :: politics lessons.`,
      D: `Sprachunterricht teilnimmt. :: language lessons.`
    },
    correctAnswer: "B"
  },
  {
    id: 3,
    question: `Deutschland ist ein Rechtsstaat. Was ist damit gemeint? :: Germany is a constitutional state. What does this mean?`,
    options: {
      A: `Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten. :: All residents and the state must abide by the laws.`,
      B: `Der Staat macht die Gesetze. :: The state makes the laws.`,
      C: `Nur Deutsche müssen die Gesetze befolgen. :: Only Germans must obey the laws.`,
      D: `Die Gerichte machen die Gesetze. :: The courts make the laws.`
    },
    correctAnswer: "A"
  },
  {
    id: 4,
    question: `Welches Recht gehört zu den Grundrechten in Deutschland? :: Which right belongs to the basic rights in Germany?`,
    options: {
      A: `Waffenbesitz :: Gun ownership`,
      B: `Faustrecht :: Vigilante justice`,
      C: `Meinungsfreiheit :: Freedom of opinion`,
      D: `Selbstjustiz :: Self-justice`
    },
    correctAnswer: "C"
  },
  {
    id: 5,
    question: `Wahlen in Deutschland sind frei. Was bedeutet das? :: Elections in Germany are free. What does this mean?`,
    options: {
      A: `Alle wahlberechtigten Bürger und Bürgerinnen können ohne Zwang entscheiden, wen sie wählen. :: All eligible citizens can decide without coercion whom they vote for.`,
      B: `Man kann online wählen. :: You can vote online.`,
      C: `Wahlen kosten nichts. :: Elections cost nothing.`,
      D: `Jeder kann ohne Personalausweis wählen. :: Anyone can vote without an ID card.`
    },
    correctAnswer: "A"
  },
  {
    id: 6,
    question: `Wie heißt die deutsche Verfassung? :: What is the German constitution called?`,
    options: {
      A: `Volksgesetz :: People's Law`,
      B: `Bundesgesetz :: Federal Law`,
      C: `Deutsches Gesetz :: German Law`,
      D: `Grundgesetz :: Basic Law`
    },
    correctAnswer: "D"
  },
  {
    id: 7,
    question: `Welche Aussage ist richtig? In Deutschland ... :: Which statement is correct? In Germany ...`,
    options: {
      A: `sind Staat und Religionsgemeinschaften voneinander getrennt. :: state and religious communities are separated.`,
      B: `bilden die Religionsgemeinschaften den Staat. :: religious communities form the state.`,
      C: `ist der Staat abhängig von den Religionsgemeinschaften. :: the state depends on religious communities.`,
      D: `bilden Staat und Religionsgemeinschaften eine Einheit. :: state and religious communities form a unity.`
    },
    correctAnswer: "A"
  },
  {
    id: 8,
    question: `Was steht nicht im Grundgesetz von Deutschland? :: What is not in the Basic Law of Germany?`,
    options: {
      A: `Die Würde des Menschen ist unantastbar. :: Human dignity is inviolable.`,
      B: `Alle sollen gleich viel Geld haben. :: Everyone should have the same amount of money.`,
      C: `Jeder hat das Recht auf freie Entfaltung der Persönlichkeit. :: Everyone has the right to free development of personality.`,
      D: `Alle sind vor dem Gesetz gleich. :: All are equal before the law.`
    },
    correctAnswer: "B"
  },
  {
    id: 9,
    question: `Welches Grundrecht gilt in Deutschland nur für Ausländer / Ausländerinnen? :: Which basic right in Germany applies only to foreigners?`,
    options: {
      A: `Versammlungsfreiheit :: Freedom of assembly`,
      B: `Berufsfreiheit :: Freedom of occupation`,
      C: `Asylrecht :: Right to asylum`,
      D: `Meinungsfreiheit :: Freedom of opinion`
    },
    correctAnswer: "C"
  },
  {
    id: 10,
    question: `Was ist mit dem deutschen Grundgesetz vereinbar? :: What is compatible with the German Basic Law?`,
    options: {
      A: `die Prügelstrafe :: corporal punishment`,
      B: `die Folter :: torture`,
      C: `die Todesstrafe :: death penalty`,
      D: `die Geldstrafe :: monetary fine`
    },
    correctAnswer: "D"
  },
  {
    id: 11,
    question: `Wie wird die Verfassung der Bundesrepublik Deutschland genannt? :: What is the constitution of the Federal Republic of Germany called?`,
    options: {
      A: `Grundgesetz :: Basic Law`,
      B: `Bundesverfassung :: Federal Constitution`,
      C: `Gesetzbuch :: Law Book`,
      D: `Verfassungsgesetz :: Constitutional Law`
    },
    correctAnswer: "A"
  },
  {
    id: 12,
    question: `Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich? :: A party in the German Bundestag wants to abolish press freedom. Is this possible?`,
    options: {
      A: `Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind. :: Yes, if more than half of the members of parliament are in favor.`,
      B: `Ja, aber nur, wenn zwei Drittel der Abgeordneten im Bundestag dafür sind. :: Yes, but only if two-thirds of parliament members are in favor.`,
      C: `Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden. :: No, because press freedom is a basic right. It cannot be abolished.`,
      D: `Ja, wenn der Bundespräsident zustimmt. :: Yes, if the Federal President agrees.`
    },
    correctAnswer: "C"
  },
  {
    id: 13,
    question: `Im Parlament steht der Begriff "Opposition" für ... :: In parliament, the term "opposition" stands for ...`,
    options: {
      A: `die regierenden Parteien. :: the governing parties.`,
      B: `die Fraktion mit den meisten Abgeordneten. :: the faction with the most representatives.`,
      C: `alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten. :: all parties that reached the 5% threshold in the last election.`,
      D: `alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören. :: all representatives who do not belong to the governing party/parties.`
    },
    correctAnswer: "D"
  },
  {
    id: 14,
    question: `Meinungsfreiheit in Deutschland heißt, dass ich ... :: Freedom of opinion in Germany means that I ...`,
    options: {
      A: `auf Flugblättern falsche Tatsachen behaupten darf. :: may claim false facts on leaflets.`,
      B: `meine Meinung in Leserbriefen äußern darf. :: may express my opinion in letters to the editor.`,
      C: `Nazi-Symbole tragen darf. :: may wear Nazi symbols.`,
      D: `andere Personen beschimpfen darf. :: may insult other people.`
    },
    correctAnswer: "B"
  },
  {
    id: 15,
    question: `Was bedeutet "Religionsfreiheit"? :: What does "religious freedom" mean?`,
    options: {
      A: `Man darf seine Religion wechseln oder keine Religion haben. :: One may change religion or have no religion.`,
      B: `Man darf nur einer Religion angehören. :: One may only belong to one religion.`,
      C: `Man darf nicht an Gott glauben. :: One may not believe in God.`,
      D: `Man darf nur der christlichen Religion angehören. :: One may only belong to the Christian religion.`
    },
    correctAnswer: "A"
  },
  {
    id: 16,
    question: `Was ist in Deutschland ein Brauch zu Ostern? :: What is a custom at Easter in Germany?`,
    options: {
      A: `Kürbisse in die Fenster stellen :: putting pumpkins in windows`,
      B: `einen Tannenbaum schmücken :: decorating a Christmas tree`,
      C: `Eier bemalen :: painting eggs`,
      D: `Raketen in die Luft schießen :: shooting rockets into the air`
    },
    correctAnswer: "C"
  },
  {
    id: 17,
    question: `Welches Fest wird in Deutschland am 3. Oktober gefeiert? :: Which holiday is celebrated in Germany on October 3rd?`,
    options: {
      A: `der Tag der Deutschen Einheit :: Day of German Unity`,
      B: `der Reformationstag :: Reformation Day`,
      C: `der Tag der Arbeit :: Labor Day`,
      D: `der Buß- und Bettag :: Day of Repentance and Prayer`
    },
    correctAnswer: "A"
  },
  {
    id: 18,
    question: `Was ist kein deutsches Bundesland? :: What is not a German federal state?`,
    options: {
      A: `Elsass-Lothringen :: Alsace-Lorraine`,
      B: `Nordrhein-Westfalen :: North Rhine-Westphalia`,
      C: `Mecklenburg-Vorpommern :: Mecklenburg-Western Pomerania`,
      D: `Sachsen-Anhalt :: Saxony-Anhalt`
    },
    correctAnswer: "A"
  },
  {
    id: 19,
    question: `Welches ist ein Bundesland der Bundesrepublik Deutschland? :: Which is a federal state of the Federal Republic of Germany?`,
    options: {
      A: `Mecklenburg-Vorpommern :: Mecklenburg-Western Pomerania`,
      B: `Lothringen :: Lorraine`,
      C: `Elsass :: Alsace`,
      D: `Normandie :: Normandy`
    },
    correctAnswer: "A"
  },
  {
    id: 20,
    question: `Mit welchen Worten beginnt die deutsche Nationalhymne? :: With which words does the German national anthem begin?`,
    options: {
      A: `Völker, hört die Signale... :: Peoples, hear the signals...`,
      B: `Einigkeit und Recht und Freiheit... :: Unity and justice and freedom...`,
      C: `Freude schöner Götterfunken... :: Joy, beautiful spark of divinity...`,
      D: `Deutschland einig Vaterland... :: Germany united fatherland...`
    },
    correctAnswer: "B"
  },
  {
    id: 21,
    question: `Warum gibt es in einer Demokratie mehr als eine Partei? :: Why are there more than one party in a democracy?`,
    options: {
      A: `weil dadurch die unterschiedlichen Meinungen der Bürger und Bürgerinnen vertreten werden :: because this represents the different opinions of citizens`,
      B: `damit Bestechung in der Politik begrenzt wird :: so that corruption in politics is limited`,
      C: `um politische Demonstrationen zu verhindern :: to prevent political demonstrations`,
      D: `um wirtschaftliche Krisen zu vermeiden :: to avoid economic crises`
    },
    correctAnswer: "A"
  },
  {
    id: 22,
    question: `Was bedeutet "Volkssouveränität"? Alle Staatsgewalt geht vom ... aus. :: What does "popular sovereignty" mean? All state power emanates from the ...`,
    options: {
      A: `Volke :: people`,
      B: `Bundestag :: Federal Parliament`,
      C: `Kaiser :: Emperor`,
      D: `Bundespräsidenten :: Federal President`
    },
    correctAnswer: "A"
  },
  {
    id: 23,
    question: `Was ist Deutschland nicht? :: What is Germany not?`,
    options: {
      A: `eine Demokratie :: a democracy`,
      B: `ein Rechtsstaat :: a constitutional state`,
      C: `eine Monarchie :: a monarchy`,
      D: `ein Sozialstaat :: a welfare state`
    },
    correctAnswer: "C"
  },
  {
    id: 24,
    question: `Welche Staatsform hat Deutschland? :: What form of government does Germany have?`,
    options: {
      A: `Monarchie :: Monarchy`,
      B: `Diktatur :: Dictatorship`,
      C: `Republik :: Republic`,
      D: `Fürstentum :: Principality`
    },
    correctAnswer: "C"
  },
  {
    id: 25,
    question: `In Deutschland sind die meisten Menschen ... :: In Germany, most people are ...`,
    options: {
      A: `Christen :: Christians`,
      B: `Muslime :: Muslims`,
      C: `Juden :: Jews`,
      D: `Buddhisten :: Buddhists`
    },
    correctAnswer: "A"
  },
  {
    id: 26,
    question: `Was ist in Deutschland vor allem ein Symbol für Weihnachten? :: What is mainly a symbol for Christmas in Germany?`,
    options: {
      A: `der Tannenbaum :: the fir tree`,
      B: `der Lebkuchen :: the gingerbread`,
      C: `der Stollen :: the stollen`,
      D: `die Gans :: the goose`
    },
    correctAnswer: "A"
  },
  {
    id: 27,
    question: `Parlamentsmitglieder, die von den Bürgern und Bürgerinnen gewählt werden, nennt man ... :: Parliamentary members who are elected by citizens are called ...`,
    options: {
      A: `Abgeordnete :: representatives`,
      B: `Kanzler :: chancellors`,
      C: `Botschafter :: ambassadors`,
      D: `Ministerpräsidenten :: minister presidents`
    },
    correctAnswer: "A"
  },
  {
    id: 28,
    question: `Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands? :: Which organ does not belong to the constitutional organs of Germany?`,
    options: {
      A: `der Bundesrat :: the Federal Council`,
      B: `der Bundespräsident :: the Federal President`,
      C: `die Bürgerversammlung :: the citizens' assembly`,
      D: `die Bundesregierung :: the Federal Government`
    },
    correctAnswer: "C"
  },
  {
    id: 29,
    question: `Wer wählt in Deutschland die Abgeordneten zum Bundestag? :: Who elects the representatives to the Bundestag in Germany?`,
    options: {
      A: `das Militär :: the military`,
      B: `die Wirtschaft :: the economy`,
      C: `das wahlberechtigte Volk :: the eligible voters`,
      D: `die Verwaltung :: the administration`
    },
    correctAnswer: "C"
  },
  {
    id: 30,
    question: `Welches Tier ist das Wappentier der Bundesrepublik Deutschland? :: Which animal is the heraldic animal of the Federal Republic of Germany?`,
    options: {
      A: `der Löwe :: the lion`,
      B: `der Adler :: the eagle`,
      C: `der Bär :: the bear`,
      D: `der Hirsch :: the stag`
    },
    correctAnswer: "B"
  },
  {
    id: 31,
    question: `Was ist kein Merkmal unserer Demokratie? :: What is not a characteristic of our democracy?`,
    options: {
      A: `regelmäßige Wahlen :: regular elections`,
      B: `Pressezensur :: press censorship`,
      C: `Meinungsfreiheit :: freedom of opinion`,
      D: `verschiedene Parteien :: different parties`
    },
    correctAnswer: "B"
  },
  {
    id: 32,
    question: `Die Zusammenkunft von Abgeordneten des Deutschen Bundestages nennt man ... :: The assembly of representatives of the German Bundestag is called ...`,
    options: {
      A: `Versammlung :: assembly`,
      B: `Sitzung :: session`,
      C: `Einberufung :: convocation`,
      D: `Tagung :: meeting`
    },
    correctAnswer: "B"
  },
  {
    id: 33,
    question: `Wie nennt man in Deutschland die Vereinigung von Abgeordneten einer Partei im Parlament? :: What is the association of representatives of a party in parliament called in Germany?`,
    options: {
      A: `Verband :: association`,
      B: `Ältestenrat :: council of elders`,
      C: `Fraktion :: parliamentary group`,
      D: `Opposition :: opposition`
    },
    correctAnswer: "C"
  },
  {
    id: 34,
    question: `Die deutschen Gesetze verbieten ... :: German laws prohibit ...`,
    options: {
      A: `Meinungsfreiheit der Einwohner und Einwohnerinnen :: freedom of opinion of residents`,
      B: `Petitionen der Bürger und Bürgerinnen :: petitions from citizens`,
      C: `Versammlungsfreiheit der Einwohner und Einwohnerinnen :: freedom of assembly of residents`,
      D: `Volksverhetzung :: incitement to hatred`
    },
    correctAnswer: "D"
  },
  {
    id: 35,
    question: `Welches ist das Wappen der Bundesrepublik Deutschland? :: Which is the coat of arms of the Federal Republic of Germany?`,
    options: {
      A: `der Bundesadler :: the federal eagle`,
      B: `die Deutschlandfahne :: the German flag`,
      C: `der Berliner Bär :: the Berlin bear`,
      D: `die Nationalflagge :: the national flag`
    },
    correctAnswer: "A"
  },
  {
    id: 36,
    question: `Was für eine Staatsform hat Deutschland heute? :: What form of state does Germany have today?`,
    options: {
      A: `Monarchie :: Monarchy`,
      B: `Demokratie :: Democracy`,
      C: `Diktatur :: Dictatorship`,
      D: `Fürstentum :: Principality`
    },
    correctAnswer: "B"
  },
  {
    id: 37,
    question: `In welchem Jahr wurde die Mauer in Berlin für alle geöffnet? :: In which year was the Berlin Wall opened for everyone?`,
    options: {
      A: `1987`,
      B: `1989`,
      C: `1992`,
      D: `1995`
    },
    correctAnswer: "B"
  },
  {
    id: 38,
    question: `Wann war der Zweite Weltkrieg zu Ende? :: When did World War II end?`,
    options: {
      A: `1944`,
      B: `1945`,
      C: `1946`,
      D: `1947`
    },
    correctAnswer: "B"
  },
  {
    id: 39,
    question: `Wann waren die Nationalsozialisten in Deutschland an der Macht? :: When were the National Socialists in power in Germany?`,
    options: {
      A: `1918 bis 1923 :: 1918 to 1923`,
      B: `1932 bis 1950 :: 1932 to 1950`,
      C: `1933 bis 1945 :: 1933 to 1945`,
      D: `1945 bis 1989 :: 1945 to 1989`
    },
    correctAnswer: "C"
  },
  {
    id: 40,
    question: `Was war am 8. Mai 1945? :: What happened on May 8, 1945?`,
    options: {
      A: `Tod Adolf Hitlers :: Death of Adolf Hitler`,
      B: `Beginn des Berliner Mauerbaus :: Beginning of Berlin Wall construction`,
      C: `Wahl von Konrad Adenauer zum Bundeskanzler :: Election of Konrad Adenauer as Chancellor`,
      D: `Ende des Zweiten Weltkriegs in Europa :: End of World War II in Europe`
    },
    correctAnswer: "D"
  },
  {
    id: 41,
    question: `Wofür steht das "D" in der Abkürzung CDU? :: What does the "D" stand for in the abbreviation CDU?`,
    options: {
      A: `Demokratie :: Democracy`,
      B: `Deutschland :: Germany`,
      C: `Deutscher :: German`,
      D: `Demokratisch :: Democratic`
    },
    correctAnswer: "A"
  },
  {
    id: 42,
    question: `Was war die Stasi? :: What was the Stasi?`,
    options: {
      A: `der Geheimdienst im "Dritten Reich" :: the secret service in the "Third Reich"`,
      B: `eine berühmte deutsche Gedenkstätte :: a famous German memorial`,
      C: `der Geheimdienst der DDR :: the secret service of the GDR`,
      D: `ein deutscher TV-Sender :: a German TV channel`
    },
    correctAnswer: "C"
  },
  {
    id: 43,
    question: `Welches Land ist ein Nachbarland von Deutschland? :: Which country is a neighboring country of Germany?`,
    options: {
      A: `Rumänien :: Romania`,
      B: `Bulgarien :: Bulgaria`,
      C: `Polen :: Poland`,
      D: `Griechenland :: Greece`
    },
    correctAnswer: "C"
  },
  {
    id: 44,
    question: `Wie viele Bundesländer hat die Bundesrepublik Deutschland? :: How many federal states does the Federal Republic of Germany have?`,
    options: {
      A: `14`,
      B: `15`,
      C: `16`,
      D: `17`
    },
    correctAnswer: "C"
  },
  {
    id: 45,
    question: `Welche Farben hat die deutsche Flagge? :: What colors does the German flag have?`,
    options: {
      A: `schwarz-rot-gold :: black-red-gold`,
      B: `rot-weiß-schwarz :: red-white-black`,
      C: `schwarz-gelb-rot :: black-yellow-red`,
      D: `schwarz-rot-grün :: black-red-green`
    },
    correctAnswer: "A"
  },
  {
    id: 46,
    question: `Welches ist die Hauptstadt der Bundesrepublik Deutschland? :: Which is the capital of the Federal Republic of Germany?`,
    options: {
      A: `Bonn`,
      B: `Berlin`,
      C: `Hamburg`,
      D: `München :: Munich`
    },
    correctAnswer: "B"
  },
  {
    id: 47,
    question: `Welches Bundesland ist ein Stadtstaat? :: Which federal state is a city-state?`,
    options: {
      A: `Hamburg`,
      B: `Sachsen :: Saxony`,
      C: `Bayern :: Bavaria`,
      D: `Thüringen :: Thuringia`
    },
    correctAnswer: "A"
  },
  {
    id: 48,
    question: `Welcher Strom fließt durch Hamburg? :: Which river flows through Hamburg?`,
    options: {
      A: `die Elbe :: the Elbe`,
      B: `die Weser :: the Weser`,
      C: `der Rhein :: the Rhine`,
      D: `die Oder :: the Oder`
    },
    correctAnswer: "A"
  },
  {
    id: 49,
    question: `Welche Stadt hat die meisten Einwohner? :: Which city has the most inhabitants?`,
    options: {
      A: `Hamburg`,
      B: `München :: Munich`,
      C: `Berlin`,
      D: `Köln :: Cologne`
    },
    correctAnswer: "C"
  },
  {
    id: 50,
    question: `Welche Stadt ist ein Stadtstaat der Bundesrepublik Deutschland? :: Which city is a city-state of the Federal Republic of Germany?`,
    options: {
      A: `München :: Munich`,
      B: `Hamburg`,
      C: `Stuttgart`,
      D: `Frankfurt am Main`
    },
    correctAnswer: "B"
  },
  {
    id: 51,
    question: `In welchem Bundesland liegt Frankfurt am Main? :: In which federal state is Frankfurt am Main located?`,
    options: {
      A: `Hessen :: Hesse`,
      B: `Nordrhein-Westfalen :: North Rhine-Westphalia`,
      C: `Bayern :: Bavaria`,
      D: `Baden-Württemberg :: Baden-Württemberg`
    },
    correctAnswer: "A"
  },
  {
    id: 52,
    question: `Welcher Fluss fließt durch Bremen? :: Which river flows through Bremen?`,
    options: {
      A: `die Elbe :: the Elbe`,
      B: `die Weser :: the Weser`,
      C: `der Rhein :: the Rhine`,
      D: `die Spree :: the Spree`
    },
    correctAnswer: "B"
  },
  {
    id: 53,
    question: `Von 1961 bis 1989 war Berlin ... :: From 1961 to 1989, Berlin was ...`,
    options: {
      A: `ohne Regierung :: without government`,
      B: `geteilt :: divided`,
      C: `nur Weststadt :: only western city`,
      D: `nur Oststadt :: only eastern city`
    },
    correctAnswer: "B"
  },
  {
    id: 54,
    question: `Was ist richtig? Die Bundesrepublik Deutschland hat ... :: What is correct? The Federal Republic of Germany has ...`,
    options: {
      A: `17 Bundesländer :: 17 federal states`,
      B: `18 Bundesländer :: 18 federal states`,
      C: `19 Bundesländer :: 19 federal states`,
      D: `16 Bundesländer :: 16 federal states`
    },
    correctAnswer: "D"
  },
  {
    id: 55,
    question: `Was ist richtig? In Deutschland ... :: What is correct? In Germany ...`,
    options: {
      A: `ist der Bundestag das Parlament :: the Bundestag is the parliament`,
      B: `wird der Bundeskanzler vom Volk gewählt :: the chancellor is elected by the people`,
      C: `ist der Bundespräsident der Regierungschef :: the federal president is the head of government`,
      D: `hat der Bundeskanzler das Amt für 8 Jahre :: the chancellor serves for 8 years`
    },
    correctAnswer: "A"
  },
  {
    id: 56,
    question: `Welches Amt gehört in Deutschland zur Gemeindeverwaltung? :: Which office belongs to municipal administration in Germany?`,
    options: {
      A: `Pfarrer / Pfarrerin :: priest`,
      B: `Bürgermeister / Bürgermeisterin :: mayor`,
      C: `Bundestagsabgeordneter / Bundestagsabgeordnete :: member of parliament`,
      D: `Bundeskanzler / Bundeskanzlerin :: federal chancellor`
    },
    correctAnswer: "B"
  },
  {
    id: 57,
    question: `Die Bundesrepublik Deutschland ist heute gegliedert in ... :: The Federal Republic of Germany is today structured into ...`,
    options: {
      A: `vier Besatzungszonen :: four occupation zones`,
      B: `einen Oststaat und einen Weststaat :: an eastern state and a western state`,
      C: `16 Kantone :: 16 cantons`,
      D: `Bund, Länder und Kommunen :: federation, states and municipalities`
    },
    correctAnswer: "D"
  },
  {
    id: 58,
    question: `Was bedeutet die Abkürzung FDP? :: What does the abbreviation FDP mean?`,
    options: {
      A: `Friedliche Demonstrative Partei :: Peaceful Demonstrative Party`,
      B: `Freie Demokratische Partei :: Free Democratic Party`,
      C: `Führende Demokratische Partei :: Leading Democratic Party`,
      D: `Freie Deutsche Partei :: Free German Party`
    },
    correctAnswer: "B"
  },
  {
    id: 59,
    question: `Welche Parteien wurden 1946 zwangsweise zur SED vereint? :: Which parties were forcibly united to form the SED in 1946?`,
    options: {
      A: `KPD und SPD :: KPD and SPD`,
      B: `CDU und FDP :: CDU and FDP`,
      C: `SPD und CDU :: SPD and CDU`,
      D: `SPD und FDP :: SPD and FDP`
    },
    correctAnswer: "A"
  },
  {
    id: 60,
    question: `In welchem Jahr zog die deutsche Bundesregierung von Bonn nach Berlin? :: In which year did the German federal government move from Bonn to Berlin?`,
    options: {
      A: `1989`,
      B: `1999`,
      C: `2000`,
      D: `1990`
    },
    correctAnswer: "B"
  },
  {
    id: 61,
    question: `Was bedeutet die Abkürzung CSU? :: What does the abbreviation CSU mean?`,
    options: {
      A: `Christlich Sichere Union :: Christian Secure Union`,
      B: `Christlich Süddeutsche Union :: Christian South German Union`,
      C: `Christlich Soziale Union :: Christian Social Union`,
      D: `Christlich Sächsische Union :: Christian Saxon Union`
    },
    correctAnswer: "C"
  },
  {
    id: 62,
    question: `Die Wirtschaftsform in Deutschland nennt man ... :: The economic system in Germany is called ...`,
    options: {
      A: `freie Zentralwirtschaft :: free central economy`,
      B: `soziale Marktwirtschaft :: social market economy`,
      C: `gelenkte Zentralwirtschaft :: controlled central economy`,
      D: `Planwirtschaft :: planned economy`
    },
    correctAnswer: "B"
  },
  {
    id: 63,
    question: `Zu welcher Versicherung gehört die Pflegeversicherung? :: To which insurance does long-term care insurance belong?`,
    options: {
      A: `Sozialversicherung :: social insurance`,
      B: `Unfallversicherung :: accident insurance`,
      C: `Hausratversicherung :: household insurance`,
      D: `Haftpflichtversicherung :: liability insurance`
    },
    correctAnswer: "A"
  },
  {
    id: 64,
    question: `Der 9. November hat eine besondere Bedeutung in der deutschen Geschichte. Nennen Sie zwei historische Ereignisse zu diesem Datum. :: November 9th has special significance in German history. Name two historical events on this date.`,
    options: {
      A: `1968 Studentenrevolte in Berlin, 1989 Fall der Berliner Mauer :: 1968 Student revolt in Berlin, 1989 Fall of Berlin Wall`,
      B: `1923 Hitler-Putsch in München, 1989 Fall der Berliner Mauer :: 1923 Hitler putsch in Munich, 1989 Fall of Berlin Wall`,
      C: `1933 Bücherverbrennung, 1989 Fall der Berliner Mauer :: 1933 Book burning, 1989 Fall of Berlin Wall`,
      D: `1932 Preußenschlag, 1989 Fall der Berliner Mauer :: 1932 Prussian coup, 1989 Fall of Berlin Wall`
    },
    correctAnswer: "B"
  },
  {
    id: 65,
    question: `Was kennzeichnet eine Demokratie? :: What characterizes a democracy?`,
    options: {
      A: `Pressezensur, Versammlungsverbot, Meinungsfreiheit :: Press censorship, assembly ban, freedom of opinion`,
      B: `Meinungsfreiheit, Pressezensur, Versammlungsverbot :: Freedom of opinion, press censorship, assembly ban`,
      C: `Meinungsfreiheit, Versammlungsfreiheit, Pressefreiheit :: Freedom of opinion, freedom of assembly, press freedom`,
      D: `Versammlungsverbot, Pressezensur, Meinungsverbot :: Assembly ban, press censorship, opinion ban`
    },
    correctAnswer: "C"
  },
  {
    id: 66,
    question: `Die Wahlen zum Deutschen Bundestag finden in der Regel alle ... Jahre statt. :: Elections to the German Bundestag generally take place every ... years.`,
    options: {
      A: `drei :: three`,
      B: `vier :: four`,
      C: `fünf :: five`,
      D: `sechs :: six`
    },
    correctAnswer: "B"
  },
  {
    id: 67,
    question: `Welche Bedingung muss erfüllt sein, damit eine politische Partei in den Deutschen Bundestag einziehen kann? :: What condition must be met for a political party to enter the German Bundestag?`,
    options: {
      A: `Sie muss in den neuen Bundesländern antreten :: It must run in the new federal states`,
      B: `Sie muss mindestens 5% der Stimmen erhalten :: It must receive at least 5% of the votes`,
      C: `Sie muss mindestens 10% der Stimmen erhalten :: It must receive at least 10% of the votes`,
      D: `Sie muss in allen Bundesländern antreten :: It must run in all federal states`
    },
    correctAnswer: "B"
  },
  {
    id: 68,
    question: `Was regelt das Grundgesetz? :: What does the Basic Law regulate?`,
    options: {
      A: `die Geschäftsordnung des Bundestages :: the rules of procedure of the Bundestag`,
      B: `den Staatsaufbau und die Grundrechte :: the structure of the state and basic rights`,
      C: `die Regierungszeit des Bundeskanzlers :: the term of office of the federal chancellor`,
      D: `das Verhältnis zwischen Bund und Kommunen :: the relationship between federation and municipalities`
    },
    correctAnswer: "B"
  },
  {
    id: 69,
    question: `Womit finanziert der deutsche Staat die Sozialversicherung? :: How does the German state finance social insurance?`,
    options: {
      A: `Kirchensteuer :: church tax`,
      B: `Sozialabgaben der Beschäftigten und Arbeitgeber :: social contributions from employees and employers`,
      C: `Spendengeldern :: donations`,
      D: `Vereinsbeiträgen :: club fees`
    },
    correctAnswer: "B"
  },
  {
    id: 70,
    question: `Welche Aussage über die Gewaltenteilung in Deutschland ist richtig? :: Which statement about the separation of powers in Germany is correct?`,
    options: {
      A: `Die Bundeswehr kontrolliert die Regierung :: The military controls the government`,
      B: `Das Bundesverfassungsgericht gehört zur Regierung :: The Federal Constitutional Court belongs to the government`,
      C: `Bundestag und Bundesrat sind Organe der Gesetzgebung :: Bundestag and Bundesrat are organs of legislation`,
      D: `Die Bundesregierung kontrolliert das Bundesverfassungsgericht :: The federal government controls the Federal Constitutional Court`
    },
    correctAnswer: "C"
  },
  {
    id: 71,
    question: `Was ist eine Aufgabe von Wahlhelfern / Wahlhelferinnen in Deutschland? :: What is a task of election helpers in Germany?`,
    options: {
      A: `Sie helfen alten Menschen beim Wählen :: They help elderly people vote`,
      B: `Sie schreiben die Wahlprogramme :: They write election programs`,
      C: `Sie geben Tipps für die Wahl ab :: They give voting tips`,
      D: `Sie zählen die Stimmen nach der Wahl :: They count votes after the election`
    },
    correctAnswer: "D"
  },
  {
    id: 72,
    question: `In Deutschland darf ein Richter / eine Richterin über sein / ihr Urteil mit niemandem sprechen. Das nennt man ... :: In Germany, a judge may not speak with anyone about his/her verdict. This is called ...`,
    options: {
      A: `Verfassungsschutz :: constitutional protection`,
      B: `Justizvollzug :: execution of justice`,
      C: `Rechtsprechung :: jurisdiction`,
      D: `richterliche Unabhängigkeit :: judicial independence`
    },
    correctAnswer: "D"
  },
  {
    id: 73,
    question: `Was ist eine Aufgabe der Polizei in Deutschland? :: What is a task of the police in Germany?`,
    options: {
      A: `das Verteidigen des Landes :: defending the country`,
      B: `das Kontrollieren der Bürger und Bürgerinnen :: controlling the citizens`,
      C: `das Beschützen von Demonstrationen :: protecting demonstrations`,
      D: `das Bewachen der Gefängnisse :: guarding prisons`
    },
    correctAnswer: "C"
  },
  {
    id: 74,
    question: `Wer kann Gesetze in den Bundestag einbringen? :: Who can introduce laws to the Bundestag?`,
    options: {
      A: `die Bundesregierung :: the federal government`,
      B: `alle Bürger und Bürgerinnen :: all citizens`,
      C: `die Gewerkschaften :: the trade unions`,
      D: `die Kirchen :: the churches`
    },
    correctAnswer: "A"
  },
  {
    id: 75,
    question: `Welche Institution in Deutschland gibt Staatsanleihen heraus? :: Which institution in Germany issues government bonds?`,
    options: {
      A: `die Bundesbank :: the Federal Bank`,
      B: `die Bundesregierung :: the federal government`,
      C: `die Bundesdruckerei :: the Federal Printing Office`,
      D: `die Bundesfinanzagentur :: the Federal Finance Agency`
    },
    correctAnswer: "D"
  },
  {
    id: 76,
    question: `Wie oft wird der Bundestag in Deutschland neu gewählt? :: How often is the Bundestag newly elected in Germany?`,
    options: {
      A: `alle 3 Jahre :: every 3 years`,
      B: `alle 4 Jahre :: every 4 years`,
      C: `alle 5 Jahre :: every 5 years`,
      D: `alle 6 Jahre :: every 6 years`
    },
    correctAnswer: "B"
  },
  {
    id: 77,
    question: `Wer wählt den deutschen Bundespräsidenten / die deutsche Bundespräsidentin? :: Who elects the German Federal President?`,
    options: {
      A: `die Bundesversammlung :: the Federal Assembly`,
      B: `der Bundestag :: the Bundestag`,
      C: `das Bundesvolk :: the federal people`,
      D: `die Bundesregierung :: the federal government`
    },
    correctAnswer: "A"
  },
  {
    id: 78,
    question: `Wer ernennt in Deutschland die Minister / die Ministerinnen der Bundesregierung? :: Who appoints the federal government ministers in Germany?`,
    options: {
      A: `der Präsident / die Präsidentin des Bundesverfassungsgerichtes :: the President of the Federal Constitutional Court`,
      B: `der Bundespräsident / die Bundespräsidentin :: the Federal President`,
      C: `der Bundesratspräsident / die Bundesratspräsidentin :: the President of the Federal Council`,
      D: `der Bundestagspräsident / die Bundestagspräsidentin :: the President of the Bundestag`
    },
    correctAnswer: "B"
  },
  {
    id: 79,
    question: `Wer bildet den deutschen Bundesrat? :: Who forms the German Federal Council?`,
    options: {
      A: `die Abgeordneten des Bundestages :: the representatives of the Bundestag`,
      B: `die Minister und Ministerinnen der Länder :: the ministers of the states`,
      C: `die Regierungschefs der Länder :: the heads of government of the states`,
      D: `die Vertreter und Vertreterinnen der Länder :: the representatives of the states`
    },
    correctAnswer: "D"
  },
  {
    id: 80,
    question: `Welche Hauptaufgabe hat der deutsche Bundespräsident / die deutsche Bundespräsidentin? Er / Sie ... :: What is the main task of the German Federal President? He/She ...`,
    options: {
      A: `regiert das Land :: governs the country`,
      B: `entwirft die Gesetze :: drafts the laws`,
      C: `repräsentiert das Land :: represents the country`,
      D: `überwacht die Gerichte :: supervises the courts`
    },
    correctAnswer: "C"
  },
  {
    id: 81,
    question: `Wer wählt in Deutschland den Bundeskanzler / die Bundeskanzlerin? :: Who elects the Chancellor in Germany?`,
    options: {
      A: `der Bundestag :: the Bundestag`,
      B: `der Bundesrat :: the Federal Council`,
      C: `das Volk :: the people`,
      D: `die Bundesversammlung :: the Federal Assembly`
    },
    correctAnswer: "A"
  },
  {
    id: 82,
    question: `Welche Aussage ist richtig? Der deutsche Bundeskanzler (die deutsche Bundeskanzlerin) wird gewählt vom ... :: Which statement is correct? The German Chancellor is elected by the ...`,
    options: {
      A: `Volk :: people`,
      B: `Bundestag :: Bundestag`,
      C: `Bundesrat :: Federal Council`,
      D: `Bundespräsidenten :: Federal President`
    },
    correctAnswer: "B"
  },
  {
    id: 83,
    question: `Was ist die Bundeswehr? :: What is the Bundeswehr?`,
    options: {
      A: `die deutsche Polizei :: the German police`,
      B: `ein deutscher Hafen :: a German port`,
      C: `eine deutsche Bürgerinitiative :: a German citizens' initiative`,
      D: `die deutsche Armee :: the German army`
    },
    correctAnswer: "D"
  },
  {
    id: 84,
    question: `Was bedeutet "passives Wahlrecht"? :: What does "passive voting right" mean?`,
    options: {
      A: `Man darf nicht wählen :: One may not vote`,
      B: `Man kann gewählt werden :: One can be elected`,
      C: `Man darf nur in der Gemeinde wählen :: One may only vote in the municipality`,
      D: `Man kann andere zum Wählen auffordern :: One can encourage others to vote`
    },
    correctAnswer: "B"
  },
  {
    id: 85,
    question: `Was gehört in Deutschland zur Exekutive? :: What belongs to the executive in Germany?`,
    options: {
      A: `die Polizei :: the police`,
      B: `der Bundestag :: the Bundestag`,
      C: `das Bundesverfassungsgericht :: the Federal Constitutional Court`,
      D: `die Gerichte :: the courts`
    },
    correctAnswer: "A"
  },
  {
    id: 86,
    question: `Die Bundesrepublik Deutschland ist ein demokratischer und sozialer ... :: The Federal Republic of Germany is a democratic and social ...`,
    options: {
      A: `Staatenverbund :: confederation of states`,
      B: `Bundesstaat :: federal state`,
      C: `Staatenbund :: confederation`,
      D: `Zentralstaat :: central state`
    },
    correctAnswer: "B"
  },
  {
    id: 87,
    question: `Was ist kein Verfassungsorgan der Bundesrepublik Deutschland? :: What is not a constitutional organ of the Federal Republic of Germany?`,
    options: {
      A: `der Bundesrat :: the Federal Council`,
      B: `der Bundespräsident :: the Federal President`,
      C: `die Bürgerversammlung :: the citizens' assembly`,
      D: `das Bundesverfassungsgericht :: the Federal Constitutional Court`
    },
    correctAnswer: "C"
  },
  {
    id: 88,
    question: `Welche Aufgabe hat der Bundesrat in Deutschland? :: What task does the Federal Council have in Germany?`,
    options: {
      A: `Er kontrolliert die Bundesregierung :: It controls the federal government`,
      B: `Er wählt den Bundeskanzler / die Bundeskanzlerin :: It elects the Chancellor`,
      C: `Er macht die Gesetze :: It makes the laws`,
      D: `Er vertritt die Interessen der Bundesländer :: It represents the interests of the federal states`
    },
    correctAnswer: "D"
  },
  {
    id: 89,
    question: `Wann kann in Deutschland der Bundestag aufgelöst werden? :: When can the Bundestag be dissolved in Germany?`,
    options: {
      A: `wenn der Bundespräsident es will :: when the Federal President wants it`,
      B: `wenn die Regierung es will :: when the government wants it`,
      C: `wenn er nicht mehr legitimiert ist :: when it is no longer legitimated`,
      D: `wenn der Bundeskanzler die Vertrauensfrage verliert :: when the Chancellor loses the vote of confidence`
    },
    correctAnswer: "D"
  },
  {
    id: 90,
    question: `Was bedeutet "aktives Wahlrecht" in Deutschland? :: What does "active voting right" mean in Germany?`,
    options: {
      A: `Man darf wählen :: One may vote`,
      B: `Man muss wählen :: One must vote`,
      C: `Man darf sich zur Wahl aufstellen :: One may stand for election`,
      D: `Man darf andere zum Wählen auffordern :: One may encourage others to vote`
    },
    correctAnswer: "A"
  },
  {
    id: 91,
    question: `Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das ... :: When the parliament of a German federal state is elected, this is called ...`,
    options: {
      A: `Kommunalwahl :: municipal election`,
      B: `Landtagswahl :: state parliament election`,
      C: `Europawahl :: European election`,
      D: `Bundestagswahl :: federal election`
    },
    correctAnswer: "B"
  },
  {
    id: 92,
    question: `Was gehört in Deutschland zur Legislative? :: What belongs to the legislature in Germany?`,
    options: {
      A: `die Bundesregierung :: the federal government`,
      B: `der Bundestag :: the Bundestag`,
      C: `der Bundesgerichtshof :: the Federal Court of Justice`,
      D: `die Bundeswehr :: the military`
    },
    correctAnswer: "B"
  },
  {
    id: 93,
    question: `Womit beschäftigt sich die Gesetzgebung? :: What does legislation deal with?`,
    options: {
      A: `mit der Kontrolle der Bürger und Bürgerinnen :: with the control of citizens`,
      B: `mit der Ernennung der Richter und Richterinnen :: with the appointment of judges`,
      C: `mit dem Erlass von Gesetzen :: with the enactment of laws`,
      D: `mit der Wirtschaftspolitik :: with economic policy`
    },
    correctAnswer: "C"
  },
  {
    id: 94,
    question: `Was ist Aufgabe der Justiz in Deutschland? :: What is the task of the judiciary in Germany?`,
    options: {
      A: `die Einhaltung von Gesetzen zu kontrollieren :: to control compliance with laws`,
      B: `Gesetze zu entwerfen :: to draft laws`,
      C: `Regierungspolitik zu gestalten :: to shape government policy`,
      D: `das Volk zu vertreten :: to represent the people`
    },
    correctAnswer: "A"
  },
  {
    id: 95,
    question: `Welche Parteien gehörten 1990 zu der ersten frei gewählten Regierung der DDR? :: Which parties belonged to the first freely elected government of the GDR in 1990?`,
    options: {
      A: `SPD, SED :: SPD, SED`,
      B: `CDU, DSU, DA :: CDU, DSU, DA`,
      C: `PDS, CDU :: PDS, CDU`,
      D: `SED, DSU :: SED, DSU`
    },
    correctAnswer: "B"
  },
  {
    id: 96,
    question: `Was war der Marshallplan? :: What was the Marshall Plan?`,
    options: {
      A: `ein deutscher Plan zum Wiederaufbau nach dem Zweiten Weltkrieg :: a German plan for reconstruction after World War II`,
      B: `ein amerikanisches Wirtschaftshilfeprogramm für den Wiederaufbau Europas nach dem Zweiten Weltkrieg :: an American economic aid program for the reconstruction of Europe after World War II`,
      C: `ein sowjetisches Programm zur Wiedereingliederung Deutschlands :: a Soviet program for the reintegration of Germany`,
      D: `ein europäischer Plan für den Frieden :: a European plan for peace`
    },
    correctAnswer: "B"
  },
  {
    id: 97,
    question: `Welche Länder wurden nach dem Zweiten Weltkrieg in Deutschland von Großbritannien besetzt? :: Which regions were occupied by Great Britain in Germany after World War II?`,
    options: {
      A: `Nordrhein-Westfalen, Niedersachsen, Schleswig-Holstein, Hamburg :: North Rhine-Westphalia, Lower Saxony, Schleswig-Holstein, Hamburg`,
      B: `Bayern, Baden-Württemberg, Hessen :: Bavaria, Baden-Württemberg, Hesse`,
      C: `Sachsen, Thüringen, Sachsen-Anhalt :: Saxony, Thuringia, Saxony-Anhalt`,
      D: `Brandenburg, Mecklenburg-Vorpommern :: Brandenburg, Mecklenburg-Western Pomerania`
    },
    correctAnswer: "A"
  },
  {
    id: 98,
    question: `Wann wurde die DDR gegründet? :: When was the GDR founded?`,
    options: {
      A: `1947`,
      B: `1948`,
      C: `1949`,
      D: `1950`
    },
    correctAnswer: "C"
  },
  {
    id: 99,
    question: `Wann wurde die Bundesrepublik Deutschland gegründet? :: When was the Federal Republic of Germany founded?`,
    options: {
      A: `1947`,
      B: `1948`,
      C: `1949`,
      D: `1950`
    },
    correctAnswer: "C"
  },
  {
    id: 100,
    question: `Was bedeutet die Abkürzung SPD? :: What does the abbreviation SPD mean?`,
    options: {
      A: `Sozialistische Partei Deutschlands :: Socialist Party of Germany`,
      B: `Sozialdemokratische Partei Deutschlands :: Social Democratic Party of Germany`,
      C: `Sozialpolitische Partei Deutschlands :: Social Policy Party of Germany`,
      D: `Sozialgerechte Partei Deutschlands :: Socially Just Party of Germany`
    },
    correctAnswer: "B"
  },
  {
    id: 101,
    question: `Wer war der erste Bundeskanzler der Bundesrepublik Deutschland? :: Who was the first Federal Chancellor of the Federal Republic of Germany?`,
    options: {
      A: `Konrad Adenauer`,
      B: `Willy Brandt`,
      C: `Helmut Schmidt`,
      D: `Helmut Kohl`
    },
    correctAnswer: "A"
  },
  {
    id: 102,
    question: `Was ist die Europäische Union? :: What is the European Union?`,
    options: {
      A: `ein Staatenverbund mit eigener Währung :: a confederation of states with its own currency`,
      B: `ein europäischer Staat :: a European state`,
      C: `eine internationale Organisation :: an international organization`,
      D: `ein Militärbündnis :: a military alliance`
    },
    correctAnswer: "A"
  },
  {
    id: 103,
    question: `Seit wann ist Deutschland Mitglied der Europäischen Union? :: Since when has Germany been a member of the European Union?`,
    options: {
      A: `1957`,
      B: `1993`,
      C: `1995`,
      D: `2004`
    },
    correctAnswer: "A"
  },
  {
    id: 104,
    question: `Mit welchen Ländern grenzt Deutschland an? :: Which countries does Germany border?`,
    options: {
      A: `9 Länder :: 9 countries`,
      B: `6 Länder :: 6 countries`,
      C: `7 Länder :: 7 countries`,
      D: `8 Länder :: 8 countries`
    },
    correctAnswer: "A"
  },
  {
    id: 105,
    question: `Welches Land ist kein Nachbarland von Deutschland? :: Which country is not a neighboring country of Germany?`,
    options: {
      A: `Frankreich :: France`,
      B: `Ungarn :: Hungary`,
      C: `Österreich :: Austria`,
      D: `Tschechien :: Czech Republic`
    },
    correctAnswer: "B"
  },
  {
    id: 106,
    question: `Was ist die Landeshauptstadt von Nordrhein-Westfalen? :: What is the state capital of North Rhine-Westphalia?`,
    options: {
      A: `Köln :: Cologne`,
      B: `Düsseldorf`,
      C: `Dortmund`,
      D: `Essen`
    },
    correctAnswer: "B"
  },
  {
    id: 107,
    question: `Was ist die Landeshauptstadt von Bayern? :: What is the state capital of Bavaria?`,
    options: {
      A: `Augsburg`,
      B: `Würzburg`,
      C: `München :: Munich`,
      D: `Regensburg`
    },
    correctAnswer: "C"
  },
  {
    id: 108,
    question: `Von welchem Land wurde Deutschland im Zweiten Weltkrieg als letztes befreit? :: By which country was Germany last liberated in World War II?`,
    options: {
      A: `Frankreich :: France`,
      B: `Sowjetunion :: Soviet Union`,
      C: `Großbritannien :: Great Britain`,
      D: `USA`
    },
    correctAnswer: "B"
  },
  {
    id: 109,
    question: `Welcher deutsche Politiker war Bundeskanzler zur Zeit der Wiedervereinigung? :: Which German politician was Chancellor at the time of reunification?`,
    options: {
      A: `Willy Brandt`,
      B: `Helmut Schmidt`,
      C: `Helmut Kohl`,
      D: `Gerhard Schröder`
    },
    correctAnswer: "C"
  },
  {
    id: 110,
    question: `In welchem Jahr wurde der Euro als Bargeld in Deutschland eingeführt? :: In which year was the Euro introduced as cash in Germany?`,
    options: {
      A: `1999`,
      B: `2001`,
      C: `2002`,
      D: `2003`
    },
    correctAnswer: "C"
  },
  {
    id: 111,
    question: `Welche Währung hatte die DDR? :: What currency did the GDR have?`,
    options: {
      A: `Deutsche Mark :: German Mark`,
      B: `Ost-Mark :: East Mark`,
      C: `Mark der DDR :: GDR Mark`,
      D: `Reichsmark`
    },
    correctAnswer: "C"
  },
  {
    id: 112,
    question: `Wer war der erste Bundespräsident der Bundesrepublik Deutschland? :: Who was the first Federal President of the Federal Republic of Germany?`,
    options: {
      A: `Theodor Heuss`,
      B: `Heinrich Lübke`,
      C: `Walter Scheel`,
      D: `Karl Carstens`
    },
    correctAnswer: "A"
  },
  {
    id: 113,
    question: `Was bedeutet die Abkürzung NATO? :: What does the abbreviation NATO mean?`,
    options: {
      A: `North Atlantic Treaty Organization`,
      B: `New Atlantic Treaty Organization`,
      C: `North American Treaty Organization`,
      D: `Northern Atlantic Treaty Organization`
    },
    correctAnswer: "A"
  },
  {
    id: 114,
    question: `Seit wann ist Deutschland Mitglied der NATO? :: Since when has Germany been a member of NATO?`,
    options: {
      A: `1949`,
      B: `1955`,
      C: `1961`,
      D: `1990`
    },
    correctAnswer: "B"
  },
  {
    id: 115,
    question: `Was war der Warschauer Pakt? :: What was the Warsaw Pact?`,
    options: {
      A: `ein Militärbündnis europäischer Staaten :: a military alliance of European states`,
      B: `ein Wirtschaftsbündnis sozialistischer Staaten :: an economic alliance of socialist states`,
      C: `ein Militärbündnis sozialistischer Staaten :: a military alliance of socialist states`,
      D: `ein Friedensvertrag :: a peace treaty`
    },
    correctAnswer: "C"
  },
  {
    id: 116,
    question: `Wann endete der Erste Weltkrieg? :: When did World War I end?`,
    options: {
      A: `1917`,
      B: `1918`,
      C: `1919`,
      D: `1920`
    },
    correctAnswer: "B"
  },
  {
    id: 117,
    question: `Wie hieß die erste deutsche Republik? :: What was the first German republic called?`,
    options: {
      A: `Bundesrepublik Deutschland :: Federal Republic of Germany`,
      B: `Deutsche Demokratische Republik :: German Democratic Republic`,
      C: `Weimarer Republik :: Weimar Republic`,
      D: `Deutsches Reich :: German Empire`
    },
    correctAnswer: "C"
  },
  {
    id: 118,
    question: `Was war der "Eiserne Vorhang"? :: What was the "Iron Curtain"?`,
    options: {
      A: `die Grenze zwischen Ost- und Westeuropa während des Kalten Krieges :: the border between Eastern and Western Europe during the Cold War`,
      B: `die Berliner Mauer :: the Berlin Wall`,
      C: `die Grenze zwischen Deutschland und Polen :: the border between Germany and Poland`,
      D: `eine Theatervorhang :: a theater curtain`
    },
    correctAnswer: "A"
  },
  {
    id: 119,
    question: `Was ist ein Brauch am Silvesterabend in Deutschland? :: What is a custom on New Year's Eve in Germany?`,
    options: {
      A: `Kürbisse aufstellen :: setting up pumpkins`,
      B: `Feuerwerk anzünden :: lighting fireworks`,
      C: `den Tannenbaum schmücken :: decorating the Christmas tree`,
      D: `Ostereier bemalen :: painting Easter eggs`
    },
    correctAnswer: "B"
  },
  {
    id: 120,
    question: `Welche Religion hat die meisten Gläubigen in Deutschland? :: Which religion has the most believers in Germany?`,
    options: {
      A: `Islam`,
      B: `Judentum :: Judaism`,
      C: `Christentum :: Christianity`,
      D: `Buddhismus :: Buddhism`
    },
    correctAnswer: "C"
  },
  {
    id: 121,
    question: `Was wird in Deutschland am 1. Mai gefeiert? :: What is celebrated in Germany on May 1st?`,
    options: {
      A: `der Tag der Deutschen Einheit :: Day of German Unity`,
      B: `der Tag der Arbeit :: Labor Day`,
      C: `der Frauentag :: Women's Day`,
      D: `der Europatag :: Europe Day`
    },
    correctAnswer: "B"
  },
  {
    id: 122,
    question: `Welches Bundesland war früher ein eigener Staat und wurde erst 1990 Teil der Bundesrepublik Deutschland? :: Which federal state was formerly its own state and only became part of the Federal Republic of Germany in 1990?`,
    options: {
      A: `Bayern :: Bavaria`,
      B: `Sachsen :: Saxony`,
      C: `Hessen :: Hesse`,
      D: `Alle neuen Bundesländer :: All new federal states`
    },
    correctAnswer: "D"
  },
  {
    id: 123,
    question: `Was ist die Landeshauptstadt von Baden-Württemberg? :: What is the state capital of Baden-Württemberg?`,
    options: {
      A: `Karlsruhe`,
      B: `Mannheim`,
      C: `Stuttgart`,
      D: `Freiburg`
    },
    correctAnswer: "C"
  },
  {
    id: 124,
    question: `Welches Meer grenzt an Norddeutschland? :: Which sea borders Northern Germany?`,
    options: {
      A: `das Mittelmeer :: the Mediterranean Sea`,
      B: `die Nordsee :: the North Sea`,
      C: `das Schwarze Meer :: the Black Sea`,
      D: `die Ostsee :: the Baltic Sea`
    },
    correctAnswer: "B"
  },
  {
    id: 125,
    question: `Wie heißt der deutsche Geheimdienst im Inland? :: What is the German domestic intelligence service called?`,
    options: {
      A: `BND`,
      B: `BKA`,
      C: `Verfassungsschutz :: Constitutional Protection`,
      D: `GSG 9`
    },
    correctAnswer: "C"
  },
  {
    id: 126,
    question: `In Deutschland können Bürger und Bürgerinnen Petitionen einreichen. Das bedeutet, sie können sich ... :: In Germany, citizens can submit petitions. This means they can ...`,
    options: {
      A: `mit Bitten und Beschwerden an Behörden wenden :: turn to authorities with requests and complaints`,
      B: `bei der Polizei bewerben :: apply to the police`,
      C: `sich kandidieren lassen :: run as a candidate`,
      D: `Steuern sparen :: save taxes`
    },
    correctAnswer: "A"
  },
  {
    id: 127,
    question: `Welches Gericht ist in Deutschland für Verfassungsfragen zuständig? :: Which court in Germany is responsible for constitutional matters?`,
    options: {
      A: `Amtsgericht :: Local Court`,
      B: `Bundesverfassungsgericht :: Federal Constitutional Court`,
      C: `Bundesgerichtshof :: Federal Court of Justice`,
      D: `Bundesarbeitsgericht :: Federal Labor Court`
    },
    correctAnswer: "B"
  },
  {
    id: 128,
    question: `Ab welchem Alter darf man in Deutschland bei Kommunalwahlen wählen? :: From what age can one vote in local elections in Germany?`,
    options: {
      A: `16`,
      B: `18`,
      C: `21`,
      D: `Es ist in jedem Bundesland anders :: It varies by federal state`
    },
    correctAnswer: "D"
  },
  {
    id: 129,
    question: `Was bedeutet die Abkürzung EU? :: What does the abbreviation EU mean?`,
    options: {
      A: `Europäische Union :: European Union`,
      B: `Europäische Unternehmen :: European Companies`,
      C: `Europäische Unabhängigkeit :: European Independence`,
      D: `Europäisches Unternehmen :: European Enterprise`
    },
    correctAnswer: "A"
  },
  {
    id: 130,
    question: `Welche Farbe hat der deutsche Reisepass? :: What color is the German passport?`,
    options: {
      A: `blau :: blue`,
      B: `rot :: red`,
      C: `grün :: green`,
      D: `schwarz :: black`
    },
    correctAnswer: "B"
  },
  {
    id: 131,
    question: `Wie viele Einwohner hat Deutschland ungefähr? :: Approximately how many inhabitants does Germany have?`,
    options: {
      A: `70 Millionen :: 70 million`,
      B: `80 Millionen :: 80 million`,
      C: `85 Millionen :: 85 million`,
      D: `90 Millionen :: 90 million`
    },
    correctAnswer: "C"
  },
  {
    id: 132,
    question: `Welche ist die längste Grenze, die Deutschland mit einem anderen Land hat? :: Which is the longest border that Germany has with another country?`,
    options: {
      A: `mit Frankreich :: with France`,
      B: `mit Polen :: with Poland`,
      C: `mit Österreich :: with Austria`,
      D: `mit Tschechien :: with Czech Republic`
    },
    correctAnswer: "C"
  },
  {
    id: 133,
    question: `Was ist ein Brauch zu Pfingsten in Deutschland? :: What is a custom at Pentecost in Germany?`,
    options: {
      A: `Raketen in die Luft schießen :: shooting rockets into the air`,
      B: `einen Maibaum aufstellen :: erecting a maypole`,
      C: `Kürbisse in die Fenster stellen :: putting pumpkins in windows`,
      D: `grüne Zweige ins Haus holen :: bringing green branches into the house`
    },
    correctAnswer: "D"
  },
  {
    id: 134,
    question: `Welche Versicherung ist in Deutschland für alle Arbeitnehmer Pflicht? :: Which insurance is mandatory for all employees in Germany?`,
    options: {
      A: `Lebensversicherung :: life insurance`,
      B: `Hausratversicherung :: household insurance`,
      C: `Krankenversicherung :: health insurance`,
      D: `Haftpflichtversicherung :: liability insurance`
    },
    correctAnswer: "C"
  },
  {
    id: 135,
    question: `Wer bestimmt in Deutschland die Schulpolitik? :: Who determines education policy in Germany?`,
    options: {
      A: `die Lehrer und Lehrerinnen :: the teachers`,
      B: `die Bundesländer :: the federal states`,
      C: `das Bundesministerium für Bildung :: the Federal Ministry of Education`,
      D: `die Universitäten :: the universities`
    },
    correctAnswer: "B"
  },
  {
    id: 136,
    question: `Was ist das Bundesverfassungsgericht? :: What is the Federal Constitutional Court?`,
    options: {
      A: `ein Gericht für Verfassungsfragen :: a court for constitutional matters`,
      B: `ein Gericht für Strafrecht :: a court for criminal law`,
      C: `ein Gericht für Privatrecht :: a court for private law`,
      D: `ein Gericht für Steuerrecht :: a court for tax law`
    },
    correctAnswer: "A"
  },
  {
    id: 137,
    question: `Deutschland hat heute eine soziale Marktwirtschaft. Das bedeutet, der Staat ... :: Germany today has a social market economy. This means the state ...`,
    options: {
      A: `garantiert jedem Bürger einen Arbeitsplatz :: guarantees every citizen a job`,
      B: `kann die Wirtschaft vollständig planen :: can completely plan the economy`,
      C: `sorgt für sozialen Ausgleich :: provides for social balance`,
      D: `besitzt alle Produktionsmittel :: owns all means of production`
    },
    correctAnswer: "C"
  },
  {
    id: 138,
    question: `Was war 1961 in Deutschland? :: What happened in Germany in 1961?`,
    options: {
      A: `der Bau der Berliner Mauer :: the construction of the Berlin Wall`,
      B: `die Währungsreform :: the currency reform`,
      C: `die erste Bundestagswahl :: the first federal election`,
      D: `das Ende des Zweiten Weltkriegs :: the end of World War II`
    },
    correctAnswer: "A"
  },
  {
    id: 139,
    question: `Was passierte am 17. Juni 1953 in der DDR? :: What happened on June 17, 1953 in the GDR?`,
    options: {
      A: `ein Volksaufstand :: a popular uprising`,
      B: `der Bau der Berliner Mauer :: the construction of the Berlin Wall`,
      C: `die Gründung der DDR :: the founding of the GDR`,
      D: `der erste Parteitag der SED :: the first party congress of the SED`
    },
    correctAnswer: "A"
  },
  {
    id: 140,
    question: `Warum wurde die Berliner Mauer gebaut? :: Why was the Berlin Wall built?`,
    options: {
      A: `gegen den Westen :: against the West`,
      B: `zur Verteidigung :: for defense`,
      C: `zum Schutz vor Einwanderung :: for protection against immigration`,
      D: `zur Verhinderung der Flucht aus der DDR :: to prevent escape from the GDR`
    },
    correctAnswer: "D"
  },
  {
    id: 141,
    question: `Welche Politiker unterzeichneten 1963 den deutsch-französischen Freundschaftsvertrag? :: Which politicians signed the German-French friendship treaty in 1963?`,
    options: {
      A: `Adenauer und de Gaulle`,
      B: `Brandt und Pompidou`,
      C: `Schmidt und Giscard d'Estaing`,
      D: `Kohl und Mitterrand`
    },
    correctAnswer: "A"
  },
  {
    id: 142,
    question: `Was versteht man unter dem deutschen Wirtschaftswunder? :: What is meant by the German economic miracle?`,
    options: {
      A: `die Entwicklung der Wirtschaft in der DDR :: the economic development in the GDR`,
      B: `den raschen Wiederaufbau nach dem Zweiten Weltkrieg :: the rapid reconstruction after World War II`,
      C: `die Einführung der D-Mark :: the introduction of the D-Mark`,
      D: `die Wiedervereinigung :: reunification`
    },
    correctAnswer: "B"
  },
  {
    id: 143,
    question: `Wer war Willy Brandt? :: Who was Willy Brandt?`,
    options: {
      A: `Bundespräsident :: Federal President`,
      B: `Bundeskanzler :: Federal Chancellor`,
      C: `Außenminister :: Foreign Minister`,
      D: `Bundestagspräsident :: President of the Bundestag`
    },
    correctAnswer: "B"
  },
  {
    id: 144,
    question: `Was war die Ostpolitik? :: What was Ostpolitik?`,
    options: {
      A: `die Politik der DDR gegenüber der Bundesrepublik :: GDR policy toward the Federal Republic`,
      B: `die Politik der Bundesrepublik gegenüber Osteuropa :: Federal Republic policy toward Eastern Europe`,
      C: `die Wirtschaftspolitik der DDR :: GDR economic policy`,
      D: `die Sozialpolitik der Bundesrepublik :: Federal Republic social policy`
    },
    correctAnswer: "B"
  },
  {
    id: 145,
    question: `Welcher Politiker führte in der Bundesrepublik Deutschland die Ostpolitik ein? :: Which politician introduced Ostpolitik in the Federal Republic of Germany?`,
    options: {
      A: `Ludwig Erhard`,
      B: `Willy Brandt`,
      C: `Helmut Schmidt`,
      D: `Helmut Kohl`
    },
    correctAnswer: "B"
  },
  {
    id: 146,
    question: `Was ist ein Abitur in Deutschland? :: What is an Abitur in Germany?`,
    options: {
      A: `ein Studienfach :: a field of study`,
      B: `ein Schulabschluss :: a school diploma`,
      C: `eine Berufsausbildung :: vocational training`,
      D: `ein Hochschulabschluss :: a university degree`
    },
    correctAnswer: "B"
  },
  {
    id: 147,
    question: `Welche Schule besuchen Kinder in Deutschland zuerst? :: Which school do children in Germany attend first?`,
    options: {
      A: `die Hauptschule :: secondary school`,
      B: `die Realschule :: intermediate school`,
      C: `das Gymnasium :: grammar school`,
      D: `die Grundschule :: primary school`
    },
    correctAnswer: "D"
  },
  {
    id: 148,
    question: `Was bedeutet "Schulpflicht" in Deutschland? :: What does "compulsory education" mean in Germany?`,
    options: {
      A: `Alle Kinder müssen eine Schule besuchen :: All children must attend school`,
      B: `Alle Kinder können eine Schule besuchen :: All children may attend school`,
      C: `Nur deutsche Kinder müssen eine Schule besuchen :: Only German children must attend school`,
      D: `Die Eltern entscheiden über den Schulbesuch :: Parents decide about school attendance`
    },
    correctAnswer: "A"
  },
  {
    id: 149,
    question: `Ab welchem Alter darf man in Deutschland Auto fahren? :: From what age can one drive a car in Germany?`,
    options: {
      A: `16`,
      B: `17`,
      C: `18`,
      D: `21`
    },
    correctAnswer: "C"
  },
  {
    id: 150,
    question: `Was braucht man in Deutschland für eine Eheschließung? :: What do you need in Germany for a marriage?`,
    options: {
      A: `die Einwilligung der Eltern :: parental consent`,
      B: `eine Arbeitsstelle :: a job`,
      C: `eine Wohnung :: an apartment`,
      D: `einen Ehefähigkeitsnachweis :: a certificate of eligibility to marry`
    },
    correctAnswer: "D"
  },
  {
    id: 151,
    question: `Ab welchem Alter ist man in Deutschland volljährig? :: From what age is one of legal age in Germany?`,
    options: {
      A: `16`,
      B: `17`,
      C: `18`,
      D: `21`
    },
    correctAnswer: "C"
  },
  {
    id: 152,
    question: `Was ist bei Kindern in Deutschland erlaubt? :: What is allowed with children in Germany?`,
    options: {
      A: `leichte Ohrfeigen bei Fehlverhalten :: light slaps for misbehavior`,
      B: `Kinder als Arbeiter einsetzen :: using children as workers`,
      C: `körperliche Bestrafung zur Erziehung :: physical punishment for education`,
      D: `Kinder nicht in die Schule schicken :: not sending children to school`
    },
    correctAnswer: "A"
  },
  {
    id: 153,
    question: `Was ist in Deutschland verboten? :: What is forbidden in Germany?`,
    options: {
      A: `Meinungsfreiheit :: freedom of opinion`,
      B: `Kinderarbeit :: child labor`,
      C: `Religionsfreiheit :: religious freedom`,
      D: `Versammlungsfreiheit :: freedom of assembly`
    },
    correctAnswer: "B"
  },
  {
    id: 154,
    question: `Welches ist kein Bundesland der Bundesrepublik Deutschland? :: Which is not a federal state of the Federal Republic of Germany?`,
    options: {
      A: `Rheinland-Pfalz :: Rhineland-Palatinate`,
      B: `Schleswig-Holstein`,
      C: `Saarland`,
      D: `Vogesen :: Vosges`
    },
    correctAnswer: "D"
  },
  {
    id: 155,
    question: `Was passiert mit dem Auto eines Fahrgastes, der in Deutschland ohne Fahrerlaubnis fährt? :: What happens to the car of a passenger who drives in Germany without a driver's license?`,
    options: {
      A: `es wird verschrottet :: it is scrapped`,
      B: `der Führerschein wird entzogen :: the license is revoked`,
      C: `es wird beschlagnahmt :: it is confiscated`,
      D: `nichts :: nothing`
    },
    correctAnswer: "C"
  },
  {
    id: 156,
    question: `Welches Fest wird 40 Tage nach Ostern gefeiert? :: Which holiday is celebrated 40 days after Easter?`,
    options: {
      A: `Christi Himmelfahrt :: Ascension Day`,
      B: `Pfingsten :: Pentecost`,
      C: `Fronleichnam :: Corpus Christi`,
      D: `Allerheiligen :: All Saints' Day`
    },
    correctAnswer: "A"
  },
  {
    id: 157,
    question: `Was ist der "Grundsatz der Verhältnismäßigkeit"? :: What is the "principle of proportionality"?`,
    options: {
      A: `staatliche Maßnahmen müssen angemessen sein :: state measures must be appropriate`,
      B: `alle sollen gleich behandelt werden :: all should be treated equally`,
      C: `jeder soll nach seinen Fähigkeiten beurteilt werden :: everyone should be judged according to their abilities`,
      D: `die Strafe muss der Tat entsprechen :: the punishment must fit the crime`
    },
    correctAnswer: "A"
  },
  {
    id: 158,
    question: `Welche Aussage ist richtig? :: Which statement is correct?`,
    options: {
      A: `In Deutschland darf man seinen Glauben frei wählen :: In Germany one may freely choose one's faith`,
      B: `In Deutschland gibt es nur eine erlaubte Religion :: In Germany there is only one permitted religion`,
      C: `In Deutschland darf man nicht an Gott glauben :: In Germany one may not believe in God`,
      D: `In Deutschland bestimmt der Staat die Religion :: In Germany the state determines religion`
    },
    correctAnswer: "A"
  },
  {
    id: 159,
    question: `Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein? :: A woman in Germany loses her job. What may not be the reason for this dismissal?`,
    options: {
      A: `Die Frau ist lange krank :: The woman is sick for a long time`,
      B: `Die Frau kam oft zu spät :: The woman often came late`,
      C: `Die Frau ist schwanger :: The woman is pregnant`,
      D: `Die Frau hat ein schlechtes Arbeitszeugnis :: The woman has a bad work reference`
    },
    correctAnswer: "C"
  },
  {
    id: 160,
    question: `Ein Mann im Rollstuhl hat sich auf eine Stelle als Buchhalter beworben. Was ist ein Beispiel für Diskriminierung? :: A man in a wheelchair has applied for a position as an accountant. What is an example of discrimination?`,
    options: {
      A: `Er wird nicht eingestellt, weil er im Rollstuhl sitzt :: He is not hired because he is in a wheelchair`,
      B: `Er wird nicht eingestellt, weil seine Qualifikationen fehlen :: He is not hired because he lacks qualifications`,
      C: `Er wird nicht eingestellt, weil es schon andere Bewerber gibt :: He is not hired because there are already other applicants`,
      D: `Er wird nicht eingestellt, weil er zu jung ist :: He is not hired because he is too young`
    },
    correctAnswer: "A"
  },
  {
    id: 161,
    question: `In Deutschland dürfen Ehepaare sich scheiden lassen. Welches Prinzip gilt dabei? :: In Germany, married couples may divorce. Which principle applies?`,
    options: {
      A: `Das Verschuldensprinzip :: The fault principle`,
      B: `Das Zerrüttungsprinzip :: The breakdown principle`,
      C: `Das Zustimmungsprinzip :: The consent principle`,
      D: `Das Härtefallprinzip :: The hardship principle`
    },
    correctAnswer: "B"
  },
  {
    id: 162,
    question: `Was ist in Deutschland ein Brauch zu Weihnachten? :: What is a custom at Christmas in Germany?`,
    options: {
      A: `Kürbisse vor die Tür stellen :: putting pumpkins in front of the door`,
      B: `einen Tannenbaum schmücken :: decorating a fir tree`,
      C: `Eier verstecken :: hiding eggs`,
      D: `Raketen anzünden :: lighting rockets`
    },
    correctAnswer: "B"
  },
  {
    id: 163,
    question: `Wie nennt man den Wechsel von einer Diktatur zur Demokratie? :: What is the change from a dictatorship to a democracy called?`,
    options: {
      A: `Reformen :: reforms`,
      B: `Revolution :: revolution`,
      C: `Transformation :: transformation`,
      D: `Intervention :: intervention`
    },
    correctAnswer: "C"
  },
  {
    id: 164,
    question: `Was war am 20. Juli 1944? :: What happened on July 20, 1944?`,
    options: {
      A: `ein Attentat auf Hitler :: an assassination attempt on Hitler`,
      B: `eine große Demonstration :: a large demonstration`,
      C: `der D-Day :: D-Day`,
      D: `die Befreiung der Konzentrationslager :: the liberation of concentration camps`
    },
    correctAnswer: "A"
  },
  {
    id: 165,
    question: `Wer waren die "Trümmerfrauen"? :: Who were the "rubble women"?`,
    options: {
      A: `Frauen, die nach dem Krieg Deutschland wieder aufbauten :: women who rebuilt Germany after the war`,
      B: `Frauen, die im Krieg gekämpft haben :: women who fought in the war`,
      C: `Frauen, die Witwen geworden sind :: women who became widows`,
      D: `Frauen, die in Fabriken gearbeitet haben :: women who worked in factories`
    },
    correctAnswer: "A"
  },
  {
    id: 166,
    question: `Was war ein Ergebnis des Zweiten Weltkriegs für Deutschland? :: What was a result of World War II for Germany?`,
    options: {
      A: `Deutschland wurde geteilt :: Germany was divided`,
      B: `Deutschland wurde größer :: Germany became larger`,
      C: `Deutschland wurde zur Diktatur :: Germany became a dictatorship`,
      D: `Deutschland gewann Kolonien :: Germany gained colonies`
    },
    correctAnswer: "A"
  },
  {
    id: 167,
    question: `Was war der Nürnberger Prozess? :: What was the Nuremberg Trial?`,
    options: {
      A: `ein Prozess gegen Kriegsverbrecher :: a trial against war criminals`,
      B: `ein Wirtschaftsprozess :: an economic trial`,
      C: `ein politischer Prozess gegen Kommunisten :: a political trial against communists`,
      D: `ein Prozess gegen Demokraten :: a trial against democrats`
    },
    correctAnswer: "A"
  },
  {
    id: 168,
    question: `Wer war Anne Frank? :: Who was Anne Frank?`,
    options: {
      A: `eine deutsche Schriftstellerin :: a German writer`,
      B: `eine jüdische Politikerin :: a Jewish politician`,
      C: `ein jüdisches Mädchen, das ein Tagebuch über die NS-Zeit schrieb :: a Jewish girl who wrote a diary about the Nazi era`,
      D: `eine Widerstandskämpferin :: a resistance fighter`
    },
    correctAnswer: "C"
  },
  {
    id: 169,
    question: `Was ist Antisemitismus? :: What is antisemitism?`,
    options: {
      A: `Feindschaft gegen Juden :: hostility toward Jews`,
      B: `Feindschaft gegen Christen :: hostility toward Christians`,
      C: `Feindschaft gegen Muslime :: hostility toward Muslims`,
      D: `Feindschaft gegen Atheisten :: hostility toward atheists`
    },
    correctAnswer: "A"
  },
  {
    id: 170,
    question: `Was bedeutet "Widerstand" gegen ein politisches System? :: What does "resistance" against a political system mean?`,
    options: {
      A: `aktive Unterstützung :: active support`,
      B: `passiver Gehorsam :: passive obedience`,
      C: `aktiver Protest :: active protest`,
      D: `passive Teilnahme :: passive participation`
    },
    correctAnswer: "C"
  },
  {
    id: 171,
    question: `Womit müssen Sie rechnen, wenn Sie in Deutschland öffentlich Nazi-Symbole zeigen? :: What must you expect if you publicly display Nazi symbols in Germany?`,
    options: {
      A: `Geldstrafe und Gefängnis :: fine and imprisonment`,
      B: `Bußgeld :: fine`,
      C: `Sozialstunden :: community service`,
      D: `Verwarnung :: warning`
    },
    correctAnswer: "A"
  },
  {
    id: 172,
    question: `Die deutsche Arbeitslosenversicherung ist ein Teil ... :: German unemployment insurance is part of ...`,
    options: {
      A: `der Sozialhilfe :: social assistance`,
      B: `der Sozialversicherung :: social insurance`,
      C: `der Volkshilfe :: public assistance`,
      D: `der Bürgerhilfe :: citizen assistance`
    },
    correctAnswer: "B"
  },
  {
    id: 173,
    question: `Welche Maßnahme schafft in Deutschland soziale Sicherheit? :: Which measure creates social security in Germany?`,
    options: {
      A: `die Krankenversicherung :: health insurance`,
      B: `die Kontenüberwachung :: account monitoring`,
      C: `die Meinungsfreiheit :: freedom of opinion`,
      D: `die allgemeine Dienstpflicht :: general service obligation`
    },
    correctAnswer: "A"
  },
  {
    id: 174,
    question: `Wie finanziert sich das deutsche Rentensystem? :: How is the German pension system financed?`,
    options: {
      A: `durch Steuern :: through taxes`,
      B: `durch Umlagen :: through contributions`,
      C: `durch Spenden :: through donations`,
      D: `durch Zinsen :: through interest`
    },
    correctAnswer: "B"
  },
  {
    id: 175,
    question: `Welche Aufgabe hat das Parlament in Deutschland? :: What task does parliament have in Germany?`,
    options: {
      A: `die Exekutive kontrollieren :: control the executive`,
      B: `das Volk vertreten :: represent the people`,
      C: `Gesetze beschließen :: pass laws`,
      D: `alle Antworten sind richtig :: all answers are correct`
    },
    correctAnswer: "D"
  },
  {
    id: 176,
    question: `Wer kontrolliert in Deutschland die Einhaltung des Grundgesetzes? :: Who controls compliance with the Basic Law in Germany?`,
    options: {
      A: `die Bundesregierung :: the federal government`,
      B: `das Bundesverfassungsgericht :: the Federal Constitutional Court`,
      C: `der Bundestag :: the Bundestag`,
      D: `der Bundespräsident :: the Federal President`
    },
    correctAnswer: "B"
  },
  {
    id: 177,
    question: `Wen kann man als Bürger / Bürgerin in Deutschland nicht direkt wählen? :: Who can you as a citizen in Germany not directly elect?`,
    options: {
      A: `Abgeordnete des EU-Parlaments :: Members of the EU Parliament`,
      B: `den Bundeskanzler / die Bundeskanzlerin :: the Federal Chancellor`,
      C: `Abgeordnete des Bundestages :: Members of the Bundestag`,
      D: `Abgeordnete des Landtages :: Members of the state parliament`
    },
    correctAnswer: "B"
  },
  {
    id: 178,
    question: `Was bedeutet "Volkssouveränität"? :: What does "popular sovereignty" mean?`,
    options: {
      A: `Der Adel herrscht über das Volk :: The nobility rules over the people`,
      B: `Das Volk wählt seine Vertreter :: The people elect their representatives`,
      C: `Das Volk herrscht über sich selbst :: The people rule over themselves`,
      D: `Das Volk gehorcht der Regierung :: The people obey the government`
    },
    correctAnswer: "C"
  },
  {
    id: 179,
    question: `Was ist Deutschland nicht? :: What is Germany not?`,
    options: {
      A: `eine Demokratie :: a democracy`,
      B: `ein Rechtsstaat :: a constitutional state`,
      C: `ein Bundesstaat :: a federal state`,
      D: `eine Monarchie :: a monarchy`
    },
    correctAnswer: "D"
  },
  {
    id: 180,
    question: `Was steht nicht im Grundgesetz von Deutschland? :: What is not in the Basic Law of Germany?`,
    options: {
      A: `Die Würde des Menschen ist unantastbar :: Human dignity is inviolable`,
      B: `Alle Menschen sind vor dem Gesetz gleich :: All people are equal before the law`,
      C: `Die Todesstrafe ist zulässig :: The death penalty is permissible`,
      D: `Jeder hat das Recht auf freie Entfaltung der Persönlichkeit :: Everyone has the right to free development of personality`
    },
    correctAnswer: "C"
  },
  {
    id: 181,
    question: `Deutschland ist Mitglied des Schengener Abkommens. Was bedeutet das? :: Germany is a member of the Schengen Agreement. What does this mean?`,
    options: {
      A: `Deutsche können ohne Visum in viele Länder reisen :: Germans can travel to many countries without a visa`,
      B: `Deutsche können in jedem EU-Land arbeiten :: Germans can work in any EU country`,
      C: `Deutsche können ohne Passkontrolle in viele europäische Länder reisen :: Germans can travel to many European countries without passport control`,
      D: `Deutsche können überall mit dem Euro bezahlen :: Germans can pay with euros everywhere`
    },
    correctAnswer: "C"
  },
  {
    id: 182,
    question: `Was ist eine Aufgabe der Gemeinde in Deutschland? :: What is a task of the municipality in Germany?`,
    options: {
      A: `Gesetze erlassen :: enacting laws`,
      B: `die Müllabfuhr organisieren :: organizing garbage collection`,
      C: `das Militär befehligen :: commanding the military`,
      D: `Verträge mit anderen Staaten schließen :: concluding treaties with other states`
    },
    correctAnswer: "B"
  },
  {
    id: 183,
    question: `Was macht ein Schöffe / eine Schöffin in Deutschland? :: What does a lay judge do in Germany?`,
    options: {
      A: `Er / sie hilft bei Gericht bei der Urteilsfindung :: He/she helps in court with verdict finding`,
      B: `Er / sie schreibt Gesetze :: He/she writes laws`,
      C: `Er / sie gibt Bürgern rechtliche Hilfe :: He/she gives citizens legal help`,
      D: `Er / sie ist Mitglied der Regierung :: He/she is a member of the government`
    },
    correctAnswer: "A"
  },
  {
    id: 184,
    question: `Meinungsfreiheit in Deutschland bedeutet, dass ich ... :: Freedom of opinion in Germany means that I ...`,
    options: {
      A: `alles sagen darf :: may say everything`,
      B: `meine Meinung frei äußern darf, solange ich andere nicht verletze :: may freely express my opinion as long as I don't hurt others`,
      C: `unwahre Tatsachen behaupten darf :: may claim untrue facts`,
      D: `die Meinung der Regierung sagen muss :: must say the government's opinion`
    },
    correctAnswer: "B"
  },
  {
    id: 185,
    question: `Was ist eine Aufgabe des Deutschen Bundestages? :: What is a task of the German Bundestag?`,
    options: {
      A: `Gesetze beschließen :: passing laws`,
      B: `die Regierung bilden :: forming the government`,
      C: `das Grundgesetz ändern :: changing the Basic Law`,
      D: `alle Antworten sind richtig :: all answers are correct`
    },
    correctAnswer: "D"
  },
  {
    id: 186,
    question: `Welche Aussage über das deutsche Wahlsystem ist richtig? :: Which statement about the German electoral system is correct?`,
    options: {
      A: `Man hat eine Stimme :: One has one vote`,
      B: `Man hat zwei Stimmen :: One has two votes`,
      C: `Man hat drei Stimmen :: One has three votes`,
      D: `Die Anzahl der Stimmen hängt vom Alter ab :: The number of votes depends on age`
    },
    correctAnswer: "B"
  },
  {
    id: 187,
    question: `Was passiert in Deutschland, wenn ein Gesetz dem Grundgesetz widerspricht? :: What happens in Germany when a law contradicts the Basic Law?`,
    options: {
      A: `Es wird automatisch ungültig :: It automatically becomes invalid`,
      B: `Das Bundesverfassungsgericht entscheidet :: The Federal Constitutional Court decides`,
      C: `Der Bundestag stimmt erneut ab :: The Bundestag votes again`,
      D: `Es bleibt gültig :: It remains valid`
    },
    correctAnswer: "B"
  },
  {
    id: 188,
    question: `Welcher Politiker steht für die "Ostpolitik" der 1970er Jahre? :: Which politician stands for the "Ostpolitik" of the 1970s?`,
    options: {
      A: `Ludwig Erhard`,
      B: `Willy Brandt`,
      C: `Helmut Schmidt`,
      D: `Franz-Josef Strauß`
    },
    correctAnswer: "B"
  },
  {
    id: 189,
    question: `Was war der Kalte Krieg? :: What was the Cold War?`,
    options: {
      A: `ein Krieg zwischen Ost- und Westdeutschland :: a war between East and West Germany`,
      B: `die Spannungen zwischen NATO und Warschauer Pakt :: tensions between NATO and Warsaw Pact`,
      C: `ein Krieg mit Atomwaffen :: a war with nuclear weapons`,
      D: `ein Wirtschaftskrieg :: an economic war`
    },
    correctAnswer: "B"
  },
  {
    id: 190,
    question: `Wann endete der Kalte Krieg? :: When did the Cold War end?`,
    options: {
      A: `1987`,
      B: `1989`,
      C: `1991`,
      D: `1995`
    },
    correctAnswer: "C"
  },
  {
    id: 191,
    question: `Was bedeutet "friedliche Revolution" in Bezug auf die DDR 1989? :: What does "peaceful revolution" mean in relation to the GDR in 1989?`,
    options: {
      A: `Der Wandel fand ohne Gewalt statt :: The change took place without violence`,
      B: `Es gab einen Bürgerkrieg :: There was a civil war`,
      C: `Die Armee übernahm die Macht :: The army took power`,
      D: `Andere Länder marschierten ein :: Other countries invaded`
    },
    correctAnswer: "A"
  },
  {
    id: 192,
    question: `Was waren die Montagsdemonstrationen in der DDR? :: What were the Monday demonstrations in the GDR?`,
    options: {
      A: `Demonstrationen für die Regierung :: demonstrations for the government`,
      B: `Proteste gegen das SED-Regime :: protests against the SED regime`,
      C: `Feiern zur Gründung der DDR :: celebrations for the founding of the GDR`,
      D: `Arbeitskämpfe :: labor disputes`
    },
    correctAnswer: "B"
  },
  {
    id: 193,
    question: `Welcher Ort war das Zentrum der friedlichen Revolution in der DDR? :: Which place was the center of the peaceful revolution in the GDR?`,
    options: {
      A: `Berlin`,
      B: `Dresden`,
      C: `Leipzig`,
      D: `Rostock`
    },
    correctAnswer: "C"
  },
  {
    id: 194,
    question: `Was bedeutete für die DDR das Jahr 1989? :: What did the year 1989 mean for the GDR?`,
    options: {
      A: `die Gründung :: the founding`,
      B: `eine Revolution :: a revolution`,
      C: `eine Reform :: a reform`,
      D: `das Ende :: the end`
    },
    correctAnswer: "D"
  },
  {
    id: 195,
    question: `Was war die Wende? :: What was the Wende (turning point)?`,
    options: {
      A: `der Beginn der DDR :: the beginning of the GDR`,
      B: `der Übergang von der Diktatur zur Demokratie in der DDR :: the transition from dictatorship to democracy in the GDR`,
      C: `die Teilung Deutschlands :: the division of Germany`,
      D: `der Bau der Berliner Mauer :: the construction of the Berlin Wall`
    },
    correctAnswer: "B"
  },
  {
    id: 196,
    question: `Was geschah am 3. Oktober 1990? :: What happened on October 3, 1990?`,
    options: {
      A: `die Deutsche Wiedervereinigung :: German reunification`,
      B: `der Fall der Berliner Mauer :: the fall of the Berlin Wall`,
      C: `die erste freie Wahl in der DDR :: the first free election in the GDR`,
      D: `der Beitritt zur NATO :: joining NATO`
    },
    correctAnswer: "A"
  },
  {
    id: 197,
    question: `Welche Länder bildeten die Bundesrepublik Deutschland vor 1990? :: Which states formed the Federal Republic of Germany before 1990?`,
    options: {
      A: `alle 16 Bundesländer :: all 16 federal states`,
      B: `nur die westdeutschen Länder :: only the West German states`,
      C: `nur die ostdeutschen Länder :: only the East German states`,
      D: `nur Bayern und Hessen :: only Bavaria and Hesse`
    },
    correctAnswer: "B"
  },
  {
    id: 198,
    question: `Welche neuen Bundesländer gibt es seit 1990? :: Which new federal states have existed since 1990?`,
    options: {
      A: `Brandenburg, Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt, Thüringen :: Brandenburg, Mecklenburg-Western Pomerania, Saxony, Saxony-Anhalt, Thuringia`,
      B: `Brandenburg, Bremen, Sachsen, Sachsen-Anhalt, Thüringen :: Brandenburg, Bremen, Saxony, Saxony-Anhalt, Thuringia`,
      C: `Berlin, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen :: Berlin, Brandenburg, Saxony, Saxony-Anhalt, Thuringia`,
      D: `Brandenburg, Mecklenburg-Vorpommern, Sachsen, Saarland, Thüringen :: Brandenburg, Mecklenburg-Western Pomerania, Saxony, Saarland, Thuringia`
    },
    correctAnswer: "A"
  },
  {
    id: 199,
    question: `Was ist die Landeshauptstadt von Sachsen? :: What is the state capital of Saxony?`,
    options: {
      A: `Leipzig`,
      B: `Dresden`,
      C: `Chemnitz`,
      D: `Zwickau`
    },
    correctAnswer: "B"
  },
  {
    id: 200,
    question: `Welche Stadt war vor der Wiedervereinigung geteilt? :: Which city was divided before reunification?`,
    options: {
      A: `München :: Munich`,
      B: `Hamburg`,
      C: `Berlin`,
      D: `Köln :: Cologne`
    },
    correctAnswer: "C"
  },
  {
    id: 201,
    question: `Was ist die Landeshauptstadt von Thüringen? :: What is the state capital of Thuringia?`,
    options: {
      A: `Jena`,
      B: `Weimar`,
      C: `Erfurt`,
      D: `Gera`
    },
    correctAnswer: "C"
  },
  {
    id: 202,
    question: `In welchem Jahr fanden die ersten gesamtdeutschen Wahlen nach der Wiedervereinigung statt? :: In which year did the first all-German elections take place after reunification?`,
    options: {
      A: `1989`,
      B: `1990`,
      C: `1991`,
      D: `1992`
    },
    correctAnswer: "B"
  },
  {
    id: 203,
    question: `Was ist ein Volksentscheid? :: What is a referendum?`,
    options: {
      A: `eine Wahl zum Bundestag :: an election to the Bundestag`,
      B: `eine Abstimmung über eine Sachfrage :: a vote on a specific issue`,
      C: `eine Kandidatenwahl :: a candidate election`,
      D: `eine Parteiwahl :: a party election`
    },
    correctAnswer: "B"
  },
  {
    id: 204,
    question: `Was bedeutet "Bürgerbegehren"? :: What does "citizens' initiative" mean?`,
    options: {
      A: `Bürger beantragen eine Abstimmung :: citizens request a vote`,
      B: `Bürger gründen eine Partei :: citizens found a party`,
      C: `Bürger wählen den Bundeskanzler :: citizens elect the chancellor`,
      D: `Bürger bilden eine Regierung :: citizens form a government`
    },
    correctAnswer: "A"
  },
  {
    id: 205,
    question: `Was ist Bürgerbeteiligung? :: What is citizen participation?`,
    options: {
      A: `Bürger arbeiten ehrenamtlich :: citizens work voluntarily`,
      B: `Bürger zahlen Steuern :: citizens pay taxes`,
      C: `Bürger beteiligen sich an politischen Entscheidungen :: citizens participate in political decisions`,
      D: `Bürger gehen zur Schule :: citizens go to school`
    },
    correctAnswer: "C"
  },
  {
    id: 206,
    question: `Was ist ein Organ der Rechtsprechung? :: What is an organ of the judiciary?`,
    options: {
      A: `das Gericht :: the court`,
      B: `die Staatsanwaltschaft :: the public prosecutor's office`,
      C: `die Polizei :: the police`,
      D: `das Ministerium :: the ministry`
    },
    correctAnswer: "A"
  },
  {
    id: 207,
    question: `Was ist das höchste deutsche Gericht? :: What is the highest German court?`,
    options: {
      A: `das Amtsgericht :: the local court`,
      B: `das Landgericht :: the regional court`,
      C: `das Bundesverfassungsgericht :: the Federal Constitutional Court`,
      D: `das Bundesarbeitsgericht :: the Federal Labor Court`
    },
    correctAnswer: "C"
  },
  {
    id: 208,
    question: `Welche Gerichte gibt es in Deutschland? :: Which courts exist in Germany?`,
    options: {
      A: `nur Strafgerichte :: only criminal courts`,
      B: `nur Zivilgerichte :: only civil courts`,
      C: `Straf-, Zivil- und Verwaltungsgerichte :: criminal, civil and administrative courts`,
      D: `nur Verfassungsgerichte :: only constitutional courts`
    },
    correctAnswer: "C"
  },
  {
    id: 209,
    question: `Was ist eine Verfassungsbeschwerde? :: What is a constitutional complaint?`,
    options: {
      A: `eine Beschwerde gegen die Verfassung :: a complaint against the constitution`,
      B: `eine Beschwerde wegen Verletzung von Grundrechten :: a complaint due to violation of basic rights`,
      C: `eine Beschwerde gegen den Bundespräsidenten :: a complaint against the Federal President`,
      D: `eine Beschwerde gegen die Polizei :: a complaint against the police`
    },
    correctAnswer: "B"
  },
  {
    id: 210,
    question: `Wann ist Ihre Stimme bei einer Wahl ungültig? :: When is your vote invalid in an election?`,
    options: {
      A: `wenn Sie mehrere Kandidaten ankreuzen :: when you mark multiple candidates`,
      B: `wenn Sie nur einen Kandidaten ankreuzen :: when you mark only one candidate`,
      C: `wenn Sie zur Wahl gehen :: when you go to vote`,
      D: `wenn Sie nicht zur Wahl gehen :: when you don't go to vote`
    },
    correctAnswer: "A"
  },
  {
    id: 211,
    question: `Was ist bei Bundestags- und Landtagswahlen in Deutschland erlaubt? :: What is allowed in federal and state elections in Germany?`,
    options: {
      A: `Die Wahl ist geheim :: The vote is secret`,
      B: `Nur Männer dürfen wählen :: Only men may vote`,
      C: `Nur Deutsche über 21 dürfen wählen :: Only Germans over 21 may vote`,
      D: `Alle Ausländer dürfen wählen :: All foreigners may vote`
    },
    correctAnswer: "A"
  },
  {
    id: 212,
    question: `Was ist eine Koalition? :: What is a coalition?`,
    options: {
      A: `ein Zusammenschluss von Parteien :: an alliance of parties`,
      B: `eine neue Partei :: a new party`,
      C: `eine Bürgerbewegung :: a citizens' movement`,
      D: `eine Demonstration :: a demonstration`
    },
    correctAnswer: "A"
  },
  {
    id: 213,
    question: `Was bedeutet "Zweitstimme" bei der Bundestagswahl? :: What does "second vote" mean in the federal election?`,
    options: {
      A: `die Wahl des Direktkandidaten :: the election of the direct candidate`,
      B: `die Wahl der Landesliste einer Partei :: the election of a party's state list`,
      C: `eine zweite Chance zu wählen :: a second chance to vote`,
      D: `die Wahl des Bundeskanzlers :: the election of the Federal Chancellor`
    },
    correctAnswer: "B"
  },
  {
    id: 214,
    question: `Bei welcher Wahl können auch EU-Bürger in Deutschland wählen? :: In which election can EU citizens also vote in Germany?`,
    options: {
      A: `bei der Bundestagswahl :: in the federal election`,
      B: `bei der Landtagswahl :: in the state election`,
      C: `bei der Kommunalwahl :: in the local election`,
      D: `bei der Wahl zum Bundespräsidenten :: in the Federal President election`
    },
    correctAnswer: "C"
  },
  {
    id: 215,
    question: `Was ist das Wahlgeheimnis? :: What is voting secrecy?`,
    options: {
      A: `Niemand darf erfahren, wen Sie gewählt haben :: No one may find out whom you voted for`,
      B: `Sie dürfen nicht zur Wahl gehen :: You may not go to vote`,
      C: `Sie müssen vor der Wahl Stillschweigen bewahren :: You must keep silent before the election`,
      D: `Sie dürfen niemandem sagen, dass Sie zur Wahl gegangen sind :: You may not tell anyone that you went to vote`
    },
    correctAnswer: "A"
  },
  {
    id: 216,
    question: `Was ist ein Plebiszit? :: What is a plebiscite?`,
    options: {
      A: `eine Parteiwahl :: a party election`,
      B: `eine Volksabstimmung :: a popular vote`,
      C: `eine Kandidatenwahl :: a candidate election`,
      D: `eine Umfrage :: a survey`
    },
    correctAnswer: "B"
  },
  {
    id: 217,
    question: `Was ist eine Legislaturperiode? :: What is a legislative period?`,
    options: {
      A: `die Zeit zwischen zwei Wahlen :: the time between two elections`,
      B: `die Zeit für ein Gesetz :: the time for a law`,
      C: `die Arbeitszeit von Politikern :: the working time of politicians`,
      D: `die Zeit einer Sitzung :: the time of a session`
    },
    correctAnswer: "A"
  },
  {
    id: 218,
    question: `Was bedeutet "aktive Teilhabe am politischen Leben"? :: What does "active participation in political life" mean?`,
    options: {
      A: `zur Wahl gehen :: going to vote`,
      B: `einer Partei beitreten :: joining a party`,
      C: `sich politisch engagieren :: getting politically involved`,
      D: `alle Antworten sind richtig :: all answers are correct`
    },
    correctAnswer: "D"
  },
  {
    id: 219,
    question: `Was ist Korruption? :: What is corruption?`,
    options: {
      A: `der Missbrauch von Macht für private Vorteile :: the abuse of power for private benefits`,
      B: `eine Form der Demokratie :: a form of democracy`,
      C: `eine Wirtschaftsform :: an economic system`,
      D: `eine Staatsform :: a form of government`
    },
    correctAnswer: "A"
  },
  {
    id: 220,
    question: `Was gehört zur Gewaltenteilung? :: What belongs to the separation of powers?`,
    options: {
      A: `Legislative, Exekutive, Judikative :: legislative, executive, judiciary`,
      B: `Bundestag, Bundesrat, Bundespräsident :: Bundestag, Federal Council, Federal President`,
      C: `Bund, Länder, Gemeinden :: federation, states, municipalities`,
      D: `CDU, SPD, FDP`
    },
    correctAnswer: "A"
  },
  {
    id: 221,
    question: `Welches Prinzip gehört nicht zur Demokratie? :: Which principle does not belong to democracy?`,
    options: {
      A: `Mehrheitsprinzip :: majority principle`,
      B: `Gewaltenteilung :: separation of powers`,
      C: `Erbfolge :: hereditary succession`,
      D: `Volkssouveränität :: popular sovereignty`
    },
    correctAnswer: "C"
  },
  {
    id: 222,
    question: `Was bedeutet Pluralismus? :: What does pluralism mean?`,
    options: {
      A: `Vielfalt der Meinungen :: diversity of opinions`,
      B: `Einheitliche Meinung :: uniform opinion`,
      C: `Staatsreligion :: state religion`,
      D: `Einparteiensystem :: one-party system`
    },
    correctAnswer: "A"
  },
  {
    id: 223,
    question: `Was ist das Bundesland mit den meisten Einwohnern? :: What is the federal state with the most inhabitants?`,
    options: {
      A: `Bayern :: Bavaria`,
      B: `Baden-Württemberg`,
      C: `Nordrhein-Westfalen :: North Rhine-Westphalia`,
      D: `Niedersachsen :: Lower Saxony`
    },
    correctAnswer: "C"
  },
  {
    id: 224,
    question: `Was ist das flächenmäßig größte Bundesland? :: What is the largest federal state by area?`,
    options: {
      A: `Nordrhein-Westfalen :: North Rhine-Westphalia`,
      B: `Baden-Württemberg`,
      C: `Niedersachsen :: Lower Saxony`,
      D: `Bayern :: Bavaria`
    },
    correctAnswer: "D"
  },
  {
    id: 225,
    question: `Welche Stadt ist ein Stadtstaat? :: Which city is a city-state?`,
    options: {
      A: `München :: Munich`,
      B: `Bremen`,
      C: `Dresden`,
      D: `Düsseldorf`
    },
    correctAnswer: "B"
  },
  {
    id: 226,
    question: `Was ist die Landeshauptstadt von Hessen? :: What is the state capital of Hesse?`,
    options: {
      A: `Frankfurt am Main`,
      B: `Wiesbaden`,
      C: `Kassel`,
      D: `Darmstadt`
    },
    correctAnswer: "B"
  },
  {
    id: 227,
    question: `Welcher Fluss fließt durch Bayern? :: Which river flows through Bavaria?`,
    options: {
      A: `der Rhein :: the Rhine`,
      B: `die Elbe :: the Elbe`,
      C: `die Donau :: the Danube`,
      D: `die Weser :: the Weser`
    },
    correctAnswer: "C"
  },
  {
    id: 228,
    question: `Was ist die Landeshauptstadt von Niedersachsen? :: What is the state capital of Lower Saxony?`,
    options: {
      A: `Hannover`,
      B: `Braunschweig`,
      C: `Oldenburg`,
      D: `Göttingen`
    },
    correctAnswer: "A"
  },
  {
    id: 229,
    question: `Wie heißt der höchste Berg in Deutschland? :: What is the highest mountain in Germany called?`,
    options: {
      A: `Brocken`,
      B: `Zugspitze`,
      C: `Feldberg`,
      D: `Watzmann`
    },
    correctAnswer: "B"
  },
  {
    id: 230,
    question: `An welche Meere grenzt Deutschland? :: Which seas does Germany border?`,
    options: {
      A: `Nordsee und Ostsee :: North Sea and Baltic Sea`,
      B: `Nordsee und Mittelmeer :: North Sea and Mediterranean Sea`,
      C: `Ostsee und Schwarzes Meer :: Baltic Sea and Black Sea`,
      D: `nur an die Nordsee :: only the North Sea`
    },
    correctAnswer: "A"
  },
  {
    id: 231,
    question: `Was ist die Landeshauptstadt von Brandenburg? :: What is the state capital of Brandenburg?`,
    options: {
      A: `Cottbus`,
      B: `Brandenburg an der Havel`,
      C: `Potsdam`,
      D: `Frankfurt (Oder)`
    },
    correctAnswer: "C"
  },
  {
    id: 232,
    question: `Welche Stadt liegt im Ruhrgebiet? :: Which city is located in the Ruhr area?`,
    options: {
      A: `Köln :: Cologne`,
      B: `Essen`,
      C: `Hannover`,
      D: `Leipzig`
    },
    correctAnswer: "B"
  },
  {
    id: 233,
    question: `Was ist die Landeshauptstadt von Mecklenburg-Vorpommern? :: What is the state capital of Mecklenburg-Western Pomerania?`,
    options: {
      A: `Rostock`,
      B: `Greifswald`,
      C: `Schwerin`,
      D: `Wismar`
    },
    correctAnswer: "C"
  },
  {
    id: 234,
    question: `In welchem Bundesland liegt die Stadt Heidelberg? :: In which federal state is the city of Heidelberg located?`,
    options: {
      A: `Bayern :: Bavaria`,
      B: `Hessen :: Hesse`,
      C: `Baden-Württemberg`,
      D: `Rheinland-Pfalz :: Rhineland-Palatinate`
    },
    correctAnswer: "C"
  },
  {
    id: 235,
    question: `Was ist die Landeshauptstadt von Schleswig-Holstein? :: What is the state capital of Schleswig-Holstein?`,
    options: {
      A: `Lübeck`,
      B: `Flensburg`,
      C: `Neumünster`,
      D: `Kiel`
    },
    correctAnswer: "D"
  },
  {
    id: 236,
    question: `Welche deutsche Stadt ist für das Oktoberfest bekannt? :: Which German city is known for Oktoberfest?`,
    options: {
      A: `Berlin`,
      B: `Hamburg`,
      C: `München :: Munich`,
      D: `Köln :: Cologne`
    },
    correctAnswer: "C"
  },
  {
    id: 237,
    question: `Was ist die Landeshauptstadt des Saarlandes? :: What is the state capital of Saarland?`,
    options: {
      A: `Völklingen`,
      B: `Neunkirchen`,
      C: `Homburg`,
      D: `Saarbrücken`
    },
    correctAnswer: "D"
  },
  {
    id: 238,
    question: `Welche deutsche Stadt hat einen berühmten Dom? :: Which German city has a famous cathedral?`,
    options: {
      A: `Köln :: Cologne`,
      B: `Bremen`,
      C: `Hamburg`,
      D: `Stuttgart`
    },
    correctAnswer: "A"
  },
  {
    id: 239,
    question: `Was ist die Landeshauptstadt von Rheinland-Pfalz? :: What is the state capital of Rhineland-Palatinate?`,
    options: {
      A: `Koblenz`,
      B: `Mainz`,
      C: `Kaiserslautern`,
      D: `Trier`
    },
    correctAnswer: "B"
  },
  {
    id: 240,
    question: `In welchem Bundesland liegt Weimar? :: In which federal state is Weimar located?`,
    options: {
      A: `Sachsen :: Saxony`,
      B: `Sachsen-Anhalt :: Saxony-Anhalt`,
      C: `Thüringen :: Thuringia`,
      D: `Brandenburg`
    },
    correctAnswer: "C"
  },
  {
    id: 241,
    question: `Was ist Integration? :: What is integration?`,
    options: {
      A: `die Eingliederung in die Gesellschaft :: integration into society`,
      B: `die Trennung von der Gesellschaft :: separation from society`,
      C: `die Rückkehr ins Heimatland :: return to the homeland`,
      D: `die Ablehnung der deutschen Kultur :: rejection of German culture`
    },
    correctAnswer: "A"
  },
  {
    id: 242,
    question: `Was gehört nicht zu den Integrationskursen? :: What does not belong to integration courses?`,
    options: {
      A: `deutscher Sprachkurs :: German language course`,
      B: `Orientierungskurs :: orientation course`,
      C: `Führerscheinkurs :: driving course`,
      D: `Test "Leben in Deutschland" :: "Life in Germany" test`
    },
    correctAnswer: "C"
  },
  {
    id: 243,
    question: `Was ist Ziel der deutschen Integrationspolitik? :: What is the goal of German integration policy?`,
    options: {
      A: `Ausländer sollen Deutschland verlassen :: foreigners should leave Germany`,
      B: `Ausländer sollen sich in Deutschland einleben :: foreigners should settle in Germany`,
      C: `Deutsche sollen auswandern :: Germans should emigrate`,
      D: `Ausländer sollen getrennt von Deutschen leben :: foreigners should live separately from Germans`
    },
    correctAnswer: "B"
  },
  {
    id: 244,
    question: `Warum ist es wichtig, dass Kinder in Deutschland zur Schule gehen? :: Why is it important that children go to school in Germany?`,
    options: {
      A: `um Freunde zu finden :: to find friends`,
      B: `um Deutsch zu lernen und sich zu integrieren :: to learn German and integrate`,
      C: `um den Eltern zu helfen :: to help parents`,
      D: `um früh zu arbeiten :: to work early`
    },
    correctAnswer: "B"
  },
  {
    id: 245,
    question: `Ein ausländischer Mitbürger möchte zum ersten Mal wählen. Was muss er haben? :: A foreign fellow citizen wants to vote for the first time. What must he have?`,
    options: {
      A: `eine Arbeitsstelle :: a job`,
      B: `eine Wohnung :: an apartment`,
      C: `die deutsche Staatsangehörigkeit :: German citizenship`,
      D: `einen deutschen Freund :: a German friend`
    },
    correctAnswer: "C"
  },
  {
    id: 246,
    question: `Was ist ein Grund für eine Einbürgerung? :: What is a reason for naturalization?`,
    options: {
      A: `die politische Teilhabe :: political participation`,
      B: `bessere Arbeitsmöglichkeiten :: better job opportunities`,
      C: `größere Reisefreiheit :: greater freedom of travel`,
      D: `alle Antworten sind richtig :: all answers are correct`
    },
    correctAnswer: "D"
  },
  {
    id: 247,
    question: `Was müssen Sie in Deutschland haben, wenn Sie Auto fahren wollen? :: What must you have in Germany if you want to drive a car?`,
    options: {
      A: `eine Arbeitsstelle :: a job`,
      B: `einen Führerschein :: a driver's license`,
      C: `eine Wohnung :: an apartment`,
      D: `eine Versicherung :: insurance`
    },
    correctAnswer: "B"
  },
  {
    id: 248,
    question: `Wofür ist das Amt für Migration und Flüchtlinge zuständig? :: What is the Office for Migration and Refugees responsible for?`,
    options: {
      A: `für Arbeitsgenehmigungen :: for work permits`,
      B: `für Integrationskurse :: for integration courses`,
      C: `für Einbürgerungen :: for naturalizations`,
      D: `alle Antworten sind richtig :: all answers are correct`
    },
    correctAnswer: "D"
  },
  {
    id: 249,
    question: `Was ist ein Kriterium für eine Einbürgerung in Deutschland? :: What is a criterion for naturalization in Germany?`,
    options: {
      A: `ausreichende Deutschkenntnisse :: sufficient German language skills`,
      B: `ein bestimmtes Einkommen :: a certain income`,
      C: `eine bestimmte Körpergröße :: a certain height`,
      D: `eine bestimmte Religion :: a certain religion`
    },
    correctAnswer: "A"
  },
  {
    id: 250,
    question: `Seit wann können Frauen in Deutschland wählen? :: Since when can women vote in Germany?`,
    options: {
      A: `1900`,
      B: `1918`,
      C: `1933`,
      D: `1949`
    },
    correctAnswer: "B"
  },
  {
    id: 251,
    question: `Was ist ein Merkmal der Demokratie? :: What is a characteristic of democracy?`,
    options: {
      A: `freie Wahlen :: free elections`,
      B: `nur eine Partei :: only one party`,
      C: `staatliche Kontrolle der Medien :: state control of media`,
      D: `keine Opposition :: no opposition`
    },
    correctAnswer: "A"
  },
  {
    id: 252,
    question: `Welches Gericht ist zuständig für die Auslegung des Grundgesetzes? :: Which court is responsible for interpreting the Basic Law?`,
    options: {
      A: `Amtsgericht :: Local Court`,
      B: `Landgericht :: Regional Court`,
      C: `Bundesverfassungsgericht :: Federal Constitutional Court`,
      D: `Oberlandesgericht :: Higher Regional Court`
    },
    correctAnswer: "C"
  },
  {
    id: 253,
    question: `Was bedeutet "Bürgerrechte"? :: What does "civil rights" mean?`,
    options: {
      A: `Rechte nur für Deutsche :: rights only for Germans`,
      B: `Rechte für alle Menschen :: rights for all people`,
      C: `Rechte nur für Bürger einer Gemeinde :: rights only for citizens of a municipality`,
      D: `Rechte nur für Erwachsene :: rights only for adults`
    },
    correctAnswer: "A"
  },
  {
    id: 254,
    question: `Welches Grundrecht schützt vor Willkür des Staates? :: Which basic right protects against arbitrary state action?`,
    options: {
      A: `Meinungsfreiheit :: freedom of opinion`,
      B: `Rechtsstaatsprinzip :: rule of law principle`,
      C: `Religionsfreiheit :: religious freedom`,
      D: `Versammlungsfreiheit :: freedom of assembly`
    },
    correctAnswer: "B"
  },
  {
    id: 255,
    question: `Was bedeutet "Unschuldsvermutung"? :: What does "presumption of innocence" mean?`,
    options: {
      A: `Jeder ist schuldig bis zum Beweis des Gegenteils :: everyone is guilty until proven otherwise`,
      B: `Jeder ist unschuldig bis zum Beweis der Schuld :: everyone is innocent until proven guilty`,
      C: `Nur Deutsche sind unschuldig :: only Germans are innocent`,
      D: `Niemand ist schuldig :: no one is guilty`
    },
    correctAnswer: "B"
  },
  {
    id: 256,
    question: `Was ist Meinungsfreiheit? :: What is freedom of opinion?`,
    options: {
      A: `das Recht, alles zu sagen :: the right to say everything`,
      B: `das Recht, seine Meinung frei zu äußern :: the right to freely express one's opinion`,
      C: `das Recht, andere zu beleidigen :: the right to insult others`,
      D: `das Recht, unwahre Tatsachen zu verbreiten :: the right to spread false facts`
    },
    correctAnswer: "B"
  },
  {
    id: 257,
    question: `Was bedeutet Pressefreiheit? :: What does press freedom mean?`,
    options: {
      A: `Journalisten dürfen alles schreiben :: journalists may write everything`,
      B: `die Presse darf nicht kritisieren :: the press may not criticize`,
      C: `die Presse kann frei berichten :: the press can report freely`,
      D: `nur Deutsche dürfen Zeitung lesen :: only Germans may read newspapers`
    },
    correctAnswer: "C"
  },
  {
    id: 258,
    question: `Was ist Versammlungsfreiheit? :: What is freedom of assembly?`,
    options: {
      A: `das Recht, sich friedlich zu versammeln :: the right to assemble peacefully`,
      B: `das Recht, Gewalt anzuwenden :: the right to use violence`,
      C: `das Recht, andere zu stören :: the right to disturb others`,
      D: `das Recht, ohne Anmeldung zu demonstrieren :: the right to demonstrate without registration`
    },
    correctAnswer: "A"
  },
  {
    id: 259,
    question: `Was ist das Petitionsrecht? :: What is the right to petition?`,
    options: {
      A: `das Recht, vor Gericht zu klagen :: the right to sue in court`,
      B: `das Recht, sich an Behörden zu wenden :: the right to contact authorities`,
      C: `das Recht, nicht zu wählen :: the right not to vote`,
      D: `das Recht, auszuwandern :: the right to emigrate`
    },
    correctAnswer: "B"
  },
  {
    id: 260,
    question: `Welches Grundrecht schützt die Privatsphäre? :: Which basic right protects privacy?`,
    options: {
      A: `Meinungsfreiheit :: freedom of opinion`,
      B: `Unverletzlichkeit der Wohnung :: inviolability of the home`,
      C: `Versammlungsfreiheit :: freedom of assembly`,
      D: `Religionsfreiheit :: religious freedom`
    },
    correctAnswer: "B"
  },
  {
    id: 261,
    question: `Was bedeutet "Berufsfreiheit"? :: What does "freedom of occupation" mean?`,
    options: {
      A: `jeder kann arbeiten, wo er will :: everyone can work where they want`,
      B: `jeder kann den Beruf frei wählen :: everyone can freely choose their profession`,
      C: `niemand muss arbeiten :: no one has to work`,
      D: `nur Deutsche dürfen arbeiten :: only Germans may work`
    },
    correctAnswer: "B"
  },
  {
    id: 262,
    question: `Was ist die Freizügigkeit? :: What is freedom of movement?`,
    options: {
      A: `das Recht, überall in Deutschland zu wohnen :: the right to live anywhere in Germany`,
      B: `das Recht, nicht zu arbeiten :: the right not to work`,
      C: `das Recht, kostenlos zu reisen :: the right to travel for free`,
      D: `das Recht, im Ausland zu leben :: the right to live abroad`
    },
    correctAnswer: "A"
  },
  {
    id: 263,
    question: `Was bedeutet "Gleichberechtigung"? :: What does "equal rights" mean?`,
    options: {
      A: `alle Menschen sind gleich :: all people are equal`,
      B: `Männer und Frauen haben die gleichen Rechte :: men and women have the same rights`,
      C: `nur Deutsche sind gleichberechtigt :: only Germans have equal rights`,
      D: `reiche Menschen haben mehr Rechte :: rich people have more rights`
    },
    correctAnswer: "B"
  },
  {
    id: 264,
    question: `Was ist ein Ehrenamt? :: What is voluntary work?`,
    options: {
      A: `bezahlte Arbeit :: paid work`,
      B: `unbezahlte Arbeit für die Gesellschaft :: unpaid work for society`,
      C: `Arbeit nur für Deutsche :: work only for Germans`,
      D: `Arbeit nur für Männer :: work only for men`
    },
    correctAnswer: "B"
  },
  {
    id: 265,
    question: `Was ist eine Bürgerinitiative? :: What is a citizens' initiative?`,
    options: {
      A: `eine Gruppe von Bürgern mit einem gemeinsamen Ziel :: a group of citizens with a common goal`,
      B: `eine politische Partei :: a political party`,
      C: `ein Unternehmen :: a company`,
      D: `eine Behörde :: an authority`
    },
    correctAnswer: "A"
  },
  {
    id: 266,
    question: `Was ist Zivilcourage? :: What is civil courage?`,
    options: {
      A: `Mut zum Militärdienst :: courage for military service`,
      B: `Mut, anderen zu helfen und für Recht einzustehen :: courage to help others and stand up for what is right`,
      C: `Angst vor Problemen :: fear of problems`,
      D: `Gehorsam gegenüber der Regierung :: obedience to the government`
    },
    correctAnswer: "B"
  },
  {
    id: 267,
    question: `Was fördert das Zusammenleben verschiedener Kulturen? :: What promotes the coexistence of different cultures?`,
    options: {
      A: `Toleranz :: tolerance`,
      B: `Vorurteile :: prejudices`,
      C: `Abgrenzung :: separation`,
      D: `Ausgrenzung :: exclusion`
    },
    correctAnswer: "A"
  },
  {
    id: 268,
    question: `Was ist wichtig für das Zusammenleben in Deutschland? :: What is important for living together in Germany?`,
    options: {
      A: `gegenseitiger Respekt :: mutual respect`,
      B: `gleiche Sprache :: same language`,
      C: `gleiche Religion :: same religion`,
      D: `gleiche Herkunft :: same origin`
    },
    correctAnswer: "A"
  },
  {
    id: 269,
    question: `Was bedeutet "multikulturelle Gesellschaft"? :: What does "multicultural society" mean?`,
    options: {
      A: `Menschen verschiedener Kulturen leben zusammen :: people of different cultures live together`,
      B: `nur eine Kultur ist erlaubt :: only one culture is allowed`,
      C: `alle müssen die gleiche Kultur haben :: everyone must have the same culture`,
      D: `Kulturen leben getrennt voneinander :: cultures live separately from each other`
    },
    correctAnswer: "A"
  },
  {
    id: 270,
    question: `Was ist Diskriminierung? :: What is discrimination?`,
    options: {
      A: `gleiche Behandlung aller Menschen :: equal treatment of all people`,
      B: `ungleiche Behandlung aufgrund bestimmter Merkmale :: unequal treatment based on certain characteristics`,
      C: `besondere Förderung von Minderheiten :: special promotion of minorities`,
      D: `respektvoller Umgang miteinander :: respectful interaction with each other`
    },
    correctAnswer: "B"
  },
  {
    id: 271,
    question: `Was ist Rassismus? :: What is racism?`,
    options: {
      A: `Diskriminierung aufgrund der Hautfarbe oder Herkunft :: discrimination based on skin color or origin`,
      B: `gleiche Rechte für alle :: equal rights for all`,
      C: `Respekt vor anderen Kulturen :: respect for other cultures`,
      D: `Hilfe für Benachteiligte :: help for the disadvantaged`
    },
    correctAnswer: "A"
  },
  {
    id: 272,
    question: `Was kann jeder Einzelne gegen Rassismus tun? :: What can each individual do against racism?`,
    options: {
      A: `wegschauen :: look away`,
      B: `sich dagegen aussprechen :: speak out against it`,
      C: `mitmachen :: participate`,
      D: `nichts :: nothing`
    },
    correctAnswer: "B"
  },
  {
    id: 273,
    question: `Welche Eigenschaft sollte man haben, um in Deutschland zu leben? :: Which quality should one have to live in Germany?`,
    options: {
      A: `Intoleranz :: intolerance`,
      B: `Toleranz :: tolerance`,
      C: `Gleichgültigkeit :: indifference`,
      D: `Vorurteile :: prejudices`
    },
    correctAnswer: "B"
  },
  {
    id: 274,
    question: `Was ist ein wichtiger Wert in der deutschen Gesellschaft? :: What is an important value in German society?`,
    options: {
      A: `Solidarität :: solidarity`,
      B: `Egoismus :: egoism`,
      C: `Isolation :: isolation`,
      D: `Gleichgültigkeit :: indifference`
    },
    correctAnswer: "A"
  },
  {
    id: 275,
    question: `Was bedeutet "Teilhabe am gesellschaftlichen Leben"? :: What does "participation in social life" mean?`,
    options: {
      A: `sich von der Gesellschaft abgrenzen :: separating oneself from society`,
      B: `aktiv am Gemeinschaftsleben teilnehmen :: actively participating in community life`,
      C: `nur zu Hause bleiben :: only staying at home`,
      D: `andere Menschen meiden :: avoiding other people`
    },
    correctAnswer: "B"
  },
  {
    id: 276,
    question: `Was ist wichtig für eine funktionierende Demokratie? :: What is important for a functioning democracy?`,
    options: {
      A: `politische Bildung der Bürger :: political education of citizens`,
      B: `Unwissenheit der Bürger :: ignorance of citizens`,
      C: `nur eine Meinung :: only one opinion`,
      D: `keine Wahlen :: no elections`
    },
    correctAnswer: "A"
  },
  {
    id: 277,
    question: `Was ist ein Verfassungsschutz? :: What is constitutional protection?`,
    options: {
      A: `Schutz der Verfassung vor Feinden :: protection of the constitution from enemies`,
      B: `Schutz von Politikern :: protection of politicians`,
      C: `Schutz von Gebäuden :: protection of buildings`,
      D: `Schutz vor der Polizei :: protection from police`
    },
    correctAnswer: "A"
  },
  {
    id: 278,
    question: `Was ist Extremismus? :: What is extremism?`,
    options: {
      A: `gemäßigte politische Meinungen :: moderate political opinions`,
      B: `radikale Ansichten gegen die demokratische Ordnung :: radical views against democratic order`,
      C: `normale politische Teilnahme :: normal political participation`,
      D: `friedliche Demonstrationen :: peaceful demonstrations`
    },
    correctAnswer: "B"
  },
  {
    id: 279,
    question: `Was ist Terrorismus? :: What is terrorism?`,
    options: {
      A: `friedlicher Protest :: peaceful protest`,
      B: `politische Gewalt zur Einschüchterung :: political violence for intimidation`,
      C: `demokratische Meinungsäußerung :: democratic expression of opinion`,
      D: `normale Kriminalität :: normal crime`
    },
    correctAnswer: "B"
  },
  {
    id: 280,
    question: `Was ist das Ziel von Terrorismus? :: What is the goal of terrorism?`,
    options: {
      A: `Frieden schaffen :: creating peace`,
      B: `Angst und Schrecken verbreiten :: spreading fear and terror`,
      C: `Demokratie fördern :: promoting democracy`,
      D: `Menschen helfen :: helping people`
    },
    correctAnswer: "B"
  },
  {
    id: 281,
    question: `Wie sollte man auf Terrorismus reagieren? :: How should one react to terrorism?`,
    options: {
      A: `mit Gewalt :: with violence`,
      B: `mit rechtsstaatlichen Mitteln :: with constitutional means`,
      C: `mit Gleichgültigkeit :: with indifference`,
      D: `mit Angst :: with fear`
    },
    correctAnswer: "B"
  },
  {
    id: 282,
    question: `Was ist Rechtsterrorismus? :: What is right-wing terrorism?`,
    options: {
      A: `Terrorismus von Rechtsanwälten :: terrorism by lawyers`,
      B: `Terrorismus von rechtsextremen Gruppen :: terrorism by right-wing extremist groups`,
      C: `legaler Terrorismus :: legal terrorism`,
      D: `berechtigter Terrorismus :: justified terrorism`
    },
    correctAnswer: "B"
  },
  {
    id: 283,
    question: `Was ist Linksterrorismus? :: What is left-wing terrorism?`,
    options: {
      A: `Terrorismus mit der linken Hand :: terrorism with the left hand`,
      B: `Terrorismus von linksextremen Gruppen :: terrorism by left-wing extremist groups`,
      C: `falscher Terrorismus :: false terrorism`,
      D: `schwacher Terrorismus :: weak terrorism`
    },
    correctAnswer: "B"
  },
  {
    id: 284,
    question: `Was war die RAF? :: What was the RAF?`,
    options: {
      A: `eine deutsche Fluggesellschaft :: a German airline`,
      B: `eine terroristische Vereinigung :: a terrorist organization`,
      C: `eine politische Partei :: a political party`,
      D: `eine Hilfsorganisation :: a relief organization`
    },
    correctAnswer: "B"
  },
  {
    id: 285,
    question: `Was ist religiöser Fundamentalismus? :: What is religious fundamentalism?`,
    options: {
      A: `tiefe Religiosität :: deep religiosity`,
      B: `radikale Auslegung religiöser Texte :: radical interpretation of religious texts`,
      C: `normale Religionsausübung :: normal religious practice`,
      D: `Religionsfreiheit :: religious freedom`
    },
    correctAnswer: "B"
  },
  {
    id: 286,
    question: `Was ist Islamismus? :: What is Islamism?`,
    options: {
      A: `die Religion Islam :: the religion Islam`,
      B: `politische Ideologie, die den Islam missbraucht :: political ideology that misuses Islam`,
      C: `islamische Kultur :: Islamic culture`,
      D: `islamische Kunst :: Islamic art`
    },
    correctAnswer: "B"
  },
  {
    id: 287,
    question: `Was unterscheidet Islam von Islamismus? :: What distinguishes Islam from Islamism?`,
    options: {
      A: `nichts :: nothing`,
      B: `Islam ist Religion, Islamismus ist Extremismus :: Islam is religion, Islamism is extremism`,
      C: `alles :: everything`,
      D: `die Sprache :: the language`
    },
    correctAnswer: "B"
  },
  {
    id: 288,
    question: `Was ist wichtig im Kampf gegen Extremismus? :: What is important in the fight against extremism?`,
    options: {
      A: `Aufklärung und Bildung :: education and enlightenment`,
      B: `Ausgrenzung :: exclusion`,
      C: `Ignoranz :: ignorance`,
      D: `Gewalt :: violence`
    },
    correctAnswer: "A"
  },
  {
    id: 289,
    question: `Was ist Prävention? :: What is prevention?`,
    options: {
      A: `Nachsorge :: aftercare`,
      B: `Vorbeugung :: prevention`,
      C: `Bestrafung :: punishment`,
      D: `Vergeltung :: retaliation`
    },
    correctAnswer: "B"
  },
  {
    id: 290,
    question: `Was kann Radikalisierung verhindern? :: What can prevent radicalization?`,
    options: {
      A: `soziale Integration :: social integration`,
      B: `Isolation :: isolation`,
      C: `Diskriminierung :: discrimination`,
      D: `Ausgrenzung :: exclusion`
    },
    correctAnswer: "A"
  },
  {
    id: 291,
    question: `Was ist ein Anzeichen für Radikalisierung? :: What is a sign of radicalization?`,
    options: {
      A: `normale politische Teilnahme :: normal political participation`,
      B: `plötzlicher Rückzug und extreme Ansichten :: sudden withdrawal and extreme views`,
      C: `Interesse an Politik :: interest in politics`,
      D: `Toleranz gegenüber anderen :: tolerance towards others`
    },
    correctAnswer: "B"
  },
  {
    id: 292,
    question: `Wie kann man Radikalisierung entgegenwirken? :: How can one counteract radicalization?`,
    options: {
      A: `durch Gespräche und professionelle Hilfe :: through conversations and professional help`,
      B: `durch Ignorieren :: by ignoring`,
      C: `durch Bestrafung :: through punishment`,
      D: `durch Isolation :: through isolation`
    },
    correctAnswer: "A"
  },
  {
    id: 293,
    question: `Was ist wichtig für den sozialen Frieden? :: What is important for social peace?`,
    options: {
      A: `Toleranz und Respekt :: tolerance and respect`,
      B: `Ausgrenzung :: exclusion`,
      C: `Vorurteile :: prejudices`,
      D: `Gleichgültigkeit :: indifference`
    },
    correctAnswer: "A"
  },
  {
    id: 294,
    question: `Was bedeutet gesellschaftliche Verantwortung? :: What does social responsibility mean?`,
    options: {
      A: `nur an sich selbst denken :: only thinking of oneself`,
      B: `Verantwortung für das Gemeinwohl übernehmen :: taking responsibility for the common good`,
      C: `anderen die Schuld geben :: blaming others`,
      D: `sich nicht einmischen :: not getting involved`
    },
    correctAnswer: "B"
  },
  {
    id: 295,
    question: `Was ist ein Charakteristikum der deutschen Gesellschaft? :: What is a characteristic of German society?`,
    options: {
      A: `Vielfalt :: diversity`,
      B: `Einheitlichkeit :: uniformity`,
      C: `Isolation :: isolation`,
      D: `Ausgrenzung :: exclusion`
    },
    correctAnswer: "A"
  },
  {
    id: 296,
    question: `Was fördert den Zusammenhalt in der Gesellschaft? :: What promotes cohesion in society?`,
    options: {
      A: `gemeinsame Werte :: shared values`,
      B: `Trennung :: separation`,
      C: `Konkurrenz :: competition`,
      D: `Misstrauen :: mistrust`
    },
    correctAnswer: "A"
  },
  {
    id: 297,
    question: `Was ist wichtig für die Zukunft Deutschlands? :: What is important for Germany's future?`,
    options: {
      A: `Bildung und Innovation :: education and innovation`,
      B: `Stillstand :: stagnation`,
      C: `Rückschritt :: regression`,
      D: `Isolation :: isolation`
    },
    correctAnswer: "A"
  },
  {
    id: 298,
    question: `Was ist ein Ziel der deutschen Bildungspolitik? :: What is a goal of German education policy?`,
    options: {
      A: `Chancengleichheit :: equal opportunities`,
      B: `Ausgrenzung :: exclusion`,
      C: `Privilegien für wenige :: privileges for few`,
      D: `Bildung nur für Deutsche :: education only for Germans`
    },
    correctAnswer: "A"
  },
  {
    id: 299,
    question: `Was ist nachhaltige Entwicklung? :: What is sustainable development?`,
    options: {
      A: `Entwicklung ohne Rücksicht auf die Umwelt :: development without regard for the environment`,
      B: `Entwicklung, die auch künftige Generationen berücksichtigt :: development that also considers future generations`,
      C: `nur wirtschaftliche Entwicklung :: only economic development`,
      D: `schnelle Entwicklung :: rapid development`
    },
    correctAnswer: "B"
  },
  {
    id: 300,
    question: `Was ist ein wichtiges Prinzip für das Zusammenleben in Deutschland? :: What is an important principle for living together in Germany?`,
    options: {
      A: `gegenseitiger Respekt und Toleranz :: mutual respect and tolerance`,
      B: `Ausgrenzung von Minderheiten :: exclusion of minorities`,
      C: `nur deutsche Kultur zulassen :: only allowing German culture`,
      D: `getrennte Lebenswelten :: separate living worlds`
    },
    correctAnswer: "A"
  }
]