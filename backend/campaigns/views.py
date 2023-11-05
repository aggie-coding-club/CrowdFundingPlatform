from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Campaigns
from decimal import Decimal
from datetime import date
import datetime

# Create your views here.
def say_hello(request):
    return HttpResponse('Hello World')

def get_campaigns(request):
    all_rows = Campaigns.objects.all()
    
    # Convert the data to a format suitable for JSON response
    data = [{'id': row.id, 'name': row.name, 'summary': row.summary, 'date_launch': row.date_launch, 
             'authors': row.authors, 'target': row.target, 'raised': row.raised, 'content': row.content} for row in all_rows]

    # Return the data as JSON response
    return JsonResponse(data, safe=False)


def create_campaign(request):

    # Add rest of parameters
    name = request.GET.get('name', None)
    summary = request.GET.get('summary', None)
    # Check for invalid parameters
    date_launch = request.GET.get('date_launch', None)
    authors = request.GET.get('authors', None)
    target = request.GET.get('target', None)
    raised = request.GET.get('raised', None)
    content = request.GET.get('content', None)

    new_campaign = Campaigns(
        name=name,
        summary=summary,
        date_launch=date_launch,
        authors=authors,
        target=target,
        raised=raised,
        content=content,
    )
    new_campaign.save()

    return HttpResponse("Successfully inserted!")
    


def find_campaign(request):

    # Add rest of parameters
    name = request.GET.get('name', None)
    authors = request.GET.get('authors', None)

    row = Campaigns.objects.filter(name=name, authors=authors).first()

    data = {'id': row.id, 'name': row.name, 'summary': row.summary, 'date_launch': row.date_launch, 
             'authors': row.authors, 'target': row.target, 'raised': row.raised, 'content': row.content}
    
    # Returns single campaign, not array
    return JsonResponse(data, safe=False)


def delete_campaign(request):
    pass 

def find_all_user_campaigns(request):
    
    pass 

def update_campaign_details(request):
    pass 

def add_funds(request):
    pass

def insert_test_data(request):
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