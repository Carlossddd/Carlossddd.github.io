# One Piece Fanpage

Este es un proyecto sencillo creado para practicar HTML, CSS y JavaScript, diseñado como una **fanpage del anime One Piece**, con secciones básicas como portada, sinopsis, personajes y un formulario de contacto.

## 📁 Estructura del proyecto

```
one-piece-fanpage/
│
├── index.html
├── index.css
├── index.js
└── img/ (opcional para imágenes locales)
```

- **index.html** → Contiene la estructura principal de la página.
- **index.css** → Estilos y formato visual de la web.
- **index.js** → Funciones básicas para interacción del usuario.
- **img/** → Carpeta opcional para almacenar imágenes en el repositorio.

---

## 🌐 Publicación en GitHub Pages

Para publicar esta página en GitHub Pages:

1. Sube todos los archivos (HTML, CSS, JS y carpeta `img` si existe) a tu repositorio.
2. Ve a **Settings** → **Pages**.
3. En "Source", selecciona:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Guarda los cambios.
5. Tu sitio estará disponible en la URL:

```
https://<tu-usuario>.github.io/<nombre-del-repo>/
```

(Recuerda reemplazar los valores entre <> por tu información real).

---

## 🖼️ Agregar imágenes locales

1. Crea una carpeta llamada **img** dentro del proyecto.
2. Sube tus imágenes a esa carpeta.
3. Úsalas en tu HTML así:

```html
<img src="img/luffy.png" alt="Luffy">
```

---

## 🚀 Ejecutar el proyecto localmente

### Opción 1: Abrir directamente
Simplemente haz doble clic en **index.html**.

### Opción 2: Servidor local (recomendado)
En la carpeta del proyecto, ejecuta:

```bash
python -m http.server 8000
```

Visita:
```
http://localhost:8000
```

### Opción 3: Live Server (VS Code)
- Instala la extensión *Live Server*.
- Haz clic derecho sobre `index.html` → **Open With Live Server**.

---

## 📌 Funcionalidades principales

✅ Menú de navegación
✅ Sección portada con imagen
✅ Sinopsis del anime
✅ Fichas de personajes
✅ Formulario de contacto funcional (mensaje simulado)
✅ Smooth scrolling
✅ Manejo de imágenes rotas

---

## 📝 Notas adicionales

- Puedes ampliar la página agregando más personajes, galerías o animaciones.
- Puedes personalizar colores, tipografías o diseño directamente desde `index.css`.
- El formulario actualmente muestra una alerta; si deseas enviar mensajes reales, puedes integrar una API como FormSubmit o EmailJS.

---

## ✅ Autor
Página creada con fines educativos. Puedes modificarla libremente para tu proyecto en GitHub.
