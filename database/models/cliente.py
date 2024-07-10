""" CLIENTES = [
    {"id":1, "nome": "Daniel", "email": "Daniel@gmail.com"},
    {"id":2, "nome": "Samuel", "email": "Samuel@gmail.com"},
    {"id":3, "nome": "Jorge", "email": "Jorge@gmail.com"},
    {"id":4, "nome": "Cacilda", "email": "Cacilda@gmail.com"},
    {"id":5, "nome": "Irineu", "email": "Irineu@gmail.com"},
    {"id":6, "nome": "João", "email": "João@gmail.com"},
    {"id":7, "nome": "Diorges", "email": "Diorges@gmail.com"},
] """

from peewee import Model, CharField, DateTimeField
from database.database import db
import datetime

class Cliente(Model):
    nome = CharField()
    email = CharField()
    data_nascimento = CharField()
    cpf = CharField()
    telefone = CharField()
    data_registro = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = db