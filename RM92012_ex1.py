idade = int(input("Qual a sua idade?"))
bpm = int(input("Qual é o seu número de batimentos por minuto?"))

if idade > 65 and 50 <= bpm <= 60:
    print("Os seus batimentos encontram-se dentro da faixa adequada")
elif idade > 65 and bpm < 50:
    print("Os seus batimentos encontram-se abaixo da faixa adequada")
elif idade > 65 and bpm > 60:
    print("Os seus batimentos encontram-se acima da faixa adequada")
elif idade >= 18 and 70 <= bpm <= 80:
    print("Os seus batimentos encontram-se dentro da faixa adequada")
elif idade >= 18 and bpm < 70:
    print("Os seus batimentos encontram-se abaixo da faixa adequada")
elif idade >=18 and bpm > 80:
    print("Os seus batimentos encontram-se acima da faixa adequada")
elif idade >= 8 and 80 <= bpm <= 100:
    print("Os seus batimentos encontram-se dentro da faixa adequada")
elif idade >= 8 and bpm < 80:
    print("Os seus batimentos encontram-se abaixo da faixa adequada")
elif idade >= 8 and bpm > 100:
    print("Os seus batimentos encontram-se acima da faixa adequada")
elif idade <= 2 and 120 <= bpm <= 140:
    print("Os seus batimentos encontram-se dentro da faixa adequada")
elif idade <= 2 and bpm < 120:
    print("Os seus batimentos encontram-se abaixo da faixa adequada")
elif idade <= 2 and bpm > 140:
    print("Os seus batimentos encontram-se acima da faixa adequada")
else:
    print("Nós calculamos só a idade de até 2 anos e depois de 8 anos para cima.")