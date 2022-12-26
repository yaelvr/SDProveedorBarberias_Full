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
    #productos = list(Producto.objects.filter(Q(nombre__icontains=nombre)).values())
    Allproducts=list(Producto.objects.values())
    if len(Allproducts) > 0:
        data = {'message': "Succes", 'productos': Allproducts}
    else:
        data = {'message': "Product Not Found"}
    return JsonResponse(data)