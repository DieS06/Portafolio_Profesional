from django.db import models

# Create your models here.
# Modelo para la base de datos, es lo que envia en el migrate.

class Project(models.Model):
    name = models.CharField(max_length=200)
    #Extender a la interfaz
    def __str__(self):
        return self.name

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    #Relacion entre tablas, el on delete on CASCADE 
    #es que cuando se borra un proyecto se elimina toda la cadena relacionada.
    of_project = models.ForeignKey(Project, on_delete=models.CASCADE) 
    
    def __str__(self):
        return self.title + ' - ' + self.of_project.name