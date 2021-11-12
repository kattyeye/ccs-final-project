# Generated by Django 3.2.9 on 2021-11-12 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charities', '0011_alter_contribution_charity'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='charity',
            options={'verbose_name_plural': 'charities'},
        ),
        migrations.AddField(
            model_name='contribution',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='contrib_images'),
        ),
    ]