import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/snap_x.tact',
    options: {
        debug: true,
    },
};
