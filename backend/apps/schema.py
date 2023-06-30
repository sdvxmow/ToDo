import graphene
from graphene_django import DjangoObjectType, DjangoListField
from .models import Todo

class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = ("task", "timestamp", "completed")

class Query(graphene.ObjectType):
    todo_list = graphene.List(TodoType)

    def resolve_todo_list(self, info, **kwargs):
        return Todo.objects.all()
    
    todo_field = graphene.Field(
        TodoType, completed=graphene.Boolean(required=True))

    todo_list_field = DjangoListField(
        TodoType, completed=graphene.Boolean(required=True))

    def resolve_todo_field(self, info, **kwargs):
        value = kwargs.get('completed')
        print(value)
        return Todo.objects.filter(completed=value).first()

    def resolve_todo_list_field(self, info, **kwargs):
        value = kwargs.get('completed')
        return Todo.objects.filter(completed=value)