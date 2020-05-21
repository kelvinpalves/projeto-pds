export class Imposto {
    constructor(
        public id: string,
        public documento: string,
        public dataPagamento: Date,
        public valor: string,
    ) { }
}