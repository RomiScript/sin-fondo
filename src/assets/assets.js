import logo from './eraser.png'
import Banner from './hero1.mp4'
import people from './people.png'
import people_org from './people-org.png'



export const assets = {
    logo,
    Banner,
    people_org,
    people
}

export const steps = [
    {
        step: "Paso 1",
        title: "Selecciona una imagen",
        description: "Primero, elegí la imagen a la que quieras quitarle el fondo haciendo click en \"Empezar\".\nLa imagen puede ser JPG o PNG.\n¡Cualquier tamaño es aceptado!"
    },
    {
        step: "Paso 2",
        title: "Removamos el fondo mágicamente",
        description: "Nuestra herramienta borra el fondo de tu imagen automáticamente. También podés elegir un color de fondo, los más usados son el transparente y el blanco."
    },
    {
        step: "Paso 3",
        title: "Descargá tu imagen",
        description: "Al terminar, podés descargar tu foto, ¡Y ya está!"
    }
];
export const categories = ["People", "Products", "Animals", "Cars", "Graphics"];

export const plans = [
   { id: "Básico",
    name: "Paquete Básico",
    price: 30,
    credits: "100 créditos",
    description: "Ideal para uso personal",
    popular: false
},
{
 id: "Premium",
    name: "Paquete Premium",
    price: 50,
    credits: "250 créditos",
    description: "Ideal para uso empresarial",
    popular: true  
},
{
    id: "VIP",
    name: "Paquete VIP",
    price: 75,
    credits: "1000 créditos",
    description: "Ideal para grandes equipos",
    popular: true
}
];

export const testimonials = [
    {
     id: 1,
     quote: "Estoy muy impresionado con el poder y la rapidez de Clean, es la mejor opción",
     author: "Antonio Walker",
     handle: "@_arquiweb"
    },
     {
     id: 2,
     quote: "Es el mejor que probé hasta ahora, estoy muy contenta con el resultado y muy emocionada por las mejoras que se vienen",
     author: "Sofía Jaime",
     handle: "@_lidertech"
    },
     {
     id: 3,
     quote: "Es muy difícil encontrar un removedor de fondo que no le quite calidad a nuestras imágenes, definitivamente Clean es la mejor opción del mercado",
     author: "Bruno Marte",
     handle: "@_codigoya"
    }

]