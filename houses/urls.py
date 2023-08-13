from django.urls import path
from houses.views import HouseList, HouseDetail, AgentList, AgentDetail, ClientList, ClientDetail, LandList, LandDetail
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('houses/', HouseList.as_view() ),
    path('houses/<int:pk>/',HouseDetail.as_view() ),
    path('lands/', LandList.as_view() ),
    path('lands/<int:pk>/', LandDetail.as_view()),
    path('agents/', AgentList.as_view()),
    path('agents/<int:pk>/', AgentDetail.as_view()),
    path('client/', ClientList.as_view()),
    path('client/<int:pk>/', ClientDetail.as_view())
  
]