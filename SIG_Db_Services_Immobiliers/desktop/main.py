import sys
from qgis.core import QgsApplication
from PyQt5.QtWidgets import QApplication
from login import LoginWindow
from sig_window import SigWindow

QgsApplication.setPrefixPath("C:/Program Files/QGIS 3.34.0", True)
qgs = QgsApplication([], False)
qgs.initQgis()

app = QApplication(sys.argv)
login = LoginWindow()
login.show()
app.exec_()

if hasattr(login, "accepted") and login.accepted:
    window = SigWindow()
    window.show()
    sys.exit(app.exec_())

qgs.exitQgis()
