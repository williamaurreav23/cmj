# Generated by Django 2.2.16 on 2020-10-15 15:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('diarios', '0010_vinculodocdiariooficial'),
    ]

    operations = [
        migrations.AddField(
            model_name='vinculodocdiariooficial',
            name='pagina',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='vinculodocdiariooficial',
            name='content_type',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.PROTECT, to='contenttypes.ContentType', verbose_name='Espécie'),
        ),
    ]
