# -*- coding: utf-8 -*-
# Generated by Django 1.11.28 on 2020-04-06 13:38
from __future__ import unicode_literals

import django.contrib.postgres.fields.jsonb
import django.core.serializers.json
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('materia', '0067_materialegislativa_metadata'),
    ]

    operations = [
        migrations.AddField(
            model_name='proposicao',
            name='metadata',
            field=django.contrib.postgres.fields.jsonb.JSONField(blank=True, default=None, encoder=django.core.serializers.json.DjangoJSONEncoder, null=True, verbose_name='Metadados'),
        ),
    ]
