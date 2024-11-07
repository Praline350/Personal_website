from django.contrib import admin

from work_website.models import *


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ["title", "email", "submitted_at"]


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ["title", "status", "creation_date"]


@admin.register(Screenshot)
class ScreenshotAdmin(admin.ModelAdmin):
    list_display = ["title", "project"]


@admin.register(Objectives)
class ObjectivesAdmin(admin.ModelAdmin):
    list_display = [
        "name",
    ]


@admin.register(Feature)
class FeatureAdmin(admin.ModelAdmin):
    list_display = [
        "name",
    ]


@admin.register(Techno)
class TechnoAdmin(admin.ModelAdmin):
    list_display = [
        "name",
    ]
