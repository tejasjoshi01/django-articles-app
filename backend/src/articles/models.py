from django.db import models

class Article(models.Model):

     title = models.CharField(max_length=180)
     sub_title = models.CharField(max_length=256)
     content = models.TextField()
     # ref_image = models.ImageField(upload_to='images/', default='default.jpg')
     # author = models.ForeignKey(User)
     created_at = models.DateTimeField(auto_now=True)


     def __str__(self):
          return self.title 
     
