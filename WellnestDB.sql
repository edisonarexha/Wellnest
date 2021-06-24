create database Wellnest
use Wellnest


create table Users(
UserID int identity(1,1),
Name varchar(50),
Email varchar(50),
Username varchar(50),
Password varchar(50),
Role varchar(50)
)
select * from Users

insert into Users values('test','test','test','test','test');

create table Diseases(
DiseasesID int identity(1,1),
Name varchar(50),
information varchar(1000),
PhotoName varchar(500)
)
drop table Diseases
select * from Diseases

insert into Diseases values('Zika','Zika virus disease is caused by a virus transmitted primarily by Aedes mosquitoes, which bite during the day. Symptoms are generally mild and include fever, rash, conjunctivitis, muscle and joint pain, malaise or headache.','Zika.jpg');
insert into Diseases values('Ebola','Ebola, also known as Ebola virus disease (EVD) or Ebola hemorrhagic fever (EHF), is a viral hemorrhagic fever of humans and other primates caused by ebolaviruses. Signs and symptoms typically start between two days and three weeks after contracting the virus with a fever, sore throat, muscular pain, and headaches.','Ebola.jpg');
insert into Diseases values('Hiv','HIV (human immunodeficiency virus) is a virus that attacks the bodys immune system. If HIV is not treated, it can lead to AIDS (acquired immunodeficiency syndrome). There is currently no effective cure. Once people get HIV, they have it for life.','Hiv.jpg');
insert into Diseases values('BacterioPhages','Bacteriophages (BPs) are viruses that can infect and kill bacteria without any negative effect on human or animal cells. For this reason, it is supposed that they can be used, alone or in combination with antibiotics, to treat bacterial infections.','bacteriophages.jpg');
insert into Diseases values('Influenza','Influenza (flu) is a contagious respiratory illness caused by influenza viruses. It can cause mild to severe illness. Serious outcomes of flu infection can result in hospitalization or death.','Influenza.jpg');


!--Contact
Create Database ContactUsDB

create table dbo.Contact(
	UsersID int identity (1,1),
	Name varchar (50),
	Email varchar (50),
	Message text
)

select * from dbo.Contact


insert into dbo.Contact values ('Altrit', 'altrit@gmail.com','Keep up the good work bro')
insert into dbo.Contact values ('Izibilihane', 'izibilihane@gmail.com','Je ni te mrekullushem, jem ikrenar mepu nen tuj')

create table Profile(
ProfileID int identity(1,1),
dateofBirth date,
bloodType varchar(50),
alergies varchar(50),
vaccination varchar(50),
Photo varchar(max)
)

select * from Profile
insert into Profile values('test','test','test','test','test');

create table Covid19(
covidID int identity(1,1),
CountryName varchar(60),
Cases int,
Recoveries int,
deaths int,
)

select * from Covid19
insert into Covid19 values ('Germany','4643213','232113421','23321');
insert into Covid19 values ('Bullgaria', '213204','322123','231728');