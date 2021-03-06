# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-03-22 14:18
from __future__ import unicode_literals

from django.conf import settings
import django.core.files.storage
from django.db import migrations, models

import cmj.sigad.models
import cmj.utils
from unipath import Path


class Migration(migrations.Migration):

    dependencies = [
        ('sigad', '0046_auto_20190123_1049'),
    ]

    operations = [
        migrations.AlterField(
            model_name='versaodemidia',
            name='file',
            field=models.FileField(blank=True, null=True, storage=django.core.files.storage.FileSystemStorage(base_url='DO_NOT_USE', location=Path(
                settings.MEDIA_PROTECTED_ROOT)), upload_to=cmj.sigad.models.media_path, validators=[cmj.utils.restringe_tipos_de_arquivo_midias], verbose_name='Mídia'),
        ),
    ]
