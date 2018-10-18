create database techtest
    character set = 'utf8mb4';

use techtest;

create table recipe (
  id char(8) not null primary key,
  name varchar(191) not null,
  descripton varchar(191)
);
alter table recipe
    add constraint recipe_uk
    unique key (name);

create table ingredient (
  id char(8) not null primary key,
  name varchar(191) not null,
  kcal bigint(191) not null,
  sugar bigint(8) not null,
  protein bigint(191) not null,
  salt varchar(191) not null
);
alter table ingredient
    add constraint ingredient_uk
    unique key(name);

create table recipe_ingredient (
  recipe_id char(8) not null,
  ingredient_id char(8) not null
);

alter table recipe_ingredient
  add constraint recipe_ingredient_uk
  unique key (recipe_id, ingredient_id),
  add constraint recipe_ingrecient_uk_recipe_fk
  foreign key (recipe_id) references recipe(id),
  add constraint recipe_ingredient_uk_ingredient_fk
  foreign key (ingredient_id) references ingrecient(id);

insert into recipe(id, name)
values
       ('1', 'Tortilla'),
       ('2', 'Paella de carne'),
       ('3', 'Sushi'),
       ('4', 'Pizza margarita'),
       ('5', 'Pastel de carne'),
       ('6', 'Pasta al pesto'),
       ('7', 'Ensalada'),
       ('8', 'Bizcocho'),
       ('9', 'Arroz con leche'),
       ('10', 'Pizza barbacoa'),
       ('11', 'Pizza cuatro quesos'),
       ('12', 'Paella de marisco')
;

insert into ingredient(id, name, kcal, sugar, protein, salt)
values
       ('1', 'Huevo', 110, 20, 30, 10),
       ('2', 'Patata', 150, 50, 20, 30),
       ('3', 'Arroz', 76, 33, 21, 100),
       ('4', 'Gamba', 40, 5, 20, 40),
       ('5', 'Pescado', 40, 30),
       ('6', 'Harina', 75, 50, 30, 43),
       ('7', 'Queso', 140, 70, 50, 30),
       ('8', 'Albahaca', 10, 5, 7, 15),
       ('9', 'Tomate', 20, 10, 19, 5),
       ('10', 'Carne', 130, 10, 99, 54),
       ('11', 'Pasta', 208, 50, 80, 87),
       ('12', 'Pesto', 54, 30, 20, 60),
       ('13', 'Lechuga', 11, 4, 12, 9),
       ('14', 'Azucar', 201, 100, 30, 21),
       ('15', 'Leche', 65, 42, 39, 29),
       ('16', 'Salsa barbacoa', 250, 99, 40, 105),
       ('17', 'Bogabante', 70, 30, 80, 77),
       ('18', 'Canela', 30, 20, 90, 11);

insert into recipe_ingredient
values
        ('1', '1'),
        ('1', '2'),
        ('2', '3'),
        ('2', '5'),
        ('3', '3'),
        ('3', '5'),
        ('3', '4'),
        ('4', '6'),
        ('4', '7'),
        ('4', '8'),
        ('4', '9'),
        ('5', '2'),
        ('5', '10'),
        ('6', '7'),
        ('6', '11'),
        ('6', '12'),
        ('7', '13'),
        ('7', '9'),
        ('7', '1'),
        ('8', '1'),
        ('8', '15'),
        ('8', '14'),
        ('9', '3'),
        ('9', '14'),
        ('9', '18'),
        ('10', '6'),
        ('10', '7'),
        ('10', '10'),
        ('10', '16'),
        ('11', '6'),
        ('11', '9'),
        ('10', '9'),
        ('11', '7'),
        ('12', '3'),
        ('12', '4'),
        ('12', '5'),
        ('12', '17');

