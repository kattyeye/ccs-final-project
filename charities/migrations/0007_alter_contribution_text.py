# Generated by Django 3.2.9 on 2021-11-10 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charities', '0006_review_phase'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contribution',
            name='text',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
