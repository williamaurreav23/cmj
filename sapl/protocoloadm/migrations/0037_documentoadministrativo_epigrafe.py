# -*- coding: utf-8 -*-
# Generated by Django 1.11.24 on 2019-09-19 18:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('protocoloadm', '0036_auto_20190919_1044'),
    ]

    operations = [
        migrations.AddField(
            model_name='documentoadministrativo',
            name='epigrafe',
            field=models.CharField(blank=True, max_length=1000, verbose_name='Epigrafe / Título'),
        ),
    ]
