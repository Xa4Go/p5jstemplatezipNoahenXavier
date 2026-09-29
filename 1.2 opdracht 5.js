### 1. `translate(90,-10)`

Ik verander `translate(0,0)` in:

```javascript
translate(90,-10);
```

Het minteken bij de `y` betekent dat de oorsprong **10 pixels omhoog** wordt verplaatst. De `90` zorgt ervoor dat de oorsprong **90 pixels naar rechts** gaat.

Ik voorspel dat het **huis 90 pixels naar rechts en 10 pixels omhoog** verplaatst wordt.

### 2. Tweede `translate`

Mijn voorspelling klopt. Als ik de `//` bij de tweede `translate` weghaal, wordt ook de rest van de tekening na het huis verplaatst.

Alleen het huis werd eerst verplaatst omdat de `translate()` pas vóór het tekenen van het huis stond. De maan en de boom worden daarna getekend en gebruiken daardoor nog de oorspronkelijke coördinaten.

### 4. Schetsen

**Zonder `translate`:**

```text
┌──────────────────────────────┐
│                              │
│                              │
│                              │
│                              │
└──────────────────────────────┘
↑
Het kleine vierkant staat linksboven
in het grote vierkant.
```

**Met beide `translate`-regels:**

```text
        ┌──────────────────────┐
        │                      │
        │     ┌──────────┐     │
        │     │          │     │
        │     │          │     │
        │     └──────────┘     │
        │                      │
        └──────────────────────┘
```

Het grote vierkant begint bij **(25,25)**. Het kleine vierkant komt door de tweede `translate(200,50)` op **(225,75)** te staan.

### 5. Controle

Na het uitvoeren van de code bleek dat mijn tekening **klopte**. De `translate()`-functie verplaatst de oorsprong, waardoor je vervolgens eenvoudig vanaf `(0,0)` kunt tekenen.
