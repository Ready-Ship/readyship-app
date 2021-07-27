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
(accountid, taskid)
VALUES
((SELECT id from account LIMIT 1), (SELECT id from task LIMIT 1));