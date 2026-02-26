# Briventia — Landing page

Landing page statica per Briventia (biomassa algale, fotobioreattori, Spirulina).

## Come aprire la pagina

Apri il file `index.html` nel browser (doppio clic oppure da terminale):

```bash
open index.html
```

Oppure avvia un server locale (es. con Python):

```bash
python3 -m http.server 8080
```

Poi vai su [http://localhost:8080](http://localhost:8080).

## Contenuti

- **Hero**: logo al centro con animazione di ingresso e pulsante tema chiaro/scuro.
- **Chi siamo / What we do**: descrizione in italiano e inglese con pulsante IT/EN e card con icone (PBR, Spirulina, ecosistema chiuso, fertilizzanti, scalabilità, CO₂).
- **Dove siamo**: sede in Calabria, Italia.
- **Footer**: P.IVA, indirizzo e telefono (dati di esempio).

Tema e lingua vengono salvati in `localStorage`.
