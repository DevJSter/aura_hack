# Generated by Django 5.0 on 2023-12-13 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_job_org'),
    ]

    operations = [
        migrations.AddField(
            model_name='applications',
            name='Chosen',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='job',
            name='IsActive',
            field=models.BooleanField(default=True),
        ),
    ]
