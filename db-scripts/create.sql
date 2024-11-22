CREATE TABLE breweries
(
    id_brewery SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    city varchar(100) NOT NULL,
    country varchar(100) NOT NULL,
    description text NOT NULL,
    url_website varchar(100)
);


CREATE TABLE categories
(
    id_category SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL
);

CREATE TABLE beers
(
    id_beer SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    description text NOT NULL,
    abv integer NOT NULL,
    type varchar(100),
    color varchar(100),
    price decimal(4,2) NOT NULL,
    id_brewery int,
    CONSTRAINT fk_id_beer_brewery FOREIGN KEY (id_brewery)
    REFERENCES breweries(id_brewery),
    id_category int,
    CONSTRAINT fk_id_beer_category FOREIGN KEY (id_category)
    REFERENCES categories(id_category)
);

CREATE TABLE images
(
    id_img SERIAL PRIMARY KEY,
    url varchar(100) NOT NULL,
    alt varchar(100),
    id_beer int,
    CONSTRAINT fk_id_image_beer FOREIGN KEY (id_beer)
    REFERENCES beers(id_beer)
);






CREATE TABLE ingredients
(
    id_ingredient SERIAL PRIMARY KEY,
    name varchar(100)
);


CREATE TABLE beer_ingredients
(
    id_beer_ingredients SERIAL PRIMARY KEY,
    id_beer INT NOT NULL,
    CONSTRAINT fk_id_beer_ingredient FOREIGN KEY (id_beer)
    REFERENCES beers(id_beer),
    id_ingredient INT NOT NULL,
    CONSTRAINT fk_id_ingredient_beer FOREIGN KEY (id_ingredient)
    REFERENCES ingredients(id_ingredient)
);






CREATE TABLE users
(
    id_user SERIAL PRIMARY KEY,
    first_name varchar(100) NOT NULL,
    password varchar(100) NOT NULL,
    email varchar(100) NOT NULL UNIQUE
);

CREATE TABLE favorites
(
    id_favorite SERIAL PRIMARY KEY,
    id_user int NOT NULL,
    CONSTRAINT fk_id_fav_user FOREIGN KEY (id_user)
    REFERENCES users(id_user),
    id_beer int NOT NULL,
    CONSTRAINT fk_id_fav_beer FOREIGN KEY (id_beer)
    REFERENCES beers(id_beer)
);

CREATE TABLE reviews
(
    id_review SERIAL PRIMARY KEY,
    comment text NOT NULL,
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    id_user int,
    CONSTRAINT fk_id_review_user FOREIGN KEY (id_user)
    REFERENCES users(id_user),
    id_beer int,
    CONSTRAINT fk_id_review_beer FOREIGN KEY (id_beer)
    REFERENCES beers(id_beer)
);