from . models import ProductCategory, Product
from . serializer import ProductCategorySerializer, ProductSerializer

# from rest_framework.decorators import api_view
# from rest_framework.response import Response

from rest_framework.generics import ListAPIView

# For Product Category
# @api_view(['GET', 'POST'])
# def CategoryList(request, pk=None):
#     if request.method == 'GET':
#         id = pk
#         if id is not None:
#             categoryData = ProductCategory.objects.get(id=id)
#             serializer = ProductCategorySerializer(categoryData)
#             return Response(serializer.data)

#         categoryList = ProductCategory.objects.all()
#         serializer = ProductCategorySerializer(categoryList, many=True)
#         return Response(serializer.data)

#     if request.method == "POST":
#         serializer = ProductCategorySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'message': 'Data inserted'})
#         return Response(serializer.errors)


# # For Products
# @api_view(['GET', 'POST', 'DELETE'])
# def ProductList(request, pk=None):
#     if request.method == 'GET':
#         id = pk
#         if id is not None:
#             productData = Product.objects.get(id=id)
#             serializer = ProductSerializer(productData)
#             return Response(serializer.data)

#         productList = Product.objects.all()
#         serializer = ProductSerializer(productList, many=True)
#         return Response(serializer.data)

class CategoryList(ListAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer


class ProductList(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
