# Generated by Django 4.2.6 on 2023-10-27 08:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Campaigns',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='', max_length=100)),
                ('summary', models.TextField(default='')),
                ('date_launch', models.DateField(default='2023-01-01')),
                ('authors', models.CharField(default='', max_length=100)),
                ('target', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('raised', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('content', models.TextField(default='')),
            ],
        ),
    ]
