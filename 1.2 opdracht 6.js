### 1. Wat gaat er mis?

De tekeninstellingen blijven actief totdat je ze verandert. Bij het vierde vierkant worden bijvoorbeeld de `fill`- en `stroke`-instellingen aangepast. Daardoor krijgen de volgende vierkanten ook deze instellingen, terwijl dat niet de bedoeling is.

### 2. `push()`

Ik voeg vóór de eerste aanpassing van het vierde vierkant toe:

```javascript
push();
```

Er verandert op dat moment nog niets aan de tekening. `push()` slaat namelijk alleen de huidige tekeninstellingen op. De instellingen worden pas teruggezet wanneer je `pop()` gebruikt.

### 3. `pop()`

Na het tekenen van het vierde vierkant voeg ik toe:

```javascript
pop();
```

Nu worden de opgeslagen tekeninstellingen teruggezet. Daardoor krijgen het vijfde en zesde vierkant weer dezelfde instellingen als vóór de aanpassingen van het vierde vierkant.

De tekening komt daardoor overeen met de onderste afbeelding van figuur 1.13.

### 4. De vijf gelijke vierkanten `thistle` maken

Ik kan de vijf gelijke vierkanten in één keer de kleur `thistle` geven door vóór het tekenen van deze vijf vierkanten te schrijven:

```javascript
fill('thistle');
```

De kleur blijft daarna actief totdat er een andere `fill()` wordt ingesteld.

### 5. `pop()` na het vijfde vierkant

Als ik `pop()` pas **na het vijfde vierkant** zet, blijven de aangepaste tekeninstellingen ook voor het vijfde vierkant actief.

Het vijfde vierkant krijgt daardoor dezelfde aangepaste instellingen als het vierde vierkant. Pas bij `pop()` worden de oude instellingen teruggezet. Het zesde vierkant krijgt daardoor weer de oorspronkelijke instellingen.

Dit komt doordat `push()` de instellingen opslaat en `pop()` ze pas terugzet op het moment dat `pop()` wordt uitgevoerd.
