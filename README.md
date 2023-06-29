# Custom AI Chat 🤖💬

Bienvenido/a a Custom AI Chat, una aplicación de chat personalizada que utiliza la inteligencia artificial para responder preguntas interesantes.

## Descripción

Este repositorio contiene tanto el backend como el frontend de la aplicación Custom AI Chat. El backend está construido en `Node.js` utilizando `Express` como framework web, mientras que el frontend está desarrollado en `React` utilizando `Bulma` como framework CSS.

Antes de desplegar la aplicación en tu entorno local, asegúrate de seguir los siguientes pasos.

## Clonar el Repositorio

Para comenzar, clona este repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone git remote add origin https://github.com/GabrielAlberini/custom-chat-ai.git
```

## Configurar la API de Cohere.ai

La aplicación utiliza la API de Cohere.ai para proporcionar la inteligencia artificial necesaria para responder las preguntas. Para utilizarla, necesitarás crear una clave de API en Cohere.ai.

- Crea una cuenta en Cohere.ai si aún no tienes una.
- Genera una clave de API en la sección de configuración de tu cuenta.
- Copia la clave de API generada.

Una vez que tengas la clave de API, necesitarás incorporarla en el backend de la aplicación.

- Abre el archivo .env.
- Busca la variable API_KEY.
- Reemplaza el valor 'TU_CLAVE_DE_API' con tu clave de API de Cohere.ai.
- Guarda los cambios en el archivo.

## Instalar Dependencias

Antes de levantar los servidores, debes instalar las dependencias necesarias para el backend y el frontend.

### Backend

- Abre una terminal y navega hasta la carpeta backend del repositorio clonado.
- Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

### Backend

- Abre una terminal y navega hasta la carpeta backend del repositorio clonado.
- Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

## Levantar los Servidores

Una vez que hayas clonado el repositorio, configurado la API de Cohere.ai y instalado las dependencias, puedes levantar los servidores tanto del backend como del frontend.

### Backend

En la terminal abierta en la carpeta backend, ejecuta el siguiente comando para iniciar el servidor:

```bash
npm start
```

### Frontend

En la terminal abierta en la carpeta backend, ejecuta el siguiente comando para iniciar el servidor:

```bash
npm run dev
```

## Acceder a la Aplicación

Una vez que los servidores estén en funcionamiento, puedes acceder a la aplicación abriendo tu navegador web y visitando la siguiente URL:

```bash
http://127.0.0.1:5173/
```

#### ¡Disfruta de Custom AI Chat y diviértete!
