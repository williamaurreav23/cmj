# -*- coding: utf-8 -*-
# Generated by Django 1.11.24 on 2019-09-18 19:08
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0019_auto_20190917_2256'),
        ('protocoloadm', '0032_auto_20190918_0929'),
    ]

    operations = [
        migrations.AddField(
            model_name='statustramitacaoadministrativo',
            name='workspace',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='statustramitacaoadministrativo_set', to='core.AreaTrabalho', verbose_name='Área de Trabalho'),
        ),
    ]
