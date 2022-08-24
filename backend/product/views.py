from . models import ProductCategory, Product
from . serializer import ProductCategorySerializer, ProductSerializer
from rest_framework.generics import ListAPIView


class CategoryList(ListAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer


class ProductList(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
