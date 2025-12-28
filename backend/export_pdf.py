from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

def exporter_plan(nom_fichier, titre):
    c = canvas.Canvas(nom_fichier, pagesize=A4)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(50, 800, "SIG – Db Services Immobiliers")
    c.drawString(50, 770, titre)
    c.drawString(50, 740, "Plan cadastral")
    c.drawString(50, 710, "Date : ")
    c.save()
