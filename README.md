# 📸 Simple JavaScript Slideshow from `/src`

**EN - English**

A lightweight, pure **HTML + CSS + JavaScript** fullscreen slideshow  
that automatically displays all images from the `/src/` folder  
with smooth crossfades and no page reload required.

New images added to `/src/` are detected automatically. ✨

---

## 🧱 Project Structure
/index.html
/style.css
/script.js
/src/ ← put your images here (jpg, jpeg, png, gif, webp, bmp)


---

## 🚀 Features

- 📂 Automatically reads all images from `/src/`
- 🔁 Infinite looping slideshow
- 🖤 Black fullscreen background with centered images (height-fitted)
- ⚡ Auto-detects new images without reloading (polling every few seconds)
- 💡 No backend or Node.js required — only a web server with **Autoindex enabled**

---

## ⚙️ Setup Instructions

1. **Upload the project**

   Upload all files (`index.html`, `style.css`, `script.js`)  
   and your image folder `src/` to your web server, e.g.:

/www/htdocs/.../your-domain/
├── index.html
├── style.css
├── script.js
└── src/
├── image1.jpg
├── image2.png
└── ...

2. **Enable Autoindex**

The slideshow uses a simple directory listing to get all image filenames.

### If you’re hosting on all-inkl.com:
- Log in to your **KAS** panel  
- Go to **Domain → Directories (Subdomains)**  
- Click the ⚙️ icon next to your directory  
- Enable **“Directory listing”**  
- Save ✅

**Alternatively**, enable it manually with an `.htaccess` file in your web root:
```apache
Options +Indexes
```

3. **Open your site**

Visit:

https://your-domain.com/


You should immediately see the slideshow.

You can test Autoindex by visiting:

https://your-domain.com/src/


— if you see a simple list of image files, it’s working.

🛠️ Configuration

Inside script.js, you can tweak:

const SLIDE_MS = 5000; // display duration per image (in ms)
const POLL_MS  = 5000; // interval to check for new images (in ms)


Possible extensions:

Random / shuffle mode

Keyboard controls (← → Pause)

Adjustable fade time

Captions or EXIF metadata display

---

**DE - Deutsch**
Eine schlanke, reine **HTML + CSS + JavaScript** Vollbild-Diashow,  
die automatisch alle Bilder aus dem Ordner **`/src/`** anzeigt —  
mit sanften Überblendungen und ganz ohne Neuladen der Seite.

Neu hinzugefügte Bilder in `/src/` werden automatisch erkannt. ✨

---

## 🧱 Projektstruktur
/index.html
/style.css
/script.js
/src/ ← hier kommen deine Bilder hin (jpg, jpeg, png, gif, webp, bmp)

---

## 🚀 Funktionen

- 📂 Liest automatisch alle Bilder aus `/src/`
- 🔁 Endlose Diashow (Loop)
- 🖤 Schwarzer Vollbildhintergrund mit zentrierten, an die Höhe angepassten Bildern
- ⚡ Erkennt neue Bilder automatisch (Polling alle paar Sekunden)
- 💡 Kein Backend oder Node.js nötig – nur ein Webserver mit **aktiviertem Autoindex**

---

## ⚙️ Einrichtung

1. **Projekt hochladen**

   Lade alle Dateien (`index.html`, `style.css`, `script.js`)  
   sowie deinen Bilderordner `src/` auf deinen Webserver hoch, z. B.:

/www/htdocs/.../deine-domain/
├── index.html
├── style.css
├── script.js
└── src/
├── bild1.jpg
├── bild2.png
└── ...

2. **Autoindex aktivieren**

Die Diashow nutzt ein einfaches Verzeichnislisting, um alle Bildnamen zu laden.

### Wenn du bei all-inkl.com hostest:
- Melde dich im **KAS** (Kunden-Admin-System) an  
- Menü: **Domain → Verzeichnisse (Subdomains)**  
- Klicke auf das ⚙️-Symbol beim gewünschten Verzeichnis  
- Aktiviere **„Verzeichnislisting“**  
- Speichern ✅  

**Alternativ:** Aktiviere es manuell über eine `.htaccess`-Datei im Webverzeichnis:
```apache
Options +Indexes
```

**3. Seite öffnen**

Rufe deine Domain im Browser auf:

https://deine-domain.de/


Du solltest sofort die Diashow sehen.

Du kannst den Autoindex testen, indem du aufrufst:

https://deine-domain.de/src/


— Wenn du dort eine einfache Liste mit Bilddateien siehst, funktioniert alles.

🛠️ Konfiguration

In der Datei script.js kannst du folgende Werte anpassen:

const SLIDE_MS = 5000; // Anzeigedauer pro Bild (in Millisekunden)
const POLL_MS  = 5000; // Intervall, um nach neuen Bildern zu suchen (in Millisekunden)

Mögliche Erweiterungen:

Zufalls-/Shuffle-Modus

Tastatursteuerung (← → Pause)

Anpassbare Überblendzeit

Bildunterschriften oder EXIF-Daten anzeigen

