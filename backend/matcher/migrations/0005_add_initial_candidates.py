from django.db import migrations

def create_candidates(apps, schema_editor):
    Candidate = apps.get_model("matcher", "Candidate")
    names = ["이재명", "김문수", "이준석", "김재연", "이낙연"]
    for name in names:
        Candidate.objects.get_or_create(name=name)

class Migration(migrations.Migration):

    dependencies = [
        ("matcher", "0004_candidate"),
    ]

    operations = [
        migrations.RunPython(create_candidates),
    ]
