# Generated by Django 3.2 on 2021-06-01 18:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('PFES6', '0004_rename_course_todo_courseid'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='courseId',
            new_name='course',
        ),
    ]