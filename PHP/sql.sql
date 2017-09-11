SELECT * FROM celebs;

CREATE TABLE table_name (
column_1 data_type,
column_2 data_type,
column_3 data_type
);

CREATE TABLE celebs (id INTEGER, name TEXT, age INTEGER);

INSERT INTO celebs (id, name, age) VALUES (1, 'Justin Bieber', 21);

SELECT * FROM celebs;

INSERT INTO celebs (id, name, age) VALUES (2, 'Beyonc Knowles', 33);
INSERT INTO celebs (id, name, age) VALUES (3, 'Jeremy Lin', 26);
INSERT INTO celebs (id, name, age) VALUES (4, 'Taylor Swift', 26);

SELECT name FROM celebs;

UPDATE celebs SET age = 22 WHERE id = 1;

SELECT * FROM celebs;

ALTER TABLE celebs ADD COLUMN twitter_handle TEXT;

SELECT * FROM celebs;

SELECT name, imdb-rating FROM movies;

SELECT DISTINCT genre FROM movies;

SELECT * FROM imdb-rating;

SELECT * FROM movies WHERE name LIKE 'Se_en';

SELECT * FROM movies WHERE name LIKE 'a%';

SELECT * FROM movies WHERE name LIKE '%man%';

SELECT * FROM movies WHERE name LIKE 'A%'; 

SELECT * FROM movies WHERE name BETWEEN 'A' AND 'J';

SELECT * FROM movies WHERE year BETWEEN 1990 AND 2000;

SELECT * FROM movies WHERE year BETWEEN 1990 AND 2000 AND genre = 'comedy';

SELECT* FROM movies WHERE genre = 'comedy' OR year < 1980;

SELECT * FROM movies ORDER BY imdb-rating DESC;

SELECT * FROM movies ORDER BY imdb-rating ASC LIMIT 3;

SELECT * FROM movies ORDER BY imdb-rating DESC LIMIT 3;

SELECT COUNT(*) FROM fake_apps;

SELECT COUNT(*) FROM fake_apps WHERE price = 0;

SELECT price, COUNT(*) FROM fake_apps GROUP BY price;

SELECT price, COUNT(*) FROM fake_apps WHERE downloads > 2000 GROUP BY price;

SELECT SUM(downloads) FROM fake_apps;

SELECT category, SUM(downloads) FROM fake_apps GROUP BY category;

SELECT MAX(category) FROM fake_apps;

SELECT name, category, MAX(downloads) FROM fake_apps GROUP BY category;

SELECT MIN(downloads) FROM fake_apps;

SELECT name, categoty FROM fake_apps GROUP BY categoty;

SELECT AVG(downloads) FROM fake_apps;

SELECT price, AVG(downloads) FROM fake_apps GROUP BY price;

SELECT price, ROUND(AVG(downloads), 2) FROM fake_apps GROUP BY price;

SELECT price, ROUND(AVG(downloads)) FROM fake_apps GROUP BY price;

CREATE TABLE artists(id INTEGER PRIMARY KEY, name TEXT);

SELECT * FROM albums;
SELECT * FROM  artists;

SELECT * FROM artists WHERE id = 3;
SELECT * FROM albums WHERE artist_id = 3;

SELECT albums.name, albums.year, artists.name FROM albums, artists;

SELECT * FROM albums JOIN artists ON albums.artist_id = artist_id;

SELECT * FROM albums LEFT JOIN ON albums.artist_id = artists.id;

SELECT albums.name AS 'Album', albums.year, artists.name AS 'Artist' FROM albums JOIN artists ON albums.artist_id = artists.id WHERE albums.year < 1980;

UPDATE celebs SET twitter_handle = '@taylorswift13' WHERE id 4;

SELECT * FROM celebs;

/*UPDATE celebs 
SET twitter_handle = '@taylorswift13' 
WHERE id = 4; 

DELETE FROM celebs WHERE twitter_handle IS NULL;

SELECT * FROM celebs;*/
