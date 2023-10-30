from .models import *
from .serializers import StudentSerializer
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


# Create your views here.
# class StudentList(ListAPIView):
#     queryset =Student.objects.all()
#     serializer_class = StudentSerializer

@api_view(['GET', 'POST'])
def StudentList(request):
    if request.method == "GET":
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return JsonResponse({'student': serializer.data})
    
    if request.method == "POST":
        serializer = StudentSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors)
        
@api_view(['GET', 'PUT', 'DELETE'])
def Details(request, id):
    try:
        student = Student.objects.get(pk=id)
    except Student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


    if request.method == 'GET':
        serializer = StudentSerializer(student)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = StudentSerializer(data = request.data, instance=Student.objects.get(id=request.data['id']))
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        
        Student.objects.filter(id=id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
