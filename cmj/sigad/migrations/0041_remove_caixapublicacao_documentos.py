# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-05-16 20:04
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sigad', '0040_caixapublicacao_documentos'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='caixapublicacao',
            name='documentos',
        ),
    ]
