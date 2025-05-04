# Microservices App con Docker

Este proyecto es una aplicación basada en **microservicios** usando **Docker** y **Node.js**. Contiene tres servicios:

- `user-service` – Maneja usuarios
- `product-service` – Maneja productos
- `order-service` – Crea órdenes entre usuarios y productos

Cada servicio es independiente, pero se comunican entre sí mediante una red compartida en Docker.

---

## 🚀 Tecnologías

- Node.js
- Express.js
- Docker
- Docker Compose

---

## 🧱 Estructura del Proyecto

```
microservices-app/
│
├── user-service/
│   ├── src/server.js
│   ├── package.json
│   └── Dockerfile
│
├── product-service/
│   ├── src/server.js
│   ├── package.json
│   └── Dockerfile
│
├── order-service/
│   ├── src/server.js
│   ├── package.json
│   └── Dockerfile
│
└── docker-compose.yml
```

---

## ⚙️ Cómo levantar los servicios

1. Clona el repositorio:

   ```bash
   git clone https://github.com/SergioClaustro/microservices-app.git
   cd microservices-app
   ```

2. Construye y levanta los contenedores:

   ```bash
   docker-compose up --build
   ```

3. Verifica que los servicios estén corriendo:
   - `http://localhost:3001/users/`
   - `http://localhost:3002/products`
   - `POST http://localhost:3003/orders` (con `userId` y `productId`)

---

## 📬 Ejemplo de orden

POST a `http://localhost:3003/orders` con JSON:

```json
{
  "userId": 1,
  "productId": 2
}
```

Respuesta:

```json
{
  "message": "Order created",
  "order": {
    "id": 2,
    "userId": 1,
    "productId": 2
  }
}
```

---

## 📝 Notas

- Los datos están almacenados en memoria (no persistentes)
- No es necesario tener una base de datos para esta versión

---

## 🧼 Para detener los servicios

```bash
docker-compose down
```
