# KanbanPro - Producto Mínimo Viable (MVP)

KanbanPro es una plataforma integral para la gestión de tareas basada en la metodología Kanban. Este proyecto ha evolucionado a través de tres fases de desarrollo, culminando en una aplicación robusta con una **API RESTful**, autenticación segura y persistencia en una base de datos relacional.

---

## 🛠️ Stack Tecnológico
* **Backend:** Node.js & Express.
* **Base de Datos:** PostgreSQL con Sequelize ORM.
* **Seguridad:** Autenticación basada en **JWT** (JSON Web Tokens) y cifrado de contraseñas con **BCryptjs**.
* **Frontend:** Handlebars (HBS) para el renderizado dinámico de vistas desde el servidor.

---

## 📋 Documentación de la API (Sprint 3)

> **Nota:** Todas las rutas de gestión de datos (Tableros, Listas, Tarjetas) requieren el header de autorización:  
> `Authorization: Bearer <tu_token_jwt>`

### 1. Autenticación (`/api/auth`)
| Método | Endpoint | Descripción | Código HTTP |
| :--- | :--- | :--- | :--- |
| **POST** | `/register` | Registra un nuevo usuario con contraseña cifrada. | `201 Created` |
| **POST** | `/login` | Valida credenciales y retorna un token JWT. | `200 OK / 401` |

### 2. Tableros (`/api/tableros`)
| Método | Endpoint | Descripción | Código HTTP |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Obtiene todos los tableros (incluyendo listas y tarjetas). | `200 OK` |
| **POST** | `/` | Crea un nuevo tablero. | `201 Created` |
| **DELETE** | `/:id` | Elimina un tablero de forma permanente. | `200 OK / 204` |

### 3. Listas (`/api/tableros/:tableroId/listas`)
| Método | Endpoint | Descripción | Código HTTP |
| :--- | :--- | :--- | :--- |
| **POST** | `/` | Crea una lista dentro de un tablero específico. | `201 Created` |
| **DELETE** | `/:id` | Elimina una lista (la ruta depende del controlador). | `200 OK / 204` |

### 4. Tarjetas (`/api/listas/:listaId/tarjetas`)
| Método | Endpoint | Descripción | Código HTTP |
| :--- | :--- | :--- | :--- |
| **POST** | `/` | Crea una nueva tarjeta/tarea en una lista. | `201 Created` |
| **DELETE** | `/:id` | Elimina la tarjeta seleccionada. | `200 OK / 204 / 404` |

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
    Crear un archivo `.env` en la raíz del proyecto con el siguiente formato:
    ```env
    DB_NAME=kanban_db
    DB_USER=postgres
    DB_PASS=1234
    DB_HOST=localhost
    DB_PORT=5432
    JWT_SECRET=tu_clave_secreta_aqui
    ```
4.  **Iniciar la aplicación:**
    * **Desarrollo (Nodemon):** ```bash
      pnpm dev
      ```
    * **Producción:** ```bash
      pnpm start
      ```
    * **Seed de prueba (Opcional):** ```bash
      pnpm seed
      ```

---

## 📜 Historial de Evolución
* **Sprint 1:** Prototipo visual inicial con navegación Handlebars y persistencia local en `data.json`.
* **Sprint 2:** Diseño de arquitectura de datos PostgreSQL. Implementación de modelos, migraciones y relaciones con Sequelize.
* **Sprint 3:** Desarrollo de la API RESTful, implementación de seguridad (Middleware JWT/BCrypt) y conexión de la interfaz web con datos reales de la BD.

