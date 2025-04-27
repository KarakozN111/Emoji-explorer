from django.urls import path
from .views import get_emojis

urlpatterns = [
    path('emojis/', get_emojis, name='get_emojis'),
]