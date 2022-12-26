from django.db import models

# Create your models here.
class Producto(models.Model):
    nombre=models.CharField(max_length=200)
    precio=models.IntegerField()
    cantidad=models.IntegerField()
    descripcion=models.CharField(max_length=255)
    image_url=models.CharField(max_length=1024)

    def __str__(self):
        return f'Producto: {self.id} {self.nombre} '
class Imagenes(models.Model):
    belong_to=models.ForeignKey(Producto,on_delete=models.CASCADE)
    image_url=models.CharField(max_length=255)

    def __str__(self):
        return f'Imagen : {self.id}  {self.belong_to}'