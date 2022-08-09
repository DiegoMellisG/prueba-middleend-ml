# Prueba práctica Middleend MeLi

#### Autor: Diego Mellis
## Descripción

Esta prueba consiste en una API que actúa como middleend para obtener datos de endpoints especificos de la API de [Mercado Libre](https://developers.mercadolibre.cl/es_ar/api-docs-es).

## Stack Tecnológico

- Nodejs v.14.18.3
- Express

## Documentación de los endpoints

Esta API en particular cuenta con dos endpoints, los cuales obtienen data en formatos diferentes. Dicho lo anterior, se tiene lo siguiente:

| HTTP REQUEST | Ruta                | Parámetros                          | Función                                                                                                                                               |
| ------------ | ------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [GET]*       | search/:site/:query | site: **string**, query: **string** | Si ingresa el parámetro *site* válido y cualquier palabra en el parámetro *query* la API retornará una lista de items que hagan match con la *query*. |
| [GET]        | items/:id           | id: **string**                      | Entrega información del item encontrado con el *id* entregado como parámetro                                                                          |

*: Este endpoint puede aceptar todos los parámetros como query string que acepta la API de Mercado Libre. Los utilizados para esta prueba fueron: limit, offset y sort (sólo se puede ordenar por precio (ASC y DESC)).

#### Ejemplos de ejecución
Es importante mencionar que antes de realizar cada request a los endpoints se valida que exista el header _**x-auth-token**_. Además debe ser un token válido que fue entregado por el equipo de Mercado Libre.
- **search/MLA/futbol?limit=2**
  A modo de ejemplo para mostrar información legible se usa **limit=2** para mostrar 2 items en el response.

  Response con HTTP Status 200:

```json
{
    "paging": {
        "total": 72802,
        "offset": 0,
        "limit": 2
    },
    "categories": [
        "Ropa y Calzado",
        "Equipamiento y Entrenamiento",
        "Bolsos y Botineros",
        "Infladores de Pelota",
        "Otros"
    ],
    "items": [
        {
            "id": "MLA1147415623",
            "title": "Pelota De Futbol Infantil Niños N5 Compatible Mundial Qatar",
            "price": {
                "currency": "ARS",
                "amount": 3200,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_754652-MLA50927396729_072022-I.jpg",
            "condition": "new",
            "free_shipping": false
        },
        {
            "id": "MLA1147547370",
            "title": "Pelota De Futbol N5 Infantil Niños Compatible Mundial Qatar",
            "price": {
                "currency": "ARS",
                "amount": 5500,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_604555-MLA50927427690_072022-I.jpg",
            "condition": "new",
            "free_shipping": true
        }
    ]
}
```

- **items/MLA1147547370**
  
  Response con HTTP Status 200:

```json
{
    "author": {
        "name": "Diego",
        "lastname": "Mellis"
    },
    "item": {
        "id": "MLA1147547370",
        "title": "Pelota De Futbol N5 Infantil Niños Compatible Mundial Qatar",
        "price": {
            "currency": "ARS",
            "amount": 5500,
            "decimals": 0
        },
        "picture": "http://http2.mlstatic.com/D_604555-MLA50927427690_072022-I.jpg",
        "condition": "new",
        "free_shipping": true,
        "sold_quantity": 150,
        "description": "Somos DELTA EXPORT!\n\nCompra con confianza, somos Mercado Líder PLATINUM y tenes 100% garantía asegurada!\n\n- Sucursal abierta al público.\n- Envíos a todo el país.\n- Tené tu producto en 24 hs.\n\n______________________________________________\n\nARTICULO:\n\nPELOTA DE FUTBOL MUNDIAL QATAR 2022 \n\nPelota de Fútbol Nº5 \nEs de uso recreativo para chicos.\nMaterial: pvc foam \nPeso: 290 grs. \nCaracterísticas: acabado brillante \nUso: entrenamiento \nCostura: cosida a mano y máquina \nCámara: cámara de látex \nCircunferencia: 68-70 cm \nPaneles: 32 paneles\n\nSENTITE COMO MESSI!!\n\n\n\n* NOTAS: \n- Las imágenes son a modo ilustrativo / LA PELOTA SE ENTREGA DESINFLADA, FOTO REAL DEL PRODUCTO QUE SE ENTREGA EN LA FOTO NUMERO 8.\n______________________________________________\n\n\nUBICACIÓN:\n- Estamos ubicados en San Isidro, a muy pocas cuadras de Acceso Tigre, Av. Márquez y Panamericana. A 10 cuadras aprox. de la estación de Boulogne, tren Belgrano Norte.\n\n\nHORARIOS:\n- Nuestros horarios de atención son de Lunes a Viernes de 09 a 12 y de 13 a 17 hs. Sábados de 09 a 13 hs. No atendemos Domingos ni feriados.\n\n\nMEDIOS DE PAGO:\n- MercadoPago\n\n\nENVÍOS:\n- MERCADOENVIOS (para cotizar y ver tiempo de entrega por OCA debes colocar tu CP debajo del precio de la publicación y seleccionar cantidad).\n-MERCADOFLEX (ingresar CP debajo del precio de la publicación, la opción de envió rápido estará habilitada para CABA y algunas zonas de GBA. Entrega en el día comprando antes de las 13 hs. Horarios de repartos de 9.30 a 18 hs. IMPORTANTE: al seleccionar esta opción debe haber alguien en el domicilio para recibir en la franja horaria indicada. \n- ENCOMIENDAS (abonas el envío al retirar de la terminal), deberás colocar retiro del domicilio del vendedor.\n- CORREO ARGENTINO (abonas el envío al vendedor), deberás colocar retiro del domicilio del vendedor.\n- MOTO MENSAJERÍA dentro de las 24 hs. de haberse acreditado el pago (Horarios de entrega previa coordinación de L a V: 9 a 19 hs. S: 14 a 19 hs). Debes colocar retiro del domicilio del vendedor. Días de lluvia 50% de recargo.\n\n¡ATENCIÓN!\nEncomiendas, Correo Argentino y Moto Mensajería: Comunicarse inmediatamente luego de realizar la compra para poder coordinarlo.\n\n\n¡NO COBRAMOS EMBALAJE!\n\n______________________________________________\n\n- Realizamos factura A y B electrónica.\n- Tus consultas no molestan, quítate todas tus dudas desde la sección preguntas.\n\n______________________________________________"
    }
}
```

## Cómo ejecutar

### Primeros pasos

**IMPORTANTE**: Para su correcta ejecución se requieren variables de entorno, si las necesita, puede pedirlas al dueño de este repositorio.

Lo primero es situarse en el directorio una vez esté clonado en su computador
```bash
cd ~/prueba-middleend-ml
```
Luego ejecutar el siguiente comando
```bash
npm install
```
Seguido de
```bash
npm start
```

Esto mostrará en su terminal lo siguiente, lo cual quiere decir que ya se puede probar al API. Se recomienda utilizar alguna herramienta como Postman o alguna similar para mayor fluidez y mejores opciones en la configuración de headers que son necesarios.

```bash
> node index.js

Server started at http://localhost:3031
```

Una vez ejecutada la API usted puede probar los endpoints documentados anteriormente usando la ruta http://localhost:3031.

### Test unitarios

Para ejecutar los test unitarios basta con escribir el comando

```bash
npm test
```

## Diagrama de secuencia

A continuación se grafica un diagrama de secuencia a rasgos generales para entender el flujo de la API implementada.

![Diagrama de Secuencia](diagrams/Diagrama%20de%20Secuencia%20Middleend.png)

## Posibles mejoras

1. Una de las cosas que se pueden mejorar es la técnica para validar el token de autenticación, si bien es cierto no era un requerimiento excluyente, se podría haber usado JWT de la mano con el uso de interceptors propios de la librería Axios.
2. Para la documentación de los endpoints se pensó en utilizar swagger pero en los intentos de utilizarlo se convirtió en una piedra de tope, lo que puede ser un trabajo a futuro. La piedra de tope fue la configuración para permitir ingresar el token **x-auth-token** para poder realizar la consulta desde Swagger.
3. Si bien los test unitarios logran una cobertura alta, al testear los endpoints estos siguen realizando una request real a la API de Mercado Libre, por lo que una idea válida es generar mocks de estas respuestas y evitar la sobrecarga de la API de Mercado Libre solo por correr los test unitarios.
