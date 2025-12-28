from PyQt5.QtWidgets import QWidget, QLabel, QLineEdit, QPushButton, QVBoxLayout, QMessageBox
import requests

class LoginWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Connexion SIG – Db Services Immobiliers")
        self.resize(300, 200)

        layout = QVBoxLayout()
        self.email = QLineEdit()
        self.email.setPlaceholderText("Email")
        self.password = QLineEdit()
        self.password.setPlaceholderText("Mot de passe")
        self.password.setEchoMode(QLineEdit.Password)

        self.btn = QPushButton("Se connecter")
        self.btn.clicked.connect(self.login)

        layout.addWidget(QLabel("Authentification SIG – Db Services Immobiliers"))
        layout.addWidget(self.email)
        layout.addWidget(self.password)
        layout.addWidget(self.btn)
        self.setLayout(layout)

    def login(self):
        data = {"email": self.email.text(), "password": self.password.text()}
        r = requests.post("http://localhost:5000/api/connexion", json=data)
        if r.status_code == 200:
            QMessageBox.information(self, "Succès", "Connexion réussie")
            self.accepted = True
            self.close()
        else:
            QMessageBox.critical(self, "Erreur", "Identifiants incorrects")
