from django.shortcuts import render, redirect
from django.http import JsonResponse

from work_website.forms import *
from work_website.models import *


def index(request):
    return render(request, "work_website/index.html")


def about(request):
    return render(request, "work_website/about.html")


def contact_view(request):
    if request.method == "POST":
        form = ContactMessageForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({"success": True})
        else:
            return JsonResponse({"success": False, "errors": form.errors})
    else:
        form = ContactMessageForm()
    return render(request, "work_website/contact.html", {"form": form})


def projects_view(request):
    projects = Project.objects.all()
    return render(request, "work_website/projects.html", {"projects": projects})
