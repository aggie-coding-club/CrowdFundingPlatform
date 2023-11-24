from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from decimal import Decimal
from datetime import date
import stripe

# Create your views here.

def say_hello(request):
    return HttpResponse('Hello World')


def payment_intent(request):

    stripe.api_key = "sk_test_51O90DOFfT6IQyyJPX2GRBIuSY60BOAS5PCKflhvjyTE9xufUx7jLgxOvuKWTm3nM2iYkLiUemlTZGVzbe6O4r0iS00VjaU9XXo"
    account = request.GET.get('account', '')

    intent = stripe.PaymentIntent.create(
        amount=100,
        currency="usd",
        automatic_payment_methods={"enabled": True},
        stripe_account=account,
    )
    
    print(intent.client_secret)
    return JsonResponse({'client_secret': intent.client_secret})


def update_intent(request):
    stripe.api_key = "sk_test_51O90DOFfT6IQyyJPX2GRBIuSY60BOAS5PCKflhvjyTE9xufUx7jLgxOvuKWTm3nM2iYkLiUemlTZGVzbe6O4r0iS00VjaU9XXo"
    
    new_amount = request.GET.get('donation', '100')
    id = request.GET.get('id', '')
    account = request.GET.get('account', '')

    if new_amount == '':
        new_amount = 100
    else:
        new_amount = int(float(new_amount) * 100)

    #print(new_amount)
    #print(client_secret)

    stripe.PaymentIntent.modify(
        id=id,
        amount=new_amount,
        stripe_account=account,
    )

    return JsonResponse({'message': 'Successfully Updated!'})

    