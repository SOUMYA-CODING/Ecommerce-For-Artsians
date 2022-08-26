from . models import ProductCategory, Product
from . serializer import ProductCategorySerializer, ProductSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.generics import ListAPIView


class CategoryList(ListAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer


class ProductList(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


@api_view(['GET', 'POST'])
def ProList(request):
    if request.method == "GET":
        list = Product.objects.all()
        serializer = ProductSerializer(list, many=True)
        return Response(serializer.data)
