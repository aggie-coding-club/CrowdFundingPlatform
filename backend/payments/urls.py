from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.say_hello),
    path('database_test/', views.database_test),
    path('creditcardtransaction/', views.credit_card_transaction),
    path('database_insert/', views.database_insert)
]