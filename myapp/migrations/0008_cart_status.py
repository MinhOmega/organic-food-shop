# Generated by Django 3.1 on 2021-04-20 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0007_auto_20210420_1333'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='status',
            field=models.BooleanField(default=False),
        ),
    ]