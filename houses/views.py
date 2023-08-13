from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from houses.models import Client, Houses, Agent, Land
from .serializers import HousesSerializer, ClientSerializer, AgentSerializer, LandSerializer
from django.http import Http404
from rest_framework.decorators import parser_classes

# Create your views here.


class HouseList(APIView):
    def get(self, request):
        houses = Houses.objects.all()
        serializer = HousesSerializer(houses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = HousesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    

    
    
class HouseDetail(APIView):
    def get_object(self, pk):
        try:
            return Houses.objects.get(pk=pk)
        except Houses.DoesNotExist:
            return Response({
                "Error": "Object does not exist"
            })
        
    def get(self, request, pk):
        house = self.get_object(pk)
        serializer = HousesSerializer(house)
        return Response(serializer.data)
        
    def put(self, request, pk):
        house = self.get_object(pk)
        serializer = HousesSerializer(house, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)     
    
    def delete(self, request, pk):
           house = self.get_object(pk)
           house.delete()
           return Response(status=status.HTTP_204_NO_CONTENT)
       
       
       
class LandList(APIView):
    def get(self, request):  
        lands = Land.objects.all()
        serializer = LandSerializer(lands, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = LandSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class LandDetail(APIView):
    def get_object(self, pk):
        try: 
            return Land.objects.get(pk=pk)
        except Land.DoesNotExist:
            return Http404
        
    def get(self, request, pk):
        land = self.get_object(pk)
        serializer = LandSerializer(land)
        return Response(serializer.data)
    
    def put(self, request, pk):
        land = self.get_object(pk)
        serializer = LandSerializer(land, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        land = self.get_object(pk)
        land.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    
        
    
           
        
        
class AgentList(APIView):
    def get(self, request):
        agents = Agent.objects.all()
        serializer = AgentSerializer(agents, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = AgentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   
    
    
class AgentDetail(APIView):
    def get_object(self, pk):
        try:
            return Agent.objects.get(pk=pk)
        except Agent.DoesNotExist:
            raise Http404
        
    def get(self, request, pk):
        agent = self.get_object(pk)
        serializer = AgentSerializer(agent)
        return Response(serializer.data)
    
    def put(self, request, pk):
        agent = self.get_object(pk)
        serializer = AgentSerializer(agent, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        agent = self.get_object(pk)
        agent.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)   
    
    
class ClientList(APIView):
    def get(self, request):
        clients = Client.objects.all()
        serializer = ClientSerializer(clients, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ClientDetail(APIView):
    def get_object(self, pk):
        try:   
            return Client.objects.get(pk=pk)
        except Client.DoesNotExist:
            raise Http404
        
    def get(self, request, pk):
        client = self.get_object(pk)
        serializer = ClientSerializer(client)
        return Response(serializer.data)
    
    def put(self, request, pk):
          client = self.get_object(pk)
          serializer = ClientSerializer(client, data=request.data)
          if serializer.is_valid():
              serializer.save()
              return Response(serializer.data, status=status.HTTP_201_CREATED)
          return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
      
    def delete(APIView):
        client = self.get_object(pk)
        client.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)  
            