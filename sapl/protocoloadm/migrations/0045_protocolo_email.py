# -*- coding: utf-8 -*-
# Generated by Django 1.11.28 on 2020-03-25 03:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('protocoloadm', '0044_auto_20200130_1455'),
    ]

    operations = [
        migrations.AddField(
            model_name='protocolo',
            name='email',
            field=models.EmailField(blank=True, max_length=254, verbose_name='Email do Interessado'),
        ),
    ]
