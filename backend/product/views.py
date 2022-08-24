from . models import ProductCategory
from . serializer import ProductCategorySerializer
from rest_framework.generics import ListAPIView


class CategoryList(ListAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer
