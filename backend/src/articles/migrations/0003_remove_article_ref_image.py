# Generated by Django 3.2 on 2021-04-18 16:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_article_ref_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='ref_image',
        ),
    ]
