from dataclasses import fields
from rest_framework import serializers
from . models import ProductCategory, Product


# Product Category Serializers
class ProductCategorySerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=25)

    class Meta:
        model = ProductCategory
        fields = "__all__"


# Product Serializers
class ProductSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(
        slug_field="name", queryset=ProductCategory.objects)
    name = serializers.CharField(max_length=25)
    description = serializers.CharField()
    price = serializers.FloatField()

    class Meta:
        model = Product
        fields = "__all__"
