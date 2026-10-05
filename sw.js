const CACHE_NAME = "questões-v1";
const ARQUIVOS = [
    "./",
    "index.html",
    "style.css",
    "funcoes.js",
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];
self.addEventListener("install", event => {
    console.log("Instalando Service Worker...");
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log("Armazenando arquivos...");
                return cache.addAll(ARQUIVOS);
            })
    );
});
self.addEventListener("activate", event => {
            (console.log(
        "Service Worker ativado"
    ));
});
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(resposta => {
                if (resposta) {
                    console.log(
                        "Cache:",
                        event.request.url
                    );
                    return resposta;
                }
                console.log(
                    "Rede:",
                    event.request.url
                );
                return fetch(
                    event.request
                );
            })
    );
});