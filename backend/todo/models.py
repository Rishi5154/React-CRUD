from django.db import models

# Create your models here.
class Todo(models.Model):
    # Task title
    title = models.CharField(max_length=120) 
    # Task details
    description = models.TextField() 
    # Status of a task
    completed = models.BooleanField(default=False)

    # toString() method for Todo object
    def _str_(self):
        return self.title
