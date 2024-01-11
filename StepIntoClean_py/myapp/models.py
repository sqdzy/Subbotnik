from django.db import models


class User(models.Model):
    userName = models.CharField(max_length=200, unique=True)
    userPassword = models.CharField(max_length=200)
class Marker(models.Model):
    markerName = models.CharField(max_length=200)
    description = models.TextField()
    pollutionLevel = models.CharField(
        max_length=20,
        choices=[
            ('smallTrash', 'Мелкий мусор'),
            ('largeTrash', 'Крупный мусор'),
            ('dump', 'Свалка'),
        ],
    )
    photo = models.ImageField(upload_to='photos/')
    latitude = models.TextField()
    longitude = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, to_field='userName')



