# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2019-09-05 12:15
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0038_auto_20190604_1109'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appconfig',
            name='documentos_administrativos',
        ),
    ]
