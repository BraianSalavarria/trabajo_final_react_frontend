# 🥐 Crustify – Frontend

Frontend de **Crustify**, una aplicación web para la **administración de clientes, productos y ventas de una panadería**.

Este proyecto forma parte del **Trabajo Final de la Diplomatura Full Stack** del **Nodo Tecnológico de Catamarca (Argentina)** y está desarrollado con **React + Vite**, consumiendo la API REST del backend de Crustify.

---

## 📌 Descripción general

El frontend de Crustify provee una **interfaz moderna, responsiva e intuitiva** para la gestión diaria de una panadería, permitiendo:

* Autenticación de usuarios
* Visualización y gestión de clientes
* Visualización y gestión de productos
* Registro y control de ventas
* Navegación fluida sin recargas de página
* Notificaciones y alertas visuales

Se comunica con el backend mediante peticiones HTTP a una **API REST protegida con JWT**.

---

## 🛠️ Tecnologías utilizadas

* **React 19**
* **Vite** (entorno de desarrollo y build)
* **React Router DOM** (enrutamiento)
* **Tailwind CSS** (estilos)
* **Lucide React** (iconos)
* **React Toastify** (notificaciones)
* **SweetAlert2** (alertas modales)
* **dotenv** (variables de entorno)

---

## 📦 Dependencias principales

```json
"dependencies": {
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.9.6",
  "tailwindcss": "^4.1.17",
  "@tailwindcss/vite": "^4.1.17",
  "lucide-react": "^0.561.0",
  "react-toastify": "^11.0.5",
  "sweetalert2": "^11.26.3",
  "dotenv": "^17.2.3"
}
```

---

## 🗂️ Estructura del proyecto

```
crustify-frontend/
│
├── src/
│   ├── components/    # Componentes reutilizables
│   ├── pages/         # Vistas / páginas principales
│   ├── context/       # Contextos globales (auth, datos)
│   ├── services/      # Servicios de conexión a la API
│   ├── routes/        # Definición de rutas
│   ├── assets/        # Recursos estáticos
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example       # Variables de entorno de ejemplo
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🔐 Autenticación

* Autenticación basada en **JWT**
* El token se obtiene desde el backend y se almacena en el frontend
* Protección de rutas mediante lógica de autenticación
* Manejo de sesión del usuario

---

## 🌐 Conexión con el Backend

El frontend consume la API REST de Crustify.

Ejemplo de variable de entorno:

```env
VITE_API_URL=http://localhost:4000/api
```

> ⚠️ Es importante que el backend esté en ejecución para el correcto funcionamiento del sistema.

---

## ⚙️ Scripts disponibles

```bash
npm run dev       # Ejecuta la app en modo desarrollo
npm run build     # Genera la versión de producción
npm run preview   # Previsualiza el build
npm run lint      # Ejecuta ESLint
```

---

## ▶️ Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/crustify-frontend.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
cp .env.example .env
```

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

---

## 🎨 Diseño y UX

* Interfaz moderna y minimalista
* Diseño responsivo para desktop y mobile
* Feedback visual mediante notificaciones y alertas
* Navegación fluida con React Router

---

## 🎓 Contexto académico

Este frontend fue desarrollado como **Trabajo Final Integrador** de la **Diplomatura Full Stack** del **Nodo Tecnológico de Catamarca**, aplicando buenas prácticas de desarrollo frontend con React.

---

## 👨‍💻 Autor

**Braian**
Desarrollador Full Stack

---

## 📄 Licencia

Proyecto desarrollado con fines **educativos y académicos**.

---

> 🥖 *Crustify – Gestión inteligente para tu panadería*
