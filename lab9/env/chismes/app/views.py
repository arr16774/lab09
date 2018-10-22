from app.models import Chismes
from app.serializers import ChismesSerializer
from rest_framework import generics
# Create your views here.

class CrearChisme(generics.ListCreateAPIView):
  queryset = Chismes.objects.all()
  serializer_class = ChismesSerializer
