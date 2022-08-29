from . models import ProductCategory, Product
from . serializer import ProductCategorySerializer, ProductSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response


# Category List
@api_view(['GET', 'POST'])
def CategoryList(request, pk=None):
    # Get the ID
    id = pk
    # GET
    if request.method == "GET":
        if id is not None:
            category_data = ProductCategory.objects.get(id=id)
            serializer = ProductCategorySerializer(category_data)
            return Response(serializer.data)

        list = ProductCategory.objects.all().order_by('name')
        serializer = ProductCategorySerializer(list, many=True)
        return Response(serializer.data)

    # POST
    if request.method == "POST":
        serializer = ProductCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Added'})
        return Response(serializer.errors)


# Product List
@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def ProductList(request, pk=None):
    # Get the ID
    id = pk

    # GET
    if request.method == "GET":
        if id is not None:
            product_data = Product.objects.get(id=id)
            serializer = ProductSerializer(
                product_data, context={'request': request})
            return Response(serializer.data)

        list = Product.objects.all()
        serializer = ProductSerializer(
            list, many=True, context={'request': request})
        return Response(serializer.data)

    # POST
    if request.method == "POST":
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Success'})
        return Response(serializer.errors)


# Product Filter
@api_view(['GET'])
def ProductFilter(request, categoryID):
    catID = categoryID
    if catID is not None:
        list = Product.objects.filter(category=catID)
        serializer = ProductSerializer(
            list, many=True, context={'request': request})
        return Response(serializer.data)
    return Response({'msg': 'No data found'})
