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

insert into Users values('test','test','test','test','test')
