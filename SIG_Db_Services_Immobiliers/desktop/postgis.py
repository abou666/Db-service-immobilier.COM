from qgis.core import QgsDataSourceUri, QgsVectorLayer
from config import *

def charger_couche(table, geom="geom"):
    uri = QgsDataSourceUri()
    uri.setConnection(DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD)
    uri.setDataSource("public", table, geom)
    layer = QgsVectorLayer(uri.uri(), table, "postgres")
    return layer
