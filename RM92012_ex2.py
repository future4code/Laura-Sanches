valor_bruto = float(input("Qual o valor da passagem?"))
categoria_assento = int(input("Qual a sua categoria? 1-Econômica / 2-Executiva / 3-Primeira classes"))
quantidade_viajantes = int(input("Quantas pessoas? Têm que ser da mesma casa."))

if categoria_assento == 1 and quantidade_viajantes == 2:
    valor_desconto = valor_bruto * (3/100)
    valor_liquido = valor_bruto - valor_desconto
    print("O valor do desconto é de: ", valor_desconto,"R$")
    print("O valor líquido é de: ", valor_liquido,"R$")
elif categoria_assento == 1 and quantidade_viajantes == 3:
    valor_desconto = valor_bruto * (4/100)
    valor_liquido = valor_bruto - valor_desconto
    print("O valor do desconto é de: ", valor_desconto,"R$")
    print("O valor líquido é de: ", valor_liquido,"R$")
elif categoria_assento == 1 and quantidade_viajantes >= 4:
    valor_desconto = valor_bruto * (5/100)
    valor_liquido = valor_bruto - valor_desconto
    print("O valor do desconto é de: ", valor_desconto,"R$")
    print("O valor líquido é de: ", valor_liquido,"R$")
elif categoria_assento == 2 and quantidade_viajantes == 2:
    valor_desconto = valor_bruto * (5/100)
    valor_liquido = valor_bruto - valor_desconto
    print("O valor do desconto é de: ", valor_desconto,"R$")
    print("O valor líquido é de: ", valor_liquido,"R$")
elif categoria_assento == 2 and quantidade_viajantes == 3:
    valor_desconto = valor_bruto * (7/100)
    valor_liquido = valor_bruto - valor_desconto
    print("O valor do desconto é de: ", valor_desconto,"R$")
    print("O valor líquido é de: ", valor_liquido,"R$")
elif categoria_assento == 2 and quantidade_viajantes >= 4:
    valor_desconto = valor_bruto * (8/100)
    valor_liquido = valor_bruto - valor_desconto
    print("O valor do desconto é de: ", valor_desconto,"R$")
    print("O valor líquido é de: ", valor_liquido,"R$")
elif categoria_assento == 3 and quantidade_viajantes == 2:
    valor_desconto = valor_bruto * (10/100)
    valor_liquido = valor_bruto - valor_desconto
    print("O valor do desconto é de: ", valor_desconto,"R$")
    print("O valor líquido é de: ", valor_liquido,"R$")
elif categoria_assento == 3 and quantidade_viajantes == 3:
    valor_desconto = valor_bruto * (15/100)
    valor_liquido = valor_bruto - valor_desconto
    print("O valor do desconto é de: ", valor_desconto,"R$")
    print("O valor líquido é de: ", valor_liquido,"R$")
elif categoria_assento == 3 and quantidade_viajantes >= 4:
    valor_desconto = valor_bruto * (20/100)
    valor_liquido = valor_bruto - valor_desconto
    print("O valor do desconto é de: ", valor_desconto,"R$")
    print("O valor líquido é de: ", valor_liquido,"R$")
else:
    print("Digite novamente os dados.")