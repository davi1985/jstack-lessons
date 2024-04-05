CREATE DATABASE mycontacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);


/**
 * docker ps - view container running
 * create and run:  docker run --name pg
                    -e POSTGRES_USER=root
 *                  -e POSTGRES_PASSWORD=root
                    -p 5432:5432 -d postgres
 *
 * Access docker container:
 * docker exec -it pg bash
 * pslq -U root
 */
