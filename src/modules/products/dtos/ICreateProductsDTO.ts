export default interface ICreateAppointmentDTO{
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
  promocao?: number;
  preco_promocao?: number;
  ativo: number;
}