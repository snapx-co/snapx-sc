import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/snapx_node.tact',
    options: {
        debug: true,
    },
};
