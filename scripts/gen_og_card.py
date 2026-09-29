#!/usr/bin/env python3
"""Régénère og-card.png ExpertsIA — texte centré dans la zone de sécurité carrée.
LinkedIn/WhatsApp recadrent en carré centré (630x630 sur du 1200x630 = x 285-915).
Ancien design: texte aligné gauche x=80 → le "E" était rogné par le crop.
Design conservé: fond #0A1628, accent #38BDF8, barre bleue en bas."""

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
NAVY = (10, 22, 40)
CYAN = (56, 189, 248)
WHITE = (247, 250, 252)
GREY = (148, 163, 184)

BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

img = Image.new("RGB", (W, H), NAVY)
d = ImageDraw.Draw(img)

def text_w(draw, txt, font):
    b = draw.textbbox((0, 0), txt, font=font)
    return b[2] - b[0]

f_dash = ImageFont.truetype(BOLD, 22)
f_title = ImageFont.truetype(BOLD, 98)
f_sub = ImageFont.truetype(REG, 40)
f_url = ImageFont.truetype(REG, 30)

# Zone de sécurité carrée: x 285-915 → centre = 600
CX = W // 2

# Petit tiret accent au-dessus du titre (centré)
dash_w = 48
d.rectangle([CX - dash_w // 2, 118, CX + dash_w // 2, 132], fill=CYAN)

# Titre "ExpertsIA" centré
title = "ExpertsIA"
tw = text_w(d, title, f_title)
d.text((CX - tw // 2, 168), title, font=f_title, fill=WHITE)

# Sous-titre centré
sub = "AI Business Transformation"
sw = text_w(d, sub, f_sub)
d.text((CX - sw // 2, 330), sub, font=f_sub, fill=CYAN)

# URL centrée
url = "expertsia.dev"
uw = text_w(d, url, f_url)
d.text((CX - uw // 2, 425), url, font=f_url, fill=GREY)

# Barre bleue en bas (pleine largeur, 22px)
d.rectangle([0, H - 22, W, H], fill=CYAN)

img.save("/home/daliryc/Dev_projects/expertsia/public/og-card.png")
print("og-card.png régénérée — texte centré dans la zone de sécurité (x 285-915)")
# vérif: largeur du titre vs zone
tw_check = text_w(ImageDraw.Draw(Image.new("RGB", (10, 10))), title, f_title)
print(f"titre {tw_check}px, zone carrée 630px → marges {630 - tw_check}px dans le crop")
