from django.db.models import Q
from django.http import JsonResponse
from django.shortcuts import render

from Productos.models import Producto


# Create your views here.
def Home(request):
    return render(request, 'home.html')


def Productox(request):
    return render(request, 'Producto-Details.html')


def Productos_Existencia(request):
    # productos = list(Producto.objects.filter(Q(nombre__icontains=nombre)).values())
    Allproducts = list(Producto.objects.values())
    if len(Allproducts) > 0:
        data = {'message': "Succes", 'productos': Allproducts}
    else:
        data = {'message': "Product Not Found"}
    return JsonResponse(data)


def showDetail(request, id):
    producto = Producto.objects.get(pk=id)
    return render(request, 'Producto-Details.html', {'producto': producto})


def Carrito(request):
    return render(request, 'carrito.html')


def CarritoPrueba(request):
    productos = list(Producto.objects.values())
    data={'productos': productos}
    return JsonResponse(data)
