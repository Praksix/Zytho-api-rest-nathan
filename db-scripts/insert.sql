INSERT INTO breweries (name, city, country, description, url_website)
VALUES
('Hoppy Valley Brewery', 'Portland', 'USA', 'Brasserie artisanale célèbre pour ses IPA innovantes et ses bières expérimentales.', 'https://hoppyvalleybrewery.com'),
('Alpine Craft Brewers', 'Zurich', 'Switzerland', 'Petite brasserie nichée dans les Alpes, spécialisée dans les bières de montagne.', 'https://alpinecraftbrewers.ch'),
('La Brasserie du Canal', 'Toulouse', 'France', 'Brasserie locale proposant des bières saisonnières inspirées de la tradition française.', 'https://brasserieducanal.fr'),
('Redwood Barrel Co.', 'Vancouver', 'Canada', 'Experts en vieillissement en fût, leurs bières brunes et ambrées sont primées.', 'https://redwoodbarrel.ca'),
('Golden Sands Brewery', 'Sydney', 'Australia', 'Une brasserie côtière connue pour ses bières rafraîchissantes et ses saveurs tropicales.', 'https://goldensandsbrewery.au'),
('Nordic Waves Brewing', 'Oslo', 'Norway', 'Brasserie norvégienne pionnière dans les bières aux saveurs nordiques et aux ingrédients locaux.', 'https://nordicwaves.no'),
('Cervejaria Sol de Ouro', 'São Paulo', 'Brazil', 'Brasserie artisanale brésilienne mêlant tradition locale et styles modernes.', 'https://soldeouro.com.br'),
('Iron Kettle Brewing', 'Dublin', 'Ireland', 'Spécialiste des stouts et porters, avec une touche contemporaine irlandaise.', 'https://ironkettle.ie'),
('Mountain Peak Brewery', 'Denver', 'USA', 'Inspirée par les Rocheuses, cette brasserie propose des bières robustes et savoureuses.', 'https://mountainpeakbrewery.com'),
('Biergarten Meister', 'Munich', 'Germany', 'Brasserie familiale avec une tradition séculaire dans la production de lagers et weissbiers.', 'https://biergartenmeister.de');

INSERT INTO categories (name)
VALUES
('IPA'),
('Stout'),
('Pale Ale'),
('Saison'),
('Porter'),
('Lager'),
('Amber Ale'),
('Weissbier'),
('Sour'),
('Barleywine'),
('Belgian Dubbel'),
('Pilsner'),
('Gose'),
('Rauchbier'),
('Wheat Ale');


INSERT INTO beers (name, description, abv, type, color, price, id_brewery, id_category)
VALUES
('Nebula IPA', 'Une IPA artisanale avec un houblon intense et des notes d ananas et de mangue.', 6.8, 'IPA', 'Ambrée', 5.50,1,1),
('Velvet Stout', 'Un stout velouté et crémeux avec des arômes de café fraîchement torréfié.', 7.2, 'Stout', 'Noire', 6.00,1,2),
('Golden Hive Ale', 'Bière blonde brassée avec du miel local pour une touche douce et florale.', 5.5, 'Ale', 'Blonde', 5.00,2,3),
('Rustic Saison', 'Une saison artisanale aux notes épicées et légèrement acidulées.', 6.2, 'Saison', 'Ambrée', 5.80,3,4),
('Alpine Pils', 'Une pilsner artisanale, fraîche et croquante avec un arôme subtil de houblon.', 4.7, 'Lager', 'Blonde', 4.80,4,12),
('Nightfall Porter', 'Un porter intense avec des saveurs de cacao noir et une pointe de vanille.', 6.5, 'Porter', 'Brune', 5.90,5,5),
('Citrus Bomb Gose', 'Une gose acidulée avec des zestes de citron et une pointe saline rafraîchissante.', 4.2, 'Sour', 'Blonde', 5.20,6,9),
('Amber Trail', 'Bière ambrée artisanale avec des saveurs de caramel et de noisette.', 5.8, 'Amber Ale', 'Ambrée', 4.90,4,7),
('Maple Oak Dubbel', 'Une dubbel brassée avec du sirop d érable et vieillie en fût de chêne.', 8.0, 'Belgian Dubbel', 'Brune', 6.50,7,11),
('Berry Bliss Berliner', 'Un Berliner Weisse aux fruits rouges, acidulé et rafraîchissant.', 3.8, 'Sour', 'Rosée', 4.70,7,9),
('Forest Mist Pale Ale', 'Une pale ale douce avec des notes herbacées et un arôme d agrumes.', 5.2, 'Pale Ale', 'Blonde', 5.10,8,3),
('Dark Ember Rauchbier', 'Une bière fumée avec des arômes profonds de malt grillé et de bois.', 6.8, 'Rauchbier', 'Ambrée', 5.90,9,14),
('Tropical Escape IPA', 'Une IPA juteuse aux saveurs intenses de fruits de la passion et de goyave.', 7.0, 'IPA', 'Ambrée', 6.20,10,1),
('Chai Spice Stout', 'Un stout artisanal infusé aux épices chai pour une touche exotique et réconfortante.', 7.5, 'Stout', 'Noire', 6.40,3,2),
('Lavender Dream Wheat Ale', 'Une bière blanche légère avec une subtile touche de lavande et de citron.', 4.8, 'Wheat Ale', 'Blanche', 5.30,10,15);





