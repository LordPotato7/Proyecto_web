from django.db import models

# Create your models here.

class Producto(models.Model):
    nombre = models.CharField(max_length=50)
    precio = models.IntegerField()
    categoria = models.CharField( max_length=50)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre
    
    
