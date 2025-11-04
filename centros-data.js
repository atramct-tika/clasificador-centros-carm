// CENTROS EDUCATIVOS DE LA REGIÓN DE MURCIA
// Datos procesados desde Centros-definitivos.csv
// Total: 312 centros únicos depurados
// Última actualización: 2025-01-04
// Fuente: BORM 2025 - ANEXO Oficial CARM

const centersData = [
    // ==========================================
    // ZONA 300019 - MURCIA
    // ==========================================
    
    // ALBERCA DE LAS TORRES
    {codigo: "30004796", nombre: "VIRGEN DE LA FUENSANTA", tipo: "CE INF-PRI", direccion: "CALDERON DE LA BARCA, 14", cp: "30150", localidad: "ALBERCA DE LAS TORRES", municipio: "MURCIA", zona: "300019"},
    {codigo: "30011028", nombre: "EL MOLINICO", tipo: "CE INF-PRI", direccion: "HUERTOS, 12", cp: "30150", localidad: "ALBERCA DE LAS TORRES", municipio: "MURCIA", zona: "300019"},
    
    // ALCANTARILLA
    {codigo: "30000377", nombre: "CAMPOAMOR", tipo: "CE INF-PRI", direccion: "JOSE MARIA LOPEZ LEAL, S/N", cp: "30820", localidad: "ALCANTARILLA", municipio: "ALCANTARILLA", zona: "300019"},
    {codigo: "30000389", nombre: "JACINTO BENAVENTE", tipo: "CE INF-PRI", direccion: "C/ALFONSO PACHECO MARTINEZ, S/N", cp: "30820", localidad: "ALCANTARILLA", municipio: "ALCANTARILLA", zona: "300019"},
    {codigo: "30000390", nombre: "NTRA. SRA. DE LA ASUNCIÓN", tipo: "CE INF-PRI", direccion: "AVDA. VIRGEN DEL CARMEN, S/N", cp: "30820", localidad: "ALCANTARILLA", municipio: "ALCANTARILLA", zona: "300019"},
    {codigo: "30000407", nombre: "NTRA. SRA. DE LA SALUD", tipo: "CE INF-PRI", direccion: "C/ MADRID, 92", cp: "30820", localidad: "ALCANTARILLA", municipio: "ALCANTARILLA", zona: "300019"},
    {codigo: "30000481", nombre: "SAN JOSÉ OBRERO", tipo: "CE INF-PRI", direccion: "C/ SAN MARCELINO, S/N (B.SAN J.OBRERO)", cp: "30820", localidad: "ALCANTARILLA", municipio: "ALCANTARILLA", zona: "300019"},
    {codigo: "30000501", nombre: "LAS TEJERAS", tipo: "CE INF-PRI", direccion: "AVDA. EJERCITO DEL AIRE S/N", cp: "30820", localidad: "ALCANTARILLA", municipio: "ALCANTARILLA", zona: "300019"},
    {codigo: "30008376", nombre: "MAESTRO D. EUSEBIO MARTÍNEZ", tipo: "CEE", direccion: "BDA. DE LA SALUD, S/N", cp: "30820", localidad: "ALCANTARILLA", municipio: "ALCANTARILLA", zona: "300019"},
    {codigo: "30009371", nombre: "JARA CARRILLO", tipo: "CE INF-PRI", direccion: "DR. JOSE CAPEL (B. CAMPOAMOR)", cp: "30820", localidad: "ALCANTARILLA", municipio: "ALCANTARILLA", zona: "300019"},
    {codigo: "30010310", nombre: "VISTABELLA", tipo: "CE INF-PRI", direccion: "C/ PUERTO RICO, 7", cp: "30820", localidad: "ALCANTARILLA", municipio: "ALCANTARILLA", zona: "300019"},
    
    // ALGEZARES
    {codigo: "30004841", nombre: "SAAVEDRA FAJARDO", tipo: "CE INF-PRI", direccion: "RAMON Y CAJAL, S/N", cp: "30157", localidad: "ALGEZARES", municipio: "MURCIA", zona: "300019"},
    {codigo: "30011326", nombre: "FRANCISCO COBACHO", tipo: "CE INF-PRI", direccion: "URB. FUENSANTA 50", cp: "30157", localidad: "ALGEZARES", municipio: "MURCIA", zona: "300019"},
    
    // ALJUCER
    {codigo: "30004887", nombre: "ESCULTOR GONZÁLEZ MORENO", tipo: "CE INF-PRI", direccion: "MAYOR, 51", cp: "30163", localidad: "ALJUCER", municipio: "MURCIA", zona: "300019"},
    {codigo: "30011302", nombre: "FRANCISCO SÁNCHEZ MATAS", tipo: "CE INF-PRI", direccion: "SALABOSQUE", cp: "30163", localidad: "ALJUCER", municipio: "MURCIA", zona: "300019"},
    
    // ALQUERIAS
    {codigo: "30004899", nombre: "SAN JUAN BAUTISTA", tipo: "CE INF-PRI", direccion: "ESCUELAS, 31", cp: "30154", localidad: "ALQUERIAS", municipio: "MURCIA", zona: "300019"},
    {codigo: "30009423", nombre: "SAN JOSÉ DE CALASANZ", tipo: "CE INF-PRI", direccion: "CTRA. DE LA ESTACION, S/N", cp: "30154", localidad: "ALQUERIAS", municipio: "MURCIA", zona: "300019"},
    
    // ARBOLEJA (LA)
    {codigo: "30010449", nombre: "LA ARBOLEJA", tipo: "CE INF-PRI", direccion: "ENTRECARRIL PEPINES Y CHORNOS, S/N", cp: "30570", localidad: "ARBOLEJA (LA)", municipio: "MURCIA", zona: "300019"},
    
    // BARQUEROS
    {codigo: "30004954", nombre: "PEDRO MARTÍNEZ CHACAS", tipo: "CE INF-PRI", direccion: "VEREDA, S/N", cp: "30155", localidad: "BARQUEROS", municipio: "MURCIA", zona: "300019"},
    
    // BENIAJAN
    {codigo: "30004966", nombre: "NTRA. SRA. DE LA FUENSANTA", tipo: "CE INF-PRI", direccion: "JUAN PELEGRÍN TOMÁS, 10", cp: "30110", localidad: "BENIAJAN", municipio: "MURCIA", zona: "300019"},
    {codigo: "30004978", nombre: "NTRA. SRA. DE FÁTIMA", tipo: "CE INF-PRI", direccion: "EL BOJAL", cp: "30110", localidad: "BENIAJAN", municipio: "MURCIA", zona: "300019"},
    {codigo: "30004981", nombre: "INFANTA ELENA", tipo: "CE INF-PRI", direccion: "C/ MAYOR, Nº 33", cp: "", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30010681", nombre: "MONTEAZAHAR", tipo: "CP PRI", direccion: "AVDA. MONTEAZAHAR, 21", cp: "30110", localidad: "BENIAJAN", municipio: "MURCIA", zona: "300019"},
    {codigo: "30012021", nombre: "LA NARANJA", tipo: "E.E.I.", direccion: "ESCUELAS, S/N", cp: "30110", localidad: "BENIAJAN", municipio: "MURCIA", zona: "300019"},
    
    // BENIEL
    {codigo: "30000811", nombre: "ANTONIO MONZÓN", tipo: "CE INF-PRI", direccion: "C/ JOSE ANTONIO CAMACHO, Nº 1", cp: "30130", localidad: "BENIEL", municipio: "BENIEL", zona: "300019"},
    {codigo: "30010334", nombre: "RÍO SEGURA", tipo: "CE INF-PRI", direccion: "SAN ISIDRO, 15", cp: "30130", localidad: "BENIEL", municipio: "BENIEL", zona: "300019"},
    
    // CABEZO DE TORRES
    {codigo: "30005053", nombre: "NTRA. SRA. DE LAS LÁGRIMAS", tipo: "CE INF-PRI", direccion: "ANTONIO MACHADO, 1", cp: "30110", localidad: "CABEZO DE TORRES", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005065", nombre: "MARÍA AUXILIADORA", tipo: "CE INF-PRI", direccion: "BARRIO MARIA AUXILIADORA", cp: "30110", localidad: "CABEZO DE TORRES", municipio: "MURCIA", zona: "300019"},
    {codigo: "30008625", nombre: "JOSÉ RUBIO GOMARIZ", tipo: "CE INF-PRI", direccion: "RAMBLA DEL CARMEN, 20", cp: "30110", localidad: "CABEZO DE TORRES", municipio: "MURCIA", zona: "300019"},
    
    // CASILLAS
    {codigo: "30006483", nombre: "JUAN DE LA CIERVA", tipo: "CE INF-PRI", direccion: "C/ ESCUELAS, S/N", cp: "30155", localidad: "CASILLAS (LUGAR DE) O ERMITA DE BUENDIA", municipio: "MURCIA", zona: "300019"},
    
    // CHURRA
    {codigo: "30005144", nombre: "CAROLINA CODORNÍU BOSCH", tipo: "CE INF-PRI", direccion: "C/. AMAPOLA Nº 2", cp: "30110", localidad: "CHURRA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30010292", nombre: "PÉREZ URRUTI", tipo: "CEE", direccion: "VEREDA DE FORTUNA, Nº 15", cp: "30110", localidad: "CHURRA", municipio: "MURCIA", zona: "300019"},
    
    // COBATILLAS
    {codigo: "30005120", nombre: "VIRGEN DE LA VEGA", tipo: "CE INF-PRI", direccion: "FICUS, S/N", cp: "30158", localidad: "COBATILLAS", municipio: "MURCIA", zona: "300019"},
    
    // CORVERA
    {codigo: "30005132", nombre: "ISABEL BELLVÍS", tipo: "CPEIBas", direccion: "CTRA. FUENTE ALAMO, 95", cp: "30153", localidad: "CORVERA", municipio: "MURCIA", zona: "300019"},
    
    // ERA ALTA
    {codigo: "30005171", nombre: "SANTIAGO GARCÍA MEDEL", tipo: "CE INF-PRI", direccion: "CARRIL DE LOS PABLOS, 1", cp: "30590", localidad: "ERA ALTA", municipio: "MURCIA", zona: "300019"},
    
    // ERMITA DE PATIÑO
    {codigo: "30006641", nombre: "JOSÉ MARTÍNEZ TORNEL", tipo: "CE INF-PRI", direccion: "CTRA. DE LA FUENSANTA, 228", cp: "30163", localidad: "ERMITA DE PATIÑO", municipio: "MURCIA", zona: "300019"},
    
    // ESPARRAGAL
    {codigo: "30005193", nombre: "NTRA. SRA. DE LOS ÁNGELES", tipo: "CE INF-PRI", direccion: "C/ LIMONAR S/N", cp: "30161", localidad: "ESPARRAGAL", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005201", nombre: "LA CRUZ", tipo: "CE INF-PRI", direccion: "C/ ESCUELAS Nº 10", cp: "30161", localidad: "ESPARRAGAL", municipio: "MURCIA", zona: "300019"},
    {codigo: "30009435", nombre: "VICENTE MEDINA", tipo: "CE INF-PRI", direccion: "C/. POETA VICENTE MEDINA, Nº 8", cp: "30161", localidad: "ESPARRAGAL", municipio: "MURCIA", zona: "300019"},
    
    // GARRES (LOS)
    {codigo: "30005223", nombre: "ANTONIO DÍAZ", tipo: "CE INF-PRI", direccion: "AVDA. DE LA CULTURA, Nº 60", cp: "30163", localidad: "GARRES (LOS)", municipio: "MURCIA", zona: "300019"},
    
    // GEA (LO)
    {codigo: "30012148", nombre: "NTRA. SRA. DEL CARMEN", tipo: "E.E.I.", direccion: "GEA Y TRUYOLS", cp: "30157", localidad: "GEA (LO)", municipio: "MURCIA", zona: "300019"},
    
    // GUADALUPE DE MACIASCOQUE
    {codigo: "30005260", nombre: "VIRGEN DE GUADALUPE", tipo: "CE INF-PRI", direccion: "CONSTITUCION, S/N", cp: "30006", localidad: "GUADALUPE DE MACIASCOQUE", municipio: "MURCIA", zona: "300019"},
    
    // LLANO DE BRUJAS
    {codigo: "30005375", nombre: "JUAN CARLOS I", tipo: "CE INF-PRI", direccion: "FRANCISCO SANCHEZ BAUTISTA,6 (LLANO DE B", cp: "30161", localidad: "HUERTA DE LLANO DE BRUJAS", municipio: "MURCIA", zona: "300019"},
    
    // EL RAAL
    {codigo: "30006525", nombre: "NTRA. SRA. DE LOS DOLORES", tipo: "CE INF-PRI", direccion: "C/. ESCUELAS, 9 (EL RAAL)", cp: "30163", localidad: "HUERTA DEL RAAL", municipio: "MURCIA", zona: "300019"},
    {codigo: "30008731", nombre: "TORRETEATINOS", tipo: "CE INF-PRI", direccion: "VEREDA DE LA TORRE, 39", cp: "30163", localidad: "HUERTA DEL RAAL", municipio: "MURCIA", zona: "300019"},
    
    // JAVALI NUEVO
    {codigo: "30005302", nombre: "CONTRAPARADA", tipo: "CE INF-PRI", direccion: "ROSARIO, 43", cp: "30151", localidad: "JAVALI NUEVO", municipio: "MURCIA", zona: "300019"},
    {codigo: "30010401", nombre: "RÍO SEGURA", tipo: "CE INF-PRI", direccion: "AGUSTIN VIRGILI (B.STA.MARIA)", cp: "30151", localidad: "JAVALI NUEVO", municipio: "MURCIA", zona: "300019"},
    
    // JAVALI VIEJO
    {codigo: "30005326", nombre: "HELLÍN LASHERAS", tipo: "CE INF-PRI", direccion: "C/ JOSÉ ROBLES, 8", cp: "30151", localidad: "JAVALI VIEJO (O EL LUGARICO)", municipio: "MURCIA", zona: "300019"},
    
    // MATANZAS (SANTOMERA)
    {codigo: "30008613", nombre: "CAMPOAZAHAR", tipo: "CE INF-PRI", direccion: "CTRA. ABANILLA, Km. 5", cp: "30140", localidad: "MATANZAS", municipio: "SANTOMERA", zona: "300019"},
    
    // MONTEAGUDO
    {codigo: "30005429", nombre: "VIRGEN DEL ROSARIO", tipo: "CE INF-PRI", direccion: "LA CUEVA", cp: "30160", localidad: "MONTEAGUDO", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005430", nombre: "JUAN XXIII", tipo: "CE INF-PRI", direccion: "PIO BAROJA, 4", cp: "30160", localidad: "MONTEAGUDO", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005442", nombre: "NTRA. SRA. DE LA ANTIGUA", tipo: "CE INF-PRI", direccion: "CAMINO VIEJO DE MONTEAGUDO, 18", cp: "30160", localidad: "MONTEAGUDO", municipio: "MURCIA", zona: "300019"},
    
    // MURCIA CIUDAD
    {codigo: "30004760", nombre: "PUENTE DE DOÑANA", tipo: "CE INF-PRI", direccion: "CARRIL DE LAS ESCUELAS, 11 (LA ALBATALÍA", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30004772", nombre: "JUAN XXIII", tipo: "CE INF-PRI", direccion: "Pº DUQUES DE LUGO, S/N", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005168", nombre: "MAESTRO ENRIQUE LABORDA", tipo: "CE INF-PRI", direccion: "MAESTRO FCO. SOTO S/N", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005454", nombre: "ANDRÉS BAQUERO", tipo: "CE INF-PRI", direccion: "OBISPO FRUTOS, 12", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005466", nombre: "CIERVA PEÑAFIEL", tipo: "CE INF-PRI", direccion: "PZA. DE SANTO DOMINGO, 3", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005478", nombre: "FEDERICO DE ARCE MARTÍNEZ", tipo: "CE INF-PRI", direccion: "PZA.ABDERRAMAN II,S/N", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005481", nombre: "VISTABELLA", tipo: "CE INF-PRI", direccion: "CAPITAN BALACA 5 Y TTE PEREZ R", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005511", nombre: "MARÍA MAROTO", tipo: "CE INF-PRI", direccion: "PUERTA NUEVA, 16", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005521", nombre: "MARIANO AROCA", tipo: "CE INF-PRI", direccion: "SAUCE, 13", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005533", nombre: "NICOLÁS DE LAS PEÑAS", tipo: "CE INF-PRI", direccion: "NICOLAS DE LAS PEÑAS, S/N", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005545", nombre: "NTRA. SRA. DEL CARMEN", tipo: "CE INF-PRI", direccion: "PRINCESA, Nº 27", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005557", nombre: "NTRA. SRA. DE LA PAZ", tipo: "CE INF-PRI", direccion: "C/ PUENTE TOCINOS, 12", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005582", nombre: "SANTA MARÍA DE GRACIA", tipo: "CE INF-PRI", direccion: "PASEO RAMON GAYA, 2", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005594", nombre: "LUIS COSTA", tipo: "CE INF-PRI", direccion: "NAVEGANTE JUAN FERNANDEZ,10", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005600", nombre: "PEDRO PÉREZ ABADÍA", tipo: "CE INF-PRI", direccion: "C/ FCO. FLORES MUELAS, Nº42 - ESPINARDO", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30005612", nombre: "SALZILLO", tipo: "CPEIBas", direccion: "SAN FERMIN, 6 - ESPINARDO", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30006124", nombre: "SAN ANDRÉS", tipo: "CE INF-PRI", direccion: "C/ BOLOS, Nº15", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30006148", nombre: "BARRIOMAR 74", tipo: "CE INF-PRI", direccion: "CARRIL TORRE DE LOS MUÑOCES, 2", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30006215", nombre: "NARCISO YEPES", tipo: "CE INF-PRI", direccion: "AVDA. ANTONETE GALVEZ, S/N", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30006756", nombre: "NTRA. SRA. DE BELÉN", tipo: "CE INF-PRI", direccion: "C/ DOCTOR PASCUAL PARRILLA PARICIO, 3 (S", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30006771", nombre: "NTRA. SRA. DE ATOCHA", tipo: "CE INF-PRI", direccion: "AVDA. VIRGEN DE ATOCHA, 2 (SANTIAGO Y ZA", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30008595", nombre: "SAN PABLO", tipo: "CE INF-PRI", direccion: "PINTOR GRECO,S/N -PGNO.LA FAMA", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30008601", nombre: "SAN JUAN", tipo: "CE INF-PRI", direccion: "C/ JERONIMO YAÑEZ DE ALCALA S/N", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30008674", nombre: "SAN PÍO X", tipo: "CE INF-PRI", direccion: "C/ LA RIBERA, Nº 9", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30008868", nombre: "NTRA. SRA. DE ARRIXACA", tipo: "CE INF-PRI", direccion: "C/ ALONSO ESPEJO, S/N", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30008959", nombre: "SANTIAGO EL MAYOR", tipo: "CE INF-PRI", direccion: "C/ RENAMICIMIENTO, 1", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30009150", nombre: "FÉLIX RODRÍGUEZ DE LA FUENTE", tipo: "CE INF-PRI", direccion: "RUIZ HIDALGO, S/N", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30009174", nombre: "JOSÉ MORENO", tipo: "CE INF-PRI", direccion: "BARRIO DEL PROGRESO", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30009447", nombre: "ALEJANDRO VALVERDE BELMONTE", tipo: "CE INF-PRI", direccion: "ALBERTO SEVILLA, S/N", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30010693", nombre: "M. FERNÁNDEZ CABALLERO", tipo: "CE INF-PRI", direccion: "ANTONIO DE HOYOS, Nº 2 (Bº S. ANTONIO)", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30010701", nombre: "FRANCISCO GINER DE LOS RÍOS", tipo: "CE INF-PRI", direccion: "BRAVO MURILLO, S/N - SANTIAGO EL MAYOR", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30010899", nombre: "STMO.CRISTO DE LA MISERICORDIA", tipo: "CEE", direccion: "CALLE COLEGIO DE PROCURADORES DE MURCIA,", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30010954", nombre: "LOS ÁLAMOS", tipo: "CE INF-PRI", direccion: "CALLEJON DEL LEON (B.CARMEN)", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30011417", nombre: "PARA NIÑOS AUTISTAS LAS BOQUERAS", tipo: "CEE", direccion: "CAMINO VIEJO DE MONTEAGUDO,109", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30011511", nombre: "CIUDAD DE MURCIA", tipo: "CE INF-PRI", direccion: "PINTOR PEDRO FLORES, 30", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30011521", nombre: "MAESTRO JOSÉ CASTAÑO", tipo: "CE INF-PRI", direccion: "SENDA DE ENMEDIO (B.SAN ANTON)", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30012291", nombre: "LA FLOTA", tipo: "CE INF-PRI", direccion: "AVDA. DE LA MARINA ESPAÑOLA, Nº 6", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30013682", nombre: "LA ARBOLEDA", tipo: "CE INF-PRI", direccion: "C/ GUERREROS, Nº 6", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30018795", nombre: "REINO DE MURCIA", tipo: "CE INF-PRI", direccion: "C/. CISNE Nº 16 (BARRIO DEL RANERO)", cp: "30001", localidad: "MURCIA", municipio: "MURCIA", zona: "300019"},
    
    // NONDUERMAS
    {codigo: "30006321", nombre: "NTRA. SRA. DE CORTES", tipo: "CE INF-PRI", direccion: "ESCUELAS NUEVAS Nº 16", cp: "30155", localidad: "NONDUERMAS", municipio: "MURCIA", zona: "300019"},
    
    // ÑORA (LA)
    {codigo: "30006331", nombre: "NTRA. SRA. DEL PASO", tipo: "CE INF-PRI", direccion: "CTRA. DE LOS JERÓNIMOS, S/N", cp: "30163", localidad: "ÑORA (LA)", municipio: "MURCIA", zona: "300019"},
    
    // PALMAR (EL)
    {codigo: "30006355", nombre: "ESCUELAS NUEVAS", tipo: "CE INF-PRI", direccion: "C/. Mariano Estrada Lorca, 1", cp: "30120", localidad: "PALMAR (EL) O LUGAR DE DON JUAN", municipio: "MURCIA", zona: "300019"},
    {codigo: "30006367", nombre: "LOS ROSALES", tipo: "CE INF-PRI", direccion: "LOS PINOS S/N - BARRIO DE LOS", cp: "30120", localidad: "PALMAR (EL) O LUGAR DE DON JUAN", municipio: "MURCIA", zona: "300019"},
    {codigo: "30008145", nombre: "SANTA ROSA DE LIMA", tipo: "CE INF-PRI", direccion: "TOMILLO, S/N (B. ROSALES)", cp: "30120", localidad: "PALMAR (EL) O LUGAR DE DON JUAN", municipio: "MURCIA", zona: "300019"},
    {codigo: "30009162", nombre: "CIUDAD DE LA PAZ", tipo: "CE INF-PRI", direccion: "AVDA. DE LA PAZ, S/N", cp: "30120", localidad: "PALMAR (EL) O LUGAR DE DON JUAN", municipio: "MURCIA", zona: "300019"},
    {codigo: "30010711", nombre: "JOSÉ MARÍA PÁRRAGA", tipo: "CE INF-PRI", direccion: "C/ MAYOR, Nº 106", cp: "30120", localidad: "PALMAR (EL) O LUGAR DE DON JUAN", municipio: "MURCIA", zona: "300019"},
    {codigo: "30011454", nombre: "GLORIA FUERTES", tipo: "CE INF-PRI", direccion: "CIRCUNVALACION, S/N", cp: "30120", localidad: "PALMAR (EL) O LUGAR DE DON JUAN", municipio: "MURCIA", zona: "300019"},
    {codigo: "30019271", nombre: "PINTOR PEDRO CANO", tipo: "CE INF-PRI", direccion: "AV. PINTOR PEDRO CANO, Nº 26", cp: "30120", localidad: "PALMAR (EL) O LUGAR DE DON JUAN", municipio: "MURCIA", zona: "300019"},
    
    // PUEBLA DE SOTO
    {codigo: "30006422", nombre: "NTRA. SRA. DE LAS MERCEDES", tipo: "CE INF-PRI", direccion: "LOPEZ ALMAGRO, 4", cp: "30155", localidad: "PUEBLA DE SOTO", municipio: "MURCIA", zona: "300019"},
    
    // PUENTE TOCINOS
    {codigo: "30006434", nombre: "PINTOR PEDRO FLORES", tipo: "CE INF-PRI", direccion: "C/ PINTOR PEDRO FLORES, Nº 7", cp: "30006", localidad: "PUENTE TOCINOS", municipio: "MURCIA", zona: "300019"},
    {codigo: "30006446", nombre: "NTRA. SRA. DEL ROSARIO", tipo: "CE INF-PRI", direccion: "CARRIL DE TOVAR, Nº 33", cp: "30006", localidad: "PUENTE TOCINOS", municipio: "MURCIA", zona: "300019"},
    {codigo: "30009459", nombre: "RAMÓN GAYA", tipo: "CE INF-PRI", direccion: "CARRIL ERMITA VIEJA,24", cp: "30006", localidad: "PUENTE TOCINOS", municipio: "MURCIA", zona: "300019"},
    {codigo: "30012938", nombre: "INFANTA CRISTINA", tipo: "CE INF-PRI", direccion: "C/. POLICÍA ÁNGEL GARCÍA Nº 1", cp: "30006", localidad: "PUENTE TOCINOS", municipio: "MURCIA", zona: "300019"},
    
    // PUNTAL (EL)
    {codigo: "30006513", nombre: "EL PUNTAL", tipo: "CE INF-PRI", direccion: "CTRA. DE EL PUNTAL, S/N", cp: "30140", localidad: "PUNTAL (EL)", municipio: "MURCIA", zona: "300019"},
    
    // RAMOS (LOS)
    {codigo: "30006537", nombre: "FRANCISCO SALZILLO", tipo: "CE INF-PRI", direccion: "ESCUELAS, 1", cp: "30157", localidad: "RAMOS (LOS)", municipio: "MURCIA", zona: "300019"},
    
    // RAYA (LA)
    {codigo: "30006549", nombre: "NTRA. SRA. DE LA ENCARNACIÓN", tipo: "CE INF-PRI", direccion: "FLORIDABLANCA, 37", cp: "30155", localidad: "RAYA (LA)", municipio: "MURCIA", zona: "300019"},
    
    // RINCON DE BENISCORNIA
    {codigo: "30005296", nombre: "RINCÓN DE BENISCORNIA", tipo: "CE INF-PRI", direccion: "ESCUELAS, 5", cp: "30157", localidad: "RINCON DE BENISCORNIA", municipio: "MURCIA", zona: "300019"},
    
    // RINCON DE SECA
    {codigo: "30006550", nombre: "NTRA. SRA. DE LOS ÁNGELES", tipo: "CE INF-PRI", direccion: "C/ HERNÁNDEZ MUÑOZ, S/N", cp: "30590", localidad: "RINCON DE SECA", municipio: "MURCIA", zona: "300019"},
    
    // SAN GINES
    {codigo: "30006410", nombre: "ESCULTOR SALZILLO", tipo: "CE INF-PRI", direccion: "C/. LAS ESCUELAS S/N.", cp: "30169", localidad: "SAN GINES", municipio: "MURCIA", zona: "300019"},
    
    // SAN JOSE DE LA VEGA
    {codigo: "30004991", nombre: "FRANCISCO NOGUERA", tipo: "CE INF-PRI", direccion: "C/ ESCUELAS, S/N", cp: "30592", localidad: "SAN JOSE DE LA VEGA", municipio: "MURCIA", zona: "300019"},
    
    // SANGONERA LA SECA
    {codigo: "30006689", nombre: "PABLO GIL CASTILLO", tipo: "CE INF-PRI", direccion: "AVDA. DE LORCA, 27 - EL PUNTARRÓN", cp: "30833", localidad: "SANGONERA LA SECA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30006690", nombre: "SAN JOSÉ DE LA MONTAÑA", tipo: "CE INF-PRI", direccion: "CAMINO DE LA SILLA, 13 (SANGONERA LA SE", cp: "30833", localidad: "SANGONERA LA SECA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30010723", nombre: "VICENTE MEDINA", tipo: "CE INF-PRI", direccion: "MAESTRO ANTONIO MARTINEZ NAVARRO, Nº 2", cp: "30833", localidad: "SANGONERA LA SECA", municipio: "MURCIA", zona: "300019"},
    
    // SANGONERA LA VERDE
    {codigo: "30006707", nombre: "ANTONIO DELGADO DORREGO", tipo: "CE INF-PRI", direccion: "AVDA. NTRA.SRA.DE LOS ANGELES", cp: "30832", localidad: "SANGONERA LA VERDE O ERMITA NUEVA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30006719", nombre: "NICOLÁS RAYA", tipo: "CE INF-PRI", direccion: "EL PARQUE, 10", cp: "30832", localidad: "SANGONERA LA VERDE O ERMITA NUEVA", municipio: "MURCIA", zona: "300019"},
    
    // SANTA CRUZ
    {codigo: "30006732", nombre: "CRISTO DE LA EXPIRACIÓN", tipo: "CE INF-PRI", direccion: "ESCUELAS, S/N", cp: "30590", localidad: "SANTA CRUZ", municipio: "MURCIA", zona: "300019"},
    
    // SANTO ÁNGEL
    {codigo: "30004826", nombre: "SANTO ÁNGEL", tipo: "CE INF-PRI", direccion: "C/ SALZILLO, Nº 2", cp: "30151", localidad: "SANTO ÁNGEL", municipio: "MURCIA", zona: "300019"},
    
    // SANTOMERA
    {codigo: "30006811", nombre: "NTRA. SRA. DEL ROSARIO", tipo: "CE INF-PRI", direccion: "LOS PASOS, Nº 42", cp: "30140", localidad: "SANTOMERA", municipio: "SANTOMERA", zona: "300019"},
    {codigo: "30010413", nombre: "RICARDO CAMPILLO", tipo: "CE INF-PRI", direccion: "CARRETERA DE ABANILLA, Nº2", cp: "30140", localidad: "SANTOMERA", municipio: "SANTOMERA", zona: "300019"},
    {codigo: "30013335", nombre: "FUENSANTA CARAVACA HERNÁNDEZ", tipo: "CE INF-PRI", direccion: "C/ SOROLLA, Nº 2", cp: "30140", localidad: "SANTOMERA", municipio: "SANTOMERA", zona: "300019"},
    
    // SISCAR
    {codigo: "30006847", nombre: "MADRE ESPERANZA", tipo: "CE INF-PRI", direccion: "LA ERMITA, S/Nº", cp: "30140", localidad: "SISCAR", municipio: "SANTOMERA", zona: "300019"},
    
    // TORREAGÜERA
    {codigo: "30006860", nombre: "ÁNGEL ZAPATA", tipo: "CE INF-PRI", direccion: "ESCUELAS DEL B. DE SAN BLAS", cp: "30590", localidad: "TORREAGÜERA", municipio: "MURCIA", zona: "300019"},
    {codigo: "30009460", nombre: "CRISTO DEL VALLE", tipo: "CE INF-PRI", direccion: "C/ ESCUELAS S/N", cp: "30590", localidad: "TORREAGÜERA", municipio: "MURCIA", zona: "300019"},
    
    // ZARANDONA
    {codigo: "30006793", nombre: "SAN FÉLIX", tipo: "CE INF-PRI", direccion: "C/ ARCIPRESTE EMILIO GARCÍA NAVARRO, 28.", cp: "30100", localidad: "ZARANDONA", municipio: "MURCIA", zona: "300019"},
    
    // ZENETA
    {codigo: "30006884", nombre: "SAGRADO CORAZÓN", tipo: "CE INF-PRI", direccion: "VEREDA DE LA ERMITA", cp: "30590", localidad: "ZENETA", municipio: "MURCIA", zona: "300019"},
    
    // ==========================================
    // ZONA 300020 - ABANILLA Y FORTUNA
    // ==========================================
    
    // ABANILLA
    {codigo: "30000018", nombre: "SANTÍSIMA CRUZ", tipo: "CE INF-PRI", direccion: "AVDA. SALVADOR ALLENDE Nº 25", cp: "30640", localidad: "ABANILLA", municipio: "ABANILLA", zona: "300020"},
    {codigo: "30010309", nombre: "DIONISIO BUENO", tipo: "CE INF-PRI", direccion: "C/ ELBATALAX, S/N.", cp: "30640", localidad: "ABANILLA", municipio: "ABANILLA", zona: "300020"},
    
    // BARINAS
    {codigo: "30012367", nombre: "COMARCA ORIENTAL", tipo: "C.R.A", direccion: "VEREDA, 11", cp: "30640", localidad: "BARINAS", municipio: "ABANILLA", zona: "300020"},
    
    // FORTUNA
    {codigo: "30002799", nombre: "VICENTE ALEIXANDRE", tipo: "CE INF-PRI", direccion: "AVDA. DE JUAN CARLOS I, 1", cp: "30620", localidad: "FORTUNA", municipio: "FORTUNA", zona: "300020"},
    {codigo: "30011259", nombre: "SAN ANTÓN", tipo: "CE INF-PRI", direccion: "C/. PRÍNCIPE DE ASTURIAS Nº 1", cp: "30620", localidad: "FORTUNA", municipio: "FORTUNA", zona: "300020"},
    {codigo: "30019416", nombre: "MAESTRO SIXTO LÓPEZ NAVARRO", tipo: "CE INF-PRI", direccion: "PARAJE CASA MACHUCA S/N", cp: "30620", localidad: "FORTUNA", municipio: "FORTUNA", zona: "300020"},
    
    // ==========================================
    // ZONA 300032 - JUMILLA Y YECLA
    // ==========================================
    
    // JUMILLA
    {codigo: "30003068", nombre: "CAÑADA DEL TRIGO", tipo: "CE INF-PRI", direccion: "CAÑADA DEL TRIGO", cp: "30520", localidad: "CAÑADA DEL TRIGO", municipio: "JUMILLA", zona: "300032"},
    {codigo: "30003093", nombre: "MARIANO SUÁREZ", tipo: "CE INF-PRI", direccion: "PZA. DE LA GLORIETA, S/N", cp: "30520", localidad: "JUMILLA", municipio: "JUMILLA", zona: "300032"},
    {codigo: "30003101", nombre: "NTRA. SRA. DE LA ASUNCIÓN", tipo: "CE INF-PRI", direccion: "C/ SAN ANTON, S/N", cp: "30520", localidad: "JUMILLA", municipio: "JUMILLA", zona: "300032"},
    {codigo: "30003111", nombre: "SAN FRANCISCO", tipo: "CE INF-PRI", direccion: "ECHEGARAY, 33", cp: "30520", localidad: "JUMILLA", municipio: "JUMILLA", zona: "300032"},
    {codigo: "30003135", nombre: "MIGUEL HERNÁNDEZ", tipo: "CE INF-PRI", direccion: "GOYA, s/n", cp: "30520", localidad: "JUMILLA", municipio: "JUMILLA", zona: "300032"},
    {codigo: "30010656", nombre: "PRÍNCIPE FELIPE", tipo: "CE INF-PRI", direccion: "CALLE SAN AGUSTÍN, 9", cp: "30520", localidad: "JUMILLA", municipio: "JUMILLA", zona: "300032"},
    {codigo: "30011260", nombre: "CARMEN CONDE", tipo: "CE INF-PRI", direccion: "AVDA. REYES CATOLICOS, S/N", cp: "30520", localidad: "JUMILLA", municipio: "JUMILLA", zona: "300032"},
    
    // YECLA
    {codigo: "30007785", nombre: "MÉNDEZ NUÑEZ", tipo: "CE INF-PRI", direccion: "INFANTE JUAN MANUEL, 5", cp: "30510", localidad: "YECLA", municipio: "YECLA", zona: "300032"},
    {codigo: "30007797", nombre: "LA PAZ", tipo: "CE INF-PRI", direccion: "PIO BAROJA, 2", cp: "30510", localidad: "YECLA", municipio: "YECLA", zona: "300032"},
    {codigo: "30007803", nombre: "ALFONSO X EL SABIO", tipo: "CE INF-PRI", direccion: "AVDA. DE LA FERIA Nº 19", cp: "30510", localidad: "YECLA", municipio: "YECLA", zona: "300032"},
    {codigo: "30008042", nombre: "GINER DE LOS RÍOS", tipo: "CE INF-PRI", direccion: "ABAD JOSE SOLA, S/N", cp: "30510", localidad: "YECLA", municipio: "YECLA", zona: "300032"},
    {codigo: "30009484", nombre: "LAS HERRATILLAS", tipo: "CE INF-PRI", direccion: "HERNAN CORTES, nº 35", cp: "30510", localidad: "YECLA", municipio: "YECLA", zona: "300032"},
    {codigo: "30010759", nombre: "SAN JOSÉ DE CALASANZ (N.7)", tipo: "CE INF-PRI", direccion: "C/ PERALES, S/N", cp: "30510", localidad: "YECLA", municipio: "YECLA", zona: "300032"},
    {codigo: "30010760", nombre: "NUM. 8 - MIGUEL ORTUÑO PALAO", tipo: "CE INF-PRI", direccion: "SALZILLO, S/N", cp: "30510", localidad: "YECLA", municipio: "YECLA", zona: "300032"},
    {codigo: "30010772", nombre: "EL ALBA", tipo: "CE INF-PRI", direccion: "JÁTIVA, 6", cp: "30510", localidad: "YECLA", municipio: "YECLA", zona: "300032"},
    {codigo: "30011673", nombre: "LA PEDRERA", tipo: "CE INF-PRI", direccion: "TETUAN,S/N (PARAJE LA PEDRERA)", cp: "30510", localidad: "YECLA", municipio: "YECLA", zona: "300032"},
    
    // ==========================================
    // ZONA 300044 - MOLINA DE SEGURA
    // ==========================================
    
    // ALGUAZAS
    {codigo: "30000535", nombre: "MONTE ANAOR", tipo: "CE INF-PRI", direccion: "ESCUELAS, S/N", cp: "30560", localidad: "ALGUAZAS", municipio: "ALGUAZAS", zona: "300044"},
    {codigo: "30000547", nombre: "NTRA. SRA. DEL CARMEN", tipo: "CE INF-PRI", direccion: "C/ COLEGIO NTRA. SRA. DEL CARMEN S/N", cp: "30560", localidad: "ALGUAZAS", municipio: "ALGUAZAS", zona: "300044"},
    
    // CAMPOS DEL RÍO
    {codigo: "30001047", nombre: "SAN JUAN BAUTISTA", tipo: "CE INF-PRI", direccion: "AV.DEL REFERENDUM O ERAS,S/N", cp: "30191", localidad: "CAMPOS DEL RIO", municipio: "CAMPOS DEL RÍO", zona: "300044"},
    
    // CEUTÍ
    {codigo: "30002647", nombre: "JUAN AYALA HURTADO", tipo: "CE INF-PRI", direccion: "SENDA DE LAS VIÑAS, S/N", cp: "30562", localidad: "CEUTI", municipio: "CEUTÍ", zona: "300044"},
    {codigo: "30009411", nombre: "DIEGO MARTÍNEZ RICO", tipo: "CE INF-PRI", direccion: "C/ GRANADA, Nº1", cp: "30562", localidad: "CEUTI", municipio: "CEUTÍ", zona: "300044"},
    {codigo: "30010346", nombre: "SAN ROQUE", tipo: "CE INF-PRI", direccion: "CTRA. DE MULA, KM. 1", cp: "30562", localidad: "CEUTI", municipio: "CEUTÍ", zona: "300044"},
    {codigo: "30019106", nombre: "SUCESO ALEDO", tipo: "CE INF-PRI", direccion: "PLAN PARC. LA TEJERA,C/E.JOSÉ PLANES", cp: "30562", localidad: "CEUTI", municipio: "CEUTÍ", zona: "300044"},
    
    // FENAZAR
    {codigo: "30004206", nombre: "CAMPO DE MOLINA DE SEGURA", tipo: "CE INF-PRI", direccion: "C/. NUESTRA SEÑORA DE LOS ÁNGELES Nº 79", cp: "30503", localidad: "FENAZAR", municipio: "MOLINA DE SEGURA", zona: "300044"},
    
    // LLANO (EL)
    {codigo: "30004218", nombre: "LA PURÍSIMA", tipo: "CE INF-PRI", direccion: "PGNO. LA SERRETA, S/N", cp: "30507", localidad: "LLANO (EL)", municipio: "MOLINA DE SEGURA", zona: "300044"},
    
    // LORQUÍ
    {codigo: "30004048", nombre: "MAESTRO JESÚS GARCÍA", tipo: "CE INF-PRI", direccion: "CABEZO DE LAS POLACAS, S/N", cp: "30564", localidad: "LORQUI", municipio: "LORQUÍ", zona: "300044"},
    {codigo: "30010371", nombre: "MAESTRA DOLORES ESCÁMEZ", tipo: "CE INF-PRI", direccion: "LOS CLAVELES, 1", cp: "30564", localidad: "LORQUI", municipio: "LORQUÍ", zona: "300044"},
    
    // MOLINA DE SEGURA
    {codigo: "30004221", nombre: "CERVANTES", tipo: "CE INF-PRI", direccion: "MEDIODIA, S/N", cp: "30500", localidad: "MOLINA DE SEGURA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    {codigo: "30004255", nombre: "NTRA. SRA. DE LA CONSOLACIÓN", tipo: "CE INF-PRI", direccion: "PROFESOR JOAQUÍN ABELLÁN, S/N", cp: "30500", localidad: "MOLINA DE SEGURA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    {codigo: "30004267", nombre: "NTRA. SRA. DE FÁTIMA", tipo: "CE INF-PRI", direccion: "AV. GARCIA LORCA, 70", cp: "30500", localidad: "MOLINA DE SEGURA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    {codigo: "30004279", nombre: "SAN MIGUEL", tipo: "CE INF-PRI", direccion: "CARTAGENA, 57 aptdo. 154", cp: "30500", localidad: "MOLINA DE SEGURA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    {codigo: "30004280", nombre: "EL ROMERAL", tipo: "CE INF-PRI", direccion: "C/ TIERNO GALVÁN Nº 4", cp: "30500", localidad: "MOLINA DE SEGURA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    {codigo: "30004292", nombre: "GREGORIO MIÑANO", tipo: "CE INF-PRI", direccion: "SALVADOR, 25", cp: "30500", localidad: "MOLINA DE SEGURA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    {codigo: "30004309", nombre: "SAGRADO CORAZÓN", tipo: "CE INF-PRI", direccion: "C/ CARTAGENA, 1", cp: "30500", localidad: "MOLINA DE SEGURA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    {codigo: "30010383", nombre: "SAN ANTONIO", tipo: "CE INF-PRI", direccion: "LA FE, 2", cp: "30500", localidad: "MOLINA DE SEGURA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    {codigo: "30011016", nombre: "TIERNO GALVÁN", tipo: "CE INF-PRI", direccion: "PROLONG. BALEARES, S/N", cp: "30500", localidad: "MOLINA DE SEGURA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    {codigo: "30011508", nombre: "EL SIFÓN", tipo: "CE INF-PRI", direccion: "C/ GABRIEL CÁRCELES Nº 15", cp: "30500", localidad: "MOLINA DE SEGURA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    {codigo: "30018606", nombre: "MAESTRO FRANCISCO MARTÍNEZ BERNAL", tipo: "CE INF-PRI", direccion: "C/ JOSÉ ANTONIO VIDAL SERRANO, 50", cp: "30500", localidad: "MOLINA DE SEGURA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    {codigo: "30018886", nombre: "Nº 1", tipo: "E.E.I.", direccion: "PASEO DE ROSALES, S/Nº", cp: "30500", localidad: "MOLINA DE SEGURA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    
    // RIBERA DE MOLINA
    {codigo: "30004346", nombre: "VEGA DEL SEGURA", tipo: "CE INF-PRI", direccion: "OLMO, S/N", cp: "30504", localidad: "RIBERA DE MOLINA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    
    // TORRAOS (LOS)
    {codigo: "30009228", nombre: "LOS TORRAOS", tipo: "CE INF-PRI", direccion: "SENDA PASCUAL, S/N", cp: "30562", localidad: "TORRAOS (LOS)", municipio: "CEUTÍ", zona: "300044"},
    
    // TORREALTA
    {codigo: "30004401", nombre: "NUESTRA SEÑORA DE LOS", tipo: "CE INF-PRI", direccion: "GARCIA LORCA, S/N", cp: "30506", localidad: "TORREALTA", municipio: "MOLINA DE SEGURA", zona: "300044"},
    
    // TORRES DE COTILLAS (LAS)
    {codigo: "30007402", nombre: "CERVANTES", tipo: "CE INF-PRI", direccion: "C/. TIRSO DE MOLINA Nº 1-A", cp: "30565", localidad: "TORRES DE COTILLAS (LAS)", municipio: "TORRES DE COTILLAS (LAS)", zona: "300044"},
    {codigo: "30008893", nombre: "SAN JOSÉ", tipo: "CE INF-PRI", direccion: "BOLIVIA, S/N", cp: "30565", localidad: "TORRES DE COTILLAS (LAS)", municipio: "TORRES DE COTILLAS (LAS)", zona: "300044"},
    {codigo: "30009216", nombre: "VALENTÍN BUENDÍA", tipo: "CE INF-PRI", direccion: "MAYOR, S/N", cp: "30565", localidad: "TORRES DE COTILLAS (LAS)", municipio: "TORRES DE COTILLAS (LAS)", zona: "300044"},
    {codigo: "30009915", nombre: "VISTA ALEGRE", tipo: "CE INF-PRI", direccion: "LAS PARCELAS", cp: "30565", localidad: "TORRES DE COTILLAS (LAS)", municipio: "TORRES DE COTILLAS (LAS)", zona: "300044"},
    {codigo: "30011041", nombre: "MAESTRO JESÚS FERRER", tipo: "CE INF-PRI", direccion: "JACINTO BENAVENTE, 28", cp: "30565", localidad: "TORRES DE COTILLAS (LAS)", municipio: "TORRES DE COTILLAS (LAS)", zona: "300044"},
    {codigo: "30018825", nombre: "MAESTRO JOAQUÍN CANTERO", tipo: "CE INF-PRI", direccion: "PLAN PARCIAL LOS PULPITES II, C/ VALENCI", cp: "30565", localidad: "TORRES DE COTILLAS (LAS)", municipio: "TORRES DE COTILLAS (LAS)", zona: "300044"},
    
    // ==========================================
    // ZONA 300056 - ABARÁN, CIEZA, BLANCA
    // ==========================================
    
    // ABARÁN
    {codigo: "30000146", nombre: "SAN PABLO", tipo: "CE INF-PRI", direccion: "MAESTRO JESUS GARCIA, S/N", cp: "30550", localidad: "ABARAN", municipio: "ABARÁN", zona: "300056"},
    {codigo: "30000161", nombre: "JUAN XXIII", tipo: "CE INF-PRI", direccion: "JUAN XXIII, 1", cp: "30550", localidad: "ABARAN", municipio: "ABARÁN", zona: "300056"},
    {codigo: "30010619", nombre: "VIRGEN DEL ORO", tipo: "CE INF-PRI", direccion: "AVDA. DE LA CONSTITUCION,80", cp: "30550", localidad: "ABARAN", municipio: "ABARÁN", zona: "300056"},
    
    // BARRANCO MOLAX
    {codigo: "30012951", nombre: "SAN JOSÉ ARTESANO", tipo: "CE INF-PRI", direccion: "C/ ISIDORO GÓMEZ, S/N", cp: "30550", localidad: "BARRANCO MOLAX", municipio: "ABARÁN", zona: "300056"},
    
    // BLANCA
    {codigo: "30000936", nombre: "ANTONIO MOLINA GONZÁLEZ", tipo: "CE INF-PRI", direccion: "PLAZA VÍCTIMAS DEL TERRORISMO Nº 1", cp: "30540", localidad: "BLANCA", municipio: "BLANCA", zona: "300056"},
    
    // CIEZA
    {codigo: "30002659", nombre: "CRISTO DEL CONSUELO", tipo: "CE INF-PRI", direccion: "PEREZ CERVERA, 80", cp: "30530", localidad: "CIEZA", municipio: "CIEZA", zona: "300056"},
    {codigo: "30002660", nombre: "D.ANTONIO BUITRAGO GÓMEZ", tipo: "CE INF-PRI", direccion: "AVDA. DE ABARAN, 14", cp: "30530", localidad: "CIEZA", municipio: "CIEZA", zona: "300056"},
    {codigo: "30002672", nombre: "GERÓNIMO BELDA", tipo: "CE INF-PRI", direccion: "PARQUE MUNICIPAL", cp: "30530", localidad: "CIEZA", municipio: "CIEZA", zona: "300056"},
    {codigo: "30002684", nombre: "SAN BARTOLOMÉ", tipo: "CE INF-PRI", direccion: "ERA DEL HOSPITAL, S/N", cp: "30530", localidad: "CIEZA", municipio: "CIEZA", zona: "300056"},
    {codigo: "30002751", nombre: "PEDRO RODRÍGUEZ", tipo: "CE INF-PRI", direccion: "CAMINO DE ALICANTE, S/N", cp: "30530", localidad: "CIEZA", municipio: "CIEZA", zona: "300056"},
    {codigo: "30007906", nombre: "DON JOSÉ MARÍN", tipo: "CE INF-PRI", direccion: "FATEGO, S/N", cp: "30530", localidad: "CIEZA", municipio: "CIEZA", zona: "300056"},
    {codigo: "30010061", nombre: "SAN JOSÉ OBRERO", tipo: "CE INF-PRI", direccion: "PASEO DE RONDA, S/N", cp: "30530", localidad: "CIEZA", municipio: "CIEZA", zona: "300056"},
    
    // ESTACION FERREA
    {codigo: "30013001", nombre: "VIRGEN DEL PILAR", tipo: "CE INF-PRI", direccion: "Calle Director D. Pascual López Lucas", cp: "30540", localidad: "ESTACION FERREA", municipio: "BLANCA", zona: "300056"},
    
    // HOYA DEL CAMPO
    {codigo: "30012975", nombre: "SANTIAGO APÓSTOL", tipo: "CE INF-PRI", direccion: "C/ SAN ISIDRO, 27", cp: "30550", localidad: "HOYA DEL CAMPO", municipio: "ABARÁN", zona: "300056"},
    
    // ==========================================
    // ZONA 300068 - ARCHENA COMARCA
    // ==========================================
    
    // ARCHENA
    {codigo: "30000663", nombre: "NTRA. SRA. DE LA FUENSANTA", tipo: "CE INF-PRI", direccion: "C/BENITO PEREZ GALDOS, S/N", cp: "30600", localidad: "ARCHENA", municipio: "ARCHENA", zona: "300068"},
    {codigo: "30000687", nombre: "RÍO SEGURA", tipo: "CE INF-PRI", direccion: "C/ RÍO JARAMA, Nº2", cp: "30600", localidad: "ARCHENA", municipio: "ARCHENA", zona: "300068"},
    {codigo: "30000699", nombre: "MIGUEL MEDINA", tipo: "CE INF-PRI", direccion: "Avda. Daniel Ayala, s/n.", cp: "30600", localidad: "ARCHENA", municipio: "ARCHENA", zona: "300068"},
    {codigo: "30000705", nombre: "JOSÉ ALCOLEA LACAL", tipo: "CE INF-PRI", direccion: "LOS VALIENTES, S/N", cp: "30600", localidad: "ARCHENA", municipio: "ARCHENA", zona: "300068"},
    {codigo: "30008716", nombre: "MICAELA SANZ VERDE", tipo: "CE INF-PRI", direccion: "CALLE LORCA S/N", cp: "30600", localidad: "ARCHENA", municipio: "ARCHENA", zona: "300068"},
    {codigo: "30010838", nombre: "EMILIO CANDEL", tipo: "CE INF-PRI", direccion: "C/ NUESTRO PADRE JESUS NAZARENO, S/N", cp: "30600", localidad: "ARCHENA", municipio: "ARCHENA", zona: "300068"},
    
    // OJÓS
    {codigo: "30019143", nombre: "SAN AGUSTÍN", tipo: "CE INF-PRI", direccion: "PASEO DE LOS PINOS", cp: "30611", localidad: "OJOS", municipio: "OJÓS", zona: "300068"},
    
    // RICOTE
    {codigo: "30006987", nombre: "JESÚS GARCÍA CANDEL", tipo: "CE INF-PRI", direccion: "AVDA. VALLE DE RICOTE, S/N", cp: "30610", localidad: "RICOTE", municipio: "RICOTE", zona: "300068"},
    
    // ULEA
    {codigo: "30019155", nombre: "VILLA DE ULEA", tipo: "CE INF-PRI", direccion: "CARRETERA DEL MOLINO, 3", cp: "30612", localidad: "ULEA", municipio: "ULEA", zona: "300068"},
    
    // VILLANUEVA DEL RÍO SEGURA
    {codigo: "30019167", nombre: "NUESTRA SEÑORA DE LA ASUNCIÓN", tipo: "CE INF-PRI", direccion: "CAMINO ANCHO, S/Nº", cp: "30613", localidad: "VILLANUEVA DEL RIO SEGURA", municipio: "VILLANUEVA DEL RÍO SEGURA", zona: "300068"},
    
    // ==========================================
    // ZONA 300070 - CARAVACA, CEHEGÍN, BULLAS
    // ==========================================
    
    // ALMUDEMA (LA) - Caravaca
    {codigo: "30001072", nombre: "VALLE DEL QUÍPAR", tipo: "C.R.A", direccion: "LA ALMUDEMA", cp: "30412", localidad: "ALMUDEMA (LA)", municipio: "CARAVACA DE LA CRUZ", zona: "300070"},
    
    // ARCHIVEL
    {codigo: "30012082", nombre: "SIERRA DE MOJANTES", tipo: "C.R.A", direccion: "C/ MAESTRO JUAN LÓPEZ SORIANO, Nº4", cp: "30412", localidad: "ARCHIVEL", municipio: "CARAVACA DE LA CRUZ", zona: "300070"},
    
    // BARRANDA
    {codigo: "30001138", nombre: "VIRGEN DE LA CANDELARIA", tipo: "CE INF-PRI", direccion: "BARRANDA", cp: "30412", localidad: "BARRANDA", municipio: "CARAVACA DE LA CRUZ", zona: "300070"},
    
    // BENIZAR - Moratalla
    {codigo: "30019180", nombre: "LA TERCIA-BENIZAR", tipo: "C.R.A", direccion: "AVDA. DE LA CULTURA S/N", cp: "30446", localidad: "BENIZAR", municipio: "MORATALLA", zona: "300070"},
    
    // BULLAS
    {codigo: "30000961", nombre: "ARTERO", tipo: "CE INF-PRI", direccion: "LUIS DE LOS REYES, S/N", cp: "30180", localidad: "BULLAS", municipio: "BULLAS", zona: "300070"},
    {codigo: "30000973", nombre: "OBISPOS GARCÍA RODENAS", tipo: "CE INF-PRI", direccion: "PASEO DE LA MURTA, Nº26", cp: "30180", localidad: "BULLAS", municipio: "BULLAS", zona: "300070"},
    {codigo: "30012100", nombre: "EL CASTELLAR", tipo: "E.E.I.", direccion: "FELIX RODRIGUEZ DE LA FUENTE", cp: "30180", localidad: "BULLAS", municipio: "BULLAS", zona: "300070"},
    
    // CALASPARRA
    {codigo: "30001001", nombre: "LOS MOLINOS", tipo: "CE INF-PRI", direccion: "LOS MOLINOS", cp: "30420", localidad: "CALASPARRA", municipio: "CALASPARRA", zona: "300070"},
    {codigo: "30001011", nombre: "NTRA. SRA. DE LA ESPERANZA", tipo: "CE INF-PRI", direccion: "C/ SAN ABDÓN, Nº 17", cp: "30420", localidad: "CALASPARRA", municipio: "CALASPARRA", zona: "300070"},
    {codigo: "30009393", nombre: "LAS PEDRERAS", tipo: "CE INF-PRI", direccion: "C/ CULTURA, Nº1 (LAS PEDRERAS)", cp: "30420", localidad: "CALASPARRA", municipio: "CALASPARRA", zona: "300070"},
    
    // CAÑADA DE LA CRUZ - Moratalla
    {codigo: "30004450", nombre: "COLEGIO PÚBLICO DE CAÑADA DE LA CRUZ", tipo: "CE INF-PRI", direccion: "ESCUELAS,S/N", cp: "30449", localidad: "CAÑADA DE LA CRUZ", municipio: "MORATALLA", zona: "300070"},
    
    // CARAVACA DE LA CRUZ
    {codigo: "30001163", nombre: "SAN FRANCISCO", tipo: "CE INF-PRI", direccion: "BARRIO DE SAN FRANCISCO", cp: "30400", localidad: "CARAVACA DE LA CRUZ", municipio: "CARAVACA DE LA CRUZ", zona: "300070"},
    {codigo: "30001175", nombre: "LA SANTA CRUZ", tipo: "CE INF-PRI", direccion: "MAGISTERIO, 2 . Aptdo. correos nº 74", cp: "30400", localidad: "CARAVACA DE LA CRUZ", municipio: "CARAVACA DE LA CRUZ", zona: "300070"},
    {codigo: "30001278", nombre: "CERVANTES", tipo: "CE INF-PRI", direccion: "AVDA. ANDENES, 11", cp: "30400", localidad: "CARAVACA DE LA CRUZ", municipio: "CARAVACA DE LA CRUZ", zona: "300070"},
    {codigo: "30001281", nombre: "EL SALVADOR", tipo: "CE INF-PRI", direccion: "MANUELA ESPINOSA, S/N", cp: "30400", localidad: "CARAVACA DE LA CRUZ", municipio: "CARAVACA DE LA CRUZ", zona: "300070"},
    {codigo: "30009368", nombre: "ASCRUZ", tipo: "CEE", direccion: "CAMINO MAYRENA (EL COPO)", cp: "30400", localidad: "CARAVACA DE LA CRUZ", municipio: "CARAVACA DE LA CRUZ", zona: "300070"},
    {codigo: "30011491", nombre: "BASILIO SÁEZ", tipo: "CE INF-PRI", direccion: "JESUS FERNANDEZ, S/N - APTDO.CORREOS 190", cp: "30400", localidad: "CARAVACA DE LA CRUZ", municipio: "CARAVACA DE LA CRUZ", zona: "300070"},
    
    // CEHEGÍN
    {codigo: "30002520", nombre: "PÉREZ VILLANUEVA", tipo: "CE INF-PRI", direccion: "POLÍGONO ALMARJAL, S/N", cp: "30430", localidad: "CEHEGIN", municipio: "CEHEGÍN", zona: "300070"},
    {codigo: "30002532", nombre: "VIRGEN DE LAS MARAVILLAS", tipo: "CE INF-PRI", direccion: "BEGASTRI, 3", cp: "30430", localidad: "CEHEGIN", municipio: "CEHEGÍN", zona: "300070"},
    {codigo: "30002556", nombre: "CONDE CAMPILLOS", tipo: "CE INF-PRI", direccion: "GRAN VIA, S/N", cp: "30430", localidad: "CEHEGIN", municipio: "CEHEGÍN", zona: "300070"},
    {codigo: "30009231", nombre: "CIUDAD DE BEGASTRI", tipo: "CE INF-PRI", direccion: "SAN AGUSTIN, 2 (B. MARAVILLAS)", cp: "30430", localidad: "CEHEGIN", municipio: "CEHEGÍN", zona: "300070"},
    
    // COPA (LA) - Bullas
    {codigo: "30000997", nombre: "ANTONIO MACHADO", tipo: "CE INF-PRI", direccion: "RIO QUIPAR, S/N", cp: "30180", localidad: "COPA (LA)", municipio: "BULLAS", zona: "300070"},
    
    // MORATALLA
    {codigo: "30004498", nombre: "GERMÁN TERUEL ESCOBAR", tipo: "CE INF-PRI", direccion: "HUMANISTA ALONSO SANCHEZ, 1", cp: "30440", localidad: "MORATALLA", municipio: "MORATALLA", zona: "300070"},
    
    // SAN BARTOLOMÉ - Moratalla
    {codigo: "30019179", nombre: "EL SABINAR", tipo: "C.R.A", direccion: "AVDA. POETA SÁNCHEZ DEL CASTILLO, 1.", cp: "30447", localidad: "SAN BARTOLOMÉ", municipio: "MORATALLA", zona: "300070"},
    
    // VALENTIN - Cehegín
    {codigo: "30012094", nombre: "RÍO ARGOS", tipo: "C.R.A", direccion: "EL SOL,6", cp: "30430", localidad: "VALENTIN", municipio: "CEHEGÍN", zona: "300070"},
    
    // ==========================================
    // ZONA 300081 - MULA
    // ==========================================
    
    // ALBUDEITE
    {codigo: "30000365", nombre: "NTRA. SRA. DE LOS REMEDIOS", tipo: "CE INF-PRI", direccion: "CALVO SOTELO, 2", cp: "30190", localidad: "ALBUDEITE", municipio: "ALBUDEITE", zona: "300081"},
    
    // CASAS NUEVAS - Mula
    {codigo: "30004577", nombre: "SIERRA ESPUÑA", tipo: "CE INF-PRI", direccion: "CASAS NUEVAS", cp: "30170", localidad: "CASAS NUEVAS", municipio: "MULA", zona: "300081"},
    
    // FUENTE LIBRILLA - Mula
    {codigo: "30004589", nombre: "NTRA. SRA. DEL ROSARIO", tipo: "CE INF-PRI", direccion: "MAXIMINA LADRON DE GUEVARA,S/N", cp: "30170", localidad: "FUENTE LIBRILLA", municipio: "MULA", zona: "300081"},
    
    // MULA
    {codigo: "30004607", nombre: "D. FLORENTINO BAYONA", tipo: "CE INF-PRI", direccion: "GENERAL VALCARCEL, 21", cp: "30170", localidad: "MULA", municipio: "MULA", zona: "300081"},
    {codigo: "30008728", nombre: "ANITA ARNAO", tipo: "CE INF-PRI", direccion: "GRAN VÍA, S/N", cp: "30170", localidad: "MULA", municipio: "MULA", zona: "300081"},
    
    // PLIEGO
    {codigo: "30006914", nombre: "PASCUAL MARTÍNEZ ABELLÁN", tipo: "CE INF-PRI", direccion: "AVDA. DE MULA, S/N", cp: "30176", localidad: "PLIEGO", municipio: "PLIEGO", zona: "300081"},
    
    // PUEBLA DE MULA (LA)
    {codigo: "30004701", nombre: "ORTEGA Y RUBIO", tipo: "CE INF-PRI", direccion: "ESCUELAS, 5", cp: "30170", localidad: "PUEBLA DE MULA (LA)", municipio: "MULA", zona: "300081"},
    
    // YECHAR
    {codigo: "30004711", nombre: "LA PURÍSIMA", tipo: "CE INF-PRI", direccion: "CORREOS", cp: "30170", localidad: "YECHAR", municipio: "MULA", zona: "300081"},
    
    // ==========================================
    // ZONA 300093 - LORCA Y PUERTO LUMBRERAS
    // ==========================================
    
    // ALMENDRICOS
    {codigo: "30003494", nombre: "DE ALMENDRICOS", tipo: "CE INF-PRI", direccion: "C/ TRASVASE,Nº 29", cp: "30813", localidad: "ALMENDRICOS", municipio: "LORCA", zona: "300093"},
    
    // CABILDO (EL) Y LA CAMPANA
    {codigo: "30003810", nombre: "LA CAMPANA", tipo: "CE INF-PRI", direccion: "LA CAMPANA, S/N", cp: "30816", localidad: "CABILDO (EL) Y LA CAMPANA", municipio: "LORCA", zona: "300093"},
    
    // CAMPILLO
    {codigo: "30003561", nombre: "PASICO CAMPILLO", tipo: "CE INF-PRI", direccion: "CTRA. DE LA ALMENARA, S/N", cp: "30817", localidad: "CAMPILLO", municipio: "LORCA", zona: "300093"},
    
    // CEMENTERIO (EL) - LA TORRECILLA
    {codigo: "30008303", nombre: "TORRECILLA", tipo: "CE INF-PRI", direccion: "CTRA. NACIONAL 340, S/N (LA TORRECILLA)", cp: "30800", localidad: "CEMENTERIO (EL)", municipio: "LORCA", zona: "300093"},
    
    // ERMITA DE LOS CARRASCOS
    {codigo: "30003640", nombre: "LA ESCUCHA", tipo: "CE INF-PRI", direccion: "CTRA. DE PULPI, S/Nº", cp: "30816", localidad: "ERMITA DE LOS CARRASCOS", municipio: "LORCA", zona: "300093"},
    
    // ESPARRAGAL - Puerto Lumbreras
    {codigo: "30006938", nombre: "PURÍSIMA CONCEPCIÓN", tipo: "CE INF-PRI", direccion: "CRTA. DE LA ESTACION, S/N", cp: "30890", localidad: "ESPARRAGAL", municipio: "PUERTO LUMBRERAS", zona: "300093"},
    
    // HOYA (LA)
    {codigo: "30003676", nombre: "JUAN NAVARRO GARCÍA", tipo: "CE INF-PRI", direccion: "CAMINO ESCUELAS NUEVAS, Nº4- APDO.121", cp: "30817", localidad: "HOYA (LA)", municipio: "LORCA", zona: "300093"},
    
    // LORCA
    {codigo: "30003299", nombre: "ALFONSO X EL SABIO", tipo: "CE INF-PRI", direccion: "SAGRADA FAMILIA, S/N", cp: "30800", localidad: "LORCA", municipio: "LORCA", zona: "300093"},
    {codigo: "30003305", nombre: "JOSÉ ROBLES", tipo: "CE INF-PRI", direccion: "ALAMEDA DE LOS TRISTES, 18", cp: "30800", localidad: "LORCA", municipio: "LORCA", zona: "300093"},
    {codigo: "30003317", nombre: "SAGRADO CORAZÓN DE JESÚS", tipo: "CE INF-PRI", direccion: "AVDA. RAFAEL MAROTO, S/N", cp: "30800", localidad: "LORCA", municipio: "LORCA", zona: "300093"},
    {codigo: "30003329", nombre: "SAN FERNANDO", tipo: "CE INF-PRI", direccion: "AVDA. SANTA CLARA, S/N", cp: "30800", localidad: "LORCA", municipio: "LORCA", zona: "300093"},
    {codigo: "30003330", nombre: "SAN JOSÉ", tipo: "CE INF-PRI", direccion: "ALAMEDA DE LOS TRISTES, S/N", cp: "30800", localidad: "LORCA", municipio: "LORCA", zona: "300093"},
    {codigo: "30003342", nombre: "CASA DEL NIÑO", tipo: "CE INF-PRI", direccion: "MAYOR DE SANTA MARIA, S/N", cp: "30800", localidad: "LORCA", municipio: "LORCA", zona: "300093"},
    {codigo: "30008005", nombre: "JUAN GONZÁLEZ", tipo: "CE INF-PRI", direccion: "CAÑADA DE MORALES,12", cp: "30800", localidad: "LORCA", municipio: "LORCA", zona: "300093"},
    {codigo: "30008443", nombre: "PÉREZ DE HITA", tipo: "CE INF-PRI", direccion: "Don Diego Pallarés Cachá, s/nº", cp: "30800", localidad: "LORCA", municipio: "LORCA", zona: "300093"},
    {codigo: "30010097", nombre: "PILAR SOUBRIER", tipo: "CEE", direccion: "C/ DIEGO PALLARÉS CACHA, Nº4", cp: "30800", localidad: "LORCA", municipio: "LORCA", zona: "300093"},
    {codigo: "30010851", nombre: "SAN CRISTÓBAL", tipo: "CE INF-PRI", direccion: "C/ ABELLANEDA, S/N - Bº DE SAN CRISTOBAL", cp: "30800", localidad: "LORCA", municipio: "LORCA", zona: "300093"},
    {codigo: "30011818", nombre: "ANDRÉS GARCÍA SOLER", tipo: "CE INF-PRI", direccion: "CAÑADA GUEVARA (B.CALVARIO)", cp: "30800", localidad: "LORCA", municipio: "LORCA", zona: "300093"},
    {codigo: "30018783", nombre: "ANA CAICEDO RICHARD", tipo: "CE INF-PRI", direccion: "C/ FRANCISCO ESCOBAR BARBERÁN, 35", cp: "30800", localidad: "LORCA", municipio: "LORCA", zona: "300093"},
    
    // MARCHENA
    {codigo: "30003691", nombre: "NARCISO YEPES", tipo: "CE INF-PRI", direccion: "CAMINO DE CONDOMINA, S/N", cp: "30817", localidad: "MARCHENA", municipio: "LORCA", zona: "300093"},
    
    // PACA (LA)
    {codigo: "30003779", nombre: "PETRA GONZÁLEZ", tipo: "CE INF-PRI", direccion: "C/ Petra González, 2", cp: "30816", localidad: "PACA (LA)", municipio: "LORCA", zona: "300093"},
    
    // PUERTO LUMBRERAS
    {codigo: "30006941", nombre: "SAGRADO CORAZÓN", tipo: "CE INF-PRI", direccion: "PABLO CASAL, S/N", cp: "30890", localidad: "PUERTO LUMBRERAS", municipio: "PUERTO LUMBRERAS", zona: "300093"},
    {codigo: "30008017", nombre: "JUAN ANTONIO LÓPEZ ALCARAZ", tipo: "CE INF-PRI", direccion: "C/ SAN JAVIER, 2", cp: "30890", localidad: "PUERTO LUMBRERAS", municipio: "PUERTO LUMBRERAS", zona: "300093"},
    {codigo: "30009472", nombre: "ASUNCIÓN JORDÁN", tipo: "CE INF-PRI", direccion: "LAS HERRERIAS, S/N", cp: "30890", localidad: "PUERTO LUMBRERAS", municipio: "PUERTO LUMBRERAS", zona: "300093"},
    
    // PURIAS
    {codigo: "30003822", nombre: "ALFONSO GARCÍA LÓPEZ", tipo: "CE INF-PRI", direccion: "CRUCE DE PURIAS", cp: "30816", localidad: "PURIAS", municipio: "LORCA", zona: "300093"},
    
    // TORRE (LA) Y EL CHARCO - CAZALLA
    {codigo: "30003962", nombre: "VIRGEN DE LAS HUERTAS", tipo: "CE INF-PRI", direccion: "VEREDA ALTA - CAZALLA", cp: "30816", localidad: "TORRE (LA) Y EL CHARCO", municipio: "LORCA", zona: "300093"},
    
    // VILLAESPESA
    {codigo: "30003950", nombre: "VILLAESPESA TERCIA", tipo: "CE INF-PRI", direccion: "TERCIA", cp: "30817", localidad: "VILLAESPESA", municipio: "LORCA", zona: "300093"},
    
    // ZARCILLA DE RAMOS
    {codigo: "30012458", nombre: "ZARCILLA DE RAMOS", tipo: "C.R.A", direccion: "CTRA. DE LORCA, S/N", cp: "30817", localidad: "ZARCILLA DE RAMOS", municipio: "LORCA", zona: "300093"},
    
    // ==========================================
    // ZONA 300100 - TOTANA, ALHAMA DE MURCIA
    // ==========================================
    
    // ALEDO
    {codigo: "30000523", nombre: "SAN CRISTÓBAL", tipo: "CE INF-PRI", direccion: "CABEZO DE SAN CRISTOBAL, S/N", cp: "30859", localidad: "ALEDO", municipio: "ALEDO", zona: "300100"},
    
    // ALHAMA DE MURCIA
    {codigo: "30000584", nombre: "SIERRA ESPUÑA", tipo: "CE INF-PRI", direccion: "AVDA. BASTERRECHE, Nº 16 - APDO.C. 45", cp: "30840", localidad: "ALHAMA DE MURCIA", municipio: "ALHAMA DE MURCIA", zona: "300100"},
    {codigo: "30000596", nombre: "PRÍNCIPE DE ESPAÑA", tipo: "CE INF-PRI", direccion: "ZURBARAN, 2", cp: "30840", localidad: "ALHAMA DE MURCIA", municipio: "ALHAMA DE MURCIA", zona: "300100"},
    {codigo: "30008431", nombre: "NTRA. SRA. DEL ROSARIO", tipo: "CE INF-PRI", direccion: "SIMON GARCIA, 2", cp: "30840", localidad: "ALHAMA DE MURCIA", municipio: "ALHAMA DE MURCIA", zona: "300100"},
    {codigo: "30010322", nombre: "GINÉS DÍAZ - SAN CRISTÓBAL", tipo: "CE INF-PRI", direccion: "COLLADO BERMEJO, S/N", cp: "30840", localidad: "ALHAMA DE MURCIA", municipio: "ALHAMA DE MURCIA", zona: "300100"},
    {codigo: "30011481", nombre: "ANTONIO MACHADO", tipo: "CE INF-PRI", direccion: "RAMBLA DE DON DIEGO, 45", cp: "30840", localidad: "ALHAMA DE MURCIA", municipio: "ALHAMA DE MURCIA", zona: "300100"},
    {codigo: "30018199", nombre: "RICARDO CODORNÍU", tipo: "CE INF-PRI", direccion: "Camino de Almendricos, Resid. El Ral", cp: "30840", localidad: "ALHAMA DE MURCIA", municipio: "ALHAMA DE MURCIA", zona: "300100"},
    
    // LEBOR ALTO - Totana
    {codigo: "30018175", nombre: "LÉBOR", tipo: "CE INF-PRI", direccion: "LEBOR ALTO, S/Nº", cp: "30850", localidad: "LEBOR ALTO", municipio: "TOTANA", zona: "300100"},
    
    // LIBRILLA
    {codigo: "30003287", nombre: "SAGRADO CORAZÓN", tipo: "CE INF-PRI", direccion: "MAESTRO ESPADA, S/N", cp: "30892", localidad: "LIBRILLA", municipio: "LIBRILLA", zona: "300100"},
    
    // PARETON - Totana
    {codigo: "30018151", nombre: "GUADALENTÍN", tipo: "CPEIBas", direccion: "C/ ESCUELAS, Nº 30", cp: "30850", localidad: "PARETON", municipio: "TOTANA", zona: "300100"},
    
    // TOTANA
    {codigo: "30007426", nombre: "LA CRUZ", tipo: "CE INF-PRI", direccion: "C/. DEL MAR, Nº 1", cp: "30850", localidad: "TOTANA", municipio: "TOTANA", zona: "300100"},
    {codigo: "30007438", nombre: "SANTA EULALIA", tipo: "CE INF-PRI", direccion: "C/TTE. PEREZ REDONDO, nº 3", cp: "30850", localidad: "TOTANA", municipio: "TOTANA", zona: "300100"},
    {codigo: "30007441", nombre: "SANTIAGO", tipo: "CE INF-PRI", direccion: "ENCOMIENDA, S/N", cp: "30850", localidad: "TOTANA", municipio: "TOTANA", zona: "300100"},
    {codigo: "30008704", nombre: "DEITANIA", tipo: "CE INF-PRI", direccion: "VASCO DE GAMA, 3", cp: "30850", localidad: "TOTANA", municipio: "TOTANA", zona: "300100"},
    {codigo: "30009927", nombre: "SAN JOSÉ", tipo: "CE INF-PRI", direccion: "FINAL OVIEDO, S/N", cp: "30850", localidad: "TOTANA", municipio: "TOTANA", zona: "300100"},
    {codigo: "30011053", nombre: "TIERNO GALVÁN", tipo: "CE INF-PRI", direccion: "SAN ANTONIO, S/N", cp: "30850", localidad: "TOTANA", municipio: "TOTANA", zona: "300100"},
    {codigo: "30018333", nombre: "LUIS PÉREZ RUEDA", tipo: "CE INF-PRI", direccion: "La Ñorica, Antigor s/n", cp: "30850", localidad: "TOTANA", municipio: "TOTANA", zona: "300100"},
    
    // VENTA DE LOS CARRASCOS - EL CAÑARICO
    {codigo: "30000641", nombre: "REINA SOFÍA", tipo: "CE INF-PRI", direccion: "C/. LOS CUCOS Nº 1 (EL CAÑARICO)", cp: "30840", localidad: "VENTA DE LOS CARRASCOS", municipio: "ALHAMA DE MURCIA", zona: "300100"},
    
    // VENTORRILLOS (LOS)
    {codigo: "30018163", nombre: "LA COSTERA", tipo: "CE INF-PRI", direccion: "LOS VENTORRILLOS", cp: "30840", localidad: "VENTORRILLOS (LOS)", municipio: "ALHAMA DE MURCIA", zona: "300100"},
    
    // ==========================================
    // ZONA 300111 - ÁGUILAS
    // ==========================================
    
    // ÁGUILAS
    {codigo: "30000213", nombre: "RAMÓN Y CAJAL", tipo: "CE INF-PRI", direccion: "APDO. DE CORREOS 72", cp: "30880", localidad: "AGUILAS", municipio: "ÁGUILAS", zona: "300111"},
    {codigo: "30000225", nombre: "NTRA. SRA. DE LOS DOLORES", tipo: "CE INF-PRI", direccion: "CERVANTES, 5", cp: "30880", localidad: "AGUILAS", municipio: "ÁGUILAS", zona: "300111"},
    {codigo: "30008406", nombre: "SAN JUAN DE LAS ÁGUILAS", tipo: "CE INF-PRI", direccion: "CAMINO DE SAN MIGUEL, S/N", cp: "30880", localidad: "AGUILAS", municipio: "ÁGUILAS", zona: "300111"},
    {codigo: "30009058", nombre: "JOAQUÍN TENDERO", tipo: "CE INF-PRI", direccion: "VIRGEN DEL CARMEN, 1", cp: "30880", localidad: "AGUILAS", municipio: "ÁGUILAS", zona: "300111"},
    {codigo: "30010929", nombre: "MEDITERRÁNEO", tipo: "CE INF-PRI", direccion: "REINA SOFIA, 1", cp: "30880", localidad: "AGUILAS", municipio: "ÁGUILAS", zona: "300111"},
    {codigo: "30010991", nombre: "EL RUBIAL", tipo: "CE INF-PRI", direccion: "ALAMEDA, 23", cp: "30880", localidad: "AGUILAS", municipio: "ÁGUILAS", zona: "300111"},
    {codigo: "30011031", nombre: "URCI", tipo: "CE INF-PRI", direccion: "MUÑOZ CALERO, 9", cp: "30880", localidad: "AGUILAS", municipio: "ÁGUILAS", zona: "300111"},
    {codigo: "30011983", nombre: "LAS LOMAS", tipo: "CE INF-PRI", direccion: "C/ GRANADOS, 11", cp: "30880", localidad: "AGUILAS", municipio: "ÁGUILAS", zona: "300111"},
    {codigo: "30018771", nombre: "CIUDAD DEL MAR", tipo: "CE INF-PRI", direccion: "C/. Alameda, nº 27", cp: "30880", localidad: "AGUILAS", municipio: "ÁGUILAS", zona: "300111"},
    
    // ==========================================
    // ZONA 300123 - MAZARRÓN, LORCA COSTA
    // ==========================================
    
    // IFRE-CAÑADA DE GALLEGO
    {codigo: "30008649", nombre: "SAN ANTONIO", tipo: "CE INF-PRI", direccion: "C/ JUAN DE JUMI, Nº5", cp: "30870", localidad: "IFRE-CAÑADA DE GALLEGO", municipio: "MAZARRÓN", zona: "300123"},
    
    // ISLA PLANA - Cartagena
    {codigo: "30002192", nombre: "PUIG CAMPILLO", tipo: "CE INF-PRI", direccion: "ISLA PLANA", cp: "30868", localidad: "ISLA PLANA", municipio: "CARTAGENA", zona: "300123"},
    
    // LEIVA
    {codigo: "30004061", nombre: "LEIVA", tipo: "CE INF-PRI", direccion: "LEIVA", cp: "30870", localidad: "LEIVA", municipio: "MAZARRÓN", zona: "300123"},
    
    // LIBRILLERAS (LAS) - Lorca
    {codigo: "30003895", nombre: "NTRA. SRA. DEL ROSARIO", tipo: "CE INF-PRI", direccion: "RAMONETE", cp: "30816", localidad: "LIBRILLERAS (LAS)", municipio: "LORCA", zona: "300123"},
    
    // MAZARRÓN
    {codigo: "30004097", nombre: "FRANCISCO CAPARRÓS", tipo: "CE INF-PRI", direccion: "CTRA. DE RINCONES, S/N", cp: "30870", localidad: "MAZARRÓN", municipio: "MAZARRÓN", zona: "300123"},
    {codigo: "30008741", nombre: "GINÉS GARCÍA MARTÍNEZ", tipo: "CE INF-PRI", direccion: "ANTONIO MACHADO, S/N - APDO.C.Nº6", cp: "30870", localidad: "MAZARRÓN", municipio: "MAZARRÓN", zona: "300123"},
    {codigo: "30010863", nombre: "LA ACEÑA", tipo: "CE INF-PRI", direccion: "HERMANOS ALVAREZ QUINTERO, 1 APTDO.C.56", cp: "30870", localidad: "MAZARRÓN", municipio: "MAZARRÓN", zona: "300123"},
    {codigo: "30012112", nombre: "LA CAÑADICA", tipo: "CE INF-PRI", direccion: "C/ LORCA, 33", cp: "30870", localidad: "MAZARRÓN", municipio: "MAZARRÓN", zona: "300123"},
    {codigo: "30018382", nombre: "INFANTA LEONOR", tipo: "CE INF-PRI", direccion: "C/ Prolongación la vía, s/n A.P- 352", cp: "30870", localidad: "MAZARRÓN", municipio: "MAZARRÓN", zona: "300123"},
    
    // MORATA
    {codigo: "30003706", nombre: "SAN JUAN", tipo: "CE INF-PRI", direccion: "MORATA", cp: "30816", localidad: "MORATA", municipio: "LORCA", zona: "300123"},
    
    // PUERTO DE MAZARRON
    {codigo: "30004139", nombre: "MANUELA ROMERO", tipo: "CE INF-PRI", direccion: "C/ MOLINETA, S/N", cp: "30860", localidad: "PUERTO DE MAZARRON", municipio: "MAZARRÓN", zona: "300123"},
    {codigo: "30011272", nombre: "BAHÍA", tipo: "CE INF-PRI", direccion: "ORDENACION BAHIA, S/N", cp: "30860", localidad: "PUERTO DE MAZARRON", municipio: "MAZARRÓN", zona: "300123"},
    {codigo: "30019246", nombre: "MIGUEL DELIBES", tipo: "CE INF-PRI", direccion: "C/. MANUEL GUTIERREZ MELLADO Nº 1", cp: "30860", localidad: "PUERTO DE MAZARRON", municipio: "MAZARRÓN", zona: "300123"},
    
    // ==========================================
    // ZONA 300135 - CARTAGENA Y CAMPO
    // ==========================================
    
    // ALBUJON
    {codigo: "30001849", nombre: "LUIS VIVES", tipo: "CE INF-PRI", direccion: "LA ERMITA, S/N", cp: "30593", localidad: "ALBUJON", municipio: "CARTAGENA", zona: "300135"},
    
    // ALGAR (EL)
    {codigo: "30001862", nombre: "SAN ISIDORO", tipo: "CE INF-PRI", direccion: "C/ Juan de Austria, 2", cp: "30366", localidad: "ALGAR (EL)", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30010632", nombre: "VIRGINIA PÉREZ", tipo: "CE INF-PRI", direccion: "AVDA. DE LA LOMA, Nº 43", cp: "30366", localidad: "ALGAR (EL)", municipio: "CARTAGENA", zona: "300135"},
    
    // ALJORRA (LA)
    {codigo: "30001886", nombre: "LA ALJORRA", tipo: "CE INF-PRI", direccion: "CALLE DEL COLEGIO ÚNICO S/Nº", cp: "30390", localidad: "ALJORRA (LA)", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30001898", nombre: "MIGUEL DE CERVANTES", tipo: "CE INF-PRI", direccion: "TRABAJO Nº 4", cp: "30390", localidad: "ALJORRA (LA)", municipio: "CARTAGENA", zona: "300135"},
    
    // ALUMBRES
    {codigo: "30001904", nombre: "LOS ALUMBRES", tipo: "CE INF-PRI", direccion: "LAS ESCUELAS, S/N", cp: "30351", localidad: "ALUMBRES", municipio: "CARTAGENA", zona: "300135"},
    
    // APARECIDA (LA)
    {codigo: "30008832", nombre: "HAZIM", tipo: "E.E.I.", direccion: "CASAS NUEVAS, 21", cp: "30394", localidad: "APARECIDA (LA)", municipio: "CARTAGENA", zona: "300135"},
    
    // ASOMADA (LA)
    {codigo: "30002350", nombre: "LA ASOMADA", tipo: "CE INF-PRI", direccion: "APT. DE CORREOS, Nº 4 (B.PERAL)", cp: "30394", localidad: "ASOMADA (LA)", municipio: "CARTAGENA", zona: "300135"},
    
    // BALSAPINTADA
    {codigo: "30002911", nombre: "PABLO NERUDA", tipo: "CE INF-PRI", direccion: "JOSE DE ESPRONCEDA, S/N", cp: "30320", localidad: "BALSAPINTADA", municipio: "FUENTE ÁLAMO DE MURCIA", zona: "300135"},
    
    // BARREROS (LOS)
    {codigo: "30002088", nombre: "CUATRO SANTOS", tipo: "CE INF-PRI", direccion: "BURGOS, 1 (BDA.CUATRO SANTOS)", cp: "30204", localidad: "BARREROS (LOS)", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30002091", nombre: "SAN FRANCISCO JAVIER", tipo: "CE INF-PRI", direccion: "MAYOR, S/N", cp: "30204", localidad: "BARREROS (LOS)", municipio: "CARTAGENA", zona: "300135"},
    
    // BARRIO DE LA CONCEPCION
    {codigo: "30002234", nombre: "LA CONCEPCIÓN", tipo: "CE INF-PRI", direccion: "ANTONIO ROSIQUE,7-B.CONCEPCION", cp: "30205", localidad: "BARRIO DE LA CONCEPCION", municipio: "CARTAGENA", zona: "300135"},
    
    // BARRIO DE PERAL
    {codigo: "30002271", nombre: "FELICIANO SÁNCHEZ", tipo: "CE INF-PRI", direccion: "DOCTOR SERRANO, S/N", cp: "30394", localidad: "BARRIO DE PERAL", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30002283", nombre: "JOSÉ MARÍA DE LAPUERTA", tipo: "CE INF-PRI", direccion: "COVADONGA, 11", cp: "30394", localidad: "BARRIO DE PERAL", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30010841", nombre: "SAN FÉLIX", tipo: "CE INF-PRI", direccion: "BARBOLES, S/N", cp: "30394", localidad: "BARRIO DE PERAL", municipio: "CARTAGENA", zona: "300135"},
    
    // BELONES (LOS)
    {codigo: "30002209", nombre: "SAN ISIDRO", tipo: "CE INF-PRI", direccion: "CERVANTES, S/N", cp: "30385", localidad: "BELONES (LOS)", municipio: "CARTAGENA", zona: "300135"},
    
    // CAMPANO (LO)
    {codigo: "30002374", nombre: "ASDRÚBAL", tipo: "CE INF-PRI", direccion: "C/ SAN JOSÉ DE CALASANZ, S/N", cp: "30205", localidad: "CAMPANO (LO)", municipio: "CARTAGENA", zona: "300135"},
    
    // CANTERAS
    {codigo: "30001953", nombre: "FERNANDO GARRIDO", tipo: "CE INF-PRI", direccion: "PLAZA PICO ROLDÁN, S/N", cp: "30203", localidad: "CANTERAS", municipio: "CARTAGENA", zona: "300135"},
    
    // CARTAGENA
    {codigo: "30001461", nombre: "HNOS. SAN ISIDORO Y SANTA FLORENTINA", tipo: "CE INF-PRI", direccion: "PASEO ALFONSO XIII, 6", cp: "30201", localidad: "CARTAGENA", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30001485", nombre: "STELLA MARIS", tipo: "CE INF-PRI", direccion: "ALCALDE MORA RIPOLL, Nº 10", cp: "30201", localidad: "CARTAGENA", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30001497", nombre: "VIRGEN DEL CARMEN", tipo: "CE INF-PRI", direccion: "PASEO DE ALFONSO XIII, 57", cp: "30201", localidad: "CARTAGENA", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30001965", nombre: "POETA ANTONIO OLIVER", tipo: "CE INF-PRI", direccion: "TOMAS LUIS DE VICTORIA, 1 (BDA. SAN JOSE", cp: "30201", localidad: "CARTAGENA", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30008583", nombre: "MARE NOSTRUM", tipo: "CE INF-PRI", direccion: "RIBERA DE SAN JAVIER, S/N", cp: "30201", localidad: "CARTAGENA", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30008972", nombre: "CONCEPCIÓN ARENAL", tipo: "CE INF-PRI", direccion: "RONDA FERROL,S/N (EL ENSANCHE)", cp: "30201", localidad: "CARTAGENA", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30010140", nombre: "MASTIA", tipo: "CE INF-PRI", direccion: "C/ INGENIERO DE LA CIERVA, 19", cp: "30201", localidad: "CARTAGENA", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30010437", nombre: "VICENTE ROS", tipo: "CE INF-PRI", direccion: "CARMEN CONDE, 60", cp: "30201", localidad: "CARTAGENA", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30011247", nombre: "CIUDAD JARDÍN", tipo: "CE INF-PRI", direccion: "C/ CARMEN CONDE, 38", cp: "30201", localidad: "CARTAGENA", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30011806", nombre: "PIPIRIPAO", tipo: "E.E.I.", direccion: "C/ JORGE JUAN, 39", cp: "30201", localidad: "CARTAGENA", municipio: "CARTAGENA", zona: "300135"},
    {codigo: "30019404", nombre: "ATALAYA", tipo: "CE INF-PRI", direccion: "AVDA. DEL CANTÓN S/N", cp: "30201", localidad: "CARTAGENA", municipio: "CARTAGENA", zona: "300135"},
    
    // CUEVAS DE REYLLO
    {codigo: "30011995", nombre: "ALZABARA", tipo: "C.R.A", direccion: "CASAS DE ARRIBA, 19", cp: "30320", localidad: "CUEVAS DE REYLLO", municipio: "FUENTE ÁLAMO DE MURCIA", zona: "300135"}
];

// Exportar para uso en la aplicación
if (typeof module !== 'undefined' && module.exports) {
    module.exports = centersData;
}
