# Generated by Django 2.2.13 on 2020-08-14 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diarios', '0008_auto_20200505_1551'),
    ]

    operations = [
        migrations.AddField(
            model_name='tipodediario',
            name='principal',
            field=models.BooleanField(default=False, verbose_name='Principal'),
        ),
    ]
