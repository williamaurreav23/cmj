# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-06-19 17:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('agenda', '0005_evento_tipo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evento',
            name='fim',
            field=models.DateTimeField(blank=True, null=True, verbose_name='Fim'),
        ),
    ]
