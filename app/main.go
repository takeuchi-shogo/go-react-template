package main

import (
	"fmt"
	"html/template"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type Data struct {
	Version int64
}

func main() {

	router := gin.Default()
	router.Static("/css", "./public/css")
	router.Static("/js", "./public/js")

	router.SetFuncMap(template.FuncMap{
		"version": func() string {
			return "1.0.0" + fmt.Sprintf(".%d", time.Now().Unix())
		},
	})

	router.LoadHTMLGlob("public/*.html")

	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})

	router.GET("/about", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})

	router.Run(":8080")
}
