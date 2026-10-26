// Comprehensive dataset of Tupiza businesses with exact image filenames
const businessesData = [
    {
        id: 1,
        name: "La Casa Del Pastel",
        category: "Pastelerías y Heladerías",
        location: "Junín S/N",
        schedule: "Lunes a sábado de 9:00 AM a 8:00 PM (Domingo cerrado)",
        contact: "74203692",
        image: "imagenes/lacasadelpastel.jpg"
    },
    {
        id: 2,
        name: 'Heladería "WOLFY\'S"',
        category: "Pastelerías y Heladerías",
        location: "Calle Cochabamba, casi esquina",
        schedule: "Martes a domingo de 10:30 AM a 6:30 PM (Lunes cerrado)",
        contact: "72432287",
        image: "imagenes/wolfys.jpg"
    },
    {
        id: 3,
        name: "Heladería mi lugar favorito",
        category: "Pastelerías y Heladerías",
        location: "Plaza Principal",
        schedule: "Lunes a domingo de 10:00 AM a 8:00 PM",
        contact: "68404431",
        image: "imagenes/milugarfavorito.jpg"
    },
    {
        id: 4,
        name: "Heladería Cramer",
        category: "Pastelerías y Heladerías",
        location: "Calle Avaroa",
        schedule: "Horario regular disponible en local",
        contact: "No especificado",
        image: "imagenes/heladeriacramer.jpg"
    },
    {
        id: 5,
        name: "MARCELINA RESTO BAR",
        category: "Restaurantes",
        location: "Tupiza Centro",
        schedule: "Lunes a sábado 12:00-14:30 y 17:00-22:00; Domingo 18:00-21:30",
        contact: "72942633",
        image: "imagenes/marcelinarestobar.jpg"
    },
    {
        id: 6,
        name: "Oishi Sushi",
        category: "Restaurantes",
        location: "Región 3, Tupiza",
        schedule: "Lunes a sábado de 5:00 PM a 10:00 PM (Domingo cerrado)",
        contact: "76704677",
        image: "imagenes/oishisushi.jpg"
    },
    {
        id: 7,
        name: "Pollos Valery",
        category: "Restaurantes",
        location: "Tupiza",
        schedule: "Lunes a sábado de 5:00 PM a 10:00 PM (Domingo cerrado)",
        contact: "No especificado",
        image: "imagenes/pollosvalery.jpg"
    },
    {
        id: 8,
        name: "Restaurant La Torre Caffe Pizzeria",
        category: "Restaurantes",
        location: "Calle Florida 93",
        schedule: "Lunes a sábado 15:00-22:00; Domingos 17:00-22:00",
        contact: "70193823",
        image: "imagenes/latorre.jpg"
    },
    {
        id: 9,
        name: "Restaurante Pollos Marianita",
        category: "Restaurantes",
        location: "Calle Florida 93",
        schedule: "Atención diurna y nocturna",
        contact: "No especificado",
        image: "imagenes/pollosmarianita.jpg"
    },
    {
        id: 10,
        name: "Ollita y Barro, Restaurante Tupiza",
        category: "Restaurantes",
        location: "Av. Pedro Arraya",
        schedule: "Temporalmente cerrado",
        contact: "67904682",
        image: "imagenes/ollitaybarro.jpg"
    },
    {
        id: 11,
        name: "Vinoteca El Origen",
        category: "Cafeterías y Comida Local",
        location: "Av. Pedro Arraya 492",
        schedule: "Martes a domingo de 4:00 PM a 11:00 PM (Lunes cerrado)",
        contact: "72526746",
        image: "imagenes/vinotecaelorigen.jpg"
    },
    {
        id: 12,
        name: "DULCE TENTACIÓN",
        category: "Cafeterías y Comida Local",
        location: "Av. Regimiento Chichas",
        schedule: "Lunes a viernes 8:00-20:00; Sábados 7:00-20:00; Domingos 9:30-12:00",
        contact: "60477028",
        image: "imagenes/dulcetentacion.jpg"
    },
    {
        id: 13,
        name: "Tamales doña Walita",
        category: "Cafeterías y Comida Local",
        location: "Av. Regimiento Chichas",
        schedule: "Lunes a domingo de 7:00 AM a 2:00 PM",
        contact: "79447013",
        image: "imagenes/tamalesdonawalita.jpg"
    },
    {
        id: 14,
        name: "Los Sauces Hotel V.S. TUPIZA",
        category: "Alojamientos",
        location: "Av. Sta. Cruz 334",
        schedule: "Abierto todos los días",
        contact: "64679993",
        image: "imagenes/lossauces.jpg"
    },
    {
        id: 15,
        name: "POSADA EL ABORIGEN",
        category: "Alojamientos",
        location: "Tupiza Centro",
        schedule: "Abierto 24 horas todos los días",
        contact: "72942633",
        image: "imagenes/posadaelaborigen.jpg"
    },
    {
        id: 16,
        name: "Hospedaje EL RANCHO",
        category: "Alojamientos",
        location: "Av. Pedro Arraya",
        schedule: "Atención permanente",
        contact: "No especificado",
        image: "imagenes/hospedajeelrancho.jpg"
    },
    {
        id: 17,
        name: "ÁLVAREZ HOSTAL STA. ROSA DE LIMA",
        category: "Alojamientos",
        location: "Av. Pedro Arraya",
        schedule: "Abierto 24 horas todos los días",
        contact: "71811931",
        image: "imagenes/hostalstarosa.jpg"
    },
    {
        id: 18,
        name: "El Grano de Oro Hotel Tupiza",
        category: "Alojamientos",
        location: "Av. Pedro Arraya",
        schedule: "Abierto 24 horas todos los días",
        contact: "72208602",
        image: "imagenes/granodeoro.jpg"
    },
    {
        id: 19,
        name: "HOSTAL VALLE HERMOSO 2",
        category: "Alojamientos",
        location: "Av. Pedro Arraya 505",
        schedule: "Atención todos los días",
        contact: "69650309",
        image: "imagenes/vallehermoso2.jpg"
    },
    {
        id: 20,
        name: "TUPIZAECO TRAVEL TOURS",
        category: "Agencias de Viaje",
        location: "Av. Pedro Arraya",
        schedule: "Lunes a domingo 7:30-12:00 y 15:00-18:30 (Sáb/Dom horario especial)",
        contact: "73850846",
        image: "imagenes/tupizaecotravel.jpg"
    },
    {
        id: 21,
        name: "Apache Aventure",
        category: "Agencias de Viaje",
        location: "Av. Pedro Arraya",
        schedule: "Lunes a sábado 9:30-18:00; Domingos 8:00-19:30",
        contact: "71836829",
        image: "imagenes/apacheaventure.jpg"
    },
    {
        id: 22,
        name: "Gil Duran market GAMT",
        category: "Mercados y Abarrotes",
        location: "Tupiza Municipal",
        schedule: "Lunes a domingo de 7:00 AM a 7:00 PM",
        contact: "No especificado",
        image: "imagenes/gilduranmarket.jpg"
    },
    {
        id: 23,
        name: "La Tuly Micromercado",
        category: "Mercados y Abarrotes",
        location: "Calle Avaroa # 154",
        schedule: "Lunes a sábado 8:00-22:00; Domingos 10:00-19:00",
        contact: "76288099",
        image: "imagenes/latulymicromercado.jpg"
    },
    {
        id: 24,
        name: "San Juan de Dios",
        category: "Farmacias y Salud",
        location: "Tupiza Centro Médico",
        schedule: "Lunes a sábado de 8:30 AM a 7:00 PM (Domingo cerrado)",
        contact: "No especificado",
        image: "imagenes/sanjuandedios.jpg"
    },
    {
        id: 25,
        name: "Farmasol",
        category: "Farmacias y Salud",
        location: "Av. Sta. Cruz 261",
        schedule: "Atención farmacéutica regular",
        contact: "No especificado",
        image: "imagenes/farmasol.jpg"
    },
    {
        id: 26,
        name: "Santa Ines",
        category: "Farmacias y Salud",
        location: "Suipacha 3",
        schedule: "Horario de farmacia local",
        contact: "No especificado",
        image: "imagenes/santaines.jpg"
    },
    {
        id: 27,
        name: "Artesanías Regionales Villegas",
        category: "Artesanías",
        location: "Av. Regimiento Chichas",
        schedule: "Lunes a sábado (Domingo cerrado)",
        contact: "74238293",
        image: "imagenes/artesaniasvillegas.jpg"
    },
    {
        id: 28,
        name: "Tradición chichena",
        category: "Artesanías",
        location: "Av. Regimiento Chichas",
        schedule: "Viernes a domingo de 9:00 AM a 6:00 PM (Lun-Jue cerrado)",
        contact: "65469210",
        image: "imagenes/tradicionchichena.jpg"
    },
    {
        id: 29,
        name: "Comercial Cesar",
        category: "Artesanías",
        location: "Av. Regimiento Chichas",
        schedule: "Abierto 24 horas (Lunes a sábado, domingo cerrado)",
        contact: "71752033",
        image: "imagenes/comercialcesar.jpg"
    },
    {
        id: 30,
        name: "Artesanias Jhonny",
        category: "Artesanías",
        location: "Av. Regimiento Chichas",
        schedule: "Lunes a domingo de 7:00 AM a 9:00 PM",
        contact: "73322430",
        image: "imagenes/artesaniasjhonny.jpg"
    },
    {
        id: 31,
        name: "Luna Sport",
        category: "Comercio y Tiendas",
        location: "Av. Chichas",
        schedule: "Lunes a viernes 8:30-21:00; Sábados 8:30-00:00",
        contact: "6943207",
        image: "imagenes/lunasport.jpg"
    },
    {
        id: 32,
        name: "LINDA CLOTHING EXPRESS",
        category: "Comercio y Tiendas",
        location: "Av. Sta. Cruz",
        schedule: "Lunes a domingo 10:00-13:00 y 15:00-20:00",
        contact: "73268090",
        image: "imagenes/lindaclothing.jpg"
    },
    {
        id: 33,
        name: "GLADYMAR (bisutería-cosmeticos)",
        category: "Comercio y Tiendas",
        location: "Tupiza Centro",
        schedule: "Lunes a sábado abierto 24 horas; Domingo 10:00-12:00",
        contact: "No especificado",
        image: "imagenes/gladymar.jpg"
    },
    {
        id: 34,
        name: "TIGO MONEY. MANACO.",
        category: "Servicios Financieros",
        location: "Manaco Multicentro Tupiza, C. Florida 93",
        schedule: "Lunes a viernes 8:30-12:30 y 15:00-19:30; Sábados 8:30-14:00",
        contact: "No especificado",
        image: "imagenes/tigomoney.jpg"
    },
    {
        id: 35,
        name: 'Meeting Room "La Colonia"',
        category: "Servicios Financieros",
        location: "Suipacha, Tupiza",
        schedule: "Atención bajo reserva y eventos",
        contact: "78512703",
        image: "imagenes/meetingroom.jpg"
    }
];

