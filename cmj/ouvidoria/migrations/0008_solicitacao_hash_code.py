# -*- coding: utf-8 -*-
# Generated by Django 1.11.28 on 2020-02-20 19:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ouvidoria', '0007_auto_20190808_1653'),
    ]

    operations = [
        migrations.AddField(
            model_name='solicitacao',
            name='hash_code',
            field=models.TextField(blank=True, max_length=200, verbose_name='Hash de Acesso Anônimo'),
        ),
    ]
