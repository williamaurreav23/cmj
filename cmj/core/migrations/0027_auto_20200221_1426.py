# -*- coding: utf-8 -*-
# Generated by Django 1.11.28 on 2020-02-21 17:26
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0026_bi_modified'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notificacao',
            name='user',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='notificacao_set', to=settings.AUTH_USER_MODEL, verbose_name='Usuário Notificado'),
        ),
    ]
