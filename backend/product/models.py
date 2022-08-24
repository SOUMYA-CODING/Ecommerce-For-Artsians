from unicodedata import name
from django.db import models


# Product Category
class ProductCategory(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name
