const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

const code = `function square(n) {
  return n * n;
}
n
`;

const ast = parser.parse(code);
let paramName = "n";
traverse(ast, {
    FunctionDeclaration(path) {
        const param = path.node.params[0];
        const paramName = param.name;
        param.name = "x";
        path.traverse(
            {
                Identifier(path) {
                    if (path.node.name === this.paramName) {
                        path.node.name = "x";
                    }
                },
            },
            { paramName }
        );
    },

    // Identifier(path) {
    //     if (path.node.name === paramName) {
    //         path.node.name = "x";
    //     }
    // },
});

let a = generate(ast);
console.log(a.code);
