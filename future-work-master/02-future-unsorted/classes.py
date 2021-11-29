# class Dog():
#   '''A class for representing dogs'''
#   def __init__(self, name, breed, age):
#     self._name = name
#     self._breed = breed
#     self._age = age

#   # every method call associated with an instance automatically passes self
#   # self is a reference to the instance itself
#   def bark(self):
#     print(f"{self.name} says woof")
  
#   @property
#   def name(self):
#     return self._name
  
#   @property
#   def age(self):
#     return self._age

#   @age.setter
#   def age(self, value):
#     self._age = value

#   @property
#   def breed(self):
#     return self._breed

#   def __repr__(self):
#     return f'<Dog {self.name}-{self.breed}>'

# benny = Dog("Benny", "Terrier Mix", 4)
# benny.age = 5
# print(benny.age)

# print(benny.name)
# benny.bark()
# Dog.bark(benny)

# Dog.bark(benny)


class Animal():
  '''A super class for representing Animals'''
  def __init__(self, *args):
    self._name = args[0]
    self._age = args[1]
  
  @property
  def name(self):
    return self._name
  
  @property
  def age(self):
    return self._age
  
class Dog(Animal):
  def __init__(self, *args, **kwargs):
    print(args)
    print(kwargs)
    super().__init__(*args)
    self._breed = kwargs['breed']
  
  def bark(self):
    print(f"{self.name} says bark bark!")

benny = Dog("Benny", 4, "brown", breed="Terrier Mix")
benny.bark()
