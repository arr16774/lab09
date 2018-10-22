from django.db import models

# Create your models here.

class Chismes(models.Model):
  titulo = models.CharField(max_length = 100)
  descripcion = models.CharField(max_length = 1000)
  creado = models.DateTimeField(auto_now_add = True)