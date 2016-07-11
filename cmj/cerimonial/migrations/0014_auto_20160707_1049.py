# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-07 13:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cerimonial', '0013_auto_20160705_1519'),
    ]

    operations = [
        migrations.AlterField(
            model_name='telefone',
            name='proprio',
            field=models.NullBooleanField(choices=[(None, '---------'), (True, 'Sim'), (False, 'Não')], verbose_name='Próprio?'),
        ),
        migrations.AlterField(
            model_name='telefone',
            name='telefone',
            field=models.CharField(max_length=100, verbose_name='Número do Telefone'),
        ),
    ]
