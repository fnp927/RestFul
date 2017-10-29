
DROP TABLE IF EXISTS `AppointClin`;
CREATE TABLE AppointClin
(
ClinicianId int NOT NULL,
MornFirst int,
MornSecond int,
NoonFirst int,
NoonSecond int,
AppDate date NOT NULL,
PRIMARY KEY (ClinicianId,AppDate)
);

INSERT INTO `pcos`.`AppointClin` (`ClinicianId`,`AppDate`) VALUES ('4','2017-10-16');
INSERT INTO `pcos`.`AppointClin` (`ClinicianId`,`AppDate`) VALUES ('4','2017-10-17');
INSERT INTO `pcos`.`AppointClin` (`ClinicianId`,`AppDate`) VALUES ('4','2017-10-18');
INSERT INTO `pcos`.`AppointClin` (`ClinicianId`,`AppDate`) VALUES ('4','2017-10-19');
INSERT INTO `pcos`.`AppointClin` (`ClinicianId`,`AppDate`) VALUES ('4','2017-10-20');
INSERT INTO `pcos`.`AppointClin` (`ClinicianId`,`AppDate`) VALUES ('4','2017-10-21');
INSERT INTO `pcos`.`AppointClin` (`ClinicianId`,`AppDate`) VALUES ('4','2017-10-22');;
