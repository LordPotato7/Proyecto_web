from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'nihonapp/index.html')

def contacto(request):
    return render(request, 'nihonapp/contactos.html')
def nosotros(request):
    return render(request, 'nihonapp/nosotros.html')
def teclados(request):
    return render(request, 'nihonapp/teclados.html')
def mouse(request):
    return render(request, 'nihonapp/mouse.html')

def tarjetas(request):
    return render(request, 'nihonapp/tarjetas.html')

def procesadores(request):
    return render(request, 'nihonapp/procesadores.html')

def almacenamiento(request):
    return render(request, 'nihonapp/almacenamiento.html')

def gabinetes(request):
    return render(request, 'nihonapp/gabinetes.html')

def placas(request):
    return render(request, 'nihonapp/placas.html')

def fuentes(request):
    return render(request, 'nihonapp/fuentes.html')

def politica(request):
    return render(request, 'nihonapp/politica.html')


def condiciones(request):
    return render(request, 'nihonapp/condiciones.html')

def envios(request):
    return render(request, 'nihonapp/envios.html')

def devoluciones(request):
    return render(request, 'nihonapp/devoluciones.html')