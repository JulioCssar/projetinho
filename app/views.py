from django.shortcuts import render

# Create your views here.

def login(request):
    return render(request, 'login.html')

def cadastro(request):
    return render(request, 'cadastro.html')

def pagina(request):
    return render(request, 'pagina.html')

def sobre(request):
    return render(request, 'sobre.html')