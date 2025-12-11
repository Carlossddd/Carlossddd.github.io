/* ARCHIVO JAVASCRIPT (script.js)
   Aquí vive la "inteligencia" de tu página: los datos de los personajes
   y la funcionalidad de los botones y ventanas modales.
*/

// Función auxiliar para crear las imágenes de los personajes (Avatares SVG)
// Esto asegura que las imágenes siempre carguen usando emojis.
const createAvatar = (emoji, bgColor) => {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' style='background-color:${bgColor}'%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='60'%3E${emoji}%3C/text%3E%3C/svg%3E`;
};

// --- BASE DE DATOS DE PERSONAJES ---
const characterData = [
    { 
        id: 'luffy', 
        name: 'Monkey D. Luffy', 
        role: 'Capitán', 
        img: createAvatar('👒', '#ffcccc'), // Fondo Rojo Claro
        desc: 'El hombre que se convertirá en el Rey de los Piratas. Comedor de la Fruta Hito Hito: Modelo Nika. Su espíritu indomable atrae a aliados y aterroriza a la Marina.', 
        dream: 'Encontrar el One Piece y ser libre.', 
        fruit: 'Hito Hito no Mi (Zoan Mítica - Nika)', 
        bounty: '฿ 3,000,000,000' 
    },
    { 
        id: 'zoro', 
        name: 'Roronoa Zoro', 
        role: 'Espadachín', 
        img: createAvatar('⚔️', '#ccffcc'), // Fondo Verde Claro
        desc: 'Maestro del estilo de tres espadas (Santoryu). Aspira a superar a Dracule Mihawk. Posee una lealtad absoluta hacia su capitán.', 
        dream: 'Ser el mejor espadachín del mundo.', 
        fruit: 'Ninguna (Haki Avanzado)', 
        bounty: '฿ 1,111,000,000' 
    },
    { 
        id: 'nami', 
        name: 'Nami', 
        role: 'Navegante', 
        img: createAvatar('🍊', '#ffedcc'), // Fondo Naranja Claro
        desc: 'La navegante capaz de predecir ciclones con su cuerpo. Lucha usando el clima con su bastón Clima-Tact creado por Usopp.', 
        dream: 'Dibujar el mapa del mundo entero.', 
        fruit: 'Ninguna (Arma Climática)', 
        bounty: '฿ 366,000,000' 
    },
    { 
        id: 'usopp', 
        name: 'Usopp', 
        role: 'Francotirador', 
        img: createAvatar('🤥', '#fff5cc'), // Fondo Amarillo
        desc: 'Hijo de Yasopp. Mentiroso compulsivo pero francotirador genial. Despertó su Haki de Observación para salvar a su capitán.', 
        dream: 'Ser un valiente guerrero del mar.', 
        fruit: 'Ninguna (Haki Observación)', 
        bounty: '฿ 500,000,000' 
    },
    { 
        id: 'sanji', 
        name: 'Vinsmoke Sanji', 
        role: 'Cocinero', 
        img: createAvatar('🍳', '#cce5ff'), // Fondo Azul
        desc: 'Príncipe del Germa 66 que renegó de su familia. Un chef que nunca usará sus manos para pelear. Su patada puede destruir edificios.', 
        dream: 'Encontrar el All Blue.', 
        fruit: 'Ninguna (Exoesqueleto Germa)', 
        bounty: '฿ 1,032,000,000' 
    },
    { 
        id: 'chopper', 
        name: 'Tony Tony Chopper', 
        role: 'Médico', 
        img: createAvatar('🦌', '#ffccff'), // Fondo Rosa
        desc: 'Un reno de nariz azul que comió la Fruta Humano-Humano. Un genio médico que puede transformarse en varias formas (Monster Point).', 
        dream: 'Curar todas las enfermedades.', 
        fruit: 'Hito Hito no Mi (Zoan)', 
        bounty: '฿ 1,000' 
    },
    { 
        id: 'robin', 
        name: 'Nico Robin', 
        role: 'Arqueóloga', 
        img: createAvatar('🌸', '#e5ccff'), // Fondo Violeta
        desc: 'La única persona viva capaz de leer los Poneglyphs para encontrar la ruta a Laugh Tale. Sobreviviente del genocidio de Ohara.', 
        dream: 'Descubrir la Historia del Siglo Vacío.', 
        fruit: 'Hana Hana no Mi (Paramecia)', 
        bounty: '฿ 930,000,000' 
    },
    { 
        id: 'franky', 
        name: 'Franky', 
        role: 'Carpintero', 
        img: createAvatar('🤖', '#ccf2ff'), // Fondo Celeste
        desc: 'Un cyborg alimentado con cola. Construyó el Thousand Sunny con la madera legendaria del Árbol Adam.', 
        dream: 'Que su barco navegue todos los mares.', 
        fruit: 'Ninguna (Tecnología Láser)', 
        bounty: '฿ 394,000,000' 
    },
    { 
        id: 'brook', 
        name: 'Brook', 
        role: 'Músico', 
        img: createAvatar('💀', '#e0e0e0'), // Fondo Gris
        desc: 'Un esqueleto viviente. Músico y espadachín que congela con el frío del inframundo. Espera cumplir su promesa a Laboon.', 
        dream: 'Reunirse con Laboon.', 
        fruit: 'Yomi Yomi no Mi (Paramecia)', 
        bounty: '฿ 383,000,000' 
    },
    { 
        id: 'jinbe', 
        name: 'Jinbe', 
        role: 'Timonel', 
        img: createAvatar('🦈', '#ccd9ff'), // Fondo Azul Marino
        desc: 'Ex-Shichibukai y maestro del Karate Gyojin. Un hombre de honor que sirve de escudo y timonel para el Rey de los Piratas.', 
        dream: 'Igualdad entre Humanos y Gyojin.', 
        fruit: 'Ninguna (Karate Gyojin)', 
        bounty: '฿ 1,100,000,000' 
    }
];

