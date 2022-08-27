from . models import ProductCategory, Product
from . serializer import ProductCategorySerializer, ProductSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response


# Category List
@api_view(['GET', 'POST'])
def CategoryList(request):
    if request.method == "GET":
        list = ProductCategory.objects.all()
        serializer = ProductCategorySerializer(
            list, many=True, context={'request': request})
        return Response(serializer.data)


# Product List
@api_view(['GET', 'POST'])
def ProductList(request):
    if request.method == "GET":
        list = Product.objects.all()
        serializer = ProductSerializer(
            list, many=True, context={'request': request})
        return Response(serializer.data)