const categories = [...new Set(businessesData.map(b => b.category))];

document.addEventListener('DOMContentLoaded', () => {
    buildDropdowns();
    renderServices(null);
    renderLocationList();
    renderHorarios(null);
    renderContactos(null);
});

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.getElementById('tab-' + tabId).classList.remove('hidden');

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-pastelPurple-100', 'text-pastelPurple-700');
        btn.classList.add('text-gray-600');
    });
    const activeBtn = document.getElementById('nav-' + tabId);
    if (activeBtn) {
        activeBtn.classList.remove('text-gray-600');
        activeBtn.classList.add('bg-pastelPurple-100', 'text-pastelPurple-700');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function buildDropdowns() {
    const catList = document.getElementById('dropdown-categories-list');
    const locList = document.getElementById('dropdown-location-list');
    const horList = document.getElementById('dropdown-horarios-list');
    const conList = document.getElementById('dropdown-contactos-list');

    catList.innerHTML = `<a href="#" onclick="switchTab('servicios'); renderServices(null);" class="block px-4 py-2 text-sm text-gray-700 hover:bg-pastelPurple-50 hover:text-pastelPurple-700 font-medium">Todas las categorías</a>`;
    locList.innerHTML = `<a href="#" onclick="switchTab('ubicacion')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-pastelPurple-50 hover:text-pastelPurple-700 font-medium">Mapa General Tupiza</a>`;
    horList.innerHTML = `<a href="#" onclick="switchTab('horarios'); renderHorarios(null);" class="block px-4 py-2 text-sm text-gray-700 hover:bg-pastelPurple-50 hover:text-pastelPurple-700 font-medium">Todos los Horarios</a>`;
    conList.innerHTML = `<a href="#" onclick="switchTab('contactos'); renderContactos(null);" class="block px-4 py-2 text-sm text-gray-700 hover:bg-pastelPurple-50 hover:text-pastelPurple-700 font-medium">Todos los Contactos</a>`;

    categories.forEach(cat => {
        catList.innerHTML += `<a href="#" onclick="switchTab('servicios'); renderServices('${cat}')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-pastelPurple-50 hover:text-pastelPurple-700">${cat}</a>`;
        locList.innerHTML += `<a href="#" onclick="switchTab('ubicacion')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-pastelPurple-50 hover:text-pastelPurple-700">${cat}</a>`;
        horList.innerHTML += `<a href="#" onclick="switchTab('horarios'); renderHorarios('${cat}')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-pastelPurple-50 hover:text-pastelPurple-700">${cat}</a>`;
        conList.innerHTML += `<a href="#" onclick="switchTab('contactos'); renderContactos('${cat}')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-pastelPurple-50 hover:text-pastelPurple-700">${cat}</a>`;
    });
}

function renderServices(selectedCat) {
    const filterBar = document.getElementById('category-filter-bar');
    const grid = document.getElementById('business-grid');

    let filterHtml = `<button onclick="renderServices(null)" class="px-4 py-2 rounded-full text-sm font-semibold transition-all ${!selectedCat ? 'bg-pastelPurple-700 text-white shadow-md' : 'bg-white text-gray-600 border border-pastelPurple-200 hover:bg-pastelPurple-50'}">Todos</button>`;
    categories.forEach(cat => {
        const isActive = selectedCat === cat;
        filterHtml += `<button onclick="renderServices('${cat}')" class="px-4 py-2 rounded-full text-sm font-semibold transition-all ${isActive ? 'bg-pastelPurple-700 text-white shadow-md' : 'bg-white text-gray-600 border border-pastelPurple-200 hover:bg-pastelPurple-50'}">${cat}</button>`;
    });
    filterBar.innerHTML = filterHtml;

    const filtered = selectedCat ? businessesData.filter(b => b.category === selectedCat) : businessesData;

    let cardsHtml = '';
    filtered.forEach(b => {
        cardsHtml += `
            <div class="bg-white rounded-3xl shadow-md border border-pastelPurple-100 overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                    <div class="h-48 overflow-hidden relative bg-pastelPurple-100">
                        <img src="${b.image}" alt="${b.name}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/600x400/e9d5ff/6b46c1?text=Comercio+Tupiza'">
                        <span class="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-pastelPurple-800 text-xs font-bold px-3 py-1 rounded-full shadow">${b.category}</span>
                    </div>
                    <div class="p-5">
                        <h3 class="text-lg font-bold text-pastelPurple-900 mb-2">${b.name}</h3>
                        <p class="text-xs text-gray-600 flex items-center mb-1.5"><i class="fa-solid fa-location-dot text-pastelPink-500 mr-2 w-4"></i> ${b.location}</p>
                        <p class="text-xs text-gray-600 flex items-center mb-1.5"><i class="fa-solid fa-clock text-pastelPink-500 mr-2 w-4"></i> ${b.schedule}</p>
                        <p class="text-xs text-gray-600 flex items-center"><i class="fa-solid fa-phone text-pastelPink-500 mr-2 w-4"></i> ${b.contact}</p>
                    </div>
                </div>
                <div class="px-5 pb-5 pt-0">
                    <button onclick="selectLocationOnMap('${b.name}', '${b.location}')" class="w-full bg-pastelPurple-100 hover:bg-pastelPurple-200 text-pastelPurple-800 font-semibold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center space-x-2">
                        <i class="fa-solid fa-map-pin"></i>
                        <span>Ver en Mapa Interactivo</span>
                    </button>
                </div>
            </div>
        `;
    });
    grid.innerHTML = cardsHtml;
}

function renderLocationList() {
    const container = document.getElementById('location-list-container');
    let html = '';
    businessesData.forEach(b => {
        html += `
            <div onclick="selectLocationOnMap('${b.name}', '${b.location}')" class="p-3 bg-pastelPurple-50/60 hover:bg-pastelPurple-100/80 rounded-2xl cursor-pointer border border-pastelPurple-100 transition-all flex items-center justify-between">
                <div>
                    <h4 class="font-bold text-sm text-pastelPurple-900">${b.name}</h4>
                    <p class="text-xs text-gray-600 mt-0.5"><i class="fa-solid fa-location-dot text-pastelPink-500 mr-1"></i> ${b.location}</p>
                </div>
                <i class="fa-solid fa-chevron-right text-xs text-pastelPurple-400"></i>
            </div>
        `;
    });
    container.innerHTML = html;
}

function selectLocationOnMap(name, location) {
    switchTab('ubicacion');
    const mapsQuery = encodeURIComponent(`${name}, ${location}, Tupiza, Bolivia`);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

    const mapContainer = document.getElementById('map-pins-container');
    mapContainer.innerHTML = `
        <div class="bg-white p-6 rounded-3xl shadow-xl border-2 border-pastelPurple-400 max-w-sm text-center animate-fade-in">
            <div class="w-12 h-12 bg-pastelPurple-700 text-white rounded-2xl mx-auto flex items-center justify-center text-xl mb-3 shadow-md">
                <i class="fa-solid fa-store"></i>
            </div>
            <h4 class="font-extrabold text-pastelPurple-900 text-lg">${name}</h4>
            <p class="text-xs text-gray-600 mt-1 flex items-center justify-center"><i class="fa-solid fa-location-dot text-pastelPink-500 mr-1.5"></i> ${location}</p>
            <a href="${googleMapsUrl}" target="_blank" class="mt-4 inline-flex items-center justify-center space-x-2 px-4 py-2 bg-pastelPurple-700 hover:bg-pastelPurple-800 text-white text-xs font-bold rounded-xl transition-all shadow-md">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Abrir en Google Maps</span>
            </a>
        </div>
    `;
}

function renderHorarios(selectedCat) {
    const filterBar = document.getElementById('horarios-filter-bar');
    const grid = document.getElementById('horarios-grid');

    let filterHtml = `<button onclick="renderHorarios(null)" class="px-4 py-2 rounded-full text-sm font-semibold transition-all ${!selectedCat ? 'bg-pastelPurple-700 text-white shadow-md' : 'bg-white text-gray-600 border border-pastelPurple-200 hover:bg-pastelPurple-50'}">Todos</button>`;
    categories.forEach(cat => {
        const isActive = selectedCat === cat;
        filterHtml += `<button onclick="renderHorarios('${cat}')" class="px-4 py-2 rounded-full text-sm font-semibold transition-all ${isActive ? 'bg-pastelPurple-700 text-white shadow-md' : 'bg-white text-gray-600 border border-pastelPurple-200 hover:bg-pastelPurple-50'}">${cat}</button>`;
    });
    filterBar.innerHTML = filterHtml;

    const filtered = selectedCat ? businessesData.filter(b => b.category === selectedCat) : businessesData;

    let html = '';
    filtered.forEach(b => {
        html += `
            <div class="bg-white p-6 rounded-3xl shadow-md border border-pastelPurple-100 flex flex-col justify-between">
                <div>
                    <span class="text-xs font-semibold text-pastelPurple-600 bg-pastelPurple-50 px-3 py-1 rounded-full">${b.category}</span>
                    <h3 class="text-lg font-bold text-pastelPurple-900 mt-2 mb-3">${b.name}</h3>
                    <div class="bg-pastelPurple-50/60 p-4 rounded-2xl border border-pastelPurple-100 text-xs text-gray-700 space-y-1.5">
                        <div class="font-bold text-pastelPurple-800 flex items-center"><i class="fa-solid fa-clock text-pastelPink-500 mr-2"></i> Horario de Atención:</div>
                        <div>${b.schedule}</div>
                    </div>
                </div>
                <div class="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400 flex items-center">
                    <i class="fa-solid fa-location-dot mr-1"></i> ${b.location}
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function renderContactos(selectedCat) {
    const filterBar = document.getElementById('contactos-filter-bar');
    const grid = document.getElementById('contactos-grid');

    let filterHtml = `<button onclick="renderContactos(null)" class="px-4 py-2 rounded-full text-sm font-semibold transition-all ${!selectedCat ? 'bg-pastelPurple-700 text-white shadow-md' : 'bg-white text-gray-600 border border-pastelPurple-200 hover:bg-pastelPurple-50'}">Todos</button>`;
    categories.forEach(cat => {
        const isActive = selectedCat === cat;
        filterHtml += `<button onclick="renderContactos('${cat}')" class="px-4 py-2 rounded-full text-sm font-semibold transition-all ${isActive ? 'bg-pastelPurple-700 text-white shadow-md' : 'bg-white text-gray-600 border border-pastelPurple-200 hover:bg-pastelPurple-50'}">${cat}</button>`;
    });
    filterBar.innerHTML = filterHtml;

    const filtered = selectedCat ? businessesData.filter(b => b.category === selectedCat) : businessesData;

    let html = '';
    filtered.forEach(b => {
        html += `
            <div class="bg-white p-6 rounded-3xl shadow-md border border-pastelPurple-100 flex flex-col justify-between">
                <div>
                    <span class="text-xs font-semibold text-pastelPurple-600 bg-pastelPurple-50 px-3 py-1 rounded-full">${b.category}</span>
                    <h3 class="text-lg font-bold text-pastelPurple-900 mt-2 mb-3">${b.name}</h3>
                    <div class="bg-pastelPurple-50/60 p-4 rounded-2xl border border-pastelPurple-100 text-xs text-gray-700 space-y-2">
                        <div class="flex items-center space-x-2 font-bold text-pastelPurple-900 text-sm">
                            <i class="fa-solid fa-phone text-pastelPink-500"></i>
                            <span>${b.contact}</span>
                        </div>
                        <div class="text-gray-500"><i class="fa-solid fa-location-dot mr-1"></i> ${b.location}</div>
                    </div>
                </div>
                <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span class="text-xs text-green-600 font-semibold"><i class="fa-solid fa-circle-check mr-1"></i> Disponible</span>
                    <a href="tel:${b.contact}" class="px-4 py-2 bg-pastelPurple-700 hover:bg-pastelPurple-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm">
                        <i class="fa-solid fa-phone mr-1"></i> Llamar
                    </a>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function handleGlobalSearch(query) {
    const dropdown = document.getElementById('search-results-dropdown');
    if (!query || query.trim() === '') {
        dropdown.classList.add('hidden');
        dropdown.innerHTML = '';
        return;
    }

    const q = query.toLowerCase();
    const results = businessesData.filter(b => 
        b.name.toLowerCase().includes(q) || 
        b.category.toLowerCase().includes(q) || 
        b.location.toLowerCase().includes(q)
    );

    if (results.length === 0) {
        dropdown.innerHTML = `<div class="p-3 text-xs text-gray-500 text-center">No se encontraron negocios con "${query}"</div>`;
        dropdown.classList.remove('hidden');
        return;
    }

    let html = '';
    results.forEach(b => {
        html += `
            <div onclick="selectGlobalSearchResult(${b.id})" class="p-3 bg-pastelPurple-50/60 hover:bg-pastelPurple-100/90 rounded-2xl cursor-pointer border border-pastelPurple-100 transition-all flex items-center space-x-3">
                <img src="${b.image}" class="w-12 h-12 rounded-xl object-cover" onerror="this.src='https://placehold.co/100x100/e9d5ff/6b46c1?text=Img'">
                <div class="flex-grow">
                    <h4 class="font-bold text-xs text-pastelPurple-900">${b.name}</h4>
                    <p class="text-[11px] text-gray-600">${b.category} • ${b.location}</p>
                    <p class="text-[10px] text-pastelPurple-700 font-semibold mt-0.5"><i class="fa-solid fa-phone mr-1"></i> ${b.contact}</p>
                </div>
            </div>
        `;
    });
    dropdown.innerHTML = html;
    dropdown.classList.remove('hidden');
}

function selectGlobalSearchResult(id) {
    const b = businessesData.find(item => item.id === id);
    if (!b) return;

    document.getElementById('search-results-dropdown').classList.add('hidden');
    document.getElementById('global-search').value = b.name;

    switchTab('servicios');
    renderServices(b.category);
}