export class Proposta
{
    id_proposta: string;
    id_contrato: string;
    canal_entrada: string;
    cpf_cliente: string;
    nome_cliente: string;
    produto: string;

    datas: Datas;
    status: Status;
    valores: Valores;
    comercial: Comercial;
    parceiro: Parceiro;
    agencia_indicacao: Agencia_Indicacao;
}

export class Datas
{
    envio: string;
    decisao_credito: string;
    emissao_contrato: string;
    assinatura_contrato: string;
    vencimento_credito: string;
}

export class Status
{
    global: string;
    id_credito: string;
    descricao_credito: string;
    id_contratacao: string;
    descricao_contratacao: string;
}

export class Valores
{
    credito_solicitado: number;
    prazo_solicitado: number;
    credito_aprovado: number;
    prazo_aprovado: number;
    taxa_juros_anual: number;
    total_credito: number;
}

export class Comercial
{
    canal: string;
    funcional_consultor: string;
}

export class Parceiro
{
    codigo: string;
    cnpj: string;
    nome_parceiro: string;
    cpf_corretor: string;
    nome_corretor: string;
    codigoPdv_com_corretor: string;
}

export class Agencia_Indicacao
{
    numero: string;
    funcional_gerente: string;
}