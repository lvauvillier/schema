import { objectType } from "@nexus/schema";
import { nodeType } from "./mixins";

export const UNKNOWN_NODE = objectType({
  name: "UNKNOWN_NODE",
  definition(t) {
    nodeType(t);
  },
});

export const Token = objectType({
  name: "Token",
  definition(t) {
    t.field("kind", {
      type: "SyntaxKind",
      resolve(root) {
        return root.kind;
      },
    });
  },
});

export const UnnamedNode = objectType({
  name: "UnnamedNode",
  definition(t) {
    t.string("text", { nullable: true });
  },
});

export const Identifier = objectType({
  name: "Identifier",
  definition(t) {
    nodeType(t);
    t.string("text");
  },
});

export const StringLiteralLike = objectType({
  name: "StringLiteralLike",
  definition: nodeType,
});

export const BindingPattern = objectType({
  name: "BindingPattern",
  definition: nodeType,
});

export const StringLiteral = objectType({
  name: "StringLiteral",
  definition: nodeType,
});

export const NumericLiteral = objectType({
  name: "NumericLiteral",
  definition: nodeType,
});

export const ComputedPropertyName = objectType({
  name: "ComputedPropertyName",
  definition: nodeType,
});

export const TypeReference = objectType({
  name: "TypeReference",
  definition(t) {
    nodeType(t);
    t.string("text", {
      nullable: true,
      resolve: (root) => {
        return root.typeName && (root.typeName as any).text;
      },
    });
    t.string("nameText", {
      nullable: true,
      resolve: (root) => {
        return root.typeName && (root.typeName as any).escapedText;
      },
    });
    t.list.field("typeArguments", { type: "Node", nullable: true });
  },
});

export const QualifiedName = objectType({
  name: "QualifiedName",
  definition(t) {
    nodeType(t);
  },
});
