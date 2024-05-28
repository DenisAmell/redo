import React, { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";
import { IWidget } from "../../pages/MainPage";

interface IWidgetList<T> {
  items: IWidget[];
  renderItem: (item: IWidget) => React.ReactNode;
}

function WidgetList<T>(props: IWidgetList<T>) {
  const [array, setItems] = useState<number[]>(fillArray());

  const sensors = useSensors(
    useSensor(TouchSensor),
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function fillArray() {
    let size = props.items.length;
    let res = [];
    for (let i = 0; i < size; i++) {
      res[i] = i + 1;
    }
    return res;
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((array) => {
        const oldIndex = array.indexOf(Number(active.id));
        const newIndex = array.indexOf(Number(over.id));

        return arrayMove(array, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="widget-container">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={array}>
          {array.map((id) => (
            <SortableItem key={id} id={id} widget={props.items[id - 1]} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default WidgetList;
