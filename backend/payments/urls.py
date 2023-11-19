from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.say_hello),
    path('credit_card_transaction/', views.credit_card_transaction),
    path('payment_intent/', views.payment_intent),
]