import { useSlots } from "../../context/SlotContext";

const ContextSlot = () => {
  const { value } = useSlots();

  return (
    <div className="p-20 flex flex-col gap-4 max-w-sm">
      <p className="text-base font-medium">Slot value: {value}</p>
      <SlotContent />
    </div>
  );
};

const SlotContent = () => {
  const { setValue } = useSlots();

  return (
    <button
      onClick={() => setValue((prev) => prev + 1)}
      className="bg-black/5 rounded-lg p-2 w-fit"
    >
      update slot value
    </button>
  );
};

export default ContextSlot;
