from rest_framework import serializers
from app.models import Chismes

class ChismesSerializer(serializers.ModelSerializer):
  class Meta:
    model = Chismes
    fields = ('id','titulo','descripcion')