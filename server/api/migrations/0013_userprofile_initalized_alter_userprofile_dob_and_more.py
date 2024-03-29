# Generated by Django 5.0 on 2023-12-13 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_remove_org_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='Initalized',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='DOB',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='FName',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='LName',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='MName',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
    ]
