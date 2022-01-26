playstation = int(input("Quantos votos o playstation teve?"))
xbox = int(input("Quantos votos o xbox teve?"))
nintendo = int(input("Quantos votos o nintendo teve?"))
votos = (playstation, xbox, nintendo)

if max(votos) == playstation:
    print("O console mais votado foi o Playstation.")
elif max(votos) == xbox:
    print("O console mais votado foi o Xbox.")
else:
    print("O console mais votado foi o Nintendo.")