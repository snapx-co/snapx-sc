import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { SnapX } from '../wrappers/SnapX';
import '@ton/test-utils';

describe('SnapX', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let snapX: SandboxContract<SnapX>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        snapX = blockchain.openContract(await SnapX.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await snapX.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: snapX.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and snapX are ready to use
    });
});
