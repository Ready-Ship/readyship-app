DELETE FROM account;

INSERT INTO 
account 
(email, password, name) 
VALUES 
('test@test.com', 'test', 'mr. test');

INSERT INTO 
project 
(creatorid, title) 
VALUES 
((SELECT id from account LIMIT 1), 'test project');

INSERT INTO
task
(projectid, title)
VALUES
((SELECT id from project LIMIT 1), 'new task');

INSERT INTO 
account_has_task
(userid, taskid, iscomplete)
VALUES
((SELECT id from account LIMIT 1), (SELECT id from task LIMIT 1), NOW());

INSERT INTO
organization
(creatorid, name)
VALUES
((SELECT id from account LIMIT 1), 'organization');

INSERT INTO
organization_has_member
(organizationid, userid)
VALUES
((SELECT id FROM organization LIMIT 1), (SELECT id FROM account LIMIT 1));