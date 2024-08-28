
type ListItemProps = {
  id: number;
  item: string;
  removeItem: (id: number) => void;
};

function ListItem({ id, item, removeItem }: ListItemProps) {
  return (
    <div className="flex justify-between ">
      <div>{item}</div>
      <span onClick={() => removeItem(id)} style={{ cursor: "pointer" }}>
        x
      </span>
    </div>
  );
}

export default ListItem;
