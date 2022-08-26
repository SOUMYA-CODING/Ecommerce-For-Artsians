from django.urls import path
from . import views

urlpatterns = [
    path('categoryList/', views.CategoryList.as_view()),
    path('productList/', views.ProductList.as_view()),
    path('ProList/', views.ProList),
]
