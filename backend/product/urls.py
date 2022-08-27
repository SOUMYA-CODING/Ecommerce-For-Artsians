from django.urls import path
from . import views

urlpatterns = [
    path('categoryList/', views.CategoryList),
    path('categoryList/<int:pk>/', views.CategoryList),
    path('productList/', views.ProductList),
    path('productList/<int:pk>/', views.ProductList),
]
