CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	cpf TEXT NOT NULL UNIQUE,
	name TEXT NOT NULL
);

CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  phone TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  user_id INTEGER NOT NULL REFERENCES "users"("id"),
  carriers_id INTEGER NOT NULL REFERENCES "carriers"("id")
);

CREATE TABLE recharges (
  id SERIAL PRIMARY KEY,
  value INTEGER NOT NULL,
  date DATE NOT NULL DEFAULT NOW(),
  id_phone INTEGER NOT NULL REFERENCES "phones"("id")
);