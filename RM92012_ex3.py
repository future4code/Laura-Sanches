segunda_feira = input("Insira a quantidade de votos para a live acontecer na segunda-feira.")
terça_feira = input("Insira a quantidade de votos para a live acontecer na terça-feira.")
quarta_feira = input("Insira a quantidade de votos para a live acontecer na quarta-feira.")
quinta_feira = input("Insira a quantidade de votos para a live acontecer na quinta-feira.")
sexta_feira = input("Insira a quantidade de votos para a live acontecer na sexta-feira.")

if segunda_feira > terça_feira and segunda_feira > quarta_feira and segunda_feira > quinta_feira and segunda_feira > sexta_feira:
    print("o dia com mais votos foi segunda-feira")
elif terça_feira > segunda_feira and terça_feira > quarta_feira and terça_feira > quinta_feira and terça_feira > sexta_feira:
    print("o dia com mais votos foi terça-feira")
elif quarta_feira > segunda_feira and quarta_feira > terça_feira and quarta_feira > quinta_feira and quarta_feira > sexta_feira:
    print("o dia com mais votos foi quarta-feira")
elif quinta_feira > segunda_feira and quinta_feira > terça_feira and quinta_feira > quarta_feira and quinta_feira > sexta_feira:
    print("o dia com mais votos foi quinta-feira")
else:
    print("o dia com mais votos foi sexta-feira")