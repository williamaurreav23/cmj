# -*- coding: utf-8 -*-
# Generated by Django 1.11.24 on 2019-09-24 11:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('protocoloadm', '0040_auto_20190922_2125'),
    ]

    operations = [
        migrations.AlterField(
            model_name='documentoadministrativo',
            name='data_vencimento',
            field=models.DateField(blank=True, null=True, verbose_name='Data de Vencimento'),
        ),
    ]
