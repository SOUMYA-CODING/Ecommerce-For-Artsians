from django.urls import path
from . import views

urlpatterns = [
    # path('categoryList/', views.CategoryList),
    # path('categoryList/<int:id>', views.CategoryList),

    # path('productList/', views.ProductList),
    # path('productList/<int:id>', views.ProductList),
    # path('data/', views.data.as_view()),
    # path('productList/', views.ProductList.as_view()),
    path('categoryList/', views.CategoryList.as_view()),
    path('productList/', views.ProductList.as_view()),
]
