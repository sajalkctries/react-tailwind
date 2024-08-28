import { useState, useEffect } from "react";
import { ShoppingItem } from "./types";
import ListItem from "./ListItem";

const initItems: ShoppingItem[] = JSON.parse(localStorage.getItem("lists") || "[]");

function ShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>(initItems);
  const [newItem, setNewItem] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  function addItem() {
    if (newItem.trim() === "") return;
    const newItemObject: ShoppingItem = {
      id: Date.now(),
      item: newItem,
    };
    setItems([...items, newItemObject]);
    setNewItem("");
  }

  function removeItem(id: number): void {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="w-[247px]">
      <div className="flex gap-3">
        <input
          className="border-2 border-black px-2"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem} className="border-2 border-black p-2">
          Add
        </button>
      </div>
      {items.map((i: ShoppingItem) => {
        return (
          <div key={i.id}>
            <ListItem id={i.id} item={i.item} removeItem={removeItem} />
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingList;
