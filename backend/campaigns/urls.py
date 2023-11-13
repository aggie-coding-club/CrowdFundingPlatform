from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.say_hello),
    path('get_campaigns/', views.get_campaigns),
    path('create_campaign/', views.create_campaign),
    path('find_campaign/', views.find_campaign),
    path('delete_campaign/', views.delete_campaign),
    path('find_all_user_campaigns/', views.find_all_user_campaigns),
    path('update_campaign_details/', views.update_campaign_details),
    path('add_funds/', views.add_funds),
    path('insert_test_data/', views.insert_test_data),
    path('get_recent_campaigns/', views.get_recent_campaigns),
    path('get_campaign_by_id/', views.get_campaign_by_id),
]