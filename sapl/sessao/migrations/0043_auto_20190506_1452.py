# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-05-06 17:52
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sessao', '0042_merge_20190612_0925'),
    ]

    database_operations = [
        migrations.AlterModelTable('Bancada', 'parlamentares_bancada'),
        migrations.AlterModelTable('CargoBancada', 'parlamentares_cargobancada')
    ]

    state_operations = [
        migrations.DeleteModel('Bancada'),
        migrations.DeleteModel('CargoBancada')
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=database_operations,
            state_operations=state_operations
        ),
        migrations.RunSQL(
            """UPDATE django_content_type SET app_label = 'parlamentares'
            WHERE app_label = 'sessao'
            AND (model = 'bancada' OR model = 'cargobancada');"""
        ),
    ]
