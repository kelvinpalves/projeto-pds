export class Veiculo {
    constructor(
        public id: string,
        public placa: string,
        public nome: string,
        public chassi: string,
        public renavan: string,
        public anoModelo: number,
        public anoFabricacao: number
    ) { }
}