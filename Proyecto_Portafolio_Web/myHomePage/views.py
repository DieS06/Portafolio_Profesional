from django.http import HttpResponse, JsonResponse
from.models import Project, Task
from django.shortcuts import get_object_or_404
# from reactpy import component, html
# from reactpy.backend.fastapi import configure
# from fastapi import FastAPI

# Create your views here.
def index(request):
    return HttpResponse("<h2>Inicio<h2>")

def hello(request, username):
    print(username)
    return HttpResponse("<h1>Hola %s</h1>" %username) 

def about(request):
    return HttpResponse('Sobre mi')

def projects(request):
    p = list(Project.objects.values())
    return JsonResponse(p, safe=False)

def tasks(request, id):
    # task = Task.objects.get(title=title)
    task = get_object_or_404(Task, id=id)
    return HttpResponse('Task: %s' %task.title)

# @component
# def nav_bar():
#     return html.nav("Inicio")