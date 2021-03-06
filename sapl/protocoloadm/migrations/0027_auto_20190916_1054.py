# -*- coding: utf-8 -*-
# Generated by Django 1.11.24 on 2019-09-16 13:54
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import sapl.utils


class Migration(migrations.Migration):

    dependencies = [
        ('materia', '0056_auto_20190916_1054'),
        ('protocoloadm', '0026_documentoadministrativo_data_ultima_atualizacao'),
    ]

    operations = [
        migrations.AddField(
            model_name='documentoadministrativo',
            name='materia',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='materia.MateriaLegislativa'),
        ),
        migrations.AlterField(
            model_name='documentoacessorioadministrativo',
            name='arquivo',
            field=sapl.utils.PortalFileField(blank=True, null=True, storage=sapl.utils.OverwriteStorage(), upload_to=sapl.utils.texto_upload_path, verbose_name='Arquivo'),
        ),
        migrations.AlterField(
            model_name='documentoadministrativo',
            name='texto_integral',
            field=sapl.utils.PortalFileField(blank=True, null=True, storage=sapl.utils.OverwriteStorage(), upload_to=sapl.utils.texto_upload_path, verbose_name='Texto Integral'),
        ),
    ]
