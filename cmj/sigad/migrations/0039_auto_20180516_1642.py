# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-05-16 19:42
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sigad', '0038_auto_20180410_1110'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='caixapublicacaodocumento',
            unique_together=set([]),
        ),
        migrations.RemoveField(
            model_name='caixapublicacaodocumento',
            name='caixapublicacao',
        ),
        migrations.RemoveField(
            model_name='caixapublicacaodocumento',
            name='documento',
        ),
        migrations.RemoveField(
            model_name='caixapublicacao',
            name='documentos',
        ),
        migrations.DeleteModel(
            name='CaixaPublicacaoDocumento',
        ),
    ]
