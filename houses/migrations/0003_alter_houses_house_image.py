# Generated by Django 4.2.3 on 2023-07-19 06:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('houses', '0002_rename_num_of_rooms_houses_bathrooms_houses_bedrooms'),
    ]

    operations = [
        migrations.AlterField(
            model_name='houses',
            name='house_image',
            field=models.ImageField(upload_to=''),
        ),
    ]