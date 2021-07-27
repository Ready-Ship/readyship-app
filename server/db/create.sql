CREATE TABLE IF NOT EXISTS "account" (
  id SERIAL PRIMARY KEY,
  email VARCHAR(60) NOT NULL UNIQUE,
  password VARCHAR(72) NOT NULL,
  name VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS "project" (
  id SERIAL PRIMARY KEY,
  creatorid INT NOT NULL REFERENCES account (id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "task" (
  id SERIAL PRIMARY KEY,
  projectid INT NOT NULL REFERENCES project (id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "account_has_task" (
  id SERIAL PRIMARY KEY,
  accountid INT NOT NULL REFERENCES account (id) ON DELETE CASCADE,
  taskid INT NOT NULL REFERENCES task (id) ON DELETE CASCADE
);

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
        "sess" json NOT NULL,
        "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");