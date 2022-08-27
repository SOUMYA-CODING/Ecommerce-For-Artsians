import re
from . models import ProductCategory, Product
from . serializer import ProductCategorySerializer, ProductSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response


# Category List
@api_view(['GET', 'POST'])
def CategoryList(request, pk=None):
    if request.method == "GET":
        id = pk
        if id is not None:
            category_data = ProductCategory.objects.get(id=id)
            serializer = ProductCategorySerializer(category_data)
            return Response(serializer.data)

        list = ProductCategory.objects.all().order_by('name')
        serializer = ProductCategorySerializer(list, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = ProductCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Added'})
        return Response(serializer.errors)


# Product List
@api_view(['GET', 'POST'])
def ProductList(request, pk=None):
    if request.method == "GET":
        id = pk
        if id is not None:
            product_data = Product.objects.get(id=id)
            serializer = ProductSerializer(
                product_data, context={'request': request})
            return Response(serializer.data)

        list = Product.objects.all()
        serializer = ProductSerializer(
            list, many=True, context={'request': request})
        return Response(serializer.data)
