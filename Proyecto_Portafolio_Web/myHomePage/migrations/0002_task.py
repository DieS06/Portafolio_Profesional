# Generated by Django 5.0.2 on 2024-02-16 05:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myHomePage', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('of_project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myHomePage.project')),
            ],
        ),
    ]
