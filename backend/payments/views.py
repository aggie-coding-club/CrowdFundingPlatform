from django.shortcuts import render
from django.http import HttpResponse
from .models import Campaigns
from decimal import Decimal
from datetime import date

# Create your views here.

def say_hello(request):
    return HttpResponse('Hello World')

def database_test(request):
    all_rows = Campaigns.objects.all()
    for row in all_rows:
        print(row)
    #return all_rows
    return HttpResponse('Hello')

def database_insert(request):
    campaign1 = Campaigns(
        name="Campaign 1",
        summary="This is the summary for Campaign 3.",
        date_launch=date(2023, 1, 1),
        authors="Author 1",
        target=Decimal("1000.00"),
        raised=Decimal("500.00"),
        content="Content for Campaign 1.",
    )
    campaign1.save()

    campaign2 = Campaigns(
        name="Campaign 2",
        summary="This is the summary for Campaign 4.",
        date_launch=date(2023, 2, 15),
        authors="Author 2",
        target=Decimal("2000.00"),
        raised=Decimal("1000.00"),
        content="Content for Campaign 2.",
    )
    campaign2.save()
    return HttpResponse("blah")


def credit_card_transaction():
    pass
