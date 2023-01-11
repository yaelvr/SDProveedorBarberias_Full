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

class User(models.Model):
    nombre=models.CharField(max_length=200)
    mail=models.CharField(max_length=250)
    contraseña=models.CharField(max_length=250)

class Compras_User(models.Model):
    usr_id=models.CharField(max_length=255)
    fecha=models.DateTimeField()

class Compras_producto (models.Model):
    id_compra=models.ForeignKey(Compras_User,on_delete=models.CASCADE)
    producto=models.ForeignKey(Producto,on_delete=models.CASCADE)
    cantidad=models.IntegerField()


