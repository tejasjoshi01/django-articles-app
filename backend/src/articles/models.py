from django.db import models

# Create your models here.

class Article(models.Model):

     title = models.CharField(max_length=180)
     sub_title = models.CharField(max_length=256)
     content = models.TextField()
     # author = models.ForeignKey(User)
     created_at = models.DateTimeField(auto_now=True)

     def __str__(self):
          return self.title 
     
