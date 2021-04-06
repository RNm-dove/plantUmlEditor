import { UML } from 'plantuml-parser';

type DiagramConstructor = {
  type: string;
  path: string;
  tokens: UML[];
};
export class Diagram {
  // keep plantUML document as parse object.
  private type: string;

  private path: string;

  private tokens: UML[];

  constructor(args: DiagramConstructor) {
    // TODO:
    this.type = args.type;
    this.path = args.path;
    this.tokens = args.tokens;
  }
}
