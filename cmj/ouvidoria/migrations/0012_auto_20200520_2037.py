# Generated by Django 2.2.12 on 2020-05-20 23:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ouvidoria', '0011_mensagemsolicitacao_metadata'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mensagemsolicitacao',
            name='owner',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='owner'),
        ),
        migrations.AlterField(
            model_name='mensagemsolicitacao',
            name='solicitacao',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='mensagemsolicitacao_set', to='ouvidoria.Solicitacao', verbose_name='Solicitação'),
        ),
        migrations.AlterField(
            model_name='solicitacao',
            name='areatrabalho',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='core.AreaTrabalho', verbose_name='Área de Trablho'),
        ),
    ]
