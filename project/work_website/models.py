import os
from django.db import models
from PIL import Image

PROJECT_STATUS = [
    ("Deployed", "deployed"),
    ("On working", "ON"),
    ("School", "school"),
]


def screenshot_upload_to(instance, filename):
    # instance : l'objet modèle auquel le fichier est associé
    # filename : le nom du fichier téléchargé
    # Utilise le nom du projet pour construire le chemin d'upload

    project_name = instance.project.title.replace(
        " ", "_"
    )  # Remplace les espaces par des underscores
    screenshot_title = instance.title if instance.title else filename
    upload_path = f"projects/{project_name}_screenshots/{screenshot_title}"
    return upload_path


class ContactMessage(models.Model):
    title = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Objectives(models.Model):
    name = models.CharField(max_length=120)

    class Meta:
        verbose_name_plural = "Objectives"

    def __str__(self):
        return self.name


class Feature(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name


class Techno(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=120)
    subtitle = models.CharField(max_length=120, default="Project's subtitle")
    description = models.TextField()
    long_description = models.TextField(null=True, blank=True)
    objectives = models.ManyToManyField(Objectives, related_name="projects", blank=True)
    features = models.ManyToManyField(Feature, related_name="projects", blank=True)
    technos = models.ManyToManyField(Techno, related_name="projects", blank=True)
    status = models.CharField(max_length=40, choices=PROJECT_STATUS)
    web_link = models.URLField(null=True, blank=True)
    creation_date = models.DateTimeField(null=True, blank=True)
    github_link = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.title


class Screenshot(models.Model):
    title = models.CharField(max_length=120, null=True)
    project = models.ForeignKey(
        Project, related_name="screenshot", on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to=screenshot_upload_to)

    def __str__(self):
        return f"Screenshot for {self.project.title}"
