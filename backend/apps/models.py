from django.db import models

# Create your models here.
class Todo(models.Model):
    task = models.CharField(verbose_name='タスク', max_length=180)
    timestamp = models.DateTimeField(
        verbose_name='タイムスタンプ', auto_now_add=False)
    completed = models.BooleanField(verbose_name='完了済み')

    class Meta:
        verbose_name_plural = 'Todo'
        # app_label = ''