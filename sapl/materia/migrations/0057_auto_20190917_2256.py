# -*- coding: utf-8 -*-
# Generated by Django 1.11.24 on 2019-09-18 01:56
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('materia', '0056_auto_20190916_1054'),
    ]

    operations = [
        migrations.AlterField(
            model_name='despachoinicial',
            name='materia',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='despachoinicial_set', to='materia.MateriaLegislativa'),
        ),
    ]
