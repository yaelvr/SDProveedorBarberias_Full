from django.shortcuts import render


# Create your views here.
def Home(request):
    return render(request, 'home.html')

def Producto(request):
    return render(request, 'Producto-Details.html')