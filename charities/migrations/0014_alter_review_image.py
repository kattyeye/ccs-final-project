# Generated by Django 3.2.9 on 2021-11-14 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charities', '0013_alter_review_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='image',
            field=models.ImageField(blank=True, default='default.jpg', upload_to='review_images'),
        ),
    ]
