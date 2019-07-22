CREATE TABLE IF NOT EXISTS parents (
    person_id INT,
    spouse_id INT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    date_of_birth DATETIME,
    child_id INT,
    address_line_1 VARCHAR(255),
    address_line_2 VARCHAR(255),
    zip_cde INT,
    employer VARCHAR(255),
    linkedin_url VARCHAR(255),
    twitter_url VARCHAR(255),
    facebook_url VARCHAR(255),
    instagram_url VARCHAR(255),
    gender INT,
    flag_is_parent INT DEFAULT 1,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    modified_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    added_by VARCHAR(255) 
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS associated_people (
    person_id INT,
    child_id INT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    relationship VARCHAR(255),
    date_of_birth DATETIME,
    gender INT,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    modified_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    added_by VARCHAR(255) 
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS child (
    child_id INT,
    parent_id_1 INT,
    parent_id_2 INT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    gender INT,
    date_of_birth DATETIME,
    potty_trained BOOLEAN,
    likes VARCHAR(255),
    dislikes VARCHAR(255),
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    modified_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    added_by VARCHAR(255) 
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS schedules (
    child_id INT,
    effective_date DATETIME,
    expiration_date DATETIME,
    days_of_week VARCHAR,
    start_time TIME,
    end_time TIME,
    fte DECIMAL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    modified_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    added_by VARCHAR(255) 
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS vacinations (
    child_id INT,
    vacinations VARCHAR(255),
    effective_date DATETIME,
    expiration_date DATETIME,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    modified_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    added_by VARCHAR(255) 
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS allergies (
    child_id INT,
    allergies VARCHAR(255),
    effective_date DATETIME,
    expiration_date DATETIME,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    modified_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    added_by VARCHAR(255) 
)  ENGINE=INNODB;