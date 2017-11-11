use my_schema;
create table childStatus (
	ID int NOT NULL AUTO_INCREMENT,
    child_id int(4) NOT NULL,
    childStatus varchar(255) NOT NULL,
    changeDate timestamp NOT NULL,
    PRIMARY KEY(ID),
    FOREIGN KEY(child_id) REFERENCES children(id)
)