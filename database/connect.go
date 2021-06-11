package database

import (
	"festi.io/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(mysql.Open("root:rootroot@/go_auth"), &gorm.Config{})

	if err != nil {
		panic("could not connect")
	}

	DB = connection

	connection.AutoMigrate(&models.User{})
}
