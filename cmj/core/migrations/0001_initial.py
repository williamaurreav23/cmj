# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-06-15 22:07
from __future__ import unicode_literals

import cmj.core.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import image_cropping.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('parlamentares', '0021_merge'),
        ('auth', '0007_alter_validators_add_error_messages'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('first_name', models.CharField(blank=True, max_length=30, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=30, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('avatar', image_cropping.fields.ImageCropField(blank=True, null=True, upload_to='avatars/', validators=[cmj.core.models.avatar_validation], verbose_name='profile picture')),
                ('cropping', image_cropping.fields.ImageRatioField('avatar', '70x70', adapt_rotation=False, allow_fullsize=False, free_crop=False, help_text='Note that the preview above will only be updated after you submit the form.', hide_image_field=False, size_warning=False, verbose_name='cropping')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('objects', cmj.core.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Bairro',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=254, verbose_name='Bairro')),
            ],
            options={
                'verbose_name': 'Bairro',
                'verbose_name_plural': 'Bairros',
            },
        ),
        migrations.CreateModel(
            name='Cep',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero', models.CharField(max_length=8, unique=True, verbose_name='CEP')),
            ],
            options={
                'verbose_name': 'CEP',
                'verbose_name_plural': "CEP's",
            },
        ),
        migrations.CreateModel(
            name='Distrito',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=254, verbose_name='Nome do Distrito')),
            ],
            options={
                'verbose_name': 'Distrito',
                'verbose_name_plural': 'Distritos',
            },
        ),
        migrations.CreateModel(
            name='Logradouro',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=254, verbose_name='Logradouro')),
            ],
            options={
                'verbose_name': 'Logradouro',
                'verbose_name_plural': 'Logradouros',
            },
        ),
        migrations.CreateModel(
            name='RegiaoMunicipal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=254, verbose_name='Região Municipal')),
                ('tipo', models.CharField(choices=[('ZR', 'Zona Rural'), ('ZU', 'Zona Urbana')], default='ZU', max_length=2, verbose_name='Tipo da Região')),
                ('municipio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='regioes_municipais_set', to='parlamentares.Municipio', verbose_name='Municipio')),
            ],
            options={
                'verbose_name': 'Região Municipal',
                'verbose_name_plural': 'Regiões Municipais',
            },
        ),
        migrations.CreateModel(
            name='TipoLogradouro',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=254, unique=True, verbose_name='Tipo de Logradouro')),
            ],
            options={
                'verbose_name': 'Tipo de Logradouro',
                'verbose_name_plural': 'Tipos de Logradouros',
            },
        ),
        migrations.CreateModel(
            name='Trecho',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='modified')),
                ('lado', models.CharField(choices=[('NA', 'Não Aplicável'), ('AL', 'Ambos os lados'), ('LE', 'Lado Esquerdo'), ('LD', 'Lado Direito')], default='AL', max_length=2, verbose_name='Lado do Logradouro')),
                ('numero_inicial', models.PositiveIntegerField(blank=True, null=True, verbose_name='Número Inicial')),
                ('numero_final', models.PositiveIntegerField(blank=True, null=True, verbose_name='Número Final')),
                ('bairro', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='trechos_set', to='core.Bairro', verbose_name='Bairro')),
                ('cep', models.ManyToManyField(related_name='trechos_set', to='core.Cep', verbose_name='Cep')),
                ('distrito', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='trechos_set', to='core.Distrito', verbose_name='Distrito')),
                ('logradouro', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='trechos_set', to='core.Logradouro', verbose_name='Logradouro')),
                ('modifier', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='modifier')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='owner')),
                ('regiao_municipal', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='trechos_set', to='core.RegiaoMunicipal', verbose_name='Região Municipal')),
            ],
            options={
                'verbose_name': 'Trecho Logradouro',
                'verbose_name_plural': 'Trechos de Logradouro',
            },
        ),
        migrations.AddField(
            model_name='logradouro',
            name='tipo',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='logradouros_set', to='core.TipoLogradouro', verbose_name='Tipo de Logradouro'),
        ),
        migrations.AddField(
            model_name='distrito',
            name='regiao_municipal',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='distritos_set', to='core.RegiaoMunicipal', verbose_name='Região Municipal'),
        ),
        migrations.AddField(
            model_name='bairro',
            name='distrito',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bairros_set', to='core.Distrito', verbose_name='Distrito'),
        ),
        migrations.AddField(
            model_name='bairro',
            name='regiao_municipal',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bairros_set', to='core.RegiaoMunicipal', verbose_name='Região Municipal'),
        ),
        migrations.AlterUniqueTogether(
            name='trecho',
            unique_together=set([('logradouro', 'bairro', 'distrito', 'regiao_municipal', 'lado', 'numero_inicial', 'numero_final')]),
        ),
        migrations.AlterUniqueTogether(
            name='regiaomunicipal',
            unique_together=set([('nome', 'tipo', 'municipio')]),
        ),
        migrations.AlterUniqueTogether(
            name='logradouro',
            unique_together=set([('nome', 'tipo')]),
        ),
        migrations.AlterUniqueTogether(
            name='distrito',
            unique_together=set([('nome', 'regiao_municipal')]),
        ),
        migrations.AlterUniqueTogether(
            name='bairro',
            unique_together=set([('nome', 'distrito', 'regiao_municipal')]),
        ),
    ]