from django.contrib import admin
from houses.models import Houses, Agent, Client, Land
# Register your models here.
@admin.register(Houses)
class HousesModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'house_title', 'location', 'bedrooms', 'bathrooms', 'sqr_feet', 'pricing_in_dollars', 'category', 'rating']
@admin.register(Land)    
class LandModelAdmin(admin.ModelAdmin):
    list_display = ['land_title', 'location', 'county', 'land_category', 'date_created', 'price']    
    
@admin.register(Agent)
class AgentAdminModel(admin.ModelAdmin):
    list_display = [ 'agent_name', 'agent_address', 'agent_id']
    
@admin.register(Client)    
class ClientAdminModel(admin.ModelAdmin):
    list_display = ['client_name', 'client_id', 'client_address', 'phone_number', 'email_address']    