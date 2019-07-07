from django.db import models

# Create your models here.
class Subject(models.Model):
    subject_name = models.CharField(max_length=500, unique=True)
    def __str__(self):
        return self.subject_name

class Location(models.Model):
    location_name = models.CharField(max_length=500, unique=True)
    def __str__(self):
        return self.location_name

class Tutor(models.Model):
    first_name = models.CharField(max_length=500)
    last_name = models.CharField(max_length=500)
    email = models.EmailField(unique=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    price = models.IntegerField()
    def __str__(self):
        return self.first_name + " " + self.last_name


