from django.contrib import admin

from Productos.models import Imagenes, User, Producto, Compras_User, Compras_producto

# Register your models here.
admin.site.register(Producto)
admin.site.register(Imagenes)
admin.site.register(User)
admin.site.register(Compras_User)
admin.site.register(Compras_producto)
