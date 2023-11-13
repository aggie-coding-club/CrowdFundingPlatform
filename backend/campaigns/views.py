from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Campaigns
from decimal import Decimal
from datetime import date
import datetime

# Implement error handling, parameter default values, etc. (very basic right now)

# Create your views here.
def say_hello(request):
    return HttpResponse('Hello World')


def get_campaigns(request):
    all_rows = Campaigns.objects.all()
    
    # Convert the data to a format suitable for JSON response
    data = [{'id': row.id, 'name': row.name, 'summary': row.summary, 'date_launch': row.date_launch, 
             'authors': row.authors, 'target': row.target, 'raised': row.raised, 'content': row.content, 
             'recipient': row.recipient_name, 'recipient_account': row.recipient_account} for row in all_rows]

    # Return the data as JSON response
    return JsonResponse(data, safe=False)


def create_campaign(request):
    # Only insert if all fields, otherwise throw error
    # Handle duplicate campaigns- force delete one before adding another
    name = request.GET.get('name', None)
    summary = request.GET.get('summary', None)
    # Change to today
    date_launch = request.GET.get('date_launch', None)
    authors = request.GET.get('authors', None)
    target = request.GET.get('target', None)
    raised = request.GET.get('raised', None)
    content = request.GET.get('content', None)
    recipient_name = request.GET.get('recipient_name', None)
    recipient_account = request.GET.get('recipient_account', None)

    new_campaign = Campaigns(
        name=name,
        summary=summary,
        date_launch=date_launch,
        authors=authors,
        target=target,
        raised=raised,
        content=content,
        recipient_name=recipient_name,
        recipient_account=recipient_account,
    )
    new_campaign.save()

    return HttpResponse("Successfully inserted!")


def get_recent_campaigns(request):
    num_rows = request.GET.get('rows', 6)
    recent_rows = Campaigns.objects.order_by('-date_launch')[:int(num_rows)]
    
    # Convert the data to a format suitable for JSON response
    data = [{'id': row.id, 'name': row.name, 'summary': row.summary, 'date_launch': row.date_launch, 
             'authors': row.authors, 'target': row.target, 'raised': row.raised, 'content': row.content, 
             'recipient': row.recipient_name, 'recipient_account': row.recipient_account} for row in recent_rows]

    # Return the data as JSON response
    return JsonResponse(data, safe=False)


def find_campaign(request):
    name = request.GET.get('name', None)
    # Check for invalid parameters
    authors = request.GET.get('authors', None)

    row = Campaigns.objects.filter(name=name, authors=authors).first()

    data = {'id': row.id, 'name': row.name, 'summary': row.summary, 'date_launch': row.date_launch, 
             'authors': row.authors, 'target': row.target, 'raised': row.raised, 'content': row.content, 
             'recipient': row.recipient_name, 'recipient_account': row.recipient_account}
    
    # Returns single campaign, not array
    return JsonResponse(data, safe=False)


def delete_campaign(request):
    name = request.GET.get('name', None)
    # Check for invalid parameters
    authors = request.GET.get('authors', None)
    rows = Campaigns.objects.filter(name=name, authors=authors)
    rows.delete()

    return HttpResponse("Successfully deleted!")


def find_all_user_campaigns(request):
    authors = request.GET.get('authors', None)

    rows = Campaigns.objects.filter(authors=authors)

    # Convert the data to a format suitable for JSON response
    data = [{'id': row.id, 'name': row.name, 'summary': row.summary, 'date_launch': row.date_launch, 
             'authors': row.authors, 'target': row.target, 'raised': row.raised, 'content': row.content, 
             'recipient': row.recipient_name, 'recipient_account': row.recipient_account} for row in rows]

    # Return the data as JSON response
    return JsonResponse(data, safe=False)


def update_campaign_details(request):
    name = request.GET.get('name', None)
    # Check for invalid parameters
    # Fix so that old values are default, instead of none
    authors = request.GET.get('authors', None)
    new_content = request.GET.get('content', None)
    new_summary = request.GET.get('summary', None)
    new_target = request.GET.get('target', None)

    row = Campaigns.objects.filter(name=name, authors=authors).first()
    row.summary = new_summary
    row.content = new_content
    row.target = new_target

    row.save()

    return HttpResponse("Successfully updated!")

def get_campaign_by_id(request):
    id = request.GET.get('id', None)

    row = Campaigns.objects.filter(id=id).first()

    data = {'id': row.id, 'name': row.name, 'summary': row.summary, 'date_launch': row.date_launch, 
             'authors': row.authors, 'target': row.target, 'raised': row.raised, 'content': row.content, 
             'recipient': row.recipient_name, 'recipient_account': row.recipient_account}
    
    # Returns single campaign, not array
    return JsonResponse(data, safe=False)


def add_funds(request):
    name = request.GET.get('name', None)
    # Check for invalid parameters
    # Fix so that old values are default, instead of none
    authors = request.GET.get('authors', None)
    added = request.GET.get('added', 0)
    row = Campaigns.objects.filter(name=name, authors=authors).first()
    row.raised = row.raised + Decimal(added)
    
    row.save()

    return HttpResponse("Successfully updated!")


def insert_test_data(request):
    campaign1 = Campaigns(
        name="Campaign 1",
        summary="This is the summary for Campaign 3.",
        date_launch=date(2023, 11, 1),
        authors="Author 1",
        target=Decimal("1000.00"),
        raised=Decimal("500.00"),
        content="Content for Campaign 1.",
        recipient_name="Test",
        recipient_account="Test"
    )
    campaign1.save()

    campaign2 = Campaigns(
        name="Campaign 2",
        summary="This is the summary for Campaign 4.",
        date_launch=date(2023, 11, 2),
        authors="Author 2",
        target=Decimal("2000.00"),
        raised=Decimal("1000.00"),
        content="Content for Campaign 2.",
        recipient_name="Test",
        recipient_account="Test"
    )
    campaign2.save()
    return HttpResponse("blah")