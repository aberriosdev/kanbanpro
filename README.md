# KanbanPro - Producto Mínimo Viable (MVP)

KanbanPro es una plataforma integral para la gestión de tareas basada en la metodología Kanban. Este proyecto ha evolucionado a través de tres fases de desarrollo, culminando en una aplicación robusta con una **API RESTful**, autenticación segura y persistencia en una base de datos relacional PostgreSQL.

---

## 🛠️ Stack Tecnológico
* **Backend:** Node.js & Express.
* **Base de Datos:** PostgreSQL con Sequelize ORM.
* **Seguridad:** Autenticación basada en **JWT** (JSON Web Tokens) y cifrado de contraseñas con **BCryptjs**.
* **Frontend:** Handlebars (HBS) para el renderizado dinámico de vistas desde el servidor.

---

## 📋 Documentación de la API (Sprint 3 - CRUD Completo)

> **Nota:** Todas las rutas de gestión de datos requieren el header de autorización:  
> `Authorization: Bearer <tu_token_jwt>`

### 1. Autenticación (`/api/auth`)
| Método | Endpoint | Descripción | Código HTTP |
| :--- | :--- | :--- | :--- |
| **POST** | `/register` | Registra un nuevo usuario con contraseña cifrada. | `201 Created` |
| **POST** | `/login` | Valida credenciales y retorna un token JWT. | `200 OK / 401` |

### 2. Tableros (`/api/tableros`)
| Método | Endpoint | Descripción | Código HTTP |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Obtiene todos los tableros con sus listas y tarjetas. | `200 OK` |
| **POST** | `/` | Crea un nuevo tablero vinculado al usuario. | `201 Created` |
| **PUT** | `/:id` | Actualiza el título de un tablero. | `200 OK` |
| **DELETE** | `/:id` | Elimina un tablero de forma permanente. | `200 OK / 204` |

### 3. Listas (`/api/tableros/:tableroId/listas`)
| Método | Endpoint | Descripción | Código HTTP |
| :--- | :--- | :--- | :--- |
| **POST** | `/` | Crea una lista dentro de un tablero específico. | `201 Created` |
| **GET** | `/` | Obtiene todas las listas de un tablero. | `200 OK` |
| **DELETE** | `/:id` | Elimina una lista y sus tarjetas asociadas. | `200 OK` |

### 4. Tarjetas (`/api/listas/:listaId/tarjetas`)
| Método | Endpoint | Descripción | Código HTTP |
| :--- | :--- | :--- | :--- |
| **POST** | `/` | Crea una nueva tarjeta/tarea en una lista. | `201 Created` |
| **GET** | `/` | Obtiene todas las tarjetas de una lista. | `200 OK` |
| **PUT** | `/:id` | Actualiza título o descripción de la tarjeta. | `200 OK` |
| **DELETE** | `/:id` | Elimina la tarjeta seleccionada. | `200 OK / 404` |

---

## ⚙️ Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-de-tu-repositorio>
    cd kanbanpro
    ```
2.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```
3.  **Configurar variables de entorno:**
    Crear un archivo `.env` en la raíz con el siguiente formato:
    ```env
    DB_NAME=kanban_db
    DB_USER=postgres
    DB_PASS=1234
    DB_HOST=localhost
    DB_PORT=5432
    JWT_SECRET=tu_clave_secreta_aqui
    ```
4.  **Iniciar la aplicación:**
    * **Desarrollo (Nodemon):** `pnpm dev`
    * **Producción:** `pnpm start`
    * **Seed de prueba (Opcional):** `pnpm seed`

---

## 📜 Historial de Evolución
* **Sprint 1:** Prototipo visual inicial con navegación Handlebars y persistencia local en `data.json`.
* **Sprint 2:** Diseño de arquitectura de datos PostgreSQL. Implementación de modelos, migraciones y relaciones con Sequelize.
* **Sprint 3:** Desarrollo de la API RESTful completa, implementación de seguridad (Middleware JWT/BCrypt) y conexión de la interfaz web con datos reales de la BD.
