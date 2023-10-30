from django.urls import path
from api import views

urlpatterns = [
    path('student/', views.StudentList),
    path('student/<int:id>', views.Details, name='details'),
]
