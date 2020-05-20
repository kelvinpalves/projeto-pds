export class Veiculo {
    constructor(
        public id: string,
        public placa: string,
        public chassi: string,
        public ranavan: string,
        public anoModelo: Date,
        public anoFabricacao: Date
    ) { }
}