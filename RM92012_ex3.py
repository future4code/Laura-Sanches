valor = int(input("Digite um número inteiro."))

anterior = 0
soma = 1
prox = 1

while soma < valor:
    soma = prox + anterior
    anterior = prox
    prox = soma

if soma == valor:
    print("Ação bem sucedida!")
else:
    print("A ação falhou.")