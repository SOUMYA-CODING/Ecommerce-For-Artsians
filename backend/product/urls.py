from django.urls import path
from . import views

urlpatterns = [
    path('categoryList/', views.CategoryList.as_view())
]
