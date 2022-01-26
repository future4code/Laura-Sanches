Assinatura = int(input("Qual o seu tipo de assinatura? 1-Basic / 2-Silver / 3-Gold / 4-Platinum?"))
Faturamento = float(input("Qual o valor do seu faturamento anual?"))

if Assinatura == 1:
    valor_final = Faturamento * (30/100)
    print("Você deve me pagar 30% da sua fatura..")
elif Assinatura == 2:
    valor_final = Faturamento * (20/100)
    print("Você deve me pagar 20% da sua fatura.")
elif Assinatura == 3:
    valor_final = Faturamento * (10/100)
    print("Você deve me pagar 10% da sua fatura.")
else:
    valor_final = Faturamento * (5/100)
    print("Você deve me pagar 5% da sua fatura.")

print("O valor final a me pagar é {}" .format(valor_final))