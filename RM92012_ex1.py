Peso = float(input("Qual é o seu peso?"))
Altura = float(input("Qual é a sua altura?"))

IMC = Peso / (Altura * Altura)

if IMC >= 40:
    print("Acima do peso")
elif IMC >= 35:
    print("Obesidade grau II")
elif IMC >= 30:
    print("Obesidade grau I")
elif IMC >= 25:
    print("Sobrepeso")
elif IMC >= 18.50:
    print("Peso ideal")
elif IMC >= 17:
    print("Baixo peso grau I")
elif IMC >= 16:
    print("Baixo peso grau II")
else:
    print("Abaixo do peso")