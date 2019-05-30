CREATE DATABASE shopping_cart;
USE shopping_cart;
CREATE TABLE UserInfo (
  ID  int NOT NULL AUTO_INCREMENT,
  name varchar(255),
  email varchar(255),
  password varchar(255),
  shipping_line1 varchar(255),
  shipping_line2 varchar(255),
  shipping_city char(30),
  shipping_state char(10),
  shipping_zip int(5),
  phoneNumber varchar(255),
  creditCard varchar(20),
  expiryDate varchar(255),
  CVV varchar(255),
  billingZip varchar (255),
  PRIMARY KEY (ID)
 );
