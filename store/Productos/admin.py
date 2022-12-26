from django.contrib import admin


from Productos.models import Imagenes,Producto

# Register your models here.
admin.site.register(Producto)
admin.site.register(Imagenes)