INSERT INTO ingredients (name)
VALUES
('Malt d orge'),
('Houblon Cascade'),
('Levure de bière'),
('Eau de source'),
('Malt de blé'),
('Houblon Citra'),
('Miel local'),
('Zeste de citron'),
('Cacao'),
('Sirop d érable'),
('Vanille'),
('Epices chai'),
('Fruits rouges'),
('Levure belge'),
('Fleur de sel'),
('Coriandre'),
('Orange amère'),
('Café torréfié'),
('Noisette grillée'),
('Cannelle');






INSERT INTO users (first_name, password, email)
VALUES
('Alice', 'password123', 'alice@example.com'),
('Bob', 'bobsecure456', 'bob@example.com'),
('Charlie', 'charlie789', 'charlie@example.com'),
('David', 'david321', 'david@example.com'),
('Eva', 'evapass2024', 'eva@example.com'),
('Frank', 'frankpass678', 'frank@example.com'),
('Grace', 'grace2024pass', 'grace@example.com'),
('Hannah', 'hannahabc123', 'hannah@example.com'),
('Isaac', 'isaac5678', 'isaac@example.com'),
('Jack', 'jack12345', 'jack@example.com');


INSERT INTO favorites (id_user, id_beer)
VALUES
    (1,2),
    (1,3),
    (2,3),
    (3,3),
    (4,3),
    (5,4),
    (6,6),
    (7,1),
    (8,10),
    (9,11),
    (10,11),
    (8,11);

INSERT INTO reviews (comment, rating, id_user, id_beer)
VALUES
('Excellente bière, un goût bien équilibré avec une belle amertume. Parfait pour les amateurs d IPA !', 5,1,1),
('Un peu trop sucrée à mon goût, mais le goût de fruits est agréable. Idéale pour ceux qui aiment les bières légères.', 3,2,2),
('Un stout riche et crémeux avec des arômes de café grillé. Parfaite pour les soirées d hiver.', 4,3,2),
('Une bière vraiment unique, avec un goût épicé et une finition douce. Très rafraîchissante!', 4,4,3),
('Super bière blonde, très légère et facile à boire. Parfaite pour un apéritif entre amis.', 4,5,5),
('Trop amère pour moi, mais les amateurs d IPA pourraient apprécier son caractère prononcé.', 2,6,6),
('Une belle surprise ! Une bière bien équilibrée avec des saveurs complexes, mais non envahissantes.', 5,7,7),
('Bière légère et rafraîchissante. Parfait pour une journée chaude. J adore !', 4,8,9),
('Le goût est correct mais je m attendais à quelque chose de plus fort en caractère.', 3,9,10),
('Bière exceptionnelle avec un goût intense de malt et de caramel. Une de mes préférées !', 5,10,11);

INSERT INTO beer_ingredients (id_beer, id_ingredient)
VALUES
    (1,2),
    (2,3),
    (1,3),
    (3,3),
    (4,3),
    (5,4),
    (6,6),
    (7,1),
    (8,10),
    (9,11),
    (10,11),
    (13,11),
    (10,14),
    (8,11);


INSERT INTO images (url, alt, id_beer) VALUES
('https://example.com/images/hazy-ipa.jpg', 'Photo of Hazy IPA beer', 1),
('https://example.com/images/stout.jpg', 'Dark Stout beer image', 2),
('https://example.com/images/saison.jpg', 'Saison beer with golden color', 3),
('https://example.com/images/pilsner.jpg', 'Refreshing Pilsner beer', 4),
('https://example.com/images/porter.jpg', 'Rich Porter beer', 5),
('https://example.com/images/double-ipa.jpg', 'Strong Double IPA beer', 6),
('https://example.com/images/weissbier.jpg', 'Traditional Weissbier beer', 7),
('https://example.com/images/amber-ale.jpg', 'Amber Ale with caramel hints', 8),
('https://example.com/images/fruit-ale.jpg', 'Fruity Ale with vibrant colors', 9),
('https://example.com/images/belgian-trip.jpg', 'Belgian Tripel with frothy head', 9);

