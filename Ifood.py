def returnHighestScore(e):
    return e['Nota']


lugares = [
    {'Nome': 'O Mineiro', 'Nota': 4.2, 'Tipo': 'Brasileira', 'Distancia': 1.7, 'Tempo': '31-41', 'Frete': 'Gratis'},
    {'Nome': 'Amor Aos Pedacos', 'Nota': 4.3, 'Tipo': 'Brasileira', 'Distancia': 1.2, 'Tempo': '31-41',
     'Frete': 'Gratis'},
    {'Nome': 'We Coffee', 'Nota': 4.5, 'Tipo': 'Brasileira', 'Distancia': 1.8, 'Tempo': '31-41', 'Frete': 'Gratis'},
    {'Nome': 'Lamen Kazu', 'Nota': 4.8, 'Tipo': 'Brasileira', 'Distancia': 0.7, 'Tempo': '31-41', 'Frete': 'Gratis'},
    {'Nome': 'Mr. Pretzels', 'Nota': 4.7, 'Tipo': 'Brasileira', 'Distancia': 1.1, 'Tempo': '31-41',
     'Frete': ' R$ 4,99'},
    {'Nome': 'Brigaderia Shopping Paulista', 'Nota': 4.7, 'Tipo': 'Brasileira', 'Distancia': 1.2, 'Tempo': '31-41',
     'Frete': 'Gratis'},
]

lugares.sort(reverse=True, key=returnHighestScore)

for i in range(6):
    if lugares[i]['Nota'] == lugares[i - 1]['Nota']:
        if lugares[i]['Distancia'] < lugares[i - 1]['Distancia']:
            aux = lugares[i]
            lugares[i] = lugares[i - 1]
            lugares[i - 1] = aux

for i in range(6):
    print("_ _ _")
    print("|")
    print("|   {}            ".format(lugares[i]['Nome']))
    print("| * {} · {} · {} km             ".format(lugares[i]['Nota'], lugares[i]['Tipo'], lugares[i]['Distancia']))
    print("|   {} min · {}           ".format(lugares[i]['Tempo'], lugares[i]['Frete']))
    print("|")
    print("˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜")