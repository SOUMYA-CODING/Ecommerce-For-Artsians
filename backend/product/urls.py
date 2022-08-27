from django.urls import path
from . import views

urlpatterns = [
    path('categoryList/', views.CategoryList),
    path('productList/', views.ProductList),
]
