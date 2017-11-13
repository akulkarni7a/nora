use my_schema;
create table settings (
	school varchar(255) NOT NULL,

    contacted_email varchar(255) NOT NULL,
    contacted_email_delay int(10) NOT NULL,
    contacted_email_text text(65535) NOT NULL,
    contacted_text varchar(255) NOT NULL,
    contacted_text_delay int(10) NOT NULL,
    contacted_text_text text(65535) NOT NULL,

    tourscheduled_email varchar(255) NOT NULL,
    tourscheduled_email_delay int(10) NOT NULL,
    tourscheduled_email_text text(65535) NOT NULL,
    tourscheduled_text varchar(255) NOT NULL,
    tourscheduled_text_delay int(10) NOT NULL,
    tourscheduled_text_text text(65535) NOT NULL,


    tourcompleted_email varchar(255) NOT NULL,
    tourcompleted_email_delay int(10) NOT NULL,
    tourcompleted_email_text text(65535) NOT NULL,
    tourcompleted_text varchar(255) NOT NULL,
    tourcompleted_text_delay int(10) NOT NULL,
    tourcompleted_text_text text(65535) NOT NULL,

    registered_email varchar(255) NOT NULL,
    registered_email_delay int(10) NOT NULL,
    registered_email_text text(65535) NOT NULL,
    registered_text varchar(255) NOT NULL,
    registered_text_delay int(10) NOT NULL,
    registered_text_text text(65535) NOT NULL,

    lostopp_email varchar(255) NOT NULL,
    lostopp_email_delay int(10) NOT NULL,
    lostopp_email_text text(65535) NOT NULL,
    lostopp_text varchar(255) NOT NULL,
    lostopp_text_delay int(10) NOT NULL,
    lostopp_text_text text(65535) NOT NULL,

    changeDate timestamp NOT NULL,
    PRIMARY KEY(school)
)