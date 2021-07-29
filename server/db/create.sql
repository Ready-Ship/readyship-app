CREATE TABLE IF NOT EXISTS "account" (
  id SERIAL PRIMARY KEY,
  email VARCHAR(60) NOT NULL UNIQUE,
  password VARCHAR(72) NOT NULL,
  name VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS "project" (
  id SERIAL PRIMARY KEY,
  creatorid INT NOT NULL REFERENCES account (id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL, 
  description VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "project_has_assignee" (
  id SERIAL PRIMARY KEY, 
  userid INT NOT NULL REFERENCES account (id) ON DELETE CASCADE,
  projectid INT NOT NULL REFERENCES project (id) ON DELETE CASCADE 
);

CREATE TABLE IF NOT EXISTS "task" (
  id SERIAL PRIMARY KEY,
  projectid INT NOT NULL REFERENCES project (id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "account_has_task" (
  id SERIAL PRIMARY KEY,
  userid INT NOT NULL REFERENCES account (id) ON DELETE CASCADE,
  taskid INT NOT NULL REFERENCES task (id) ON DELETE CASCADE,
  iscomplete TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "organization" (
  id SERIAL PRIMARY KEY,
  creatorid INT NOT NULL REFERENCES account (id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "organization_has_member" (
  id SERIAL PRIMARY KEY,
  organizationid INT NOT NULL REFERENCES organization (id) ON DELETE CASCADE,
  userid INT NOT NULL REFERENCES account (id) ON DELETE CASCADE,
  iscomplete TIMESTAMP
);

ALTER TABLE "organization_has_member" DROP CONSTRAINT IF EXISTS "organization_has_member_uq";
ALTER TABLE "organization_has_member" ADD CONSTRAINT "organization_has_member_uq" UNIQUE(userid, organizationid);

CREATE TABLE IF NOT EXISTS "session" (
  "sid" varchar NOT NULL COLLATE "default",
        "sess" json NOT NULL,
        "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" DROP CONSTRAINT IF EXISTS "session_pkey";
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "session" ("expire");