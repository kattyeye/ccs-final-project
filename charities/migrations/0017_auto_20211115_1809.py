# Generated by Django 3.2.9 on 2021-11-15 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charities', '0016_alter_contribution_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contribution',
            name='in_dollars',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='contribution',
            name='in_hours',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]