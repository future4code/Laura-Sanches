print("Esse é um programa que vai te dar o quanto de caloria que consumiu em um dia.")

alimento = int(input("Quantos alimentos você consumiu hoje?"))
i = 1
valor = 0

while i <= alimento:
    input("Qual alimento você comeu?")
    caloria = int(input("Quantas calorias possui esse alimento?"))
    valor = valor + caloria
    i = i + 1

print("Você ingeriu", valor, "calorias hoje.")