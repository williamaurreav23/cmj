# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-06-12 16:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('painel', '0005_painelconfig'),
    ]

    operations = [
        migrations.AddField(
            model_name='painelconfig',
            name='disparo_cronometro',
            field=models.BooleanField(choices=[(True, 'Sim'), (False, 'Não')], default=True, verbose_name='Cronômetros devem disparar com antecedência?'),
        ),
        migrations.AddField(
            model_name='painelconfig',
            name='tempo_disparo_antecedencia',
            field=models.DurationField(blank=True, default='00:00:30', null=True, verbose_name='Cronômetros devem disparar com quanto tempo de antecedência?'),
        ),
    ]
