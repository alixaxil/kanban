# Kanban tábla

## 1. Rövid leírás

Ez az alkalmazás egy virtuális Kanban táblát valósít meg, mely segítségével nyomon követhetjük a különböző munkahelyi feladatok életciklusát. (További információ: https://en.wikipedia.org/wiki/Kanban_board) 

## 2. Adatbázis modell

![uml diagram](db.jpg)

## 3. Funkcionális követelmények

* A felhasználó regisztrálhat, csatlakozhat csapatokhoz és létre is hozhat csapatot.
* Minden csapatnak egy táblája van és ezen jelennek a feladatok.
* Minden táblának létezik egy adminja, aki új feladatokat vehet fel a táblán és bárkit hozzárendelhet új feladatokhoz.
* Minden táblán léteznek  oszlopok: az elvégzendő feladatoknak egy, a haladó feladatoknak egy, a megrekedt feladatoknak egy és az elvégzett feladatoknak egy.
* A felhasználó egy csapat tábláján új feladatokat rendelhet magához, és azokat mozgathatja az oszlopok között.
* Minden feladatnak van leírása, minden feladat csak egy oszlopban lehet egyszerre.

