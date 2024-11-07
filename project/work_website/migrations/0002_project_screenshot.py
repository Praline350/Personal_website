# Generated by Django 3.2.5 on 2024-11-06 10:54

from django.db import migrations, models
import django.db.models.deletion
import work_website.models


class Migration(migrations.Migration):

    dependencies = [
        ('work_website', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField()),
                ('status', models.CharField(choices=[('Deployed', 'deployed'), ('On working', 'ON'), ('School', 'school')], max_length=40)),
                ('web_link', models.URLField(blank=True, null=True)),
                ('creation_date', models.DateTimeField(blank=True, null=True)),
                ('github_link', models.URLField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Screenshot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=work_website.models.screenshot_upload_to)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='screenshot', to='work_website.project')),
            ],
        ),
    ]
