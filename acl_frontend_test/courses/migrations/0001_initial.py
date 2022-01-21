# Generated by Django 3.2.11 on 2022-01-24 14:01

import autoslug.fields
from django.db import migrations, models
import django.db.models.deletion
import django.utils.text
import taggit.managers


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('taggit', '0003_taggeditem_add_unique_index'),
    ]

    operations = [
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('acronym', models.CharField(max_length=10)),
                ('image', models.ImageField(upload_to='organization_images')),
            ],
        ),
        migrations.CreateModel(
            name='Instructor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('slug', autoslug.fields.AutoSlugField(editable=False, populate_from='name', slugify=django.utils.text.slugify)),
                ('bio', models.CharField(max_length=1000)),
                ('profile_picture', models.ImageField(upload_to='profile_pictures')),
                ('organization', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='courses.organization')),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('code', models.CharField(max_length=10)),
                ('short_description', models.TextField(max_length=500)),
                ('full_description', models.TextField(max_length=1000)),
                ('image', models.ImageField(upload_to='course_images')),
                ('categories', taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags')),
                ('instructors', models.ManyToManyField(to='courses.Instructor')),
            ],
        ),
    ]
