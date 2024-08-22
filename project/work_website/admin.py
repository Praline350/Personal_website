from django.contrib import admin

from work_website.models import *

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['title', 'email', 'submitted_at']