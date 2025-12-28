CREATE TABLE terrains (
    id SERIAL PRIMARY KEY,
    nom TEXT,
    geom GEOMETRY(POLYGON, 4326)
);
