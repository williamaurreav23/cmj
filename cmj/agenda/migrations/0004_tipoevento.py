# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-05-22 16:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('agenda', '0003_auto_20180522_1337'),
    ]

    operations = [
        migrations.CreateModel(
            name='TipoEvento',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=255, verbose_name='Título')),
                ('descricao', models.TextField(verbose_name='Descrição')),
            ],
            options={
                'verbose_name_plural': 'Tipos de Eventos',
                'verbose_name': 'Tipo de Evento',
            },
        ),
    ]
