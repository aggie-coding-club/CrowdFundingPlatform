from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from decimal import Decimal
from datetime import date
import stripe

# Create your views here.

def say_hello(request):
    return HttpResponse('Hello World')


def payment_intent(request):

    stripe.api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"
    #stripe.Account.create(type="standard")

    #stripe.AccountLink.create(
    #    account='{{22222}}',
    #    refresh_url="https://example.com/reauth",
    #    return_url="https://example.com/return",
    #    type="account_onboarding",
    #)
    
    intent = stripe.PaymentIntent.create(
        amount=1099,
        currency="usd",
        automatic_payment_methods={"enabled": True},
    #    stripe_account='{{CONNECTED_ACCOUNT_ID}}',
    )
    
    print(intent.client_secret)
    return JsonResponse({'client_secret': intent.client_secret})


def credit_card_transaction(request):
    # Add Error handling
    campaign = request.GET.get('campaign_name', None)
    recipient = request.GET.get('recipient', None)
    donor = request.GET.get('donor', None)


    return HttpResponse('Successfully transferred funds!')


def debit_card_transaction(request):
    pass