from django.shortcuts import render
from django.http import HttpResponse
from decimal import Decimal
from datetime import date
import stripe

stripe.api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"

stripe.PaymentIntent.create(
  amount=1099,
  currency="usd",
  automatic_payment_methods={"enabled": True},
)

# Create your views here.

def say_hello(request):
    return HttpResponse('Hello World')

def credit_card_transaction(request):
    # Add Error handling
    campaign = request.GET.get('campaign_name', None)
    recipient = request.GET.get('recipient', None)
    donor = request.GET.get('donor', None)



    return HttpResponse('Successfully transferred funds!')


def debit_card_transaction(request):
    pass