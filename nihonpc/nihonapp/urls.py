from django.urls import path
from .views import *
urlpatterns = [
    path('index.html', home, name="index"),
    path('contactos.html', contacto, name="contacto"),
    path('nosotros.html', nosotros, name="nosotros"),
    path('teclados.html', teclados, name="teclados"),
    path('mouse.html', mouse, name="mouse"),
    path('tarjetas.html', tarjetas, name="tarjetas"),
    path('procesadores.html', procesadores, name="procesadores"),
    path('almacenamiento.html', almacenamiento, name="almacenamiento"),
    path('gabinetes.html', gabinetes, name="gabinetes"),
    path('placas.html', placas, name="placas"),
    path('fuentes.html', fuentes, name="fuentes"),
    path('politica.html', politica, name="politica"),
    path('condiciones.html', condiciones, name="condiciones"),
    path('envios.html', envios, name="envios"),
    path('devoluciones.html', devoluciones, name="devoluciones"),


]