transacoes = int(input("Quantas transações financeiras você fez hoje?"))
i = 1
valor = 0

while i <= transacoes:
    valor_transacao = float(input("Quanto foram os valores de cada transação?"))
    valor = valor + valor_transacao
    i = i + 1

media = valor / transacoes

print("O valor total de transações por um dia foi de:", valor, "R$, com uma media de", media, "por transação.")