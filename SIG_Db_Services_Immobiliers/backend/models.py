from flask_login import UserMixin

class User(UserMixin):
    def __init__(self, id, nom, email, role, password):
        self.id = id
        self.nom = nom
        self.email = email
        self.role = role
        self.password = password
