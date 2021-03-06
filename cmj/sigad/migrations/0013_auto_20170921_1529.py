# -*- coding: utf-8 -*-
# Generated by Django 1.9.13 on 2017-09-21 18:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sigad', '0012_auto_20170919_1609'),
    ]

    operations = [
        migrations.AddField(
            model_name='classe',
            name='template_classe',
            field=models.IntegerField(choices=[(1, 'Listagem Simples em Linha'), (2, 'Galeria Pública de Albuns')], default=1, verbose_name='Template para a Classe'),
        ),
        migrations.AlterField(
            model_name='documento',
            name='template_doc',
            field=models.IntegerField(blank=True, choices=[(1, 'Notícia Pública'), (2, 'Galeria de Imagens')], default=None, null=True, verbose_name='Template para o Documento'),
        ),
    ]
