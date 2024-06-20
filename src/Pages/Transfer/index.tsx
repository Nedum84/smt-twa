import { useQuery } from "@tanstack/react-query";
import { Address, comment, toNano } from "@ton/core";
import { CHAIN } from "@tonconnect/protocol";
import { TonConnectButton } from "@tonconnect/ui-react";
import PrimaryButton from "Components/Button/PrimaryButton";
import { useTonClient } from "Hooks/useTonClient";
import { useTonConnect } from "Hooks/useTonConnect";
import { useState } from "react";

export default function TransferPage() {
  const { sender, connected, network, wallet } = useTonConnect();
  const { client } = useTonClient();

  const [tonAmount, setTonAmount] = useState("0.01");
  const [commentText, setCommentText] = useState("");
  const [tonRecipient, setTonRecipient] = useState(
    "EQDD8dqOzaj4zUK6ziJOo_G2lx6qf1TEktTRkFJ7T1c_fPQb"
  );

  const { data, isFetching } = useQuery({
    queryKey: ["getBalance"],
    queryFn: async () => {
      if (!client || !wallet) return;
      return client?.getBalance(wallet as unknown as Address);
    },
    enabled: !!client && !!wallet,
  });

  console.log({ data, client, isFetching });

  return (
    <div className="px-12">
      <div className="flex justify-end">
        <div>
          <TonConnectButton />
          <div>{network ? (network === CHAIN.MAINNET ? "mainnet" : "testnet") : "N/A"}</div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-5">
          <label>Amount </label>
          <input
            className="flex-1 border p-2"
            style={{ marginRight: 8 }}
            type="number"
            value={tonAmount}
            onChange={(e) => setTonAmount(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <label>To </label>
          <input
            className="flex-1 border p-2"
            style={{ marginRight: 8 }}
            value={tonRecipient}
            onChange={(e) => setTonRecipient(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <label>Comment </label>
          <input
            className="flex-1 border p-2"
            style={{ marginRight: 8 }}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onClick={() => {}}
          />
        </div>
        <PrimaryButton
          title="Transfer"
          className="mt-6"
          disabled={!connected}
          onClick={async () => {
            await sender.send({
              to: Address.parse(tonRecipient),
              value: toNano(tonAmount),
              body: comment(commentText),
            });
          }}
        />
      </div>
    </div>
  );
}
