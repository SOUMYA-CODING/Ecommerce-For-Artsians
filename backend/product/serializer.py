from dataclasses import fields
from rest_framework import serializers
from . models import ProductCategory, Product


# Product Category Serializers
class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = "__all__"


# Product Serializers
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
