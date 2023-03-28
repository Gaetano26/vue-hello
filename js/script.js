const { createApp } = Vue;

createApp({
    data() {
        return {
            titolo: 'Hello Vue',
            classeTesto: 'mt-4',
            classeImg:'mt-5',
            img: "img/Immagine 2023-03-28 143422.png",

        }
    }
}).mount('#app')