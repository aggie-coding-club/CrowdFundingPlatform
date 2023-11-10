from django.db import models

# Create your models here.

class Campaigns(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False, default="")
    summary = models.TextField(null=False, default="")
    date_launch = models.DateField(null=False, default="2023-01-01")
    authors = models.CharField(max_length=100, null=False, default="")
    target = models.DecimalField(max_digits=10, decimal_places=2, null=False, default=0)
    raised = models.DecimalField(max_digits=10, decimal_places=2, null=False, default=0)
    recipient_name = models.CharField(max_length=100, null=False, default="")
    recipient_account = models.CharField(max_length=100, null=False, default="")
    content = models.TextField(null=False, default="")