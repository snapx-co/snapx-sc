import { toNano } from '@ton/core';
import { SnapX } from '../wrappers/SnapX';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const snapX = provider.open(await SnapX.fromInit());

    await snapX.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(snapX.address);

    // run methods on `snapX`
}
