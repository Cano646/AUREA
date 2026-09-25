const CATALOG = [
  { id: 'parque-central', name: 'Parque Central de Ciudad Juárez', category: 'parque', tags: ['parque','exterior','recreacion','familiar'], activities: ['caminar','pasear','relajarse'], address: 'Av. Tecnológico 3650, Las Acequias', hoursText: '06:00–23:00', hours: { monday: ['06:00-23:00'], tuesday: ['06:00-23:00'], wednesday: ['06:00-23:00'], thursday: ['06:00-23:00'], friday: ['06:00-23:00'], saturday: ['06:00-23:00'], sunday: ['06:00-23:00'] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'chamizal', name: 'Parque Público Federal El Chamizal', category: 'parque', tags: ['parque','exterior','cultura','recreacion'], activities: ['caminar','pasear','relajarse'], address: 'Ing. David Herrera / C. Malecón, Chamizal', hoursText: '24h', hours: { monday: ['00:00-24:00'], tuesday: ['00:00-24:00'], wednesday: ['00:00-24:00'], thursday: ['00:00-24:00'], friday: ['00:00-24:00'], saturday: ['00:00-24:00'], sunday: ['00:00-24:00'] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'museo-arte-cdjuarez', name: 'Museo de Arte de Ciudad Juárez', category: 'cultura', tags: ['museo','cultura','interior'], activities: ['visitar_museo','conocer'], address: 'Av. Abraham Lincoln y Coyoacán, Zona Pronaf', hoursText: 'Mar-Sáb 10:00–18:00; Dom 12:00–17:00', hours: { monday: [], tuesday: ['10:00-18:00'], wednesday: ['10:00-18:00'], thursday: ['10:00-18:00'], friday: ['10:00-18:00'], saturday: ['10:00-18:00'], sunday: ['12:00-17:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'museo-revolucion', name: 'Museo de la Revolución en la Frontera', category: 'cultura', tags: ['museo','historia','cultura'], activities: ['visitar_museo','conocer'], address: '16 de Septiembre y Av. Juárez, Centro', hoursText: 'Mar-Dom 09:00–17:00', hours: { monday: [], tuesday: ['09:00-17:00'], wednesday: ['09:00-17:00'], thursday: ['09:00-17:00'], friday: ['09:00-17:00'], saturday: ['09:00-17:00'], sunday: ['09:00-17:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'zoologico-san-jorge', name: 'Zoológico San Jorge', category: 'familiar', tags: ['zoologico','recreacion','familiar'], activities: ['actividad_familiar','conocer'], address: 'Mariano Abasolo 1016, El Sauzal', hoursText: '10:00–17:30', hours: { monday: ['10:00-17:30'], tuesday: ['10:00-17:30'], wednesday: ['10:00-17:30'], thursday: ['10:00-17:30'], friday: ['10:00-17:30'], saturday: ['10:00-17:30'], sunday: ['10:00-17:30'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'mundo-acuatico-anita', name: 'Mundo Acuático Anita', category: 'recreacion', tags: ['alberca','recreacion','familiar'], activities: ['actividad_familiar','relajarse'], address: 'Ramón Rayón / Waterfill 1658', hoursText: 'Lun-Sáb 09:00–18:00; Dom 10:00–17:00', hours: { monday: ['09:00-18:00'], tuesday: ['09:00-18:00'], wednesday: ['09:00-18:00'], thursday: ['09:00-18:00'], friday: ['09:00-18:00'], saturday: ['09:00-18:00'], sunday: ['10:00-17:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'portchester', name: 'Portchester Cocktail Pub', category: 'vida_nocturna', tags: ['vida_nocturna','bar','comida'], activities: ['vida_nocturna','beber','comer'], address: 'Blvd. Manuel Gómez Morín 9360, Paseo del Bosque', hoursText: 'Mar-Dom 18:00–00:00/02:00', hours: { monday: [], tuesday: ['18:00-00:00'], wednesday: ['18:00-00:00'], thursday: ['18:00-00:00'], friday: ['18:00-02:00'], saturday: ['18:00-02:00'], sunday: ['18:00-00:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'barra-negra', name: 'Barra Negra', category: 'vida_nocturna', tags: ['vida_nocturna','bar','comida'], activities: ['vida_nocturna','beber','comer'], address: 'Enramada 7339, Tecnológico', hoursText: 'Mar-Mié 16:00–02:00; Jue 17:00–02:00; Vie-Dom 14:00–02:00', hours: { monday: [], tuesday: ['16:00-02:00'], wednesday: ['16:00-02:00'], thursday: ['17:00-02:00'], friday: ['14:00-02:00'], saturday: ['14:00-02:00'], sunday: ['14:00-02:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'la-choperia', name: 'La Choperia', category: 'comida', tags: ['comida','vida_nocturna'], activities: ['comer','beber'], address: 'Av. Abraham Lincoln 971, Pronaf', hoursText: 'Lun-Jue 08:00–22:00; Vie-Dom 08:00–00:00', hours: { monday: ['08:00-22:00'], tuesday: ['08:00-22:00'], wednesday: ['08:00-22:00'], thursday: ['08:00-22:00'], friday: ['08:00-00:00'], saturday: ['08:00-00:00'], sunday: ['08:00-00:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'macu-caffe-cocktail-bar', name: 'Macu Caffé Cocktail Bar', category: 'cafe', tags: ['cafe','bar','comida'], activities: ['tomar_cafe','beber','comer'], address: 'C. Cam. Viejo a Zaragoza 1557-B, Partido Senecú, 32540', hoursText: 'Lun-Mié y Dom 08:00–22:00; Jue-Sáb 09:00–00:00', hours: { monday: ['08:00-22:00'], tuesday: ['08:00-22:00'], wednesday: ['08:00-22:00'], thursday: ['09:00-00:00'], friday: ['09:00-00:00'], saturday: ['09:00-00:00'], sunday: ['08:00-22:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'the-coffee-cdjuarez', name: 'The Coffee Ciudad Juárez', category: 'cafe', tags: ['cafe','estudio','relajarse'], activities: ['tomar_cafe','estudiar','trabajar'], address: 'Av. del Sauce, Parcelas Ejido Jesús Carranza, 32472', hoursText: 'Lun-Dom 07:30–22:00', hours: { monday: ['07:30-22:00'], tuesday: ['07:30-22:00'], wednesday: ['07:30-22:00'], thursday: ['07:30-22:00'], friday: ['07:30-22:00'], saturday: ['07:30-22:00'], sunday: ['07:30-22:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'boliche-strikers', name: 'Boliche Strikers', category: 'entretenimiento', tags: ['boliche','entretenimiento','amigos'], activities: ['boliche','entretenimiento'], address: 'Patio Panamericana, Av. Tecnológico 2230', hoursText: 'Lun-Jue 14:00–22:00; Vie-Sáb 14:00–00:00; Dom 12:00–22:00', hours: { monday: ['14:00-22:00'], tuesday: ['14:00-22:00'], wednesday: ['14:00-22:00'], thursday: ['14:00-22:00'], friday: ['14:00-00:00'], saturday: ['14:00-00:00'], sunday: ['12:00-22:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'boliche-anita-planet', name: 'Boliche Anita Planet', category: 'entretenimiento', tags: ['boliche','entretenimiento','amigos'], activities: ['boliche','entretenimiento'], address: 'Ramón Rayón 1658', hoursText: 'Lun 16:00–22:00; Mié-Sáb 15:00–22:00; Dom 15:00–23:00', hours: { monday: ['16:00-22:00'], tuesday: [], wednesday: ['15:00-22:00'], thursday: ['15:00-22:00'], friday: ['15:00-22:00'], saturday: ['15:00-22:00'], sunday: ['15:00-23:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'anytime-fitness-bermudez', name: 'Anytime Fitness Industrial Bermúdez', category: 'deporte', tags: ['deporte','gimnasio'], activities: ['ejercicio'], address: 'Blvd. Tomás Fernández 8581', hoursText: '24h', hours: { monday: ['00:00-24:00'], tuesday: ['00:00-24:00'], wednesday: ['00:00-24:00'], thursday: ['00:00-24:00'], friday: ['00:00-24:00'], saturday: ['00:00-24:00'], sunday: ['00:00-24:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'rio-grande-mall', name: 'Río Grande Mall', category: 'compras', tags: ['compras','entretenimiento'], activities: ['compras','pasear','conocer'], address: 'Paseo Triunfo de la República 4450', hoursText: '10:00–20:00', hours: { monday: ['10:00-20:00'], tuesday: ['10:00-20:00'], wednesday: ['10:00-20:00'], thursday: ['10:00-20:00'], friday: ['10:00-20:00'], saturday: ['10:00-20:00'], sunday: ['10:00-20:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'plaza-sendero-juarez', name: 'Plaza Sendero Juárez', category: 'compras', tags: ['compras','entretenimiento'], activities: ['compras','pasear','conocer'], address: 'Francisco Villarreal Torres 2050-A', hoursText: '10:00–21:00', hours: { monday: ['10:00-21:00'], tuesday: ['10:00-21:00'], wednesday: ['10:00-21:00'], thursday: ['10:00-21:00'], friday: ['10:00-21:00'], saturday: ['10:00-21:00'], sunday: ['10:00-21:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'plaza-de-las-americas', name: 'Plaza de las Américas', category: 'compras', tags: ['compras','cultura','entretenimiento'], activities: ['compras','pasear','conocer'], address: 'Anillo Envolvente Pronaf', hoursText: '09:00–21:00', hours: { monday: ['09:00-21:00'], tuesday: ['09:00-21:00'], wednesday: ['09:00-21:00'], thursday: ['09:00-21:00'], friday: ['09:00-21:00'], saturday: ['09:00-21:00'], sunday: ['09:00-21:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'cinepolis-las-misiones', name: 'Cinépolis Las Misiones', category: 'cine', tags: ['cine','entretenimiento'], activities: ['cine','entretenimiento'], address: 'Blvd. Teófilo Borunda 8681', hoursText: 'Horario variable', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'cinepolis-centro-mall', name: 'Cinépolis Centro Mall', category: 'cine', tags: ['cine','entretenimiento'], activities: ['cine','entretenimiento'], address: 'Santos Degollado s/n', hoursText: 'Horario variable', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'barrigas-misiones', name: 'Barrigas Misiones', category: 'comida', tags: ['comida','restaurante'], activities: ['comer'], address: 'Paseo de la Victoria 4220', hoursText: '08:00–23:30', hours: { monday: ['08:00-23:30'], tuesday: ['08:00-23:30'], wednesday: ['08:00-23:30'], thursday: ['08:00-23:30'], friday: ['08:00-23:30'], saturday: ['08:00-23:30'], sunday: ['08:00-23:30'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'parque-suroriente', name: 'Parque Suroriente', category: 'parque', tags: ['parque','exterior','recreacion'], activities: ['caminar','pasear','relajarse'], address: 'zona suroriente', hoursText: '06:00–22:00', hours: { monday: ['06:00-22:00'], tuesday: ['06:00-22:00'], wednesday: ['06:00-22:00'], thursday: ['06:00-22:00'], friday: ['06:00-22:00'], saturday: ['06:00-22:00'], sunday: ['06:00-22:00'] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'biblioteca-talamas', name: 'Biblioteca Manuel Talamás Camandari', category: 'biblioteca', tags: ['biblioteca','estudio','cultura'], activities: ['estudiar','trabajar','conocer'], address: 'Blvd. Zaragoza y Oaxaca', hoursText: '08:00–15:00', hours: { monday: ['08:00-15:00'], tuesday: ['08:00-15:00'], wednesday: ['08:00-15:00'], thursday: ['08:00-15:00'], friday: ['08:00-15:00'], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'biblioteca-emiliano-zapata', name: 'Biblioteca Emiliano Zapata', category: 'biblioteca', tags: ['biblioteca','estudio','cultura'], activities: ['estudiar','trabajar','conocer'], address: 'Álvaro Obregón 2400', hoursText: '08:00–15:00', hours: { monday: ['08:00-15:00'], tuesday: ['08:00-15:00'], wednesday: ['08:00-15:00'], thursday: ['08:00-15:00'], friday: ['08:00-15:00'], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'biblioteca-felipe-angeles', name: 'Biblioteca Felipe Ángeles', category: 'biblioteca', tags: ['biblioteca','estudio','cultura'], activities: ['estudiar','trabajar','conocer'], address: 'Arroyo de las Víboras 1318', hoursText: '08:00–15:00', hours: { monday: ['08:00-15:00'], tuesday: ['08:00-15:00'], wednesday: ['08:00-15:00'], thursday: ['08:00-15:00'], friday: ['08:00-15:00'], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'biblioteca-francisco-imadero', name: 'Biblioteca Francisco I. Madero', category: 'biblioteca', tags: ['biblioteca','estudio','cultura'], activities: ['estudiar','trabajar','conocer'], address: 'Soto y Gama 4409', hoursText: '08:00–18:00', hours: { monday: ['08:00-18:00'], tuesday: ['08:00-18:00'], wednesday: ['08:00-18:00'], thursday: ['08:00-18:00'], friday: ['08:00-18:00'], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'biblioteca-custodia', name: 'Biblioteca Custodia de la República', category: 'biblioteca', tags: ['biblioteca','estudio','cultura'], activities: ['estudiar','trabajar','conocer'], address: 'Ejido/Galeana / Terrenos Nacionales', hoursText: '08:00–15:00', hours: { monday: ['08:00-15:00'], tuesday: ['08:00-15:00'], wednesday: ['08:00-15:00'], thursday: ['08:00-15:00'], friday: ['08:00-15:00'], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'biblioteca-bonanza-bine', name: 'Biblioteca Bonanza Biné', category: 'biblioteca', tags: ['biblioteca','estudio','cultura'], activities: ['estudiar','trabajar','conocer'], address: 'Francisco Wong / Paseo del Real', hoursText: '09:00–18:00', hours: { monday: ['09:00-18:00'], tuesday: ['09:00-18:00'], wednesday: ['09:00-18:00'], thursday: ['09:00-18:00'], friday: ['09:00-18:00'], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'biblioteca-francisco-villarreal', name: 'Biblioteca Francisco Villarreal', category: 'biblioteca', tags: ['biblioteca','estudio','cultura'], activities: ['estudiar','trabajar','conocer'], address: 'Puerto Cataña / Puerto Príncipe', hoursText: '08:00–15:00', hours: { monday: ['08:00-15:00'], tuesday: ['08:00-15:00'], wednesday: ['08:00-15:00'], thursday: ['08:00-15:00'], friday: ['08:00-15:00'], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'biblioteca-palo-chino', name: 'Biblioteca Palo Chino', category: 'biblioteca', tags: ['biblioteca','estudio','cultura'], activities: ['estudiar','trabajar','conocer'], address: 'Palo Hueco / Palo Chino', hoursText: '08:00–15:00', hours: { monday: ['08:00-15:00'], tuesday: ['08:00-15:00'], wednesday: ['08:00-15:00'], thursday: ['08:00-15:00'], friday: ['08:00-15:00'], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'biblioteca-hombres-reforma', name: 'Biblioteca Hombres de la Reforma', category: 'biblioteca', tags: ['biblioteca','estudio','cultura'], activities: ['estudiar','trabajar','conocer'], address: 'Soneto 650', hoursText: '08:00–15:00', hours: { monday: ['08:00-15:00'], tuesday: ['08:00-15:00'], wednesday: ['08:00-15:00'], thursday: ['08:00-15:00'], friday: ['08:00-15:00'], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'biblioteca-benito-juarez', name: 'Biblioteca Benito Juárez García', category: 'biblioteca', tags: ['biblioteca','estudio','cultura'], activities: ['estudiar','trabajar','conocer'], address: 'Ayuntamiento 534', hoursText: '08:00–20:00', hours: { monday: ['08:00-20:00'], tuesday: ['08:00-20:00'], wednesday: ['08:00-20:00'], thursday: ['08:00-20:00'], friday: ['08:00-20:00'], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'biblioteca-arturo-tolentino', name: 'Biblioteca Arturo Tolentino Hernández', category: 'biblioteca', tags: ['biblioteca','estudio','cultura'], activities: ['estudiar','trabajar','conocer'], address: 'Ignacio Ramírez s/n', hoursText: '08:00–20:00', hours: { monday: ['08:00-20:00'], tuesday: ['08:00-20:00'], wednesday: ['08:00-20:00'], thursday: ['08:00-20:00'], friday: ['08:00-20:00'], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'gran-plaza-juan-gabriel', name: 'Gran Plaza Juan Gabriel', category: 'compras', tags: ['compras','entretenimiento'], activities: ['compras','pasear'], address: 'Begonias / Centro', hoursText: 'Horario variable', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'la-rodadora', name: 'La Rodadora', category: 'cultura', tags: ['museo','cultura','familiar'], activities: ['visitar_museo','conocer'], address: 'Jesús Soltero Lozoya 300, Parque Central', hoursText: 'Horario variable', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'museo-arqueologia-historia', name: 'Museo de Arqueología e Historia', category: 'cultura', tags: ['museo','historia','cultura'], activities: ['visitar_museo','conocer'], address: 'C.C. 51, Chamizal', hoursText: 'Horario variable', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'museo-casa-de-adobe', name: 'Museo Casa de Adobe', category: 'historia', tags: ['museo','historia','turismo'], activities: ['visitar_museo','conocer'], address: 'Anapra/frontera', hoursText: 'Horario variable', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'plaza-mexicanidad', name: 'Plaza de la Mexicanidad', category: 'turismo', tags: ['turismo','monumento','exterior'], activities: ['caminar','conocer'], address: 'Heroico Colegio Militar / Chamizal', hoursText: 'Exterior / variable', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'parque-borunda', name: 'Parque Borunda', category: 'parque', tags: ['parque','exterior','recreacion'], activities: ['caminar','pasear','relajarse'], address: 'Vicente Guerrero', hoursText: 'Público', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'parque-x-tremo', name: 'Parque X-Tremo', category: 'parque', tags: ['parque','recreacion','deporte'], activities: ['relajarse','actividad_familiar'], address: 'Ciudad Juárez', hoursText: 'Horario variable', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'parque-oriente', name: 'Parque Oriente', category: 'parque', tags: ['parque','exterior','recreacion'], activities: ['caminar','pasear','relajarse'], address: 'zona oriente', hoursText: 'Horario variable', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'recreativo-del-camino', name: 'Recreativo Del Camino', category: 'recreacion', tags: ['alberca','recreacion','familiar'], activities: ['actividad_familiar','relajarse'], address: 'El Porvenir–Cd. Juárez 1780, Águilas de Zaragoza', hoursText: 'Lun-Vie 09:30–18:00; Sáb 10:00–18:00; Dom 08:00–18:00', hours: { monday: ['09:30-18:00'], tuesday: ['09:30-18:00'], wednesday: ['09:30-18:00'], thursday: ['09:30-18:00'], friday: ['09:30-18:00'], saturday: ['10:00-18:00'], sunday: ['08:00-18:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'la-nueva-central', name: 'La Nueva Central', category: 'comida', tags: ['comida','restaurante'], activities: ['comer'], address: '16 de Septiembre 222, Centro', hoursText: '24h', hours: { monday: ['00:00-24:00'], tuesday: ['00:00-24:00'], wednesday: ['00:00-24:00'], thursday: ['00:00-24:00'], friday: ['00:00-24:00'], saturday: ['00:00-24:00'], sunday: ['00:00-24:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'museo-juan-gabriel', name: 'Museo Juan Gabriel', category: 'cultura', tags: ['museo','musica','cultura'], activities: ['visitar_museo','conocer'], address: 'Colombia 157, Partido Romero', hoursText: '10:00–20:00', hours: { monday: ['10:00-20:00'], tuesday: ['10:00-20:00'], wednesday: ['10:00-20:00'], thursday: ['10:00-20:00'], friday: ['10:00-20:00'], saturday: ['10:00-20:00'], sunday: ['10:00-20:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'monumento-mexicanidad', name: 'Monumento a la Mexicanidad', category: 'turismo', tags: ['monumento','turismo','exterior'], activities: ['conocer'], address: 'Plaza de la Mexicanidad', hoursText: 'Público', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'monumento-benito-juarez', name: 'Monumento Benito Juárez', category: 'historia', tags: ['historia','turismo','exterior'], activities: ['conocer'], address: 'Centro', hoursText: 'Público', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'centro-historico-juarez', name: 'Centro Histórico de Ciudad Juárez', category: 'historia', tags: ['historia','turismo','exterior'], activities: ['caminar','conocer'], address: 'Zona Centro', hoursText: 'Público', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'free', min: 0, max: 0 }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'dunas-samalayuca', name: 'Dunas de Samalayuca', category: 'naturaleza', tags: ['naturaleza','turismo','exterior'], activities: ['naturaleza','pasear','fotografia'], address: 'zona Samalayuca', hoursText: 'Variable', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'sierra-juarez', name: 'Sierra de Juárez', category: 'naturaleza', tags: ['naturaleza','turismo','exterior'], activities: ['naturaleza','pasear','fotografia'], address: 'Sierra de Juárez', hoursText: 'Variable', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'cinemex-galerias-tec', name: 'Cinemex Galerías Tec', category: 'cine', tags: ['cine','entretenimiento'], activities: ['cine','entretenimiento'], address: 'Ciudad Juárez', hoursText: 'Horario variable', hours: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: true, rating: null, sourceType: 'catalog' },
  { id: 'the-coffee-club-2023', name: 'The Coffee Club 2023', category: 'cafe', tags: ['cafe','estudio','trabajo'], activities: ['tomar_cafe','estudiar','trabajar'], address: 'C. Uva 6030, Granjero, 32690', hoursText: 'Lun-Jue 07:00–23:00; Vie-Sáb 08:00–23:30; Dom 08:00–23:00', hours: { monday: ['07:00-23:00'], tuesday: ['07:00-23:00'], wednesday: ['07:00-23:00'], thursday: ['07:00-23:00'], friday: ['07:00-23:00'], saturday: ['08:00-23:30'], sunday: ['08:00-23:00'] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'don-ulises-cafe', name: 'DON ULISES CAFE', category: 'cafe', tags: ['cafe','estudio','trabajo'], activities: ['tomar_cafe','estudiar','trabajar'], address: 'Blvd. Manuel Gómez Morín 1563, Satélite, 32540', hoursText: 'Lun-Sáb 14:00–21:00; Dom cerrado', hours: { monday: ['14:00-21:00'], tuesday: ['14:00-21:00'], wednesday: ['14:00-21:00'], thursday: ['14:00-21:00'], friday: ['14:00-21:00'], saturday: ['14:00-21:00'], sunday: [] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' },
  { id: 'meson-cafeteria-barrio', name: 'Meson | Cafeteria de Barrio', category: 'cafe', tags: ['cafe','estudio','comida'], activities: ['tomar_cafe','comer','estudiar'], address: 'Puerto Nápoles 1550, Tierra Nueva Etapa II, 32599', hoursText: 'Mar-Vie 14:00–22:00; Sáb 09:00–21:00; Dom/Lun cerrado', hours: { monday: [], tuesday: ['14:00-22:00'], wednesday: ['14:00-22:00'], thursday: ['14:00-22:00'], friday: ['14:00-22:00'], saturday: ['09:00-21:00'], sunday: [] }, price: { type: 'unknown', min: null, max: null }, coordinates: null, locationStatus: 'needs_coordinates', variableSchedule: false, rating: null, sourceType: 'catalog' }
];

const COMPANION_LABELS = {
  pareja: 'Pareja',
  amigos: 'Amigos',
  familia: 'Familia',
  solo: 'Solo'
};

const INTENT_BY_COMPANION = {
  pareja: [
    { id: 'primera_cita', label: 'Primera cita' },
    { id: 'cita_casual', label: 'Cita casual' },
    { id: 'aniversario', label: 'Aniversario' },
    { id: 'romantico', label: 'Plan romántico' },
    { id: 'algo_divertido', label: 'Algo divertido' },
    { id: 'algo_tranquilo', label: 'Algo tranquilo' }
  ],
  amigos: [
    { id: 'cotorrear', label: 'Cotorrear' },
    { id: 'ir_a_comer', label: 'Ir a comer' },
    { id: 'jugar', label: 'Jugar / actividad' },
    { id: 'cine', label: 'Cine' },
    { id: 'salir_de_noche', label: 'Salir de noche' },
    { id: 'conocer_lugares', label: 'Conocer lugares' },
    { id: 'economico', label: 'Plan económico' }
  ],
  familia: [
    { id: 'dia_familiar', label: 'Día familiar' },
    { id: 'plan_con_ninos', label: 'Plan con niños' },
    { id: 'aire_libre', label: 'Aire libre' },
    { id: 'salir_a_comer', label: 'Salir a comer' },
    { id: 'entretenimiento', label: 'Entretenimiento' },
    { id: 'cultura', label: 'Cultura' },
    { id: 'economico', label: 'Plan económico' }
  ],
  solo: [
    { id: 'relajarme', label: 'Relajarme' },
    { id: 'estudiar', label: 'Estudiar' },
    { id: 'trabajar', label: 'Trabajar' },
    { id: 'conocer', label: 'Conocer' },
    { id: 'comer', label: 'Comer' },
    { id: 'entrenar', label: 'Entrenar' },
    { id: 'cultura', label: 'Cultura' },
    { id: 'desconectarme', label: 'Desconectarme' }
  ]
};

const INTENT_RULES = {
  primera_cita: { labels: ['cafe','comida','cine','parque','cultura'], forbidden: ['gimnasio','bar','biblioteca','alberca'] },
  cita_casual: { labels: ['cafe','comida','cine','parque','cultura'], forbidden: ['gimnasio','bar','biblioteca','alberca'] },
  aniversario: { labels: ['comida','cafe','cultura','parque','cine'], forbidden: ['gimnasio','bar','biblioteca','alberca'] },
  romantico: { labels: ['comida','cafe','parque','cultura','cine'], forbidden: ['gimnasio','bar','biblioteca'] },
  algo_divertido: { labels: ['cine','boliche','parque','entretenimiento'], forbidden: ['biblioteca','gimnasio','alberca'] },
  algo_tranquilo: { labels: ['parque','cafe','biblioteca','cultura'], forbidden: ['bar','alberca','gimnasio'] },
  cotorrear: { labels: ['comida','cafe','bar','boliche','cine'], forbidden: ['biblioteca','gimnasio','alberca'] },
  ir_a_comer: { labels: ['comida','cafe','bar'], forbidden: ['biblioteca','gimnasio','alberca'] },
  jugar: { labels: ['boliche','entretenimiento','cine','parque'], forbidden: ['biblioteca','gimnasio','alberca'] },
  cine: { labels: ['cine','comida','cafe'], forbidden: ['gimnasio','alberca','biblioteca'] },
  salir_de_noche: { labels: ['bar','comida','cine','entretenimiento'], forbidden: ['biblioteca','gimnasio','alberca'] },
  conocer_lugares: { labels: ['parque','cultura','turismo','museo'], forbidden: ['bar','alberca','gimnasio'] },
  economico: { labels: ['parque','cafe','biblioteca','cultura'], forbidden: ['bar','alberca','gimnasio'] },
  dia_familiar: { labels: ['parque','comida','familiar','cultura','cine'], forbidden: ['bar','biblioteca','gimnasio'] },
  plan_con_ninos: { labels: ['parque','familiar','recreacion','cine'], forbidden: ['bar','biblioteca','gimnasio'] },
  aire_libre: { labels: ['parque','naturaleza','recreacion'], forbidden: ['bar','biblioteca','gimnasio'] },
  salir_a_comer: { labels: ['comida','cafe','parque'], forbidden: ['gimnasio','bar','biblioteca'] },
  entretenimiento: { labels: ['cine','boliche','parque','recreacion'], forbidden: ['biblioteca','gimnasio','bar'] },
  cultura: { labels: ['cultura','museo','biblioteca','parque'], forbidden: ['bar','alberca','gimnasio'] },
  relajarme: { labels: ['cafe','parque','biblioteca','cultura'], forbidden: ['bar','alberca','gimnasio'] },
  estudiar: { labels: ['biblioteca','cafe','cultura'], forbidden: ['bar','alberca','gimnasio'] },
  trabajar: { labels: ['cafe','biblioteca','parque'], forbidden: ['bar','alberca'] },
  conocer: { labels: ['parque','cultura','turismo','museo'], forbidden: ['bar','alberca','gimnasio'] },
  comer: { labels: ['comida','cafe'], forbidden: ['biblioteca','gimnasio','alberca'] },
  entrenar: { labels: ['deporte','parque','recreacion'], forbidden: ['bar','biblioteca'] },
  desconectarme: { labels: ['parque','cafe','cultura'], forbidden: ['bar','alberca','gimnasio'] }
};

const PLAN_TITLES = {
  primera_cita: 'Primera cita',
  cita_casual: 'Cita casual',
  aniversario: 'Aniversario',
  romantico: 'Plan romántico',
  algo_divertido: 'Algo divertido',
  algo_tranquilo: 'Algo tranquilo',
  cotorrear: 'Cotorrear',
  ir_a_comer: 'Ir a comer',
  jugar: 'Actividad con amigos',
  cine: 'Cine y charla',
  salir_de_noche: 'Salida nocturna',
  conocer_lugares: 'Recorrido por la zona',
  economico: 'Plan económico',
  dia_familiar: 'Día familiar',
  plan_con_ninos: 'Plan con niños',
  aire_libre: 'Aire libre',
  salir_a_comer: 'Salir a comer',
  entretenimiento: 'Entretenimiento',
  relajarme: 'Tarde tranquila',
  estudiar: 'Hora de estudio',
  trabajar: 'Trabajo con foco',
  conocer: 'Conocer',
  comer: 'Comer',
  entrenar: 'Actividad fit',
  desconectarme: 'Desconectar'
};

const PLAN_TEMPLATES = {
  primera_cita: [['cafe', 'paseo'], ['cafe', 'actividad'], ['restaurante', 'cine'], ['restaurante', 'paseo'], ['restaurante', 'entretenimiento'], ['actividad', 'cafe_postre'], ['cine', 'cafe_postre']],
  cita_casual: [['cafe', 'paseo'], ['comida', 'cine'], ['comida', 'paseo']],
  aniversario: [['restaurante', 'paseo'], ['restaurante', 'entretenimiento'], ['cena', 'actividad'], ['cultura', 'cena']],
  romantico: [['restaurante', 'paseo'], ['cafe', 'paseo'], ['comida', 'cultura']],
  algo_divertido: [['entretenimiento', 'comida'], ['cine', 'comida'], ['actividad', 'cafe_postre']],
  algo_tranquilo: [['cafe'], ['paseo'], ['cultura'], ['biblioteca']],
  cotorrear: [['comida', 'cafe'], ['comida', 'bar'], ['boliche', 'comida'], ['actividad_social', 'comida'], ['bar', 'entretenimiento']],
  ir_a_comer: [['restaurante'], ['comida', 'cafe_postre']],
  jugar: [['boliche', 'comida'], ['actividad', 'comida'], ['entretenimiento', 'comida']],
  cine: [['cine'], ['cine', 'comida'], ['cine', 'cafe_postre']],
  salir_de_noche: [['cena', 'bar'], ['bar', 'entretenimiento'], ['cine', 'comida']],
  conocer_lugares: [['museo', 'centro_historico'], ['museo', 'cafe'], ['sitio_historico', 'museo'], ['recorrido', 'punto_interes'], ['lugar_turistico', 'comida']],
  economico: [['parque'], ['paseo'], ['actividad_gratuita'], ['restaurante_economico'], ['entretenimiento_economico']],
  dia_familiar: [['parque', 'comida'], ['museo', 'comida'], ['parque', 'entretenimiento'], ['actividad_infantil', 'comida'], ['recreacion', 'comida'], ['cine', 'comida']],
  plan_con_ninos: [['actividad_infantil', 'comida'], ['recreacion', 'comida'], ['cine', 'comida']],
  aire_libre: [['parque'], ['naturaleza'], ['parque', 'recreacion']],
  salir_a_comer: [['restaurante'], ['comida', 'paseo']],
  entretenimiento: [['boliche'], ['cine'], ['juegos'], ['actividad', 'comida'], ['entretenimiento']],
  cultura: [['museo'], ['museo', 'cafe'], ['museo', 'centro_historico'], ['ruta_cultural'], ['sitio_historico', 'museo']],
  relajarme: [['parque', 'cafe'], ['museo', 'cafe'], ['biblioteca', 'cafe'], ['paseo', 'cafe']],
  estudiar: [['biblioteca'], ['biblioteca', 'cafe_estudio'], ['cafe_estudio'], ['espacio_tranquilo', 'cafe']],
  trabajar: [['biblioteca'], ['cafe_estudio'], ['espacio_tranquilo', 'cafe']],
  conocer: [['museo', 'centro_historico'], ['museo', 'cafe'], ['sitio_historico', 'museo'], ['recorrido', 'punto_interes'], ['lugar_turistico', 'comida']],
  comer: [['restaurante'], ['comida', 'cafe_postre'], ['cena'], ['comida', 'entretenimiento']],
  entrenar: [['parque', 'actividad_fisica'], ['actividad_fisica', 'comida_saludable'], ['caminar', 'comida_saludable'], ['entrenamiento']],
  desconectarme: [['parque', 'cafe'], ['paseo', 'cafe'], ['museo', 'cafe']]
};

const CAPABILITIES_BY_CATEGORY = {
  cafe: ['cafe', 'cafe_postre', 'cafe_estudio', 'comida_ligera', 'conversar', 'espacio_tranquilo'],
  comida: ['comida', 'comer', 'cena', 'restaurante', 'conversar', 'comida_nocturna'],
  cine: ['cine', 'entretenimiento'],
  entretenimiento: ['entretenimiento', 'boliche', 'juegos', 'actividad', 'actividad_social'],
  parque: ['parque', 'paseo', 'aire_libre', 'relajarse', 'caminar', 'actividad_gratuita', 'actividad_fisica'],
  naturaleza: ['paseo', 'aire_libre', 'caminar', 'actividad_gratuita'],
  biblioteca: ['biblioteca', 'estudiar', 'leer', 'trabajar', 'espacio_tranquilo'],
  cultura: ['museo', 'cultura', 'conocer', 'ruta_cultural', 'punto_interes'],
  historia: ['sitio_historico', 'centro_historico', 'conocer', 'punto_interes'],
  turismo: ['lugar_turistico', 'recorrido', 'punto_interes', 'paseo'],
  familiar: ['actividad_infantil', 'recreacion', 'conocer'],
  recreacion: ['recreacion', 'actividad_infantil', 'actividad', 'actividad_fisica', 'natacion'],
  deporte: ['entrenamiento', 'actividad_fisica', 'fitness'],
  vida_nocturna: ['bar', 'vida_nocturna', 'socializar', 'entretenimiento', 'comida_nocturna'],
  compras: ['entretenimiento', 'paseo', 'punto_interes']
};

const PROTOTYPE_ACTIVITY_ESTIMATES = {
  parque: [0, 0],
  biblioteca: [0, 0],
  paseo: [0, 50],
  cafe: [80, 160],
  cafe_postre: [80, 160],
  cafe_estudio: [80, 160],
  postre: [50, 100],
  comida: [120, 250],
  restaurante: [180, 350],
  cena: [180, 350],
  cine: [100, 180],
  boliche: [120, 220],
  museo: [50, 120],
  bar: [150, 350],
  entretenimiento: [100, 250],
  fitness: [0, 200],
  actividad_fisica: [0, 200],
  recreacion: [50, 250],
  cultura: [50, 150],
  comida_nocturna: [150, 350],
  actividad: [50, 250],
  actividad_social: [50, 250],
  actividad_infantil: [50, 250],
  juegos: [50, 250],
  lugar_turistico: [0, 80],
  recorrido: [0, 80],
  centro_historico: [0, 50],
  sitio_historico: [0, 50],
  punto_interes: [0, 50],
  entrenamiento: [0, 200],
  restaurante_economico: [120, 220],
  entretenimiento_economico: [50, 150],
  actividad_gratuita: [0, 0]
};

const ALERTS = [
  { id: 'demo-accident', type: 'accident', severity: 'high', title: 'Accidente vial', description: 'Se reporta afectación en la circulación. Considera una ruta alternativa.', location: 'Av. Tecnológico', createdAt: '2026-09-23T16:30:00-06:00', updatedAt: '2026-09-23T16:35:00-06:00', expiresAt: '2026-09-23T20:00:00-06:00', source: 'DEMO', sourceType: 'demo', status: 'active', affectedAreas: ['Av. Tecnológico'], affectedPlaces: ['parque-central'], recommendedAction: 'Revisa una ruta alternativa antes de salir.', confidence: 'medium' },
  { id: 'demo-closure', type: 'road_closure', severity: 'high', title: 'Cierre vial temporal', description: 'Hay cierre temporal de circulación en la zona centro.', location: 'Zona Centro', createdAt: '2026-09-23T15:20:00-06:00', updatedAt: '2026-09-23T15:25:00-06:00', expiresAt: '2026-09-23T19:00:00-06:00', source: 'DEMO', sourceType: 'demo', status: 'active', affectedAreas: ['Zona Centro'], affectedPlaces: [], recommendedAction: 'Evita la zona y calcula tiempo adicional.', confidence: 'medium' },
  { id: 'demo-flooding', type: 'flooding', severity: 'medium', title: 'Acumulación de agua', description: 'Hay precaución vehicular por agua acumulada en la zona sur.', location: 'Zona sur', createdAt: '2026-09-23T14:40:00-06:00', updatedAt: '2026-09-23T14:48:00-06:00', expiresAt: '2026-09-23T18:30:00-06:00', source: 'DEMO', sourceType: 'demo', status: 'active', affectedAreas: ['Zona sur'], affectedPlaces: [], recommendedAction: 'Reduce la velocidad y considera otra ruta.', confidence: 'medium' },
  { id: 'demo-event', type: 'event', severity: 'low', title: 'Evento con alta afluencia', description: 'La zona puede presentar mayor movimiento del habitual.', location: 'Parque Central', createdAt: '2026-09-23T13:55:00-06:00', updatedAt: '2026-09-23T14:00:00-06:00', expiresAt: '2026-09-23T21:00:00-06:00', source: 'DEMO', sourceType: 'demo', status: 'active', affectedAreas: ['Parque Central'], affectedPlaces: ['parque-central'], recommendedAction: 'Llega con margen si vas a esa zona.', confidence: 'medium' }
];

const state = {
  companion: 'pareja',
  intent: 'primera_cita',
  budget: 300,
  time: 180,
  distance: 5,
  startTime: '18:00',
  showAllPlans: false,
  favorites: new Set(JSON.parse(localStorage.getItem('aurea-favorites') || '[]')),
  reviews: readReviews(),
  alertFilter: 'all',
  nearbyOnly: false
};

function normalizePrice(price) {
  if (!price || price.type === 'unknown') return null;
  if (price.type === 'free') return 0;
  if (typeof price.min === 'number' && typeof price.max === 'number') return { min: price.min, max: price.max };
  if (typeof price.min === 'number') return { min: price.min, max: price.min };
  return null;
}

function uniquePlaces() {
  const durationByCategory = {
    cafe: [45, 90], comida: [60, 90], cine: [120, 150], cultura: [60, 120], historia: [60, 120],
    parque: [45, 120], naturaleza: [60, 150], biblioteca: [60, 120], entretenimiento: [60, 120],
    recreacion: [60, 120], vida_nocturna: [90, 180], deporte: [45, 90], turismo: [45, 120], familiar: [90, 180]
  };
  return CATALOG.map((place) => ({
    ...place,
    price: place.price?.type === 'free' ? { ...place.price, type: 'real' } : place.price,
    activities: place.category === 'biblioteca' ? ['estudiar', 'leer', 'trabajar'] : [...(place.activities || [])],
    capabilities: [...new Set([...(place.capabilities || []), ...(CAPABILITIES_BY_CATEGORY[place.category] || [])])],
    typicalDuration: place.typicalDuration || durationByCategory[place.category] || [45, 90],
    eventRequired: Boolean(place.eventRequired),
    suitableFor: place.suitableFor || ['solo', 'pareja', 'amigos', 'familia'],
    indoorOutdoor: place.indoorOutdoor || (['parque', 'naturaleza', 'turismo', 'historia'].includes(place.category) ? 'outdoor' : 'indoor')
  }));
}

const businesses = uniquePlaces();

function readReviews() {
  const stored = JSON.parse(localStorage.getItem('aurea-reviews') || '{}');
  return Object.fromEntries(Object.entries(stored).map(([id, reviews]) => [
    id,
    reviews.map((review) => ({ stars: review.stars ?? review['s' + 'core'] ?? 0, comment: review.comment }))
  ]));
}

function saveFavorites() {
  localStorage.setItem('aurea-favorites', JSON.stringify([...state.favorites]));
}

function saveReviews() {
  localStorage.setItem('aurea-reviews', JSON.stringify(state.reviews));
}

function getEffectiveIntentOptions(companion = state.companion) {
  return INTENT_BY_COMPANION[companion] || INTENT_BY_COMPANION.pareja;
}

function updateIntentOptions() {
  const select = document.getElementById('planIntent');
  if (!select) return;
  const options = getEffectiveIntentOptions();
  select.innerHTML = options.map((option) => `<option value="${option.id}">${option.label}</option>`).join('');
  if (!options.some((option) => option.id === state.intent)) {
    state.intent = options[0].id;
  }
  select.value = state.intent;
}

function localDayKey(date = new Date()) {
  const map = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  return map[date.getDay()];
}

function parseHour(text) {
  if (!text) return null;
  const parsed = String(text).match(/(\d{1,2}):(\d{2})/);
  if (!parsed) return null;
  return Number(parsed[1]) * 60 + Number(parsed[2]);
}

function createPlanStart(startTime = state.startTime) {
  const [hours, minutes] = String(startTime || '18:00').split(':').map(Number);
  const start = new Date();
  start.setHours(Number.isFinite(hours) ? hours : 18, Number.isFinite(minutes) ? minutes : 0, 0, 0);
  return start;
}

function isOpenDuring(place, startDate, durationMinutes) {
  if (place.variableSchedule) return false;
  const slots = place.hours && place.hours[localDayKey(startDate)];
  if (!slots || !slots.length) return false;
  const startMinute = startDate.getHours() * 60 + startDate.getMinutes();
  const endMinute = startMinute + durationMinutes;
  return slots.some((slot) => {
    const [startText, endText] = slot.split('-');
    const slotStart = parseHour(startText);
    let slotEnd = parseHour(endText);
    if (slotStart === null || slotEnd === null) return false;
    if (slotEnd <= slotStart) slotEnd += 24 * 60;
    return startMinute >= slotStart && endMinute <= slotEnd;
  });
}

function estimateActivityMinutes(place) {
  if (place.typicalDuration && place.typicalDuration.length === 2) {
    return Math.round((place.typicalDuration[0] + place.typicalDuration[1]) / 2);
  }
  if (place.category === 'cafe') return 60;
  if (place.category === 'comida') return 75;
  if (place.category === 'cine') return 120;
  if (place.category === 'museo' || place.category === 'cultura' || place.category === 'historia') return 90;
  if (place.category === 'parque' || place.category === 'naturaleza') return 75;
  if (place.category === 'biblioteca') return 90;
  if (place.category === 'entretenimiento' || place.category === 'recreacion') return 100;
  if (place.category === 'vida_nocturna') return 120;
  return 75;
}

function priceTypeForPlace(place) {
  if (place.price?.type === 'real' || place.price?.type === 'estimated') return place.price.type;
  if (place.price?.type === 'free') return 'real';
  return 'unknown';
}

function roleCost(role, place) {
  const actual = normalizePrice(place.price);
  if (actual !== null && priceTypeForPlace(place) === 'real') {
    const min = typeof actual === 'number' ? actual : actual.min;
    const max = typeof actual === 'number' ? actual : actual.max;
    return { min, max, type: 'real', role };
  }
  const estimate = PROTOTYPE_ACTIVITY_ESTIMATES[role];
  if (!estimate) return { min: null, max: null, type: 'unknown', role };
  return { min: estimate[0], max: estimate[1], type: 'estimated', role };
}

function planPriceForCombo(combo, template) {
  const parts = combo.map((place, index) => roleCost(template[index], place));
  if (parts.some((part) => part.type === 'unknown')) {
    return { min: null, max: null, type: 'unknown', label: 'Costo no estimable', parts };
  }
  const min = parts.reduce((sum, part) => sum + part.min, 0);
  const max = parts.reduce((sum, part) => sum + part.max, 0);
  const types = new Set(parts.map((part) => part.type));
  const type = types.size === 1 ? [...types][0] : 'mixed';
  const prefix = type === 'real' ? 'Costo confirmado' : type === 'mixed' ? 'Costo mixto' : 'Costo estimado';
  return { min, max, type, label: `${prefix} $${min}–$${max}`, parts };
}

function planCostWithinBudget(combo, budget, template = []) {
  const price = planPriceForCombo(combo, template);
  if (price.type === 'unknown') return { ...price, ok: false, budgetStatus: 'unknown' };
  if (price.min > budget) return { ...price, ok: false, budgetStatus: 'over' };
  if (price.max <= budget) return { ...price, ok: true, budgetStatus: 'within' };
  return { ...price, ok: true, budgetStatus: 'near', warning: 'Puede superar tu presupuesto' };
}

function estimatePlanDistance(combo) {
  if (!combo.length || combo.some((place) => !place.coordinates)) {
    return { distance: null, label: 'Distancia no disponible' };
  }
  const toRadians = (value) => value * Math.PI / 180;
  let distance = 0;
  for (let index = 1; index < combo.length; index += 1) {
    const from = combo[index - 1].coordinates;
    const to = combo[index].coordinates;
    const latitudeDelta = toRadians(to.lat - from.lat);
    const longitudeDelta = toRadians(to.lng - from.lng);
    const radius = 6371;
    const a = Math.sin(latitudeDelta / 2) ** 2 + Math.cos(toRadians(from.lat)) * Math.cos(toRadians(to.lat)) * Math.sin(longitudeDelta / 2) ** 2;
    distance += radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  return { distance, label: `${distance.toFixed(1)} km` };
}

function getIntentRule(intent) {
  return INTENT_RULES[intent] || { labels: [], forbidden: [] };
}

function tagsForPlace(place) {
  const base = [...(place.tags || []), ...(place.activities || []), ...(place.capabilities || [])];
  return base.map((tag) => String(tag).toLowerCase());
}

function hasForbiddenMix(combo, intent) {
  const rule = getIntentRule(intent);
  const tags = combo.flatMap(tagsForPlace);
  const hasForbidden = tags.some((tag) => rule.forbidden.includes(tag));
  if (hasForbidden) return true;
  if (combo.some((place) => place.category === 'vida_nocturna') && combo.some((place) => place.category === 'biblioteca')) return true;
  if (combo.some((place) => place.category === 'biblioteca') && combo.some((place) => place.category === 'naturaleza')) return true;
  if (combo.some((place) => place.category === 'cafe') && combo.length > 1 && combo.every((place) => place.category === 'cafe')) return true;
  return false;
}

function placeFitsIntent(place, companion, intent) {
  const rule = getIntentRule(intent);
  const tags = tagsForPlace(place);
  if (rule.forbidden.some((label) => tags.includes(label))) {
    return false;
  }
  if (companion === 'familia' && place.category === 'vida_nocturna') return false;
  if (companion === 'solo' && place.category === 'vida_nocturna') return false;
  if (companion === 'pareja' && place.category === 'biblioteca' && intent === 'primera_cita') return false;
  return true;
}

function templateHasActivity(combo, intent) {
  const labels = getIntentRule(intent).labels;
  if (!labels.length) return true;
  const valid = combo.flatMap(tagsForPlace).some((tag) => labels.includes(tag));
  return valid;
}

function getCandidatePlaces(companion, intent) {
  return businesses.filter((place) => placeFitsIntent(place, companion, intent));
}

function placesForRequirement(requirement, candidates, usedIds = new Set()) {
  return candidates.filter((place) => !usedIds.has(place.id) && (place.capabilities || []).includes(requirement));
}

function buildTemplateCombos(template, candidates) {
  const combos = [];
  const visit = (index, combo, usedIds) => {
    if (index >= template.length) {
      combos.push(combo);
      return;
    }
    placesForRequirement(template[index], candidates, usedIds).forEach((place) => {
      visit(index + 1, [...combo, place], new Set([...usedIds, place.id]));
    });
  };
  visit(0, [], new Set());
  return combos;
}

function buildPlanTitle(intent, combo) {
  return PLAN_TITLES[intent] || 'Plan recomendado';
}

function roleLabel(role) {
  return {
    cafe: 'Café', cafe_postre: 'Café / postre', cafe_estudio: 'Café de estudio', paseo: 'Paseo',
    restaurante: 'Restaurante', comida: 'Comida', cena: 'Cena', cine: 'Cine', boliche: 'Boliche',
    museo: 'Museo', bar: 'Bar', entretenimiento: 'Entretenimiento', parque: 'Parque', biblioteca: 'Biblioteca',
    cultura: 'Cultura', centro_historico: 'Centro histórico', sitio_historico: 'Sitio histórico',
    actividad: 'Actividad', actividad_social: 'Actividad social', actividad_infantil: 'Actividad infantil',
    recreacion: 'Recreación', comida_saludable: 'Comida saludable', actividad_fisica: 'Actividad física'
  }[role] || role.replaceAll('_', ' ');
}

function structureLabel(template) {
  return template.map(roleLabel).join(' + ');
}

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;
  if (!hours) return `${remaining} min`;
  if (!remaining) return `${hours} h`;
  return `${hours} h ${remaining} min`;
}

function generatePlans({ companion, intent, budget, time, distance, startTime = state.startTime }) {
  const candidates = getCandidatePlaces(companion, intent).slice();
  const plansByStructure = new Map();
  const templates = PLAN_TEMPLATES[intent] || [];
  templates.forEach((template) => {
    buildTemplateCombos(template, candidates).forEach((combo) => {
      if (!isPlanValid(combo, companion, intent, budget, time, distance, startTime, template)) return;
      const plan = toPlanObject(combo, companion, intent, budget, time, distance, template);
      const key = template.join('|');
      const current = plansByStructure.get(key);
      if (!current || planQuality(plan) < planQuality(current)) plansByStructure.set(key, plan);
    });
  });

  return [...plansByStructure.values()]
    .filter((plan) => plan && plan.combo && plan.combo.length)
    .sort((a, b) => (a.budgetStatus === 'near') - (b.budgetStatus === 'near') || a.combo.length - b.combo.length);
}

function planQuality(plan) {
  return (plan.budgetStatus === 'near' ? 100000 : 0) + (plan.price?.max || 0) + plan.duration;
}

  function isPlanValid(combo, companion, intent, budget, time, distance, startTime = state.startTime, template = []) {
  if (!combo.length) return false;
  if (!combo.every((place) => placeFitsIntent(place, companion, intent))) return false;
  if (hasForbiddenMix(combo, intent)) return false;

  const totalMinutes = combo.reduce((sum, place) => sum + estimateActivityMinutes(place), 0) + (combo.length - 1) * 20;
  if (totalMinutes > time) return false;

  const budgetCheck = planCostWithinBudget(combo, budget, template);
  if (budgetCheck.ok === false) return false;
  const planStart = createPlanStart(startTime);
  let activityStart = planStart;
  for (const place of combo) {
    const duration = estimateActivityMinutes(place);
    if (!isOpenDuring(place, activityStart, duration)) return false;
    activityStart = new Date(activityStart.getTime() + (duration + 20) * 60000);
  }

  const estimate = estimatePlanDistance(combo);
  if (estimate.distance !== null && estimate.distance > Number(distance)) return false;

  return true;
}

function toPlanObject(combo, companion, intent, budget, time, distance, template = []) {
  const planPrice = planCostWithinBudget(combo, budget, template);
  const estimatedDistance = estimatePlanDistance(combo);
  const totalMinutes = combo.reduce((sum, place) => sum + estimateActivityMinutes(place), 0) + (combo.length - 1) * 20;
  const reasons = [];
  if (combo.some((place) => place.category === 'cafe')) reasons.push('Ambiente cálido');
  if (combo.some((place) => place.category === 'parque')) reasons.push('Aire libre');
  if (combo.some((place) => place.category === 'cultura')) reasons.push('Contexto');
  if (combo.some((place) => place.category === 'cine')) reasons.push('Entretenimiento');
  const alerts = getPlanAlerts(combo);

  return {
    id: `plan-${combo.map((place) => place.id).join('-')}`,
    title: buildPlanTitle(intent, combo),
    structureLabel: structureLabel(template),
    subtitle: PLAN_TITLES[intent] || 'Plan recomendado',
    companion,
    intent,
    template,
    combo,
    price: { min: planPrice.min, max: planPrice.max, type: planPrice.type, label: planPrice.label },
    budgetStatus: planPrice.budgetStatus,
    budgetWarning: planPrice.warning || null,
    duration: totalMinutes,
    distance: estimatedDistance.label,
    distanceValue: estimatedDistance.distance,
    reasons: reasons.slice(0, 3),
    alerts
  };
}

function isAlertActive(alert, now = Date.now()) {
  return alert.status === 'active' && new Date(alert.expiresAt).getTime() > now;
}

function getActiveAlerts(now = Date.now()) {
  return ALERTS.filter((alert) => isAlertActive(alert, now));
}

function alertAffectsPlace(alert, place) {
  const placeText = `${place.id} ${place.name} ${place.address}`.toLowerCase();
  return (alert.affectedPlaces || []).includes(place.id)
    || (alert.affectedAreas || []).some((area) => placeText.includes(String(area).toLowerCase()));
}

function getPlanAlerts(combo) {
  return getActiveAlerts().filter((alert) => combo.some((place) => alertAffectsPlace(alert, place)));
}

function getPlanEntries() {
  const companion = state.companion;
  const intent = state.intent;
  const budget = Number(document.getElementById('planBudget')?.value || state.budget);
  const time = Number(document.getElementById('planTime')?.value || state.time);
  const distance = Number(document.getElementById('planDistance')?.value || state.distance);
  const startTime = document.getElementById('planStart')?.value || state.startTime;
  return generatePlans({ companion, intent, budget, time, distance, startTime });
}

function renderPlans() {
  const container = document.getElementById('planResults');
  if (!container) return;

  const plans = getPlanEntries();
  const withinBudget = plans.filter((plan) => plan.budgetStatus === 'within');
  const alternatives = plans.filter((plan) => plan.budgetStatus === 'near');
  const featuredPlans = withinBudget.length ? withinBudget : alternatives;
  const visiblePlans = state.showAllPlans ? plans : featuredPlans.slice(0, 3);
  container.innerHTML = visiblePlans.map((plan) => {
    const places = plan.combo.map((place) => place.name).join(' → ');
    const smallText = plan.reasons.length ? plan.reasons.join(' · ') : 'Una opción coherente para tu momento';
    const distanceText = plan.distanceValue === null ? '' : `<span>${plan.distance}</span>`;
    const alertText = plan.alerts.length ? '<p class="plan-alert">⚠️ AUREA ALERTA · Este plan puede verse afectado.</p>' : '';
    const budgetText = plan.budgetWarning ? `<p class="plan-alert">⚠️ Alternativa cercana · ${plan.budgetWarning}</p>` : '';
    return `
      <article class="plan-card">
        <div class="plan-card-top">
          <span class="plan-badge">${plan.title}</span>
        </div>
        <h3>${places}</h3>
        <p class="plan-structure">${plan.structureLabel}</p>
        <p>${smallText}</p>
        ${alertText}
        ${budgetText}
        <div class="plan-meta">
          <span>${plan.price.label}</span>
          <span>${formatDuration(plan.duration)}</span>
          ${distanceText}
        </div>
        <button type="button" class="secondary-button" data-plan-open="${plan.id}">Ver plan →</button>
      </article>
    `;
  }).join('') || '<p class="empty-state">No encontramos un plan completo con esos criterios. Ajusta presupuesto, tiempo, distancia o hora.</p>';

  const more = document.getElementById('loadMorePlans');
  if (more) {
    more.hidden = plans.length <= visiblePlans.length;
    more.textContent = state.showAllPlans ? 'Ver menos planes ↑' : 'Ver más planes →';
  }
}

function openPlanModal(planId) {
  const plans = getPlanEntries();
  const plan = plans.find((item) => item.id === planId) || plans[0];
  const dialog = document.getElementById('planDialog');
  if (!dialog || !plan) return;

  const list = plan.combo.map((place) => `
    <li>
      <strong>${place.name}</strong>
      <span>${place.category} · ${place.hoursText}</span>
    </li>
  `).join('');

  const title = `${PLAN_TITLES[plan.intent] || 'Plan recomendado'} · ${COMPANION_LABELS[plan.companion]}`;
  const alertHtml = plan.alerts.length ? `
    <div class="plan-alert detail-alert">
      ⚠️ AUREA ALERTA<br />
      Este plan puede verse afectado.
      <div class="action-grid">
        <button type="button" data-alert-open="${plan.alerts[0].id}">Ver incidencia</button>
        <button type="button" data-plan-alternative>Buscar alternativa</button>
      </div>
    </div>
  ` : '';
  const body = `
    <div class="detail-body detail-plan-body">
      <p class="eyebrow">AUREA PLAN</p>
      <h2>${title}</h2>
      <p>${plan.reasons.join(' · ') || 'Una combinación útil para tu momento.'}</p>
      <div class="detail-meta">
        <span>${plan.price.label}</span>
        <span>${formatDuration(plan.duration)}</span>
        ${plan.distanceValue === null ? '' : `<span>${plan.distance}</span>`}
      </div>
      ${alertHtml}
      <ul class="plan-detail-list">${list}</ul>
      <div class="plan-explanation">
        <h3>Por qué funciona</h3>
        <p>La combinación respeta la intención, el presupuesto y el tiempo disponible para ${COMPANION_LABELS[plan.companion].toLowerCase()} dentro del contexto del plan.</p>
      </div>
      <div class="action-grid">
        <button type="button" data-plan-close>Entendido</button>
      </div>
    </div>
  `;
  document.getElementById('planDialogContent').innerHTML = body;
  dialog.showModal();
}

function renderAlerts() {
  const container = document.getElementById('alertGrid');
  if (!container) return;

  let alerts = getActiveAlerts().filter((alert) => {
    if (state.alertFilter !== 'all' && alert.type !== state.alertFilter) return false;
    return true;
  });

  if (state.nearbyOnly) {
    alerts = alerts.filter((alert) => /Tecnológico|Centro|Parque Central|Zona sur/i.test(alert.location));
  }

  const renderCard = (alert) => `
    <article class="alert-card severity-${alert.severity}" data-alert-detail="${alert.id}">
      <div class="alert-card-head">
        <span class="alert-icon">${getAlertIcon(alert.type)}</span>
        <span class="severity-dot">${alert.severity}</span>
        <time>${formatRelativeTime(alert.createdAt)}</time>
      </div>
      <p class="alert-type">${alert.type.replace('_', ' ')} <span>· DEMO</span></p>
      <h3>${alert.title}</h3>
      <p>${alert.description}</p>
      <div class="alert-location">⌖ ${alert.location}</div>
      <div class="alert-foot">
        <small>Fuente: ${alert.source}</small>
        <button type="button" data-alert-open="${alert.id}">Ver</button>
      </div>
    </article>
  `;
  const cards = alerts.slice(0, 3).map(renderCard).join('');
  container.innerHTML = cards || '<p class="empty-alerts">No hay alertas activas para este filtro.</p>';

  const allGrid = document.getElementById('allAlertGrid');
  if (allGrid) allGrid.innerHTML = alerts.map(renderCard).join('') || '<p class="empty-alerts">No hay alertas activas para este filtro.</p>';

  const count = document.getElementById('alertCount');
  if (count) count.textContent = `${getActiveAlerts().length} activas`;
}

function getAlertIcon(type) {
  return {
    accident: '⚠️',
    road_closure: '🚧',
    traffic: '⇄',
    flooding: '⛈️',
    climate: '☁️',
    construction: '🧱',
    event: '✦',
    venue_closed: '×',
    schedule_change: '◷',
    emergency: '!',
    crowd: '◎',
    other: '•'
  }[type] || '•';
}

function formatRelativeTime(value) {
  const diff = Math.max(0, Date.now() - new Date(value).getTime());
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return 'Ahora';
  if (minutes < 60) return `Hace ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  return `Hace ${hours} h`;
}

function renderCategories() {
  const container = document.getElementById('categories');
  if (!container) return;

  const categories = ['Todos', ...new Set(businesses.map((place) => place.category))];
  const icons = { Todos: '✦', parque: '🌳', cafe: '☕', comida: '🍽️', cultura: '🎨', compras: '🛍️', cine: '🎬', biblioteca: '📚', recreacion: '🏊', turismo: '✦', historia: '🏛️', naturaleza: '🏜️', familiar: '👨‍👩‍👧', entretenimiento: '🎉', deporte: '🏋️', vida_nocturna: '🍸' };

  container.innerHTML = categories.map((category) => `
    <button class="category ${category === 'Todos' ? 'selected' : ''}" data-category="${category}">
      <span>${icons[category] || '✦'}</span>${category}
    </button>
  `).join('');
}

function renderExplore() {
  const search = document.getElementById('searchInput');
  const count = document.getElementById('resultCount');
  const grid = document.getElementById('businessGrid');
  if (!search || !count || !grid) return;

  const category = document.body.dataset.exploreCategory || 'Todos';
  const query = normalizeSearchText(search.value);
  const visible = businesses.filter((place) => {
    const categoryFits = category === 'Todos' || place.category === category;
    const haystack = [place.name, place.category, ...(place.tags || []), ...(place.capabilities || []), ...(place.activities || []), place.address]
      .map(normalizeSearchText)
      .join(' ');
    const queryFits = !query || haystack.includes(query);
    return categoryFits && queryFits;
  });

  count.textContent = `${visible.length} lugares`;
  grid.innerHTML = visible.slice(0, 24).map((place) => `
    <article class="business-card" data-place-id="${place.id}">
      <div class="business-image" style="background:${place.color || '#f3ead9'};">
        <span class="badge">${place.category}</span>
        <button class="favorite ${state.favorites.has(place.id) ? 'liked' : ''}" data-favorite="${place.id}" type="button">${state.favorites.has(place.id) ? '♥' : '♡'}</button>
        <span class="emoji">${place.category === 'cafe' ? '☕' : place.category === 'parque' ? '🌳' : place.category === 'cine' ? '🎬' : place.category === 'biblioteca' ? '📚' : place.category === 'comida' ? '🍽️' : '✦'}</span>
      </div>
      <div class="card-info">
        <h3>${place.name}</h3>
        <p>${place.address}</p>
        <div class="card-foot">
          <span>⌖ ${place.locationStatus === 'needs_coordinates' ? 'Distancia no disponible' : 'Mapa'}</span>
          <span class="rating">${place.rating ? `★ ${place.rating}` : 'Sin rating'}</span>
        </div>
      </div>
    </article>
  `).join('') || '<p class="empty-state">No hay lugares para esta búsqueda.</p>';
}

function normalizeSearchText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\b(es|s)$/, '');
}

const SEARCH_EQUIVALENTS = {
  cafe: ['cafe', 'cafeteria', 'coffee', 'coffee shop'],
  cine: ['cine', 'cinema', 'pelicula', 'peliculas'],
  gimnasio: ['gimnasio', 'gym', 'fitness', 'entrenamiento'],
  parque: ['parque', 'paseo', 'aire libre', 'recreacion'],
  museo: ['museo', 'cultura', 'exposicion', 'historico', 'historica'],
  boliche: ['boliche', 'bowling', 'juegos'],
  comida: ['comida', 'comer', 'restaurante', 'cena'],
  estudiar: ['estudiar', 'estudio', 'biblioteca', 'leer']
};

function searchTerms(query) {
  const normalizedQuery = normalizeSearchText(query);
  const terms = new Set([normalizedQuery]);
  Object.entries(SEARCH_EQUIVALENTS).forEach(([canonical, equivalents]) => {
    if (equivalents.some((term) => normalizeSearchText(term) === normalizedQuery)) {
      equivalents.forEach((term) => terms.add(normalizeSearchText(term)));
      terms.add(canonical);
    }
  });
  return [...terms].filter(Boolean);
}

function semanticSearchAllowed(canonical, place) {
  const fields = [...(place.capabilities || []), ...(place.activities || []), ...(place.tags || [])].map(normalizeSearchText);
  const category = normalizeSearchText(place.category);
  const has = (...values) => values.some((value) => fields.includes(normalizeSearchText(value)));
  if (canonical === 'cafe') return category === 'cafe' || has('cafe', 'cafeteria', 'coffee');
  if (canonical === 'cine') return category === 'cine' || has('cine', 'cinema', 'peliculas');
  if (canonical === 'gimnasio') return category === 'deporte' || has('gimnasio', 'gym', 'fitness', 'entrenamiento');
  if (canonical === 'parque') return ['parque', 'naturaleza', 'recreacion', 'familiar'].includes(category) || has('parque', 'paseo', 'aire_libre', 'recreacion');
  if (canonical === 'museo') return ['cultura', 'historia'].includes(category) || has('museo', 'exposicion', 'sitio_historico', 'centro_historico');
  if (canonical === 'boliche') return has('boliche', 'bowling', 'juegos');
  if (canonical === 'comida') return ['comida', 'cafe', 'vida_nocturna'].includes(category) || has('comida', 'comer', 'restaurante', 'cena');
  if (canonical === 'estudiar') return category === 'biblioteca' || has('estudiar', 'estudio', 'leer', 'cafe_estudio');
  return false;
}

function searchIcon(place) {
  return {
    cafe: '☕', comida: '🍽️', cine: '🎬', parque: '🌳', cultura: '🎨', historia: '🏛️',
    biblioteca: '📚', entretenimiento: '🎉', recreacion: '🏊', vida_nocturna: '🍸', deporte: '🏋️'
  }[place.category] || '✦';
}

function searchPlaces(query) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return [];
  const terms = searchTerms(normalizedQuery);
  const scored = businesses.map((place) => {
    const fields = {
      name: [place.name],
      category: [place.category],
      capability: place.capabilities || [],
      activity: place.activities || [],
      tag: place.tags || []
    };
    let bestRank = 99;
    const canonical = Object.entries(SEARCH_EQUIVALENTS).find(([, equivalents]) => equivalents.some((term) => normalizeSearchText(term) === normalizedQuery))?.[0];
    terms.forEach((term) => {
      const semanticTerm = term !== normalizedQuery;
      if (semanticTerm && canonical && !semanticSearchAllowed(canonical, place)) return;
      const scoreField = (values, rank, exactRank = rank) => values.forEach((value) => {
        const normalizedValue = normalizeSearchText(value);
        if (normalizedValue === term) bestRank = Math.min(bestRank, exactRank);
        else if (normalizedValue.includes(term)) bestRank = Math.min(bestRank, rank);
      });
      scoreField(fields.name, 0, 0);
      scoreField(fields.category, 1, 1);
      scoreField(fields.capability, 2, 2);
      scoreField(fields.activity, 3, 3);
      scoreField(fields.tag, 4, 4);
    });
    return { place, rank: bestRank };
  }).filter((result) => result.rank < 99);
  return [...new Map(scored.map((result) => [result.place.id, result])).values()]
    .sort((a, b) => a.rank - b.rank || a.place.name.localeCompare(b.place.name, 'es'))
    .map((result) => result.place);
}

function relevantSearchActivity(place, query) {
  const terms = searchTerms(query);
  const values = [...(place.capabilities || []), ...(place.activities || []), ...(place.tags || []), place.category];
  return values.find((value) => terms.some((term) => normalizeSearchText(value).includes(term))) || place.category;
}

function renderSearchResults(query, showAll = false) {
  const panel = document.getElementById('searchResults');
  if (!panel) return;
  const trimmedQuery = String(query || '').trim();
  if (!trimmedQuery) {
    panel.hidden = true;
    panel.innerHTML = '';
    return;
  }
  const results = searchPlaces(trimmedQuery);
  const visibleResults = showAll ? results : results.slice(0, 6);
  panel.hidden = false;
  panel.classList.toggle('expanded', showAll);
  panel.innerHTML = visibleResults.map((place) => `
    <button type="button" class="search-result" role="option" data-search-place="${place.id}">
      <span class="search-result-icon">${searchIcon(place)}</span>
      <span><strong>${place.name}</strong><small>${place.category} · ${relevantSearchActivity(place, trimmedQuery)}</small></span>
    </button>
  `).join('') || `<div class="search-empty"><strong>No encontramos resultados para “${trimmedQuery}”.</strong><small>Prueba con otra búsqueda.</small></div>`;
  if (results.length > 6 && !showAll) {
    panel.insertAdjacentHTML('beforeend', `<button type="button" class="search-all" data-search-all>Ver todos los resultados (${results.length})</button>`);
  }
}

function renderReviews(place) {
  const list = state.reviews[place.id] || [];
  if (!list.length) return '<p class="empty-review">Sé la primera persona en crear una reseña.</p>';
  return list.slice(0, 3).map((review) => `
    <article>
      <b>${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</b>
      <p>${review.comment}</p>
      <small>Reseña enviada desde AUREA</small>
    </article>
  `).join('');
}

function openBusiness(id) {
  const place = businesses.find((value) => value.id === id);
  const dialog = document.getElementById('businessDialog');
  if (!dialog || !place) return;

  const priceText = place.price && place.price.type === 'free' ? 'Gratis' : (place.price && place.price.type !== 'unknown' ? `$${place.price.min}–$${place.price.max}` : 'Precio no verificado');
  const reviewHtml = renderReviews(place);
  document.getElementById('dialogContent').innerHTML = `
    <div class="detail-hero" style="background:#f3ead9">
      <span>${place.category === 'cafe' ? '☕' : place.category === 'parque' ? '🌳' : place.category === 'cine' ? '🎬' : place.category === 'biblioteca' ? '📚' : '✦'}</span>
    </div>
    <div class="detail-body">
      <p class="eyebrow">${place.category.toUpperCase()} · CIUDAD JUÁREZ</p>
      <h2>${place.name}</h2>
      <p>${place.address}</p>
      <div class="detail-meta">
        <span>${place.hoursText || 'Horario por consultar'}</span>
        <span>${priceText}</span>
        <span>rating: ${place.rating ?? 'n/a'}</span>
      </div>
      <div class="action-grid">
        <a class="route-button" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' Ciudad Juárez')}" target="_blank" rel="noopener">⌖ Ver ruta</a>
        <button type="button" data-place-favorite="${place.id}">${state.favorites.has(place.id) ? 'Quitar favorito' : 'Guardar favorito'}</button>
        <button type="button" class="dark-action" data-place-order="${place.id}">Solicitar</button>
      </div>
      <div class="reviews">
        <div class="reviews-head">
          <h3>Reseñas</h3>
          <span>${place.rating ? `★ ${place.rating}` : 'Sin rating'}</span>
        </div>
        ${reviewHtml}
        <form id="reviewForm" data-id="${place.id}">
          <label>
            Tu experiencia
            <select name="stars">
              <option value="5">5 estrellas</option>
              <option value="4">4 estrellas</option>
              <option value="3">3 estrellas</option>
              <option value="2">2 estrellas</option>
              <option value="1">1 estrella</option>
            </select>
          </label>
          <textarea name="comment" maxlength="180" placeholder="Cuéntanos qué te pareció"></textarea>
          <button type="submit">Publicar reseña</button>
        </form>
      </div>
    </div>
  `;
  dialog.showModal();
}

function openAlert(id) {
  const alert = ALERTS.find((item) => item.id === id);
  const dialog = document.getElementById('alertDialog');
  if (!dialog || !alert || !isAlertActive(alert)) return;

  document.getElementById('alertDialogContent').innerHTML = `
    <div class="detail-body">
      <p class="eyebrow">AUREA AHORA · DEMO</p>
      <h2>${alert.title}</h2>
      <p>${alert.description}</p>
      <div class="detail-meta">
        <span>${alert.type}</span>
        <span>Severidad: ${alert.severity}</span>
        <span>Vence: ${new Date(alert.expiresAt).toLocaleString('es-MX')}</span>
      </div>
      <p><strong>Recomendación:</strong> ${alert.recommendedAction}</p>
      <div class="action-grid">
        <button type="button" data-alert-close>Entendido</button>
      </div>
    </div>
  `;
  dialog.showModal();
}

function toast(message) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('show'), 2600);
}

function openNotice(title, description) {
  const dialog = document.getElementById('noticeDialog');
  const content = document.getElementById('noticeContent');
  if (!dialog || !content) return;
  content.innerHTML = `
    <div class="notice-box">✦</div>
    <h2>${title}</h2>
    <p>${description}</p>
    <button class="primary-button" data-notice-close type="button">Entendido</button>
  `;
  dialog.showModal();
}

function requestInteraction(type, id) {
  const place = businesses.find((item) => item.id === id);
  const dialog = document.getElementById('noticeDialog');
  const content = document.getElementById('noticeContent');
  if (!dialog || !content || !place) return;

  content.innerHTML = `
    <div class="notice-box">✦</div>
    <h2>${type === 'order' ? 'Tu pedido' : 'Tu reserva'}</h2>
    <p>Enviar solicitud para <strong>${place.name}</strong>.</p>
    <form id="interactionForm" data-type="${type}" data-id="${id}">
      <label>Nombre<input name="name" required placeholder="Tu nombre" /></label>
      <label>${type === 'order' ? 'Qué te gustaría pedir' : 'Fecha y hora'}<input name="detail" required ${type === 'order' ? 'placeholder="Ej. Café y pastel"' : 'type="datetime-local"'} /></label>
      <label>Nota (opcional)<input name="note" placeholder="Alguna indicación" /></label>
      <button class="primary-button" type="submit">Enviar solicitud</button>
    </form>
  `;
  dialog.showModal();
}

function attachEvents() {
  document.getElementById('planCompanion')?.addEventListener('change', (event) => {
    state.companion = event.target.value;
    state.intent = getEffectiveIntentOptions(state.companion)[0].id;
    updateIntentOptions();
    renderPlans();
  });

  document.getElementById('planIntent')?.addEventListener('change', (event) => {
    state.intent = event.target.value;
    renderPlans();
  });

  document.getElementById('planForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    state.budget = Number(document.getElementById('planBudget').value || 300);
    state.time = Number(document.getElementById('planTime').value || 180);
    state.distance = Number(document.getElementById('planDistance').value || 5);
    state.startTime = document.getElementById('planStart').value || '18:00';
    state.showAllPlans = false;
    renderPlans();
    toast('Tu plan se actualizó');
  });

  document.getElementById('loadMorePlans')?.addEventListener('click', () => {
    state.showAllPlans = !state.showAllPlans;
    renderPlans();
  });

  document.getElementById('planResults')?.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-plan-open]');
    if (trigger) openPlanModal(trigger.dataset.planOpen);
  });

  document.getElementById('planDialog')?.addEventListener('click', (event) => {
    if (event.target.closest('[data-plan-close]')) event.target.closest('dialog').close();
    if (event.target.closest('[data-plan-alternative]')) {
      event.target.closest('dialog').close();
      openNotice('Buscar alternativa', 'AUREA puede armar otra opción si cambias la hora, la distancia o el tipo de plan.');
    }
  });

  document.getElementById('categories')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    const category = button.dataset.category;
    document.body.dataset.exploreCategory = category;
    renderCategories();
    renderExplore();
  });

  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const focusSearch = () => {
    searchInput?.focus();
    searchInput?.select();
  };

  searchInput?.addEventListener('input', (event) => {
    renderExplore();
    renderSearchResults(event.target.value);
  });

  searchInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      searchResults.hidden = true;
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      const first = searchPlaces(event.target.value)[0];
      if (first) {
        searchResults.hidden = true;
        openBusiness(first.id);
      } else {
        renderSearchResults(event.target.value);
      }
    }
  });

  searchResults?.addEventListener('click', (event) => {
    const allResults = event.target.closest('[data-search-all]');
    if (allResults) {
      renderSearchResults(searchInput.value, true);
      return;
    }
    const result = event.target.closest('[data-search-place]');
    if (!result) return;
    searchResults.hidden = true;
    openBusiness(result.dataset.searchPlace);
  });

  document.getElementById('searchShortcut')?.addEventListener('click', focusSearch);
  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      focusSearch();
    }
  });

  document.getElementById('businessGrid')?.addEventListener('click', (event) => {
    const favorite = event.target.closest('[data-favorite]');
    if (favorite) {
      const id = favorite.dataset.favorite;
      if (state.favorites.has(id)) state.favorites.delete(id); else state.favorites.add(id);
      saveFavorites();
      renderExplore();
      toast(state.favorites.has(id) ? 'Guardado en favoritos' : 'Quitado de favoritos');
      return;
    }

    const card = event.target.closest('[data-place-id]');
    if (card) openBusiness(card.dataset.placeId);
  });

  document.getElementById('dialogContent')?.addEventListener('click', (event) => {
    const favoriteButton = event.target.closest('[data-place-favorite]');
    if (favoriteButton) {
      const id = favoriteButton.dataset.placeFavorite;
      if (state.favorites.has(id)) state.favorites.delete(id); else state.favorites.add(id);
      saveFavorites();
      openBusiness(id);
      toast(state.favorites.has(id) ? 'Guardado en favoritos' : 'Quitado de favoritos');
      return;
    }

    const orderButton = event.target.closest('[data-place-order]');
    if (orderButton) requestInteraction('order', orderButton.dataset.placeOrder);
  });

  document.getElementById('noticeDialog')?.addEventListener('click', (event) => {
    if (event.target.closest('[data-notice-close]')) event.target.closest('dialog').close();
  });

  document.addEventListener('click', (event) => {
    const closeTarget = event.target.closest('.close-dialog');
    if (closeTarget) closeTarget.closest('dialog')?.close();

    const alertOpen = event.target.closest('[data-alert-open]');
    if (alertOpen) openAlert(alertOpen.dataset.alertOpen);

    const alertDetail = event.target.closest('[data-alert-detail]');
    if (alertDetail) openAlert(alertDetail.dataset.alertDetail);

    const alertClose = event.target.closest('[data-alert-close]');
    if (alertClose) alertClose.closest('dialog')?.close();
  });

  document.addEventListener('submit', (event) => {
    if (event.target.id === 'reviewForm') {
      event.preventDefault();
      const form = event.target;
      const id = form.dataset.id;
      const stars = Number(form.stars.value || 5);
      const comment = form.comment.value.trim();
      if (!comment) return;
      state.reviews[id] = state.reviews[id] || [];
      state.reviews[id].unshift({ stars, comment });
      saveReviews();
      openBusiness(id);
      toast('Reseña guardada');
    }

    if (event.target.id === 'interactionForm') {
      event.preventDefault();
      const form = event.target;
      const payload = {
        type: form.dataset.type,
        businessId: form.dataset.id,
        name: form.name.value,
        detail: form.detail.value,
        note: form.note.value,
        createdAt: new Date().toISOString()
      };
      const requests = JSON.parse(localStorage.getItem('aurea-requests') || '[]');
      requests.push(payload);
      localStorage.setItem('aurea-requests', JSON.stringify(requests));
      document.getElementById('noticeDialog').close();
      toast('Solicitud enviada');
    }
  });

  document.getElementById('musicToggle')?.addEventListener('click', () => {
    const audio = document.getElementById('aureaAudio');
    const toggle = document.getElementById('musicToggle');
    if (!audio || !toggle) return;
    if (audio.paused) {
      audio.play().then(() => {
        toggle.classList.add('playing');
        toggle.setAttribute('aria-pressed', 'true');
        toast('AUREA Radio activada');
      }).catch(() => toast('No se pudo activar el audio'));
    } else {
      audio.pause();
      toggle.classList.remove('playing');
      toggle.setAttribute('aria-pressed', 'false');
      toast('AUREA Radio apagada');
    }
  });

  document.getElementById('openProfile')?.addEventListener('click', () => openNotice('Tu perfil', 'AUREA conserva tus favoritos, reseñas y solicitudes locales en este dispositivo.'));
  document.getElementById('explorePromo')?.addEventListener('click', () => openNotice('AUREA Pass — Próximamente', 'Estamos preparando esta experiencia de beneficios.'));

  document.getElementById('viewAllAlerts')?.addEventListener('click', () => {
    const all = document.getElementById('allAlertsDialog');
    if (all) all.showModal();
  });

  document.getElementById('alertFilters')?.addEventListener('click', (event) => {
    const filter = event.target.closest('[data-alert-filter]');
    if (!filter) return;
    state.alertFilter = filter.dataset.alertFilter;
    document.querySelectorAll('[data-alert-filter]').forEach((button) => button.classList.toggle('selected', button === filter));
    renderAlerts();
  });

  document.querySelector('[data-alert-nearby]')?.addEventListener('click', (event) => {
    state.nearbyOnly = !state.nearbyOnly;
    event.target.classList.toggle('selected', state.nearbyOnly);
    renderAlerts();
  });
}

function init() {
  document.body.dataset.exploreCategory = 'Todos';
  state.intent = getEffectiveIntentOptions(state.companion)[0].id;
  updateIntentOptions();
  renderCategories();
  renderExplore();
  renderPlans();
  renderAlerts();
  attachEvents();
}

window.addEventListener('DOMContentLoaded', init);