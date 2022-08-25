from unicodedata import category, name
from django.db import models


# Product Category
class ProductCategory(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name


# Products
class Product(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=25)
    description = models.TextField()
    price = models.FloatField()
    photo = models.ImageField(upload_to="product_images/")

    def __str__(self):
        return self.name
