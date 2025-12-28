from qgis.PyQt.QtWidgets import QMainWindow, QAction
from qgis.core import QgsProject
from postgis import charger_couche

class SigWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("SIG – Db Services Immobiliers")
        self.resize(1200, 800)

        self.menu = self.menuBar().addMenu("Couches")

        self.action_terrains = QAction("Afficher terrains", self)
        self.action_terrains.triggered.connect(self.afficher_terrains)
        self.menu.addAction(self.action_terrains)

        self.action_lots = QAction("Afficher lots", self)
        self.action_lots.triggered.connect(self.afficher_lots)
        self.menu.addAction(self.action_lots)

    def afficher_terrains(self):
        layer = charger_couche("terrains")
        QgsProject.instance().addMapLayer(layer)

    def afficher_lots(self):
        layer = charger_couche("lots")
        QgsProject.instance().addMapLayer(layer)
