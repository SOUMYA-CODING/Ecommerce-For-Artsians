from dataclasses import fields
from rest_framework import serializers
from . models import ProductCategory


class ProductCategorySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=25)

    class Meta:
        model = ProductCategory
        fields = ['id', 'name']
