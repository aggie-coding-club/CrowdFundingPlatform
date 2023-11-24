from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.say_hello),
    path('payment_intent/', views.payment_intent),
    path('update_intent/', views.update_intent),
]