//typeof type
const userName: string = "kamylle"
const userName2: typeof userName = 'Caio'

//quando queremos comparar o valor da nossa 2ª variavel com a primeira, usamos o operador typeof e o nome da primeira var


//indexed access type
type Truck2 = {km: number, kg:number, description: string}

type Km = Truck2['kg']
type Kg = Truck2 ['kg']
type Desc = Truck2 ['description'] //é diferente do uso com o keyof type, pois ele retorna apenas uma propriedade, ja o keyof retorna todas as propriedades no objeto tipado

const newTruck: Truck2 = {
    km: 1000,
    kg: 2000,
    description: 'Truck with low kilograms.'
}

function showKm(km: Km, kg: Kg, description: Desc){
    console.log(`Km: ${km}, Kg: ${kg}, Description: ${description}`)

}

showKm(newTruck.km, newTruck.kg, newTruck.description)


