Hi und willkommen zu meiner Umsetzung eine Website mit verschiedenen Funktionen zu entwickeln.
Diese habe ich dem beliebten Videospiel Super Smash Bros Ultimate gewidmet, welches ein Kampfspiel mit über 80 Charakteren ist. Ziel des Spiels ist es, die Gegner aus der Arena zu befördern, wobei jeder Kämpfer über individuelle Fähigkeiten und Spielmechaniken verfügt.
Die Webanwendung dient dazu genau diese Charektere bewerten zu können. Das verwendete Ranking-System mit den Stufen S, A, B, C, D, E stammt aus der sogenannten Tier-List-Kategorisierung, die vor allem im Bereich von kompetitiven Videospielen wie Kampfspielen verbreitet ist.
Dabei steht „S“ für „Superior“ (höchste Stufe), gefolgt von absteigend bewerteten Klassen – analog zu Schulnoten oder Leistungsstufen. Tier-Lists dienen dazu, spielbare Charaktere nach ihrer Stärke, Nützlichkeit oder Beliebtheit zu ordnen.
Es können Rankings vergeben, gelöscht und ausgelesen werden, und das für jeden einzelnen Charakter, wie bspw. Mario oder Pac-Man.


###BACKEND###

REST-API , mit der Nutzer Charaktere aus dem Spiel Super Smash Bros Ulzimate bewerten können.  
Daten werden in PostgreSQl gespeichert (-pgAdmin), Node.js u. express verwendet


| Datei / Ordner   | Funktion                                                   |
|------------------|------------------------------------------------------------|
| `server.js`      | Start Servee                                               |
| `db.js`          | Verbindung zur Datenbank                                   |
| `routes.js`      | Endpunkte für das Ranking-System (GET, POST, DELETE)       |
| `.env`           | Datenbank-Zugangsdaten, in git.ignore                      |


Einsatz KI
KI wurde im Projekt zur Unterstützung eingesetzt, vor allem zur Strukturierung, Codeoptimierung und für gezielte Hilfestellungen bei technischen Fragen und wurde angepasst für Clean Code. Überweigend beim bakcend:

server.js: Logik, Struktur
routes.js: Query-Logik, try catch Blöcke, Filter nach user_id usw, Select-Abfrage vor insert n POST/ranking, passende HTTP-Statuscodes
db.js: Verbindung Datenbank über pg u .env
Readme für Formulierungen, Tabellenaufbau
- Vereinfachung von Kontrollstrukturen und Bedingungslogik



### 🧪 Test-Zugang zur Render-Datenbank (für Ranking):
DATABASE_URL=postgresql://meine_db_user:1JLBIjKPZtCexmSuwY0EKHJEQfOtbtNK@dpg-cvhs8d1c1ekc738f28og-a.frankfurt-postgres.render.com:5432/meine_db
 -> Verbindung zur Datenbank
 .env aus gitignore entfernz



Starten der Anwendung nach cloning:
git clone https://github.com/cookatsu/backend-smash.git
cd backend-smash
npm install
node server.js


Die API ist anschließend erreichbar unter: http://localhost:3000 !!!

ROuten: (port 3000)
GET    -    /                                   -   Server läuft
GET    -    /ranking                            -   alle Bewertungen pro user_id
POST   -    /ranking                            -   fügt Bewertung hinzu einmalig pro Charakter & User
DELETE -    /ranking/:user_id/:character_name   -   Löscht Bewertung für spezif Char und User


                                               VIEL SPAß
                                           𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧
