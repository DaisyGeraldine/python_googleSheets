#!/usr/bin/python3
""" holds class User"""
""" ID, Nombre, Edad y Profesión """.
class User():
  id = ""
  nombre = ""
  edad = ""
  profesion = ""

  def __init__(self, id, nombre, edad, profesion, **kwargs):
      """Initialization of the base model"""
      if kwargs:
          for key, value in kwargs.items():
              setattr(self, key, value)
      else:
          self.id = id
          self.nombre = nombre
          self.edad = edad
          self.profesion = profesion

