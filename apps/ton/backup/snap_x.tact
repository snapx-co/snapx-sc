import "@stdlib/ownable";
import "@stdlib/deploy";

message OpenTrade {
    traderAddress: Address;
    kolAddress: Address;
    channelId: String;
    postId: String;
    chainId: String;
    symbol: String;
    openPrice: Int;
    openAt: Int;
}

message CloseTrade {
    traderAddress: Address;
    kolAddress: Address;
    channelId: String;
    postId: String;
    chainId: String;
    symbol: String;
    closePrice: Int;
    closeAt: Int;
}

contract SnapX with Deployable, Ownable {

    owner: Address;

    // trade 정보를 기록해야한다.

    kolPool: map<Address, Int>;
    traderPool: map<Address, Int>;

    init() {
        self.owner = sender();
    }

    receive(openTrade: OpenTrade) {
        self.requireOwner();

        // 기록
    }

    receive(closeTrade: CloseTrade) {
        self.requireOwner();

        // KOL 보상풀에 토큰을 지급한다.
        // 보상할 토큰 계산

        kolRewardAmount = ton("1");
        self.kolPool.set(address(closeTrade.kolAddress), kolRewardAmount);

        // Trader 보상풀에 토큰을 지급한다.
        // 보상할 토큰 계산

        traderRewardAmount = ton("1");
        self.traderPool.set(address(closeTrade.traderRewardAmount), traderRewardAmount);
    }

    receive("balance") {
        // 요청자가 보상풀에서 수령할 토큰을 리턴한다.
        let sender = sender();
        let amount = self.traderPool.get(sender.address);

        return amount;
    }

    receive("claim") {
        // 요청자가 보상풀에서 수령할 토큰이 있는지 확인한다.
        // 수령할 토큰이 있으면, 토큰을 지급한다.

        let sender = sender();
        let amount = self.traderPool.get(sender.address);

        if (amount > 0) {

        }
    }
}
