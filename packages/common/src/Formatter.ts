export class Formatter {
  public static getDigits(str?: string, maxLength?: number) {
    if (!str) return "";
    return str.replace(/\D/g, "").slice(0, maxLength);
  }

  public static getFullDigits(str?: string) {
    if (!str) return "";
    return str.replace(/\D/g, "");
  }

  public static moneyNumberToDisplay(num: number) {
    return num.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  public static moneyNumberToDisplayCurrencyBRL(num: number) {
    return num.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  public static moneyStringToStore(num: string) {
    if (!num) return 0;

    const factor = num.includes(",") ? 1 : 100;
    const unmasked =
      parseFloat(num.replace(/\./g, "").replace(/,/g, ".")) / factor;
    const decimalPlaces = num.split(",")[1]?.length;

    if (decimalPlaces === 1) return unmasked / 10;
    if (decimalPlaces === 3) return unmasked * 10;
    return unmasked;
  }

  public static formatCNPJToDisplay(cnpj: string) {
    const onlyDigits = Formatter.getDigits(cnpj, 14);

    const length = onlyDigits.length;
    if (length === 11) {
      // Aplica mascara para CPF
      if (length < 3) return onlyDigits;
      let str = `${onlyDigits.slice(0, 3)}.${onlyDigits.slice(3, 6)}`;
      if (length < 7) return str;
      str += `.${onlyDigits.slice(6, 9)}`;
      if (length < 10) return str;
      return `${str}-${onlyDigits.slice(9)}`;
    } else {
      // Aplica mascara para CNPJ
      if (length < 3) return onlyDigits;

      let str = `${onlyDigits.slice(0, 2)}.${onlyDigits.slice(2, 5)}`;
      if (length < 6) return str;

      str += `.${onlyDigits.slice(5, 8)}`;
      if (length < 9) return str;

      str += `/${onlyDigits.slice(8, 12)}`;
      if (length < 13) return str;

      return `${str}-${onlyDigits.slice(12)}`;
    }
  }

  public static removeAcentos(texto?: string): string {
    if (!texto) return "";

    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  public static textToSlugUpper(text: string): string {
    return Formatter.removeAcentos(text).toUpperCase();
  }

  public static textToSlugLower(text: string): string {
    return Formatter.removeAcentos(text).toLowerCase();
  }

  public static maskcurrency(
    value: string | number | null | undefined
  ): string {
    if (!value) return "";

    if (typeof value === "number") value = value.toString();

    // Remove todos os caracteres que não sejam números
    value = value.replace(/\D/g, "");

    // Adiciona zeros à esquerda se necessário para garantir pelo menos três dígitos
    if (value.length === 1) {
      // value = "00" + value;
      value = value.padStart(3, "0");
    } else if (value.length === 2) {
      value = "0" + value;
    } else {
      // value = value.replace(/0/, "");
      // Remove zero inicial se presente
      value = value.replace(/^0(0)?/, "");
    }

    // Formata o valor para incluir duas casas decimais
    const integerPart = value.slice(0, -2);
    const decimalPart = value.slice(-2);

    // Adiciona os pontos de milhar
    const integerPartWithThousandSeparator = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    );

    // Retorna o valor formatado com vírgula como separador decimal
    return `${integerPartWithThousandSeparator},${decimalPart}`;
  }
}