// --- INICIALIZACIÓN DE LA PÁGINA ---
document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del HTML
    const grid = document.querySelector('#personajes .grid');
    const modal = document.getElementById('character-modal');

    // 1. Generar Tarjetas (Wanted Posters)
    characterData.forEach(char => {
        const card = document.createElement('div');
        // Clases de Tailwind y estilos personalizados para el efecto
        card.className = 'wanted-poster cursor-pointer group bg-opacity-90 hover:bg-opacity-100';
        
        // El HTML interno de cada tarjeta
        card.innerHTML = `
            <div class="wanted-header">WANTED</div>
            <div class="wanted-sub">DEAD OR ALIVE</div>
            
            <div class="overflow-hidden border-2 border-gray-800 bg-gray-200 aspect-[4/5] relative">
                <img src="${char.img}" alt="${char.name}" class="w-full h-full object-cover filter sepia contrast-125 group-hover:sepia-0 transition-all duration-500">
            </div>
            
            <div class="mt-3 text-center">
                <h3 class="font-pirate text-xl text-gray-900 uppercase truncate px-1 tracking-wide">${char.name.split(' ')[0]}</h3>
                <p class="font-wanted text-lg font-bold text-gray-800 border-t border-gray-400 mt-1 pt-1">${char.bounty}</p>
            </div>
        `;
        
        // Al hacer click, abrir el modal con los datos de ESTE personaje
        card.addEventListener('click', () => openModal(char));
        
        // Añadir la tarjeta a la cuadrícula
        grid.appendChild(card);
    });

    // 2. Función para Abrir el Modal
    function openModal(char) {
        // Rellenar los huecos del modal con la info del personaje clickeado
        document.getElementById('modal-img').src = char.img;
        document.getElementById('modal-name').textContent = char.name;
        document.getElementById('modal-name-poster').textContent = char.name; 
        document.getElementById('modal-role').textContent = char.role;
        document.getElementById('modal-desc').textContent = char.desc;
        document.getElementById('modal-dream').textContent = char.dream;
        document.getElementById('modal-fruit').textContent = char.fruit;
        document.getElementById('modal-bounty-poster').textContent = char.bounty; 
        
        // Mostrar el modal (quitando la clase 'hidden' y añadiendo 'flex')
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    // 3. Función para Cerrar el Modal
    const closeModal = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    };

    // Cerrar al click en la "X"
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    
    // Cerrar al click fuera del contenido (en el fondo oscuro)
    modal.addEventListener('click', (e) => {
        if(e.target === modal) closeModal();
    });

    // 4. Lógica del Menú Móvil (Hamburguesa)
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    
    // Cerrar menú móvil al hacer click en cualquier enlace
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => menu.classList.add('hidden'));
    });
});