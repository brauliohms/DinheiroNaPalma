import { v4 as uuid } from "uuid";

export default class Id {
  public static gerar(): string {
    return uuid();
  }
}
