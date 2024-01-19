INSERT INTO department
VALUES (1, "Management"),
       (2, "Kitchen"),
       (3, "Janitorial"),
       (4, "Front End");
INSERT INTO role
VALUES (1, "Team Lead", 30000, 1),
       (2, "Drive Thru", 21000, 4),
       (3,"Front line", 22000, 2),
       (4,"Dish Washer", 22500, 3),
       (5, "Cashier", "21000", 4);
INSERT INTO employee
VALUES (1, "Halie", "Briggs", 30000, 1, NULL),
       (2, "Sergio", "Monroe", 22500, 4, 1),
       (3, "Brady", "Garret", 21000, 5, 1),
       (4, "Ainsley", "Soto", 21000, 2, 1),
       (5, "Renee", "Owens", 22000, 3, 1);
      