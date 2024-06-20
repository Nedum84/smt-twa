type Props = {
  value: number;
};
export default function CounterDisplay(props: Props) {
  return <div className="text-xl font-medium">{props.value}</div>;
}
