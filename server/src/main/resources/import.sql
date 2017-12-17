INSERT INTO USER (ID, VERSION, USERNAME, PASSWORD, ROLE) VALUES (1, 0, 'admin', 'admin', 'ADMIN');

INSERT INTO USER (ID, VERSION, USERNAME, PASSWORD, ROLE) VALUES (2, 0, 'alma', 'korte', 'USER');

INSERT INTO USER (ID, VERSION, USERNAME, PASSWORD, ROLE) VALUES (3, 0, 'hubert', 'cumberdale', 'USER');

INSERT INTO USER (ID, VERSION, USERNAME, PASSWORD, ROLE) VALUES (4, 0, 'marjory', 'baxter', 'USER');

INSERT INTO USER (ID, VERSION, USERNAME, PASSWORD, ROLE) VALUES (5, 0, 'jeremy', 'fisher', 'USER');

INSERT INTO TEAM (ID, VERSION, NAME) VALUES (1, 0, 'team_effort');

INSERT INTO TEAM (ID, VERSION, NAME) VALUES (2, 0, 'team_salad');

INSERT INTO TASK(ID, VERSION, TEXT, DESCRIPTION, PROGRESS, ASSIGNEE_ID, TEAM_ID) VALUES (1, 0, 'Christmas decoration', 'Decorate the office.', 'BACKLOG', 1, 1);

INSERT INTO TASK(ID, VERSION, TEXT, DESCRIPTION, PROGRESS, ASSIGNEE_ID, TEAM_ID) VALUES (2, 0, 'Write frontend', 'Write angular frontend for uni project.', 'BACKLOG', 2, 1);

INSERT INTO TASK(ID, VERSION, TEXT, DESCRIPTION, PROGRESS, ASSIGNEE_ID, TEAM_ID) VALUES (3, 0, 'Bake a cake', 'Bake a cake for Salad Fingers. Beware the oven door!', 'BACKLOG', 3, 1);

INSERT INTO TASK(ID, VERSION, TEXT, DESCRIPTION, PROGRESS, ASSIGNEE_ID, TEAM_ID) VALUES (4, 0, 'Clean the office up', 'Sweep and mop the floors, clean rusty spoons.', 'BACKLOG', 3, 2);

INSERT INTO TASK(ID, VERSION, TEXT, DESCRIPTION, PROGRESS, ASSIGNEE_ID, TEAM_ID) VALUES (5, 0, 'Write backend', 'Write backend for uni project.', 'IN_PROGRESS', 4, 1);