from django.urls import path

from app import views

urlpatterns = [
    path('cadastro',views.cadastro),
    path('',views.login),
    path('pagina',views.pagina),
    path('sobre',views.sobre)
]