from django.shortcuts import render
from django.http import HttpResponse
from decimal import Decimal
from datetime import date

# Create your views here.

def say_hello(request):
    return HttpResponse('Hello World')

def database_test(request):
    pass

def database_insert(request):
    pass


def credit_card_transaction():
    pass
