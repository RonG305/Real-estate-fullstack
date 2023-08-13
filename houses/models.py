from django.db import models

# Create your models here.
class Estate(models.Model):
    estate_name = models.CharField(max_length=200)
    
class Agent(models.Model):
    agent_name = models.CharField(max_length=250)
    agent_address = models.CharField(max_length=200)
    agent_id = models.CharField(max_length=100)
    
    def __str__(self):
        return self.agent_name
        
    
class Client(models.Model):
    client_name =  models.CharField(max_length=200)
    client_id = models.CharField(max_length=100)
    client_address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=20)
    email_address = models.EmailField()
    message = models.TextField(blank=True, null=True)
    
    
    def __str__(self):
        return self.client_name  
          

class Houses(models.Model):
    HOUSE_CATEGORIES = [
        ('RENTAL', 'Rental'),
        ('FOR SALE', 'For Sale')
    ]
    
    house_title = models.CharField(max_length=250, null=False, blank=False)
    house_image = models.ImageField()
    location = models.CharField(max_length=250, null=False, blank=False)
    bedrooms = models.PositiveIntegerField()
    bathrooms = models.PositiveIntegerField()
    sqr_feet = models.DecimalField(decimal_places=2, max_digits=8, default=0.0)
    houseImage1 = models.ImageField()
    houseImage2 = models.ImageField()
    houseImage3 = models.ImageField()
    pricing_in_dollars = models.PositiveIntegerField()
    category = models.CharField(max_length=200, choices=HOUSE_CATEGORIES)
    description = models.TextField()
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE)
    rating = models.IntegerField()
    
    
    def __str__(self):
        return self.house_title
    
    
class Land(models.Model):
    LAND_CATEGORY = [
        ('Residential', 'Residential'),
        ('Agricultural', 'Agricultural'),
        ('Commercial', 'Commercial'),
        ('Industrial', 'Industrial'),
        ('Raw Land', 'Raw Land')
    ]
    land_title = models.CharField(max_length=200)
    land_image = models.ImageField()
    location = models.CharField(max_length=200)
    county = models.CharField(max_length=50)
    land_size = models.PositiveIntegerField(default=0)
    land_category = models.CharField(max_length=50, choices=LAND_CATEGORY)
    landImage1 = models.ImageField()
    landImage2 = models.ImageField()
    landImage3 = models.ImageField()
    price = models.PositiveIntegerField()
    date_created = models.DateField(auto_now_add=True)
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE)
    description = models.TextField()    
    
    def __str__(self):
        return f'{self.land_category} land at {self.location}'
    
# class BookTour(models.Model):
#     name = models.CharField(max_length=200)
#     email = models.EmailField()
#     phone_number = models.CharField(max_length=20)
#     message = models.TextField()    
    
#     def __str__(self):
#         return self.name
    

    
  
    